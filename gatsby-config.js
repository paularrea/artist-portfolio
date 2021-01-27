 module.exports = {
  siteMetadata: {
    title: `Requesens`,
    description: `Web del artista Pau Requesens, donde comparte todas sus creaciones`,
    author: `Pau Larrea Llopis`,
    siteUrl: "https://www.paurequesens.com",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-breakpoints',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
module.exports = {
  siteMetadata: {
    title: `Requesens`,
    description: `Web del artista Pau Requesens, donde comparte todas sus creaciones`,
    author: `Pau Larrea Llopis`,
    siteUrl: "https://www.paurequesens.com",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: "/en",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:'33',
        path: `${__dirname}/src/images/gallery/33`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/carousel/mobile`,
        name: "carousel",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:'before33',
        path: `${__dirname}/src/images/gallery/b33`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
