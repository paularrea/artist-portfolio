import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/Layout/layout"
import IntroVideo from "../components/Video/introVideo"
import Logo from "../components/Header/requesens"
import {navigate} from "gatsby"
import style from "../styles/home.module.scss"
import SEO from "../components/seo"
import resurrect from "../images/pngs/resurrect.png"

import calavera from "../images/pngs/calavera.png"
import calavera2 from "../images/pngs/calavera2.png"
import llamp from "../images/pngs/llamp.png"
import llamp2 from "../images/pngs/llamp2.png"
import flama from "../images/pngs/flama.png"
import flama2 from "../images/pngs/flama2.png"
import estrella from "../images/pngs/estrella1.png"
import estrella2 from "../images/pngs/estrella2.png"
import simbol from "../images/pngs/simbol.png"
import simbol2 from "../images/pngs/simbol2.png"
import super1 from "../images/pngs/super1.png"
import super2 from "../images/pngs/super2.png"
import creu from "../images/pngs/creu.png"

const Home = props => {
  const [hoverLlamp, setHoverLlamp] = useState(false)
  const [hoverFlama, setHoverFlama] = useState(false)
  const [hoverSimbol, setHoverSimbol] = useState(false)
  const [hoverSuper, setHoverSuper] = useState(false)
  const [hoverCalavera, setHoverCalavera] = useState(false)
  const [hoverEstrella, setHoverEstrella] = useState(false)

  const intl = useIntl()

  const changeBg = () => {
    localStorage.setItem("theme", 'light');
    navigate('/gallery')
    let underline = document.getElementsByClassName('navItem');
    underline.add('activeNavItem')
  }

  return (
    <div style={{ position: "relative" }}>
      <Layout>
        <SEO title={intl.formatMessage({ id: "seo.home" })} />
        <Logo />
        <IntroVideo />
        <section>
          <div className={style.intro_text}>
            <img src={resurrect} alt="resurrect logo" />
            <p>{intl.formatMessage({ id: "home.intro" })}</p>{" "}
          </div>
          <div className={style.intro_text2}>
            <h4>{intl.formatMessage({ id: "home.process.name" })}</h4>
            <p>{intl.formatMessage({ id: "home.process.text" })}</p>
          </div>
          <div className={style.intro_text2}>
            <h4>{intl.formatMessage({ id: "home.concept.name" })}</h4>
            <p>{intl.formatMessage({ id: "home.concept.text" })}</p>
          </div>
          <div className={style.philosophy}>
            <h4>{intl.formatMessage({ id: "home.bullet.title" })}</h4>
          </div>
          <div className={style.bullet_container}>
            <button
              className={style.bullet}
              onBlur={() => setHoverLlamp(false)}
              onMouseOut={() => setHoverLlamp(false)}
              onMouseOver={() => setHoverLlamp(true)}
              onFocus={() => setHoverLlamp(true)}
            >
              <img
                className={style.llamp}
                src={hoverLlamp ? llamp2 : llamp}
                alt="llamp"
              />
              <h5>{intl.formatMessage({ id: "home.bullet.name1" })}</h5>
              <p>
                {intl.formatMessage({ id: "home.bullet.description1.text1" })}
                <b>
                  {intl.formatMessage({ id: "home.bullet.description1.bold1" })}
                </b>
                {intl.formatMessage({ id: "home.bullet.description1.text2" })}
              </p>
            </button>

            <button
              className={style.bullet}
              onBlur={() => setHoverFlama(false)}
              onMouseOut={() => setHoverFlama(false)}
              onMouseOver={() => setHoverFlama(true)}
              onFocus={() => setHoverFlama(true)}
            >
              <img
                className={style.flama}
                src={hoverFlama ? flama2 : flama}
                alt="flama"
              />
              <h5>{intl.formatMessage({ id: "home.bullet.name2" })}</h5>
              <p>
                {intl.formatMessage({ id: "home.bullet.description2.text1" })}
                <b>
                  {intl.formatMessage({ id: "home.bullet.description2.bold1" })}
                </b>
                {intl.formatMessage({ id: "home.bullet.description2.text2" })}
              </p>
            </button>

            <button
              className={style.bullet}
              onBlur={() => setHoverCalavera(false)}
              onMouseOut={() => setHoverCalavera(false)}
              onMouseOver={() => setHoverCalavera(true)}
              onFocus={() => setHoverCalavera(true)}
            >
              <img
                className={style.darkPeace}
                src={hoverCalavera ? calavera2 : calavera}
                alt="calavera logo"
              />
              <h5>{intl.formatMessage({ id: "home.bullet.name3" })}</h5>
              <p>
                {intl.formatMessage({ id: "home.bullet.description3.text1" })}
                <b>
                  {intl.formatMessage({ id: "home.bullet.description3.bold1" })}
                </b>
                {intl.formatMessage({ id: "home.bullet.description3.text2" })}
              </p>
            </button>
          </div>
          <div className={style.bullet_container2}>
            <button
              className={style.bullet}
              onBlur={() => setHoverEstrella(false)}
              onMouseOut={() => setHoverEstrella(false)}
              onMouseOver={() => setHoverEstrella(true)}
              onFocus={() => setHoverEstrella(true)}
            >
              <img
                className={style.llamp}
                src={hoverEstrella ? estrella2 : estrella}
                alt="llamp"
              />
              <h5>{intl.formatMessage({ id: "home.bullet.name4" })}</h5>
              <p>
                <b>
                  {intl.formatMessage({ id: "home.bullet.description4.bold1" })}
                </b>
                {intl.formatMessage({ id: "home.bullet.description4.text1" })}
              </p>
            </button>

            <button
              className={style.bullet}
              onBlur={() => setHoverSimbol(false)}
              onMouseOut={() => setHoverSimbol(false)}
              onMouseOver={() => setHoverSimbol(true)}
              onFocus={() => setHoverSimbol(true)}
            >
              <img
                className={style.flama}
                src={hoverSimbol ? simbol2 : simbol}
                alt="flama"
              />
              <h5>{intl.formatMessage({ id: "home.bullet.name5" })}</h5>
              <p>
                {intl.formatMessage({ id: "home.bullet.description5.text1" })}
                <b>
                  {intl.formatMessage({ id: "home.bullet.description5.bold1" })}
                </b>
                {intl.formatMessage({ id: "home.bullet.description5.text2" })}
              </p>
            </button>

            <button
              className={style.bullet}
              onBlur={() => setHoverSuper(false)}
              onMouseOut={() => setHoverSuper(false)}
              onMouseOver={() => setHoverSuper(true)}
              onFocus={() => setHoverSuper(true)}
            >
              <img
                className={style.darkPeace}
                src={hoverSuper ? super2 : super1}
                alt="darkPeace"
              />
              <h5>{intl.formatMessage({ id: "home.bullet.name6" })}</h5>
              <p>
                <b>
                  {intl.formatMessage({ id: "home.bullet.description6.bold1" })}
                </b>
                {intl.formatMessage({ id: "home.bullet.description6.text1" })}
              </p>
            </button>
          </div>
          <button className={style.toGallery} onClick={() => changeBg()}>
            SEE THE GALLERY
          </button>
          <div className={style.creu}>
            <img src={creu} alt="colom creu" />
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Home
