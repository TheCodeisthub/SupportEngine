import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Contact from "../components/contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`supportengine`, `contact us`, `form`]} />
    <section className="container contact_c">
      <h2
        className="all__section--h2"
        style={{ lineHeight: "1", textAlign: "center", marginBottom: "2rem" }}
      >
        Get in touch with us
      </h2>
      <p style={{ textAlign: "left" }}>
        You can reach us directly by sending us an email at{" "}
        <a
          href="lenny@b2bcontentlab.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact@supportengine.com
        </a>
      </p>
      <p style={{ textAlign: "left", marginBottom: "10vh" }}>
        Alternatetivly, you can use the contact form below.
      </p>

      <Contact />
    </section>
  </Layout>
)

export default ContactPage
