import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import carousel1 from "../../images/carousel/carousel1.jpg"
import carousel2 from "../../images/carousel/carousel2.jpg"
import carousel3 from "../../images/carousel/carousel3.jpg"
import carousel4 from "../../images/carousel/carousel4.jpg"
import style from "./carousel.module.scss"
import "./modifyCarousel.css"

const CarouselIntro = () => {
  return (
      <Carousel autoPlay className={style.container} >
        <div>
          <img alt="carousel 1" src={carousel1} />
        </div>
        <div>
          <img alt="carousel 2" src={carousel2} />
        </div>
        <div>
          <img alt="carousel 3" src={carousel3} />
        </div>
        <div>
          <img alt="carousel 3" src={carousel4} />
        </div>
      </Carousel>
  )
}

export default CarouselIntro
