import React, { useState } from "react"
import UvSwitch from "../components/galleryUv/UVswitch"
import Layout from "../components/Layout/layout"

const Gallery = () => {
  const [darkOn, setDarkOn] = useState("true")
  const [uv, setUv] = useState('dark')

  const changeUv = theme => {
    if (theme === "light") {
      setUv("dark")
      setDarkOn(true)
    } else {
      setUv("light")
      setDarkOn(false)
    }
  }

  return (
    <Layout changeUv={changeUv}><UvSwitch darkOn={darkOn} uv={uv}/></Layout>
  )
}

export default Gallery
