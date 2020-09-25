import React from "react"
import Logo from "../components/Header/requesens"
import Layout from "../components/Layout/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const About = () => {
  return (
    <div>
      <Layout>
        <Logo/>
        <h1>About</h1>
        <p>about page...</p>
        <Link to='/actor/home'>Link</Link>
      </Layout>
    </div>
  )
}

export default About
