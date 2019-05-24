import React, { Component } from "react"
import { Link } from "gatsby"

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
      <ul className="nav--lists" clicked={this.props.navbarClicked}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav--links">
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NavbarLinks
