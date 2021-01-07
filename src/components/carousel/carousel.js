import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import carousel1 from "../../images/carousel/carousel1.jpg"
import carousel2 from "../../images/carousel/carousel2.jpg"
import carousel3 from "../../images/carousel/carousel3.jpg"
import style from "./carousel.module.scss"

const CarouselIntro = () => {
  return (
      <Carousel className={style.container} autoPlay>
        <div>
          <img alt="carousel 1" src={carousel1} />
        </div>
        <div>
          <img alt="carousel 2" src={carousel2} />
        </div>
        <div>
          <img alt="carousel 3" src={carousel3} />
        </div>
      </Carousel>
  )
}

export default CarouselIntro
