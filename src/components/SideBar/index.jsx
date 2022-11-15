import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Avatar from './../Avatar';

const navigation = [
    { name: 'Projects', icon: UsersIcon, href: '#', count: 3, current: false },
    { name: 'Issues', icon: HomeIcon, href: '#', current: true },
    {
        name: 'Performance',
        icon: UsersIcon,
        href: '#',
        count: 3,
        current: false,
    },
    {
        name: 'Profiling',
        icon: FolderIcon,
        href: '#',
        count: 4,
        current: false,
        isBeta: true,
    },
    { name: 'Releases', icon: CalendarIcon, href: '#', current: false },
    { name: 'User Feedback', icon: InboxIcon, href: '#', current: false },
    {
        name: 'Alerts',
        icon: ChartBarIcon,
        href: '#',
        count: 12,
        current: false,
    },
    { name: 'Discover', icon: CalendarIcon, href: '#', current: false },
    { name: 'Dashboards', icon: CalendarIcon, href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function SideBar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Static sidebar for desktop */}
            <div className='md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className='flex min-h-0 flex-1 flex-col bg-gray-800'>
                    <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
                        <div className='flex flex-shrink-0 items-center px-4'>
                            <Avatar />
                        </div>
                        <nav className='mt-5 flex-1 space-y-1 px-2'>
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                    )}>
                                    <item.icon
                                        className={classNames(
                                            item.current
                                                ? 'text-gray-300'
                                                : 'text-gray-400 group-hover:text-gray-300',
                                            'mr-3 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden='true'
                                    />
                                    {item.name}
                                    {item.isBeta && (
                                        <span className='inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800'>
                                            Beta
                                        </span>
                                    )}
                                </a>
                            ))}

                            <a
                                key={'activity'}
                                href={'#'}
                                className={classNames(
                                    'text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}>
                                <CalendarIcon
                                    className={classNames(
                                        'text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden='true'
                                />
                                Activity
                            </a>
                            <a
                                key={'stats'}
                                href={'#'}
                                className={classNames(
                                    'text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}>
                                <CalendarIcon
                                    className={classNames(
                                        'text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden='true'
                                />
                                Stats
                            </a>
                            <a
                                key={'settnings'}
                                href={'#'}
                                className={classNames(
                                    'text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}>
                                <CalendarIcon
                                    className={classNames(
                                        'text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden='true'
                                />
                                Settings
                            </a>
                        </nav>
                    </div>
                    <div className='flex flex-shrink-0 pb-4'>
                        <div className='px-2'>
                            <a
                                key={'help'}
                                href={'#'}
                                className={classNames(
                                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}>
                                <CalendarIcon
                                    className={classNames(
                                        'text-gray-400 group-hover:text-gray-300',
                                        'mr-3 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden='true'
                                />
                                Help
                            </a>
                            <a
                                key={'whatsnew'}
                                href={'#'}
                                className={classNames(
                                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}>
                                <CalendarIcon
                                    className={classNames(
                                        'text-gray-400 group-hover:text-gray-300',
                                        'mr-3 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden='true'
                                />
                                What's new
                            </a>
                            <a
                                key={'collapse'}
                                href={'#'}
                                className={classNames(
                                    'text-gray-300 hover:bg-gray-700 hover:text-white mt-4',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}>
                                <CalendarIcon
                                    className={classNames(
                                        'text-gray-400 group-hover:text-gray-300',
                                        'mr-3 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden='true'
                                />
                                Collapse
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
