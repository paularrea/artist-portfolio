import React, { useState, useEffect } from "react"
import headerStyles from "./header.module.scss"
import { useIntl, Link } from "gatsby-plugin-intl"
import Burger from "./burger"
import MediaQuery from "react-responsive"
import "./switcher.css"
import { navigate } from "gatsby"
import Popup from "../pop-up/pop-up"

const Header = props => {
  const [galleryUnderline, setGalleryUnderline] = useState(false)
  const intl = useIntl()

  const changeBg = () => {
    localStorage.setItem("theme", "light")
    navigate("/gallery")
  }

  useEffect(() => {
      if(window.location.href.indexOf("gallery") > -1) {
        setGalleryUnderline(true)
    }
  }, [])

  return (
    <div className={headerStyles.container}>
      <header className={headerStyles.header}>
        <Popup />
        <MediaQuery minWidth={950}>
          <nav className={headerStyles.nav}>
            <ul className={headerStyles.navList}>
              <li>
                <Link
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/"
                >
                  {intl.formatMessage({ id: "nav.home" })}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => changeBg()}
                  entry={{
                    delay: 0.3,
                  }}
                  className={galleryUnderline ? headerStyles.activeNavItem : headerStyles.navItem}
                >
                  {intl.formatMessage({ id: "nav.gallery" })}
                </button>
              </li>
              <li>
                <Link
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/video"
                >
                  {intl.formatMessage({ id: "nav.video" })}
                </Link>
              </li>
              <li>
                <Link
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/about"
                >
                  {intl.formatMessage({ id: "nav.about" })}
                </Link>
              </li>
              <li>
                <Link
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/contact"
                >
                  {intl.formatMessage({ id: "nav.contact" })}
                </Link>
              </li>
              <div className={headerStyles.lang_container}>
                <Link activeClassName={headerStyles.activeLang} language="en">
                  EN
                </Link>
                /
                <Link activeClassName={headerStyles.activeLang} language="es">
                  ES
                </Link>
              </div>
            </ul>
            <div className={headerStyles.uv}>{props.uvToggle}</div>
          </nav>
        </MediaQuery>
        <MediaQuery maxWidth={950}>
          <div className={headerStyles.burger_container}>
            <Burger />
            <div>{props.uvToggle}</div>
          </div>
        </MediaQuery>
      </header>
    </div>
  )
}

export default Header
