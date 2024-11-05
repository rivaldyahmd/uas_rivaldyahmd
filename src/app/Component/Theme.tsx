// src/app/Component/Theme.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the possible theme types
export type Theme = 'light' | 'dark' | 'cyan'; // Add more themes as needed

// Define the shape of the context
interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    themeClasses: {
        [key in Theme]: {
            background: string;
            text: string;
        }
    };
}

// Create the Theme Context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a ThemeProvider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light'); // Default theme

    const themeClasses = {
        light: {
            background: 'bg-white',
            text: 'text-black',
        },
        dark: {
            background: 'bg-black',
            text: 'text-white',
        },
        cyan: {
            background: 'bg-cyan-500',
            text: 'text-black',
        },
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themeClasses }}>
            <div className={themeClasses[theme].background + ' ' + themeClasses[theme].text}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

// Create a custom hook for easy access to the Theme Context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
