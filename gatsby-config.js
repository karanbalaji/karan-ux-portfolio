module.exports = {
  siteMetadata: {
    title: `Karan Balaji – Ux Designer/Engineer (Cloud UX & CX)`,
    description: `Ux Engineer from Toronto,ON.`,
    siteUrl: `https://karanbalaji.com/`,
    author: `Karan Balaji`,
    socialLinks: {
      github: { url: 'https://github.com/karanbalaji/', name: 'GitHub' },
      linkedin: {
          url: 'https://www.linkedin.com/in/karanbalaji/',
          name: 'LinkedIn',
      },
      Twitter: { url: 'https://twitter.com/Karanbalaji047', name: 'Twitter' },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
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
        name: `Karan Balaji`,
        short_name: `Karan`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f1f2ff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        include: /svg-icons/
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,

    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'karan-ux-portfolio',
          protocol: "https",
        hostname: "https://karanbalaji.com/",
      },
  },

  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-L5QR6PCFCF", // Google Analytics / GA
        "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Defaults to https://www.googletagmanager.com
        origin: "https://karanbalaji.com/",
        // Delays processing pageview events on route update (in milliseconds)
        delayOnRouteUpdate: 0,
      },
    },
  },


      {
        resolve: `gatsby-plugin-hotjar`,
        options: {
          includeInDevelopment: true, // optional parameter to include script in development
          id: 1745332,
          sv: 6,
        },
      },
      {
        resolve: `gatsby-plugin-google-adsense`,
        options: {
          publisherId: `ca-pub-6055502668927810`
        },
      },

      {
        resolve: `gatsby-plugin-vwo`,
        options: {
          accountId: '783007',
          async: false // Defaults to `true`
        },
      },
    
    

    

  ],
  
}
