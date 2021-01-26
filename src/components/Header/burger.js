import { slide as Menu } from "react-burger-menu"
import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import "./burger.css"

import style from "./header.module.scss"

import { navigate } from "gatsby"

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.changeBg = this.changeBg.bind(this);
  }

  changeBg() {
    localStorage.setItem("theme", 'light');
    navigate('/gallery')
  }

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
          to="/"
          id="home"
          className={style.menu_item}

        >
          Home
        </TransitionLink>
        <button
          entry={{
            delay: 0.3,
          }}
          onClick={this.changeBg}
          id="gallery"
          className='button_burger'
        >
          Gallery
        </button>
        <TransitionLink
       
          to="/video"
          id="video"
          className={style.menu_item}
        >
          Video
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.3,
          }}
          to="/about"
          id="about"
          className={style.menu_item}
        >
          About
        </TransitionLink>
        <TransitionLink
          entry={{
            delay: 0.3,
          }}
          to="/contact"
          id="contact"
          className={style.menu_item}
        >
          Contact
        </TransitionLink>
      </Menu>
    )
  }
}

export default Burger
