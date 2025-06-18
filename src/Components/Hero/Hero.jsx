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
      <div className="flex flex-col md:flex-row justify-center  py-8">
        <HeroCard
          bgColor="bg-purple-200"
          title="STRATEGY"
          iconUrl="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20fa66d47f859adbb70_be6541a0545698a1b015d67bfc0cc149_icon-strategy.svg"
          bottomLabel="DETAILS"
          leftIcon={
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          }
          rightIcon={
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          }
        />
        <HeroCard
          bgColor="bg-pink-200"
          title="DESIGN"
          iconUrl="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20f7daa2d8b2d055b0a_7600e889a3af59f71db716a7c1ded5bc_icon-design.svg"
          bottomLabel="PROZESS"
          leftIcon={
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          }
          rightIcon={
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          }

        />
        <HeroCard
          bgColor="bg-yellow-200"
          title="BUILD"
          iconUrl="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20e6c45c550e3c0ff77_cc81fab4339bbc8ebbe9cc70ef28c84e_icon-build.svg"
          bottomLabel="STEPS"
          leftIcon={
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                stroke="black"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          }
          rightIcon={
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          }
        
        />
      </div>
      <HeroText />
    </div>
  );
}

export default Hero;
