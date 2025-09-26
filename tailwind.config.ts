import type { Config } from 'tailwindcss'

export default {
    content: [],
    theme: {
        colors: {
            background: '#FFF3E5',
            foreground: '#F8F8F7',

            primary: {
                DEFAULT: '#384B40',
                foreground: '#FFFFFF',
            },
            secondary: {
                DEFAULT: '#F48712',
                foreground: '#FFFFFF',
            },
            muted: {
                DEFAULT: '#9D9D9D',
                foreground: '#FFFFFF',
            },
            accent: {
                DEFAULT: '#407C59',
                foreground: '#FFFFFF',
            },
        },
        fontFamily: {
            sans: ['Open Sauce Sans', 'system-ui', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
} satisfies Config
