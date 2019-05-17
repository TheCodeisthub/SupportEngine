import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/Logo.svg"

class NavbarHeader extends Component {
  render() {
    // const { handleNavbar } = this.props
    return (
      <div>
        <Link to="/">
          <img src={logo} width="220px" alt="logo" />
        </Link>
      </div>
    )
  }
}

export default NavbarHeader
