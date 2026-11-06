import type { Volatile } from '@deepseek-ai/cordis';
import z from '@deepseek-ai/schemastery';

/** A wallpaper theme added from the gallery. */
export interface CustomTheme {
    /** Stable id derived from the name; persisted so edits keep the same theme. */
    id: string;
    name: string;
    /** `https://`, `data:image/` or app-relative `/…` image URL. */
    wallpaper: string;
    /** Signature color; every derived effect is computed from it. */
    accent: string;
    /** Which host palette the theme sits on; anything but `dark` is treated as light. */
    colorScheme: string;
}

/** The selected theme and any user-defined themes, persisted with this profile entry. */
export interface Config {
    /** Registered theme id, or `system` / `light` / `dark`. */
    preference: Volatile<string>;
    sidebarTransparency: Volatile<number>;
    conversationTransparency: Volatile<number>;
    customThemes: Volatile<CustomTheme[]>;
}
export declare const Config: z<Config>;
/** Provides no host-side behavior. */
export declare function apply(): void;
