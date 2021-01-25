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
          <p>
            {intl.formatMessage({ id: "about.description.text1" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold1" })}</b>
            {intl.formatMessage({ id: "about.description.text2" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold2" })}</b>
            {intl.formatMessage({ id: "about.description.text3" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold3" })}</b>
            {intl.formatMessage({ id: "about.description.text4" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold4" })}</b>
            {intl.formatMessage({ id: "about.description.text5" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold5" })}</b>
            {intl.formatMessage({ id: "about.description.text6" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold6" })}</b>
            {intl.formatMessage({ id: "about.description.text7" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold7" })}</b>
            {intl.formatMessage({ id: "about.description.text8" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold8" })}</b>
            {intl.formatMessage({ id: "about.description.text9" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold9" })}</b>
            {intl.formatMessage({ id: "about.description.text10" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold10" })}</b>
            {intl.formatMessage({ id: "about.description.text11" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold11" })}</b>
            {intl.formatMessage({ id: "about.description.text12" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold12" })}</b>
            {intl.formatMessage({ id: "about.description.text13" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold13" })}</b>
            {intl.formatMessage({ id: "about.description.text14" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold14" })}</b>
            {intl.formatMessage({ id: "about.description.text15" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold15" })}</b>
            {intl.formatMessage({ id: "about.description.text16" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold16" })}</b>
            {intl.formatMessage({ id: "about.description.text17" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold17" })}</b>
            {intl.formatMessage({ id: "about.description.text18" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold18" })}</b>
            {intl.formatMessage({ id: "about.description.text19" })}{" "}
            <b>{intl.formatMessage({ id: "about.description.bold19" })}</b>
          </p>
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
