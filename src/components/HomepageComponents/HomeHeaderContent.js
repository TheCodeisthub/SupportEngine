import React from "react"
import BlueButton from "../modules/BlueButton"

export default function HomeHeaderContent() {
  return (
    <div className="header--bg container">
      <h3 style={{ width: "747px", fontWeight: "500", fontSize: "36px" }}>
        Get a dedicated customer support agent for just{" "}
        <span style={{ fontWeight: "bold" }}>$749</span> a month
      </h3>
      <p style={{ width: "753px", fontWeight: "500", fontSize: "24px" }}>
        Your customers don’t need to suffer because you’re bussines is growing.
        Have an experienced customer service rep for a fraction of the usual
        cost
      </p>
      <BlueButton>Contact us</BlueButton>
    </div>
  )
}
