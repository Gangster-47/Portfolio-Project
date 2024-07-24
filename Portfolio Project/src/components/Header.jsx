import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex items-center py-4 bg-gray-800 px-2 justify-around border-y">
        <div className="flex items-center flex_grow">
          <img className="w-10 h-9 rounded mx-2" src="..\public\pff.jpg" />
          <span className="text-white mx-1 text-3xl">My Portfolio</span>
        </div>
        <div className="flex_grow">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white text-lg px-4 py-2 mr-4 hover:bg-slate-600 hover:rounded-lg ${
                isActive ? "bg-orange-600 rounded-lg border-2" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/skill"
            className={({ isActive }) =>
              `text-white text-lg px-4 py-2 mr-4 hover:bg-slate-600 hover:rounded-lg ${
                isActive ? "bg-orange-600 rounded-lg border-2" : ""
              }`
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `text-white text-lg px-4 py-2 mr-4 hover:bg-slate-600 hover:rounded-lg ${
                isActive ? "bg-orange-600 rounded-lg border-2" : ""
              }`
            }
          >
           Projects
          </NavLink>
        </div>
        <div>
        <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white text-lg px-4 py-2 ml-10 mr-8 hover:bg-slate-600 hover:rounded-lg ${
                isActive ? "bg-pink-600 rounded-lg border-2" : ""
              }`
            }
          >
           Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
