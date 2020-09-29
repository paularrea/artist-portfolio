import React from "react"
import Logo from "../components/Header/requesens"
import Layout from "../components/Layout/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import style from "../styles/about.module.scss"

const About = () => {
  return (
    <div>
      <Layout>
        <Logo />
        <div className={style.container}>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            perspiciatis eligendi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            perspiciatis eligendi libero veniam explicabo ratione delectus ipsam
            tempore quo ad nulla animi magnam exercitationem accusantium eos
            tempora, fugit nisi? Omnis! libero veniam explicabo ratione delectus ipsam
            tempore quo ad nulla animi magnam exercitationem accusantium eos
            tempora, fugit nisi?
          </p>
          <p>
            Eligendi libero veniam explicabo ratione delectus ipsam
            tempore quo ad nulla animi magnam exercitationem accusantium eos
            tempora, fugit nisi? Omnis!
          </p>
          <p>
            Magnam exercitationem accusantium eos
            tempora, fugit nisi? Omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            perspiciatis eligendi libero veniam explicabo ratione delectus ipsam
            tempore quo ad nulla animi magnam exercitationem accusantium eos
            tempora, fugit nisi? Omnis!
          </p>
          <Link to="/actor/home">Actor site</Link>
        </div>
      </Layout>
    </div>
  )
}

export default About
