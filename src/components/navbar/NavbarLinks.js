import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "Home",
      },
      {
        id: 1,
        path: "/about/",
        name: "About",
      },
      {
        id: 2,
        path: "/contact/",
        name: "Contact us",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        <nav className="nav">
          <ul className="nav-lists">
            {this.state.links.map(item => {
              return (
                <li key={item.id}>
                  <Link to={item.path} className="nav--link">
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  .nav--link {
    display: block;
    color: #4834d4;
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-weight: 700;
    text-transform: capitalize;
    transition: 0.4s;
    &:hover {
      background: #4834d4;
      color: #fff;
      padding: 0.5rem 1rem 0.5rem 1.3rem;

      @media (min-width: 768px) {
        background: transparent;
        color: #4834d4;
        opacity: 0.7;
      }
    }
    padding-inline-end: 2rem;
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  transition: 0.5s;

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin-left: auto;
  }
`

export default NavbarLinks
