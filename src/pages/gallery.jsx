import React, {useState} from "react"
import Layout from "../components/Layout/layout"
import UvOn from "../components/galleryUv/uvOn"
import UvOff from "../components/galleryUv/uvOff"

const Gallery = () => {
const [darkOn, setDarkOn] = useState(false);
  
  return (
    <Layout setDarkOn={setDarkOn}>
      {darkOn ? <UvOn/> : <UvOff/>}
      </Layout>
  )
}

export default Gallery
