# WJ Dreamlight

WJ Dreamlight contains the complete eight-theme wallpaper gallery: VIP Golden Radiance, Dragon Boat Festival, Qingming Festival, Qixi Festival, Lantern Festival, Mid-Autumn Festival, Halloween Night, and Christmas Snowglow. The five Chinese holiday wallpapers follow the VIP artwork’s blue-violet-haired girl, keeping her whale-fin ears, whale-tail accessory, and blue whale plush in every scene; Halloween Night and Christmas Snowglow remain unchanged. Open **Settings → Themes & wallpaper** — the gallery is its own Settings page — to preview a wallpaper before applying its palette, and tune the sidebar and conversation background transparency independently from 0% to 100%. Values are saved in the current profile and restored on clients that load this Web plugin, including an explicit light or dark choice made in Appearance. At 0%, theme surfaces retain their original fills; wallpaper visibility at higher values depends on the host canvas. VIP Golden Radiance keeps the existing page layout and button styling, with warmer glass surfaces across the main canvas, plugin discovery, and automation pages, a subtle gold headline shimmer, and soft amber sidebar lighting. The headline shimmer and icon glow respect the system reduced-motion preference. Disabling the bundle removes the gallery, all eight themes, and their assets.

The seven wallpaper themes share one generic effect layer: each supplies its accent color and light or dark base, and the stylesheet derives glass panels, accent borders, hover and selected states, scrollbar tint, plus an accent atmosphere layer above the artwork, so a theme is no longer just a picture behind one flat color.

## Custom themes

Choose **Add custom theme** at the bottom of the gallery page and fill in a name, image URL, accent color, and light or dark appearance. Images accept `https://`, `data:image/`, or app-relative `/` URLs; the accent drives every emphasis effect for that theme. Custom themes sit in the same grid with a **Custom** badge, can be edited or deleted from their preview, and persist in the `dsh-theme` configuration as `customThemes`.

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

The stylesheet source lives at `src/client/styles.css`; run `pnpm run sync:client-styles` after editing it to refresh the client bundle. The published package keeps the runtime font and its license files, without a second copy of the original font.

Enable **WJ Dreamlight** from **Settings → Plugins → More → Official**. The profile keeps the installed bundle across DSH application upgrades. Disable the bundle from the same page to return to the built-in theme selected by the theme service.
