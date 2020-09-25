import { Link } from "gatsby"
import React from "react"
import ActorLayout from "../../components/Layout/Actor-Layout/actor-layout"

function About() {
  return (
    <ActorLayout>
      <h1>about</h1>
      <Link to='/'>painter home</Link>
    </ActorLayout>
  )
}

export default About
