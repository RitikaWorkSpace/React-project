import React, { useState } from "react";


const NavbarUser = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
       <div className="absolute right-0 mt-2 hover:bg-[#DB4444] rounded w-[245px]">
       <ul className="bg-gradient-to-r from-[#98729d] to-[#666267] text-white w-full py-[10px] px-[20px] list-none">
       
        <li className="flex items-center  gap-[16px] mb-[13px] cursor-pointer">
          <Link to='/UA'>
          <img src="./nac01user.svg" alt="navbar user icon" className="w-[20px] " />
          <p>Manage My Account</p>
          </Link>
          
         </li>
       
      
         <li className="flex items-center  gap-[16px] mb-[13px] cursor-pointer">
           <img src="./nac02Group.svg" alt="navbar user icon" />
           <p>My Order</p>
         </li>
         <li className="flex items-center  gap-[16px] mb-[13px] cursor-pointer">
           <img src="./nac03icon-cancel.svg" alt="navbar user icon" />
            <p>My Cancellations</p>
         </li>
         <li className="flex items-center  gap-[16px] mb-[13px] cursor-pointer">
           <img src="./nac04Icon-Reviews.svg" alt="navbar user icon" />
          <p> My Reviews</p>

         </li>
         <li className="flex items-center  gap-[16px] cursor-pointer">
           <img src="./nac05Icon-logout.svg" alt="navbar user icon" />
           <p>Logout</p>
         </li>
       </ul>
     </div>
     
      )}
    </div>
  );
};

export default NavbarUser;
