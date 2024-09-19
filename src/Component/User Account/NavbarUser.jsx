import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { auth } from "../Firebase/firebase";
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Ensure you have this import

const NavbarUser = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown menu
  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle logout
  const handleLogOut = async () => {
    try {
      await auth.signOut();
     
      window.location.href = "/";
    } catch (error) {
    
      console.log("Error logging out", error.message);
    }
  };

  const showConfirmationToast = () => {
    toast(
      <div className=" space-x-4">
        <span>Are you sure you want to log out?</span>
        <div className="flex p-[20px] justify-center gap-[5px]">
        <button
            onClick={() => toast.dismiss()} 
            className="bg-[#DB4444] text-white px-4 py-2 rounded ml-2"
          >
            No
          </button>
          <button
            onClick={() => {
              handleLogOut();
              toast.dismiss(); 
            }}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Yes
          </button>
        
        </div>
      </div>,
      {
        autoClose: false, 
        closeButton: true,
      
      }
    );
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
    <>
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
                <button onClick={showConfirmationToast}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
  
    </>
  );
};

export default NavbarUser;
