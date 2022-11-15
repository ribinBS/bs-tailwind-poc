import React from 'react';

export default function Dashboard() {
    return (
        <main className='flex-1'>
            <div className='py-6 mx-auto border-b bg-gray-100'>
                <div className='px-4 sm:px-6 lg:px-8  border-gray-200 sm:flex sm:items-center sm:justify-between'>
                    <h3 className='text-2xl font-semibold  leading-6 text-gray-900'>
                        Issues
                    </h3>
                    <div className='mt-3 sm:mt-0 sm:ml-4'>
                        <button
                            type='button'
                            className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                            R
                        </button>
                    </div>
                </div>
            </div>
            <div className='mx-auto px-4 sm:px-6 md:px-8'>
                {/* Replace with your content */}
                <div className='py-4'>
                    <div className='h-96 rounded-lg border-4 border-dashed border-gray-200' />
                </div>
                {/* /End replace */}
            </div>
        </main>
    );
}
