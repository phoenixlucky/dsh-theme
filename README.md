---
description: "Optional VIP Dream theme and interface styling for Web profiles."
kind: "package-bundle"
---

# @deepseek-ai/dsh-theme

English | [中文](README.zh.md)

## Summary

This optional Web profile bundle adds six selectable themes with matching wallpapers, palettes, and previews. VIP Golden Radiance also adds gold accents, glass surfaces, a licensed display font, and light effects. The bundle and selected theme stay with the profile when DSH is upgraded.

## Interface preview

<p align="center"><img src="assets/dsh-theme-preview.png" alt="DSH Web interface with the VIP Golden Radiance theme"></p>

## Theme gallery

<table>
  <tr>
    <td align="center"><img src="assets/vip-dream.wallpaper.webp" alt="VIP Golden Radiance wallpaper" width="240"><br><strong>VIP Golden Radiance</strong></td>
    <td align="center"><img src="assets/sea-salt.wallpaper.webp" alt="Sea Salt wallpaper" width="240"><br><strong>Sea Salt</strong></td>
    <td align="center"><img src="assets/bamboo-green.wallpaper.webp" alt="Bamboo Green wallpaper" width="240"><br><strong>Bamboo Green</strong></td>
  </tr>
  <tr>
    <td align="center"><img src="assets/coral-pink.wallpaper.webp" alt="Coral Pink wallpaper" width="240"><br><strong>Coral Pink</strong></td>
    <td align="center"><img src="assets/lavender.wallpaper.webp" alt="Lavender wallpaper" width="240"><br><strong>Lavender</strong></td>
    <td align="center"><img src="assets/midnight-indigo.wallpaper.webp" alt="Midnight Indigo wallpaper" width="240"><br><strong>Midnight Indigo</strong></td>
  </tr>
</table>

## Use this package

Choose either installation method for the Web profile:

- **Official:** Open **Settings → Plugins → More → Official**, find **VIP Golden Radiance**, then install and enable it.
- **Local copy:** Run `dsh plugin --profile web add E:\home\dsh-theme`.

On the **Themes and wallpaper** page, choose a card to save its theme id in `ui-theme`; the selection stays after restart. A fresh profile using the default system palette selects VIP Golden Radiance when the bundle is enabled. Disabling the bundle removes its six cards and assets, while the built-in light, dark, and system palettes remain available. Existing `official-vip-dream` preferences migrate to VIP Golden Radiance.

The browser plugin registers the six themes through `ctx.theme` and applies VIP styling through a disposable stylesheet effect. Wallpaper images and the licensed display font ship with the bundle, so they need no network request or files from the application installation directory.

## Supported versions

This bundle targets DSH `0.2.1-rc.3` and later `0.2.x` releases whose `dsh-client-ui-theme` exports the external theme metadata fields. A DSH release outside that range needs a compatible bundle release.

## License

The wallpaper artwork is packaged under `assets/`. The GuruQiuWan display font and its Apache-2.0 notice are included there as well; see `font-license.txt` and `LICENSE-2.0.txt`.

## Related documentation

- [Theme extension API](../../client/ui-theme/README.md#registering-a-theme)
- [VIP Golden Radiance detail](docs/DETAIL.md)
