import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "../header.module.scss"
// import Uv from "../../UvToggle/uv"

const HeaderActor = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <nav>
        <ul
          className={headerStyles.nav_list_actor}
        >
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/actor/home"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/actor/gallery"
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/actor/video"
            >
              VIDEO
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/actor/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/actor/contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div className={headerStyles.uv}>
        <Uv />
      </div> */}
    </header>
  )
}

export default HeaderActor
