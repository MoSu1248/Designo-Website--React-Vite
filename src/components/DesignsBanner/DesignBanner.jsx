import React from "react";
import "./designBanner.scss";
import ContactBack from "../../assets/shared/desktop/bg-pattern-call-to-action.svg"

export default function DesignBanner({ title }) {
  return (
    <div className="banner">
      <div className="banner__content">
          <h1>{title}</h1>
          <p>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
      </div>
      <img src={ContactBack} alt="" className="banner__background" />
    </div>
  );
}
