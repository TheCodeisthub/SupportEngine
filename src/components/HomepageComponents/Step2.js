import React from "react"
import vector2 from "../../images/connecting_teams.svg"
import { Steps2 } from "./Section2Item2"

export default function Step2() {
  return (
    <div className="item1-c">
      <img src={vector2} width="384.75" height="353" alt="Business Man" />
      <aside>
        <Steps2 />
        <h2 style={{ fontWeight: "500", fontSize: "36px" }}>We find a match</h2>
        <p
          style={{
            width: "370px",
            fontWeight: "300",
            fontSize: "24px",
            // textAlign: "center",
          }}
        >
          We’ll pair you with an agent who’s skills best matches your bussiness
          needs{" "}
        </p>
      </aside>
    </div>
  )
}
