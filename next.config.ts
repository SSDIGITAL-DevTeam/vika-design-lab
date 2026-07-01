import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Land visitors on the default locale.
      { source: "/", destination: "/en", permanent: false },
      // Bare v1 path -> clean default-locale URL (no /v1 segment).
      { source: "/v1", destination: "/en", permanent: false },
      // Design path without a locale -> default locale.
      {
        source: "/:design(v2|v3)",
        destination: "/:design/en",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      // Client currently only sees v1 — served at the clean /:lang path.
      // v2/v3 stay reachable at their original /v2, /v3 paths as an
      // unlinked backup in case the design choice changes later.
      { source: "/:lang(en|zh)", destination: "/v1/:lang" },
      { source: "/:lang(en|zh)/:path*", destination: "/v1/:lang/:path*" },
    ];
  },
};

export default nextConfig;
