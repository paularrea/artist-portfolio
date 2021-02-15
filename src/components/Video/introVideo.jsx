import React from "react"
import videoStyle from "./introVideo.module.scss"
// import ReactPlayer from "react-player/lazy"
// import url from "../../videos/teaserColor.mp4"

function IntroVideo() {
  return (
    // <ReactPlayer
    //   url={url}
    //   playsinline
    //   playing
    //   width="100%"
    //   height="auto"
    //   muted
    //   loop
    //   className={videoStyle.container}
    // />
    <iframe
      title="intro video"
      className={videoStyle.container}
      src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdop69qrah%2Fvideo%2Fupload%2Fv1612775196%2FteaserColor_ga1uua.mp4&cloud_name=Pau%27s%20cloud&player%5Bfluid%5D=true&player%5Bcontrols%5D=false&player%5Bmuted%5D=true&player%5Bautoplay%5D=true&player%5Bloop%5D=true"
      width="640"
      height="480"
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      allowfullscreen
      frameborder="0"
    ></iframe>
  )
}

export default IntroVideo
