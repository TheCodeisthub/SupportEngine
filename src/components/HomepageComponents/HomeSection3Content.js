import React from "react"
import CardStyles from "../modules/CardContainer"
import Icon1 from "../../images/icon1.png"
import Icon2 from "../../images/icon2.png"
import Icon3 from "../../images/icon3.png"

export default function HomeSection3Content() {
  return (
    <div className="container">
      <div className="home__section3--content">
        <CardStyles>
          <img src={Icon1} width="105px" alt="icons" />
          <h2>Professional</h2>
          <p>
            Our agents have years of customer support experience in startups and
            local businesses.
          </p>
        </CardStyles>
        <CardStyles>
          <img src={Icon2} width="105px" alt="icons" />
          <h2>Dedicated</h2>
          <p>
            Our agents will only work on your business. We don't charge per
            ticket so there's no incentive to deal poorly with customers.
          </p>
        </CardStyles>
        <CardStyles>
          <img src={Icon3} width="105px" alt="icons" />
          <h2>Adaptable</h2>
          <p>
            We follow your brand guidelines, use your tools and learn your
            business in and out.
          </p>
        </CardStyles>
      </div>
    </div>
  )
}
