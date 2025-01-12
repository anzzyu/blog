import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/blog',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['gips3.baidu.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'prefixIds',
                  params: {
                    delim: '__',
                    prefixIds: true,
                    prefixClassNames: true,
                  },
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
