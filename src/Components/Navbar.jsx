import React from "react";

const Navbar = () => {
  return (
    <nav className=" text-black py-4 sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center px-8 ">
        <div>
          <h2 className="m-0 text-xs font-semibold bg-black text-white py-2 px-4 rounded-none">
            EDUARD ✦ BODAK
          </h2>
        </div>
        <div className="flex justify-center items-center text-xs">
          <ul className="flex list-none m-0 p-0 gap-8">
            <li>
              <a
                href="#service"
                className="bg-black text-white no-underline transition-colors duration-300 font-medium py-2 px-6 rounded-full hover:bg-gray-800"
              >
                SERVICE
              </a>
            </li>
            <li>
              <a
                href="#prozess"
                className="text-black no-underline transition-colors duration-300 font-medium hover:text-gray-600 py-2 px-4"
              >
                PROZESS
              </a>
            </li>
            <li>
              <a
                href="#preis"
                className="text-black no-underline transition-colors duration-300 font-medium hover:text-gray-600 py-2 px-4"
              >
                PREIS
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                className="text-black no-underline transition-colors duration-300 font-medium hover:text-gray-600 py-2 px-4"
              >
                KONTAKT
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="text-black no-underline transition-colors duration-300 font-medium hover:text-gray-600 text-xs py-2 px-4">
            FEED
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
