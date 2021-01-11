import React from "react"
import headerStyles from "./header.module.scss"
import Burger from "./burger"
import Media from "react-media"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./switcher.css"

const Header = props => {
  return (
    <div className={headerStyles.container}>
      <header className={headerStyles.header}>
        <Media query={{ minWidth: 950 }}>
          <nav className={headerStyles.nav}>
            <ul
              className={headerStyles.navList}
            >
              <li>
                <AniLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/"
                >
                  HOME
                </AniLink>
              </li>
              <li>
                <AniLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/gallery"
                >
                  GALLERY
                </AniLink>
              </li>
              <li>
                <AniLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/video"
                >
                  VIDEO
                </AniLink>
              </li>
              <li>
                <AniLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/about"
                >
                  ABOUT
                </AniLink>
              </li>
              <li>
                <AniLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/contact"
                >
                  CONTACT
                </AniLink>
              </li>
            </ul>
            <div className={headerStyles.uv}>{props.uvToggle}</div> 
          </nav>
        </Media>
        <Media query={{ maxWidth: 950 }}>
          <div className={headerStyles.burger_container}>
            <Burger />
            {props.uvToggle}
          </div>
        </Media>
      </header>
    </div>
  )
}

export default Header
