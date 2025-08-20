import React from "react";
import Circle from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import Phone from "../../assets/home/desktop/image-hero-phone.png";
import "./hero.scss";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <article className="hero__content">
        <h1 className="hero__content-heading">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="hero__content-text">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <NavLink to={'/about'} className="hero__content-btn">Learn more</NavLink>
      </article>
      <div className="hero__img">
        <img
          src={Circle}
          alt="background circle"
          className="hero__img-background"
        />
        <img src={Phone} alt="" className="hero__img-phone" />
      </div>
    </section>
  );
}
