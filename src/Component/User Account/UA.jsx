import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

const UA = () => {
  const user = getUser();

  return (
    <div>
      <div className="max-w-[1170px] w-[100%] mx-auto flex  flex-col md:flex-row justify-between ">
  {/* breadcrumbs */}
  <div className=" max-w-[1170px] w-[100%] mx-auto mt-[80px] ">
        <Breadcrumbs />
      </div>
      {/* breadcrumbs */}

      {/* User Name */}
      <h1 className="mt-[80px] flex">
              Welcome!<span className="text-[#DB4444] pl-[2px]"> mor_2314</span> 
            </h1>
     
      {/* User Name */}
      </div>
    

      {/* form */}
      <div className="grid grid-cols-1  md:grid-cols-[30%_auto]  max-w-[1170px] w-[100%] mx-auto  mt-[180px] mb-[140px]">
        <div className=" p-[5px] lg:py-[40px] lg:px-[80px]">
          <div className="font-poppins font-[500] text-[16px] leading-[24px] pb-[16px]">
            Manage My Account
          </div>
          <ul className="list-none ml-[15px] opacity-50  ">
            <li className="pb-[8px] hover:text-[#DB4444]">My Profile</li>

            <li className="pb-[8px] hover:text-[#DB4444]">Address Book</li>
            <li className="pb-[8px] hover:text-[#DB4444]">
              My Payment Options
            </li>
          </ul>

          <div className="font-poppins font-[500] text-[16px] leading-[24px] pb-[16px]">
            My Orders
          </div>
          <ul className="list-none ml-[15px] opacity-50  ">
            <li className="pb-[8px] hover:text-[#DB4444]">My Returns</li>
            <li className="pb-[8px] hover:text-[#DB4444]">My Returns</li>
            <li className="pb-[8px] hover:text-[#DB4444]">My Cancellations</li>
          </ul>

          <div className="font-poppins font-[500] text-[16px] leading-[24px]">
            My WishList
          </div>
        </div>
        <div className="shadow-[0_1px_13px_0px_#0000000D] py-[40px] px-[80px]">
          <form action="">
            <div className="font-poppins font-[500] text-[20px] leading-[28px] text-[#DB4444] mb-[16px]">
              Edit Your Profile
            </div>
            <div className="flex flex-col md:flex-row gap-[50px] mb-[24px]">
              <div className="">
                <div className="mb-[8px]">First Name</div>

                <input
                  type="text"
                  placeholder="Ritika"
                  className="bg-[#F5F5F5] p-[5px] lg:w-[300px] "
                />
              </div>

              <div className="">
                <div className="mb-[8px]">Last Name</div>

                <input
                  type="text"
                  placeholder="Singh"
                  className="bg-[#F5F5F5] p-[5px] lg:w-[300px] "
                />
              </div>
            </div>

            <div className="flex  flex-col md:flex-row gap-[50px] mb-[24px]">
              <div className="">
                <div className="mb-[8px]">Email</div>
                <input
                  type="text"
                  placeholder="rimel1111@gmail.com"
                  className="bg-[#F5F5F5] p-[5px] lg:w-[300px]"
                />
              </div>

              <div className="">
                <div className="mb-[8px]">Address</div>
                <input
                  type="text"
                  placeholder="Kingston, 5236, United State"
                  className="bg-[#F5F5F5] p-[5px] lg:w-[300px]"
                />
              </div>
            </div>

            <div className="mb-[24px]">Password Changes</div>
            <div className="mb-[16px] ">
              <input
                type="text"
                placeholder="Current Passwod"
                className="bg-[#F5F5F5] p-[5px] lg:w-[650px]"
              />
            </div>

            <div className="mb-[16px]  ">
              <input
                type="text"
                placeholder="New Passwod"
                className="bg-[#F5F5F5] p-[5px] lg:w-[650px]"
              />
            </div>
            <div className="mb-[16px]">
              <input
                type="text"
                placeholder="Confirm New Passwod"
                className="bg-[#F5F5F5] p-[5px] lg:w-[650px]"
              />
            </div>

            <div className="flex  justify-end ">
              <button className=" py-[16px] mb-[20px]  mr-[15px]">
                Cancel
              </button>

              <button className="bg-[#DB4444] text-white py-0 px-0 mb-0 md:py-[16px] md:px-[48px] md:mb-[24px]">
                Submit Button
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* form */}
    </div>
  );
};

export default UA;
