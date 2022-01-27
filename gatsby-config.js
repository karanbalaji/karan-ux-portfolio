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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-62005347-1",
      },
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
    resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-67853643-6",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        //anonymize: true,
        // Setting this parameter is also optional
        //respectDNT: true,
        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "https://karanbalaji.tk",
      },
    },

    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: 'b83946aa-51f7-4748-85d5-de48c5dc8b8a',
        enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: true // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },


  ],
}
