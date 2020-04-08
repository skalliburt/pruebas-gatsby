import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents} from '@contentful/rich-text-react-renderer'

export const query = graphql`
    query($slug: String!){
      contentfulArticle(slug: {eq: $slug}){
        title
        date(formatString:"MMMM,DD,YYYY")
        body{
          json
        }
      }
    }
`
const Blog =(props)=>{
    const options={
      renderNode:{
        "embedded-asset-block": (node)=>{
          const alt=node.data.target.fields.title['en-US']
          const url=node.data.target.fields.file['en-US'].url
          return <img alt={alt} src={url}/>
        }
      }
    }
    return(
    <Layout>
        <h1>{props.data.contentfulArticle.title}</h1>
        <p>{props.data.contentfulArticle.date}</p>
        {documentToReactComponents(props.data.contentfulArticle.body.json, options)}
    </Layout>
    )
}
export default Blog