import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The root layout lives under the dynamic [lang] segment, so a normal
  // root not-found.tsx has no `<html>/<body>` to render into. This flag
  // enables app/global-not-found.tsx to handle it instead.
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      // Land visitors on the default locale.
      { source: "/", destination: "/en", permanent: false },
    ];
  },
};

export default nextConfig;
