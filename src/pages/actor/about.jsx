import { Link } from "gatsby"
import React from "react"
import ActorLayout from "../../components/Layout/Actor-Layout/actor-layout"
import style from "../../styles/about.module.scss"

function About() {
  return (
    <ActorLayout>
            <div className={style.container}>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            perspiciatis eligendi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            perspiciatis eligendi libero veniam explicabo ratione delectus ipsam
            tempore quo ad nulla animi magnam exercitationem accusantium eos
            tempora, fugit nisi? Omnis! libero veniam explicabo ratione delectus ipsam
            tempore quo ad nulla animi magnam exercitationem accusantium eos
            tempora, fugit nisi?
          </p>
          <p>
            Eligendi libero veniam explicabo ratione delectus ipsam
            tempore quo ad nulla animi magnam exercitationem accusantium eos
            tempora, fugit nisi? Omnis!
          </p>
          <p>
            Magnam exercitationem accusantium eos
            tempora, fugit nisi? Omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            perspiciatis eligendi libero veniam explicabo ratione delectus ipsam
            tempore quo ad nulla animi magnam exercitationem accusantium eos
            tempora, fugit nisi? Omnis!
          </p>
          <Link to="/">Painter site</Link>
        </div>
    </ActorLayout>
  )
}

export default About
