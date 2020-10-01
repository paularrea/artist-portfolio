import React from "react"
import Switch from "@material-ui/core/Switch"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import style from "./uv.module.scss"
import "./switcher.css"

function Uv() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className={style.uv_label}>
          UV
          <Switch
            style={{ color: "var(--switcher)" }}
            checked={theme === "light"}
            onChange={e => toggleTheme(e.target.checked ? "light" : "dark")}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
      )}
    </ThemeToggler>
  )
}

export default Uv
