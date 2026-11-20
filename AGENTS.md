# UI and asset guidelines

These rules apply to all future interface work in this plugin repository.

## Match the supplied design

- Compare the supplied reference with the current application before changing code. Implement its layout, colors, typography, spacing, surfaces, shadows, and imagery as closely as the existing host extension points allow.
- Preserve existing plugin behavior, settings, wallpaper selection, persistence, and interaction flows. Keep visual changes scoped to the active theme.
- Check a same-size browser preview against the reference and refine visible alignment, contrast, scale, and responsive behavior.

## Manage visual assets

- Store new raster assets under `public/assets/` in `icons/`, `images/`, or `illustrations/` according to their purpose. Use semantic filenames and optimize dimensions, transparency, and file size before adding them.
- Create new illustrations and icon artwork with image generation when available. Do not use a screenshot of the reference as a page asset.
- Do not introduce SVG, emoji, Unicode symbols, or third-party icon libraries as newly drawn UI icons. Reuse the host application's existing product icons. If this repository later adds its own UI icon components, centralize reusable icons in one semantic icon library.
- Include distributable assets in `package.json` and reference built plugin assets through the host asset loader.

### Seasonal character themes

- Use the character in the 金耀财神 (Golden God of Wealth) wallpaper as the identity reference for seasonal variants. Keep her face, long indigo hair, body proportions, anime rendering style, and right-side placement consistent; adapt only the outfit, props, lighting, and setting to the holiday.
- Preserve the character's signature whale motifs in every seasonal variant: whale-fin ears, a recognizable whale-tail accessory, and the small blue whale plush.
- Keep the existing wide wallpaper composition, with the character on the right and quieter space on the left for interface content. Match the current wallpaper dimensions and optimize the final artwork as WebP.
- Store semantic WebP source assets under `public/assets/images/`, include the runtime asset in the package's bundled assets, and reference it through the host asset loader. Keep the corresponding source and package asset copies in sync. **Exception for the eight built-in wallpapers (since 2026-11-20):** they ship inline in `lib/client.js` as `data:image/webp;base64,…` constants, so no wallpaper request reaches the Host asset route. Keep the source WebP at `assets/<theme>.wallpaper.webp` for README previews and the mirrored `public/assets/images/<theme>-wallpaper.webp`; do not add per-wallpaper copies under `lib/assets/`, and re-encode from the source rather than editing the Base64 by hand. Keep a wallpaper near 1672×941 and inside roughly 150–300 KB before encoding, because the Base64 grows the client bundle by 4/3 of the file size.
- When adding a seasonal theme, update the saved-preference schema, theme registration, gallery labels for every supported locale, theme-scoped wallpaper selectors, package metadata, previews, and English/Chinese documentation. Run `pnpm pack --dry-run` and confirm the wallpaper assets appear in the package listing.

## Implementation

- Follow the existing Cordis plugin structure and use documented host theme variables. Do not target generated CSS-module class names or alter unrelated application behavior to reproduce a visual detail.
- Keep styles and resources scoped to the theme id, preserve reduced-motion behavior, and use responsive limits for widths and decorations.
- Update relevant documentation when a visual variable or asset workflow changes. Keep this file as the default guidance for future UI and visual work.

## Interface effects

- Define reusable visual effect values as namespaced `--dsh-theme-effect-*` CSS variables at the component or active theme root. Keep motion duration and easing, hover lift and shadow, backdrop blur, glow, and gradient animation as separate tokens.
- Reuse the tokens across related states and components so hover, focus, selected, and modal feedback remain consistent. Keep decorative emphasis distinct from interaction feedback.
- Preserve clear `:focus-visible` feedback and disable or reduce decorative motion and transitions under `prefers-reduced-motion`.

## Custom theme images (applies to this repository, since 2026-11-20)

- Keep exactly one custom wallpaper per profile: the gallery has a single **Local upload** slot, one `customThemes` entry, and a slot id that survives artwork replacement. Built-in wallpaper themes store nothing but their selected id. Do not reintroduce a multi-theme custom collection.
- Treat the saved upload as durable across theme switches: selecting a built-in theme writes only `preference` and must never clear `customThemes`. Clearing is reserved for an explicit **Delete** or **Remove image**, so users can switch to a built-in palette and come back without losing the artwork.
- When several `customThemes` entries exist from an older build, register the one the saved preference names, otherwise the first; ignore the rest on read and collapse the array on the next save. Never let extras break the section or reset an applied theme on its own.
- Keep local uploads browser-side: decode with the browser's image pipeline, re-encode to WebP on a canvas, and store the `data:image/webp;base64,…` value in the theme's `wallpaper` field. Do not add a host file API, an upload endpoint, or a copied file on disk for this.
- Keep the three size limits synchronized: the encoder's target data URL, the encoder's hard ceiling, and the Host Config schema maximum for `wallpaper`. A value the Host schema rejects makes the whole `dsh-theme` section unreadable, so the encoder ceiling stays below the schema maximum and over-limit saved entries are dropped on read.
- Treat a browser without a WebP encoder as an error, not a silent format change: `canvas.toBlob('image/webp')` returns PNG there, so check `blob.type`.
- Never render a stored base64 wallpaper inside a text input; show a thumbnail with dimensions and size, and keep a clear action back to URL entry.
- Implement visual effects the plugin owns, not by rewriting Host DOM: the frosted-glass strength drives one plugin-owned fixed wallpaper layer (`.dsh-theme-glass-layer`) through a unitless `--dsh-theme-glass` custom property and a `data-dsh-theme-glass-mode` gate, so every wallpaper theme inherits it without per-theme state. Create that layer inside `ctx.effect` and remove it on dispose.
- Keep the glass layer free of opacity transitions: a throttled background tab freezes them and would show no frost at all. Animate only where a stalled transition cannot hide the effect.
- Add every new gallery string to all eight locale dictionaries in `lib/client.js`; run the locale parity check and `node --check lib/client.js` after scripted edits.
- Verify a change to this path in an isolated profile: create one from the shipped web template, install the local package with `dsh plugin --profile <name> add <path>`, boot it on a spare port, drive the gallery in a browser, confirm the saved value in `profiles/<name>/cordis.patch.yml`, then delete the throwaway profile.


