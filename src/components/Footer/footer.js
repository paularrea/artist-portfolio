import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import footerStyles from "./footer.module.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import testimo from "../../images/gifs/testimo.gif"
import requesens from "../../images/requesensLletres.png"
import MediaQuery from "react-responsive"

import { navigate } from "gatsby"

const Footer = () => {
  const changeBg = () => {
    localStorage.setItem("theme", "light")
    navigate("/gallery")
  }

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
          <Link to='/'>
            <div className={footerStyles.requesensLogo}>
              <img src={requesens} alt="testimo logo" />
            </div>
          </Link>
            <div className={footerStyles.tqContainer}>
              <img src={testimo} alt="testimo logo" />
            </div>
            <div className={footerStyles.copyright}>
              <p>
                © {new Date().getFullYear()}, by
                {` `}
                {data.site.siteMetadata.author}.<br /> All Rights Reserved.
              </p>
            </div>
          </div>
          <MediaQuery minWidth={750}>
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
                    <button onClick={() => changeBg()}>Gallery</button>
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
                <h3>Contact me</h3>
                <a
                  href="mailto:hello@paurequesens.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@paurequesens.com
                </a>{" "}
                <a href="tel:+34 606 54 50 00">+34 606 54 50 00</a>
              </div>{" "}
              <div>
                <h3>Follow</h3>
                <a
                  className={footerStyles.normal_link}
                  href="https://www.instagram.com/requesens_/"
                  target="blank"
                >
                  Instagram
                </a>
                <a
                  className={footerStyles.normal_link}
                  href="https://www.youtube.com/user/paurequesens"
                  target="blank"
                >
                  Youtube
                </a>
                <a
                  className={footerStyles.normal_link}
                  href="https://www.tiktok.com/@paurequesens?"
                  target="blank"
                >
                  TikTok
                </a>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={750}>
            <div>
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
                  <h3>Follow</h3>
                  <a
                    className={footerStyles.normal_link}
                    href="https://www.instagram.com/requesens_/"
                    target="blank"
                  >
                    Instagram
                  </a>
                  <a
                    className={footerStyles.normal_link}
                    href="https://www.youtube.com/user/paurequesens"
                    target="blank"
                  >
                    Youtube
                  </a>
                  <a
                  className={footerStyles.normal_link}
                  href="https://www.tiktok.com/@paurequesens?"
                  target="blank"
                >
                  TikTok
                </a>
                </div>
              </div>
              <div className={footerStyles.contact}>
                <h3>Contact me</h3>
                <a
                  href="mailto:hello@paurequesens.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@paurequesens.com
                </a>{" "}
                <br />
                <a href="tel:+34 606 54 50 00">+34 606 54 50 00</a>
              </div>{" "}
            </div>
          </MediaQuery>
        </div>
      </div>
    </footer>
  )
}

export default Footer
