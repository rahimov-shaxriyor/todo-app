import { BiMoon } from "react-icons/bi"; 
import { BiSun } from "react-icons/bi"; 
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm mb-[2.5rem]">
        <div className="container flex justify-between items-center">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">TO-DO</a>
          </div>
          <label className="flex items-center cursor-pointer gap-2 ">
            <BiSun className="text-2xl" />
            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller"
            />
            <BiMoon className="text-2xl"/>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar