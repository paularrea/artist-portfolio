import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/Layout/layout"
import IntroVideo from "../components/Video/introVideo"
import Logo from "../components/Header/requesens"
import style from "../styles/home.module.scss"
import SEO from "../components/seo"
import resurrect from "../images/pngs/resurrect.png"

const Home = props => {
  const intl = useIntl()
  return (
    <div style={{ position: "relative" }}>
      <Layout>
        <SEO title={intl.formatMessage({ id: "seo.home" })} />
        <Logo />
        <IntroVideo />
        <section>
          <div className={style.intro_text}>
          <img src={resurrect} alt="resurrect logo"/>
            <p>{intl.formatMessage({ id: "home.intro" })}</p>
          <div className={style.intro_text2}>
            <h4>{intl.formatMessage({ id: "home.process.name" })}</h4>
            <p>{intl.formatMessage({ id: "home.process.text" })}</p>
          </div>
          <div className={style.intro_text2}>
            <h4>{intl.formatMessage({ id: "home.concept.name" })}</h4>
            <p>{intl.formatMessage({ id: "home.concept.text" })}</p>
          </div>
            <button>
              <Link to="/gallery">See gallery</Link>
            </button>{" "}
          </div>
        </section>
        {/* <CarouselIntro /> */}
      </Layout>
    </div>
  )
}

export default Home
