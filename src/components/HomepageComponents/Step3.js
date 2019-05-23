import React from "react"
import vector3 from "../../images/agreement.svg"
import { Steps3 } from "./Section2Item2"

export default function Step3() {
  return (
    <div className="item1-c">
      <aside className="item5">
        <Steps3 />
        <h2 style={{ fontWeight: "500", fontSize: "36px" }}>Onboard once</h2>
        <p
          style={{
            width: "370px",
            fontWeight: "300",
            fontSize: "24px",
            // textAlign: "center",
          }}
        >
          You onboard us as you would any customer support rep.{" "}
        </p>
      </aside>
      <aside className="item6">
        <img src={vector3} width="384.75" height="353" alt="Business Man" />
      </aside>
    </div>
  )
}
