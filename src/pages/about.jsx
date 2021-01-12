import React from "react"
import Layout from "../components/Layout/layout"
import { useIntl, Link } from "gatsby-plugin-intl"
import style from "../styles/about.module.scss"
import studio1 from "../images/carousel/carousel1.jpg"
import studio2 from "../images/carousel/carousel2.jpg"
import SEO from "../components/seo"

const About = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "seo.about" })} />
      <div className={style.container}>
        <div className={style.title}>
          <h1>Know me better</h1>
        </div>{" "}
        <div className={style.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            voluptate accusamus reprehenderit ipsum, facilis odit maxime
            explicabo veniam officia assumenda amet, quas suscipit. Corrupti
            dolorem praesentium dolorum obcaecati, aperiam accusantium.
          </p>
          <Link to="/actor/home">Actor site</Link>
        </div>
        <div className={style.parallax}></div>
        <div className={style.title2}>
          <h1>The studio</h1>
        </div>{" "}
        <div className={style.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            voluptate accusamus reprehenderit ipsum, facilis odit maxime
            explicabo veniam officia assumenda amet, quas suscipit. Corrupti
            dolorem praesentium dolorum obcaecati, aperiam accusantium.
          </p>
        </div>
        <div className={style.studio_imgs}>
          <img src={studio1} alt="studio1" />
          <img src={studio2} alt="studio2" />
        </div>
      </div>
    </Layout>
  )
}
export default About
