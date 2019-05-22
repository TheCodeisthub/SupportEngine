import React from "react"
import mac from "../../images/mac.svg"
import WhiteButton from "../modules/WhiteButton"
import { Link } from "gatsby"

export default function HomeHeaderContent() {
  return (
    <div className="container">
      <div className="header-c">
        <div className="header--bg">
          <div>
            <h3
              style={{
                width: "595px",
                fontWeight: "500",
                fontSize: "40px",
                lineHeight: "49px",
              }}
            >
              Get a dedicated customer support agent for just{" "}
              <span style={{ fontWeight: "bold" }}>$749</span> a month
            </h3>
            <p
              style={{
                width: "530px",
                fontWeight: "300",
                fontSize: "24px",
                lineHeight: "129.1%",
                letterSpacing: "0.04em",
                marginTop: "1em",
              }}
            >
              Your customers shouldn’t have to suffer because your bussines is
              growing. Get an experienced customer service rep for a fraction of
              the usual cost.
            </p>
            <Link to="/contact">
              {" "}
              <WhiteButton>Contact us</WhiteButton>
            </Link>
          </div>
          <img src={mac} width="700px" alt="Mac" />
        </div>
      </div>
    </div>
  )
}
