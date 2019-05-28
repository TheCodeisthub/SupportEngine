import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import pnf from "../images/page_not_found.svg"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="page_not_found">
      <div className="container">
        <img src={pnf} width="100vw" alt="404" />
        <p>You just hit a route that doesn&#39;t exist...</p>
        <small>
          don&#39;t find what you are looking for?{" "}
          <strong>
            <Link to="/contact">Contact us</Link>
          </strong>
        </small>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
