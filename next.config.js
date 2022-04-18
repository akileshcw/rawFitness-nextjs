module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["d205bpvrqc9yn1.cloudfront.net"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
