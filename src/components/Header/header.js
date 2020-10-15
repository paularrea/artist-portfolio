import React from "react"
import headerStyles from "./header.module.scss"
import Burger from "./burger"
import Media from "react-media"
import TransitionLink from "gatsby-plugin-transition-link"
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
                <TransitionLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/"
                >
                  HOME
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/gallery"
                >
                  GALLERY
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/video"
                >
                  VIDEO
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/about"
                >
                  ABOUT
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  entry={{
                    delay: 0.3,
                  }}
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                  to="/contact"
                >
                  CONTACT
                </TransitionLink>
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
