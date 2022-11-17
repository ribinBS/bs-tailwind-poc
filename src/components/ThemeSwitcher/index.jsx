import React, { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
    const [currentTheme, setTheme] = useState('theme1');
    const themeSwapper = (theme) => {
        const el = document.documentElement.querySelector('body');
        el.classList.forEach((item) => el.classList.remove(item));
        if (theme) {
            el.classList.add(theme);
            setTheme(theme);
        }
    };

    useEffect(() => {
        themeSwapper('');
    }, []);

    return (
        <div className='flex fixed right-2 bottom-2 z-20 shadow-2xl'>
            <span className='isolate inline-flex rounded-md shadow-sm'>
                <button
                    onClick={() => themeSwapper('theme1')}
                    type='button'
                    className={`${
                        currentTheme === 'theme1' ? 'bg-teal-200' : 'bg-white'
                    }  relative inline-flex items-center rounded-l-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}>
                    Theme 1
                </button>
                <button
                    onClick={() => themeSwapper('theme2')}
                    type='button'
                    className={`${
                        currentTheme === 'theme2' ? 'bg-teal-200' : 'bg-white'
                    } relative -ml-px inline-flex items-center border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}>
                    Theme 2
                </button>
                <button
                    onClick={() => themeSwapper('theme3')}
                    type='button'
                    className={`${
                        currentTheme === 'theme3' ? 'bg-teal-200' : 'bg-white'
                    } relative -ml-px inline-flex items-center rounded-r-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}>
                    Theme 3
                </button>
            </span>
        </div>
    );
}
