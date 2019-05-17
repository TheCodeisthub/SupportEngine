import React from "react"
import vector3 from "../../images/agreement.svg"

export default function Step3() {
  return (
    <div className="item1-c">
      <img src={vector3} width="180px" alt="Business Man" />
      <p
        className="space_up"
        style={{
          width: "248px",
          fontWeight: "bold",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        You onboard us as you would any customer support rep
      </p>
    </div>
  )
}
