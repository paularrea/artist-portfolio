import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import "../../styles/index.scss"
import Switch from "@material-ui/core/Switch"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import layoutStyles from "./layout.module.scss"
import headerStyles from "../Header/header.module.scss"
import "../UvToggle/switcher.css"
import darkPeace from "../../images/darkPeace.png"
import darkPeace2 from "../../images/pngs/darkPeace2.png"
import Requesens from "../../images/requesensLletres.png"

const Layout = ({ children, changeUv = () => {} }) => {
  const [closeIntro, setCloseIntro] = useState(typeof window !== 'undefined' && (window.sessionStorage.getItem("closeIntro") || false))

  useEffect(() => {
    // const initialIntro = () => window.sessionStorage.getItem("closeIntro") || false;
    const intro = setTimeout(() => {
      setCloseIntro(true)
    }, 2500)
    window.sessionStorage.setItem("closeIntro", closeIntro)
    return () => clearTimeout(intro)
  }, [closeIntro])

  const uvToggle = (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className={headerStyles.uv_label}>
          <Switch
            style={{ color: "var(--switcher)" }}
            checked={theme === "dark"}
            onChange={e => {
              toggleTheme(e.target.checked ? "dark" : "light")
              changeUv(theme)
            }}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <div>
            <img
              src={theme === "dark" ? darkPeace2 : darkPeace}
              alt="dark peace logo"
            />
          </div>
        </div>
      )}
    </ThemeToggler>
  )

  return (
    <>
      {typeof window !== "undefined"
        ? !closeIntro && (
            <div className={layoutStyles.on_load}>
              <div className={layoutStyles.animation}>
                <img
                  src={Requesens}
                  className={headerStyles.logo}
                  alt="Lletres logo"
                />
              </div>
            </div>
          )
        : null}
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header uvToggle={uvToggle} />
          <main className={layoutStyles.pages}>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
