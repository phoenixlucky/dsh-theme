import { createReadStream, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import z from '@deepseek-ai/schemastery';

/** Persist the selected theme and every user-defined theme with this profile entry. */
export const Config = z.object({
	preference: z.string().default('system').volatile(),
	sidebarTransparency: z.number().min(0).max(100).default(0).volatile(),
	conversationTransparency: z.number().min(0).max(100).default(0).volatile(),
	// Frosted-glass strength for whatever wallpaper is active, built-in themes
	// included. It stores no image data: the client blurs the wallpaper layer it
	// owns, so every theme gains the effect without per-theme state.
	glass: z.number().min(0).max(100).default(0).volatile(),
	// The one local wallpaper a profile may keep. `accent` and `colorScheme` are
	// the only effect inputs: the stylesheet derives glass, borders, hover states
	// and the wallpaper atmosphere from them, so no per-theme CSS is involved.
	// The array stays declared for stored-config compatibility, but the gallery
	// writes at most one entry and ignores extras left by an older build; the
	// built-in wallpapers store nothing here at all.
	customThemes: z.array(z.object({
		id: z.string().max(64).default(''),
		name: z.string().max(60).default(''),
		// A local upload is stored inline as a `data:image/webp;base64,…` URL, so
		// this field carries a bounded image rather than a URL: the gallery's
		// encoder keeps the data URL under 1.9M characters (about 1.4 MB of WebP).
		wallpaper: z.string().max(2000000).default(''),
		accent: z.string().max(32).default('#5b7c99'),
		colorScheme: z.string().default('light')
	})).default([]).volatile().hidden()
});

/**
 * Route prefix for the licensed display font.
 *
 * The plugin asset route (`/plugins/<pkg>/assets/<file>`) only publishes the
 * image media types the Host allows, so a `.woff2` there answers 404 no matter
 * how the package maps `./assets/*`. Serving the font from a route this plugin
 * owns keeps one same-origin, content-revisioned URL that the browser may cache
 * forever, and leaves the wallpaper images on the Host route they already use.
 */
const FONT_ROUTE = '/theme-font';

/** Basename of the bundled font, as published in `lib/assets`. */
const FONT_FILE = 'guru-qiu-wan-760bf36ff908.woff2';

const FONT_PATH = fileURLToPath(new URL(`./assets/${FONT_FILE}`, import.meta.url));

/** Cache key for the immutable font bytes. */
const FONT_ETAG = `"${FONT_FILE}"`;

/** Send one plain-text answer, ending the response. */
function reject(res, status, message) {
	res.writeHead(status, {
		'content-type': 'text/plain; charset=utf-8',
		'cache-control': 'no-store',
		'x-content-type-options': 'nosniff'
	});
	res.end(message);
}

/** Stream the bundled font; `HEAD` reports the size without sending the body. */
function serveFont(req, res, size) {
	const headers = {
		'content-type': 'font/woff2',
		// The published filename carries a content hash, so the bytes never change
		// for a given URL.
		'cache-control': 'public, max-age=31536000, immutable',
		etag: FONT_ETAG,
		'content-length': String(size),
		'x-content-type-options': 'nosniff'
	};
	if (req.method === 'HEAD') {
		res.writeHead(200, headers);
		res.end();
		return;
	}
	res.writeHead(200, headers);
	const stream = createReadStream(FONT_PATH);
	stream.on('error', () => res.destroy());
	res.on('close', () => stream.destroy());
	stream.pipe(res);
}

/**
 * Serve the display font the stylesheet asks for.
 *
 * The route stays a prefix so a future font revision needs no code change, but
 * only files this package ships are answered: the trailing path is compared to
 * the published basename instead of being resolved against the filesystem.
 */
function fontHandler(req, res) {
	if (req.method !== 'GET' && req.method !== 'HEAD') {
		reject(res, 405, 'Method Not Allowed');
		return;
	}
	let pathname;
	try {
		pathname = new URL(String(req.url), 'http://x').pathname;
	} catch {
		reject(res, 400, 'Bad Request');
		return;
	}
	const name = pathname.startsWith(`${FONT_ROUTE}/`) ? pathname.slice(FONT_ROUTE.length + 1) : '';
	if (name !== FONT_FILE) {
		reject(res, 404, 'Not Found');
		return;
	}
	let size;
	try {
		size = statSync(FONT_PATH).size;
	} catch {
		reject(res, 404, 'Not Found');
		return;
	}
	if (req.headers['if-none-match'] === FONT_ETAG) {
		res.writeHead(304, { etag: FONT_ETAG, 'cache-control': 'public, max-age=31536000, immutable' });
		res.end();
		return;
	}
	serveFont(req, res, size);
}

/**
 * Mount the font route. The Host registers no font media type on the plugin
 * asset route, so this plugin publishes its own.
 *
 * The web server is optional here rather than a required injection: a
 * composition without one (a terminal app, a headless run) must still mount the
 * theme config, and a nested `ctx.inject` keeps the route bound to the server's
 * own lifetime instead of holding this plugin pending.
 *
 * Nothing in this path may fail the entry: the themes themselves are the
 * product, the font is an enhancement. A Host without nested injection, a route
 * that another plugin already claimed, or a server that never mounts all end in
 * the host text stack rather than a broken row.
 */
export function apply(ctx) {
	if (typeof ctx.inject !== 'function') return;
	ctx.inject(['webServer'], (ctx) => {
		try {
			ctx.effect(
				() => ctx.webServer.register({ kind: 'prefix', path: FONT_ROUTE, handler: fontHandler }),
				`dsh-theme: GET ${FONT_ROUTE}/${FONT_FILE}`
			);
		} catch (error) {
			ctx.logger?.warn?.(`dsh-theme: the ${FONT_ROUTE} route was not mounted; the theme keeps the host font stack`, error);
		}
	});
}
