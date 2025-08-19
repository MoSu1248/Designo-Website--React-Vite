import React from "react";
import "./home.scss";
import Circle from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import Phone from "../../assets/home/desktop/image-hero-phone.png";
import RightArrow from "../../assets/shared/desktop/icon-right-arrow.svg";
import Passionate__img from "../../assets/home/desktop/illustration-passionate.svg";
import Resourceful__img from "../../assets/home/desktop/illustration-resourceful.svg";
import Friendly__img from "../../assets/home/desktop/illustration-friendly.svg";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <article className="hero__content">
          <h1 className="hero__content-heading">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="hero__content-text">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="hero__content-btn">Learn more</button>
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

      <section className="projects">
        <article className="card card_web">
          <h2>Web design</h2>
          <NavLink to={"web-designs"}>
            view projects{" "}
            <span>
              <img src={RightArrow} />
            </span>
          </NavLink>
        </article>

        <article className="card card_graphic">
          <h2>App design</h2>
          <NavLink to={"app-designs"}>
            view projects{" "}
            <span>
              <img src={RightArrow} />
            </span>
          </NavLink>
        </article>

        <article className="card card_app">
          <h2>Graphic design</h2>
          <NavLink to={"graphic-designs"}>
            view projects{" "}
            <span>
              <img src={RightArrow} />
            </span>
          </NavLink>
        </article>
      </section>

      <section className="details">
        <div className="details__content">
          <div className="details__content-img passion-img">
            <img src={Passionate__img} alt="" />
          </div>
          <h3>Passionate</h3>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>

        <div className="details__content">
          <div className="details__content-img resourceful-img">
            <img src={Resourceful__img} alt="" />
          </div>
          <h3>Resourceful</h3>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>

        <div className="details__content">
          <div className="details__content-img friendly-img">
            <img src={Friendly__img} alt="" />
          </div>
          <h3>Friendly</h3>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </section>
    </main>
  );
}
