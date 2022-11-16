import React from "react";
import Tabs from "../../components/Tabs";
import Dropdowns from "../../components/Dropdowns";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";
import {
    EnvelopeIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";

export default function Dashboard() {
    return (
        <main className="flex-1">
            <div className="py-4 mx-auto bg-gray-100">
                <div className="px-4 sm:px-6 lg:px-8  border-gray-200 sm:flex sm:items-center sm:justify-between">
                    <h3 className="text-2xl font-semibold leading-6 text-gray-900">
                        Issues
                    </h3>
                    <div className="mt-3 sm:mt-0 sm:ml-4">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            A
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <div className="bg-gray-100 px-8">
                    <Tabs />
                </div>
                <div className="flex my-6 px-6">
                    <div className="flex flex-initial">
                        <div className="mx-2">
                            <Dropdowns name="My Projects" />
                        </div>
                        <div className="mx-2">
                            <Dropdowns name="All Envs" />
                        </div>
                        <div className="mx-2">
                            <Dropdowns name="14D" />
                        </div>
                    </div>
                    <div className="flex flex-1 mb-2">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm w-full">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <EnvelopeIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                            {/* <div className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 ">
                                is:
                            </div>
                            <div as="div" className="relative -ml-px block">
                                <div className="absolute inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-blue-500 ">
                                    unresolved
                                </div>
                            </div> */}
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                // placeholder="you@example.com"
                            />
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <QuestionMarkCircleIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Table />
            </div>
            <Pagination />
            <Footer />
        </main>
    );
}
