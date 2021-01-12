import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/Layout/layout"
import IntroVideo from "../components/Video/introVideo"
import Logo from "../components/Header/requesens"
import logo1 from "../images/favicon.jpg"
import style from "../styles/home.module.scss"
import CarouselIntro from "../components/carousel/carousel"
import SEO from "../components/seo"

const Home = () => {
  const intl = useIntl()
  return (
    <div style={{ position: "relative" }}>
      <Layout>
        <SEO title={intl.formatMessage({ id: "seo.home" })} />
        <Logo />
        <IntroVideo  />
        <section>
          <div className={style.intro_text}>
            <h2>R3SURR3CT</h2>
            <p>{intl.formatMessage({ id: "home.intro" })}</p>
            <div className={style.intro_text2}>
              <h4>{intl.formatMessage({ id: "home.process.name" })}</h4>
              <p>{intl.formatMessage({ id: "home.process.text" })}</p>
              <h4>{intl.formatMessage({ id: "home.concept.name" })}</h4>
              <p>{intl.formatMessage({ id: "home.concept.text" })}</p>
            </div>
            <button>
              <Link to="/gallery">See gallery</Link>
            </button>
          </div>
          <div className={style.bullet_container}>
            <div className={style.bullet}>
              <img src={logo1} alt="logo 1" />
              <h5>FIRST TITLE</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                optio id cupiditate quaerat consequatur beatae obcaecati. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className={style.bullet}>
              <img src={logo1} alt="logo 2" />
              <h5>SECOND TITLE</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                optio id cupiditate quaerat consequatur beatae obcaecati. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className={style.bullet}>
              <img src={logo1} alt="black peace logo" />
              <h5>DARK PEACE</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                optio id cupiditate quaerat consequatur beatae obcaecati. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </section>
        <CarouselIntro />
      </Layout>
    </div>
  )
}

export default Home
