// src/app/Component/ThemeSwitcher.tsx
"use client";

import React from 'react';
import { useTheme, Theme } from './Theme'; // Adjust the import as needed

const ThemeSwitcher = () => {
    const { setTheme } = useTheme();

    const changeTheme = (theme: Theme) => {
        setTheme(theme);
    };

    return (
        <div className="flex justify-center mb-8">
            <button
                onClick={() => changeTheme('dark')}
                className="px-4 py-2 mx-2 bg-gray-800 text-white rounded"
            >
                Dark
            </button>
            <button
                onClick={() => changeTheme('light')}
                className="px-4 py-2 mx-2 bg-gray-300 text-black rounded"
            >
                Light
            </button>
            <button
                onClick={() => changeTheme('cyan')}
                className="px-4 py-2 mx-2 bg-cyan-500 text-white rounded"
            >
                Cyan
            </button>
        </div>
    );
};

export default ThemeSwitcher;
