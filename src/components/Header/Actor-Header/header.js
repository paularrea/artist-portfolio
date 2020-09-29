import React from "react"
import headerStyles from "../header.module.scss"
import Uv from "../../UvToggle/uv"
import Burger from "./burger"
import Media from "react-media"
import TransitionLink from 'gatsby-plugin-transition-link'

const Header = () => {
  return (
    <div>
      <header className={headerStyles.header}>
        <Media query={{ minWidth: 950 }}>
          <nav>
            <ul
              className={headerStyles.navList}
            >
              <li>
                <TransitionLink
                 entry={{
                  delay: 0.3
                }}
                  className={headerStyles.navItem_actor}
                  activeClassName={headerStyles.active_navItem_actor}
                  to="/actor/home"
                >
                  HOME
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                 entry={{
                  delay: 0.3
                }}
                  className={headerStyles.navItem_actor}
                  activeClassName={headerStyles.active_navItem_actor}
                  to="/actor/gallery"
                >
                  GALLERY
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                 entry={{
                  delay: 0.3
                }}
                className={headerStyles.navItem_actor}
                activeClassName={headerStyles.active_navItem_actor}
                  to="/actor/video"
                >
                  VIDEO
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                 entry={{
                  delay: 0.3
                }}
                className={headerStyles.navItem_actor}
                activeClassName={headerStyles.active_navItem_actor}
                  to="/actor/about"
                >
                  ABOUT
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                 entry={{
                  delay: 0.3
                }}
                className={headerStyles.navItem_actor}
                activeClassName={headerStyles.active_navItem_actor}
                  to="/actor/contact"
                >
                  CONTACT
                </TransitionLink>
              </li>
            </ul>
          </nav>
        </Media>
        <Media query={{ maxWidth: 950 }}>
          <div className={headerStyles.burger_container_actor}>
            <Burger />
          </div>
        </Media>
      </header>
    </div>
  )
}

export default Header
