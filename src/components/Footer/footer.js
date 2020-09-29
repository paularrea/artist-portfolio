import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import InstagramIcon from "@material-ui/icons/Instagram"
import footerStyles from "./footer.module.scss"

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
      <div className={footerStyles.container}>
        <div className={footerStyles.content}>
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
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
