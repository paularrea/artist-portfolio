import { slide as Menu } from "react-burger-menu"
import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import "../burger.css"

import style from "../header.module.scss"

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Menu className="bm-menu">
        <TransitionLink
          entry={{
            delay: 0.3,
          }}
          to="/actor"
          id="actor-home"
          className={style.menu_item}
        >
          Home
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.3,
          }}
          to="/actor/gallery"
          id="actor-gallery"
          className={style.menu_item}
        >
          Gallery
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.3,
          }}
          to="/actor/video"
          id="actor-video"
          className={style.menu_item}
        >
          Video
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.3,
          }}
          to="/actor/about"
          id="actor-about"
          className={style.menu_item}
        >
          About
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.3,
          }}
          to="/actor/contact"
          id="actor-contact"
          className={style.menu_item}
        >
          Contact
        </TransitionLink>
      </Menu>
    )
  }
}

export default Burger
