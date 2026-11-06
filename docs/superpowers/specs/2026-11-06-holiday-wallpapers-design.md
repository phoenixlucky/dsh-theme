# Holiday Wallpaper Refresh Design

## Goal

Refresh the five existing non-VIP, non-Halloween, non-Christmas wallpapers as Chinese holiday scenes and rename their gallery labels around those holidays. Keep the existing VIP Golden Radiance, Halloween Night, and Christmas Snowglow themes unchanged.

## Approved visual direction

Reuse the existing VIP character identity: consistent face, long indigo hair, body proportions, and anime rendering. Keep the character on the right with quieter interface space on the left. Every seasonal variant keeps whale-fin ears, a recognizable whale-tail accessory, and the small blue whale plush. Preserve the current 1672 × 941 wide composition and optimize each final wallpaper as WebP.

Map the five existing themes as follows:

| Existing theme ID | Palette source | Holiday name | Scene |
| --- | --- | --- | --- |
| `official-sea-salt` | Sea Salt | Dragon Boat Festival | Dragon boats, river lanterns, and early-summer water |
| `official-bamboo-green` | Bamboo Green | Qingming Festival | Spring outing, fresh green willows, and a quiet riverside |
| `official-coral-pink` | Coral Pink | Qixi Festival | A moonlit magpie bridge and romantic evening sky |
| `official-lavender` | Lavender | Lantern Festival | Warm lanterns, night market lights, and a violet dusk |
| `official-midnight-indigo` | Midnight Indigo | Mid-Autumn Festival | Full moon, osmanthus, and a calm indigo night |

## Compatibility and integration

Keep all five existing theme IDs so saved profile preferences continue to resolve. Update theme registration labels and gallery dictionaries for every supported locale (Chinese, English, Japanese, French, Spanish, Portuguese, Russian, and German). Keep the existing palette accents and light/dark behavior unless a generated image makes a small contrast adjustment necessary.

Create semantic WebP source assets in `public/assets/images/`, keep `assets/` package preview copies synchronized, and update the generated client asset references and package bundle as required by the current build workflow. Update the English and Chinese README and detail page galleries and descriptions. Do not modify the three excluded wallpaper assets or the VIP theme's dedicated visual treatment.

## Verification

Compare the generated set at the same 1672 × 941 size against the VIP identity reference and the three excluded seasonal variants. Check right-side character placement, left-side negative space, recurring whale motifs, and cross-image style consistency. Verify that the source and package copies match, run the repository's existing asset/style sync workflow, and run `pnpm pack --dry-run` to confirm all five new wallpaper assets are included.

## Scope limits

This refresh renames gallery labels but preserves stable theme IDs and does not add themes or change saved-preference schema. It does not alter wallpaper selection, persistence, opacity behavior, theme interactions, or the three excluded themes.
