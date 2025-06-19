import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" text-black py-4 sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center px-8 ">
        <div>
          <Link to="/">
            <h2 className="m-0 text-xs font-semibold bg-black text-white py-2 px-4 rounded-none font-narrow">
              EDUARD ✦ BODAK
            </h2>
          </Link>
        </div>{" "}
        <div className="flex justify-center items-center text-xs font-narrow">
          <ul className="flex list-none m-0 p-0 gap-8">
            <li>
              <Link
                to="/service"
                className="bg-black text-white no-underline transition-colors duration-300 font-medium py-2 px-6 rounded-full hover:bg-gray-800"
              >
                SERVICE
              </Link>
            </li>
            <li>
              <Link
                to="/prozess"
                className="text-black no-underline transition-colors duration-300 font-medium hover:text-gray-600 py-2 px-4"
              >
                PROZESS
              </Link>
            </li>
            <li>
              <Link
                to="/preis"
                className="text-black no-underline transition-colors duration-300 font-medium hover:text-gray-600 py-2 px-4"
              >
                PREIS
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                className="text-black no-underline transition-colors duration-300 font-medium hover:text-gray-600 py-2 px-4"
              >
                KONTAKT
              </Link>
            </li>
          </ul>
        </div>{" "}
        <div>
          <button className="text-black no-underline transition-colors duration-300 font-medium hover:text-gray-600 text-xs py-2 px-4 font-narrow">
            FEED
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
