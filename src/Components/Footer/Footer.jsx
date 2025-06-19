import React from "react";
import HeroDesign from "../Hero/HeroDesign";
function Footer() {
  return (
    <>
    <footer className="bg-black text-white w-full py-12 px-6 md:px-10 font-mono">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex flex-col md:flex-row  gap-3 mb-16">
          <div className="flex flex-col md:flex-row justify-between  gap-3">
            <button className="bg-white text-black rounded-md py-2 px-6 text-sm font-bold tracking-widest whitespace-nowrap">
              WIE FUNKTIONIERT'S?
            </button>
            <button className="bg-[#ffe066] text-black rounded-full py-2 px-6 text-sm font-bold tracking-widest flex items-center gap-2">
              <span className="text-lg">↪</span> PROZESS
            </button>
          </div>
        </div>

        {/* Main section - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Left column */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between gap-6 md:gap-10">
              {/* Main links */}
              <div className="flex flex-col gap-2">
                <a
                  href="#service"
                  className="text-xs font-bold hover:text-gray-300"
                >
                  SERVICE
                </a>
                <a
                  href="#prozess"
                  className="text-xs font-bold hover:text-gray-300"
                >
                  PROZESS
                </a>
                <a
                  href="#preis"
                  className="text-xs font-bold hover:text-gray-300"
                >
                  PREIS
                </a>
                <a
                  href="#kontakt"
                  className="text-xs font-bold hover:text-gray-300"
                >
                  KONTAKT
                </a>
              </div>

              {/* External links */}
              <div className="flex flex-col gap-2">
                <a href="#" className="text-xs font-bold hover:text-gray-300">
                  WEBFLOW ↗
                </a>
                <a href="#" className="text-xs font-bold hover:text-gray-300">
                  LINKEDIN ↗
                </a>
                <a href="#" className="text-xs font-bold hover:text-gray-300">
                  X.COM ↗
                </a>
                <a href="#" className="text-xs font-bold hover:text-gray-300">
                  DRIBBBLE ↗
                </a>
                <a href="#" className="text-xs font-bold hover:text-gray-300">
                  INSTAGRAM ↗
                </a>
              </div>

              {/* Legal links */}
              <div className="flex flex-col gap-2">
                <a href="#" className="text-xs font-bold hover:text-gray-300">
                  IMPRESSUM
                </a>
                <a href="#" className="text-xs font-bold hover:text-gray-300">
                  DATENSCHUTZ
                </a>
                <a href="#" className="text-xs font-bold hover:text-gray-300">
                  AGB
                </a>
              </div>
            </div>

            {/* Right column (empty for balance) */}
            <div></div>
          </div>
        </div>
      </div>
      {/* Middle column - 3 link groups */}

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="text-xs font-bold tracking-wide mb-10">
          ©2025 EDUARD BODAK
        </span>
        <div className="flex items-center gap-3 text-xs mt-4 md:mt-0">
          <span>ZURÜCK NACH OBEN</span>
          <span>⇧ ⇧ ⇧</span>
        </div>
      </div>
    </footer>
    <HeroDesign/>
    </>
  );
}

export default Footer;
