import React from "react"
// import { Link } from "gatsby"
import AboutProfile from "../components/about/aboutProfile"
import AboutText from "../components/about/aboutText"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`supportengine`, `About support engine`, `customer support`]}
    />
    <section className="container">
      <div className="about_wrapper">
        <h2
          style={{
            fontWeight: "300",
            fontSize: "72px",
            color: "#4834D4",
            textAlign: "center",
            marginBottom: "10vh",
          }}
        >
          About us
        </h2>
        <div className="about_container">
          <AboutProfile />
          <AboutText />
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
