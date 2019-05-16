import React, { Component } from "react"
import { Link } from "gatsby"

class FooterLinks extends Component {
  state = {
    links: [
      {
        title: "Company",
        id: 0,
        path: "/about/",
        name: "About us",
      },
      {
        title: "Contact",
        id: 1,
        // path: "/contact/",
        name: "contact@supportengine.io",
      },
      {
        title: "Legal",
        id: 2,
        path: "/",
        name: "Privacy Policy",
        name1: "Teams and conditions",
      },
    ],
  }
  render() {
    return (
      <ul className="footer--lists">
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <ul>
                <li> {item.title}</li>
              </ul>
              <Link to={item.path} className="footer--links">
                <li> {item.name}</li>
              </Link>
              <Link to={item.path} className="footer--links">
                <li> {item.name1}</li>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default FooterLinks
