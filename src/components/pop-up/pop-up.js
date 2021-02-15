import React, { useState, useEffect } from "react"
import styles from "./popup.module.scss"
import { useIntl } from "gatsby-plugin-intl"

export default function Popup() {
  const [visible, setVisible] = useState(false)

  const intl = useIntl()

  useEffect(() => {
    let pop_status = sessionStorage.getItem("pop_status")
    if (!pop_status) {
      setVisible(true)
      sessionStorage.setItem("pop_status", 1)
    }
  }, [])
  if (!visible) return null

  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <p>{intl.formatMessage({ id: "popup.text" })}
        </p>
        <div className={styles.buttonContainer}>
          <button
            onKeyDown={() => setVisible(false)}
            onClick={() => setVisible(false)}
            className={styles.button}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  )
}
