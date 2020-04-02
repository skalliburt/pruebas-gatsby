module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7pceas7aq60n`,
        accessToken: `U2n3V45BClKEPGuAIo6LQ9aGNrtA-zy3LsahlTPN1K4`,
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/data/post`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options:{
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options:{
              maxWidth: 200,
              LinkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}
