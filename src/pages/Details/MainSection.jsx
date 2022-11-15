import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export default function MainSection() {
    return (
        <div className='py-4 px-4 sm:px-6 lg:px-6'>
            <div className=' mt-2 md:flex md:items-start md:justify-between flex-start'>
                <div className='min-w-0 flex-1'>
                    <div className='-ml-2 -mt-2 mb-2 flex flex-wrap items-baseline'>
                        <h3 className='ml-2 mt-2 text-lg font-medium leading-6 text-gray-900'>
                            Event ID
                            <span className='ml-2 mt-1 truncate  text-blue-500 border-r pr-2'>
                                73dfc7acd55742ab933c0538c9a4f5b0
                            </span>
                            <span className='ml-2 mt-1 truncate  text-blue-500'>
                                JSON (80.2KiB)
                            </span>
                        </h3>
                    </div>
                    <div className='align-center mt-1 mb-3 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6'>
                        <div className='flex items-center text-sm text-gray-500'>
                            Nov 15, 2022 6:50:34 AM UTC
                        </div>
                    </div>
                </div>
                <div class='mt-4 flex flex-shrink-0 md:mt-0 md:ml-4'>
                    <span className='isolate inline-flex rounded-md shadow-sm'>
                        <button
                            type='button'
                            className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                            <span className='sr-only'>Previous</span>
                            <ChevronLeftIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                            />
                        </button>
                        <button
                            type='button'
                            className='relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                            Older
                        </button>
                        <button
                            type='button'
                            className='relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                            Newer
                        </button>
                        <button
                            type='button'
                            className='relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                            <span className='sr-only'>Next</span>
                            <ChevronRightIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                            />
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}
