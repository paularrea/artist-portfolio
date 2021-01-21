import React from "react"
import Layout from "../components/Layout/layout"
import { useIntl, Link } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import style from "../styles/about.module.scss"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Media from "react-media"
import Carousel from "../components/carousel/carousel"

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
