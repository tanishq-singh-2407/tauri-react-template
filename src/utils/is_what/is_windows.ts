import { type as tauri_os_type } from "@tauri-apps/api/os";

/**
 * @example
 * ```typescript
 * import { isWindows } from '@/utils/is_what';
 * const _isWindows = await isWindows(); // true or false
 * ```
 *
 * @since 1.0.28
 * @returns boolean
 */
const isWindows = async (): Promise<boolean> =>
    await tauri_os_type()
        .then((os) => os === "Windows_NT")
        .catch(() => false);

export default isWindows;
