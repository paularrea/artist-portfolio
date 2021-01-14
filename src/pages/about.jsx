import React from "react"
import Layout from "../components/Layout/layout"
import { useIntl, Link } from "gatsby-plugin-intl"
import style from "../styles/about.module.scss"
import studio1 from "../images/carousel/carousel1.jpg"
import studio2 from "../images/carousel/carousel2.jpg"
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
        <div className={style.aboutText}>
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
