import React from "react";
import { Link } from "react-router-dom";
import Login from "../../pages/Login";
import { SearchIcon } from "../icons/icons";

export const navList = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Services",
    path: "/services",
  },
 
  {
    title: "New Models",
    path: "/newModels",
  },
];

const Navbar = () => {
  return (
    <div className="bg-[#134b5f] text-white w-auto  ">
      <nav className="flex flex-col md:flex-row justify-between mx-[20px] h-[70px] items-center">
        <div className="">
          <img
            className="h-[50px] w-[50px]"
            src="https://www.svgrepo.com/show/103353/car.svg"
            alt=""
          />
          <div>
          <input type="text" placeholder="search" />
          {/* <SearchIcon/> */}
          </div>
        </div>
        <div className=" list-none flex flex-row gap-4">
          {Array.isArray(navList) &&
            navList.map((item, index) => {
              return (
                <li key={index} className="cursor-pointer ">
                  <Link to={item?.path}>{item?.title}</Link>
                </li>
              );
            })}
        </div>
        <div>
         <Link to="/login"> <button className="border rounded-full shadow-md px-3 py-1 bg-[#2596be]  text-black hover:bg-[#134b5f]">
             Login 
          </button></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
