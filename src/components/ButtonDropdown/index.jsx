import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const items = [
    { name: "Save and schedule", href: "#" },
    { name: "Save and publish", href: "#" },
    { name: "Export PDF", href: "#" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ButtonDropdown({ title, icon }) {
    return (
        <>
            <button
                type="button"
                className="relative ml-2 inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-300 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
                {icon}
                {title}
            </button>
            <Menu as="div" className="relative -ml-px inline-block">
                <Menu.Button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <span className="sr-only">Open options</span>
                    <ChevronDownIcon
                        className="h-4 w-4 text-gray-300"
                        aria-hidden="true"
                    />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {items.map((item) => (
                                <Menu.Item key={item.name}>
                                    {({ active }) => (
                                        <a
                                            href={item.href}
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-2.5 py-2 text-xs"
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
}
