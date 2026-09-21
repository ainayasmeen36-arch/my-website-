const forGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = (process.env.GITHUB_REPOSITORY || "").split("/")[1] || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(forGitHubPages && repoName
    ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
    : {}),
};

module.exports = nextConfig;
