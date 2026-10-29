import z from '@deepseek-ai/schemastery';

/** Persist the selected registered wallpaper theme with this profile entry. */
export const Config = z.object({
	preference: z.union(['system', 'dsh-theme', 'official-sea-salt', 'official-bamboo-green', 'official-coral-pink', 'official-lavender', 'official-midnight-indigo']).volatile()
});

/** Provides no host-side behavior. */
export function apply() {}
