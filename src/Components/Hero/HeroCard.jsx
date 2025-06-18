import React from "react";

function HeroCard() {
  return (
    <div className="py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center gap-6">
          {/* Purple Card - STRATEGY */}
          <div className="relative w-64 h-80 bg-purple-200 rounded-2xl p-6">
            <div className="absolute top-4 left-4">
              <span className="text-xs font-semibold text-black">
                STRATEGY
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <img 
                src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20fa66d47f859adbb70_be6541a0545698a1b015d67bfc0cc149_icon-strategy.svg" 
                alt="Strategy Icon" 
                width="16" 
                height="16" 
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-black flex items-center justify-center">
                   <img 
                src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20fa66d47f859adbb70_be6541a0545698a1b015d67bfc0cc149_icon-strategy.svg" 
                alt="Strategy Icon" 
                width="16" 
                height="16" 
              />
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <img 
                src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20fa66d47f859adbb70_be6541a0545698a1b015d67bfc0cc149_icon-strategy.svg" 
                alt="Strategy Icon" 
                width="17" 
                height="17" 
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-black"></span>
                <span className="text-black">STRATEGY</span>
              </div>
            </div>
          </div>

          {/* Pink Card - DESIGN */}
          <div className="relative w-64 h-80 bg-pink-200 rounded-2xl p-6">
            <div className="absolute top-4 left-4">
              <span className="text-xs font-semibold text-black">DESIGN</span>
            </div>
            <div className="absolute top-4 right-4">
              <img 
                src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20f7daa2d8b2d055b0a_7600e889a3af59f71db716a7c1ded5bc_icon-design.svg" 
                alt="Design Icon" 
                width="16" 
                height="16" 
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-black transform rotate-45 flex items-center justify-center">
                <img 
                  src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20f7daa2d8b2d055b0a_7600e889a3af59f71db716a7c1ded5bc_icon-design.svg" 
                  alt="Design Icon" 
                  width="16" 
                  height="16" 
                  className="transform -rotate-45"
                />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-black">€€€</span>
                <span className="text-black">DESIGN</span>
              </div>
            </div>
          </div>

          {/* Yellow Card - BUILD */}
          <div className="relative w-64 h-80 bg-yellow-200 rounded-2xl p-6">
            <div className="absolute top-4 left-4">
              <span className="text-xs font-semibold text-black">BUILD</span>
            </div>
            <div className="absolute top-4 right-4">
              <img 
                src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20e6c45c550e3c0ff77_cc81fab4339bbc8ebbe9cc70ef28c84e_icon-build.svg" 
                alt="Build Icon" 
                width="16" 
                height="16" 
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-black rounded-lg flex items-center justify-center">
                <img 
                  src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20e6c45c550e3c0ff77_cc81fab4339bbc8ebbe9cc70ef28c84e_icon-build.svg" 
                  alt="Build Icon" 
                  width="16" 
                  height="16" 
                />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-black">€€€€</span>
                <span className="text-black">BUILD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
