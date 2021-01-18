import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xeqpnqoj" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id=""
                className="form-control"
                placeholder="Who are you ?"
              />
              <input
                type="email"
                name="email"
                placeholder="fill with your email"
                id=""
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="enter your message here :)"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              send message
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
