import React from "react";
import Locations from "../../components/Locations/Locations";
import AboutCard from "./AboutCard";
import { aboutData } from "../../data/AboutData";

export default function About() {
  const data = aboutData;

  return (
    <main className="main__about">
      <AboutCard {...data[0]} />
      <AboutCard {...data[2]} />
      <Locations />
      <AboutCard {...data[1]} />
    </main>
  );
}
