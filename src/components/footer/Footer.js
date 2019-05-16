import React from "react"
import FooterLinks from "./FooterLinks"

export default function Footer() {
  return (
    <div className="footer--bg">
      <footer className="container">
        <FooterLinks />
        <p>
          © {new Date().getFullYear()}
          {` `}
        </p>
      </footer>
    </div>
  )
}
