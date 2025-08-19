import React from "react";
import "./location.scss";
import { info } from "../../data/Destinations";
import InformationBack from "../../assets/shared/desktop/bg-pattern-two-circles.svg";

export default function Locations() {
  return (
    <div className="location">
      <div className="location__cards">
        {info[0].destinations.map((destination, index) => {
          return (
            <div className="location__card" key={index}>
              <div className="location__info">
                <h2>{destination.name}</h2>
                <div className="location__info-container">
                  <div className="location__info_text">
                    <p className="location__header">
                      {destination.location.office}
                    </p>
                    <p>{destination.location.address}</p>
                    <p>{destination.location.area}</p>
                  </div>
                  <div className="location__info_text">
                    <p className="location__header">Contact</p>
                    <p>{destination.contact.phone}</p>
                    <p>{destination.contact.email}</p>
                  </div>
                </div>
                <img
                  src={InformationBack}
                  alt=""
                  className="location__text-background"
                />
              </div>
              <div className="location__img-container">
                <img src={destination.url} alt="" className="location__img" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
