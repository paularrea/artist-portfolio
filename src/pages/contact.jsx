import React from "react"
import styles from "../styles/contact.module.scss"
import Layout from "../components/Layout/layout"

export default function Contact() {
  return (
    <Layout>
      <div className={styles.contact}>
        <div className={styles.email_container}>
          <h2>Say hello</h2>
          <p>
            Before any artwork became a part of the collection, it went through
            a process of careful consideration and discussion, and sometimes
            even was an issue of lively dispute. We will be happy if you would
            like to contact us and continue the discussion! We look forward to
            your questions, comments and suggestions.
          </p>
          <a href="">hello@requesens.com</a>
        </div>
      </div>
    </Layout>
  )
}
