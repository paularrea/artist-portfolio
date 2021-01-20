import React from "react"
import headerStyles from "./header.module.scss"
import { useIntl, Link } from "gatsby-plugin-intl"
import Burger from "./burger"
import Media from "react-media"
import "./switcher.css"

const Header = props => {
  const intl = useIntl()
  return (
    <div className={headerStyles.container}>
      <header className={headerStyles.header}>
        <Media query={{ minWidth: 950 }}>
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
                <Link
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/gallery"
                >
                  {intl.formatMessage({ id: "nav.gallery" })}
                </Link>
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
        </Media>
        <Media query={{ maxWidth: 950 }}>
          <div className={headerStyles.burger_container}>
            <Burger />
            <div>{props.uvToggle}</div>
          </div>
        </Media>
      </header>
    </div>
  )
}

export default Header
