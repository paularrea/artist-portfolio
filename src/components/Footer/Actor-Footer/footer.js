import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import InstagramIcon from "@material-ui/icons/Instagram"
import footerStyles from "../footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <div
        className={footerStyles.container}
        style={{ backgroundColor: "#3b3b3b" }}
      >
        <div
          className={footerStyles.content}
          style={{ backgroundColor: "#3b3b3b", color: "white" }}
        >
          <div>
            © {new Date().getFullYear()}, by
            {` `}
            {data.site.siteMetadata.author}
          </div>
          <div className={footerStyles.icons}>
            <div>
              <a
                className={footerStyles.normal_link}
                href="https://www.instagram.com/requesens_/"
                target="blank"
              >
                <InstagramIcon style={{ fill: "white" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
