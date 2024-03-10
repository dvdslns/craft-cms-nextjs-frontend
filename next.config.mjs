/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'craft.dvdslns.tech',
          },
        ],
      },
};

export default nextConfig;
