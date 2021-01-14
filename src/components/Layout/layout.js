import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import "../../styles/index.scss"
import Switch from "@material-ui/core/Switch"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import layoutStyles from "./layout.module.scss"
import headerStyles from "../Header/header.module.scss"
import "../UvToggle/switcher.css"

const Layout = ({ children, changeUv = () => {} }) => {

  const uvToggle = (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className={headerStyles.uv_label}>
          UV
          <Switch
            style={{ color: "var(--switcher)" }}
            checked={theme === "light"}
            onChange={e => {
              toggleTheme(e.target.checked ? "light" : "dark")
              changeUv(theme)
            }}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
      )}
    </ThemeToggler>
  )

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header uvToggle={uvToggle} />
        <main className={layoutStyles.pages}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
