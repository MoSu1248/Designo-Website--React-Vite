import React from 'react'
import "./contactForm.scss";
export default function ContactForm() {


  return (
    <form className="contactUs__form">
        <input
          className="conntactUs__form-input"
          type="text"
          placeholder="Name"
        />
        <input
          className="conntactUs__form-input"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="conntactUs__form-input"
          type="text"
          placeholder="Phone"
        />
        <textarea
          className="conntactUs__form-input text-area"
          name=""
          id=""
          placeholder="Your message"
        ></textarea>
        <button>Submit</button>
      </form>
  )
}
