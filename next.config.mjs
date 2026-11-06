/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Static export: `npm run build` writes the whole site to the `out` folder.
  output: "export",
  // Each page is saved as folder/index.html so it works on any static host.
  trailingSlash: true,
  // No server to resize images in a static export — serve the WebP files as they are.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
