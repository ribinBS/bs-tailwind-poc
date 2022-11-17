import React, { Fragment } from 'react';
import ReactECharts from 'echarts-for-react';
import { Menu, Transition } from '@headlessui/react';
import {
    ChevronDownIcon,
    EnvelopeIcon,
    CakeIcon,
    BoltIcon,
    ArchiveBoxIcon,
} from '@heroicons/react/20/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const chartOptions = {
    xAxis: {
        show: false,
        offset: -100,
        type: 'category',
        axisLine: {
            onZero: false,
        },
    },
    yAxis: {
        type: 'value',
        show: false,
    },
    tooltip: {
        show: true,
    },
    series: [
        {
            data: [
                120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110,
                130, 120, 200, 150, 80, 70, 110, 130,
            ],
            type: 'bar',
        },
    ],
};

export default function AsideSection() {
    return (
        <div className='py-4 px-4 sm:px-6 lg:px-6'>
            <div className='mb-6'>
                <Menu
                    as='div'
                    className='relative inline-block text-left w-full'>
                    <div>
                        <Menu.Button className='inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                            <div className='flex'>
                                <EnvelopeIcon
                                    className='mr-2 h-5 w-5'
                                    aria-hidden='true'
                                />
                                All Envs
                            </div>
                            <ChevronDownIcon
                                className='-mr-1 ml-2 h-5 w-5'
                                aria-hidden='true'
                            />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'>
                        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {/* <div className='px-4 py-3'>
                                <p className='text-sm'>Signed in as</p>
                                <p className='truncate text-sm font-medium text-gray-900'>
                                    tom@example.com
                                </p>
                            </div> */}
                            <div className='py-1'>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href='#'
                                            className={classNames(
                                                active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}>
                                            Account settings
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href='#'
                                            className={classNames(
                                                active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}>
                                            Support
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href='#'
                                            className={classNames(
                                                active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}>
                                            License
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <div className='mb-6'>
                <div className='flex mt-2 items-center justify-between'>
                    <div className='font-medium text-sm flex text-gray-500'>
                        Owned By{' '}
                        <CakeIcon className='ml-1 h-4 w-4' aria-hidden='true' />
                    </div>
                    <div className='flex'>
                        <ArchiveBoxIcon
                            className='ml-1 h-4 w-4'
                            aria-hidden='true'
                        />
                        <BoltIcon className='ml-1 h-4 w-4' aria-hidden='true' />
                    </div>
                </div>
                <div className='flex mt-2 items-center'>
                    <img
                        className='inline-block h-6 w-6 rounded-md'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                    />
                    <p className='text-xs ml-2'>#live-squad</p>
                </div>
            </div>
            <div className='mb-6'>
                <div className='font-medium text-sm flex text-gray-500'>
                    Assigned To
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <div className='items-center flex'>
                        <img
                            className='inline-block h-6 w-6 rounded-md'
                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt=''
                        />
                        <p className='text-xs ml-2'>#live-squad</p>
                    </div>
                    <ChevronDownIcon
                        className='ml-1 h-5 w-5'
                        aria-hidden='true'
                    />
                </div>
            </div>
            <div className='-mb-4'>
                <div className='flex mt-4 items-left justify-between flex-col'>
                    <div className='font-medium text-sm flex text-gray-500'>
                        Last 24 Hours
                    </div>
                    <div className='font-medium text-xl'>2.2k</div>
                    <div className='flex -ml-6'>
                        <ReactECharts
                            style={{ height: '100px', width: '100%' }}
                            option={chartOptions}
                            lazyUpdate={true}
                            theme={'theme_name'}
                        />
                    </div>
                </div>
            </div>
            <div className='-mb-4'>
                <div className='flex mt-4 items-left justify-between flex-col'>
                    <div className='font-medium text-sm flex text-gray-500'>
                        Last 30 Days
                    </div>
                    <div className='font-medium text-xl'>2.2k</div>
                    <div className='flex -ml-6'>
                        <ReactECharts
                            style={{ height: '100px', width: '100%' }}
                            option={chartOptions}
                            lazyUpdate={true}
                            theme={'theme_name'}
                        />
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <div className='flex mt-2 flex-col w-full'>
                    <div className='font-medium text-sm flex text-gray-500 w-full'>
                        Last Seen
                    </div>
                    <div className='flex'>
                        <p className='text-sm text-gray-500'>
                            18 minutes ago in release{' '}
                            <a
                                className='text-blue-600'
                                href='#'
                                target={'_blank'}>
                                v35.82
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <div className='flex mt-2 flex-col w-full'>
                    <div className='font-medium text-sm flex text-gray-500 w-full'>
                        First Seen
                    </div>
                    <div className='flex'>
                        <p className='text-sm text-gray-500'>
                            22 days ago in release{' '}
                            <a
                                className='text-blue-600'
                                href='#'
                                target={'_blank'}>
                                v25.82
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='mb-6'>
                <div className='font-medium text-sm flex text-gray-500'>
                    Issue Tracking
                </div>
                <div className='flex mt-2 items-center justify-between'>
                    <div className='items-center flex'>
                        <BoltIcon className='ml-1 h-5 w-5' />
                        <p className='text-xs ml-2'>Jira Issue</p>
                    </div>
                    <ChevronDownIcon
                        className='ml-1 h-5 w-5'
                        aria-hidden='true'
                    />
                </div>
            </div>
            <div className='mb-6'>
                <div className='flex mt-4  justify-between flex-col'>
                    <div className='font-medium text-sm flex text-gray-500'>
                        Tag Summary
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='mt-3 text-xs'>
                            <div className='flex justify-between w-full font-medium'>
                                <p className='xx'>browser</p>
                                <div className='text-gray-500'>
                                    Chrome 107.0.0{' '}
                                    <b className='text-gray-900'>98%</b>
                                </div>
                            </div>
                            <div className='h-3.5 mt-0.5 flex rounded bg-violet-900 overflow-hidden flex-row justify-end'>
                                <div className='w-5 bg-violet-800 h-full'></div>
                                <div className='w-1 bg-violet-400 h-full'></div>
                            </div>
                        </div>
                        <div className='mt-3 text-xs'>
                            <div className='flex justify-between w-full font-medium'>
                                <p className='xx'>browser.name</p>
                                <div className='text-gray-500'>
                                    Chrome <b className='text-gray-900'>50%</b>
                                </div>
                            </div>
                            <div className='h-3.5 mt-0.5 flex rounded bg-violet-900 overflow-hidden flex-row justify-end'>
                                <div className='w-1/2 bg-violet-800 h-full'></div>
                            </div>
                        </div>
                        <div className='mt-3 text-xs'>
                            <div className='flex justify-between w-full font-medium'>
                                <p className='xx'>browser</p>
                                <div className='text-gray-500'>
                                    Chrome 107.0.0{' '}
                                    <b className='text-gray-900'>98%</b>
                                </div>
                            </div>
                            <div className='h-3.5 mt-0.5 flex rounded bg-violet-900 overflow-hidden flex-row justify-end'>
                                <div className='w-5 bg-violet-800 h-full'></div>
                                <div className='w-1 bg-violet-400 h-full'></div>
                            </div>
                        </div>
                        <div className='mt-3 text-xs'>
                            <div className='flex justify-between w-full font-medium'>
                                <p className='xx'>browser</p>
                                <div className='text-gray-500'>
                                    Chrome 107.0.0{' '}
                                    <b className='text-gray-900'>98%</b>
                                </div>
                            </div>
                            <div className='h-3.5 mt-0.5 flex rounded bg-violet-900 overflow-hidden flex-row justify-end'>
                                <div className='w-5 bg-violet-800 h-full'></div>
                                <div className='w-1 bg-violet-400 h-full'></div>
                            </div>
                        </div>
                        <div className='mt-3 text-xs'>
                            <div className='flex justify-between w-full font-medium'>
                                <p className='xx'>browser</p>
                                <div className='text-gray-500'>
                                    Chrome 107.0.0{' '}
                                    <b className='text-gray-900'>98%</b>
                                </div>
                            </div>
                            <div className='h-3.5 mt-0.5 flex rounded bg-violet-900 overflow-hidden flex-row justify-end'>
                                <div className='w-5 bg-violet-800 h-full'></div>
                                <div className='w-1 bg-violet-400 h-full'></div>
                            </div>
                        </div>
                        <div className='mt-3 text-xs'>
                            <div className='flex justify-between w-full font-medium'>
                                <p className='xx'>browser</p>
                                <div className='text-gray-500'>
                                    Chrome 107.0.0{' '}
                                    <b className='text-gray-900'>98%</b>
                                </div>
                            </div>
                            <div className='h-3.5 mt-0.5 flex rounded bg-violet-900 overflow-hidden flex-row justify-end'>
                                <div className='w-5 bg-violet-800 h-full'></div>
                                <div className='w-1 bg-violet-400 h-full'></div>
                            </div>
                        </div>
                        <div className='mt-3 text-xs'>
                            <div className='flex justify-between w-full font-medium'>
                                <p className='xx'>browser</p>
                                <div className='text-gray-500'>
                                    Chrome 107.0.0{' '}
                                    <b className='text-gray-900'>98%</b>
                                </div>
                            </div>
                            <div className='h-3.5 mt-0.5 flex rounded bg-violet-900 overflow-hidden flex-row justify-end'>
                                <div className='w-5 bg-violet-800 h-full'></div>
                                <div className='w-1 bg-violet-400 h-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='font-medium text-sm flex text-gray-500 mb-2'>
                    Participants (4)
                </div>
                <div className='isolate flex -space-x-1 overflow-hidden'>
                    <img
                        className='relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white'
                        src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                    />
                    <img
                        className='relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white'
                        src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                    />
                    <img
                        className='relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white'
                        src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
                        alt=''
                    />
                    <img
                        className='relative z-0 inline-block h-6 w-6 rounded-full ring-2 ring-white'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
}
