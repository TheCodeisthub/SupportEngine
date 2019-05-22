import React from "react"
import { Link } from "gatsby"
import BlueButton from "../modules/BlueButton"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"

export default function HomeSection2Content() {
  return (
    <div className="container">
      <h2
        style={{
          fontWeight: "300",
          fontSize: "72px",
          color: "#4834D4",
          textAlign: "center",
          marginTop: "20vh",
        }}
      >
        How it works
      </h2>
      <div className="section2_group">
        <div className="contain-steps">
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
        </div>
        <Link to="/contact">
          <BlueButton>Request an agent</BlueButton>
        </Link>
      </div>
    </div>
  )
}
