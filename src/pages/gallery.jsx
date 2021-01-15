import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-intl"
import UvSwitch from "../components/galleryUv/uvSwitch"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const Gallery = () => {
  const intl = useIntl()
  const [darkOn, setDarkOn] = useState("true")
  const [uv, setUv] = useState("dark")

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
    <Layout changeUv={changeUv}>
      <SEO title={intl.formatMessage({ id: "seo.gallery" })} />
      <UvSwitch darkOn={darkOn} uv={uv} />
    </Layout>
  )
}

export default Gallery
