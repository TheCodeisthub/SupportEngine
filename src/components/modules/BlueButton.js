import React from "react"
import BlueButton from "./blue_btn.module.css"

export default ({ children }) => (
  <button className={BlueButton.blue_btn}>{children}</button>
)
