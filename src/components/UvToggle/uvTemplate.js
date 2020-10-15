import React from "react"
import Switch from "@material-ui/core/Switch"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { navigate } from "gatsby"
import style from "./uv.module.scss"
import "./switcher.css"

function UvTemplate() {

    const onClick = e => {
        e.preventDefault();
        const containUV = () => {
          let url = window.location.href;
          if (url.indexOf("uv") > -1) {
            navigate(url.replace(/u.*/,""))
            console.log(url.replace(/u.*/,""), 'uv must be replaced')
          } else {
            navigate(url.concat('uv'))
            console.log(url.concat('uv'), 'uv must be added')
          }
        }
        containUV();
        
      }

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className={style.uv_label_template}>
          UV
          <Switch
            style={{ color: "var(--switcher)" }}
            checked={theme === "light"}
            onClick={onClick}
            onChange={e => toggleTheme(e.target.checked ? "light" : "dark")}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
      )}
    </ThemeToggler>
  )
}

export default UvTemplate
