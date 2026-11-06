# Holiday Wallpaper Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the five non-excluded wallpaper artworks with consistent Chinese holiday scenes and rename their gallery labels while preserving existing profile preferences.

**Architecture:** Generate five 1672 × 941 WebP variants from the existing VIP character reference, then wire semantic artwork files through the existing runtime asset loader and hashed `lib/assets` bundle. Keep theme IDs, palette inputs, wallpaper selection behavior, and the three excluded themes stable; update all eight locale labels and the English/Chinese preview documentation.

**Tech Stack:** WebP image assets, JavaScript theme registry and inline locale dictionaries (`lib/client.js`), Markdown documentation, pnpm package dry-run.

**Spec:** `docs/superpowers/specs/2026-11-06-holiday-wallpapers-design.md`

## Global Constraints

- Preserve the character's face, long indigo hair, proportions, anime style, and right-side placement.
- Preserve whale-fin ears, a recognizable whale-tail accessory, and the small blue whale plush in every seasonal variant.
- Keep the 1672 × 941 wide wallpaper composition with quieter interface space on the left; optimize final artwork as WebP.
- Keep all existing theme IDs so saved profile preferences continue to resolve.
- Keep VIP Golden Radiance, Halloween Night, and Christmas Snowglow unchanged.
- Keep wallpaper selection, persistence, opacity behavior, theme interactions, and light/dark behavior unchanged.
- Update all eight supported gallery locales and both English and Chinese documentation.
- Run `pnpm pack --dry-run` and confirm all five wallpaper assets appear in the package listing.

## Review Focus

- Generated variants drift from the approved character identity or lose one of the three recurring whale motifs: inspect each full-size image before accepting it.
- Interface space becomes visually busy: inspect the left third of all five images at gallery scale.
- Source, documentation preview, and packaged runtime copies diverge: compare file hashes for each semantic wallpaper.
- Existing saved preferences stop resolving after relabeling: confirm all five `official-*` IDs remain byte-for-byte unchanged.
- An excluded theme is unintentionally altered: compare hashes of VIP Golden Radiance, Halloween, and Christmas assets before and after the refresh.

---

### Task 1: Generate and optimize the five holiday wallpapers

**Files:**
- Create: `public/assets/images/dragon-boat-festival-wallpaper.webp`
- Create: `public/assets/images/qingming-festival-wallpaper.webp`
- Create: `public/assets/images/qixi-festival-wallpaper.webp`
- Create: `public/assets/images/lantern-festival-wallpaper.webp`
- Create: `public/assets/images/mid-autumn-festival-wallpaper.webp`
- Reference: `public/assets/images/vip-dream-wallpaper.webp`

**Interfaces:**
- Consumes: Existing VIP Golden Radiance artwork as the character and composition reference.
- Produces: Five final WebP images, each 1672 × 941, with named holiday scenes from the spec mapping.

- [x] Generate Dragon Boat Festival: sea-green river, dragon boats and early-summer lights; preserve right-side character and clear left space.
- [x] Generate Qingming Festival: willow-green spring outing beside a quiet river; preserve right-side character and clear left space.
- [x] Generate Qixi Festival: coral-pink moonlit magpie bridge and evening sky; preserve right-side character and clear left space.
- [x] Generate Lantern Festival: violet dusk, lanterns and a warm night market; preserve right-side character and clear left space.
- [x] Generate Mid-Autumn Festival: full moon, osmanthus and calm indigo night; preserve right-side character and clear left space.
- [x] Inspect each output for character consistency, all three whale motifs, 1672 × 941 dimensions, and left-side negative space; regenerate any failed output.
- [x] Save accepted images as optimized WebP files under the exact paths above.

### Task 2: Wire semantic artwork into the runtime and gallery

**Files:**
- Modify: `lib/client.js`
- Create: `lib/assets/dragon-boat-festival-wallpaper-<hash>.webp`
- Create: `lib/assets/qingming-festival-wallpaper-<hash>.webp`
- Create: `lib/assets/qixi-festival-wallpaper-<hash>.webp`
- Create: `lib/assets/lantern-festival-wallpaper-<hash>.webp`
- Create: `lib/assets/mid-autumn-festival-wallpaper-<hash>.webp`

**Interfaces:**
- Consumes: The five accepted WebP files from Task 1.
- Produces: Runtime-loaded holiday art attached to the five existing theme entries; stable IDs remain `official-sea-salt`, `official-bamboo-green`, `official-coral-pink`, `official-lavender`, and `official-midnight-indigo`.

- [x] Replace the five old gallery names in `lib/client.js` with Dragon Boat Festival, Qingming Festival, Qixi Festival, Lantern Festival, and Mid-Autumn Festival labels in Chinese and English; leave theme IDs, accents, schemes, and excluded labels untouched.
- [x] Update the corresponding values in `lib/client.js`'s inline `galleryCopy` dictionaries for Chinese, English, Japanese, French, Spanish, Portuguese, Russian, and German; `themeDictionaries` is derived from this copy, while `locale/*.json` contains package metadata only.
- [x] Create package runtime copies under `lib/assets/` with the same content hashes used by host asset-loader references.
- [x] Update each corresponding `require.asset(...)` reference in `lib/client.js` to its semantic runtime asset filename; retain all unrelated module code and stable theme IDs.
- [x] Verify each label is present in the eight corresponding inline locale dictionaries and that all five registered themes still point to the intended theme IDs and assets.

### Task 3: Synchronize previews and documentation, then verify packaging

**Files:**
- Create: `assets/dragon-boat-festival.wallpaper.webp`
- Create: `assets/qingming-festival.wallpaper.webp`
- Create: `assets/qixi-festival.wallpaper.webp`
- Create: `assets/lantern-festival.wallpaper.webp`
- Create: `assets/mid-autumn-festival.wallpaper.webp`
- Modify: `README.md`, `README.zh.md`, `docs/DETAIL.md`, `docs/DETAIL.zh.md`
- Verify: `package.json` existing `files` entries include `assets/*.webp`, `public/assets`, and `lib/assets`

**Interfaces:**
- Consumes: Runtime assets and locale names from Task 2.
- Produces: Synchronized package preview copies, updated bilingual theme galleries and descriptions, and a verified package dry-run.

- [x] Copy each accepted public wallpaper to its matching semantic `assets/*.wallpaper.webp` preview path, then remove the five superseded palette-named copies from `assets/`; preserve all excluded wallpaper files.
- [x] Replace the five old gallery entries and descriptions in English and Chinese README/detail pages with the approved holiday names and updated previews.
- [x] Compare SHA-256 hashes across each `public/assets/images/`, `assets/`, and `lib/assets/` copy; confirm all three copies match for each of the five wallpapers.
- [x] Confirm excluded VIP, Halloween, and Christmas asset hashes are unchanged from the pre-refresh values.
- [x] Run `pnpm pack --dry-run`; confirm package name/version remain unchanged and all five semantic runtime and preview assets are listed.
- [x] Review the final diff to confirm pre-existing unrelated working-tree changes remain intact and no excluded theme registration or asset changed.
