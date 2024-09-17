import React, { useState } from "react";
import burgerMenu from "../../assets/ic_burgermenu.svg";
import searchIcon from "../../assets/Union.svg";
import notificationIcon from "../../assets/ic_round-notifications.svg";
import chatIcon from "../../assets/bi_chat-left-dots-fill.svg";
import profileImage from "../../assets/Mask Group.png";
import profilepic from "../../assets/Frame 11.svg";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="sticky top-0 bg-white w-full">
      <div className="px-[20px] sticky top-0 py-[9px] flex items-center justify-between">
        <div className="flex items-center space-x-[19px]">
          <button
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img className="lg:hidden" src={burgerMenu} alt="Toggle Menu" />
          </button>

          <div className="flex items-center bg-gray-100 rounded-md px-2 space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none py-1 text-sm"
            />
            <button onClick={handleSearch}>
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-[16px]">
          <img src={notificationIcon} alt="Notifications" />
          <img src={chatIcon} alt="Chat" />
          <img src={profileImage} alt="Profile" />
          <span className="text-[#161E54] hidden lg:block">Admirra John</span>
          <img src={profilepic} alt="Dropdown" />
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#F1F1F1]"></div>
    </div>
  );
};

export default Navbar;
