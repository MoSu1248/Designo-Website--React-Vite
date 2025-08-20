import React from "react";
import "./locations.scss";
import Canada from "../../assets/shared/desktop/illustration-canada.svg";
import Australia from "../../assets/shared/desktop/illustration-australia.svg";
import UnitedKingdom from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import { NavLink } from "react-router-dom";

export default function Locations() {
  return (
    <section className="locations">
      <article className="details__content">
        <div className="details__content-img canada">
          <img src={Canada} alt="" />
        </div>
        <h3>Canada</h3>
        <NavLink to={"/location"} className="locations__btn">
          See location
        </NavLink>
      </article>

      <article className="details__content">
        <div className="details__content-img australia">
          <img src={Australia} alt="" />
        </div>
        <h3>Australia</h3>
        <NavLink to={"/location"} className="locations__btn">
          See location
        </NavLink>
      </article>

      <article className="details__content">
        <div className="details__content-img unitedKingdom">
          <img src={UnitedKingdom} alt="" />
        </div>
        <h3>United Kingdom</h3>
        <NavLink to={"/location"} className="locations__btn">
          See location
        </NavLink>
      </article>
    </section>
  );
}
