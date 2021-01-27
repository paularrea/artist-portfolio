import React, { useState, useEffect } from "react"
import { useIntl } from "gatsby-plugin-intl"
import styles from "../../styles/contact.module.scss"
import ActorLayout from "../../components/Layout/Actor-Layout/actor-layout"
import SEO from "../../components/seo"

import estrella1 from "../../images/pngs/estrella1.png"
import estrella2 from "../../images/pngs/estrella2.png"
import estrella3 from "../../images/pngs/estrella3.png"
import estrella4 from "../../images/pngs/estrella4.png"
import estrella5 from "../../images/pngs/estrella5.png"
import ullObert from "../../images/pngs/ullObert.png"
import ullTancat from "../../images/pngs/ullTancat.png"
import creu from "../../images/pngs/creu.png"

export default function Contact() {
  const [hover, setHover] = useState(false)
  const intl = useIntl()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ActorLayout>
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
            href="mailto:hello@requesens.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@requesens.com
          </a>
        </div>
      </div>
      </ActorLayout>
  )
}
