import React from "react"
import PropTypes from "prop-types"
import ActorHeader from "../../Header/Actor-Header/header"
import ActorFooter from "../../Footer/Actor-Footer/footer"
import '../../../styles/index.scss'

import layoutStyles from "../layout.module.scss"

const ActorLayout = (props) => {

  return (
    <div className={layoutStyles.actor_bg}>
      <div className={layoutStyles.content}>
      <ActorHeader />
        <main className={layoutStyles.pages}>{props.children}</main>
      </div>
      <ActorFooter />
    </div>
  )
}

ActorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ActorLayout
