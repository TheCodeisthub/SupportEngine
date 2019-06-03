import React from "react"
import vector2 from "../../images/connecting_teams.svg"
import { Steps2 } from "./Section2Item2"

export default function Step2() {
  return (
    <div className="item1-c">
      <aside className="item3">
        <Steps2 />
        <h2 className="sec2--h2">We find a match</h2>
        <p className="sec2--p">
          We’ll pair you with an agent who’s skills best matches your bussiness
          needs.
        </p>
      </aside>
      <aside className="item4">
        <img
          className="section2--img"
          src={vector2}
          width="384.75"
          height="353"
          alt="Agents"
        />
      </aside>
    </div>
  )
}
