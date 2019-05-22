import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import { HomeHeader, HomeSection2, HomeSection3 } from "../utils"
import HomeHeaderContent from "../components/HomepageComponents/HomeHeaderContent"
import HomeSection2Content from "../components/HomepageComponents/HomeSection2Content"
import HomeSection3Content from "../components/HomepageComponents/HomeSection3Content"
import HomeSection4Content from "../components/HomepageComponents/HomeSection4Content"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader>
      <HomeHeaderContent />
    </HomeHeader>

    <HomeSection2>
      <HomeSection2Content />
    </HomeSection2>

    <HomeSection3>
      <HomeSection3Content />
    </HomeSection3>

    <HomeSection4Content />
  </Layout>
)

export default IndexPage
