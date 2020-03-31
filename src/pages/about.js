import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'

const About = () =>{
    
    const data = useStaticQuery(graphql`
        query{
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  author
                }
                fields{
                  slug
                }
              }
            }
          }
        }
    `)
    return(
        
    <ol>{data.allMarkdownRemark.edges.map((edge)=>{
        return(
            
            <li>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.author}</p>
                </Link>
            </li>
            
        )
    })}</ol>

    )
}
export default About