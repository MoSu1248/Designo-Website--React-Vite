import React from "react";
import HeroBackground from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import "./hero.scss";

export default function Hero() {
  return (
    <section className="about__hero">
      <div className="about__content">
        <img src={HeroBackground} alt="" className="about__background" />
        <h1>About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <div className="hero__img"></div>
    </section>
  );
}
