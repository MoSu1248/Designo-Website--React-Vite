import React from "react";
import "./about.scss";
import HeroBackground from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import InformationBack from "../../assets/shared/desktop/bg-pattern-two-circles.svg"
import Canada from "../../assets/shared/desktop/illustration-canada.svg"
import Australia from "../../assets/shared/desktop/illustration-australia.svg"
import UnitedKingdom from "../../assets/shared/desktop/illustration-united-kingdom.svg"



export default function About() {
  return (
    <main className="main">
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
          <img src={InformationBack} alt="" className="information__text-background"/>
        </div>
      </section>

      <section className="locations">

        <article className="details__content">
          <div className="details__content-img canada">
            <img src={Canada} alt="" />
          </div>
          <h3>Canada</h3>
          <button>See location</button>
        </article>

        <article className="details__content">
          <div className="details__content-img australia">
            <img src={Australia} alt="" />
          </div>
          <h3>Australia</h3>
          <button>See location</button>
        </article>

        <article className="details__content">
          <div className="details__content-img unitedKingdom">
            <img src={UnitedKingdom} alt="" />
          </div>
          <h3>United Kingdom</h3>
          <button>See location</button>
        </article>
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
            <img src={InformationBack} alt="" className="objective__text-background"/>
        </div>
        <div className="objective__img"></div>
      </section>
    </main>
  );
}
