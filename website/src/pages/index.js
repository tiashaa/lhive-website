import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const IndexPage = ({ data}) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
    
      {data.articles.map((document) => (
        <li key={document.id}>
        {console.log(document)}
          <h2>
            <Link to={`/${document.id}`}>{document.title}</Link>
          </h2>
          <Img fixed={document.image.caption} />
          <p>{document.description}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`query ARTICLES{
  articles{
    id,
    title, 
    description,
    content,
    image{
     id,
      alternativeText,
      caption,
      width,
      height,
      size,
      url,
      
    },
  
  }
}
`
