import React from "react"
import BlueButton from "../modules/BlueButton"
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
      <p>
        Your customers don’t need to suffer because you’re bussines is growing.
        Have an experienced customre service rep for a for a fraction of the
        usual cost
      </p>
      <BlueButton>Request an agent</BlueButton>
    </div>
  )
}
