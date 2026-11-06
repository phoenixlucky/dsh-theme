window.__ModuleLoader__.load({
	id: "@tinyforge/dsh-theme",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0dsh-inline-css:E:\home\dsh-theme\src\client\styles.css.mjs
		var styles_css_default = "@font-face {\n  font-family:DshVipDream;\n  src:url(__VIP_FONT_ASSET__)format(\"woff2\");\n  font-style:normal;\n  font-weight:400;\n  font-display:swap\n}\n/* The wallpaper gallery is its own Settings page. */\n.dsh-theme-page {\n  --dsh-theme-effect-motion-duration:180ms;\n  --dsh-theme-effect-motion-easing:ease;\n  --dsh-theme-effect-hover-lift:-2px;\n  --dsh-theme-effect-hover-shadow:0 5px 18px #0000001a;\n  --dsh-theme-effect-dialog-shadow:0 24px 80px #0005;\n  --dsh-theme-effect-backdrop-blur:5px;\n  --dsh-theme-effect-focus-ring-width:2px;\n  --dsh-theme-effect-focus-ring-offset:2px;\n  display:flex;\n  flex-direction:column;\n  gap:24px;\n  max-width:980px;\n  padding:4px 0 28px\n}\n.dsh-theme-page-header {\n  display:flex;\n  flex-direction:column;\n  gap:6px\n}\n.dsh-theme-page-title {\n  margin:0;\n  color:var(--dsw-alias-label-primary);\n  font-size:18px;\n  font-weight:600;\n  line-height:26px\n}\n.dsh-theme-page-subtitle {\n  margin:0;\n  color:var(--dsw-alias-label-tertiary);\n  font-size:13px;\n  line-height:20px\n}\n.dsh-theme-page-block {\n  display:flex;\n  flex-direction:column;\n  gap:12px\n}\n.dsh-theme-block-title {\n  margin:0;\n  color:var(--dsw-alias-label-primary);\n  font-size:14px;\n  font-weight:500;\n  line-height:22px\n}\n.dsh-theme-gallery-grid {\n  display:grid;\n  grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));\n  gap:10px\n}\n.dsh-theme-gallery-card {\n  min-width:0;\n  padding:0;\n  overflow:hidden;\n  border:1px solid var(--dsw-alias-border-l4);\n  border-radius:var(--dsw-radius-lg,16px);\n  color:var(--dsw-alias-label-primary);\n  background:var(--dsw-alias-settings-card-fill);\n  font:inherit;\n  text-align:left;\n  cursor:pointer;\n  transition:border-color var(--dsh-theme-effect-motion-duration) var(--dsh-theme-effect-motion-easing), transform var(--dsh-theme-effect-motion-duration) var(--dsh-theme-effect-motion-easing), box-shadow var(--dsh-theme-effect-motion-duration) var(--dsh-theme-effect-motion-easing)\n}\n.dsh-theme-gallery-card:hover {\n  border-color:var(--dsw-alias-brand-primary);\n  box-shadow:var(--dsh-theme-effect-hover-shadow);\n  transform:translateY(var(--dsh-theme-effect-hover-lift))\n}\n.dsh-theme-gallery-card:focus-visible,\n.dsh-theme-gallery-dialog button:focus-visible,\n.dsh-theme-gallery-dialog input:focus-visible,\n.dsh-theme-gallery-dialog select:focus-visible {\n  outline:var(--dsh-theme-effect-focus-ring-width) solid var(--dsw-alias-brand-primary);\n  outline-offset:var(--dsh-theme-effect-focus-ring-offset)\n}\n.dsh-theme-gallery-card[aria-pressed=true] {\n  border-color:var(--dsw-alias-brand-primary);\n  box-shadow:0 0 0 1px var(--dsw-alias-brand-primary)\n}\n.dsh-theme-gallery-thumb {\n  display:block;\n  width:100%;\n  aspect-ratio:16/9;\n  object-fit:cover;\n  background:var(--dsw-alias-bg-module-platform)\n}\n.dsh-theme-gallery-card-label {\n  display:flex;\n  min-height:40px;\n  align-items:center;\n  justify-content:space-between;\n  gap:8px;\n  padding:8px 10px;\n  font-size:13px\n}\n.dsh-theme-gallery-card-name {\n  display:flex;\n  min-width:0;\n  align-items:center;\n  gap:6px\n}\n.dsh-theme-gallery-card-name > span:first-child {\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap\n}\n.dsh-theme-gallery-badge {\n  flex:none;\n  padding:0 6px;\n  border:1px solid var(--dsw-alias-border-l4);\n  border-radius:999px;\n  color:var(--dsw-alias-label-tertiary);\n  font-size:10px;\n  line-height:16px\n}\n.dsh-theme-gallery-current {\n  flex:none;\n  color:var(--dsw-alias-brand-primary);\n  font-size:11px;\n  white-space:nowrap\n}\n.dsh-theme-opacity-controls {\n  display:grid;\n  grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));\n  gap:16px;\n  padding:4px 0 12px\n}\n.dsh-theme-opacity-control {\n  display:grid;\n  gap:8px;\n  color:var(--dsw-alias-label-primary);\n  font-size:13px\n}\n.dsh-theme-opacity-control-heading {\n  display:flex;\n  justify-content:space-between;\n  gap:8px\n}\n.dsh-theme-opacity-control output {\n  color:var(--dsw-alias-label-secondary);\n  font-variant-numeric:tabular-nums\n}\n.dsh-theme-opacity-control input {\n  width:100%;\n  margin:0;\n  accent-color:var(--dsw-alias-brand-primary)\n}\n.dsh-theme-opacity-control input:focus-visible {\n  outline:var(--dsh-theme-effect-focus-ring-width) solid var(--dsw-alias-brand-primary);\n  outline-offset:var(--dsh-theme-effect-focus-ring-offset)\n}\n.dsh-theme-custom {\n  display:flex;\n  flex-direction:column;\n  gap:8px;\n  padding:4px 0 8px\n}\n.dsh-theme-custom-heading {\n  display:flex;\n  flex-wrap:wrap;\n  align-items:center;\n  justify-content:space-between;\n  gap:8px\n}\n.dsh-theme-custom-hint {\n  margin:0;\n  color:var(--dsw-alias-label-tertiary);\n  font-size:12px;\n  line-height:18px\n}\n.dsh-theme-gallery-dialog {\n  width:min(760px,calc(100vw - 32px));\n  max-width:none;\n  max-height:calc(100vh - 32px);\n  padding:0;\n  overflow:auto;\n  border:1px solid var(--dsw-alias-border-l2);\n  border-radius:20px;\n  color:var(--dsw-alias-label-primary);\n  background:var(--dsw-alias-settings-card-fill);\n  box-shadow:var(--dsh-theme-effect-dialog-shadow)\n}\n.dsh-theme-gallery-dialog::backdrop {\n  background:#10131ab3;\n  backdrop-filter:blur(var(--dsh-theme-effect-backdrop-blur))\n}\n.dsh-theme-gallery-preview {\n  display:block;\n  width:100%;\n  max-height:min(58vh,480px);\n  aspect-ratio:16/9;\n  object-fit:cover;\n  background:var(--dsw-alias-bg-module-platform)\n}\n.dsh-theme-gallery-dialog-content {\n  display:flex;\n  flex-direction:column;\n  gap:12px;\n  padding:20px\n}\n.dsh-theme-gallery-dialog-title {\n  margin:0;\n  font-size:18px;\n  font-weight:600\n}\n.dsh-theme-gallery-dialog-actions {\n  display:flex;\n  flex-wrap:wrap;\n  justify-content:flex-end;\n  gap:8px\n}\n.dsh-theme-gallery-action {\n  min-height:36px;\n  padding:0 16px;\n  border:1px solid var(--dsw-alias-border-l2);\n  border-radius:10px;\n  color:var(--dsw-alias-label-primary);\n  background:transparent;\n  font:inherit;\n  cursor:pointer;\n  transition:border-color var(--dsh-theme-effect-motion-duration) var(--dsh-theme-effect-motion-easing), background-color var(--dsh-theme-effect-motion-duration) var(--dsh-theme-effect-motion-easing)\n}\n.dsh-theme-gallery-action:hover {\n  border-color:var(--dsw-alias-brand-primary);\n  background:color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent)\n}\n.dsh-theme-gallery-action-primary {\n  border-color:var(--dsw-alias-brand-primary);\n  color:#fff;\n  background:var(--dsw-alias-brand-primary)\n}\n.dsh-theme-gallery-action-primary:hover {\n  border-color:var(--dsw-alias-brand-primary);\n  background:color-mix(in srgb, var(--dsw-alias-brand-primary) 86%, #000)\n}\n.dsh-theme-gallery-action-quiet {\n  border-color:transparent;\n  color:var(--dsw-alias-state-error-primary, #c2353f)\n}\n.dsh-theme-gallery-action-quiet:hover {\n  border-color:var(--dsw-alias-state-error-primary, #c2353f);\n  background:color-mix(in srgb, var(--dsw-alias-state-error-primary, #c2353f) 10%, transparent)\n}\n.dsh-theme-editor-fields {\n  display:flex;\n  flex-direction:column;\n  gap:12px\n}\n.dsh-theme-field-row {\n  display:grid;\n  grid-template-columns:minmax(0,1fr) minmax(0,1fr);\n  gap:12px\n}\n.dsh-theme-field {\n  display:flex;\n  flex-direction:column;\n  gap:6px;\n  color:var(--dsw-alias-label-secondary);\n  font-size:12px\n}\n.dsh-theme-field input,\n.dsh-theme-field select {\n  min-height:34px;\n  padding:0 10px;\n  border:1px solid var(--dsw-alias-border-l2);\n  border-radius:8px;\n  color:var(--dsw-alias-label-primary);\n  background:var(--dsw-alias-bg-module-platform);\n  font:inherit;\n  font-size:13px\n}\n.dsh-theme-field-color input {\n  min-height:34px;\n  padding:2px 4px;\n  cursor:pointer\n}\n.dsh-theme-editor-error {\n  margin:0;\n  color:var(--dsw-alias-state-error-primary, #c2353f);\n  font-size:12px;\n  line-height:18px\n}\n@media (max-width:520px) {\n  .dsh-theme-gallery-grid {grid-template-columns:repeat(2,minmax(0,1fr))}\n  .dsh-theme-gallery-dialog-content {padding:16px}\n  .dsh-theme-field-row {grid-template-columns:minmax(0,1fr)}\n}\n@media (prefers-reduced-motion:reduce) {\n  .dsh-theme-gallery-card {transition:none}\n  .dsh-theme-gallery-card:hover {transform:none}\n}\n/* Wallpaper for every registered theme, including user-defined ones. */\nbody[data-dsh-theme] {\n  --dsh-theme-effect-motion-duration:200ms;\n  --dsh-theme-effect-motion-easing:cubic-bezier(.22,.61,.36,1);\n  --dsh-theme-effect-focus-ring-width:2px;\n  --dsh-theme-effect-focus-ring-offset:2px;\n  background-image:var(--dsh-theme-wallpaper);\n  background-position:center;\n  background-size:cover;\n  background-repeat:no-repeat;\n  background-attachment:fixed\n}\nbody[data-dsh-theme]:not([data-ds-dark-theme]) {\n  --dsh-theme-sidebar-surface:var(--dsw-static-neutral-bluish-50);\n  --dsh-theme-conversation-surface:var(--dsw-static-neutral-bluish-00)\n}\nbody[data-dsh-theme][data-ds-dark-theme] {\n  --dsh-theme-sidebar-surface:var(--dsw-static-neutral-bluish-900);\n  --dsh-theme-conversation-surface:var(--dsw-static-neutral-bluish-950)\n}\n/*\n * Generic effect layer for the wallpaper themes.\n *\n * A theme only declares two inputs through `ctx.theme.register` tokens:\n *   --dsh-theme-accent   its signature color\n *   --dsh-theme-surface  the light or dark base it sits on\n * plus an optional `--dsh-theme-accent-ink` for text on that accent.\n * Everything below is derived from them, so a new built-in theme — or a theme\n * a user types into the gallery — needs no CSS at all.\n *\n * The values keep four concerns separate so states stay consistent:\n * motion tokens, glass surfaces (which respect both transparency sliders),\n * interaction feedback, and decoration (the wallpaper atmosphere).\n */\nbody[data-dsh-theme]:not([data-dsh-theme=dsh-theme]) {\n  --dsh-theme-accent-resolved:var(--dsh-theme-accent,var(--dsw-alias-brand-primary,#5b7c99));\n  --dsh-theme-surface-resolved:var(--dsh-theme-surface,#ffffff);\n  --dsh-theme-ink-resolved:var(--dsh-theme-accent-ink,color-mix(in srgb,var(--dsh-theme-accent-resolved) 66%,#0b1220));\n  --dsh-theme-glass-border:color-mix(in srgb,var(--dsh-theme-accent-resolved) 22%,var(--dsh-theme-surface-resolved));\n  /* Atmosphere: accent light above the artwork, a soft shade at the bottom,\n     all painted as background layers so no element ever covers the UI. */\n  background-image:\n    radial-gradient(115% 80% at 8% 0%,color-mix(in srgb,var(--dsh-theme-accent-resolved) 18%,transparent),transparent 58%),\n    radial-gradient(90% 70% at 100% 100%,color-mix(in srgb,var(--dsh-theme-accent-resolved) 12%,transparent),transparent 62%),\n    linear-gradient(180deg,#ffffff12,transparent 26%,#060a141a),\n    var(--dsh-theme-wallpaper);\n  background-position:center;\n  background-size:cover;\n  /* Glass surfaces. The two fill tokens keep the transparency sliders working. */\n  --dsh-theme-sidebar-surface:color-mix(in srgb,var(--dsh-theme-surface-resolved) 86%,var(--dsh-theme-accent-resolved) 14%);\n  --dsh-theme-conversation-surface:color-mix(in srgb,var(--dsh-theme-surface-resolved) 76%,var(--dsh-theme-accent-resolved) 24%);\n  /* Interaction feedback. */\n  --dsw-alias-interactive-bg-hover:color-mix(in srgb,var(--dsh-theme-accent-resolved) 9%,transparent);\n  --dsw-alias-interactive-bg-hover-accent:color-mix(in srgb,var(--dsh-theme-accent-resolved) 16%,transparent);\n  --dsw-specific-sidebar-nav-item-active:color-mix(in srgb,var(--dsh-theme-accent-resolved) 17%,transparent);\n  --dsw-specific-sidebar-nav-item-active-accent:color-mix(in srgb,var(--dsh-theme-accent-resolved) 28%,transparent);\n  /* Surfaces and cards. */\n  --dsw-alias-settings-card-fill:color-mix(in srgb,var(--dsh-theme-surface-resolved) 94%,var(--dsh-theme-accent-resolved) 6%);\n  --dsw-alias-settings-card-stroke:color-mix(in srgb,var(--dsh-theme-accent-resolved) 24%,transparent);\n  --dsw-alias-bg-elevated:color-mix(in srgb,var(--dsh-theme-surface-resolved) 95%,var(--dsh-theme-accent-resolved) 5%);\n  --dsw-specific-bubble:color-mix(in srgb,var(--dsh-theme-surface-resolved) 88%,var(--dsh-theme-accent-resolved) 12%);\n  --dsw-specific-input-major:color-mix(in srgb,var(--dsh-theme-surface-resolved) 90%,var(--dsh-theme-accent-resolved) 10%);\n  --dsw-specific-menu:color-mix(in srgb,var(--dsh-theme-surface-resolved) 95%,var(--dsh-theme-accent-resolved) 5%);\n  --dsw-specific-selector:color-mix(in srgb,var(--dsh-theme-accent-resolved) 14%,transparent);\n  /* Lines and ink. */\n  --dsw-alias-border-l2:color-mix(in srgb,var(--dsh-theme-accent-resolved) 24%,transparent);\n  --dsw-alias-border-l4:color-mix(in srgb,var(--dsh-theme-accent-resolved) 16%,transparent);\n  --dsw-alias-link:var(--dsh-theme-ink-resolved);\n  --dsw-alias-menu-icon:var(--dsh-theme-ink-resolved);\n  --dsw-alias-scrollbar-hover-l1:color-mix(in srgb,var(--dsh-theme-accent-resolved) 34%,transparent)\n}\nbody[data-dsh-theme][data-ds-dark-theme]:not([data-dsh-theme=dsh-theme]) {\n  background-image:\n    radial-gradient(115% 80% at 10% 0%,color-mix(in srgb,var(--dsh-theme-accent-resolved) 26%,transparent),transparent 60%),\n    radial-gradient(95% 75% at 100% 100%,color-mix(in srgb,var(--dsh-theme-accent-resolved) 20%,transparent),transparent 64%),\n    linear-gradient(180deg,#ffffff0a,transparent 30%,#03060e42),\n    var(--dsh-theme-wallpaper)\n}\nbody[data-dsh-theme=dsh-theme] {\n  color-scheme:light;\n  --dsh-font-family-text:DshVipDream;\n  --dsh-appearance-hero-width:fit-content;\n  --dsh-appearance-hero-title-size:42px;\n  --dsh-appearance-hero-title-offset-y:-31px;\n  --dsh-appearance-composer-max-width:1070px;\n  --dsh-appearance-composer-min-height:150px;\n  --dsh-appearance-composer-toolbar-padding:0px 8px 2px;\n  --dsh-appearance-hero-decoration:url(__VIP_HERO_ASSET__);\n  --dsh-appearance-hero-backdrop-filter:none;\n  --dsh-appearance-hero-subtitle-display:block;\n  --dsh-appearance-hero-subtitle-size:13px;\n  --dsh-appearance-hero-subtitle-letter-spacing:.3em;\n  --dsh-appearance-hero-subtitle-glow:0 1px 8px #ffffffdb;\n  --dsh-appearance-hero-subtitle-offset-y:-40px;\n  --dsh-appearance-composer-hero-padding-bottom:16px;\n  --dsh-theme-glass-tint:255 184 83;\n  --dsh-theme-glass-filter:blur(20px) saturate(138%);\n  --dsh-theme-glass-sidebar:#fff8e8e8;\n  --dsh-theme-glass-panel:#fffaf0c4;\n  --dsh-theme-glass-composer:#fffaf0de;\n  --dsh-theme-glass-control-hover:#fff2d8e0;\n  --dsh-theme-glass-reading-surface:#fffbf3e8;\n  --dsh-theme-glass-stroke:#fff8e8e6;\n  --dsh-theme-glass-shadow:0 12px 34px #6f431e33, 0 0 30px #dba73f33;\n  --dsh-theme-hero-surface:transparent;\n  --dsh-theme-hero-title-gradient:linear-gradient(100deg, #593900 0%, #704400 34%, #875709 52%, #704400 76%, #593900 100%);\n  --dsh-theme-hero-title-gradient-size:240% 100%;\n  --dsh-theme-hero-title-fill:transparent;\n  --dsh-theme-effect-title-glow:drop-shadow(0 2px 12px #fff9e7f5) drop-shadow(0 0 24px #fffdf7c9) drop-shadow(0 0 18px #efb74e70);\n  --dsh-theme-hero-title-glow:var(--dsh-theme-effect-title-glow);\n  --dsh-theme-effect-shimmer-duration:8s;\n  --dsh-theme-effect-glow-duration:3.6s;\n  --dsh-theme-effect-loop-easing:ease-in-out;\n  --dsh-theme-hero-title-animation:dsh-vip-title-shimmer var(--dsh-theme-effect-shimmer-duration) var(--dsh-theme-effect-loop-easing) infinite;\n  --dsh-theme-effect-icon-glow:drop-shadow(0 1px 3px #ffffffeb) drop-shadow(0 0 10px #dea3388f);\n  --dsh-theme-hero-icon-glow:var(--dsh-theme-effect-icon-glow);\n  --dsh-theme-hero-icon-animation:dsh-vip-gold-glow var(--dsh-theme-effect-glow-duration) var(--dsh-theme-effect-loop-easing) infinite;\n  --dsh-appearance-accent:#94600d;\n  --dsh-appearance-surface:#fffaf0d1;\n  --dsh-appearance-stroke:#a877263d;\n  --dsh-appearance-glow:0 0 24px #d6a13e45;\n  --dsh-appearance-text-glow:0 0 12px #fffc;\n  --dsh-appearance-section-fill:#fffcf77a;\n  --dsh-appearance-section-padding:4px;\n  --dsh-appearance-control-glow:0 2px 14px #b27e242e;\n  --dsh-appearance-chip-fill:#ffffffd1;\n  --dsh-appearance-chip-stroke:#be8f3961;\n  --dsh-appearance-chip-padding:1px;\n  --dsh-appearance-label-weight:500;\n  --dsh-appearance-action-fill:linear-gradient(135deg, #fff2ce, #e9c778 74%, #f8dda0);\n  --dsh-appearance-action-hover:linear-gradient(135deg, #fff8e8, #f3d994 74%, #ffebbd);\n  --dsh-appearance-action-ink:#49310b;\n  --dsh-appearance-action-glow:0 4px 22px #cf982f57, 0 0 30px #f5c0533d;\n  --dsh-appearance-action-hover-filter:brightness(1.03);\n  --dsh-appearance-composer-halo:0 0 24px #e7b54e57, 0 0 46px #faca6438;\n  --dsh-appearance-hero-halo:none;\n  --dsh-appearance-hero-title-color:#94600d;\n  --dsh-appearance-hero-root-fill:linear-gradient(#fffcf50d, #fffcf50d);\n  --dsh-appearance-preview-badge-fill:#fffbf0e6;\n  --dsh-appearance-preview-badge-stroke:#d6b15f;\n  --dsh-appearance-preview-badge-ink:#76500e;\n  --dsh-appearance-workspace-ink:#293b55;\n  --dsh-appearance-workspace-text-glow:0 0 8px #ffffffc7;\n  --dsh-appearance-sidebar-decoration:radial-gradient(ellipse at 12% 58%, #e7b65d52, transparent 45%), radial-gradient(ellipse at 0% 6%, #fff8e6a3, transparent 48%);\n  --dsh-appearance-sidebar-shadow:inset -1px 0 #b886343d, 8px 0 28px #7a501920;\n  --dsh-appearance-menu-icon:#8a641f;\n  --dsh-appearance-new-session-fill:linear-gradient(135deg, #fff4d9, #f0d08a 68%, #f9e3ad);\n  --dsh-appearance-new-session-hover:linear-gradient(135deg, #fff9ec, #f7dda0 68%, #fff0c5);\n  --dsh-appearance-new-session-ink:#49310b;\n  --dsh-appearance-new-session-stroke:#b5832b52;\n  --dsh-appearance-new-session-glow:0 4px 18px #bf8c2a3d;\n  --dsh-appearance-sidebar-row-hover:#d5a74e24;\n  --dsh-appearance-sidebar-row-active:linear-gradient(100deg, #f6e0b4d6, #eacc91c7);\n  --dsh-appearance-sidebar-row-active-ink:#3e2b0e\n}\nbody[data-dsh-theme=dsh-theme][data-dsh-theme-glass] {\n  --dsh-theme-hero-surface:transparent\n}\n@keyframes dsh-vip-gold-glow {\n  0%,\n  to {\n    filter: drop-shadow(0 0 4px #dda54375);\n  }\n  50% {\n    filter: drop-shadow(0 0 12px #ffda7ef0);\n  }\n}\n@keyframes dsh-vip-title-shimmer {\n  0%, 68%, 100% {\n    background-position: 0% 50%;\n  }\n  82% {\n    background-position: 100% 50%;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-theme] {\n    --dsh-theme-effect-motion-duration:0ms\n  }\n  body[data-dsh-theme=dsh-theme] {\n    --dsh-theme-hero-title-animation: none;\n    --dsh-theme-hero-icon-animation: none;\n  }\n}"
			.replaceAll("__VIP_FONT_ASSET__", require.asset("plugins/@tinyforge/dsh-theme/assets/guru-qiu-wan-760bf36ff908.woff2"))
			.replaceAll("__VIP_HERO_ASSET__", require.asset("plugins/@tinyforge/dsh-theme/assets/hero-orbit-4e09640dbc7b.webp"));
		//#endregion
		//#region src/client/assets/vip-dream.wallpaper.webp
		var vip_dream_wallpaper_default = require.asset("plugins/@tinyforge/dsh-theme/assets/vip-dream.wallpaper-d6b56fa59a07.webp");
		//#endregion
		//#region src/client/assets/dragon-boat-festival.wallpaper.webp
		var dragon_boat_festival_wallpaper_default = require.asset("plugins/@tinyforge/dsh-theme/assets/dragon-boat-festival.wallpaper-22afcc1b1020.webp");
		//#endregion
		//#region src/client/assets/qingming-festival.wallpaper.webp
		var qingming_festival_wallpaper_default = require.asset("plugins/@tinyforge/dsh-theme/assets/qingming-festival.wallpaper-294e3c76365b.webp");
		//#endregion
		//#region src/client/assets/qixi-festival.wallpaper.webp
		var qixi_festival_wallpaper_default = require.asset("plugins/@tinyforge/dsh-theme/assets/qixi-festival.wallpaper-ca5331ceefe0.webp");
		//#endregion
		//#region src/client/assets/lantern-festival.wallpaper.webp
		var lantern_festival_wallpaper_default = require.asset("plugins/@tinyforge/dsh-theme/assets/lantern-festival.wallpaper-fefcda67a265.webp");
		//#endregion
		//#region src/client/assets/mid-autumn-festival.wallpaper.webp
		var mid_autumn_festival_wallpaper_default = require.asset("plugins/@tinyforge/dsh-theme/assets/mid-autumn-festival.wallpaper-2ef47f05953a.webp");
		//#endregion
		//#region src/client/assets/halloween.wallpaper.webp
		var halloween_wallpaper_default = require.asset("plugins/@tinyforge/dsh-theme/assets/halloween.wallpaper-0e68382ae909.webp");
		//#endregion
		//#region src/client/assets/christmas.wallpaper.webp
		var christmas_wallpaper_default = require.asset("plugins/@tinyforge/dsh-theme/assets/christmas.wallpaper-6c10cdd889b1.webp");
		//#endregion
		//#region lib/types/client/index.js
		const React = require("react");
		const { defineStore } = require("@deepseek-ai/dsh-client-store");
		const h = React.createElement;
		const THEME_LOCALE = "settings.dsh-theme";
		const galleryCopy = {
			zh: { title: "主题与壁纸", preview: "预览", apply: "应用主题", close: "关闭", current: "当前使用", sidebarTransparency: "侧边栏背景透明度", conversationTransparency: "对话区背景透明度", customize: "自定义主题", addCustom: "添加自定义主题", editCustom: "编辑", remove: "删除", save: "保存", cancel: "取消", nameLabel: "名称", wallpaperLabel: "壁纸图片地址", accentLabel: "主题色", schemeLabel: "外观", light: "浅色", dark: "深色", custom: "自定义", errorName: "请填写主题名称", errorWallpaper: "请填写以 https://、data:image/ 或 / 开头的图片地址", customHint: "主题色会自动生成选中态、边框和光晕；留空图片地址则只换配色。", vip: "VIP 金耀", sea: "端午龙舟", bamboo: "清明踏青", coral: "七夕鹊桥", lavender: "元宵灯会", midnight: "中秋月境", halloween: "万圣夜", christmas: "圣诞雪境" },
			en: { title: "Themes and wallpaper", preview: "Preview", apply: "Apply theme", close: "Close", current: "In use", sidebarTransparency: "Sidebar background transparency", conversationTransparency: "Conversation background transparency", customize: "Custom themes", addCustom: "Add custom theme", editCustom: "Edit", remove: "Delete", save: "Save", cancel: "Cancel", nameLabel: "Name", wallpaperLabel: "Wallpaper image URL", accentLabel: "Accent color", schemeLabel: "Appearance", light: "Light", dark: "Dark", custom: "Custom", errorName: "Enter a theme name", errorWallpaper: "Enter an image URL starting with https://, data:image/, or /", customHint: "The accent color drives selection, borders, and glows; leave the image URL empty to reuse the current wallpaper.", vip: "VIP Golden Radiance", sea: "Dragon Boat Festival", bamboo: "Qingming Festival", coral: "Qixi Festival", lavender: "Lantern Festival", midnight: "Mid-Autumn Festival", halloween: "Halloween Night", christmas: "Christmas Snowglow" },
			ja: { title: "テーマと壁紙", preview: "プレビュー", apply: "テーマを適用", close: "閉じる", current: "使用中", sidebarTransparency: "サイドバーの背景透過度", conversationTransparency: "会話エリアの背景透過度", customize: "カスタムテーマ", addCustom: "カスタムテーマを追加", editCustom: "編集", remove: "削除", save: "保存", cancel: "キャンセル", nameLabel: "名前", wallpaperLabel: "壁紙画像のURL", accentLabel: "テーマカラー", schemeLabel: "外観", light: "ライト", dark: "ダーク", custom: "カスタム", errorName: "テーマ名を入力してください", errorWallpaper: "https://、data:image/、/ で始まる画像URLを入力してください", customHint: "テーマカラーは選択状態・枠線・光のにじみに反映されます。", vip: "VIP ゴールデン", sea: "端午節", bamboo: "清明節", coral: "七夕", lavender: "元宵節", midnight: "中秋節", halloween: "ハロウィンナイト", christmas: "クリスマスの雪景色" },
			fr: { title: "Thèmes et fonds d’écran", preview: "Aperçu", apply: "Appliquer le thème", close: "Fermer", current: "Actuel", sidebarTransparency: "Transparence de l’arrière-plan de la barre latérale", conversationTransparency: "Transparence de l’arrière-plan de la conversation", customize: "Thèmes personnalisés", addCustom: "Ajouter un thème", editCustom: "Modifier", remove: "Supprimer", save: "Enregistrer", cancel: "Annuler", nameLabel: "Nom", wallpaperLabel: "URL de l’image de fond", accentLabel: "Couleur d’accent", schemeLabel: "Apparence", light: "Clair", dark: "Sombre", custom: "Personnalisé", errorName: "Saisissez un nom de thème", errorWallpaper: "Saisissez une URL commençant par https://, data:image/ ou /", customHint: "La couleur d’accent pilote la sélection, les bordures et les halos.", vip: "Éclat doré VIP", sea: "Fête des bateaux-dragons", bamboo: "Fête de Qingming", coral: "Fête de Qixi", lavender: "Fête des lanternes", midnight: "Fête de la mi-automne", halloween: "Nuit d’Halloween", christmas: "Noël enneigé" },
			es: { title: "Temas y fondos de pantalla", preview: "Vista previa", apply: "Aplicar tema", close: "Cerrar", current: "En uso", sidebarTransparency: "Transparencia del fondo de la barra lateral", conversationTransparency: "Transparencia del fondo de la conversación", customize: "Temas personalizados", addCustom: "Añadir tema", editCustom: "Editar", remove: "Eliminar", save: "Guardar", cancel: "Cancelar", nameLabel: "Nombre", wallpaperLabel: "URL de la imagen de fondo", accentLabel: "Color de acento", schemeLabel: "Apariencia", light: "Claro", dark: "Oscuro", custom: "Personalizado", errorName: "Escribe un nombre de tema", errorWallpaper: "Escribe una URL que empiece por https://, data:image/ o /", customHint: "El color de acento define la selección, los bordes y los halos.", vip: "Brillo dorado VIP", sea: "Festival del Bote del Dragón", bamboo: "Festival Qingming", coral: "Festival Qixi", lavender: "Festival de los Faroles", midnight: "Festival de Medio Otoño", halloween: "Noche de Halloween", christmas: "Navidad nevada" },
			pt: { title: "Temas e papéis de parede", preview: "Pré-visualizar", apply: "Aplicar tema", close: "Fechar", current: "Em uso", sidebarTransparency: "Transparência do fundo da barra lateral", conversationTransparency: "Transparência do fundo da conversa", customize: "Temas personalizados", addCustom: "Adicionar tema", editCustom: "Editar", remove: "Excluir", save: "Salvar", cancel: "Cancelar", nameLabel: "Nome", wallpaperLabel: "URL da imagem de papel de parede", accentLabel: "Cor de destaque", schemeLabel: "Aparência", light: "Claro", dark: "Escuro", custom: "Personalizado", errorName: "Informe um nome de tema", errorWallpaper: "Informe uma URL que comece com https://, data:image/ ou /", customHint: "A cor de destaque define a seleção, as bordas e os halos.", vip: "Brilho dourado VIP", sea: "Festival do Barco-Dragão", bamboo: "Festival Qingming", coral: "Festival Qixi", lavender: "Festival das Lanternas", midnight: "Festival do Meio do Outono", halloween: "Noite de Halloween", christmas: "Natal nevado" },
			ru: { title: "Темы и обои", preview: "Предпросмотр", apply: "Применить тему", close: "Закрыть", current: "Используется", sidebarTransparency: "Прозрачность фона боковой панели", conversationTransparency: "Прозрачность фона области диалога", customize: "Свои темы", addCustom: "Добавить тему", editCustom: "Изменить", remove: "Удалить", save: "Сохранить", cancel: "Отмена", nameLabel: "Название", wallpaperLabel: "URL изображения обоев", accentLabel: "Акцентный цвет", schemeLabel: "Оформление", light: "Светлая", dark: "Тёмная", custom: "Своя", errorName: "Укажите название темы", errorWallpaper: "Укажите URL, начинающийся с https://, data:image/ или /", customHint: "Акцентный цвет задаёт выделение, рамки и свечение.", vip: "Золотое сияние VIP", sea: "Праздник драконьих лодок", bamboo: "Цинмин", coral: "Циси", lavender: "Фестиваль фонарей", midnight: "Праздник середины осени", halloween: "Хэллоуинская ночь", christmas: "Снежное Рождество" },
			de: { title: "Designs und Hintergrundbilder", preview: "Vorschau", apply: "Design anwenden", close: "Schließen", current: "Aktiv", sidebarTransparency: "Transparenz des Seitenleistenhintergrunds", conversationTransparency: "Transparenz des Gesprächshintergrunds", customize: "Eigene Designs", addCustom: "Design hinzufügen", editCustom: "Bearbeiten", remove: "Löschen", save: "Speichern", cancel: "Abbrechen", nameLabel: "Name", wallpaperLabel: "URL des Hintergrundbilds", accentLabel: "Akzentfarbe", schemeLabel: "Erscheinungsbild", light: "Hell", dark: "Dunkel", custom: "Eigenes", errorName: "Bitte einen Designnamen angeben", errorWallpaper: "Bitte eine URL angeben, die mit https://, data:image/ oder / beginnt", customHint: "Die Akzentfarbe steuert Auswahl, Rahmen und Glows.", vip: "VIP Goldglanz", sea: "Drachenbootfest", bamboo: "Qingming-Fest", coral: "Qixi-Fest", lavender: "Laternenfest", midnight: "Mondfest", halloween: "Halloween-Nacht", christmas: "Verschneite Weihnacht" }
		};
		/** Locale keys for the wallpaper themes this build ships. */
		const galleryNameKeys = {
			"dsh-theme": "vip",
			"official-sea-salt": "sea",
			"official-bamboo-green": "bamboo",
			"official-coral-pink": "coral",
			"official-lavender": "lavender",
			"official-midnight-indigo": "midnight",
			"official-halloween": "halloween",
			"official-christmas": "christmas"
		};
		/** Extra copy for the standalone settings page (nav label, heading, blocks). */
		const pageCopy = {
			zh: { nav: "主题与壁纸", subtitle: "挑一款壁纸应用为界面配色，也可以添加自己的主题；效果会跟着主色自动生成。", transparency: "背景透明度", wallpaperBlock: "壁纸主题", customBlock: "自定义" },
			en: { nav: "Themes & wallpaper", subtitle: "Pick a wallpaper to palette the interface, or add your own; effects follow the accent color.", transparency: "Background transparency", wallpaperBlock: "Wallpaper themes", customBlock: "Custom" },
			ja: { nav: "テーマと壁紙", subtitle: "壁紙を選んで配色を変えたり、独自のテーマを追加できます。", transparency: "背景の透過度", wallpaperBlock: "壁紙テーマ", customBlock: "カスタム" },
			fr: { nav: "Thèmes et fonds", subtitle: "Choisissez un fond pour colorer l’interface, ou créez le vôtre.", transparency: "Transparence du fond", wallpaperBlock: "Thèmes de fond", customBlock: "Personnalisés" },
			es: { nav: "Temas y fondos", subtitle: "Elige un fondo para la interfaz o crea el tuyo propio.", transparency: "Transparencia del fondo", wallpaperBlock: "Temas de fondo", customBlock: "Personalizados" },
			pt: { nav: "Temas e papéis", subtitle: "Escolha um papel de parede para a interface ou crie o seu.", transparency: "Transparência do fundo", wallpaperBlock: "Temas de papel de parede", customBlock: "Personalizados" },
			ru: { nav: "Темы и обои", subtitle: "Выберите обои для интерфейса или создайте свои.", transparency: "Прозрачность фона", wallpaperBlock: "Темы обоев", customBlock: "Свои темы" },
			de: { nav: "Designs & Hintergründe", subtitle: "Wähle ein Hintergrundbild oder erstelle dein eigenes Design.", transparency: "Hintergrundtransparenz", wallpaperBlock: "Hintergrund-Designs", customBlock: "Eigene" }
		};
		/** Complete dictionaries: gallery copy plus the standalone page's own strings. */
		const themeDictionaries = Object.fromEntries(Object.entries(galleryCopy).map(([language, copy]) => [
			language,
			{ ...copy, ...(pageCopy[language] ?? pageCopy.en) }
		]));
		function createGalleryStore() {
			return defineStore({
				init: () => ({ preference: "system", sidebarTransparency: 0, conversationTransparency: 0 }),
				actions: { sync: (draft, preference, sidebarTransparency, conversationTransparency) => {
					draft.preference = preference;
					draft.sidebarTransparency = sidebarTransparency;
					draft.conversationTransparency = conversationTransparency;
				} }
			});
		}
		/**
		 * The wallpaper gallery: every registered theme, the two transparency
		 * sliders, a large preview, and the editor for user-defined themes.
		 */
		function ThemeGallery({ t, useStore, themes, setTheme, setTransparency, customNames, saveCustomTheme, removeCustomTheme }) {
			const preference = useStore((state) => state.preference);
			const sidebarTransparency = useStore((state) => state.sidebarTransparency);
			const conversationTransparency = useStore((state) => state.conversationTransparency);
			const [previewId, setPreviewId] = React.useState(null);
			const [draft, setDraft] = React.useState(null);
			const [error, setError] = React.useState("");
			const previewRef = React.useRef(null);
			const editorRef = React.useRef(null);
			const preview = themes.find((theme) => theme.id === previewId);
			const labelOf = (theme) => customNames.get(theme.id) ?? t(galleryNameKeys[theme.id] ?? "custom");
			const accentOf = (theme) => theme.tokens?.["--dsh-theme-accent"] ?? "#5b7c99";
			const customCount = customNames.size;
			React.useEffect(() => {
				const dialog = previewRef.current;
				if (!dialog) return;
				if (preview && !dialog.open) dialog.showModal();
				else if (!preview && dialog.open) dialog.close();
			}, [preview]);
			React.useEffect(() => {
				const dialog = editorRef.current;
				if (!dialog) return;
				if (draft && !dialog.open) dialog.showModal();
				else if (!draft && dialog.open) dialog.close();
			}, [draft]);
			const openEditor = (theme) => {
				setError("");
				if (!theme) {
					setDraft({ id: null, name: "", wallpaper: "", accent: "#5b7c99", colorScheme: "light" });
					return;
				}
				setDraft({ id: theme.id, name: customNames.get(theme.id) ?? "", wallpaper: theme.wallpaper ?? "", accent: accentOf(theme), colorScheme: theme.colorScheme === "dark" ? "dark" : "light" });
			};
			const updateDraft = (key) => (event) => {
				const value = event.currentTarget.value;
				setDraft((current) => current ? { ...current, [key]: value } : current);
			};
			const submitDraft = (event) => {
				event.preventDefault();
				if (!draft) return;
				const result = saveCustomTheme(draft) ?? {};
				if (result.error) {
					setError(t(result.error));
					return;
				}
				setError("");
				setDraft(null);
				setPreviewId(null);
			};
			const dialogActions = (theme) => [
				h("button", { key: "close", type: "button", className: "dsh-theme-gallery-action", onClick: () => setPreviewId(null) }, t("close")),
				customNames.has(theme.id) ? h("button", {
					key: "remove",
					type: "button",
					className: "dsh-theme-gallery-action dsh-theme-gallery-action-quiet",
					onClick: () => { removeCustomTheme(theme.id); setPreviewId(null); }
				}, t("remove")) : null,
				customNames.has(theme.id) ? h("button", { key: "edit", type: "button", className: "dsh-theme-gallery-action", onClick: () => openEditor(theme) }, t("editCustom")) : null,
				h("button", { key: "apply", type: "button", className: "dsh-theme-gallery-action dsh-theme-gallery-action-primary", onClick: () => { setTheme(theme.id); setPreviewId(null); } }, t("apply"))
			];
			const editorFields = draft ? [
				h("label", { key: "name", className: "dsh-theme-field" },
					h("span", null, t("nameLabel")),
					h("input", { type: "text", value: draft.name, maxLength: 60, placeholder: t("nameLabel"), onChange: updateDraft("name") })
				),
				h("label", { key: "wallpaper", className: "dsh-theme-field" },
					h("span", null, t("wallpaperLabel")),
					h("input", { type: "url", value: draft.wallpaper, placeholder: "https://…", onChange: updateDraft("wallpaper") })
				),
				h("div", { key: "row", className: "dsh-theme-field-row" },
					h("label", { className: "dsh-theme-field dsh-theme-field-color" },
						h("span", null, t("accentLabel")),
						h("input", { type: "color", value: draft.accent, onChange: updateDraft("accent") })
					),
					h("label", { className: "dsh-theme-field" },
						h("span", null, t("schemeLabel")),
						h("select", { value: draft.colorScheme, onChange: updateDraft("colorScheme") },
							h("option", { value: "light" }, t("light")),
							h("option", { value: "dark" }, t("dark"))
						)
					)
				)
			] : null;
			return h("div", { className: "dsh-theme-page" },
				h("header", { className: "dsh-theme-page-header" },
					h("h2", { className: "dsh-theme-page-title" }, t("title")),
					h("p", { className: "dsh-theme-page-subtitle" }, t("subtitle"))
				),
				h("section", { className: "dsh-theme-page-block" },
					h("h3", { className: "dsh-theme-block-title" }, t("wallpaperBlock")),
					h("div", { className: "dsh-theme-gallery-grid" }, themes.map((theme) => h("button", {
						key: theme.id,
						type: "button",
						className: "dsh-theme-gallery-card",
						"aria-pressed": preference === theme.id,
						"aria-label": `${labelOf(theme)} — ${t("preview")}`,
						onClick: () => setPreviewId(theme.id)
					}, h("img", { className: "dsh-theme-gallery-thumb", src: theme.wallpaper, alt: "", loading: "lazy" }),
					h("span", { className: "dsh-theme-gallery-card-label" },
						h("span", { className: "dsh-theme-gallery-card-name" },
							h("span", null, labelOf(theme)),
							customNames.has(theme.id) ? h("span", { className: "dsh-theme-gallery-badge" }, t("custom")) : null
						),
						preference === theme.id ? h("span", { className: "dsh-theme-gallery-current" }, t("current")) : null
					))))
				),
				h("section", { className: "dsh-theme-page-block" },
					h("h3", { className: "dsh-theme-block-title" }, t("transparency")),
					h("div", { className: "dsh-theme-opacity-controls" }, [
						["sidebarTransparency", sidebarTransparency],
						["conversationTransparency", conversationTransparency]
					].map(([key, value]) => h("label", { key, className: "dsh-theme-opacity-control" },
						h("span", { className: "dsh-theme-opacity-control-heading" },
							h("span", null, t(key)),
							h("output", null, `${value}%`)
						),
						h("input", {
							type: "range",
							min: 0,
							max: 100,
							step: 1,
							value,
							"aria-label": t(key),
							onChange: (event) => setTransparency(key, Number(event.currentTarget.value))
						})
					)))
				),
				h("section", { className: "dsh-theme-page-block dsh-theme-custom" },
					h("div", { className: "dsh-theme-custom-heading" },
						h("h3", { className: "dsh-theme-block-title" }, t("customBlock")),
						h("button", { type: "button", className: "dsh-theme-gallery-action", onClick: () => openEditor(null) }, t("addCustom"))
					),
					customCount ? h("p", { className: "dsh-theme-custom-hint" }, t("customHint")) : null
				),
				h("dialog", {
					ref: previewRef,
					className: "dsh-theme-gallery-dialog",
					"aria-label": preview ? labelOf(preview) : t("preview"),
					onCancel: (event) => { event.preventDefault(); setPreviewId(null); },
					onClose: () => setPreviewId(null),
					onClick: (event) => { if (event.target === event.currentTarget) setPreviewId(null); }
				}, preview ? [
					preview.wallpaper ? h("img", { key: "image", className: "dsh-theme-gallery-preview", src: preview.wallpaper, alt: labelOf(preview) }) : null,
					h("div", { key: "content", className: "dsh-theme-gallery-dialog-content" },
						h("h2", { className: "dsh-theme-gallery-dialog-title" }, labelOf(preview)),
						h("div", { className: "dsh-theme-gallery-dialog-actions" }, dialogActions(preview))
					)
				] : null),
				h("dialog", {
					ref: editorRef,
					className: "dsh-theme-gallery-dialog",
					"aria-label": draft?.id ? t("editCustom") : t("addCustom"),
					onCancel: (event) => { event.preventDefault(); setDraft(null); },
					onClose: () => setDraft(null),
					onClick: (event) => { if (event.target === event.currentTarget) setDraft(null); }
				}, draft ? h("form", { className: "dsh-theme-gallery-dialog-content", onSubmit: submitDraft },
					h("h2", { className: "dsh-theme-gallery-dialog-title" }, draft.id ? t("editCustom") : t("addCustom")),
					h("div", { className: "dsh-theme-editor-fields" }, editorFields),
					error ? h("p", { className: "dsh-theme-editor-error", role: "alert" }, error) : null,
					h("div", { className: "dsh-theme-gallery-dialog-actions" },
						h("button", { type: "button", className: "dsh-theme-gallery-action", onClick: () => setDraft(null) }, t("cancel")),
						h("button", { type: "submit", className: "dsh-theme-gallery-action dsh-theme-gallery-action-primary" }, t("save"))
					)
				) : null)
			);
		}
		const THEME_ID = "dsh-theme";
		const STYLE_ID = "@tinyforge/dsh-theme/styles.css";
		const CUSTOM_ID_PREFIX = "custom-";
		const THEME_PALETTE = {
			light: { surface: "#ffffff", ink: "#152b4c", hoverLighten: 0.14 },
			dark: { surface: "#0d1220", ink: "#dbe4ff", hoverLighten: 0.1 }
		};
		/**
		 * The two fill tokens need the transparency sliders, so they stay in JS.
		 * Every other visual value is derived in CSS from `--dsh-theme-accent`
		 * and `--dsh-theme-surface`, which is what makes new themes CSS-free.
		 */
		const surfaceTokens = {
			"--dsw-specific-sidebar-fill": "color-mix(in srgb, var(--dsh-theme-sidebar-surface) calc(100% - var(--dsh-theme-sidebar-transparency, 0%)), transparent)",
			// The frame behind every column: transparent so the wallpaper shows, which
			// keeps the conversation area independent of the sidebar slider.
			"--dsw-specific-window-backdrop": "transparent",
			"--dsw-alias-bg-base": "color-mix(in srgb, var(--dsh-theme-conversation-surface) calc(100% - var(--dsh-theme-conversation-transparency, 0%)), transparent)"
		};
		/** Lighten (`ratio` > 0) or darken a `#rgb`/`#rrggbb` color. */
		function shiftHex(hex, ratio) {
			const value = String(hex).replace("#", "");
			const full = value.length === 3 ? value.split("").map((part) => part + part).join("") : value.slice(0, 6);
			if (!/^[0-9a-f]{6}$/i.test(full)) return hex;
			const target = ratio >= 0 ? 255 : 0;
			const amount = Math.abs(ratio);
			const channel = (offset) => {
				const part = Number.parseInt(full.slice(offset, offset + 2), 16);
				return Math.round(part + (target - part) * amount).toString(16).padStart(2, "0");
			};
			return `#${channel(0)}${channel(2)}${channel(4)}`;
		}
		/** Quote a URL for a CSS `url()` value without letting content break out. */
		function cssUrl(value) {
			return `url("${String(value).replace(/["\\\n\r\u0000-\u001f]/g, (ch) => encodeURIComponent(ch))}")`;
		}
		/**
		 * Turn a declarative theme spec into the object `ctx.theme.register`
		 * expects. A theme is `id`, `accent`, `wallpaper`, `colorScheme` and
		 * optional `surface`, `ink`, `overlay`, `labels`; everything else —
		 * glass, borders, hover tints, glows — is derived by the stylesheet.
		 */
		function createWallpaperTheme(spec) {
			const colorScheme = spec.colorScheme === "dark" ? "dark" : "light";
			const palette = THEME_PALETTE[colorScheme];
			const accent = spec.accent;
			const tokens = {
				...surfaceTokens,
				"--dsw-alias-brand-primary": accent,
				"--dsw-alias-button-info-fill": accent,
				"--dsw-alias-button-info-hover": shiftHex(accent, palette.hoverLighten),
				"--dsw-alias-state-business-primary": accent,
				"--dsh-theme-accent": accent,
				"--dsh-theme-surface": spec.surface ?? palette.surface,
				"--dsh-theme-accent-ink": spec.ink ?? palette.ink,
				...(spec.extraTokens ?? {})
			};
			return {
				id: spec.id,
				colorScheme,
				tokens,
				...(spec.wallpaper ? { wallpaper: spec.wallpaper } : {}),
				...(spec.overlay ? { wallpaperOverlay: spec.overlay } : {}),
				glass: spec.glass ?? true,
				...(spec.fontFamily ? { fontFamily: spec.fontFamily } : {}),
				labels: spec.labels ?? { zh: spec.name ?? spec.id, en: spec.name ?? spec.id }
			};
		}
		/**
		 * Wallpapers this package ships. Adding a theme is one entry here: pick
		 * an accent, a surface tint, and the artwork; the effect layer derives
		 * the glass, borders, hover states and glow from those two colors.
		 */
		const builtInThemes = [
			createWallpaperTheme({
				id: THEME_ID,
				colorScheme: "light",
				accent: "#b78022",
				ink: "#8a5a0a",
				surface: "#fffaf0",
				wallpaper: vip_dream_wallpaper_default,
				overlay: { light: "rgb(255 248 235 / 8%)", dark: "rgb(0 0 0 / 35%)" },
				fontFamily: "DshVipDream",
				// The signature theme keeps its hand-tuned gold palette on top of the
				// derived ones, including the glass panel behind the conversation area.
				extraTokens: {
					"--dsw-alias-bg-base": "color-mix(in srgb, var(--dsh-theme-glass-panel) calc(100% - var(--dsh-theme-conversation-transparency, 0%)), transparent)",
					"--dsw-alias-button-info-hover": "#c89538",
					"--dsw-alias-state-business-tertiary": "#f6ead2",
					"--dsw-alias-label-primary-bluish": "#152b4c",
					"--dsw-alias-label-tertiary": "#58677c",
					"--dsw-alias-menu-icon": "#8a641f",
					"--dsw-alias-link": "#8a5a0a",
					"--dsw-alias-border-l2": "rgb(183 131 44 / 40%)"
				},
				labels: { zh: "VIP 金耀", en: "VIP Golden Radiance" }
			}),
			createWallpaperTheme({
				id: "official-sea-salt",
				colorScheme: "light",
				accent: "#4d91b7",
				ink: "#2f6c8c",
				surface: "#f6fbff",
				wallpaper: dragon_boat_festival_wallpaper_default,
				labels: { zh: "端午龙舟", en: "Dragon Boat Festival" }
			}),
			createWallpaperTheme({
				id: "official-bamboo-green",
				colorScheme: "light",
				accent: "#44866a",
				ink: "#2f6a52",
				surface: "#f7fbf7",
				wallpaper: qingming_festival_wallpaper_default,
				labels: { zh: "清明踏青", en: "Qingming Festival" }
			}),
			createWallpaperTheme({
				id: "official-coral-pink",
				colorScheme: "light",
				accent: "#dc7183",
				ink: "#b0495c",
				surface: "#fff8f9",
				wallpaper: qixi_festival_wallpaper_default,
				labels: { zh: "七夕鹊桥", en: "Qixi Festival" }
			}),
			createWallpaperTheme({
				id: "official-lavender",
				colorScheme: "light",
				accent: "#8b70bd",
				ink: "#6a51a0",
				surface: "#faf7ff",
				wallpaper: lantern_festival_wallpaper_default,
				labels: { zh: "元宵灯会", en: "Lantern Festival" }
			}),
			createWallpaperTheme({
				id: "official-midnight-indigo",
				colorScheme: "dark",
				accent: "#7886db",
				ink: "#a7b3f4",
				surface: "#0d1220",
				wallpaper: mid_autumn_festival_wallpaper_default,
				labels: { zh: "中秋月境", en: "Mid-Autumn Festival" }
			}),
			createWallpaperTheme({
				id: "official-halloween",
				colorScheme: "dark",
				accent: "#a879dc",
				ink: "#c9a8ef",
				surface: "#141021",
				wallpaper: halloween_wallpaper_default,
				overlay: { light: "rgb(20 14 35 / 18%)", dark: "rgb(10 8 20 / 30%)" },
				labels: { zh: "万圣夜", en: "Halloween Night" }
			}),
			createWallpaperTheme({
				id: "official-christmas",
				colorScheme: "light",
				accent: "#bd5360",
				ink: "#a53a4a",
				surface: "#fffaf7",
				wallpaper: christmas_wallpaper_default,
				overlay: { light: "rgb(255 250 242 / 10%)", dark: "rgb(10 16 30 / 32%)" },
				labels: { zh: "圣诞雪境", en: "Christmas Snowglow" }
			})
		];
		/** Build a stable, filesystem-safe id for a user-defined theme. */
		function createCustomThemeId(name, entries) {
			const base = String(name).toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 32);
			const taken = new Set([...builtInThemes.map((theme) => theme.id), ...entries.map((entry) => entry?.id)]);
			let id = `${CUSTOM_ID_PREFIX}${base || "theme"}`;
			let suffix = 2;
			while (taken.has(id)) id = `${CUSTOM_ID_PREFIX}${base || "theme"}-${suffix++}`;
			return id;
		}
		const SAFE_WALLPAPER = /^(?:https?:\/\/|data:image\/|\/)/i;
		const SAFE_ACCENT = /^#[0-9a-f]{3}(?:[0-9a-f]{3})?(?:[0-9a-f]{2})?$/i;
		/** Validate one saved custom theme; anything unsafe is dropped, not repaired. */
		function normalizeCustomTheme(entry, index) {
			if (!entry || typeof entry !== "object") return null;
			const name = String(entry.name ?? "").trim().slice(0, 60);
			const wallpaper = String(entry.wallpaper ?? "").trim();
			if (!name || !SAFE_WALLPAPER.test(wallpaper)) return null;
			const accent = SAFE_ACCENT.test(String(entry.accent ?? "")) ? String(entry.accent) : "#5b7c99";
			const id = /^custom-[a-z0-9-]{1,48}$/.test(String(entry.id ?? "")) ? String(entry.id) : createCustomThemeId(name, []);
			return {
				id,
				name,
				wallpaper,
				accent,
				colorScheme: entry.colorScheme === "dark" ? "dark" : "light",
				signature: JSON.stringify([name, wallpaper, accent, entry.colorScheme === "dark" ? "dark" : "light"])
			};
		}
		function normalizeCustomThemes(entries) {
			if (!Array.isArray(entries)) return [];
			const seen = new Set();
			const result = [];
			entries.forEach((entry, index) => {
				const spec = normalizeCustomTheme(entry, index);
				if (!spec || seen.has(spec.id)) return;
				seen.add(spec.id);
				result.push(spec);
			});
			return result;
		}
		/** Mount every wallpaper theme, the gallery, and the saved preference sync. */
		function apply(ctx) {
			const themes = [...builtInThemes];
			const builtInDisposers = themes.map((theme) => ctx.theme.register(theme));
			const customRecords = new Map();
			const customNames = new Map();
			const galleryStore = createGalleryStore();
			const preferenceForm = ctx.configForms.get("dsh-theme");
			const previousDocumentTheme = document.body.dataset.dshTheme;
			const previousWallpaper = document.body.style.getPropertyValue("--dsh-theme-wallpaper");
			const previousWallpaperPriority = document.body.style.getPropertyPriority("--dsh-theme-wallpaper");
			const previousSidebarTransparency = document.body.style.getPropertyValue("--dsh-theme-sidebar-transparency");
			const previousSidebarTransparencyPriority = document.body.style.getPropertyPriority("--dsh-theme-sidebar-transparency");
			const previousConversationTransparency = document.body.style.getPropertyValue("--dsh-theme-conversation-transparency");
			const previousConversationTransparencyPriority = document.body.style.getPropertyPriority("--dsh-theme-conversation-transparency");
			ctx.effect(() => () => {
				if (previousDocumentTheme === void 0) delete document.body.dataset.dshTheme;
				else document.body.dataset.dshTheme = previousDocumentTheme;
				if (previousWallpaper === "") document.body.style.removeProperty("--dsh-theme-wallpaper");
				else document.body.style.setProperty("--dsh-theme-wallpaper", previousWallpaper, previousWallpaperPriority);
				if (previousSidebarTransparency === "") document.body.style.removeProperty("--dsh-theme-sidebar-transparency");
				else document.body.style.setProperty("--dsh-theme-sidebar-transparency", previousSidebarTransparency, previousSidebarTransparencyPriority);
				if (previousConversationTransparency === "") document.body.style.removeProperty("--dsh-theme-conversation-transparency");
				else document.body.style.setProperty("--dsh-theme-conversation-transparency", previousConversationTransparency, previousConversationTransparencyPriority);
			}, "Theme document attributes");
			// Saved preference this plugin last reconciled. Every settings write
			// re-reads the whole document and notifies every form, so acting on a
			// notification instead of a moved value re-applies a stale "system"
			// and reverts whatever the user just picked.
			let restoredPreference;
			/** Whether a saved value is one the theme service can switch to. */
			const isKnownPreference = (preference) => preference === "system" || preference === "light" || preference === "dark"
				|| themes.some((theme) => theme.id === preference);
			const restorePreference = () => {
				const preference = preferenceForm.getSnapshot().value?.preference;
				if (preference === void 0 || preference === restoredPreference) return;
				// A theme another plugin registered or this build no longer ships is
				// left alone: switching to an unregistered id would throw.
				if (!isKnownPreference(preference)) return;
				restoredPreference = preference;
				const current = ctx.theme.getTheme().preference;
				if (preference === current) return;
				// A saved "system" means no wallpaper theme is selected; it must not
				// override an explicit light or dark choice made in Appearance.
				if (preference === "system" && current !== "system") return;
				ctx.theme.setTheme(preference);
			};
			let galleryBound;
			const readConfig = () => preferenceForm.getSnapshot().value ?? {};
			const readCustomEntries = () => {
				const entries = readConfig().customThemes;
				return Array.isArray(entries) ? entries : [];
			};
			const persistPreference = (preference) => {
				if (readConfig().preference !== preference) preferenceForm.set("preference", preference);
			};
			const dropTheme = (id) => {
				const record = customRecords.get(id);
				if (record) {
					record.dispose();
					customRecords.delete(id);
				}
				customNames.delete(id);
				const index = themes.findIndex((theme) => theme.id === id);
				if (index >= 0) themes.splice(index, 1);
			};
			/**
			 * Reconcile the registered custom themes with the saved config. This
			 * runs on every settings write, so a saved theme shows up without a
			 * reload and a deleted one disappears immediately.
			 */
			const reloadCustomThemes = () => {
				const specs = normalizeCustomThemes(readCustomEntries());
				const wanted = new Map(specs.map((spec) => [spec.id, spec]));
				for (const id of [...customRecords.keys()]) {
					const record = customRecords.get(id);
					const spec = wanted.get(id);
					if (!spec || record.signature !== spec.signature) dropTheme(id);
				}
				for (const spec of specs) {
					if (customRecords.has(spec.id)) continue;
					const theme = createWallpaperTheme({ ...spec, labels: { zh: spec.name, en: spec.name } });
					try {
						const dispose = ctx.theme.register(theme);
						customRecords.set(spec.id, { dispose, signature: spec.signature });
						customNames.set(spec.id, spec.name);
						themes.push(theme);
					} catch {
						// A theme the host refuses is dropped instead of breaking the gallery.
					}
				}
				// A saved id that no longer exists must fall back before the host
				// reports an unregistered preference.
				const active = ctx.theme.getTheme().preference;
				if (active?.startsWith(CUSTOM_ID_PREFIX) && !themes.some((theme) => theme.id === active)) {
					ctx.theme.setTheme("system");
					persistPreference("system");
				}
			};
			/** Create or update a user-defined theme from the gallery editor. */
			const saveCustomTheme = (draft) => {
				const name = String(draft?.name ?? "").trim().slice(0, 60);
				if (!name) return { error: "errorName" };
				const wallpaper = String(draft?.wallpaper ?? "").trim();
				if (!SAFE_WALLPAPER.test(wallpaper)) return { error: "errorWallpaper" };
				const entries = readCustomEntries().slice();
				const existing = draft?.id && entries.some((entry) => entry?.id === draft.id) ? entries.findIndex((entry) => entry?.id === draft.id) : -1;
				const id = existing >= 0 ? entries[existing].id : createCustomThemeId(name, entries);
				const next = {
					id,
					name,
					wallpaper,
					accent: SAFE_ACCENT.test(String(draft?.accent ?? "")) ? String(draft.accent) : "#5b7c99",
					colorScheme: draft?.colorScheme === "dark" ? "dark" : "light"
				};
				if (existing >= 0) entries[existing] = next;
				else entries.push(next);
				preferenceForm.set("customThemes", entries);
				return {};
			};
			/** Remove a user-defined theme and unregister it right away. */
			const removeCustomTheme = (id) => {
				const entries = readCustomEntries().filter((entry) => entry?.id !== id);
				preferenceForm.set("customThemes", entries);
				dropTheme(id);
				if (ctx.theme.getTheme().preference === id) {
					ctx.theme.setTheme("system");
					persistPreference("system");
				}
			};
			// Preference this plugin last observed: a moved value is saved, a
			// repeated read saves nothing, and the first read after startup is
			// recorded without writing back the palette adopted before the form
			// loaded.
			let observedPreference;
			const syncGallery = (snapshot) => {
				const config = readConfig();
				const sidebarTransparency = config.sidebarTransparency ?? 0;
				const conversationTransparency = config.conversationTransparency ?? 0;
				galleryBound?.sync(snapshot.preference, sidebarTransparency, conversationTransparency);
				document.body.style.setProperty("--dsh-theme-sidebar-transparency", `${sidebarTransparency}%`);
				document.body.style.setProperty("--dsh-theme-conversation-transparency", `${conversationTransparency}%`);
				const activeTheme = themes.find((theme) => theme.id === snapshot.preference);
				if (activeTheme) {
					document.body.dataset.dshTheme = activeTheme.id;
					if (activeTheme.wallpaper) document.body.style.setProperty("--dsh-theme-wallpaper", cssUrl(activeTheme.wallpaper));
					else document.body.style.removeProperty("--dsh-theme-wallpaper");
				} else {
					delete document.body.dataset.dshTheme;
					document.body.style.removeProperty("--dsh-theme-wallpaper");
				}
				// Save a moved preference only after the saved value has been
				// reconciled: the palette adopted from host settings at startup is a
				// move too, and saving it would overwrite a stored wallpaper theme
				// before restorePreference had a chance to apply it.
				const moved = observedPreference !== void 0 && observedPreference !== snapshot.preference;
				observedPreference = snapshot.preference;
				if (moved && restoredPreference !== void 0) persistPreference(snapshot.preference);
			};
			ctx.on("theme/change", syncGallery);
			ctx.effect(() => preferenceForm.subscribe(() => {
				reloadCustomThemes();
				restorePreference();
				syncGallery(ctx.theme.getTheme());
			}), "Saved wallpaper theme and opacity");
			reloadCustomThemes();
			restorePreference();
			syncGallery(ctx.theme.getTheme());
			ctx.effect(() => ctx.locale.register(THEME_LOCALE, themeDictionaries), "Theme gallery translations");
			// The gallery is its own Settings page, not a row under General: the
			// section's nav label is re-read from the dictionary, and its content
			// owns the whole panel column.
			const themeLabel = ctx.locale.bind(THEME_LOCALE);
			ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "theme",
				order: 5,
				label: () => themeLabel("nav"),
				store: galleryStore,
				locale: THEME_LOCALE,
				inject: (actions) => {
					galleryBound = actions;
					syncGallery(ctx.theme.getTheme());
					return {
						setTheme: (id) => ctx.theme.setTheme(id),
						setTransparency: (key, value) => {
							preferenceForm.set(key, value);
							syncGallery(ctx.theme.getTheme());
						},
						themes,
						customNames,
						saveCustomTheme,
						removeCustomTheme
					};
				}
			}, ThemeGallery));
			ctx.effect(() => {
				const tag = document.createElement("style");
				tag.dataset.plugin = "@tinyforge/dsh-theme";
				tag.dataset.pluginCss = STYLE_ID;
				tag.textContent = styles_css_default;
				document.head.append(tag);
				return () => {
					tag.remove();
				};
			}, "Wallpaper appearance stylesheet");
			ctx.effect(() => () => {
				for (const record of [...customRecords.values()]) record.dispose();
				customRecords.clear();
				customNames.clear();
				for (const dispose of [...builtInDisposers].reverse()) dispose();
			}, "Wallpaper themes");
		}
		/** Services needed by the Client entry. */
		const inject = ["theme", "slots", "locale", "remote", "configForms"];
		//#endregion

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
