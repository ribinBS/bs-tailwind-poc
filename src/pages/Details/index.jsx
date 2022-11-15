import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EnvelopeIcon,
    HomeIcon,
    EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid';

const items = [
    { name: 'Save and schedule', href: '#' },
    { name: 'Save and publish', href: '#' },
    { name: 'Export PDF', href: '#' },
];

const tabs = [
    { name: 'Details', href: '#', current: true },
    { name: 'Activity', href: '#', count: '0', current: false },
    { name: 'User Feedback', count: '0', href: '#', current: false },
    { name: 'Attachments', href: '#', current: false },
    { name: 'Tags', href: '#', current: false },
    { name: 'All Events', href: '#', current: false },
    { name: 'Merged Issues', href: '#', current: false },
    { name: 'Similar Issues', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Details() {
    return (
        <main className='flex-1'>
            <div className='pt-6 mx-auto border-b bg-gray-100'>
                <div className='px-6'>
                    <div className=''>
                        <nav className='sm:hidden' aria-label='Back'>
                            <a
                                href='#'
                                className='flex items-center text-sm font-medium text-gray-500 hover:text-gray-700'>
                                <ChevronLeftIcon
                                    className='-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400'
                                    aria-hidden='true'
                                />
                                Back
                            </a>
                        </nav>
                        <nav className='hidden sm:flex' aria-label='Breadcrumb'>
                            <ol
                                role='list'
                                className='flex items-center space-x-4'>
                                <li>
                                    <div className='flex'>
                                        <a
                                            href='#'
                                            className='text-sm font-medium text-gray-500 hover:text-gray-700'>
                                            Issues
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex items-center'>
                                        <ChevronRightIcon
                                            className='h-5 w-5 flex-shrink-0 text-gray-400'
                                            aria-hidden='true'
                                        />
                                        <a
                                            href='#'
                                            className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'>
                                            <div className='flex'>
                                                <HomeIcon
                                                    className='h-5 w-5 flex-shrink-0'
                                                    aria-hidden='true'
                                                />
                                                PRODUCT-1SMT
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className=' mt-2 md:flex md:items-center md:justify-between'>
                        <div className='min-w-0 flex-1'>
                            <div className='-ml-2 -mt-2 mb-2 flex flex-wrap items-baseline'>
                                <h3 className='ml-2 mt-2 text-lg font-medium leading-6 text-gray-900'>
                                    InvalidStateError
                                </h3>
                                <p className='ml-2 mt-1 truncate text-sm text-gray-500'>
                                    apply(app/assets/javascripts/webrtc/common/bs_webrtc_api)
                                </p>
                                <span className='inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800'>
                                    New Issue
                                </span>
                            </div>
                            <div className='align-center mt-1 mb-3 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6'>
                                <span className='inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800'>
                                    <svg
                                        className='-ml-0.5 mr-1.5 h-2 w-2 text-red-400'
                                        fill='currentColor'
                                        viewBox='0 0 8 8'>
                                        <circle cx={4} cy={4} r={3} />
                                    </svg>
                                    Unhandled
                                </span>
                                <div className='flex items-center text-sm text-gray-500'>
                                    No remoteDescription
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='inline-flex rounded-md shadow-sm mr-2'>
                                    <button
                                        type='button'
                                        className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                                        <EnvelopeIcon
                                            className='-ml-0.5 mr-2 h-4 w-4'
                                            aria-hidden='true'
                                        />
                                        Resolve
                                    </button>
                                    <Menu
                                        as='div'
                                        className='relative -ml-px block'>
                                        <Menu.Button className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                                            <span className='sr-only'>
                                                Open options
                                            </span>
                                            <ChevronDownIcon
                                                className='h-4 w-4'
                                                aria-hidden='true'
                                            />
                                        </Menu.Button>
                                        <Transition
                                            as={Fragment}
                                            enter='transition ease-out duration-100'
                                            enterFrom='transform opacity-0 scale-95'
                                            enterTo='transform opacity-100 scale-100'
                                            leave='transition ease-in duration-75'
                                            leaveFrom='transform opacity-100 scale-100'
                                            leaveTo='transform opacity-0 scale-95'>
                                            <Menu.Items className='absolute right-0 z-10 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                                <div className='py-1'>
                                                    {items.map((item) => (
                                                        <Menu.Item
                                                            key={item.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={
                                                                        item.href
                                                                    }
                                                                    className={classNames(
                                                                        active
                                                                            ? 'bg-gray-100 text-gray-900'
                                                                            : 'text-gray-700',
                                                                        'block px-2.5 py-2 text-xs'
                                                                    )}>
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                                <div className='inline-flex rounded-md shadow-sm mr-2'>
                                    <button
                                        type='button'
                                        className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                                        <EnvelopeIcon
                                            className='-ml-0.5 mr-2 h-4 w-4'
                                            aria-hidden='true'
                                        />
                                        Ignore
                                    </button>
                                    <Menu
                                        as='div'
                                        className='relative -ml-px block'>
                                        <Menu.Button className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
                                            <span className='sr-only'>
                                                Open options
                                            </span>
                                            <ChevronDownIcon
                                                className='h-4 w-4'
                                                aria-hidden='true'
                                            />
                                        </Menu.Button>
                                        <Transition
                                            as={Fragment}
                                            enter='transition ease-out duration-100'
                                            enterFrom='transform opacity-0 scale-95'
                                            enterTo='transform opacity-100 scale-100'
                                            leave='transition ease-in duration-75'
                                            leaveFrom='transform opacity-100 scale-100'
                                            leaveTo='transform opacity-0 scale-95'>
                                            <Menu.Items className='absolute right-0 z-10 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                                <div className='py-1'>
                                                    {items.map((item) => (
                                                        <Menu.Item
                                                            key={item.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={
                                                                        item.href
                                                                    }
                                                                    className={classNames(
                                                                        active
                                                                            ? 'bg-gray-100 text-gray-900'
                                                                            : 'text-gray-700',
                                                                        'block px-2.5 py-2 text-xs'
                                                                    )}>
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                                <button
                                    type='button'
                                    className='mr-2 inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                    <EnvelopeIcon
                                        className='-ml-0.5 mr-2 h-4 w-4'
                                        aria-hidden='true'
                                    />
                                    Mark Reviewed
                                </button>
                                <button
                                    type='button'
                                    className='mr-2 inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                    Open in Discover
                                </button>
                                <button
                                    type='button'
                                    className='mr-2 inline-flex items-center rounded border border-gray-300 bg-white p-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                    <EnvelopeIcon
                                        className='mx-0.2 h-4 w-4'
                                        aria-hidden='true'
                                    />
                                </button>
                                <Menu
                                    as='div'
                                    className='relative inline-block text-left'>
                                    <div>
                                        <Menu.Button className='inline-flex items-center rounded border border-gray-300 bg-white p-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                            <span className='sr-only'>
                                                Open options
                                            </span>
                                            <EllipsisHorizontalIcon
                                                className='h-4 w-4'
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
                            </div>
                        </div>
                        <div className='mt-4 flex flex-shrink-0 md:mt-0 md:ml-4'>
                            <div key='Events' className='px-4 py-5 sm:p-6'>
                                <dt className='text-base font-normal text-gray-900'>
                                    EVENTS
                                </dt>
                                <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
                                    <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
                                        6
                                    </div>
                                </dd>
                            </div>
                            <div key='users' className='px-4 py-5 sm:p-6'>
                                <dt className='text-base font-normal text-gray-900'>
                                    USERS
                                </dt>
                                <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
                                    <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
                                        3
                                    </div>
                                </dd>
                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block mt-1'>
                        <div className='border-b border-gray-200'>
                            <nav
                                className='-mb-px flex space-x-8'
                                aria-label='Tabs'>
                                {tabs.map((tab) => (
                                    <a
                                        key={tab.name}
                                        href='#'
                                        className={classNames(
                                            tab.current
                                                ? 'border-indigo-500 text-indigo-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                                            'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm'
                                        )}
                                        aria-current={
                                            tab.current ? 'page' : undefined
                                        }>
                                        {tab.name}
                                        {tab.count ? (
                                            <span
                                                className={classNames(
                                                    tab.current
                                                        ? 'bg-indigo-100 text-indigo-600'
                                                        : 'bg-gray-100 text-gray-900',
                                                    'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
                                                )}>
                                                {tab.count}
                                            </span>
                                        ) : null}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
