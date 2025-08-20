import React from "react";
import "./talent.scss";
import InformationBack from "../../assets/shared/desktop/bg-pattern-two-circles.svg";

export default function Talent() {
  return (
    <section className="information">
      <div className="information__img"></div>
      <div className="information__text">
        <h2>World-class talent</h2>
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
        <img
          src={InformationBack}
          alt=""
          className="information__text-background"
        />
      </div>
    </section>
  );
}
