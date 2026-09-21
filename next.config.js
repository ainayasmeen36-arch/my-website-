const forGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = (process.env.GITHUB_REPOSITORY || "").split("/")[1] || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export for Hostinger / GitHub Pages / any static host
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only GitHub Pages needs a sub-path. Hostinger stays at domain root.
  ...(forGitHubPages && repoName
    ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
    : {}),
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export for Hostinger / GitHub Pages / any static host
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only GitHub Pages needs a sub-path. Hostinger stays at domain root.
  ...(forGitHubPages
    ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
    : {}),
};

module.exports = nextConfig;
