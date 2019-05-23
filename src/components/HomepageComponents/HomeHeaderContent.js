import React from "react"
import mac from "../../images/mac.svg"
import WhiteButton from "../modules/WhiteButton"
import { Link } from "gatsby"

export default function HomeHeaderContent() {
  return (
    <div className="container">
      <div className="home__section1--container">
        <div>
          <h3 className="home__section1--h3">
            Get a dedicated customer support agent for just{" "}
            <span style={{ fontWeight: "bold" }}>$749</span> a month
          </h3>
          <p className="home-section1--p">
            Your customers shouldn’t have to suffer because your bussines is
            growing. Get an experienced customer service rep for a fraction of
            the usual cost.
          </p>
          <Link to="/contact">
            {" "}
            <WhiteButton>Contact us</WhiteButton>
          </Link>
        </div>
        <img
          src={mac}
          className="home__section1--img"
          width="700px"
          alt="Mac"
        />
      </div>
    </div>
  )
}
