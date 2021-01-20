import React from "react"
import Layout from "../components/Layout/layout"
import { useIntl, Link } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import style from "../styles/about.module.scss"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Media from "react-media"
import Carousel from "../components/carousel/carousel"

import darkPeace from "../images/pngs/darkPeace.png"
import darkPeace2 from "../images/pngs/darkPeace2.png"
import llamp from "../images/pngs/llamp.png"
import llamp2 from "../images/pngs/llamp2.png"
import flama from "../images/pngs/flama.png"
import flama2 from "../images/pngs/flama2.png"

const About = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpeg|jpg|gif|png)/" }
          relativeDirectory: { eq: "carousel/mobile" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `)
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
            <div>
              <img
                className={style.llamp}
                src={localStorage.theme === "dark" ? llamp2 : llamp}
                alt="llamp"
              />
            </div>

            <h5>{intl.formatMessage({ id: "home.bullet.name1" })}</h5>
            <p>{intl.formatMessage({ id: "home.bullet.description1" })}</p>
          </div>
          <div className={style.bullet}>
            <div>
              <img
                className={style.flama}
                src={localStorage.theme === "dark" ? flama2 : flama}
                alt="flama"
              />
            </div>

            <h5>{intl.formatMessage({ id: "home.bullet.name2" })}</h5>
            <p>{intl.formatMessage({ id: "home.bullet.description2" })}</p>
          </div>
          <div className={style.bullet}>
            <div>
              <img
                className={style.darkPeace}
                src={localStorage.theme === "dark" ? darkPeace2 : darkPeace}
                alt="darkPeace"
              />
            </div>

            <h5>{intl.formatMessage({ id: "home.bullet.name3" })}</h5>
            <p>{intl.formatMessage({ id: "home.bullet.description3" })}</p>
          </div>
        </div>
        <div className={style.aboutText2}>
          <h2>{intl.formatMessage({ id: "about.title2" })}</h2>
          <p>{intl.formatMessage({ id: "about.description2" })}</p>
        </div>
        <div className={style.studio_imgs}>
          <Media query={{ minWidth: 500 }}>
            <Carousel />
          </Media>
          <Media query={{ maxWidth: 501 }}>
            <div>
              {data.allFile.edges.map(({ node }) => (
                <Img
                  className={style.siteImg}
                  fluid={node.childImageSharp.fluid}
                />
              ))}
            </div>
          </Media>
        </div>
      </div>
    </Layout>
  )
}
export default About
