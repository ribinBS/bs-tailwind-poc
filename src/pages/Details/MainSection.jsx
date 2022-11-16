import React, { Fragment } from 'react';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    EnvelopeIcon,
    CakeIcon,
    ClockIcon,
    ChevronDownIcon,
    MegaphoneIcon,
    InformationCircleIcon,
} from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const breadcrumbs = [
    {
        category: 'xhr',
        description:
            'GET /get_experiment_value?key=live_common_spotlight_wrapper&default_value=false [200]',
        time: '06:31:56',
        level: 'info',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        category: 'xhr',
        description:
            'GET /get_experiment_value?key=live_common_spotlight_wrapper&default_value=false [200]',
        time: '06:31:56',
        level: 'info',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        category: 'xhr',
        description:
            'GET /get_experiment_value?key=live_common_spotlight_wrapper&default_value=false [200]',
        time: '06:31:56',
        level: 'info',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        category: 'xhr',
        description:
            'GET /get_experiment_value?key=live_common_spotlight_wrapper&default_value=false [200]',
        time: '06:31:56',
        level: 'info',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        category: 'xhr',
        description:
            'GET /get_experiment_value?key=live_common_spotlight_wrapper&default_value=false [200]',
        time: '06:31:56',
        level: 'info',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
];

export default function MainSection() {
    return (
        <div className='py-4 px-4 sm:px-6 lg:px-6 mb-9'>
            <div className='md:flex md:items-start md:justify-between flex-start'>
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
            <div className='flex'>
                <a href='#' className='mr-7 group block flex-shrink-0'>
                    <div className='flex items-center'>
                        <div>
                            <img
                                className='inline-block h-9 w-9 rounded-full'
                                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                alt=''
                            />
                        </div>
                        <div className='ml-3'>
                            <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                                3342895
                            </p>
                        </div>
                    </div>
                </a>
                <a href='#' className='mr-7 group block flex-shrink-0'>
                    <div className='flex items-center'>
                        <div>
                            <img
                                className='inline-block h-9 w-9 rounded-full'
                                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                alt=''
                            />
                        </div>
                        <div className='ml-3'>
                            <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                                Firefox
                            </p>
                            <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                                <b>Version:</b> 105.0
                            </p>
                        </div>
                    </div>
                </a>
                <a href='#' className='group block flex-shrink-0'>
                    <div className='flex items-center'>
                        <div>
                            <img
                                className='inline-block h-9 w-9 rounded-full'
                                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                alt=''
                            />
                        </div>
                        <div className='ml-3'>
                            <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                                Windows
                            </p>
                            <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                                <b>Version:</b> 8.1
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='flex mt-6 flex-col'>
                <div className='font-medium text-sm flex text-gray-500'>
                    Tags{' '}
                    <CakeIcon className='ml-1 h-5 w-5' aria-hidden='true' />
                </div>
                <div className='flex mt-2 flex-wrap'>
                    <div className='inline-flex rounded-md shadow-sm mr-2 mb-2'>
                        <div className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 '>
                            DOMException.code
                        </div>
                        <div as='div' className='relative -ml-px block'>
                            <div className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-blue-500 '>
                                11
                            </div>
                        </div>
                    </div>
                    <div className='inline-flex rounded-md shadow-sm mr-2 mb-2'>
                        <div className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 '>
                            browser
                        </div>
                        <div as='div' className='relative -ml-px block'>
                            <div className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-blue-500 '>
                                11
                            </div>
                        </div>
                    </div>
                    <div className='inline-flex rounded-md shadow-sm mr-2 mb-2'>
                        <div className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 '>
                            browser.name
                        </div>
                        <div as='div' className='relative -ml-px block'>
                            <div className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-blue-500 '>
                                11
                            </div>
                        </div>
                    </div>
                    <div className='inline-flex rounded-md shadow-sm mr-2 mb-2'>
                        <div className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 '>
                            environment
                        </div>
                        <div as='div' className='relative -ml-px block'>
                            <div className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-blue-500 '>
                                11
                            </div>
                        </div>
                    </div>
                    <div className='inline-flex rounded-md shadow-sm mr-2 mb-2'>
                        <div className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 '>
                            browser
                        </div>
                        <div as='div' className='relative -ml-px block'>
                            <div className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-blue-500 '>
                                11
                            </div>
                        </div>
                    </div>
                    <div className='inline-flex rounded-md shadow-sm mr-2 mb-2'>
                        <div className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 '>
                            browser
                        </div>
                        <div as='div' className='relative -ml-px block'>
                            <div className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-blue-500 '>
                                11
                            </div>
                        </div>
                    </div>
                    <div className='inline-flex rounded-md shadow-sm mr-2 mb-2'>
                        <div className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 '>
                            browser
                        </div>
                        <div as='div' className='relative -ml-px block'>
                            <div className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-blue-500 '>
                                11
                            </div>
                        </div>
                    </div>
                    <div className='inline-flex rounded-md shadow-sm mr-2 mb-2'>
                        <div className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 '>
                            browser
                        </div>
                        <div as='div' className='relative -ml-px block'>
                            <div className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-blue-500 '>
                                11
                            </div>
                        </div>
                    </div>
                    <div className='inline-flex rounded-md shadow-sm mr-2 mb-2'>
                        <div className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 '>
                            browser
                        </div>
                        <div as='div' className='relative -ml-px block'>
                            <div className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-blue-500 '>
                                11
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-10'>
                <div className='font-medium text-sm flex text-gray-500'>
                    Stack Trace{'   '}
                    <span className='text-gray-800 font-regular'>
                        (most recent call first)
                    </span>
                </div>
                <div>
                    <span className='isolate inline-flex rounded-md shadow-xs'>
                        <button
                            type='button'
                            className='relative inline-flex items-center rounded-l-md border text-gray-100 border-gray-300 bg-violet-600 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-violet-700 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                            Full
                        </button>
                        <button
                            type='button'
                            className='relative -ml-px inline-flex items-center rounded-r-md  border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                            Raw
                        </button>
                    </span>
                    <span className='isolate inline-flex rounded-md shadow-xs ml-2'>
                        <button
                            type='button'
                            className='relative inline-flex items-center rounded-l-md border text-gray-100 border-gray-300 bg-violet-600 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-violet-700 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                            Original
                        </button>
                        <button
                            type='button'
                            className='relative -ml-px inline-flex items-center rounded-r-md  border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                            Minified
                        </button>
                    </span>
                </div>
            </div>
            <div className='flex flex-col'>
                <h3 className='mt-2 text-xl font-medium leading-6 text-gray-900'>
                    Error
                </h3>
                <p className='text-xs mt-1'>
                    Request failed with status code 422
                </p>
                <div className='flex mt-3'>
                    <div className='inline-flex rounded-md shadow-sm mr-2 mb-2'>
                        <div className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 '>
                            mechanism
                        </div>
                        <div as='div' className='relative -ml-px block'>
                            <div className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-gray-700'>
                                generic
                            </div>
                        </div>
                    </div>
                    <div className='inline-flex rounded-md shadow-sm mr-2 mb-2'>
                        <div className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 '>
                            handled
                        </div>
                        <div as='div' className='relative -ml-px block'>
                            <div className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium text-green-500'>
                                true
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex  flex-col mt-10'>
                <div className='flex justify-between'>
                    <div className='font-medium text-sm flex text-gray-500'>
                        Breadcrumbs
                    </div>
                    <div>
                        <span className='isolate inline-flex rounded-md shadow-xs'>
                            <Menu
                                as='div'
                                className='relative inline-block text-left'>
                                <div>
                                    <Menu.Button className='inline-flex w-full justify-center rounded-l-md  border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                        Filter By
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
                                    <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
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
                                            <form method='POST' action='#'>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            type='submit'
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-700',
                                                                'block w-full px-4 py-2 text-left text-sm'
                                                            )}>
                                                            Sign out
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </form>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <div className='relative  rounded-md shadow-sm w-64'>
                                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                                    <EnvelopeIcon
                                        className='h-5 w-5 text-gray-400'
                                        aria-hidden='true'
                                    />
                                </div>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    className='block w-full rounded-r-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                    placeholder='Search breadcrumbs'
                                />
                            </div>
                        </span>
                    </div>
                </div>
                <div className=' mt-3 rounded-md border'>
                    <table className='min-w-full divide-y divide-gray-300'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th
                                    scope='col'
                                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'>
                                    TYPE
                                </th>
                                <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                                    CATEGORY
                                </th>
                                <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                                    DESCRIPTION
                                </th>
                                <th
                                    scope='col'
                                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                                    LEVEL
                                </th>
                                <th
                                    scope='col'
                                    className='flex px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                                    <ClockIcon
                                        className='ml-1 h-5 w-5'
                                        aria-hidden='true'
                                    />
                                    TIME
                                </th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200 bg-white'>
                            {breadcrumbs.map((breadcrumb, index) => (
                                <tr key={index}>
                                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                                        <div className='flex items-center'>
                                            <div className='h-10 w-10 flex-shrink-0'>
                                                <img
                                                    className='h-10 w-10 rounded-full'
                                                    src={breadcrumb.image}
                                                    alt=''
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                        <div className='text-gray-900'>
                                            {breadcrumb.category}
                                        </div>
                                    </td>
                                    <td className=' px-3 py-4 text-sm text-gray-500'>
                                        {breadcrumb.description}
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                        <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                                            {breadcrumb.level}
                                        </span>
                                    </td>
                                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                        {breadcrumb.time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex mt-4 flex-col'>
                <h3 className='mt-2 text-lg font-medium leading-6 text-gray-900'>
                    Fragment
                </h3>
                <p className='bg-gray-100 p-2 rounded mt-2 text-xs'>
                    os=iOS&os_version=15.0&device_browser=safari&zoom_to_fit=true&full_screen=true&speed=1
                </p>
            </div>
            <div className='flex mt-4 flex-col'>
                <h3 className='mt-2 text-lg font-medium leading-6 text-gray-900'>
                    Headers
                </h3>
                <div className='flex flex-row  mt-2'>
                    <div className='w-1/6 text-xs py-2'>User-Agent</div>
                    <p className='bg-gray-100 p-2 rounded text-xs w-full'>
                        Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                        AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0
                        Safari/537.36
                    </p>
                </div>
                <div className='font-medium text-sm flex text-gray-500 mt-8'>
                    User
                </div>
                <div className='flex flex-row  mt-2'>
                    <div className='w-1/6 text-xs py-2'>ID</div>
                    <p className='bg-gray-100 p-2 rounded text-xs w-full'>
                        4568545
                    </p>
                </div>
                <div className='flex flex-row  mt-2'>
                    <div className='w-1/6 text-xs py-2'>IP Address</div>
                    <p className='bg-gray-100 p-2 rounded text-xs w-full'>
                        None
                    </p>
                </div>
                <div className='font-medium text-sm flex text-gray-500 mt-8'>
                    Browser
                </div>
                <div className='flex flex-row  mt-2'>
                    <div className='w-1/6 text-xs py-2'>Name</div>
                    <p className='bg-gray-100 p-2 rounded text-xs w-full'>
                        Chrome
                    </p>
                </div>
                <div className='flex flex-row  mt-2'>
                    <div className='w-1/6 text-xs py-2'>Version</div>
                    <p className='bg-gray-100 p-2 rounded text-xs w-full'>
                        107
                    </p>
                </div>
                <div className='font-medium text-sm flex text-gray-500 mt-8'>
                    Operating System
                </div>
                <div className='flex flex-row  mt-2'>
                    <div className='w-1/6 text-xs py-2'>Name</div>
                    <p className='bg-gray-100 p-2 rounded text-xs w-full'>
                        Windows
                    </p>
                </div>
                <div className='flex flex-row  mt-2'>
                    <div className='w-1/6 text-xs py-2'>Version</div>
                    <p className='bg-gray-100 p-2 rounded text-xs w-full'>10</p>
                </div>
                <div className='font-medium text-sm flex text-gray-500 mt-8'>
                    SDK
                </div>
                <div className='flex flex-row  mt-2'>
                    <div className='w-1/6 text-xs py-2'>Name</div>
                    <p className='bg-gray-100 p-2 rounded text-xs w-full'>
                        Chrome
                    </p>
                </div>
                <div className='flex flex-row  mt-2'>
                    <div className='w-1/6 text-xs py-2'>
                        sentry.javascript.browser
                    </div>
                    <p className='bg-gray-100 p-2 rounded text-xs w-full'>
                        6.19.7
                    </p>
                </div>
            </div>
            <div className='rounded-md bg-blue-50 p-4 border border-indigo-600 mt-10'>
                <div className='flex'>
                    <div className='flex-shrink-0'>
                        <InformationCircleIcon
                            className='h-5 w-5 text-blue-400'
                            aria-hidden='true'
                        />
                    </div>
                    <div className='ml-3 flex-1 md:flex md:justify-between'>
                        <p className='text-sm text-black'>
                            We recommend you update your SDK from
                            sentry.javascript.browser@v6.19.7 to
                            sentry.javascript.browser@v7.19.0 (All sentry
                            packages should be updated and their versions should
                            match)
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-10'>
                <div className='font-medium text-sm flex text-gray-500'>
                    Event Grouping Information{'   '}
                    <span className='text-gray-800 font-regular'>
                        (grouped by exception stack-trace)
                    </span>
                </div>
                <div className='font-medium text-sm flex text-gray-500 hover:text-gray-400 cursor-pointer'>
                    Show Details
                </div>
            </div>
        </div>
    );
}
