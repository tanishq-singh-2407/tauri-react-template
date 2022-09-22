import {
    OsType as tauri_OsType,
    type as tauri_os_type,
} from "@tauri-apps/api/os";

type OsType = tauri_OsType | "WebApp";

/**
 * @example
 * ```typescript
 * import { type } from '@/utils/is_what';
 * const osType = await type(); // "Linux" | "Darwin" | "Windows_NT" | "WebApp"
 * ```
 *
 * @since 1.0.28
 * @returns 'Linux' on Linux, 'Darwin' on macOS, 'Windows_NT' on Windows, and 'WebApp' on browser (web).
 */
const type = async (): Promise<OsType> =>
    await tauri_os_type()
        .then((os) => os)
        .catch(() => "WebApp");

export default type;
