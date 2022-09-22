import { type as tauri_os_type } from "@tauri-apps/api/os";

/**
 * @example
 * ```typescript
 * import { isWebApp } from '@/utils/is_what';
 * const _isWebApp = await isWebApp(); // true or false
 * ```
 *
 * @since 1.0.28
 * @returns boolean
 */
const isWebApp = async (): Promise<boolean> =>
    await tauri_os_type()
        .then(() => false)
        .catch(() => true);

export default isWebApp;
