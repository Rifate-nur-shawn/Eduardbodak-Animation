import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-black py-4 sticky top-1  z-50 backdrop-blur ">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center px-15 gap-4 md:gap-0 mt-2 ">
        <div>
          <h2 className="m-0 text-xs font-semibold bg-black text-white py-2 px-4 ">
            EDUARD ✦ BODAK
          </h2>
        </div>
        <div className="flex justify-center items-center w-full md:w-auto text-xs">
          <ul className="flex list-none m-0 p-0 gap-4 md:gap-8">
            <li>
              <a
                href="#service"
                className="bg-black text-white no-underline transition-colors duration-300 font-medium py-2 px-6 rounded-full hover:bg-gray-800 bg-[#f0ece5]  p-2"
              >
                SERVICE
              </a>
            </li>
            <li>
              <a
                href="#prozess"
                className="text-black no-underline transition-colors duration-300 font-medium hover:text-blue-600 hover:drop-shadow-sm bg-[#f0ece5]  p-2"
              >
                PROZESS
              </a>
            </li>
            <li>
              <a
                href="#preis"
                className="text-black no-underline transition-colors duration-300 font-medium hover:text-blue-600 hover:drop-shadow-sm bg-[#f0ece5]  p-2"
              >
                PREIS
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                className="text-black no-underline transition-colors duration-300 font-medium hover:text-blue-600 hover:drop-shadow-sm bg-[#f0ece5] p-2"
              >
                KONTAKT
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="text-black no-underline transition-colors duration-300 font-medium hover:text-blue-600 hover:drop-shadow-sm text-xs p-2  bg-[#f0ece5] width">FEED</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
