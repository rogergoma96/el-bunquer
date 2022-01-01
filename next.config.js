module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "default",
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: process.env.STRAPI_ADMIN_URL,
        permanent: true,
        basePath: false,
      },
    ];
  },
};
