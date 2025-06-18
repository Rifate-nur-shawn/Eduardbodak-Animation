import React from "react";
import HeroHeading from "./HeroHeading";
import HeroDesign from "./HeroDesign";
import HeroText from "./HeroText";
import HeroCard from "./HeroCard";

function Hero() {
  return (
    <div>
      <HeroDesign />
      <HeroHeading />
      <HeroCard />
      <HeroText />
    </div>
  );
}

export default Hero;
