/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'uploads-ssl.webflow.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
