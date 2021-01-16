import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="all article" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
        content
        date(formatString: "MMM Do, YYYY")
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slug
        title
        desc
      }
    }
  }
`

export default Blog
