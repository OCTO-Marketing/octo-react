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
                sm: { max: '768px' },
            },
            spacing: {
                15: '3.75rem',
            },
            colors: {
                accent: { DEFAULT: '#2f80ed' },
                title: { DEFAULT: '#1e2340' },
                cal: { gold: '#F2A900', blue: '#003A70' },
            },
            boxShadow: {
                card: '0 10px 29px 0 rgba(68, 88, 144, 0.1)',
                'card-hover': '0 10px 36px 0 rgba(68, 88, 144, 0.3)',
            },
            keyframes: {
                show: {
                    from: {
                        opacity: '0',
                        transform: 'translateY(5px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                shake: {
                    '0%, 100%': {
                        transform: 'translateX(0)',
                    },
                    '10%, 30%, 50%, 70%, 90%': {
                        transform: 'translateX(-3px)',
                    },
                    '20%, 40%, 60%, 80%': {
                        transform: 'translateX(3px)',
                    },
                },
                load: {
                    '0%, 100%': {
                        opacity: '100%',
                    },
                    '50%': {
                        opacity: '50%',
                    },
                },
                breath: {
                    '0%, 100%': {
                        opacity: '73%',
                    },
                    '50%': {
                        opacity: '50%',
                    },
                },
                jump: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-4px)',
                    },
                },
                leaveRight: {
                    from: {
                        transform: 'translateX(0)',
                    },
                    to: {
                        transform: 'translateX(128px)',
                    },
                },
            },
            animation: {
                shaking: 'shake 300ms ease-in-out',
                loading: 'load 1s infinite',
                breathing: 'breath 2s infinite ease-in-out',
                showing: 'show 0.3s ease-in-out',
                jumping: 'jump 1s infinite',
                leavingRight: 'leaveRight 0.3s ease-in',
            },
        },
    },
    plugins: [],
}
