import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"

class Navbar extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }
  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.09);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background: #ffffff;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export default Navbar
