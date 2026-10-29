import type { Volatile } from '@deepseek-ai/cordis';
import z from '@deepseek-ai/schemastery';
/** The selected registered wallpaper theme, persisted with this profile entry. */
export interface Config {
    preference: Volatile<'system' | 'dsh-theme' | 'official-sea-salt' | 'official-bamboo-green' | 'official-coral-pink' | 'official-lavender' | 'official-midnight-indigo' | undefined>;
}
export declare const Config: z<Config>;
/** Provides no host-side behavior. */
export declare function apply(): void;
//# sourceMappingURL=index.d.ts.map
