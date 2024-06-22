/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinifyModeEnabled: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/in-construction',
                permanent: false,
            },
        ]
    },
};

export default nextConfig;