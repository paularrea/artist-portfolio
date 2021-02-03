import React from "react"
import { Parallax } from "react-scroll-parallax"
import img from "../images/aboutPau.jpg"
import styles from "../styles/about.module.scss"

const ParallaxImg = () => {

  return (
    <Parallax className={styles.parallax_container} x={[10, -0]} tagOuter="figure">
      <img
        className={styles.parallax}
        src={img}
        alt="Pau pintor"
      />
    </Parallax>
  )
}

export default ParallaxImg
