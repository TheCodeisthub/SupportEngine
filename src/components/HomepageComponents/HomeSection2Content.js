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
      <h2 className="all__section--h2">How it works</h2>
      <div className="home__section2--container">
        <div className="steps__container">
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
