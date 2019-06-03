import React from "react"
// import { Link } from "gatsby"
import avatar from "../../images/Lenny_Johnson.jpg"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin.svg"
import email from "../../images/email.svg"

const AboutProfile = () => {
  return (
    <section>
      <div class="about--card">
        <img
          className="avatar"
          src={avatar}
          alt="Lenny Johnson"
          style={{ width: "300px", height: "300px", marginTop: "7px" }}
        />
        <h1>Lenny Johnson</h1>
        <p className="title">
          Founder, <br />
          SupportEngine
        </p>
        <div
          className="about__card--icon"
          style={{ margin: "24px 0", padding: "20px" }}
        >
          <a
            href="https://twitter.com/TheLennyJohnson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} width="60px" alt="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/lenny-johnson-606b19146"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} width="60px" alt="linkedin" />
          </a>
          <a
            href="mailto:lenny@mysupportengine.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} width="60px" alt="email" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutProfile
