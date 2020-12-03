import React, { useState } from "react"
import ActorLayout from '../../components/Layout/Actor-Layout/actor-layout'
import YouTube from "react-youtube"
import Loader from "react-loader-spinner"
import styles from "../../styles/videos.module.scss"
// import SEO from "../components/seo"

const videos33 = [
  "w0NcyiahpzI",
  "AV5m2W9MH_w",
  "5DCk1i15s8Y",
  "8nyVAJhPAEs",
  "5sMrU6zA2kE",
]

const videosBefore33 = [
  "O_4zKb0xn0o",
  "u0b89tU0nag",
  "-1hhBmlEDSE",
  "g1olyrnNuF8",
  "5sGKQnpZLFg",
  "w0NcyiahpzI",
]

const Videos = props => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [selected, setSelectedTab] = useState(1)
  const onClickTab = value => setSelectedTab(value)

  return (
    <ActorLayout page={"videos"}>
      {/* <SEO
        title="Vídeos Alex Peracaula"
        lang="es"
        description="Vídeos de Alex Peracaula. En esta página está el videobook y otros vídeos parodia sobre 'El Ultimo Superviviente'."/> */}
      <div className={styles.container}>
        <div className={styles.tabs_actor}>
        <div aria-hidden="true" className={styles.tab} onClick={() => onClickTab(1)} onKeyDown={() => onClickTab(1)}>
            <h2
              className={`${styles.tabTitle} ${
                selected === 1 ? styles.selected : ""
              }`}
            >
              "before 33"
            </h2>
          </div>
          <div aria-hidden="true" className={styles.tab} onClick={() => onClickTab(2)} onKeyDown={() => onClickTab(2)}>
            <h2
              className={`${styles.tabTitle} ${
                selected === 2 ? styles.selected : ""
              }`}
            >
              "33"
            </h2>
          </div>
        </div>

        <div
          className={`${styles.loader_container} ${
            videoLoaded ? styles.hide : ""
          } ${selected !== 1 ? styles.hide : ""}`}
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
        <div
          className={`${styles.video_grid} ${
            selected !== 1 ? styles.hide : ""
          }`}
        >
          {videosBefore33.map(id => (
            <>
              <YouTube
                videoId={id}
                className={`${styles.video_size} ${
                  selected !== 1 ? styles.hide : ""
                }`}
                onReady={() => setVideoLoaded(true)}
              />
            </>
          ))}
        </div>

        <div
          className={`${styles.loader_container} ${
            videoLoaded ? styles.hide : ""
          } ${selected !== 2 ? styles.hide : ""}`}
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

        <div
          className={`${styles.video_grid} ${
            selected !== 2 ? styles.hide : ""
          }`}
        >
          {videos33.map(id => (
            <>
              <YouTube
                videoId={id}
                className={`${styles.video_size} ${
                  selected !== 2 ? styles.hide : ""
                }`}
                onReady={() => setVideoLoaded(true)}
              />
            </>
          ))}
        </div>
      </div>
    </ActorLayout>
  )
}

export default Videos
