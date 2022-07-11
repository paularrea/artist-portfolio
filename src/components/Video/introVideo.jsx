import React from "react"
import videoStyle from "./introVideo.module.scss"

function IntroVideo() {
  return (
    <video
      className={videoStyle.container}
      width="640"
      height="480"
      autoplay="autoplay"
      loop={true}
      playsInline
      muted
    >
      <source
        src="https://firebasestorage.googleapis.com/v0/b/requesens-1bea7.appspot.com/o/teaserColor.mp4?alt=media&token=444f05b0-be0c-4f07-b3bd-a1ccd9711ab1"
        type="video/mp4"
      />
    </video>
  )
}

export default IntroVideo
