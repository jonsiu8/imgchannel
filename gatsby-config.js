module.exports = {
  siteMetadata: {
    title: "IMG Channel",
    author: "JFS",
    description: "A reference and tool site for IMG",
    siteUrl: 'https://www.imgchannel.com/',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: `images`,
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 800,
    //         },
    //       },
    //       "gatsby-remark-copy-linked-files",
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/pages/posts`,
              name: `posts`,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `white`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'IMG Channel',
        short_name: 'IMG Channel',
        start_url: '/',
        background_color: '#DCE1E5',
        theme_color: '#070F29',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
