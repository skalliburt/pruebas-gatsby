import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'

const About = () =>{
    
    const data = useStaticQuery(graphql`
        query{
          allContentfulArticle (
            sort:{
              fields:date,
              order: DESC
            }
          ){
            edges {
              node {
                title
                slug
                date(formatString:"MMMM,DD,YYYY")
              }
            }
          }
        }
    `)
    return(
        
    <ol>
      {data.allContentfulArticle.edges.map((edge)=>{
        return(
            
            <li>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.date}</p>
                </Link>
            </li>
            
        )
    })}</ol>

    )
}
export default About