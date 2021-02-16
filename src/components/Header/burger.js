import { slide as Menu } from "react-burger-menu"
import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import "./burger.css"
import style from "./header.module.scss"
import { navigate } from "gatsby"

const Burger = () => {
  const intl = useIntl()
  const changeBg = () => {
    localStorage.setItem("theme", "light")
    navigate("/gallery")
  }
  return (
    <Menu className="bm-menu">
      <Link
        entry={{
          delay: 0.3,
        }}
        to="/"
        id="home"
        className={style.menu_item}
      >
        {intl.formatMessage({ id: "nav.home" })}
      </Link>
      <button
        entry={{
          delay: 0.3,
        }}
        onClick={changeBg}
        id="gallery"
        className="button_burger"
      >
        {intl.formatMessage({ id: "nav.gallery" })}
      </button>
      <Link to="/video" id="video" className={style.menu_item}>
        {intl.formatMessage({ id: "nav.video" })}
      </Link>
      <Link
        entry={{
          delay: 0.3,
        }}
        to="/about"
        id="about"
        className={style.menu_item}
      >
        {intl.formatMessage({ id: "nav.about" })}
      </Link>
      <Link
        entry={{
          delay: 0.3,
        }}
        to="/contact"
        id="contact"
        className={style.menu_item}
      >
        {intl.formatMessage({ id: "nav.contact" })}
      </Link>
      <div className={style.lang_container}>
        <Link activeClassName={style.activeLang} language="en">
          En{" "}
        </Link>
        /
        <Link activeClassName={style.activeLang} language="es">
          {" "}
          Es
        </Link>
      </div>
    </Menu>
  )
}

export default Burger
