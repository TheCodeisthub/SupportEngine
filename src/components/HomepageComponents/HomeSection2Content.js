import React from "react"
import BlueButton from "../modules/BlueButton"
import Section2Item2 from "./Section2Item2"
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
        }}
      >
        How it works
      </h2>
      <div className="section2_group">
        <span className="section2marker">
          {" "}
          <Section2Item2 />
        </span>
        <div className="contain-steps">
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
        </div>
        <BlueButton>Request an agent</BlueButton>
      </div>
    </div>
  )
}
