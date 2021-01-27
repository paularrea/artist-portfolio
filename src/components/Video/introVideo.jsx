import React from "react"
import videoStyle from "./introVideo.module.scss"
import ReactPlayer from "react-player/lazy"
import url from "../../videos/teaserColor.mp4"

function IntroVideo() {
  return (
    <ReactPlayer
      url={url}
      playsinline
      playing
      width="100%"
      height="auto"
      muted
      loop
      className={videoStyle.container}
    />
  )
}

export default IntroVideo
