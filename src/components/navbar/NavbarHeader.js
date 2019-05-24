import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/Logo.svg"
import menu from "../../images/buger_menu.svg"

class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <div className="nav__header--content">
        <Link to="/">
          <img src={logo} width="220px" alt="logo" />
        </Link>
        <button
          className="nav-menu"
          onClick={() => {
            handleNavbar()
          }}
        >
          <img src={menu} width="40px" alt="menu" />
        </button>
      </div>
    )
  }
}

export default NavbarHeader
