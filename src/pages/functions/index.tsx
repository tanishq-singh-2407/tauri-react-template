import { isWebApp } from "@/utils/is_what";
import Header from "@/components/header";
import { ask } from "@tauri-apps/api/dialog";
import { appWindow } from "@tauri-apps/api/window";
import { relaunch, exit } from "@tauri-apps/api/process";

const IS_WEB = await isWebApp();

const Functions = ({}) => {
    return (
        <div className="min-h-visible w-full flex justify-start items-center flex-col">
            <Header />

            <main className="w-full flex flex-col justify-start items-start py-5 px-10">
                <details className="flex flex-col justify-center items-center py-3">
                    <summary className="cursor-pointer">1. Dialog Api</summary>
                    <span>
                        you can also hide these, if you dont want web users to
                        see is as they are of no use for them.
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            IS_WEB
                                ? alert("only works in app.")
                                : await ask(
                                      "This action cannot be reverted. Are you sure?",
                                      { title: "Tauri", type: "warning" }
                                  )
                        }
                    >
                        1.1 Dialog (warning)
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            IS_WEB
                                ? alert("only works in app.")
                                : await ask(
                                      "This action cannot be reverted. Are you sure?",
                                      { title: "Tauri", type: "info" }
                                  )
                        }
                    >
                        1.2 Dialog (info)
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            IS_WEB
                                ? alert("only works in app.")
                                : await ask(
                                      "This action cannot be reverted. Are you sure?",
                                      { title: "Tauri", type: "error" }
                                  )
                        }
                    >
                        2.3 Dialog (error)
                    </span>
                </details>

                <details className="flex flex-col justify-center items-center py-3">
                    <summary className="cursor-pointer">
                        2. Notification
                    </summary>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () => {
                            Notification.requestPermission()
                                .then(
                                    (val) =>
                                        val &&
                                        new Notification(
                                            "My notification title",
                                            { body: "More notification body" }
                                        )
                                )
                                .catch(console.error);
                        }}
                    >
                        2.1 notify me
                    </span>
                </details>

                <details className="flex flex-col justify-center items-center py-3">
                    <summary className="cursor-pointer">3. Full Screen</summary>
                    <span>
                        you can also hide these, if you dont want web users to
                        see is as they are of no use for them.
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !IS_WEB && (await appWindow.setFullscreen(true))
                        }
                    >
                        3.1 Full Screen
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !IS_WEB && (await appWindow.setFullscreen(false))
                        }
                    >
                        3.2 Exit Full Screen
                    </span>
                </details>

                <details className="flex flex-col justify-center items-center py-3">
                    <summary className="cursor-pointer">
                        4. Always On Top
                    </summary>
                    <span>
                        you can also hide these, if you dont want web users to
                        see is as they are of no use for them.
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !IS_WEB && (await appWindow.setAlwaysOnTop(true))
                        }
                    >
                        4.1 Always on top
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !IS_WEB && (await appWindow.setAlwaysOnTop(false))
                        }
                    >
                        4.2 Remove Always on top
                    </span>
                </details>

                <details className="flex flex-col justify-center items-center py-3">
                    <summary className="cursor-pointer">
                        5. TitleBar (decoration)
                    </summary>
                    <span>
                        you can also hide these, if you dont want web users to
                        see is as they are of no use for them.
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !IS_WEB && (await appWindow.setDecorations(true))
                        }
                    >
                        5.1 Set Decoration
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !IS_WEB && (await appWindow.setDecorations(false))
                        }
                    >
                        5.2 Remove Decoration
                    </span>
                </details>

                <details className="flex flex-col justify-center items-center py-3">
                    <summary className="cursor-pointer">6. Application</summary>
                    <span>
                        you can also hide these, if you dont want web users to
                        see is as they are of no use for them.
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !IS_WEB && (await appWindow.maximize())
                        }
                    >
                        6.1 Maximize
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !IS_WEB && (await appWindow.toggleMaximize())
                        }
                    >
                        6.2 Toogle Maximize
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !IS_WEB && (await appWindow.minimize())
                        }
                    >
                        6.3 Minimize
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () => !IS_WEB && (await relaunch())}
                    >
                        6.4 Relaunch
                    </span>
                    <span
                        className="cursor-pointer py-1"
                        onClick={async () => !IS_WEB && (await exit())}
                    >
                        6.5 Exit
                    </span>
                </details>
            </main>
        </div>
    );
};

export default Functions;
