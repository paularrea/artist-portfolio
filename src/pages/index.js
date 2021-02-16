import React, { useState, useEffect } from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/Layout/layout"
import IntroVideo from "../components/Video/introVideo"
import Logo from "../components/Header/requesens"
import { navigate } from "gatsby"
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
import creu from "../images/gifs/creu.gif"
import cara2 from "../images/pngs/cara2.png"
import cara from "../images/pngs/cara.png"
import trentatres2 from "../images/pngs/trentatres2.png"
import trentatres from "../images/pngs/trentatres.png"
import ull2 from "../images/pngs/ullObert.png"
import ull from "../images/pngs/ullTancat.png"

import LoveIcon from "../images/gifs/love.gif"
import PeaceIcon from "../images/gifs/peace.gif"
import GloryIcon from "../images/gifs/glory.gif"
import DarkPeaceIcon from "../images/darkPeace.png"
import DarkPeace2 from "../images/pngs/darkPeace2.png"
import ullGif from "../images/gifs/ull.gif"
import resurrectGif from "../images/gifs/resurrect.gif"
import firmaGif from "../images/gifs/firma.gif"

const Home = props => {
  const [closeIntro, setCloseIntro] = useState(false)
  const [moveAnimation, setMoveAnimation] = useState(false)
  const [changeToDarkPeace2, setChangeToDarkPeace2] = useState(false)

  const [hoverLlamp, setHoverLlamp] = useState(false)
  const [hoverFlama, setHoverFlama] = useState(false)
  const [hoverSimbol, setHoverSimbol] = useState(false)
  const [hoverSuper, setHoverSuper] = useState(false)
  const [hoverCalavera, setHoverCalavera] = useState(false)
  const [hoverEstrella, setHoverEstrella] = useState(false)
  const [hoverTrentatres, setHoverTrentatres] = useState(false)
  const [hoverCara, setHoverCara] = useState(false)
  const [hoverUll, setHoverUll] = useState(false)

  const intl = useIntl()

  const changeBg = () => {
    localStorage.setItem("theme", "light")
    navigate("/gallery")
  }

  useEffect(() => {
    if (localStorage.theme === 'dark'){
      setChangeToDarkPeace2(true)
    }
    localStorage.setItem("theme", "light")
    localStorage.setItem("gatsby-intl-language", "en")
    setTimeout(() => {
      setMoveAnimation(true)
    }, 3000)
    const intro = setTimeout(() => {
      setCloseIntro(true)
    }, 4100)
    return () => clearTimeout(intro)
  }, [closeIntro, changeToDarkPeace2])

  useEffect(() => {
    window.scrollTo(0, 0) 
  }, [])

  return (
    <div style={{ position: "relative" }}>
      {!closeIntro && (
        <div className={style.on_load}>
          {!moveAnimation ? (
            <div className={style.animation}>
              <img src={resurrectGif} alt="resurrect gif" />
              <p style={{color:'whitesmoke', fontSize:'30px'}}>X</p>
              <img src={firmaGif} alt="firma gif" />
            </div>
          ) : (
            <div className={style.animation}>
              <img src={ullGif} alt="ull intro" />
            </div>
          )}
        </div>
      )}
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
            <p>
              {intl.formatMessage({ id: "home.process.text1" })}
              <span className={style.processSpan}>
                <img src={LoveIcon} alt="Love Icon" />
              </span>
              {intl.formatMessage({ id: "home.process.text2" })}
              <span className={style.processSpan}>
                <img src={PeaceIcon} alt="Peace Icon" />
              </span>
              {intl.formatMessage({ id: "home.process.text3" })}
              <span className={style.processSpan}>
                <img src={GloryIcon} alt="Glory Icon" />
              </span>
              {intl.formatMessage({ id: "home.process.text4" })}
            </p>
          </div>
          <div className={style.intro_text2}>
            <h4>{intl.formatMessage({ id: "home.concept.name" })}</h4>
            <p>
              {intl.formatMessage({ id: "home.concept.text1" })}
              <span className={style.darkPeace}>
                <img src={changeToDarkPeace2 ? DarkPeace2 : DarkPeaceIcon} alt="Dark Peace Icon" />
              </span>
              {intl.formatMessage({ id: "home.concept.text2" })}
              <b> {intl.formatMessage({ id: "home.concept.bold1" })}</b>
              {intl.formatMessage({ id: "home.concept.text3" })}
              <b> {intl.formatMessage({ id: "home.concept.bold2" })}</b>
              {intl.formatMessage({ id: "home.concept.text4" })}
            </p>
          </div>
          <div className={style.philosophy}>
            <h4>{intl.formatMessage({ id: "home.bullet.title" })}</h4>
          </div>
          <div className={style.bullet_container}>
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
          </div>
          <div className={style.bullet_container}>
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
          </div>
          <div className={style.bullet_container2}>
            <button
              className={style.bullet}
              onBlur={() => setHoverUll(false)}
              onMouseOut={() => setHoverUll(false)}
              onMouseOver={() => setHoverUll(true)}
              onFocus={() => setHoverUll(true)}
            >
              <img
                className={style.darkPeace}
                src={hoverUll ? ull2 : ull}
                alt="ull logo"
              />
              <h5>{intl.formatMessage({ id: "home.bullet.name9" })}</h5>
              <p>
                {intl.formatMessage({ id: "home.bullet.description9.text1" })}
                <b>
                  {" "}
                  {intl.formatMessage({ id: "home.bullet.description9.bold1" })}
                </b>
              </p>
            </button>
            <button
              className={style.bullet}
              onBlur={() => setHoverTrentatres(false)}
              onMouseOut={() => setHoverTrentatres(false)}
              onMouseOver={() => setHoverTrentatres(true)}
              onFocus={() => setHoverTrentatres(true)}
            >
              <img
                className={style.darkPeace}
                src={hoverTrentatres ? trentatres2 : trentatres}
                alt="trentatres logo"
              />
              <h5>{intl.formatMessage({ id: "home.bullet.name7" })}</h5>
              <p>
                {intl.formatMessage({ id: "home.bullet.description7.text1" })}
              </p>
            </button>
            <button
              className={style.bullet}
              onBlur={() => setHoverCara(false)}
              onMouseOut={() => setHoverCara(false)}
              onMouseOver={() => setHoverCara(true)}
              onFocus={() => setHoverCara(true)}
            >
              <img
                className={style.darkPeace}
                src={hoverCara ? cara2 : cara}
                alt="cara logo"
              />
              <h5>{intl.formatMessage({ id: "home.bullet.name8" })}</h5>
              <p>
                {intl.formatMessage({ id: "home.bullet.description8.text1" })}
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
