import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/Logo.svg"
import menu from "../../images/buger_menu.svg"
import styled from "styled-components"

class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        {/* <div className="nav__header--content"> */}
        <Link to="/">
          <img
            className="logo_small-screen"
            src={logo}
            width="220px"
            alt="logo"
          />
        </Link>
        <button
          className="nav-menu"
          onClick={() => {
            handleNavbar()
          }}
        >
          <img src={menu} width="40px" alt="menu" />
        </button>
        {/* </div> */}
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-menu {
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    margin-left: 12.7rem;
    .nav-menu {
      display: none;
    }
  }
`

export default NavbarHeader
