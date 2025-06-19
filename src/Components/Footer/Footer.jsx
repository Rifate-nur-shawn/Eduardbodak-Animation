import React from "react";
import HeroDesign from "../Hero/HeroDesign";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-16 px-6">
        <div className=" max-w-8xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-4 gap-8 mb-16">
            {/* Left Side - Yellow Buttons */}
            <div className="col-span-1 flex items-start gap-4">
              <div className="bg-white text-black px-4 py-2 text-sm font-semibold border border-gray-300">
                WIE FUNKTIONIERT'S?
              </div>
              <div className="bg-yellow-400 text-black px-4 py-2 text-sm font-semibold">
                PROZESS
              </div>
            </div>

            {/* Service Links */}
            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                SERVICE
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm"
                  >
                    PROZESS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm"
                  >
                    PREIS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm"
                  >
                    KONTAKT
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="col-span-1">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-2 text-sm"
                  >
                    WEBFLOW
                    <span className="text-xs">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-2 text-sm"
                  >
                    LINKEDIN
                    <span className="text-xs">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-2 text-sm"
                  >
                    X.COM
                    <span className="text-xs">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-2 text-sm"
                  >
                    DRIBBBLE
                    <span className="text-xs">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-2 text-sm"
                  >
                    INSTAGRAM
                    <span className="text-xs">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="col-span-1">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm"
                  >
                    IMPRESSUM
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm"
                  >
                    DATENSCHUTZ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm"
                  >
                    AGB
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex justify-between items-center">
              {/* Left Side - Copyright, Time, and Y2K */}
              <div className="flex items-center gap-8">
                <div className="text-gray-400 text-sm">©2025 EDUARD BODAK</div>
                <div className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  03:01 KÖLN
                </div>
                <div className="text-gray-400 text-sm">Y2K DESIGN</div>
              </div>

              {/* Center - Navigation Dots */}
              <div className="flex gap-4">
                <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </div>

              {/* Right Side - Back to Top */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm uppercase tracking-wider">
                  ZURÜCK NACH OBEN
                </span>
                <div className="flex gap-1">
                  <span className="text-white">↑</span>
                  <span className="text-white">↑</span>
                  <span className="text-white">↑</span>
                </div>
                <div className="text-gray-400 text-xs">2DFY</div>
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <HeroDesign />
    </>
  );
};

export default Footer;
