import React, { useState, useEffect } from "react"
import Layout from "../components/Layout/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./gallery.template.module.scss"
import { navigate } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import ArrowLeft from "@material-ui/icons/ArrowLeft"
import Switch from "@material-ui/core/Switch"
import ArrowRight from "@material-ui/icons/ArrowRight"
import "./icons.css"
import darkPeace from "../images/pngs/darkPeace.png"
import darkPeace2 from "../images/pngs/darkPeace2.png"

const ImgDescription = props => {
  const [mode, setMode] = useState("")

  useEffect(() => {
    function checkMode() {
      const theme = localStorage.getItem("theme")
      if (theme === "light") {
        setMode("light")
      } else if (theme === "dark") {
        setMode("dark")
      }
    }
    window.addEventListener("storage", checkMode())
    return () => {
      window.removeEventListener("storage", checkMode())
    }
  }, [mode])

  let next = props.pageContext.next
  let prev = props.pageContext.prev
  let seeInLightMode = props.pageContext.slug.replace(/u.*/, "")
  let seeInDarkMode = props.pageContext.slug.concat("uv")

  const routeChange = () => {
    if (mode === "dark") {
      navigate(`/gallery/${seeInLightMode}`)
    } else if (mode === "light") {
      navigate(`/gallery/${seeInDarkMode}`)
    }
  }

  const changeBg = () => {
    localStorage.setItem("theme", "light")
    navigate("/gallery")
    let underline = document.getElementsByClassName("navItem")
    underline.add("activeNavItem")
  }

  return (
    <div className={styles.containerBig}>
      <div className={styles.darkSquare}></div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.arrows_container}>
            <div className={styles.arrow}>
              {prev && (
                <Link to={`/gallery/${prev.fields.slug}`}>
                  <ArrowLeft />
                </Link>
              )}
            </div>
            <div className={styles.arrow}>
              {next && (
                <Link to={`/gallery/${next.fields.slug}`}>
                  <ArrowRight />
                </Link>
              )}
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
            <div className={styles.templateToggle}>
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <div className={styles.uv_label}>
                    <div>
                      <img
                        src={theme === "dark" ? darkPeace2 : darkPeace}
                        alt="dark peace logo"
                      />
                    </div>
                    <Switch
                      style={{ color: "var(--switcher)" }}
                      checked={theme === "dark"}
                      onClick={routeChange}
                      onChange={e => {
                        toggleTheme(e.target.checked ? "dark" : "light")
                      }}
                      name="checkedA"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </div>
                )}
              </ThemeToggler>
            </div>
            <button
              className={styles.link}
              onClick={() => changeBg()}
              entry={{
                delay: 0.3,
              }}
            >
              Back to gallery
            </button>
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
