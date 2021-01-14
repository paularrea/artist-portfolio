import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/Layout/layout"
import IntroVideo from "../components/Video/introVideo"
import Logo from "../components/Header/requesens"
import logo1 from "../images/favicon.png"
import style from "../styles/home.module.scss"
import CarouselIntro from "../components/carousel/carousel"
import SEO from "../components/seo"

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
            <h2>R3SURR3CT</h2>
            <p>{intl.formatMessage({ id: "home.intro" })}</p>
            <button>
              <Link to="/gallery">See gallery</Link>
            </button>
            <div className={style.intro_text2}>
              <h4>{intl.formatMessage({ id: "home.process.name" })}</h4>
              <p>{intl.formatMessage({ id: "home.process.text" })}</p>
            </div>
            <div className={style.intro_text2}>
              <h4>{intl.formatMessage({ id: "home.concept.name" })}</h4>
              <p>{intl.formatMessage({ id: "home.concept.text" })}</p>
            </div>
          </div>
          <div className={style.bullet_container}>
            <div className={style.bullet}>
              <img src={logo1} alt="logo 1" />
              <h5>{intl.formatMessage({ id: "home.bullet.name1" })}</h5>
              <p>{intl.formatMessage({ id: "home.bullet.description1" })}</p>
            </div>
            <div className={style.bullet}>
              <img src={logo1} alt="logo 2" />
              <h5>{intl.formatMessage({ id: "home.bullet.name2" })}</h5>
              <p>{intl.formatMessage({ id: "home.bullet.description2" })}</p>
            </div>
            <div className={style.bullet}>
              <img
                className={style.bulletImg}
                src={logo1}
                alt="black peace logo"
              />
              <h5>{intl.formatMessage({ id: "home.bullet.name3" })}</h5>
              <p>{intl.formatMessage({ id: "home.bullet.description3" })}</p>
            </div>
          </div>
        </section>
        <CarouselIntro />
      </Layout>
    </div>
  )
}

export default Home
