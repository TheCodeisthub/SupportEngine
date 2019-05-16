import React from "react"
import img1 from "../../images/businessman.svg"

export default function Section2Item1() {
  return (
    <div>
      <img src={img} width="226px" alt="Business Man" />
      <p
        style={{
          width: "248px",
          fontWeight: "bold",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        We find an agent who’s skills best matches your bussiness needs
      </p>
    </div>
  )
}
