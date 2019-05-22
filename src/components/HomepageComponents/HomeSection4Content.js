import React, { Component } from "react"
import BlueButton from "../modules/BlueButton"
import toggleIcon from "../../images/showless_icon.svg"
import { Link } from "gatsby"
import Toggle from "../ToggleRpc"

class HomeSection4Content extends Component {
  constructor() {
    super()
    this.state = { show: false }
  }

  handleClick() {
    this.setState({
      show: !this.state.show,
    })
  }

  render() {
    return (
      <div className="container faq_container">
        <section className="faq-section">
          <h2 style={{ fontSize: "36px" }}>Frequently asked questions (FAQ)</h2>

          <Toggle>
            {({ on, toggle }) => (
              <ul>
                <span className="drop-down--c" onClick={toggle}>
                  <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
                    Is Support 24/7?
                  </h4>
                  <button className="btn_arrow">
                    <img src={toggleIcon} alt="dropdown icon" />
                  </button>
                </span>
                {on && (
                  <li>
                    - As of yet SupportEngine don’t offer 24/7 support. We have
                    only the 8HOUR support window.
                  </li>
                )}
              </ul>
            )}
          </Toggle>

          <Toggle>
            {({ on, toggle }) => (
              <div>
                <ul>
                  <span className="drop-down--c" onClick={toggle}>
                    <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
                      Do you offer phone Support?
                    </h4>
                    <button className="btn_arrow">
                      <img src={toggleIcon} alt="dropdown icon" />
                    </button>
                  </span>
                  {on && (
                    <li>
                      - Phone support isn’t currently available but will be soon
                    </li>
                  )}
                </ul>
              </div>
            )}
          </Toggle>

          <Toggle>
            {({ on, toggle }) => (
              <div>
                <ul>
                  <span className="drop-down--c" onClick={toggle}>
                    <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
                      Why are your support so low?
                    </h4>
                    <button className="btn_arrow">
                      <img src={toggleIcon} alt="dropdown icon" />
                    </button>
                  </span>
                  {on && (
                    <li>
                      - We can keep costs low because our agents live in regions
                      of the world with lower cost of living{" "}
                    </li>
                  )}
                </ul>
              </div>
            )}
          </Toggle>

          <Toggle>
            {({ on, toggle }) => (
              <div>
                <ul>
                  <span className="drop-down--c" onClick={toggle}>
                    <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
                      Where are your support agents located?
                    </h4>
                    <button className="btn_arrow">
                      <img src={toggleIcon} alt="dropdown icon" />
                    </button>
                  </span>
                  {on && (
                    <li>
                      - We Have agent support in the Phillipins, Nigeria, Kenya
                      and India{" "}
                    </li>
                  )}
                </ul>
              </div>
            )}
          </Toggle>
        </section>

        {/* <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <h3>Item one</h3>}
              <button onClick={toggle}>
                <img src={toggleIcon} />
              </button>
            </div>
          )}
        </Toggle> */}

        <span
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "15vh",
          }}
        >
          <p>Do you have a question that is not covered above?</p>
          <Link to="/contact">
            <BlueButton>Contact us</BlueButton>
          </Link>
        </span>
      </div>
    )
  }
}

export default HomeSection4Content
