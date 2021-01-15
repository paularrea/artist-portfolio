import React from "react"
import Layout from "../components/Layout/layout"
import { useIntl, Link } from "gatsby-plugin-intl"
import style from "../styles/about.module.scss"
import logo1 from "../images/favicon.png"
import SEO from "../components/seo"
import Carousel from "../components/carousel/carousel"

const About = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "seo.about" })} />
      <div className={style.container}>
        <div className={style.aboutText}>
          <h2>{intl.formatMessage({ id: "about.title1" })}</h2>
          <p>{intl.formatMessage({ id: "about.description1" })}</p>
          <Link to="/actor/home">Actor site</Link>
        </div>
        <div className={style.parallax}></div>
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
        <div className={style.aboutText2}>
          <h2>{intl.formatMessage({ id: "about.title2" })}</h2>
          <p>{intl.formatMessage({ id: "about.description2" })}</p>
        </div>
        <div className={style.studio_imgs}>
          <Carousel />
        </div>
      </div>
    </Layout>
  )
}
export default About
