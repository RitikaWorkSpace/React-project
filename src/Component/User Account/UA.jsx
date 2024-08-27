import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useSelector } from "react-redux";





// function getUser(){
//   let user = localStorage.getItem('user');
//   if(user){
//     user = JSON.parse(user);
//   }
//   else{
//     user = null;
//   }
//   return user;
// }


const UA = () => {
//   const  user  = useSelector((state) => state.user.user);
// const userData = user.config.data
// const userDataParse = JSON.parse(userData);
// const actuallData = userDataParse.username




 
// const [user,setUser] = useState(getUser());
const [isListVisibleMA, setIsListVisibleMA] = useState(false);
const [isListVisibleMO, setIsListVisibleMO] = useState(false);


// Function to toggle the list visibility
const handleToggleMyAccount = () => {
  setIsListVisibleMA((prev) => !prev);
};
const handleToggleMyOrder = () => {
  setIsListVisibleMO((prev) => !prev);
};



  return (

    <div>
      <div className="max-w-[1170px] w-[100%] mx-auto flex  flex-col md:flex-row justify-between ">
  {/* breadcrumbs */}

  <div className="max-w-[1170px] w-full mx-auto mt-[80px] flex justify-between items-center">
      {/* Breadcrumbs */}
      <Breadcrumbs />
      
    
     
        <h1 className="  flex items-center">
          
          Welcome! <span className="text-[#DB4444] pl-[2px]">User</span>
         
        </h1>
    
    </div>
      
     
      {/* User Name */}
      </div>
    

      {/* form */}
      <div className="max-w-[1170px] mx-auto mt-[40px] mb-[40px] px-[15px]">
      {/* Form */}
      <div className="grid grid-cols-1 lg:grid-cols-[30%_auto] gap-[20px]">
        <div className="p-[15px] md:py-[40px] md:px-[40px]  rounded-lg ">
          <div
            className="font-poppins font-[500] text-[16px] leading-[24px] pb-[16px] cursor-pointer"
            onClick={handleToggleMyAccount}
          >
            Manage My Account
          </div>
          {isListVisibleMA && (
            <ul className="list-none ml-[15px] space-y-[8px]">
              <li className="pb-[8px] hover:text-[#DB4444] cursor-pointer">My Profile</li>
              <li className="pb-[8px] hover:text-[#DB4444] cursor-pointer">Address Book</li>
              <li className="pb-[8px] hover:text-[#DB4444] cursor-pointer">My Payment Options</li>
            </ul>
          )}

          <div className="mt-[20px]">
            <div
              className="font-poppins font-[500] text-[16px] leading-[24px] pb-[16px] cursor-pointer"
              onClick={handleToggleMyOrder}
            >
              My Orders
            </div>
            {isListVisibleMO && (
              <ul className="list-none ml-[15px] space-y-[8px]">
                <li className="pb-[8px] hover:text-[#DB4444] cursor-pointer">My Returns</li>
                <li className="pb-[8px] hover:text-[#DB4444] cursor-pointer">My Exchanges</li>
                <li className="pb-[8px] hover:text-[#DB4444] cursor-pointer">My Cancellations</li>
              </ul>
            )}
          </div>

          <div className="mt-[20px] font-poppins font-[500] text-[16px] leading-[24px]">
            My WishList
          </div>
        </div>

        <div className="shadow-md bg-white rounded-lg p-[20px] md:p-[40px]">
          <form>
            <div className="font-poppins font-[500] text-[20px] leading-[28px] text-[#DB4444] mb-[16px]">
              Edit Your Profile
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] mb-[24px]">
              <div className="flex-1">
                <div className="mb-[8px]">First Name</div>
                <input
                  type="text"
                  placeholder="Ritika"
                  className="bg-[#F5F5F5] p-[10px] w-full md:w-[300px] rounded-md"
                />
              </div>

              <div className="flex-1">
                <div className="mb-[8px]">Last Name</div>
                <input
                  type="text"
                  placeholder="Singh"
                  className="bg-[#F5F5F5] p-[10px] w-full md:w-[300px] rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-[20px] mb-[24px]">
              <div className="flex-1">
                <div className="mb-[8px]">Email</div>
                <input
                  type="text"
                  placeholder="rimel1111@gmail.com"
                  className="bg-[#F5F5F5] p-[10px] w-full md:w-[300px] rounded-md"
                />
              </div>

              <div className="flex-1">
                <div className="mb-[8px]">Address</div>
                <input
                  type="text"
                  placeholder="Kingston, 5236, United States"
                  className="bg-[#F5F5F5] p-[10px] w-full md:w-[300px] rounded-md"
                />
              </div>
            </div>

            <div className="mb-[24px]">Password Changes</div>
            <div className="mb-[16px]">
              <input
                type="password"
                placeholder="Current Password"
                className="bg-[#F5F5F5] p-[10px] w-full md:w-[650px] rounded-md"
              />
            </div>

            <div className="mb-[16px]">
              <input
                type="password"
                placeholder="New Password"
                className="bg-[#F5F5F5] p-[10px] w-full md:w-[650px] rounded-md"
              />
            </div>

            <div className="mb-[16px]">
              <input
                type="password"
                placeholder="Confirm New Password"
                className="bg-[#F5F5F5] p-[10px] w-full md:w-[650px] rounded-md"
              />
            </div>

            <div className="flex justify-end gap-[10px]">
              <button
                type="button"
                className="py-[10px] px-[20px] bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#DB4444] text-white py-[10px] px-[20px] rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      {/* form */}
    </div>
  );
};

export default UA;