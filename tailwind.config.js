/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'esrb-6': '#BEBEBE',
                'esrb-5': '#FFA4A4',
                'esrb-4': '#FFC291',
                'esrb-3': '#FFE397',
                'esrb-2': '#A5DAF9',
                'esrb-1': '#A8F5A8',
                't-esrb-5': '#243c5a',
                't-esrb-4': '#243c5a',
                't-esrb-3': '#243c5a',
                't-esrb-2': '#A5DAF9',
                't-esrb-1': '#67E967'
            },
        },
    },
    plugins: [],
}
