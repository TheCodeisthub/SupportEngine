import React, { Component } from "react"
import img from "../../images/guarantee.svg"

export default class HomeSection5 extends Component {
  render() {
    return (
      <div className="container section5--container">
        <h2 className="all__section--h2" style={{ textAlign: "center" }}>
          {this.props.text}
        </h2>
        <div className="home--section5">
          <p>
            We guarantee you'll love our friendly support agents within the
            first 10 days or we'll refund your money back.
          </p>
          <img className="section5--item2" src={img} alt="guarantee" />
        </div>
      </div>
    )
  }
}
