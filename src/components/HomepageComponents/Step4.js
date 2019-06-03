import React from "react"
import vector4 from "../../images/working_agent.svg"
import { Steps4 } from "./Section2Item2"

export default function Step4() {
  return (
    <div className="item1-c">
      <aside className="item7">
        <Steps4 />
        <h2 className="sec2--h2">Support begins</h2>
        <p className="sec2--p">
          The agent starts working on your business and delighting customers.
        </p>
      </aside>
      <aside className="item8">
        <img
          className="section2--img"
          src={vector4}
          width="384.75"
          height="353"
          alt="Agents Working"
        />
      </aside>
    </div>
  )
}
