module.exports = {
  siteMetadata: {
    title: `PerfFreak`,
    tagline: `Tech Blob | Tutorial`,
    description: `A personal blog focussed on software engineering, web development and performance aspects`,
    author: `Shravan Dhar`,
    socialLinks: {
      github: 'saranshkataria',
      facebook: 'wisdomgeek',
      linkedIn: 'saranshkataria',
      twitter: 'saranshk',
      youTube: 'UClW56GhpAKrRu-ZSqAoPjHg',
      instagram: 'kataria.saransh',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Muli:400,600,800`, // you can also specify font weights and styles
          `Source Serif Pro: 400`
        ],
        display: 'swap',
      },
    },
  ],
};
