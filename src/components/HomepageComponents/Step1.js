import React from "react"
import vector1 from "../../images/businessman.svg"

export default function Step1() {
  return (
    <div className="item1-c">
      <img
        className="space_down"
        src={vector1}
        width="226px"
        alt="Business Man"
      />
      <p
        style={{
          width: "248px",
          fontWeight: "bold",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        You make a request for a support agent
      </p>
    </div>
  )
}
