import React, { useState, useEffect } from "react"
import styles from "../../styles/videos.module.scss"
import { useIntl } from "gatsby-plugin-intl"
import YouTube from "react-youtube"
import SEO from "../../components/seo"
import Loader from "react-loader-spinner"
import ActorLayout from "../../components/Layout/Actor-Layout/actor-layout"

function Home() {
  const intl = useIntl()
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <ActorLayout>
      <SEO title={intl.formatMessage({ id: "seo.about" })} />
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
          <YouTube
            videoId="sMTo46GvIU4"
            className={styles.principal_size}
            onReady={() => setVideoLoaded(true)}
          />
        </div>
      </div>
    </ActorLayout>
  )
}

export default Home
