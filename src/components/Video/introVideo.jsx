import React from "react"
import videoStyle from "./introVideo.module.scss"
import teaserColor from "../../videos/teaserColor.mp4"

function IntroVideo() {
  return (
    <video
      className={videoStyle.container}
      id="background-video"
      loop
      autoPlay
      muted
    >
      <source src={teaserColor} type="video/mp4" />
      <source src={teaserColor} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  )
}

export default IntroVideo
