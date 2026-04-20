import React from "react";
import searchIcon from "../assets/search.png";
import notificationIcon from "../assets/notification.png";
import questionIcon from "../assets/question.png";
import userImg from "../assets/sub1.png";
const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md w-full max-w-md">
        <img src={searchIcon} alt="search" className="w-4 h-4 opacity-60" />
        <input type="text"
          placeholder="Search analytics, orders, or users..."
          className="bg-transparent outline-none ml-2 text-sm w-full"/>
      </div>
      <div className="flex items-center gap-4 md:gap-6 ml-4">
        <div className="relative cursor-pointer">
          <img src={notificationIcon} alt="notification" className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-orange-400 w-2.5 h-2.5 rounded-full"></span>
        </div>
        <div className="cursor-pointer">
          <img src={questionIcon} alt="help" className="w-5 h-5 opacity-80" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={userImg}
            alt="user"
            className="w-8 h-8 rounded-full object-cover"/>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium">Alex Sterling</p>
            <p className="text-xs text-gray-500">Admin Access</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;