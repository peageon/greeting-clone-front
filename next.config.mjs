/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/workspace/:postid/settings",
        destination: "/workspace/:postid/settings/workspace", // The :path parameter is used here so will not be automatically passed in the query
        permanent: true,
      },
      {
        source: "/workspace/:postid",
        destination: "/workspace/:postid/openings",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
