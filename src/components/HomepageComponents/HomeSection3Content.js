import React from "react"
import CardStyles from "../modules/CardContainer"
import Icon1 from "../../images/icon1.png"
import Icon2 from "../../images/icon2.png"
import Icon3 from "../../images/icon3.png"

export default function HomeSection3Content() {
  return (
    <div className="section3">
      <div className="container section3_grid">
        <CardStyles>
          <img src={Icon1} width="105px" alt="icons" />
          <h2>Proffessional</h2>
          <p>
            Our support agents have years of support expereince in startups and
            local bussinesses{" "}
          </p>
        </CardStyles>
        <CardStyles>
          <img src={Icon2} width="105px" alt="icons" />
          <h2>Dedicated</h2>
          <p>
            Our agents don’t price per ticket, so there is no incenitive to deal
            poorly with customer complaints
          </p>
        </CardStyles>
        <CardStyles>
          <img src={Icon3} width="105px" alt="icons" />
          <h2>Adaptable</h2>
          <p>
            We use your brand, your tool, and learn your bussiness in and out
          </p>
        </CardStyles>
      </div>
    </div>
  )
}
