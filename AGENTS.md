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

## Implementation

- Follow the existing Cordis plugin structure and use documented host theme variables. Do not target generated CSS-module class names or alter unrelated application behavior to reproduce a visual detail.
- Keep styles and resources scoped to the theme id, preserve reduced-motion behavior, and use responsive limits for widths and decorations.
- Update relevant documentation when a visual variable or asset workflow changes. Keep this file as the default guidance for future UI and visual work.
