---
description: "Optional VIP Dream theme and interface styling for Web profiles."
kind: "package-bundle"
---

# @deepseek-ai/dsh-theme

English | [中文](README.zh.md)

## Summary

This optional Web profile bundle supplies the complete Themes and wallpaper experience: six selectable themes, wallpaper previews, palette colors, VIP gold interface accents, glass surfaces, a licensed display font, and matching light effects. Its assets and selection live in the profile and remain there when the DSH application is upgraded.

## Use this package

Open **Settings → Plugins → More → Official**, find **VIP Golden Radiance**, and install and enable it for the Web profile. The same profile can install a local package copy with `dsh plugin --profile web add E:\home\dsh-theme`.

The Themes and wallpaper page contains VIP Golden Radiance, Sea Salt, Bamboo Green, Coral Pink, Lavender, and Midnight Indigo. Selecting any card saves its theme id in `ui-theme` settings, so that theme stays selected after a restart. A fresh profile using the default system palette selects VIP Golden Radiance when this bundle is enabled. Disable the bundle from Plugins to remove all six wallpaper cards and their theme assets; the core light, dark, and system palettes remain available. Existing `official-vip-dream` preferences migrate to VIP Golden Radiance.

The browser plugin uses `ctx.theme` to register all six selectable themes and installs VIP effects through a disposable stylesheet effect. Wallpaper images and the licensed display font are part of the bundle, so they do not depend on the application installation directory or a network request.

## Supported versions

This bundle targets DSH `0.2.1-rc.3` and later `0.2.x` releases whose `dsh-client-ui-theme` exports the external theme metadata fields. A DSH release outside that range needs a compatible bundle release.

## License

The wallpaper artwork is packaged under `assets/`. The GuruQiuWan display font and its Apache-2.0 notice are included there as well; see `font-license.txt` and `LICENSE-2.0.txt`.

## Related documentation

- [Theme extension API](../../client/ui-theme/README.md#registering-a-theme)
- [VIP Golden Radiance detail](docs/DETAIL.md)
