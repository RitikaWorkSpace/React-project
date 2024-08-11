import React, { useState } from "react";

const TopSection = () => {
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="bg-[#000000]  ">
      <div className="flex w-[100%] max-w-[1170px] m-auto justify-between items-center  py-[10px] ">
        <div className="text-[#FAFAFA] font-[400] font-poppins text-sm leading-[21px] text-center w-full">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-[600] text-[#FAFAFA] font-poppins text-sm leading-[24px] underline underline-offset-1">
            ShopNow
          </span>
        </div>
        <div className="flex-shrink-0 text-right font-poppins">
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="bg-[#000000] text-[#FAFAFA] border-none outline-none"
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="chinese">Chinese</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
