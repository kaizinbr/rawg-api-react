/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.rawg.io',
                port: '',
                pathname: '/**',
            },
        ],
    },
    theme: {
        extend: {
            colors: {
                'vivid-tangerine': {
                    50: '#fff3f1',
                    100: '#ffe6e1',
                    200: '#ffd0c7',
                    300: '#ffb0a0',
                    400: '#ff9580',
                    500: '#f85a3b',
                    600: '#e53e1d',
                    700: '#c13114',
                    800: '#a02b14',
                    900: '#842a18',
                    950: '#481207',
                },
                'teste-bg': {
                    50: '#282A36',
                    100: '#18181b',
                }
            },
            spacing: {
                'fScreen': 'calc(100vh - 4rem)',
            }
        }
    }

}

module.exports = nextConfig
