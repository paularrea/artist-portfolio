import React from "react"
import videoStyle from "./introVideo.module.scss"
import teaser from "../../videos/teaser.mp4"

function IntroVideo(props) {
  console.log(props, "props")
  return (
    <video
      className={videoStyle.container}
      id="background-video"
      loop
      autoPlay
      muted
    >
      <source src={teaser} type="video/mp4" />
      <source src={teaser} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  )
}

export default IntroVideo
