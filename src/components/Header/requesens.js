import React from "react"
import headerStyles from "./header.module.scss"
import { Link } from "gatsby"

function Logo() {
  
  return (
    <div>
      <h1>
        <Link
          style={{
            backgroundColor: "var(--bg)",
          }}
          className={headerStyles.title}
          to="/"
        >
          Requesens
        </Link>
      </h1>
    </div>
  )
}

export default Logo
