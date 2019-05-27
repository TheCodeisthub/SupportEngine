import React from "react"
import vector3 from "../../images/agreement.svg"
import { Steps3 } from "./Section2Item2"

export default function Step3() {
  return (
    <div className="item1-c">
      <aside className="item5">
        <Steps3 />
        <h2 className="sec2--h2">Onboard once</h2>
        <p className="sec2--p">
          You onboard us as you would any customer support rep.{" "}
        </p>
      </aside>
      <aside className="item6">
        <img
          className="section2--img"
          src={vector3}
          width="384.75"
          height="353"
          alt="Agreement"
        />
      </aside>
    </div>
  )
}
