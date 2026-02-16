/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: 'rgb(var(--rgb-black) / <alpha-value>)',
                white: 'rgb(var(--rgb-white) / <alpha-value>)',
                // New Palette: #5D1F1E, #AB4F41, #CB6F4A, #EECB88
                brand: {
                    dark: '#5D1F1E',      // deep red
                    primary: '#AB4F41',   // rust
                    secondary: '#CB6F4A', // clay
                    accent: '#EECB88',    // sand/gold
                },
                gray: {
                    light: '#cccccc',
                    DEFAULT: '#808080',
                    dark: '#333333'
                }
            },
            backgroundImage: {
                'iris-gradient': 'linear-gradient(to top, #5D1F1E, #AB4F41, #CB6F4A, #EECB88)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
