import React from 'react';

const navigation = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms Of use', href: '#' },
];
const navigationRight = [
    { name: 'Terms', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Terms', href: '#' },
];

export default function Footer() {
    return (
        <footer className='bg-gray-100 border-t mt-9 py-3'>
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
                    <svg
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        className='h-8 w-8'>
                        <path
                            fillRule='evenodd'
                            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                            clipRule='evenodd'
                        />
                    </svg>
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
