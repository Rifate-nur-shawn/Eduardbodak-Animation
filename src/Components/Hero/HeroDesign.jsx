import React from "react";

function HeroDesign() {
  return (
    <div className="w-full py-6 px-8">
      <div className="mx-auto">
        {/* Hero Design Pattern */}
        <div className="flex justify-between items-center text-black font-medium">
          {/* Left side with 3D2Y */}
          <div className="flex items-center gap-8">
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
            <span className="text-xs font-semibold tracking-wider ml-8">
              3D2Y
            </span>
          </div>

          {/* Center diamond */}
          <div className="flex items-center gap-16">
            <span className="text-xl">✦</span>
            
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
          </div>

          {/* Right side with A113 */}
          <div className="flex items-center gap-8">
            <span className="text-xs font-semibold tracking-wider mr-8">
              A113
            </span>
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroDesign;
