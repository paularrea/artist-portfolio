import React, { useState, useEffect } from "react"
import styles from "../styles/videos.module.scss"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import YouTube from "react-youtube"
import Loader from "react-loader-spinner"
import resurrect from "../images/gifs/resurrect.gif"

const makingOff = [
  "PfweikrHsOc",
  "qU721LnzcCk",
  "nfWhsUQFA-c",
  "mj5juQCyT-s",
  "GjhxCAGBdCI",
  "sMTo46GvIU4",
  "BwEHXWFgoMg",
  "BOt582m3vPY",
  "zHXe55y_dLs",
  "Jp8krgaxdB8",
  "CmAyIGN5Qvs",
  "MhI2Kr5vNfw",
  "YXVOMgwuSm4",
  "PfweikrHsOc",
]

const Videos = props => {
  const intl = useIntl()
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout page={"videos"}>
      <SEO title={intl.formatMessage({ id: "seo.video" })} />
      <div className={styles.container}>
        <div
          className={`${styles.loader_container} ${
            videoLoaded ? styles.hide : ""
          }`}
        >
          <Loader
            type="TailSpin"
            color="grey"
            height={40}
            width={40}
            timeout={3000}
            className={videoLoaded ? styles.hide : ""}
          />
        </div>
        <div className={styles.principalVideo}>
          <img src={resurrect} alt="resurrect logo" />
          <YouTube
            videoId="PiRIxPFRdaw"
            className={styles.principal_size}
            onReady={() => setVideoLoaded(true)}
          />
        </div>
        <h3 className={styles.makingOf}>THE MAKING OF</h3>
        <div className={styles.video_grid}>
          {makingOff.map(id => (
            <>
              <YouTube
                videoId={id}
                className={styles.video_size}
                onReady={() => setVideoLoaded(true)}
              />
            </>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Videos
