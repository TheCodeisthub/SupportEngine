import React from "react"
import vector4 from "../../images/working_agent.svg"
import { Steps4 } from "./Section2Item2"

export default function Step4() {
  return (
    <div className="item1-c">
      <aside className="item7">
        <Steps4 />
        <h2 style={{ fontWeight: "500", fontSize: "36px" }}>Support begins</h2>
        <p
          style={{
            width: "370px",
            fontWeight: "300",
            fontSize: "24px",
            // textAlign: "center",
          }}
        >
          The agent starts working on your bussiness and delighting customer.{" "}
        </p>
      </aside>
      <aside className="item8">
        <img src={vector4} width="384.75" height="353" alt="Business Man" />
      </aside>
    </div>
  )
}
