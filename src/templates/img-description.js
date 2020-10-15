import React from "react"
import Layout from "../components/Layout/layout"
import { Link, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import styles from "./gallery.template.module.scss"
import UvTemplate from "../components/UvToggle/uvTemplate"

const ImgDescription = props => {
  const onClick = e => {
    e.preventDefault()
    const containUV = () => {
      let url = window.location.href
      if (url.indexOf("uv") > -1) {
        navigate(url.replace(/u.*/, ""))
        console.log(url.replace(/u.*/, ""), "uv must be replaced")
      } else {
        navigate(url.concat("uv"))
        console.log(url.concat("uv"), "uv must be added")
      }
    }
    containUV()
  }

  return (
    <div>
      <Layout>
      <UvTemplate />
        <div className={styles.container}>
          <div>
            <Img
              className={styles.img}
              fluid={
                props.data.markdownRemark.frontmatter.featuredImage
                  .childImageSharp.fluid
              }
            />
          </div>
          <div>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html,
              }}
            ></div>
            <Link className={styles.link} to="/gallery">
              Back to gallery
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default ImgDescription

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
