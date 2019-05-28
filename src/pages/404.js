import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import pnf from "../images/page_not_found.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="page_not_found">
      <div className="container">
        <img src={pnf} width="100vw" alt="404" />
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
