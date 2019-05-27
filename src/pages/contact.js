import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <a href="lenny@b2bcontentlab.com">contact@supportengine.com</a>
      </p>
      <p style={{ textAlign: "left", marginBottom: "10vh" }}>
        Alternatetivly, you can use the contact form below.
      </p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="contact_form"
      >
        <div className="input-c">
          <label>
            Your Name
            <input type="text" placeholder="John Doe" />
          </label>

          <label>
            Your Email
            <input type="text" placeholder="Johndoe@mail.com" />
          </label>
        </div>

        <label>
          Message us
          <textarea placeholder="Hello support engine..." />
        </label>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <button type="submit" className="btn_submit">
            Submit
          </button>
        </span>
      </form>
    </section>
  </Layout>
)

export default ContactPage
