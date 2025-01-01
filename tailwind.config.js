import {nextui} from '@nextui-org/theme';

/** @type {{plugins: ReturnType<Plugin>[], theme: {extend: {}}, darkMode: string, content: string[]}} */
const config = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
          colors: {
            'dark-blue': '#1E293B',
          },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};

export default config;