import React from "react";

function HeroHeading() {
  return (
<div className=" py-12 px-8 flex ">
  <h1
    className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-extrabold text-black leading-[0.85] tracking-tighter"
    style={{ fontFamily: "'Inter', sans-serif" }} // Use Inter or similar geometric font
  >
    EINFACHE<br className="sm:hidden" /> WEBSITES
  </h1>
</div>
  );
}

export default HeroHeading;
