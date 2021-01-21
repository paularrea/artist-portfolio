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
        <Link
          style={styles}
          className={headerStyles.title}
          to="/"
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
        </Link>
      </h1>
    </div>
  )
}
export default Logo
