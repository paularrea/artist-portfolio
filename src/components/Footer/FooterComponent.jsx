import React from "react"
import "./footer.css"

function FooterComponent() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-location">
          <div>
            <div className="contact-footer-wrapper">
              <p>Gallery</p>
              <p>Video</p>
            </div>
            <div className="contact-footer-wrapper">
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className="contact-social-media-wrapper">
          <div>
            <div className="media-footer-wrapper">
              <p>LinkedIn</p>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Twitter</p>
            </div>
          </div>

          <div className="privacy-cookies-footer-wrapper">
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent
