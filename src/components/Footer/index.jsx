import React from 'react';
import { CakeIcon } from '@heroicons/react/20/solid';

const navigation = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms Of use', href: '#' },
];
const navigationRight = [
    { name: 'Terms', href: '#' },
    { name: 'Terms 1', href: '#' },
    { name: 'Terms 2', href: '#' },
];

export default function Footer() {
    return (
        <footer className='bg-gray-100 border-t py-3'>
            <div className='flex flex-row justify-between items-center'>
                <nav
                    className='flex flex-wrap justify-center'
                    aria-label='Footer'>
                    {navigation.map((item) => (
                        <div key={item.name} className='px-5 py-2'>
                            <a
                                href={item.href}
                                className='text-base text-gray-500 hover:text-gray-900'>
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className='flex justify-center space-x-6'>
                    <CakeIcon className='h-8 w-8' />
                </div>
                <nav
                    className='flex flex-wrap justify-center'
                    aria-label='Footer'>
                    {navigationRight.map((item) => (
                        <div key={item.name} className='px-5 py-2'>
                            <a
                                href={item.href}
                                className='text-base text-gray-500 hover:text-gray-900'>
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
