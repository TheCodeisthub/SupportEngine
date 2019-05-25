import React from "react"
import vector1 from "../../images/businessman.svg"
import { Steps1 } from "./Section2Item2"

export default function Step1() {
  return (
    <div className="item1-c item1-aside">
      <aside className="item1">
        <Steps1 />
        <h2 style={{ fontWeight: "500", fontSize: "36px" }}>
          Request an agent
        </h2>
        <p
          style={{
            width: "370px",
            fontWeight: "300",
            fontSize: "24px",
            // textAlign: "center",
          }}
        >
          Contact us and we’ll reach out so we can learn more about your
          business.
        </p>
      </aside>
      <aside className="item2">
        <img src={vector1} width="384.75" height="353" alt="Business Man" />
      </aside>
    </div>
  )
}
