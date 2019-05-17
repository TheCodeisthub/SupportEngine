import React from "react"
import BlueButton from "../modules/BlueButton"
export default function HomeSection4Content() {
  return (
    <div className="container faq_container">
      <section className="faq-section">
        <h2 style={{ fontSize: "36px" }}>Frequently asked questions (FAQ)</h2>

        <ul>
          <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
            Is Support 24/7?
          </h4>
          <li>
            - As of yet SupportEngine don’t offer 24/7 support. We have only the
            8HOUR support window.
          </li>
        </ul>

        <ul>
          <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
            Do you offer phone Support?
          </h4>
          <li>- Phone support isn’t currently available but will be soon</li>
        </ul>

        <ul>
          <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
            Why are your support so low?
          </h4>
          <li>
            - We can keep costs low because our agents live in regions of the
            world with lower cost of living{" "}
          </li>
        </ul>

        <ul>
          <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
            Where are your support agents located?
          </h4>
          <li>
            - We Have agent support in the Phillipins, Nigeria, Kenya and India{" "}
          </li>
        </ul>

        <ul>
          <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
            Where are your support agents located?
          </h4>
          <li>
            - We Have agent support in the Phillipins, Nigeria, Kenya and India{" "}
          </li>
        </ul>
      </section>

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "15vh",
        }}
      >
        <p>Do you have a question that is not covered above?</p>
        <BlueButton>Contact us</BlueButton>
      </span>
    </div>
  )
}
