import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import UvOn from "../components/galleryUv/uvOn"
import UvOff from "../components/galleryUv/uvOff"

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
    <Layout changeUv={changeUv}>{darkOn && (uv === 'dark') ? <UvOn /> : <UvOff />}</Layout>
  )
}

export default Gallery
