import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <h1>oops it's like you come to wrong place</h1>
        <Link to="/" className="btn">
          back to home
        </Link>
      </main>
    </Layout>
  )
}

export default Error
