/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.pixabay.com',
        },
        {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
          },
      ],
    },
  };
  
  export default nextConfig;
  