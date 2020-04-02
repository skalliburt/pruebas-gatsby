const path = require('path');

/*exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')

       createNodeField({
           node,
           name: 'slug',
           value: slug
       })
    }
}*/

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/templates/blog.js`)
    const res = await graphql(`
        query{
            allContentfulArticle {
                edges {
                  node {
                    slug
                  }
                }
              }
        }
    `)

    res.data.allContentfulArticle.edges.forEach((edge)=>{
        createPage({
            component: blogPostTemplate,
            path: `/blog/${edge.node.slug}`,
            context:{
                slug: edge.node.slug
            }
        })
    })
}