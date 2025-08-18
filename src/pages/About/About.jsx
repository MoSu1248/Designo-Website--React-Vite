import React from "react";
import "./about.scss";
import HeroBackground from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";

export default function About() {
  return (
    <main className="about">
      <section className="about__hero">
        <div className="about__content">
          <img src={HeroBackground} alt="" className="about__background" />
          <h1>About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <div className="hero__img"></div>
      </section>

      <section className="information">
        <div className="information__img"></div>
        <div className="information__text">
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </section>

      <section className="locations">
        <div className="details__content">
          <div className="details__content-img passion-img">
            <img src="" alt="" />
          </div>
          <h3>Passionate</h3>
          <button>Canada</button>
        </div>
        <div className="details__content">
          <div className="details__content-img passion-img">
            <img src="" alt="" />
          </div>
          <h3>Passionate</h3>
          <button>Canada</button>
        </div>
        <div className="details__content">
          <div className="details__content-img passion-img">
            <img src="" alt="" />
          </div>
          <h3>Passionate</h3>
          <button>Canada</button>
        </div>
      </section>

      <section className="objective">
        <div className="objective__content">
          <h2>The real deal</h2>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
        <div className="objective__img"></div>
      </section>
    </main>
  );
}
