import React, { useState } from "react"
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

const UvSwitch = props => {
  const [selected, setSelectedTab] = useState(1)
  const onClickTab = value => setSelectedTab(value)

  const data = useStaticQuery(graphql`
    query {
      uvOn: allMarkdownRemark(
        sort: { fields: [frontmatter___title], order: ASC }
        filter: {
          frontmatter: { description: { eq: "uvOn" }, collection: { eq: "33" } }
        }
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
        sort: { fields: [frontmatter___title], order: ASC }
        filter: {
          frontmatter: {
            description: { eq: "uvOff" }
            collection: { eq: "33" }
          }
        }
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
      b33UvOn: allMarkdownRemark(
        sort: { fields: [frontmatter___title], order: ASC}
        filter: {
          frontmatter: {
            description: { eq: "uvOn" }
            collection: { eq: "b33" }
          }
        }
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
      b33UvOff: allMarkdownRemark(
        sort: { fields: [frontmatter___title], order: ASC}
        filter: {
          frontmatter: {
            description: { eq: "uvOff" }
            collection: { eq: "b33" }
          }
        }
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

  const b33UvOn = data.b33UvOn.edges.map(edge => {
    const featuredImage = edge.node.frontmatter.featuredImage
    return (
      <div className={styles.shadow}>
        <Link to={`/gallery/${edge.node.fields.slug}`}>
          {featuredImage && <Img fluid={featuredImage.childImageSharp.fluid} />}
        </Link>
      </div>
    )
  })

  const b33UvOff = data.b33UvOff.edges.map(edge => {
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
      <div className={styles.tabs}>
        <div
          aria-hidden="true"
          className={styles.tab}
          onClick={() => onClickTab(1)}
          onKeyDown={() => onClickTab(2)}
        >
          <h2
            className={`${styles.tabTitle} ${
              selected === 1 ? styles.selected : ""
            }`}
          >
            "33"
          </h2>
        </div>
        <div
          aria-hidden="true"
          className={styles.tab}
          onClick={() => onClickTab(2)}
          onKeyDown={() => onClickTab(2)}
        >
          <h2
            className={`${styles.tabTitle} ${
              selected === 2 ? styles.selected : ""
            }`}
          >
            "before 33"
          </h2>
        </div>
      </div>

      <div
        className={`${styles.video_grid} ${selected !== 1 ? styles.hide : ""}`}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.my_masonry_grid}
          columnClassName={styles.my_masonry_grid_column}
        >
          {props.darkOn && props.uv === "dark" ? uvOn : uvOff}
        </Masonry>
      </div>
      <div
        className={`${styles.video_grid} ${selected !== 2 ? styles.hide : ""}`}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.my_masonry_grid}
          columnClassName={styles.my_masonry_grid_column}
        >
          {props.darkOn && props.uv === "dark" ? b33UvOn : b33UvOff}
        </Masonry>
      </div>
    </div>
  )
}

export default UvSwitch
