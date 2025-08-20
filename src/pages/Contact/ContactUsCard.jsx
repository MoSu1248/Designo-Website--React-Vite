import React from "react";
import CardBackground from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg"
import "./contactUsCard.scss"
import ContactForm from "./ContactForm";

export default function ContactUsCard() {
  return (
    <div className="contactUs__card">
      <img src={CardBackground} alt="" className="contactUs__card-background" />
      <div className="contactUs__text">
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <ContactForm/>
    </div>
  );
}
