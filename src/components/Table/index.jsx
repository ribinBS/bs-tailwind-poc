import React, { Fragment } from "react";
import { MusicalNoteIcon, TrophyIcon } from "@heroicons/react/20/solid";
import ButtonDropdown from "../ButtonDropdown";
import EllipsisDropdown from "../EllipsisDropdown";
import { Menu, Transition } from "@headlessui/react";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const people = [
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
    },
    // More people...
];

export default function Example() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                        >
                                            <input
                                                id="comments"
                                                aria-describedby="comments-description"
                                                name="comments"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <ButtonDropdown
                                                title="Resolve"
                                                icon={
                                                    <TrophyIcon
                                                        className="-ml-0.5 mr-2 h-4 w-4 text-gray-300"
                                                        aria-hidden="true"
                                                    />
                                                }
                                            />
                                            <ButtonDropdown
                                                title="Ignore"
                                                icon={
                                                    <MusicalNoteIcon
                                                        className="-ml-0.5 mr-2 h-4 w-4 text-gray-300"
                                                        aria-hidden="true"
                                                    />
                                                }
                                            />
                                            <EllipsisDropdown />
                                            <Menu
                                                as="div"
                                                className="relative inline-block text-left ml-2"
                                            >
                                                <div>
                                                    <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                                        <ArrowDownIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                        Last Seen
                                                        <ChevronDownIcon
                                                            className="-mr-1 ml-2 h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </Menu.Button>
                                                </div>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active
                                                                                ? "bg-gray-100 text-gray-900"
                                                                                : "text-gray-700",
                                                                            "block px-4 py-2 text-sm"
                                                                        )}
                                                                    >
                                                                        Account
                                                                        settings
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active
                                                                                ? "bg-gray-100 text-gray-900"
                                                                                : "text-gray-700",
                                                                            "block px-4 py-2 text-sm"
                                                                        )}
                                                                    >
                                                                        Support
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({
                                                                    active,
                                                                }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active
                                                                                ? "bg-gray-100 text-gray-900"
                                                                                : "text-gray-700",
                                                                            "block px-4 py-2 text-sm"
                                                                        )}
                                                                    >
                                                                        License
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <form
                                                                method="POST"
                                                                action="#"
                                                            >
                                                                <Menu.Item>
                                                                    {({
                                                                        active,
                                                                    }) => (
                                                                        <button
                                                                            type="submit"
                                                                            className={classNames(
                                                                                active
                                                                                    ? "bg-gray-100 text-gray-900"
                                                                                    : "text-gray-700",
                                                                                "block w-full px-4 py-2 text-left text-sm"
                                                                            )}
                                                                        >
                                                                            Sign
                                                                            out
                                                                        </button>
                                                                    )}
                                                                </Menu.Item>
                                                            </form>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </th>
                                        <th
                                            scope="col"
                                            className="flex justify-between px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            GRAPH:
                                            <span className="font-normal">
                                                24h
                                                <span className="font-thin ml-2">
                                                    14d
                                                </span>
                                            </span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            EVENTS
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            USERS
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            ASSIGNEE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person) => (
                                        <tr key={person.email}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {person.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {person.title}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {person.email}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {person.role}
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a
                                                    href="#"
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Edit
                                                    <span className="sr-only">
                                                        , {person.name}
                                                    </span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
