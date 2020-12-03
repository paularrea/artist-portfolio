import React from "react"
import Layout from "../components/Layout/layout"
import IntroVideo from "../components/Video/introVideo"
import Logo from "../components/Header/requesens"

const Home = () => {
  return (
    <div>
      <Layout>
      <Logo/>
      <IntroVideo/>
      </Layout>
    </div>
  )
}

export default Home
