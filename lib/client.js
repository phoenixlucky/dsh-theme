window.__ModuleLoader__.load({
	id: "@deepseek-ai/dsh-theme",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0dsh-inline-css:E:\home\dsh-theme\src\client\styles.css.mjs
		var styles_css_default = "@font-face {\n  font-family:DshVipDream;\n  src:url(__VIP_FONT_ASSET__)format(\"woff2\");\n  font-style:normal;\n  font-weight:400;\n  font-display:swap\n}\n.dsh-theme-gallery {\n  --dsh-theme-effect-motion-duration:180ms;\n  --dsh-theme-effect-motion-easing:ease;\n  --dsh-theme-effect-hover-lift:-2px;\n  --dsh-theme-effect-hover-shadow:0 5px 18px #0000001a;\n  --dsh-theme-effect-dialog-shadow:0 24px 80px #0005;\n  --dsh-theme-effect-backdrop-blur:5px;\n  --dsh-theme-effect-focus-ring-width:2px;\n  --dsh-theme-effect-focus-ring-offset:2px;\n  border-bottom:.5px solid var(--dsw-alias-border-l2);\n  display:flex;\n  flex-direction:column;\n  gap:12px;\n  padding:16px 0\n}\n.dsh-theme-gallery-title {\n  color:var(--dsw-alias-label-primary);\n  font-size:14px;\n  line-height:22px\n}\n.dsh-theme-gallery-grid {\n  display:grid;\n  grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));\n  gap:10px\n}\n.dsh-theme-gallery-card {\n  min-width:0;\n  padding:0;\n  overflow:hidden;\n  border:1px solid var(--dsw-alias-border-l4);\n  border-radius:var(--dsw-radius-lg,16px);\n  color:var(--dsw-alias-label-primary);\n  background:var(--dsw-alias-settings-card-fill);\n  font:inherit;\n  text-align:left;\n  cursor:pointer;\n  transition:border-color var(--dsh-theme-effect-motion-duration) var(--dsh-theme-effect-motion-easing), transform var(--dsh-theme-effect-motion-duration) var(--dsh-theme-effect-motion-easing), box-shadow var(--dsh-theme-effect-motion-duration) var(--dsh-theme-effect-motion-easing)\n}\n.dsh-theme-gallery-card:hover {\n  border-color:var(--dsw-alias-brand-primary);\n  box-shadow:var(--dsh-theme-effect-hover-shadow);\n  transform:translateY(var(--dsh-theme-effect-hover-lift))\n}\n.dsh-theme-gallery-card:focus-visible,\n.dsh-theme-gallery-dialog button:focus-visible {\n  outline:var(--dsh-theme-effect-focus-ring-width) solid var(--dsw-alias-brand-primary);\n  outline-offset:var(--dsh-theme-effect-focus-ring-offset)\n}\n.dsh-theme-gallery-card[aria-pressed=true] {\n  border-color:var(--dsw-alias-brand-primary);\n  box-shadow:0 0 0 1px var(--dsw-alias-brand-primary)\n}\n.dsh-theme-gallery-thumb {\n  display:block;\n  width:100%;\n  aspect-ratio:16/9;\n  object-fit:cover;\n  background:var(--dsw-alias-bg-module-platform)\n}\n.dsh-theme-gallery-card-label {\n  display:flex;\n  min-height:40px;\n  align-items:center;\n  justify-content:space-between;\n  gap:8px;\n  padding:8px 10px;\n  font-size:13px\n}\n.dsh-theme-gallery-current {\n  color:var(--dsw-alias-brand-primary);\n  font-size:11px;\n  white-space:nowrap\n}\n.dsh-theme-gallery-dialog {\n  width:min(760px,calc(100vw - 32px));\n  max-width:none;\n  max-height:calc(100vh - 32px);\n  padding:0;\n  overflow:auto;\n  border:1px solid var(--dsw-alias-border-l2);\n  border-radius:20px;\n  color:var(--dsw-alias-label-primary);\n  background:var(--dsw-alias-settings-card-fill);\n  box-shadow:var(--dsh-theme-effect-dialog-shadow)\n}\n.dsh-theme-gallery-dialog::backdrop {\n  background:#10131ab3;\n  backdrop-filter:blur(var(--dsh-theme-effect-backdrop-blur))\n}\n.dsh-theme-gallery-preview {\n  display:block;\n  width:100%;\n  max-height:min(58vh,480px);\n  aspect-ratio:16/9;\n  object-fit:cover;\n  background:var(--dsw-alias-bg-module-platform)\n}\n.dsh-theme-gallery-dialog-content {\n  display:flex;\n  flex-direction:column;\n  gap:12px;\n  padding:20px\n}\n.dsh-theme-gallery-dialog-title {\n  margin:0;\n  font-size:18px;\n  font-weight:600\n}\n.dsh-theme-gallery-dialog-actions {\n  display:flex;\n  justify-content:flex-end;\n  gap:8px\n}\n.dsh-theme-gallery-action {\n  min-height:36px;\n  padding:0 16px;\n  border:1px solid var(--dsw-alias-border-l2);\n  border-radius:10px;\n  color:var(--dsw-alias-label-primary);\n  background:transparent;\n  font:inherit;\n  cursor:pointer\n}\n.dsh-theme-gallery-action-primary {\n  border-color:var(--dsw-alias-brand-primary);\n  color:#fff;\n  background:var(--dsw-alias-brand-primary)\n}\n@media (max-width:520px) {\n  .dsh-theme-gallery-grid {grid-template-columns:repeat(2,minmax(0,1fr))}\n  .dsh-theme-gallery-dialog-content {padding:16px}\n}\n@media (prefers-reduced-motion:reduce) {\n  .dsh-theme-gallery-card {transition:none}\n  .dsh-theme-gallery-card:hover {transform:none}\n}\nbody[data-dsh-theme=dsh-theme] {\n  color-scheme:light;\n  --dsh-appearance-hero-width:fit-content;\n  --dsh-appearance-hero-title-size:42px;\n  --dsh-appearance-hero-title-offset-y:-31px;\n  --dsh-appearance-composer-max-width:1070px;\n  --dsh-appearance-composer-min-height:150px;\n  --dsh-appearance-composer-toolbar-padding:0px 8px 2px;\n  --dsh-appearance-hero-decoration:url(__VIP_HERO_ASSET__);\n  --dsh-appearance-hero-backdrop-filter:none;\n  --dsh-appearance-hero-subtitle-display:block;\n  --dsh-appearance-hero-subtitle-size:13px;\n  --dsh-appearance-hero-subtitle-letter-spacing:.3em;\n  --dsh-appearance-hero-subtitle-glow:0 1px 8px #ffffffdb;\n  --dsh-appearance-hero-subtitle-offset-y:-40px;\n  --dsh-appearance-composer-hero-padding-bottom:16px;\n  --dsh-theme-glass-tint:255 184 83;\n  --dsh-theme-glass-filter:blur(20px) saturate(138%);\n  --dsh-theme-glass-sidebar:#fff8e8e8;\n  --dsh-theme-glass-panel:#fffaf0c4;\n  --dsh-theme-glass-composer:#fffaf0de;\n  --dsh-theme-glass-control-hover:#fff2d8e0;\n  --dsh-theme-glass-reading-surface:#fffbf3e8;\n  --dsh-theme-glass-stroke:#fff8e8e6;\n  --dsh-theme-glass-shadow:0 12px 34px #6f431e33, 0 0 30px #dba73f33;\n  --dsh-theme-hero-surface:transparent;\n  --dsh-theme-hero-title-gradient:linear-gradient(100deg, #593900 0%, #704400 34%, #875709 52%, #704400 76%, #593900 100%);\n  --dsh-theme-hero-title-gradient-size:240% 100%;\n  --dsh-theme-hero-title-fill:transparent;\n  --dsh-theme-effect-title-glow:drop-shadow(0 2px 12px #fff9e7f5) drop-shadow(0 0 24px #fffdf7c9) drop-shadow(0 0 18px #efb74e70);\n  --dsh-theme-hero-title-glow:var(--dsh-theme-effect-title-glow);\n  --dsh-theme-effect-shimmer-duration:8s;\n  --dsh-theme-effect-glow-duration:3.6s;\n  --dsh-theme-effect-loop-easing:ease-in-out;\n  --dsh-theme-hero-title-animation:dsh-vip-title-shimmer var(--dsh-theme-effect-shimmer-duration) var(--dsh-theme-effect-loop-easing) infinite;\n  --dsh-theme-effect-icon-glow:drop-shadow(0 1px 3px #ffffffeb) drop-shadow(0 0 10px #dea3388f);\n  --dsh-theme-hero-icon-glow:var(--dsh-theme-effect-icon-glow);\n  --dsh-theme-hero-icon-animation:dsh-vip-gold-glow var(--dsh-theme-effect-glow-duration) var(--dsh-theme-effect-loop-easing) infinite;\n  --dsh-appearance-accent:#94600d;\n  --dsh-appearance-surface:#fffaf0d1;\n  --dsh-appearance-stroke:#a877263d;\n  --dsh-appearance-glow:0 0 24px #d6a13e45;\n  --dsh-appearance-text-glow:0 0 12px #fffc;\n  --dsh-appearance-section-fill:#fffcf77a;\n  --dsh-appearance-section-padding:4px;\n  --dsh-appearance-control-glow:0 2px 14px #b27e242e;\n  --dsh-appearance-chip-fill:#ffffffd1;\n  --dsh-appearance-chip-stroke:#be8f3961;\n  --dsh-appearance-chip-padding:1px;\n  --dsh-appearance-label-weight:500;\n  --dsh-appearance-action-fill:linear-gradient(135deg, #fff2ce, #e9c778 74%, #f8dda0);\n  --dsh-appearance-action-hover:linear-gradient(135deg, #fff8e8, #f3d994 74%, #ffebbd);\n  --dsh-appearance-action-ink:#49310b;\n  --dsh-appearance-action-glow:0 4px 22px #cf982f57, 0 0 30px #f5c0533d;\n  --dsh-appearance-action-hover-filter:brightness(1.03);\n  --dsh-appearance-composer-halo:0 0 24px #e7b54e57, 0 0 46px #faca6438;\n  --dsh-appearance-hero-halo:none;\n  --dsh-appearance-hero-title-color:#94600d;\n  --dsh-appearance-hero-root-fill:linear-gradient(#fffcf50d, #fffcf50d);\n  --dsh-appearance-preview-badge-fill:#fffbf0e6;\n  --dsh-appearance-preview-badge-stroke:#d6b15f;\n  --dsh-appearance-preview-badge-ink:#76500e;\n  --dsh-appearance-workspace-ink:#293b55;\n  --dsh-appearance-workspace-text-glow:0 0 8px #ffffffc7;\n  --dsh-appearance-sidebar-decoration:radial-gradient(ellipse at 12% 58%, #e7b65d52, transparent 45%), radial-gradient(ellipse at 0% 6%, #fff8e6a3, transparent 48%);\n  --dsh-appearance-sidebar-shadow:inset -1px 0 #b886343d, 8px 0 28px #7a501920;\n  --dsh-appearance-menu-icon:#8a641f;\n  --dsh-appearance-new-session-fill:linear-gradient(135deg, #fff4d9, #f0d08a 68%, #f9e3ad);\n  --dsh-appearance-new-session-hover:linear-gradient(135deg, #fff9ec, #f7dda0 68%, #fff0c5);\n  --dsh-appearance-new-session-ink:#49310b;\n  --dsh-appearance-new-session-stroke:#b5832b52;\n  --dsh-appearance-new-session-glow:0 4px 18px #bf8c2a3d;\n  --dsh-appearance-sidebar-row-hover:#d5a74e24;\n  --dsh-appearance-sidebar-row-active:linear-gradient(100deg, #f6e0b4d6, #eacc91c7);\n  --dsh-appearance-sidebar-row-active-ink:#3e2b0e\n}\nbody[data-dsh-theme=dsh-theme][data-dsh-theme-glass] {\n  --dsh-theme-hero-surface:transparent\n}\n@keyframes dsh-vip-gold-glow {\n  0%,\n  to {\n    filter: drop-shadow(0 0 4px #dda54375);\n  }\n  50% {\n    filter: drop-shadow(0 0 12px #ffda7ef0);\n  }\n}\n@keyframes dsh-vip-title-shimmer {\n  0%, 68%, 100% {\n    background-position: 0% 50%;\n  }\n  82% {\n    background-position: 100% 50%;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-theme=dsh-theme] {\n    --dsh-theme-hero-title-animation: none;\n    --dsh-theme-hero-icon-animation: none;\n  }\n}"
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
		const React = require("react");
		const { defineStore } = require("@deepseek-ai/dsh-client-store");
		const h = React.createElement;
		const THEME_LOCALE = "settings.dsh-theme";
		const galleryCopy = {
			zh: { title: "主题与壁纸", preview: "预览", apply: "应用主题", close: "关闭", current: "当前使用", vip: "VIP 金耀", sea: "海盐蓝", bamboo: "竹青", coral: "珊瑚粉", lavender: "薰衣草紫", midnight: "午夜靛蓝" },
			en: { title: "Themes and wallpaper", preview: "Preview", apply: "Apply theme", close: "Close", current: "In use", vip: "VIP Golden Radiance", sea: "Sea Salt", bamboo: "Bamboo Green", coral: "Coral Pink", lavender: "Lavender", midnight: "Midnight Indigo" },
			ja: { title: "テーマと壁紙", preview: "プレビュー", apply: "テーマを適用", close: "閉じる", current: "使用中", vip: "VIP ゴールデン", sea: "シーソルト", bamboo: "竹青", coral: "コーラルピンク", lavender: "ラベンダー", midnight: "ミッドナイトインディゴ" },
			fr: { title: "Thèmes et fonds d’écran", preview: "Aperçu", apply: "Appliquer le thème", close: "Fermer", current: "Actuel", vip: "Éclat doré VIP", sea: "Sel marin", bamboo: "Vert bambou", coral: "Rose corail", lavender: "Lavande", midnight: "Indigo nuit" },
			es: { title: "Temas y fondos de pantalla", preview: "Vista previa", apply: "Aplicar tema", close: "Cerrar", current: "En uso", vip: "Brillo dorado VIP", sea: "Sal marina", bamboo: "Verde bambú", coral: "Rosa coral", lavender: "Lavanda", midnight: "Índigo de medianoche" },
			pt: { title: "Temas e papéis de parede", preview: "Pré-visualizar", apply: "Aplicar tema", close: "Fechar", current: "Em uso", vip: "Brilho dourado VIP", sea: "Sal marinho", bamboo: "Verde bambu", coral: "Rosa coral", lavender: "Lavanda", midnight: "Índigo da meia-noite" },
			ru: { title: "Темы и обои", preview: "Предпросмотр", apply: "Применить тему", close: "Закрыть", current: "Используется", vip: "Золотое сияние VIP", sea: "Морская соль", bamboo: "Бамбуковый зелёный", coral: "Коралловый розовый", lavender: "Лаванда", midnight: "Полуночный индиго" },
			de: { title: "Designs und Hintergrundbilder", preview: "Vorschau", apply: "Design anwenden", close: "Schließen", current: "Aktiv", vip: "VIP Goldglanz", sea: "Meersalz", bamboo: "Bambusgrün", coral: "Korallenrosa", lavender: "Lavendel", midnight: "Mitternachtsindigo" }
		};
		const galleryNameKeys = {
			"dsh-theme": "vip",
			"official-sea-salt": "sea",
			"official-bamboo-green": "bamboo",
			"official-coral-pink": "coral",
			"official-lavender": "lavender",
			"official-midnight-indigo": "midnight"
		};
		function createGalleryStore() {
			return defineStore({
				init: () => ({ preference: "system", revision: -1 }),
				actions: { sync: (draft, preference, revision) => {
					if (revision <= draft.revision) return;
					draft.preference = preference;
					draft.revision = revision;
				} }
			});
		}
		function ThemeGallery({ t, useStore, themes, setTheme }) {
			const preference = useStore((state) => state.preference);
			const [previewId, setPreviewId] = React.useState(null);
			const dialogRef = React.useRef(null);
			const preview = themes.find((theme) => theme.id === previewId);
			React.useEffect(() => {
				const dialog = dialogRef.current;
				if (!dialog) return;
				if (preview && !dialog.open) dialog.showModal();
				else if (!preview && dialog.open) dialog.close();
			}, [preview]);
			return h("div", { className: "dsh-theme-gallery" },
				h("div", { className: "dsh-theme-gallery-title" }, t("title")),
				h("div", { className: "dsh-theme-gallery-grid" }, themes.map((theme) => h("button", {
					key: theme.id,
					type: "button",
					className: "dsh-theme-gallery-card",
					"aria-pressed": preference === theme.id,
					"aria-label": `${t(galleryNameKeys[theme.id])} — ${t("preview")}`,
					onClick: () => setPreviewId(theme.id)
				}, h("img", { className: "dsh-theme-gallery-thumb", src: theme.wallpaper, alt: "", loading: "lazy" }),
				h("span", { className: "dsh-theme-gallery-card-label" },
					h("span", null, t(galleryNameKeys[theme.id])),
					preference === theme.id ? h("span", { className: "dsh-theme-gallery-current" }, t("current")) : null
				)))),
				h("dialog", {
					ref: dialogRef,
					className: "dsh-theme-gallery-dialog",
					"aria-label": preview ? t(galleryNameKeys[preview.id]) : t("preview"),
					onCancel: (event) => { event.preventDefault(); setPreviewId(null); },
					onClose: () => setPreviewId(null),
					onClick: (event) => { if (event.target === event.currentTarget) setPreviewId(null); }
				}, preview ? [
					h("img", { key: "image", className: "dsh-theme-gallery-preview", src: preview.wallpaper, alt: t(galleryNameKeys[preview.id]) }),
					h("div", { key: "content", className: "dsh-theme-gallery-dialog-content" },
						h("h2", { className: "dsh-theme-gallery-dialog-title" }, t(galleryNameKeys[preview.id])),
						h("div", { className: "dsh-theme-gallery-dialog-actions" },
							h("button", { type: "button", className: "dsh-theme-gallery-action", onClick: () => setPreviewId(null) }, t("close")),
							h("button", { type: "button", className: "dsh-theme-gallery-action dsh-theme-gallery-action-primary", onClick: () => { setTheme(preview.id); setPreviewId(null); } }, t("apply"))
						)
					)
				] : null)
			);
		}
		const THEME_ID = "dsh-theme";
		const STYLE_ID = "@deepseek-ai/dsh-theme/styles.css";
		const themes = [
			{
				id: THEME_ID,
				colorScheme: "light",
				tokens: {
					"--dsw-alias-bg-base": "var(--dsh-theme-glass-panel)",
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
			const galleryStore = createGalleryStore();
			const preferenceForm = ctx.configForms.get("dsh-theme");
			const restorePreference = () => {
				const preference = preferenceForm.getSnapshot().value?.preference;
				if (preference === "system" || themes.some((theme) => theme.id === preference)) ctx.theme.setTheme(preference);
			};
			ctx.effect(() => preferenceForm.subscribe(restorePreference), "Saved wallpaper theme");
			restorePreference();
			let galleryBound;
			const persistPreference = (preference) => {
				if (preferenceForm.getSnapshot().value?.preference !== preference) preferenceForm.set("preference", preference);
			};
			const syncGallery = (snapshot) => {
				galleryBound?.sync(snapshot.preference, snapshot.revision);
				if (snapshot.preference === "system" || themes.some((theme) => theme.id === snapshot.preference)) persistPreference(snapshot.preference);
			};
			ctx.on("theme/change", syncGallery);
			ctx.effect(() => ctx.locale.register(THEME_LOCALE, galleryCopy), "Theme gallery translations");
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "theme-gallery",
				order: 12,
				store: galleryStore,
				locale: THEME_LOCALE,
				inject: (actions) => {
					galleryBound = actions;
					syncGallery(ctx.theme.getTheme());
					return {
						setTheme: (id) => ctx.theme.setTheme(id),
						themes
					};
				}
			}, ThemeGallery));
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
		const inject = ["theme", "slots", "locale", "configForms"];
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
