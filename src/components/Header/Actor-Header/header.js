import React from "react"
import headerStyles from "./actor.header.module.scss"
import Burger from "./burger"
import MediaQuery from "react-responsive"
import TransitionLink from 'gatsby-plugin-transition-link'

const Header = () => {
  return (
    <div>
      <header className={headerStyles.header}>
      <MediaQuery minWidth={950}>
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
                  to="/actor"
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
        </MediaQuery>
        <MediaQuery maxWidth={950}>
          <div className={headerStyles.burger_container_actor}>
            <Burger />
          </div>
        </MediaQuery>
      </header>
    </div>
  )
}

export default Header
