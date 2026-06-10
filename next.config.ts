import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Land visitors on the default design + locale.
      { source: "/", destination: "/v1/en", permanent: false },
      // Design path without a locale -> default locale.
      {
        source: "/:design(v1|v2)",
        destination: "/:design/en",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
