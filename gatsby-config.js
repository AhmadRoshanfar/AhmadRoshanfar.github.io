/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config = require("./config");

module.exports = {
  pathPrefix: "/AhmadRoshanfar.github.io",
  siteMetadata: {
    title: `EmbeddedAi_Blog`,
    siteUrl: "https://ahmadroshanfar.github.io",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
