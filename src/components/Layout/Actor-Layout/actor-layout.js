import React from "react"
import PropTypes from "prop-types"
import ActorHeader from "../../Header/Actor-Header/header"
import Footer from "../../Footer/footer"
import '../../../styles/index.scss'

import layoutStyles from "../layout.module.scss"

const ActorLayout = (props) => {

  return (
    <div className={layoutStyles.actor_bg}>
      <div className={layoutStyles.content}>
      <ActorHeader />
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  )
}

ActorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ActorLayout
