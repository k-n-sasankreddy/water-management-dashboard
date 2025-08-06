/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enables class-based dark mode
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'bounce-slow': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'bounce-slower': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
            },
            animation: {
                'bounce-slow': 'bounce-slow 3s infinite',
                'bounce-slower': 'bounce-slower 5s infinite',
            },
        },
    },
    plugins: [],
}