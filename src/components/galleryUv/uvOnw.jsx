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

const UvOn = () => {
  const uvOn = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___title], order: DESC }
        filter: { frontmatter: { description: { eq: "uvOn" }, collection: { eq: "33" } } }
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
  return (
    <div className={styles.gallery_container}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.my_masonry_grid}
        columnClassName={styles.my_masonry_grid_column}
      >
        {uvOn.allMarkdownRemark.edges.map(edge => {
          const featuredImage = edge.node.frontmatter.featuredImage
          return (
            <div>
              <Link to={`/gallery/${edge.node.fields.slug}`}>
                {featuredImage && (
                  <Img fluid={featuredImage.childImageSharp.fluid} />
                )}
              </Link>
            </div>
          )
        })}
      </Masonry>
    </div>
  )
}

export default UvOn
