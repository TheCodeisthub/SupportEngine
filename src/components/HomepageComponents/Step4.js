import React from "react"
import vector4 from "../../images/working_agent.svg"

export default function Step4() {
  return (
    <div className="item1-c">
      <p
        style={{
          width: "248px",
          fontWeight: "bold",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        The agents starts working on your bussiness and delighting customer
      </p>
      <img
        className="space_up"
        src={vector4}
        width="216px"
        alt="Business Man"
      />
    </div>
  )
}
