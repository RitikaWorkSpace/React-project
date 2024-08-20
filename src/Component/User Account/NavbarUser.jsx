import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/slices/UserLoginSlice';

const NavbarUser = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  // Toggle dropdown menu
  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle logout
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block">
      {/* Icon */}
      <img
        src="./navbarUser.svg"
        className="ml-4 sm:ml-4 cursor-pointer"
        alt="User"
        onClick={handleClick}
      />

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 hover:bg-[#DB4444] rounded w-[245px] z-10"
        >
          <ul className="bg-gradient-to-r from-[#98729d] to-[#666267] text-white w-full py-[10px] px-[20px] list-none">
            <Link to='/UA'>
              <li className="flex items-center gap-[16px] mb-[13px] cursor-pointer">
                <img src="./nac01user.svg" alt="navbar user icon" className="w-[20px]" />
                <p>Manage My Account</p>
              </li>
            </Link>
            <li className="flex items-center gap-[16px] mb-[13px] cursor-pointer">
              <img src="./nac02Group.svg" alt="navbar user icon" />
              <p>My Order</p>
            </li>
            <li className="flex items-center gap-[16px] mb-[13px] cursor-pointer">
              <img src="./nac03icon-cancel.svg" alt="navbar user icon" />
              <p>My Cancellations</p>
            </li>
            <li className="flex items-center gap-[16px] mb-[13px] cursor-pointer">
              <img src="./nac04Icon-Reviews.svg" alt="navbar user icon" />
              <p>My Reviews</p>
            </li>
            <li className="flex items-center gap-[16px] cursor-pointer">
              <img src="./nac05Icon-logout.svg" alt="navbar user icon" />
              <button onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarUser;
