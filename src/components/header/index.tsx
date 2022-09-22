import { HTMLAttributeAnchorTarget } from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

type Navigation = {
    name: string;
    href: string;
    current: boolean;
    target?: HTMLAttributeAnchorTarget | undefined;
};

const navigation: Navigation[] = [
    { name: "Home", href: "/", current: true },
    { name: "About", href: "/about", current: false },
    { name: "Contact", href: "/contact", current: false },
    { name: "Functions", href: "/functions", current: false },
    {
        name: "Github",
        href: "https://github.com/tanishq-singh-2301/tauri-react-template",
        current: false,
        target: "_blank",
    },
];

/**
 *
 * @param classes tailwindcss classes
 * @returns string
 */
const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

const Header = () => {
    return (
        <header className="w-full">
            <Disclosure as="nav" className="bg-gray-900 w-full block">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 active:text-white">
                                        {open ? (
                                            <XMarkIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Tauri"
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:flex justify-center items-center">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    to={item.href}
                                                    key={item.name}
                                                    target={item.target}
                                                >
                                                    <span
                                                        className={classNames(
                                                            item.current
                                                                ? "bg-gray-900 text-white"
                                                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                            "px-3 py-2 rounded-md text-sm font-medium"
                                                        )}
                                                        aria-current={
                                                            item.current
                                                                ? "page"
                                                                : undefined
                                                        }
                                                    >
                                                        {item.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="rounded-full p-1 text-gray-400 focus:outline-none active:text-white"
                                    >
                                        <BellIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                    <button type="button" className="pl-3">
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Link
                                        to={item.href}
                                        key={item.name}
                                        target={item.target}
                                    >
                                        <Disclosure.Button
                                            as="span"
                                            className={classNames(
                                                item.current
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-300 hover:bg-gray-800 hover:text-white",
                                                "block px-3 py-2 rounded-md text-base font-medium"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    </Link>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </header>
    );
};

export default Header;
