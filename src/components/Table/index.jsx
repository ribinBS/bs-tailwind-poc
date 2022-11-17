import React, { Fragment } from "react";
import { MusicalNoteIcon, TrophyIcon } from "@heroicons/react/20/solid";
import ButtonDropdown from "../ButtonDropdown";
import EllipsisDropdown from "../EllipsisDropdown";
import { Menu, Transition } from "@headlessui/react";
import {
    ClockIcon,
    ArrowDownIcon,
    ChevronDownIcon,
} from "@heroicons/react/20/solid";
import Charts from "../Charts";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const people = [
    {
        mainObject: {
            heading: "TypeError",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: 102,
        users: 20,
        assigneeColor: "violet",
        assignee: "A",
    },
    {
        mainObject: {
            heading: "UnhandledRejection",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: 48,
        users: 961,
        assigneeColor: "indigo",
        assignee: "B",
    },
    {
        mainObject: {
            heading: "Error",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: 54,
        users: 462,
        assigneeColor: "violet",
        assignee: "C",
    },
    {
        mainObject: {
            heading: "NotAllowedError",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: 37,
        users: 2,
        assigneeColor: "violet",
        assignee: "D",
    },
    {
        mainObject: {
            heading: "InvalidStateError",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: "5.9k",
        users: 56,
        assigneeColor: "indigo",
        assignee: "E",
    },
    {
        mainObject: {
            heading: "Error",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: 9,
        users: "4.7k",
        assigneeColor: "violet",
        assignee: "F",
    },
    {
        mainObject: {
            heading: "NotAllowedError",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: 102,
        users: 89,
        assigneeColor: "indigo",
        assignee: "G",
    },
    {
        mainObject: {
            heading: "TypeError",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: 82,
        users: 998,
        assigneeColor: "violet",
        assignee: "H",
    },
    {
        mainObject: {
            heading: "UnhandledRejection",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: 7,
        users: 206,
        assigneeColor: "indigo",
        assignee: "I",
    },
    {
        mainObject: {
            heading: "TypeError",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: 52,
        users: 789,
        assigneeColor: "violet",
        assignee: "J",
    },
    {
        mainObject: {
            heading: "Error",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: "4.8k",
        users: 34,
        assigneeColor: "indigo",
        assignee: "K",
    },
    {
        mainObject: {
            heading: "NotAllowedError",
            firstLine: "init(app/assets/javascripts/performance)",
            secondLine:
                "Cannot read properties of undefined (reading 'logEvent')",
            product: "PRODUCT-1R31",
            time: "2min ago | 2mo old",
        },
        title: <Charts />,
        events: "1.7k",
        users: 5,
        assigneeColor: "violet",
        assignee: "L",
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
                                            className="flex justify-between px-3 pt-5 text-left text-xs font-bold text-gray-400"
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
                                            className="px-3 py-3.5 text-left text-xs font-bold text-gray-400"
                                        >
                                            EVENTS
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-xs font-bold text-gray-400"
                                        >
                                            USERS
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-xs font-bold text-gray-400"
                                        >
                                            ASSIGNEE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person) => (
                                        <tr key={person.email}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                <input
                                                    id="comments"
                                                    aria-describedby="comments-description"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <span className="text-lg font-semibold ml-2 text-blue-600">
                                                    {person.mainObject.heading}
                                                </span>
                                                <span className="ml-2 text-sm font-light text-slate-400">
                                                    {
                                                        person.mainObject
                                                            .firstLine
                                                    }
                                                </span>
                                                <div className="ml-6 text-slate-700 font-normal text-sm">
                                                    {
                                                        person.mainObject
                                                            .secondLine
                                                    }
                                                </div>
                                                <div className="flex ml-6 text-xs font-extralight items-center">
                                                    <span className="inline-flex items-center rounded-full border border-red-600 bg-red-100 px-3 py-0.5 text-black mr-2">
                                                        Regression
                                                    </span>
                                                    <span className="mr-4">
                                                        {
                                                            person.mainObject
                                                                .product
                                                        }
                                                    </span>
                                                    <span className="inline-flex ">
                                                        <span className="mr-1">
                                                            <ClockIcon
                                                                className="h-4 w-4"
                                                                aria-hidden="true"
                                                            />
                                                        </span>

                                                        {person.mainObject.time}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {person.title}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-800 text-center text-base text-medium">
                                                {person.events}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-800 text-center text-base text-normal">
                                                {person.users}
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pr-4 text-sm font-medium sm:pr-6">
                                                <div className="flex">
                                                    <span className="mt-3 sm:mt-0 sm:ml-4 mr-2">
                                                        <button
                                                            type="button"
                                                            className={classNames(
                                                                person.assigneeColor
                                                                    ? `bg-${person.assigneeColor}-600 hover:bg-${person.assigneeColor}-700 focus:ring-${person.assigneeColor}-500`
                                                                    : "",
                                                                "inline-flex items-center rounded-md border border-transparent px-2 py-1 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                                                            )}
                                                        >
                                                            {person.assignee}
                                                        </button>
                                                    </span>
                                                    <div className="flex items-center">
                                                        <Menu
                                                            as="div"
                                                            className="relative inline-block text-left"
                                                        >
                                                            <div>
                                                                <Menu.Button className="inline-flex w-full justify-center text-sm font-medium text-gray-700">
                                                                    <ChevronDownIcon
                                                                        className="h-5 w-5"
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
                                                    </div>
                                                </div>
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
