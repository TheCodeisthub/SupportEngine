import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/Logo.svg"
import menu from "../../images/buger_menu.svg"

class NavbarHeader extends Component {
  render() {
    // const { handleNavbar } = this.props
    return (
      <div className="nav__header--content">
        <Link to="/">
          <img src={logo} width="220px" alt="logo" />
        </Link>
        <img src={menu} className="nav-menu" width="40px" alt="menu" />
      </div>
    )
  }
}

export default NavbarHeader
