import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout/layout"
import IntroVideo from "../components/Video/introVideo"
import Logo from "../components/Header/requesens"
import logo1 from "../images/favicon.jpg"
import style from "../styles/home.module.scss"
import CarouselIntro from "../components/carousel/carousel"


const Home = () => {
  return (
    <div>
      <Layout>
        <Logo />
        <IntroVideo />
        <section>
          <div className={style.intro_text}>
            <h2>R3SURR3CT</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              optio id cupiditate quaerat consequatur beatae obcaecati. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button>
              <Link to={`/gallery`}>See gallery</Link>
            </button>
          </div>
          <div className={style.bullet_container}>
            <div className={style.bullet}>
              <img src={logo1} alt="" />
              <h5>First title</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus, similique id! Vel, quibusdam pariatur. Enim sint nulla
                earum sit.
              </p>
            </div>
            <div className={style.bullet}>
              <img src={logo1} alt="" />
              <h5>Second title</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus, similique id! Vel, quibusdam pariatur. Enim sint nulla.
              </p>
            </div>
            <div className={style.bullet}>
              <img src={logo1} alt="" />
              <h5>Dark peace</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus, similique id! Vel, quibusdam pariatur. Enim sint nulla
                earum sit. Dicta.
              </p>
            </div>
          </div>
        </section>
        <CarouselIntro/>
      </Layout>
    </div>
  )
}

export default Home
