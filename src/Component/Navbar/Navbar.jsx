import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import NavbarUser from "../User Account/NavbarUser";

const Navbar = () => {

  
  // likes
  const likeCount = useSelector((state) => state.likes.count);
  // likes

  // cart
  const cart = useSelector((state) => state.allCart.cartItems);
  // cart

  // navbar
  const [list, setList] = useState(false);

  const handleClick = () => {
    setList(!list);
  };
  // navbar

  // Access authentication state from Redux
  const { user } = useSelector((state) => state.user);

  return (
    <div className="border-b-[1px] ">
      <div className=" max-w-[1170px] w-full mx-auto flex flex-col gap-[20px] md:flex-row justify-between items-center py-4 ">
        {/* Logo */}
        <Link to="/">
          <div className="font-inter font-[700] text-[24px] leading-[24px]  sm:mb-0">
            Exclusive
          </div>
        </Link>

        <nav className={`${list ? "block" : "hidden"} sm:block my-4 sm:my-0`}>
          <ul className="flex flex-col gap-[10px] sm:flex-row justify-evenly space-y-2 sm:space-y-0 sm:space-x-8">
            <li className="font-poppins font-[400] text-[16px] leading-[24px] border-b-[2px] border-transparent ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-poppins font-[400] text-[16px] leading-[24px] border-b-[2px] border-transparent ">
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="font-poppins font-[400] text-[16px] leading-[24px] border-b-[2px] border-transparent ">
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black" : ""
                }
              >
                Contact
              </NavLink>
            </li>
            {!user && (
              <li className="font-poppins font-[400] text-[16px] leading-[24px] border-b-[2px] border-transparent">
                <NavLink
                  to="/Signup"
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-black" : ""
                  }
                >
                  SignUp
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        {/* Search Bar and Icons */}
        <div className="flex flex-col lg:flex-row items-center gap-[10px]">
          <div className="flex items-center gap-[34px] bg-[#F5F5F5] py-[7px] px-[20px] rounded-[5px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="font-poppins font-[400] text-[12px] leading-[24px] text-[#000000] bg-[#F5F5F5] mr-[10px]"
            />
            <img
              src="/NavbarSearchIcon.svg"
              className="max-w-[16px] w-full "
              alt="Search"
            />
          </div>
          <div className="flex items-center space-x-4 ml-[10px]">
            <div className="relative ">
              <span className="flex justify-center items-center absolute text-xs -right-1 -top-1 bg-red-500 text-white  rounded-[50%] h-[15px] w-[15px] p-[9px]">
                {likeCount}
              </span>
              <img
                src="/Wishlist.svg"
                className="ml-4 sm:ml-4"
                alt="Wishlist"
              />
            </div>

            <div>
              <Link to="/CartPage">
                <div className="relative ">
                  <span className="flex justify-center items-center absolute text-xs -right-1 -top-1 bg-red-500 text-white  rounded-[50%] h-[15px] w-[15px] p-[9px]">
                    {cart ? cart.length : 0}
                  </span>
                  <img src="/Cart1.svg" className="ml-4 sm:ml-4" alt="Cart" />
                </div>
              </Link>
            </div>
            {user ? (
              <div>
                <NavbarUser />
              </div>
            ) : (
              null
            )}
            <div className=" sm:hidden ">
              <img
                src="./Mobile Menu.svg"
                alt="Menu"
                className="w-[24px] h-[24px] cursor-pointer"
                onClick={handleClick}
              />
            </div>
            {/* Navigation Links */}
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
