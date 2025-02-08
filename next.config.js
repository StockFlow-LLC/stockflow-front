/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost','cms.stockflow.llc'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'cms.stockflow.llc',
                port: '1337',
                pathname: '/uploads/**',
            }
        ],
    },
};

module.exports = nextConfig;
