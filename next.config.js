const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: {
    domains: ["www.lot23.com"],
  },
  experimental: {
    urlImports: [
      "https://api.motif.land",
      "https://cdn.skypack.dev",
      "https://esm.sh",
      "https://cdn.motif.land",
    ],
  },
});
