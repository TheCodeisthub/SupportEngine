import React from "react"
import CardStyles from "./card.module.css"

export default ({ children }) => (
  <div className={CardStyles.card}>{children}</div>
)
