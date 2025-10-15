import React from 'react'
import './Contact.scss'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h1>Get in Touch</h1>
        <p>For a free estimate, call us or send a short message using the form below.</p>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} placeholder="Tell us about your project" />
          </label>
        </form>
      </div>
    </section>
  )
}

export default Contact
