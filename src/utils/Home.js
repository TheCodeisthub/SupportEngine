import React from "react"

const HomeHeader = ({ children }) => {
  return <div className="homeheader">{children}</div>
}

const HomeSection2 = ({ children }) => {
  return <div className="home-sec2">{children}</div>
}

const HomeSection3 = ({ children }) => {
  return <div className="home-sec3">{children}</div>
}

export { HomeHeader, HomeSection2, HomeSection3 }
