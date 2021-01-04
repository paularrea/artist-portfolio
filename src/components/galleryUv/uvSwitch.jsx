import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Masonry from "react-masonry-css"
import styles from "../../styles/gallery.module.scss"

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

const UvSwitch = (props) => {
  const data = useStaticQuery(graphql`
    query {
      uvOn: allMarkdownRemark(
        sort: { fields: [frontmatter___title], order: DESC }
        filter: { frontmatter: { description: { eq: "uvOn" } } }
      ) {
        edges {
          node {
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
            fields {
              slug
            }
          }
        }
      }
      uvOff: allMarkdownRemark(
        sort: { fields: [frontmatter___title], order: DESC }
        filter: { frontmatter: { description: { eq: "uvOff" } } }
      ) {
        edges {
          node {
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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const uvOn = data.uvOn.edges.map(edge => {
    const featuredImage = edge.node.frontmatter.featuredImage
    return (
      <div className={styles.shadow}>
        <Link to={`/gallery/${edge.node.fields.slug}`}>
          {featuredImage && <Img fluid={featuredImage.childImageSharp.fluid} />}
        </Link>
      </div>
    )
  })

  const uvOff = data.uvOff.edges.map(edge => {
    const featuredImage = edge.node.frontmatter.featuredImage
    return (
      <div className={styles.shadow}>
        <Link to={`/gallery/${edge.node.fields.slug}`}>
          {featuredImage && <Img fluid={featuredImage.childImageSharp.fluid} />}
        </Link>
      </div>
    )
  })

  return (
    <div className={styles.gallery_container}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.my_masonry_grid}
        columnClassName={styles.my_masonry_grid_column}
      >
        {props.darkOn && (props.uv === 'dark') ? uvOn : uvOff}
      </Masonry>
    </div>
  )
}

export default UvSwitch
