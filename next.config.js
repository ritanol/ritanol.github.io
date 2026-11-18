/**
 * Static export for GitHub Pages (user site: served from the domain root).
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default config;
