import React, { useEffect } from "react"
import Layout from "../../components/Layout/Actor-Layout/actor-layout"
import { useIntl, Link } from "gatsby-plugin-intl"
import style from "../../styles/about.module.scss"
import SEO from "../../components/seo"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const intl = useIntl()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "seo.about" })} />
      <div className={style.container}>
        <div className={style.aboutText}>
          <h2>KNOW ME BETTER</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa id
            deleniti ut recusandae, quasi eaque. Dolorum suscipit reprehenderit
            voluptatem quidem, autem nihil! Repudiandae aspernatur, doloremque
            laboriosam ex obcaecati blanditiis impedit.
          </p>
          <Link to="/">Painter site</Link>
        </div>
      </div>
    </Layout>
  )
}
export default About
