import React from "react";
import Locations from "../../components/Locations/Locations";
import Hero from "./Hero";
import Objective from "./Objective";
import Talent from "./Talent";

export default function About() {
  return (
    <main className="main">
      <Hero />
      <Talent />
      <Locations />
      <Objective />
    </main>
  );
}
