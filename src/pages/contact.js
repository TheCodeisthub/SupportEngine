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
        If you need a support agent to help you scale your business or if you
        want to learn more about how we work feel free to reach out to us.
      </p>
      <p style={{ textAlign: "left", marginBottom: "10vh" }}>
        You can send us an email directly at{" "}
        <a
          href="lenny@b2bcontentlab.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact@supportengine.com
        </a>{" "}
        or you can use the contact form below.
      </p>

      <Contact />
    </section>
  </Layout>
)

export default ContactPage
