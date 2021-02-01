import React, { useState, useEffect } from "react"
import { useIntl } from "gatsby-plugin-intl"
import styles from "../styles/contact.module.scss"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import estrella1 from "../images/pngs/estrella1.png"
import estrella2 from "../images/pngs/estrella2.png"
import estrella3 from "../images/pngs/estrella3.png"
import estrella4 from "../images/pngs/estrella4.png"
import estrella5 from "../images/pngs/estrella5.png"
import ullObert from "../images/pngs/ullObert.png"
import ullTancat from "../images/pngs/ullTancat.png"
// import trentatres from "../images/pngs/33.png"
// import love from "../images/pngs/love.png"
// import peace from "../images/pngs/peace.png"
// import glory from "../images/pngs/glory.png"
import creu from "../images/pngs/creu.png"

export default function Contact() {
  const [hover, setHover] = useState(false)
  const intl = useIntl()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "seo.contact" })} />
      <div className={styles.contact}>
        <div className={styles.logo_container}>
          <button
            className={styles.ull}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            onMouseOut={() => setHover(false)}
            onMouseOver={() => setHover(true)}
          >
            <img src={hover ? ullObert : ullTancat} alt="ull obert" />
          </button>
          <button
            className={styles.ull2}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            onMouseOut={() => setHover(false)}
            onMouseOver={() => setHover(true)}
          >
            <img src={hover ? ullObert : ullTancat} alt="ull obert" />
          </button>
          <button
            className={styles.ull3}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            onMouseOut={() => setHover(false)}
            onMouseOver={() => setHover(true)}
          >
            <img src={hover ? ullObert : ullTancat} alt="ull obert" />
          </button>
          <button
            className={styles.ull4}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            onMouseOut={() => setHover(false)}
            onMouseOver={() => setHover(true)}
          >
            <img src={hover ? ullObert : ullTancat} alt="ull obert" />
          </button>
          {/* 33 */}
          {/* <div className={styles.trentatres}>
          <img src={trentatres} alt="estrella 1" />
        </div>
        <div className={styles.trentatres2}>
          <img src={trentatres} alt="estrella 1" />
        </div>
        <div className={styles.trentatres3}>
          <img src={trentatres} alt="estrella 1" />
        </div>
        <div className={styles.trentatres4}>
          <img src={trentatres} alt="estrella 1" />
        </div>
        <div className={styles.trentatres5}>
          <img src={trentatres} alt="estrella 1" />
        </div> */}
          {/* glory */}
          {/* <div className={styles.glory}>
          <img src={glory} alt="glory" />
        </div>
        <div className={styles.glory2}>
          <img src={glory} alt="glory fa-rotate-270" />
        </div>
        <div className={styles.glory3}>
          <img src={glory} alt="glory 3" />
        </div>
        <div className={styles.glory4}>
          <img src={glory} alt="glory 4" />
        </div>
        <div className={styles.glory5}>
          <img src={glory} alt="glory 5" />
        </div> */}
          {/* estrellas */}
          <div className={styles.estrella1}>
            <img src={estrella1} alt="estrella 1" />
          </div>
          <div className={styles.estrella2}>
            <img src={estrella2} alt="estrella 2" />
          </div>
          <div className={styles.estrella3}>
            <img src={estrella3} alt="estrella 3" />
          </div>
          <div className={styles.estrella4}>
            <img src={estrella4} alt="estrella 4" />
          </div>
          <div className={styles.estrella5}>
            <img src={estrella5} alt="estrella 5" />
          </div>
          <div className={styles.estrella6}>
            <img src={estrella2} alt="estrella 6" />
          </div>
          <div className={styles.estrella7}>
            <img src={estrella3} alt="estrella 7" />
          </div>
          <div className={styles.estrella8}>
            <img src={estrella5} alt="estrella 8" />
          </div>
          <div className={styles.estrella9}>
            <img src={estrella5} alt="estrella 9" />
          </div>
          <div className={styles.estrella10}>
            <img src={estrella1} alt="estrella 10" />
          </div>
          <div className={styles.estrella11}>
            <img src={estrella2} alt="estrella 11" />
          </div>
          <div className={styles.estrella12}>
            <img src={estrella3} alt="estrella 12" />
          </div>
          {/* love */}
          {/* <div className={styles.love}>
          <img src={love} alt="love logo" />
        </div>
        <div className={styles.love2}>
          <img src={love} alt="love2 logo" />
        </div>
        <div className={styles.love3}>
          <img src={love} alt="love3 logo" />
        </div>
        <div className={styles.love4}>
          <img src={love} alt="love4 logo" />
        </div>
        <div className={styles.love5}>
          <img src={love} alt="love5 logo" />
        </div> */}
          {/* peace */}
          {/* <div className={styles.peace}>
          <img src={peace} alt="peace logo" />
        </div>
        <div className={styles.peace2}>
          <img src={peace} alt="peace2 logo" />
        </div>
        <div className={styles.peace3}>
          <img src={peace} alt="peace3 logo" />
        </div>
        <div className={styles.peace4}>
          <img src={peace} alt="peace4 logo" />
        </div>
        <div className={styles.peace5}>
          <img src={peace} alt="peace5 logo" />
        </div> */}
          {/* creu */}
          <div className={styles.creu}>
            <img src={creu} alt="creu logo" />
          </div>
        </div>

        <div className={styles.email_container}>
          <h2>{intl.formatMessage({ id: "contact.title" })}</h2>
          <p>{intl.formatMessage({ id: "contact.text" })}</p>
          <a
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            onMouseOut={() => setHover(false)}
            onMouseOver={() => setHover(true)}
            href="mailto:hello@paurequesens.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@paurequesens.com
          </a>
        </div>
      </div>
    </Layout>
  )
}
