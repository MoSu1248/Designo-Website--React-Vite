import React from "react";
import RightArrow from "../../assets/shared/desktop/icon-right-arrow.svg";
import "./projects.scss";
import { NavLink } from "react-router-dom";

export default function Projects() {
  return (
    <section className="projects">
      <NavLink to={"web-designs"} className="card card_web">
        <h2>Web design</h2>
        <p to={"web-designs"}>
          view projects{" "}
          <span>
            <img src={RightArrow} />
          </span>
        </p>
      </NavLink>

      <NavLink to={"app-designs"} className="card card_graphic">
        <h2>App design</h2>
        <p to={"app-designs"}>
          view projects{" "}
          <span>
            <img src={RightArrow} />
          </span>
        </p>
      </NavLink>

      <NavLink className="card card_app" to={"graphic-designs"}>
        <h2>Graphic design</h2>
        <p to={"graphic-designs"}>
          view projects{" "}
          <span>
            <img src={RightArrow} />
          </span>
        </p>
      </NavLink>
    </section>
  );
}
