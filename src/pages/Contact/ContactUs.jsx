import React from "react";
import "./contactUs.scss";
import Locations from "../../components/Locations/Locations";
import ContactUsCard from "./ContactUsCard";
export default function ContactUs() {
  return (
    <div className="contactUs">
      <ContactUsCard />
      <Locations />
    </div>
  );
}
