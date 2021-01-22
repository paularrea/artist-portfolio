import React, {useState} from "react"
import headerStyles from "./header.module.scss"
import { Link } from "gatsby"
import Requesens from "../../images/pngs/requesensLletres.png"
import Firma from "../../images/pngs/requesensFirma.png"

function Logo() {
  const [hover, setHover] = useState(false)

  const styles = {
    transition: 'background-color 0.8s ease-out',
  };

  return (
    <div>
      <h1>
        <button
          style={styles}
          className={headerStyles.title}
          onMouseOut={() => setHover(false)}
          onMouseOver={() => setHover(true)}
        >
          {hover ? <img
            src={Firma}
            className={headerStyles.logoFirma}
            alt="Lletres logo"
          /> : 
             <img
            src={Requesens}
            className={headerStyles.logo}
            alt="Lletres logo"
          />}
    
        </button>
      </h1>
    </div>
  )
}
export default Logo
