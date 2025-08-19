import React from "react";
import "./contactUs.scss";
import Locations from "../../components/Locations/Locations";

export default function ContactUs() {
  return (
    <div className="contactUs">
      <div className="contactUs__card">
        <div className="contactUs__text">
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className="contactUs__fields">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email Address"/>
          <input type="text" placeholder="Phone"/>
          <textarea name="" id="" placeholder="Your message"></textarea>
          <button>Submit</button>
        </div>
      </div>
      <Locations />
    </div>
  );
}
