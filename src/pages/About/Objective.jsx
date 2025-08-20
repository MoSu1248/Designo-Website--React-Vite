import React from "react";
import InformationBack from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import "./objective.scss";

export default function Objective() {
  return (
    <section className="objective">
      <div className="objective__content">
        <h2>The real deal</h2>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
        <img
          src={InformationBack}
          alt=""
          className="objective__text-background"
        />
      </div>
      <div className="objective__img"></div>
    </section>
  );
}
