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

/** Provides no host-side behavior. */
export function apply() {}
