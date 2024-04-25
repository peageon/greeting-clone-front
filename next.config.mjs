/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/workspace/:post_id/settings",
        destination: "/workspace/:post_id/settings/workspace", // The :path parameter is used here so will not be automatically passed in the query
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