## DeepSeek Harness plugin packaging and installation

Apply these rules to every plugin bundle in this repository and use them as the baseline when adding another Harness plugin.

### Create and package

- Treat each installable bundle as a versioned npm package. Keep `package.json`'s `name` as the canonical package id and use that same id in `cordis.patch.yml`, DSH metadata, documentation, and install examples. A renamed package has a new install id; old names do not become aliases automatically.
- Keep the bundle's own SemVer `version` separate from its Harness compatibility range. Set `engines.dsh` to the tested Harness range; do not use the Harness release number as the plugin version unless the plugin itself is released at that version.
- Declare the bundle entry with `dsh.bundle.patch`. Declare runtime imports under `dependencies`, host-provided APIs under `peerDependencies`, and include any peer needed to build under `devDependencies` as well.
- Publish the built entry points, declarations when exported, patch files, locale metadata, icons, and every runtime asset referenced by the bundle. Keep `exports` limited to files that are included in the package. Keep source exports only when the source files are intentionally distributed.
- Build from a clean checkout before publishing. Run `pnpm pack --dry-run` and inspect the file list for the manifest, bundle patch, runtime entries, and assets. Confirm the package's exact name and version with the target registry before telling users to install it.
- Do not assume a package is public because `publishConfig.access` is `public` or because it exists in Git. Publish the package version to the intended registry, then verify that registry can resolve the exact `name@version`.

### Install and remove

- Install and remove bundles through Harness's profile manager so it records the dependency and profile bundle selection together and runs compatibility checks:

  ```sh
  dsh plugin --profile <profile> add <package>@<version>
  dsh plugin --profile <profile> remove <package>
  ```

- For local development, add the absolute package directory (or its `file:` spec) with the same `dsh plugin` command. Do not use bare `pnpm add` in a profile as the documented installation flow; it only changes package dependencies and bypasses Harness bundle management.
- If the registry reports 404, first verify the exact package name, version, and registry. Switching mirrors cannot make an unpublished or renamed package appear. For an unpublished package, use a supported Git repository spec or local package path; publish and verify a registry release before documenting an npm install command.
- Keep install examples synchronized with the current manifest and README. Never copy a dependency's version into the bundle install command: for example, `dsh-client-ui-theme@0.2.1-rc.3` is a dependency version, while this bundle's version is `1.0.13`.

### Host-provided client modules and live unload (applies to every bundle here, since 2026-11-20)

- Declare every Host-shipped client module (`@deepseek-ai/dsh-client-ui-theme` and any future one) in `peerDependencies` with `peerDependenciesMeta.<name>.optional: true`, never in `dependencies`. A profile installs a `dependencies` entry as a real second copy; the Host's own copy then resolves from the profile instead of the installation directory, and installing, updating or uninstalling this bundle flips that module's revision in the boot graph. The browser replaces the module live, and a core module owns the base stylesheets and the `root` slot boot order, so the whole renderer tree unmounts into a white page.
- Add a Host-provided module to `dsh.client.inject` only when the built bundle actually `require`s it. Listing it otherwise buys nothing and keeps the duplicate-copy path reachable.
- Never call `ctx.theme.setTheme()` for a theme this plugin registered while the plugin is being disposed. Each disposer emits `theme/change` while the listener is still attached, so the Host throws `theme "<id>" is not registered` and the error escapes as an uncaught renderer error. Gate restores with a `disposing` flag set before the first disposer runs, and check registration again before every call.
- Verify any change to install, update or unload behaviour on a throwaway profile with a packed tarball, not a `link:` directory: a linked dependency is never hoisted, so the duplicate-copy failure does not reproduce. Assert that the Host module's `rev` in the served boot manifest is identical before and after each of add, remove and update, and that `document.getElementById('root').children.length` stays non-zero with no `SlotAssemblyError` in the console.
- On Windows, never round-trip a UTF-8 source file through PowerShell `Get-Content -Raw` / `Set-Content`: the ANSI code page mangles non-ASCII text and breaks the syntax. Use a UTF-8-aware editor, or `[System.IO.File]::ReadAllText` with `WriteAllText(..., UTF8Encoding($false))`.

### Serving non-image package assets (since 2026-11-20)

- Treat `/plugins/<package>/assets/<file>` as an image route only. The Host resolves that path through the package `exports` correctly, but answers 404 for any extension outside its media-type table (`.svg`, `.png`, `.webp`, `.jpg`, `.jpeg`), so a `.woff2` there never loads no matter how `exports` or `files` are declared. Do not chase that 404 as a packaging bug.
- Serve fonts and any other non-image resource from a route the bundle registers itself with `ctx.webServer.register({ kind: 'exact' | 'prefix', path, handler })`, returning the response directly. Send the real `content-type`, `content-length`, a strong `etag`, and an immutable cache lifetime when the filename carries a content hash; answer `HEAD`; compare the requested basename against the published one instead of resolving it on disk. Register it inside `ctx.effect` so unload removes the route.
- `inject` in this Cordis generation is a list (or name → intercept config) of **required** services; there is no `{ optional: [...] }` shape, and writing one makes the plugin wait for a service literally named `optional`. For an optional service, keep `inject` empty and use nested `ctx.inject([...], (ctx) => …)`, which binds the work to that service's lifetime without holding the plugin pending.
