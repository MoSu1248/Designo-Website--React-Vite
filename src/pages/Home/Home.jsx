import Hero from "./Hero";
import Projects from "./Projects";
import Details from "./Details";

import "./home.scss";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Projects />
      <Details />
    </main>
  );
}
