import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery} from 'gatsby'


const Index =()=>{ 

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
<Layout>
  <ul>
  {data.allContentfulArticle.edges.map((edge)=>{
    return(
        <li>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.date}</p>
            </Link>
        </li>    
    )
  })}
  </ul>
</Layout> 
  )
}
export default Index
