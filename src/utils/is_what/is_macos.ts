import { type as tauri_os_type } from "@tauri-apps/api/os";

/**
 * @example
 * ```typescript
 * import { isMacOs } from '@/utils/is_what';
 * const _isMacOs = await isMacOs(); // true or false
 * ```
 *
 * @since 1.0.28
 * @returns boolean
 */
const isMacOs = async (): Promise<boolean> =>
    await tauri_os_type()
        .then((os) => os === "Darwin")
        .catch(() => false);

export default isMacOs;
