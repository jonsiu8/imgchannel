module.exports = {
  siteMetadata: {
    title: "IMG Channel",
    author: "JFS",
    description: "A reference and tool site for IMG"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        //background_color: '#663399',
        background_color: '#FE890A',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
