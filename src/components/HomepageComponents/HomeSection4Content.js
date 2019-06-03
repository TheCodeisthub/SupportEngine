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
      <div className="container">
        <div className="faq__container">
          <h2 className="faq--h2">Frequently asked questions (FAQ)</h2>
          <section className="faq-section">
            <Toggle>
              {({ on, toggle }) => (
                <ul>
                  <span className="drop-down--container" onClick={toggle}>
                    <h4 className="faq--h4">Is support 24/7?</h4>
                    <button className="btn_arrow">
                      <img src={toggleIcon} alt="dropdown icon" />
                    </button>
                  </span>
                  {on && (
                    <li>
                      We don't yet offer 24/7 support, our support agents can
                      only cover an 8 hour support window for your business.
                    </li>
                  )}
                </ul>
              )}
            </Toggle>

            <Toggle>
              {({ on, toggle }) => (
                <div>
                  <ul>
                    <span className="drop-down--container" onClick={toggle}>
                      <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
                        Do you offer phone support?
                      </h4>
                      <button className="btn_arrow">
                        <img src={toggleIcon} alt="dropdown icon" />
                      </button>
                    </span>
                    {on && (
                      <li>
                        Phone support isn’t currently available but will be
                        soon.
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
                    <span className="drop-down--container" onClick={toggle}>
                      <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
                        Why are your costs so low?
                      </h4>
                      <button className="btn_arrow">
                        <img src={toggleIcon} alt="dropdown icon" />
                      </button>
                    </span>
                    {on && (
                      <li>
                        We can keep costs low because our agents live in regions
                        of the world with lower cost of living.
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
                    <span className="drop-down--container" onClick={toggle}>
                      <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
                        Where are your support agents located?
                      </h4>
                      <button className="btn_arrow">
                        <img src={toggleIcon} alt="dropdown icon" />
                      </button>
                    </span>
                    {on && (
                      <li>
                        We have support agents in the Phillipins, Nigeria, Kenya
                        and India.
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
                    <span className="drop-down--container" onClick={toggle}>
                      <h4 style={{ fontSize: "24px", color: "#3A3768" }}>
                        How well do your support agents understand English?
                      </h4>
                      <button className="btn_arrow">
                        <img src={toggleIcon} alt="dropdown icon" />
                      </button>
                    </span>
                    {on && (
                      <li>
                        Every agent is fluent in English and undergoes an
                        English proficiency test before they're hired.
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
            <p>
              Do you have a question that's not covered above? Feel free to
              reach out to us.
            </p>
            <Link to="/contact">
              <BlueButton>Contact us</BlueButton>
            </Link>
          </span>
        </div>
      </div>
    )
  }
}

export default HomeSection4Content
