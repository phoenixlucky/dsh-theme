window.__ModuleLoader__.load({
	id: "@deepseek-ai/dsh-theme",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0dsh-inline-css:E:\home\dsh-theme\src\client\styles.css.mjs
		var styles_css_default = "@font-face {\n  font-family:DshVipDream;\n  src:url(__VIP_FONT_ASSET__)format(\"woff2\");\n  font-style:normal;\n  font-weight:400;\n  font-display:swap\n}\nbody[data-dsh-theme=dsh-theme] {\n  color-scheme:light;\n  --dsh-appearance-hero-width:fit-content;\n  --dsh-appearance-hero-title-size:42px;\n  --dsh-appearance-hero-title-offset-y:-31px;\n  --dsh-appearance-composer-max-width:1070px;\n  --dsh-appearance-composer-min-height:150px;\n  --dsh-appearance-composer-toolbar-padding:0px 8px 2px;\n  --dsh-appearance-hero-decoration:url(__VIP_HERO_ASSET__);\n  --dsh-appearance-hero-backdrop-filter:none;\n  --dsh-appearance-hero-subtitle-display:block;\n  --dsh-appearance-hero-subtitle-size:13px;\n  --dsh-appearance-hero-subtitle-letter-spacing:.3em;\n  --dsh-appearance-hero-subtitle-glow:0 1px 8px #ffffffdb;\n  --dsh-appearance-hero-subtitle-offset-y:-40px;\n  --dsh-appearance-composer-hero-padding-bottom:16px;\n  --dsh-theme-glass-tint:255 184 83;\n  --dsh-theme-glass-filter:blur(20px) saturate(138%);\n  --dsh-theme-glass-sidebar:#fff8e8e8;\n  --dsh-theme-glass-panel:#fffaf0c4;\n  --dsh-theme-glass-composer:#fffaf0de;\n  --dsh-theme-glass-control-hover:#fff2d8e0;\n  --dsh-theme-glass-reading-surface:#fffbf3e8;\n  --dsh-theme-glass-stroke:#fff8e8e6;\n  --dsh-theme-glass-shadow:0 12px 34px #6f431e33, 0 0 30px #dba73f33;\n  --dsh-theme-hero-surface:transparent;\n  --dsh-theme-hero-title-gradient:linear-gradient(100deg, #593900 0%, #704400 34%, #875709 52%, #704400 76%, #593900 100%);\n  --dsh-theme-hero-title-gradient-size:240% 100%;\n  --dsh-theme-hero-title-fill:transparent;\n  --dsh-theme-hero-title-glow:drop-shadow(0 2px 12px #fff9e7f5) drop-shadow(0 0 24px #fffdf7c9) drop-shadow(0 0 18px #efb74e70);\n  --dsh-theme-hero-title-animation:dsh-vip-title-shimmer 8s ease-in-out infinite;\n  --dsh-theme-hero-icon-glow:drop-shadow(0 1px 3px #ffffffeb) drop-shadow(0 0 10px #dea3388f);\n  --dsh-theme-hero-icon-animation:dsh-vip-gold-glow 3.6s ease-in-out infinite;\n  --dsh-appearance-accent:#94600d;\n  --dsh-appearance-surface:#fffaf0d1;\n  --dsh-appearance-stroke:#a877263d;\n  --dsh-appearance-glow:0 0 24px #d6a13e45;\n  --dsh-appearance-text-glow:0 0 12px #fffc;\n  --dsh-appearance-section-fill:#fffcf77a;\n  --dsh-appearance-section-padding:4px;\n  --dsh-appearance-control-glow:0 2px 14px #b27e242e;\n  --dsh-appearance-chip-fill:#ffffffd1;\n  --dsh-appearance-chip-stroke:#be8f3961;\n  --dsh-appearance-chip-padding:1px;\n  --dsh-appearance-label-weight:500;\n  --dsh-appearance-action-fill:linear-gradient(135deg, #fff2ce, #e9c778 74%, #f8dda0);\n  --dsh-appearance-action-hover:linear-gradient(135deg, #fff8e8, #f3d994 74%, #ffebbd);\n  --dsh-appearance-action-ink:#49310b;\n  --dsh-appearance-action-glow:0 4px 22px #cf982f57, 0 0 30px #f5c0533d;\n  --dsh-appearance-action-hover-filter:brightness(1.03);\n  --dsh-appearance-composer-halo:0 0 24px #e7b54e57, 0 0 46px #faca6438;\n  --dsh-appearance-hero-halo:none;\n  --dsh-appearance-hero-title-color:#94600d;\n  --dsh-appearance-hero-root-fill:linear-gradient(#fffcf50d, #fffcf50d);\n  --dsh-appearance-preview-badge-fill:#fffbf0e6;\n  --dsh-appearance-preview-badge-stroke:#d6b15f;\n  --dsh-appearance-preview-badge-ink:#76500e;\n  --dsh-appearance-workspace-ink:#293b55;\n  --dsh-appearance-workspace-text-glow:0 0 8px #ffffffc7;\n  --dsh-appearance-sidebar-decoration:radial-gradient(ellipse at 12% 58%, #e7b65d52, transparent 45%), radial-gradient(ellipse at 0% 6%, #fff8e6a3, transparent 48%);\n  --dsh-appearance-sidebar-shadow:inset -1px 0 #b886343d, 8px 0 28px #7a501920;\n  --dsh-appearance-menu-icon:#8a641f;\n  --dsh-appearance-new-session-fill:linear-gradient(135deg, #fff4d9, #f0d08a 68%, #f9e3ad);\n  --dsh-appearance-new-session-hover:linear-gradient(135deg, #fff9ec, #f7dda0 68%, #fff0c5);\n  --dsh-appearance-new-session-ink:#49310b;\n  --dsh-appearance-new-session-stroke:#b5832b52;\n  --dsh-appearance-new-session-glow:0 4px 18px #bf8c2a3d;\n  --dsh-appearance-sidebar-row-hover:#d5a74e24;\n  --dsh-appearance-sidebar-row-active:linear-gradient(100deg, #f6e0b4d6, #eacc91c7);\n  --dsh-appearance-sidebar-row-active-ink:#3e2b0e\n}\nbody[data-dsh-theme=dsh-theme][data-dsh-theme-glass] {\n  --dsh-theme-hero-surface:transparent\n}\n@keyframes dsh-vip-gold-glow {\n  0%,\n  to {\n    filter: drop-shadow(0 0 4px #dda54375);\n  }\n  50% {\n    filter: drop-shadow(0 0 12px #ffda7ef0);\n  }\n}\n@keyframes dsh-vip-title-shimmer {\n  0%, 68%, 100% {\n    background-position: 0% 50%;\n  }\n  82% {\n    background-position: 100% 50%;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-theme=dsh-theme] {\n    --dsh-theme-hero-title-animation: none;\n    --dsh-theme-hero-icon-animation: none;\n  }\n}"
			.replaceAll("__VIP_FONT_ASSET__", require.asset("plugins/@deepseek-ai/dsh-theme/assets/guru-qiu-wan-760bf36ff908.woff2"))
			.replaceAll("__VIP_HERO_ASSET__", require.asset("plugins/@deepseek-ai/dsh-theme/assets/hero-orbit-4e09640dbc7b.webp"));
		//#endregion
		//#region src/client/assets/vip-dream.wallpaper.webp
		var vip_dream_wallpaper_default = require.asset("plugins/@deepseek-ai/dsh-theme/assets/vip-dream.wallpaper-d6b56fa59a07.webp");
		//#endregion
		//#region src/client/assets/sea-salt.wallpaper.webp
		var sea_salt_wallpaper_default = require.asset("plugins/@deepseek-ai/dsh-theme/assets/sea-salt.wallpaper-d6e463318b6e.webp");
		//#endregion
		//#region src/client/assets/bamboo-green.wallpaper.webp
		var bamboo_green_wallpaper_default = require.asset("plugins/@deepseek-ai/dsh-theme/assets/bamboo-green.wallpaper-7a2db584fa50.webp");
		//#endregion
		//#region src/client/assets/coral-pink.wallpaper.webp
		var coral_pink_wallpaper_default = require.asset("plugins/@deepseek-ai/dsh-theme/assets/coral-pink.wallpaper-674c58d9bf1d.webp");
		//#endregion
		//#region src/client/assets/lavender.wallpaper.webp
		var lavender_wallpaper_default = require.asset("plugins/@deepseek-ai/dsh-theme/assets/lavender.wallpaper-d9499d1324d3.webp");
		//#endregion
		//#region src/client/assets/midnight-indigo.wallpaper.webp
		var midnight_indigo_wallpaper_default = require.asset("plugins/@deepseek-ai/dsh-theme/assets/midnight-indigo.wallpaper-8450e1d6b633.webp");
		//#endregion
		//#region lib/types/client/index.js
		const THEME_ID = "dsh-theme";
		const STYLE_ID = "@deepseek-ai/dsh-theme/styles.css";
		const themes = [
			{
				id: THEME_ID,
				colorScheme: "light",
				tokens: {
					"--dsw-alias-brand-primary": "#b78022",
					"--dsw-alias-button-info-fill": "#b78022",
					"--dsw-alias-button-info-hover": "#c89538",
					"--dsw-alias-state-business-primary": "#b78022",
					"--dsw-alias-state-business-tertiary": "#f6ead2",
					"--dsw-alias-label-primary-bluish": "#152b4c",
					"--dsw-alias-label-tertiary": "#58677c",
					"--dsw-alias-menu-icon": "#8a641f",
					"--dsw-alias-link": "#8a5a0a",
					"--dsw-alias-border-l2": "rgb(183 131 44 / 40%)"
				},
				wallpaper: vip_dream_wallpaper_default,
				wallpaperOverlay: {
					light: "rgb(255 248 235 / 8%)",
					dark: "rgb(0 0 0 / 35%)"
				},
				fontFamily: "DshVipDream",
				glass: true,
				labels: {
					zh: "VIP 金耀",
					en: "VIP Golden Radiance"
				}
			},
			{
				id: "official-sea-salt",
				colorScheme: "light",
				tokens: { "--dsw-alias-brand-primary": "#4d91b7" },
				wallpaper: sea_salt_wallpaper_default,
				glass: true,
				labels: {
					zh: "海盐蓝",
					en: "Sea Salt"
				}
			},
			{
				id: "official-bamboo-green",
				colorScheme: "light",
				tokens: { "--dsw-alias-brand-primary": "#44866a" },
				wallpaper: bamboo_green_wallpaper_default,
				glass: true,
				labels: {
					zh: "竹青",
					en: "Bamboo Green"
				}
			},
			{
				id: "official-coral-pink",
				colorScheme: "light",
				tokens: { "--dsw-alias-brand-primary": "#dc7183" },
				wallpaper: coral_pink_wallpaper_default,
				glass: true,
				labels: {
					zh: "珊瑚粉",
					en: "Coral Pink"
				}
			},
			{
				id: "official-lavender",
				colorScheme: "light",
				tokens: { "--dsw-alias-brand-primary": "#8b70bd" },
				wallpaper: lavender_wallpaper_default,
				glass: true,
				labels: {
					zh: "薰衣草紫",
					en: "Lavender"
				}
			},
			{
				id: "official-midnight-indigo",
				colorScheme: "dark",
				tokens: { "--dsw-alias-brand-primary": "#7886db" },
				wallpaper: midnight_indigo_wallpaper_default,
				glass: true,
				labels: {
					zh: "午夜靛蓝",
					en: "Midnight Indigo"
				}
			}
		];
		/** Register every packaged wallpaper theme and mount its removable VIP effects. */
		function apply(ctx) {
			const removeThemes = themes.map((theme) => ctx.theme.register(theme));
			if (ctx.theme.getTheme().preference === "system") ctx.theme.setTheme(THEME_ID);
			ctx.effect(() => {
				const tag = document.createElement("style");
				tag.dataset.plugin = "@deepseek-ai/dsh-theme";
				tag.dataset.pluginCss = STYLE_ID;
				tag.textContent = styles_css_default;
				document.head.append(tag);
				return () => {
					tag.remove();
				};
			}, "VIP appearance stylesheet");
			ctx.effect(() => () => {
				for (const removeTheme of [...removeThemes].reverse()) removeTheme();
			}, "VIP wallpaper themes");
		}
		/** Services needed by the Client entry. */
		const inject = ["theme"];
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
