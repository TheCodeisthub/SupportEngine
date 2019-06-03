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
        path: (
          <a href="mailto:lenny@mysupportengine.com">
            lenny@mysupportengine.com
          </a>
        ),
        name: "lenny@mysupportengine.com",
      },
      {
        title: "Legal",
        id: 2,
        path: "/519522125107875/",
        name: "Privacy Policy",
        path1: "/581066165581870/",
        name1: "Terms and conditions",
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
              <Link to={item.path1} className="footer--links">
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
