import React from "react"
import vector2 from "../../images/connecting_teams.svg"

export default function Step2() {
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
        We find an agent who’s skills best matches your bussiness needs
      </p>
      <img
        className="space_up"
        src={vector2}
        width="226.03px"
        alt="Business Man"
      />
    </div>
  )
}
