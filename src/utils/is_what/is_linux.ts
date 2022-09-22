import { type as tauri_os_type } from "@tauri-apps/api/os";

/**
 * @example
 * ```typescript
 * import { isLinux } from '@/utils/is_what';
 * const _isLinux = await isLinux(); // true or false
 * ```
 *
 * @since 1.0.28
 * @returns boolean
 */
const isLinux = async (): Promise<boolean> =>
    await tauri_os_type()
        .then((os) => os === "Linux")
        .catch(() => false);

export default isLinux;
