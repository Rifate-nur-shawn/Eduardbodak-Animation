import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent text-black py-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-4 md:gap-0">
        <div>
          <h2 className="m-0 text-xl font-semibold bg-black text-white py-2 px-4 rounded tracking-wide">
            EDUARD ✦ BODAK
          </h2>
        </div>
        <ul className="flex list-none m-0 p-0 gap-4 md:gap-8">
          <li>
            <a href="#service" className="bg-black text-white no-underline transition-colors duration-300 font-medium py-2 px-6 rounded-full hover:bg-gray-800">
              SERVICE
            </a>
          </li>
          <li>
            <a href="#prozess" className="text-black no-underline transition-colors duration-300 font-medium hover:text-blue-600 hover:drop-shadow-sm">
              PROZESS
            </a>
          </li>
          <li>
            <a href="#preis" className="text-black no-underline transition-colors duration-300 font-medium hover:text-blue-600 hover:drop-shadow-sm">
              PREIS
            </a>
          </li>
          <li>
            <a href="#kontakt" className="text-black no-underline transition-colors duration-300 font-medium hover:text-blue-600 hover:drop-shadow-sm">
              KONTAKT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
