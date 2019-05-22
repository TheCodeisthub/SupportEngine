import React from "react"
import WhiteButton from "./white_btn.module.css"

export default ({ children }) => (
  <button className={WhiteButton.white_btn}>{children}</button>
)
