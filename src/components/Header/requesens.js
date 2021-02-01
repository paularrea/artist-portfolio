import React from "react"
import headerStyles from "./header.module.scss"
import Requesens from "../../images/requesensLletres.png"
import Firma from "../../images/pngs/requesensFirma.png"

function Logo() {


  return (
    <div>
      <h1>
        <button
          className={headerStyles.title}
        >
          <img
            src={Firma}
            className={headerStyles.logoFirma}
            alt="Lletres logo"
          />
          <img
            src={Requesens}
            className={headerStyles.logo}
            alt="Lletres logo"
          />
        </button>
      </h1>
    </div>
  )
}
export default Logo
