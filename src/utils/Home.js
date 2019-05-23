import React from "react"

const HomeHeader = ({ children }) => {
  return <div className="home__section1--bg">{children}</div>
}

const HomeSection2 = ({ children }) => {
  return <div className="home-sec2">{children}</div>
}

const HomeSection3 = ({ children }) => {
  return <div className="home__section3--bg">{children}</div>
}

export { HomeHeader, HomeSection2, HomeSection3 }
