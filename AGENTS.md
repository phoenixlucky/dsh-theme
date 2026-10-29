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

## Interface effects

- Define reusable visual effect values as namespaced `--dsh-theme-effect-*` CSS variables at the component or active theme root. Keep motion duration and easing, hover lift and shadow, backdrop blur, glow, and gradient animation as separate tokens.
- Reuse the tokens across related states and components so hover, focus, selected, and modal feedback remain consistent. Keep decorative emphasis distinct from interaction feedback.
- Preserve clear `:focus-visible` feedback and disable or reduce decorative motion and transitions under `prefers-reduced-motion`.

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
- Keep install examples synchronized with the current manifest and README. Never copy a dependency's version into the bundle install command: for example, `dsh-client-ui-theme@0.2.1-rc.3` is a dependency version, while this bundle's version is `1.0.12`.
