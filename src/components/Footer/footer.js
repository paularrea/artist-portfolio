import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import TransitionLink from "gatsby-plugin-transition-link"

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
          <div className={footerStyles.requesens}>
            <h2>REQUESENS</h2>
            <p>Some text displayed here.</p>
            <div  className={footerStyles.copyright}>
              <p>
                © {new Date().getFullYear()}, by
                {` `}
                {data.site.siteMetadata.author}.<br/> All Rights Reserved.
              </p>
            </div>
          </div>
          <div className={footerStyles.contentOne}>
            <div>
              <h3>Explore</h3>
              <ul className={footerStyles.navList}>
                <li>
                  <TransitionLink
                    entry={{
                      delay: 0.3,
                    }}
                    to="/"
                  >
                    Home
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink
                    entry={{
                      delay: 0.3,
                    }}
                    to="/gallery"
                  >
                    Gallery
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink
                    entry={{
                      delay: 0.3,
                    }}
                    to="/video"
                  >
                    Video
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink
                    entry={{
                      delay: 0.3,
                    }}
                    to="/about"
                  >
                    About
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink
                    entry={{
                      delay: 0.3,
                    }}
                    to="/contact"
                  >
                    Contact
                  </TransitionLink>
                </li>
              </ul>
            </div>
            <div>
              <h3>New Business</h3>
              <p>hello@requesens.com</p>
              <p>+34 606 54 50 00</p>
            </div>
          </div>
          <div className={footerStyles.contentTwo}>
            <div>
              <h3>Follow</h3>
              <a
                className={footerStyles.normal_link}
                href="https://www.instagram.com/requesens_/"
                target="blank"
              >
                Instagram
              </a>
              <p>Facebook</p>
              <p>Youtube</p>
            </div>
            <div>
              <h3>Legal</h3>
              <p>Terms</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
