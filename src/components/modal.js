import React from "react"
import sent from "../images/success.svg"
import close from "../images/close.svg"
import { Link } from "gatsby"

export default function modal() {
  return (
    <div className="modal__fore-background">
      <div className="modal-box">
        <span
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/">
            <img title="close" src={close} width="30px" alt="close modal" />
          </Link>
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2em",
          }}
        >
          <img src={sent} alt="sent" />
        </span>
        <h2 style={{ textAlign: "center" }}>Thank You</h2>
        <p style={{ textAlign: "center" }}>Your message has been sent</p>
      </div>
    </div>
  )
}
