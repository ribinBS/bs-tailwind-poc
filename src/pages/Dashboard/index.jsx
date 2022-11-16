import React from "react";
import Tabs from "../../components/Tabs";
import Dropdowns from "../../components/Dropdowns";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

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
                <div className="grid grid-flow-col auto-cols-auto my-6 px-6">
                    <div className="flex">
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
                    <div className="flex w-full">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>
                <Table />
            </div>
            <Pagination />
            <Footer />
        </main>
    );
}
