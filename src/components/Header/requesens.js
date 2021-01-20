import React, {useState} from "react"
import headerStyles from "./header.module.scss"
import { Link } from "gatsby"
import Requesens from "../../images/pngs/requesensLletres.png"
import Firma from "../../images/pngs/requesensFirma.png"

function Logo() {
  const [hover, setHover] = useState(false)
  return (
    <div>
      <h1>
        <Link
          style={{
            backgroundColor: "var(--bg)",
          }}
          className={headerStyles.title}
          to="/"
          onMouseOut={() => setHover(false)}
          onMouseOver={() => setHover(true)}
        >
          <img
            src={hover ? Firma : Requesens}
            className={headerStyles.logo}
            alt="Lletres logo"
          />
        </Link>
      </h1>
    </div>
  )
}
export default Logo
