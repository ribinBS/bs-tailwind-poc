import React from "react";

export default function Example() {
    return (
        <nav
            className="flex items-center justify-end border-gray-200 bg-white px-4 py-3 sm:px-6"
            aria-label="Pagination"
        >
            <div className="hidden sm:block mr-2">
                <p className="text-sm text-normal text-slate-400">
                    Showing
                    <span className="font-medium ml-1">25</span> of{" "}
                    <span className="font-medium">749</span> issues
                </p>
            </div>
            <div className="flex flex-initial justify-between sm:justify-end">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-1 text-lg font-medium text-gray-700 hover:bg-gray-50"
                >
                    &lt;
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-1 text-lg font-medium text-gray-700 hover:bg-gray-50"
                >
                    &gt;
                </a>
            </div>
        </nav>
    );
}
