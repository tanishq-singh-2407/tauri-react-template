import { isWebApp } from "@/utils/is_what";
import Header from "@/components/header";
import { ask } from "@tauri-apps/api/dialog";
import { appWindow } from "@tauri-apps/api/window";
import { relaunch, exit } from "@tauri-apps/api/process";

const IS_WEB = (async () => await isWebApp())();

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
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            (await IS_WEB)
                                ? alert("only works in app.")
                                : await ask(
                                      "This action cannot be reverted. Are you sure?",
                                      { title: "Tauri", type: "warning" }
                                  )
                        }
                    >
                        1.1 Dialog (warning)
                    </button>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            (await IS_WEB)
                                ? alert("only works in app.")
                                : await ask(
                                      "This action cannot be reverted. Are you sure?",
                                      { title: "Tauri", type: "info" }
                                  )
                        }
                    >
                        1.2 Dialog (info)
                    </button>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            (await IS_WEB)
                                ? alert("only works in app.")
                                : await ask(
                                      "This action cannot be reverted. Are you sure?",
                                      { title: "Tauri", type: "error" }
                                  )
                        }
                    >
                        2.3 Dialog (error)
                    </button>
                </details>

                <details className="flex flex-col justify-center items-center py-3">
                    <summary className="cursor-pointer">
                        2. Notification
                    </summary>
                    <button
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
                    </button>
                </details>

                <details className="flex flex-col justify-center items-center py-3">
                    <summary className="cursor-pointer">3. Full Screen</summary>
                    <span>
                        you can also hide these, if you dont want web users to
                        see is as they are of no use for them.
                    </span>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !(await IS_WEB) &&
                            (await appWindow.setFullscreen(true))
                        }
                    >
                        3.1 Full Screen
                    </button>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !(await IS_WEB) &&
                            (await appWindow.setFullscreen(false))
                        }
                    >
                        3.2 Exit Full Screen
                    </button>
                </details>

                <details className="flex flex-col justify-center items-center py-3">
                    <summary className="cursor-pointer">
                        4. Always On Top
                    </summary>
                    <span>
                        you can also hide these, if you dont want web users to
                        see is as they are of no use for them.
                    </span>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !(await IS_WEB) &&
                            (await appWindow.setAlwaysOnTop(true))
                        }
                    >
                        4.1 Always on top
                    </button>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !(await IS_WEB) &&
                            (await appWindow.setAlwaysOnTop(false))
                        }
                    >
                        4.2 Remove Always on top
                    </button>
                </details>

                <details className="flex flex-col justify-center items-center py-3">
                    <summary className="cursor-pointer">
                        5. TitleBar (decoration)
                    </summary>
                    <span>
                        you can also hide these, if you dont want web users to
                        see is as they are of no use for them.
                    </span>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !(await IS_WEB) &&
                            (await appWindow.setDecorations(true))
                        }
                    >
                        5.1 Set Decoration
                    </button>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !(await IS_WEB) &&
                            (await appWindow.setDecorations(false))
                        }
                    >
                        5.2 Remove Decoration
                    </button>
                </details>

                <details className="flex flex-col justify-center items-center py-3">
                    <summary className="cursor-pointer">6. Application</summary>
                    <span>
                        you can also hide these, if you dont want web users to
                        see is as they are of no use for them.
                    </span>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !(await IS_WEB) && (await appWindow.maximize())
                        }
                    >
                        6.1 Maximize
                    </button>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !(await IS_WEB) &&
                            (await appWindow.toggleMaximize())
                        }
                    >
                        6.2 Toogle Maximize
                    </button>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !(await IS_WEB) && (await appWindow.minimize())
                        }
                    >
                        6.3 Minimize
                    </button>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () =>
                            !(await IS_WEB) && (await relaunch())
                        }
                    >
                        6.4 Relaunch
                    </button>
                    <button
                        className="cursor-pointer py-1"
                        onClick={async () => !(await IS_WEB) && (await exit())}
                    >
                        6.5 Exit
                    </button>
                </details>
            </main>
        </div>
    );
};

export default Functions;
