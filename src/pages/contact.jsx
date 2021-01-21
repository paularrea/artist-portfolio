import React, { useState } from "react"
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
import trentatres from "../images/pngs/33.png"
import love from "../images/pngs/love.png"
import peace from "../images/pngs/peace.png"
import creu from "../images/pngs/creu.png"

export default function Contact() {
  const [hover, setHover] = useState(false)
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "seo.contact" })} />
      <div className={styles.contact}>
        <button
          className={styles.ull}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
          onMouseOut={() => setHover(false)}
          onMouseOver={() => setHover(true)}
        >
          <img
            src={hover ? ullObert : ullTancat}
            alt="ull obert"
          />
        </button>
        <div className={styles.trentatres}>
          <img src={trentatres} alt="estrella 1" />
        </div>
        <div className={styles.background1}>
          <img src={estrella1} alt="estrella 1" />
        </div>
        <div className={styles.background2}>
          <img src={estrella2} alt="estrella 2" />
        </div>
        <div className={styles.background3}>
          <img src={estrella3} alt="estrella 3" />
        </div>
        <div className={styles.background4}>
          <img src={estrella4} alt="estrella 4" />
        </div>
        <div className={styles.background5}>
          <img src={estrella5} alt="estrella 5" />
        </div>
        <div className={styles.love}>
          <img src={love} alt="love logo" />
        </div>
        <div className={styles.peace}>
          <img src={peace} alt="peace logo" />
        </div>
        <div className={styles.creu}>
          <img src={creu} alt="creu logo" />
        </div>
        <div className={styles.email_container}>
          <h2>SAY HELLO</h2>
          <p>
            Before any artwork became a part of the collection, it went through
            a process of careful consideration and discussion, and sometimes
            even was an issue of lively dispute. We will be happy if you would
            like to contact us and continue the discussion! We look forward to
            your questions, comments and suggestions.
          </p>
          <a
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            onMouseOut={() => setHover(false)}
            onMouseOver={() => setHover(true)}
            href="mailto:hello@requesens.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@requesens.com
          </a>
        </div>
      </div>
    </Layout>
  )
}
