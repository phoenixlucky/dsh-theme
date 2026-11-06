import z from '@deepseek-ai/schemastery';

/** Persist the selected theme and every user-defined theme with this profile entry. */
export const Config = z.object({
	preference: z.string().default('system').volatile(),
	sidebarTransparency: z.number().min(0).max(100).default(0).volatile(),
	conversationTransparency: z.number().min(0).max(100).default(0).volatile(),
	// Themes added from the wallpaper gallery. `accent` and `colorScheme` are the
	// only effect inputs: the stylesheet derives glass, borders, hover states and
	// the wallpaper atmosphere from them, so no per-theme CSS is involved.
	customThemes: z.array(z.object({
		id: z.string().max(64).default(''),
		name: z.string().max(60).default(''),
		wallpaper: z.string().max(2048).default(''),
		accent: z.string().max(32).default('#5b7c99'),
		colorScheme: z.string().default('light')
	})).default([]).volatile().hidden()
});

/** Provides no host-side behavior. */
export function apply() {}
