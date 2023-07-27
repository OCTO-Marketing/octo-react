/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                dm: '"Dm Sans"',
                open: '"Open Sans"',
            },
            screens: {
                mb: { max: '512px' },
                sm: { min: '513px', max: '768px' },
            },
            spacing: {
                15: '3.75rem',
            },
            colors: {
                accent: { DEFAULT: '#2f80ed' },
                title: { DEFAULT: '#1e2340' },
            },
            boxShadow: {
                card: '0 10px 29px 0 rgba(68, 88, 144, 0.1)',
            },
        },
    },
    plugins: [],
}
