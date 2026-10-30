---
description: "Optional VIP Dream theme and interface styling for Web profiles."
kind: "package-bundle"
---

# @deepseek-ai/dsh-theme

English | [中文](README.zh.md)

## Summary

WJ Dreamlight is an optional Web profile bundle with six selectable themes, matching wallpapers, palettes, and previews. VIP Golden Radiance adds gold accents, glass surfaces, a licensed display font, and light effects. The bundle and selected theme stay with the profile when DSH is upgraded.

## Interface preview

<p align="center"><img src="assets/dsh-theme-preview.webp" alt="DSH Web interface with the VIP Golden Radiance theme"></p>

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

Choose one installation method for the Web profile:

- **Official:** Open **Settings → Plugins → More → Official**, find **WJ Dreamlight**, then install and enable it.
- **From this Git repository:** Run `dsh plugin --profile desktop add git+https://github.com/phoenixlucky/dsh-theme.git#main`.
- **Local copy:** Run `dsh plugin --profile web add E:\home\dsh-theme`.

The current package id is `@deepseek-ai/dsh-theme` and its bundle version is `1.0.14`. The bundle supports DSH `0.2.1-rc.3`, `0.2.2-alpha.2`, and later stable `0.2.x` releases. Its `dsh-client-ui-theme` dependency accepts the matching compatible releases; that dependency version is not this bundle's install version. Install through `dsh plugin` so Harness records the bundle in the profile. A registry `404` means the requested name/version is not available from that registry; changing mirrors does not publish it.

Open **Settings → General → Themes and wallpaper** to browse the six themes. Select a card to preview its wallpaper, then choose **Apply theme** to switch; the selection is saved in the `dsh-theme` plugin configuration for the current profile and restored after restart. The gallery also follows the host theme settings for light, dark, and system. Enabling the bundle preserves the current theme preference, including `system`; choose VIP Golden Radiance from the gallery to apply it. Disabling the bundle removes the gallery, its six themes, and their assets, while the built-in light, dark, and system palettes remain available. Existing `official-vip-dream` preferences migrate to VIP Golden Radiance.

The browser plugin registers the six themes through `ctx.theme` and adds a wallpaper gallery to DSH's General settings slot. The gallery uses Harness configuration forms to save and restore third-party theme selections. VIP styling is applied through a disposable stylesheet effect. Wallpaper images and the licensed display font ship with the bundle, so they need no network request or files from the application installation directory.

## Supported versions

This bundle targets DSH `0.2.1-rc.3`, `0.2.2-alpha.2`, and later stable `0.2.x` releases whose `dsh-client-ui-theme` exports the external theme metadata fields. A DSH release outside those ranges needs a compatible bundle release.

## License

The wallpaper artwork is packaged under `assets/`. The GuruQiuWan display font and its Apache-2.0 notice are included there as well; see `font-license.txt` and `LICENSE-2.0.txt`.

## Related documentation

- [Theme extension API](../../client/ui-theme/README.md#registering-a-theme)
- [VIP Golden Radiance detail](docs/DETAIL.md)
