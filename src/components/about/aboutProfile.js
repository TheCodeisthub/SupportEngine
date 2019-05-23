import React from "react"
// import { Link } from "gatsby"
import avatar from "../../images/Lenny.jpeg"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin.svg"

const AboutProfile = () => {
  return (
    <section>
      <div class="about--card">
        <img
          src={avatar}
          alt="Lenny"
          style={{ width: "100%", marginTop: "5px" }}
        />
        <h1>Lenny Johnson</h1>
        <p className="title">
          CEO & Founder, <br />
          SupportEngine
        </p>
        <div
          className="about__card--icon"
          style={{ margin: "24px 0", padding: "20px" }}
        >
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </section>
  )
}

export default AboutProfile
