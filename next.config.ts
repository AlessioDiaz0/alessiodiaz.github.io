import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'alessiodiaz.github.io';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
