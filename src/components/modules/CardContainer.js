import React from "react"
import CardStyles from "./card.module.scss"

export default ({ children }) => (
  <div className={CardStyles.card}>{children}</div>
)
