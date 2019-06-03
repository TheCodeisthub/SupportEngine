import React from "react"
import FooterLinks from "./FooterLinks"

export default function Footer() {
  return (
    <div className="footer--bg">
      <footer className="container">
        <FooterLinks />
        <p
          style={{
            borderTop: "1px solid #eee",
            textAlign: "center",
            marginTop: "8vh",
          }}
        >
          All rights reserved © {new Date().getFullYear()}
          {` `} Support Engine
        </p>
      </footer>
    </div>
  )
}
