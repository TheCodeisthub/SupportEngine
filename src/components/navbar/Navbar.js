import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"

class Navbar extends Component {
  // state = {
  //   navbarClicked: false,
  // }

  // handleNavbar = () => {
  //   this.setState(() => {
  //     return { navbarClicked: !this.state.navbarClicked }
  //   })
  // }
  render() {
    return (
      <header className="nav--header">
        <nav className="nav container">
          <NavbarHeader />
          <NavbarLinks />
        </nav>
      </header>
    )
  }
}

export default Navbar
