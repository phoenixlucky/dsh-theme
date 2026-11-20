# WJ Dreamlight

WJ Dreamlight contains the complete eight-theme wallpaper gallery: VIP Golden Radiance, Dragon Boat Festival, Qingming Festival, Qixi Festival, Lantern Festival, Mid-Autumn Festival, Halloween Night, and Christmas Snowglow. The five Chinese holiday wallpapers follow the VIP artwork’s blue-violet-haired girl, keeping her whale-fin ears, whale-tail accessory, and blue whale plush in every scene; Halloween Night and Christmas Snowglow remain unchanged. Open **Settings → Themes & wallpaper** — the gallery is its own Settings page — to preview a wallpaper before applying its palette, and tune the sidebar and conversation background transparency independently from 0% to 100%. Values are saved in the current profile and restored on clients that load this Web plugin, including an explicit light or dark choice made in Appearance. The built-in palette namespace stores only light, dark, and system, so a wallpaper theme id is kept by this plugin: a settings update that re-adopts the Host palette is answered by re-applying the saved theme, while an Appearance pick replaces the wallpaper. At 0%, theme surfaces retain their original fills; wallpaper visibility at higher values depends on the host canvas. VIP Golden Radiance keeps the existing page layout and button styling, with warmer glass surfaces across the main canvas, plugin discovery, and automation pages, a subtle gold headline shimmer, and soft amber sidebar lighting. The headline shimmer and icon glow respect the system reduced-motion preference. Disabling the bundle removes the gallery, all eight themes, and their assets.

The seven wallpaper themes share one generic effect layer: each supplies its accent color and light or dark base, and the stylesheet derives glass panels, accent borders, hover and selected states, scrollbar tint, plus an accent atmosphere layer above the artwork, so a theme is no longer just a picture behind one flat color.

## Local upload (one per profile)

The gallery's **Local upload** block holds a single slot: choose **Upload local image**, fill in a name, image, accent color, and light or dark appearance, and the button becomes **Edit local upload** once that slot is filled. An image comes from either direction: a local file (or a drop on the dashed field), or an `https://`, `data:image/`, or app-relative `/` URL typed into the address field. The accent drives every emphasis effect for that wallpaper.

The eight built-in wallpapers cost no configuration space: selecting one records only a theme id, with no image data. Switching to a built-in theme rewrites that id and **never clears the saved upload**, so switching back resumes it; only **Delete** in the preview or **Remove image** in the editor drops the data. That one custom wallpaper is converted to base64 and stored in `dsh-theme` as `customThemes`, which holds at most one entry: when an older build left several, the entry the saved preference names wins (otherwise the first), the extras are ignored on read, and the next save collapses the array to that one entry. The slot keeps its id, so replacing the artwork never drops the applied theme back to a built-in palette. It sits in the same grid with a **Local** badge and can be edited or deleted from its preview.

### Local uploads become WebP and are saved as base64

An uploaded image never leaves the browser: the client decodes the pixels through the browser's own image pipeline (honouring EXIF rotation), redraws them on a canvas, re-encodes as WebP, and reads the blob back with `FileReader` into a `data:image/webp;base64,…` value for the theme's `wallpaper` field. The encoder starts at a 2560 px longest edge and quality 0.82; when the data URL would exceed about 900,000 characters it steps down through 2200, 1920, 1600, and 1280 px at lower quality, accepts at most 1,900,000 characters with a quality warning, and refuses anything larger. Source files are limited to 24 MB, alpha is preserved, and an animated GIF contributes its first frame.

Nothing in this path needs the network, a host file API, or a copy elsewhere on disk. The Host-side `wallpaper` field therefore allows up to 2,000,000 characters, and a saved entry above that limit is dropped on read instead of breaking the whole configuration section. A browser without a WebP encoder (where `canvas.toBlob` silently returns PNG) gets an explicit error rather than another format stored under the same name.

Editing a saved local upload replaces the address field with a thumbnail and a **Local image (WebP) · dimensions · size** summary, so a million-character base64 value never lands in a text input; **Remove image** clears it for a URL, and uploading again replaces the artwork. The editor waits for the profile to accept the write before it closes, so a new theme appears in the grid immediately.

## Frosted glass and transparency

**Background & effects** holds three 0–100% sliders: sidebar transparency, conversation transparency, and frosted-glass strength. The first two only change how much surface fill stays opaque; the glass is **one global layer**. The client inserts a plugin-owned fixed layer (`.dsh-theme-glass-layer`) that carries the active wallpaper; while it is on, that layer receives `blur(0.26px × strength)` and a `saturate()` boost plus a faint frost gradient. At 0 the layer stays hidden and the artwork remains sharp.

Because the blur happens on the wallpaper layer rather than on Host panels, it applies to every wallpaper theme — the eight built-ins as well as the local upload — and it stores no image data, only a 0–100 value. Strength ≥60 counts as the strong band. With the effect on, the gallery cards and dialogs also use `backdrop-filter`, so they read as frosted glass. The layer is created through `ctx.effect` and removed with the plugin; no Host DOM is rewritten.

## Editor layout

The custom-wallpaper editor reads as title and description, name, wallpaper drop area, accent and appearance, then a divider with the actions. The drop area shows a 16:9 preview with a dimensions · size pill when an image is set, and a dashed drop zone with a primary button when it is empty; appearance is a two-state segmented control with `aria-pressed`, and the accent shows its hex value next to the swatch. Dropping a file works anywhere in that area, and buttons disable with progress copy while converting or saving.

Adding a theme in code is a single declaration and needs no CSS:

```js
createWallpaperTheme({
  id: "official-my-theme",
  colorScheme: "light",
  accent: "#4d91b7",
  surface: "#f6fbff",
  wallpaper: myWallpaperAsset,
  labels: { zh: "我的主题", en: "My theme" }
});
```

The effect layer consumes only `--dsh-theme-accent` and `--dsh-theme-surface` and exposes its derived values under the `--dsh-theme-*` namespace, so a theme can override any of them without editing the stylesheet. Motion, hover lift, glass fills, borders, and the wallpaper atmosphere stay separate tokens and respect `prefers-reduced-motion`.

The stylesheet source lives at `src/client/styles.css`; run `pnpm run sync:client-styles` after editing it to refresh the client bundle. The published package keeps the runtime font and its license files, without a second copy of the original font. The Host plugin asset route publishes only images (`.svg`, `.png`, `.webp`, `.jpg`, `.jpeg`), so the bundle's host half registers a `/theme-font` route that streams the `.woff2` with an immutable cache lifetime, and the client probes that route before enabling the display face. A composition whose server never mounts, or a build that drops the route, keeps the host text stack.

Enable **WJ Dreamlight** from **Settings → Plugins → More → Official**. The profile keeps the installed bundle across DSH application upgrades. Disable the bundle from the same page to return to the built-in theme selected by the theme service.
