import React from "react"
import Layout from "../components/Layout/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./gallery.template.module.scss"
import UvTemplate from "../components/UvToggle/uvTemplate"
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import './icons.css'

const ImgDescription = props => {
  console.log(props.pageContext)

  let next = props.pageContext.next
  let prev = props.pageContext.prev

  return (
    <div>
      <Layout>
        <UvTemplate />
        <div className={styles.container}>
          <div className={styles.arrows_container}>
            <div className={styles.arrow}>
              {prev && <Link to={`/gallery/${prev.fields.slug}`}><ArrowLeft /></Link>}
            </div>
            <div className={styles.arrow}>
              {next && <Link to={`/gallery/${next.fields.slug}`}><ArrowRight /></Link>}
            </div>
          </div>
          <div>
            <Img
              className={styles.img}
              fluid={
                props.data.markdownRemark.frontmatter.featuredImage
                  .childImageSharp.fluid
              }
            />
          </div>
          <div className={styles.detail_info}>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html,
              }}
            ></div>
            <Link className={styles.link} to="/gallery/">
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
        collection
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
