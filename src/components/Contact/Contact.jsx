import React from "react";
import ContactBack from "../../assets/shared/desktop/bg-pattern-call-to-action.svg"
import "./contact.scss";
export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__content">
        <h2>Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
        <img src={ContactBack} alt="" className="contact__background"/>
      
        <button className="contact__btn-styling">Get in touch</button>
      
    </div>
  );
}
