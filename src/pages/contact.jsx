import React from "react"
import emailjs from "emailjs-com"
import styles from "../styles/contact.module.scss"
import Layout from "../components/Layout/layout"
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "gmail",
        "pau-portfolio",
        e.target,
        "user_sWXayM2Q5oM9pReV8U7as"
      )
      .then(
        result => {
          // MySwal.fire({
          //   icon: 'success',
          //   title: 'Your message has been sent',
          //   text: 'I will answer you as soon as possible!',
          // })
          alert("Your message has been sent")
          console.log(result.text)
        },
        error => {
          // MySwal.fire({
          //   icon: 'error',
          //   title: 'Oops...',
          //   text: 'Something went wrong!',
          // })
          alert("Something went wrong...")
          console.log(error.text)
        }
      )
  }

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
