import React, { useState } from "react";
import addFriend from "../assets/add-friend.png";
import searchIcon from "../assets/search.png";
import userIcon from "../assets/user.png";
import clockIcon from "../assets/clock.png";
import clockIcon2 from "../assets/clock (1).png";
import verifyIcon from "../assets/verify.png";
import filterIcon from "../assets/filter.png";
import downIcon from "../assets/down-chevron.png";
import viewIcon from "../assets/view.png";
import pencilIcon from "../assets/pencil.png";
import binIcon from "../assets/bin.png";
import A1 from "../assets/A1.jpg";
import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import t4 from "../assets/t4.jpeg";
import t5 from "../assets/t5.jpeg";
function StaffManagement() {
  const [activeFilter, setActiveFilter] = useState("role");
  return (
    <div className="p-3 sm:p-4 md:p-8 bg-[#f9fafb] min-h-screen">
      <div className="flex flex-col gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Staff Management</h1>
          <p className="text-gray-500 text-xs sm:text-sm">
            Manage your high-performance team and their system roles.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:items-center sm:justify-between">
          <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow w-full sm:max-w-xs">
            <img src={searchIcon} className="h-4 w-4 mr-2 opacity-60" />
            <input type="text" placeholder="Search staff..." className="outline-none text-sm w-full"/>
          </div>
          <button className="flex items-center justify-center gap-2 bg-[#A68B5BFF] text-white px-4 py-2 rounded-lg shadow hover:opacity-90 w-full sm:w-auto">
            <img src={addFriend} className="h-4 w-4" />
            Add New Staff
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Total Staff",
             value: "128",
             sub: "+12 this month",
             color: "text-[#C2863FFF]",
            icon: userIcon,
          },
          {
            title: "Active Staff",
            value: "114",
            sub: "92% capacity",
            color: "text-[#C2863FFF]",
            icon: clockIcon,
          },
          {
            title: "Pending Invites",
            value: "09",
            sub: "Waiting response",
            color: "text-[#C2863FFF]",
            icon: clockIcon2,
          },
          {
            title: "Role Types",
            value: "14",
            sub: "5 departments",
            color: "text-[#C2863FFF]",
            icon: verifyIcon,
          },
        ].map((item, i) => (
          <div  key={i}  className="bg-[#A68B5B4D] p-4 rounded-xl flex justify-between items-center" >
            <div>
              <p className="text-gray-500 text-xs sm:text-sm">{item.title}</p>
              <h2 className="text-lg sm:text-xl font-bold">{item.value}</h2>
              <p className={`text-xs ${item.color}`}>{item.sub}</p>
            </div>
            <img src={item.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>
        ))}
      </div>
      <div className="mt-8 bg-white rounded-2xl shadow p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveFilter("role")}
           className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition
             ${activeFilter === "role"
        ? "bg-[#A68B5BFF] text-white"
        : "bg-gray-100 text-black" }`}>
      <img src={filterIcon}
         className={`h-4 w-4 ${
      activeFilter === "role" ? "invert" : "" }`} />
         Filter by Role
  <img src={downIcon} className="h-3 w-3" /></button>
    <button onClick={() => setActiveFilter("status")}
  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition
    ${
      activeFilter === "status"
        ? "bg-[#A68B5BFF] text-white"
        : "bg-gray-100 text-black"}`}>
           Status: All
      <img src={downIcon} className="h-3 w-3" />
           </button>
          </div>
          <p className="text-xs text-gray-400">SHOWING 5 OF 128 RESULTS </p>
        </div>
        <div className="overflow-x-auto">
  <div className="min-w-[900px]">
          <div className="grid grid-cols-6 text-xs font-semibold text-gray-400 border-b pb-2">
            <p>NAME & ID</p>
            <p>DESIGNATION</p>
            <p>EMAIL</p>
            <p>PHONE</p>
            <p>STATUS</p>
            <p className="text-center">MANAGE</p>
          </div>
          {[
            {
              name: "Alexander Wright",
              id: "STF-901",
              role: "Creative Director",
              email: "a.wright@studio.com",
              phone: "+91 98765 43210",
              status: "Active",
              img: A1,
            },
            {
              name: "Elena Rossi",
              id: "STF-902",
              role: "Senior Architect",
              email: "elena.rossi@studio.com",
              phone: "+91 91234 56789",
              status: "Active",
              img: t2,
            },
            {
              name: "Marcus Thorne",
              id: "STF-903",
              role: "Operations Lead",
              email: "m.thorne@studio.com",
              phone: "+91 99887 66554",
              status: "Pending",
              img: t1,
            },
            {
              name: "Sophia Chen",
              id: "STF-904",
              role: "Junior Designer",
              email: "s.chen@studio.com",
              phone: "+91 90909 12345",
              status: "Active",
              img: t4,
            },
            {
              name: "Julian Vance",
              id: "STF-905",
              role: "Technical Specialist",
              email: "j.vance@studio.com",
              phone: "+91 87654 32100",
              status: "Inactive",
              img: t5,
            },
          ].map((item, i) => (
            <div  key={i}
              className="grid grid-cols-6 items-center text-sm border-b py-3">
              <div className="flex items-center gap-3">
                <img src={item.img}
                  className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">ID: {item.id}</p>
                </div>
              </div>
              <p className="bg-gray-100 px-2 py-1 rounded text-xs w-fit">{item.role}</p>
              <p className="text-gray-500">{item.email}</p>
              <p className="text-gray-500">{item.phone}</p>
              <p className={`text-xs px-2 py-1 rounded w-fit ${
                  item.status === "Active"
                    ? "bg-yellow-100 text-[#C2863FFF]"
                    : item.status === "Pending"
                    ? "bg-orange-100 text-[#C2863FFF]"
                    : "bg-gray-200 text-[#C2863FFF]"}`}>
                {item.status}
              </p>
              <div className="flex justify-center gap-3">
                <img src={viewIcon} className="h-4 w-4 cursor-pointer" />
                <img src={pencilIcon} className="h-4 w-4 cursor-pointer" />
                <img src={binIcon} className="h-4 w-4 cursor-pointer" />
              </div>
            </div>
          ))}
            </div>
        </div>  
          <div className="text-center mt-4">
            <button className="text-[#C2863FFF] text-sm font-medium">
              Load More Directory Entries
            </button>
          </div>

        </div>
      </div>
  );
}

export default StaffManagement;