import React, { useState } from "react"; 
import addIcon from "../assets/add.png";
import userIcon from "../assets/user.png";
import clockIcon from "../assets/clock.png";
import infoIcon from "../assets/information (2).png";
import searchIcon from "../assets/search.png";
import filterIcon from "../assets/filter.png";
import arrowRight from "../assets/right-arrow (1).png";
import reportIcon from "../assets/report.png";
import cardIcon from "../assets/credit-card.png";
import supplierImg from "../assets/suppiler.jpeg";
import viewIcon from "../assets/view.png";
import editIcon from "../assets/pencil.png";
import deleteIcon from "../assets/bin.png";
function Supplier() {
    const [activePage, setActivePage] = useState(1); 
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="p-4 md:p-6 bg-[#F9FAFB] min-h-screen">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">    
    <div>
    <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
       Supplier Management
    <img src={userIcon} alt="" className="h-5 w-5" /> </h1>
     <p className="text-gray-500 text-sm">
        Manage all your global and local suppliers in one unified workspace. </p>
        </div>
        <button className="flex items-center gap-2 bg-[#A68B5BFF] text-white px-4 py-2 rounded-lg shadow hover:opacity-90">
         <img src={addIcon} alt="" className="h-4 w-4" />
          Add Supplier
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="p-4 rounded-xl shadow bg-gradient-to-b from-[#F9FAFB] to-[#C2863FFF]">
      <div className="flex justify-between items-center mb-2">
      <p className="text-sm text-gray-600">Total Suppliers</p>
      <img src={userIcon} alt="" className="h-5 w-5" /> </div>
          <h2 className="text-xl font-bold">1,284</h2>
          <p className="text-black  text-xs">+12% vs last month</p>
        </div>
        <div className="p-4 rounded-xl shadow bg-gradient-to-b from-[#F9FAFB] to-[#C2863FFF]">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-600">Active Partners</p>
            <img src={clockIcon} alt="" className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold">942</h2>
          <p className="text-black text-xs">+5% vs last month</p>
        </div>
        <div className="p-4 rounded-xl shadow bg-gradient-to-b from-[#F9FAFB] to-[#C2863FFF]">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-600">Pending Approvals</p>
            <img src={clockIcon} alt="" className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold">36</h2>
          <p className="text-black text-xs">-2% vs last month</p>
        </div>
        <div className="p-4 rounded-xl shadow bg-gradient-to-b from-[#F9FAFB] to-[#C2863FFF]">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-600">Blocked Suppliers</p>
            <img src={infoIcon} alt="" className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold">12</h2>
          <p className="text-black text-xs">-1% vs last month</p>
        </div>
      </div>
      <div className="mt-6 bg-white rounded-xl shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 w-full md:w-1/3">
            <img src={searchIcon} alt="" className="h-4 w-4 opacity-60" />
            <input type="text" placeholder="Search suppliers..."
              className="outline-none text-sm w-full bg-transparent"/>
          </div>
         <div className="flex items-center gap-2 flex-wrap">
  <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-sm bg-white hover:bg-[#A68B5B4D] shadow-sm">
    <img src={filterIcon} alt="filter" className="h-4 w-4 opacity-70" />
    <span className="text-black">Filters</span>
  </button>
  <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-sm bg-white hover:bg-[#A68B5B4D] shadow-sm">
    <span className="text-black">Sort</span>
    <img src={arrowRight} alt="sort" className="h-3 w-3 opacity-60 rotate-90" />
  </button>
       </div>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="w-full text-sm">
            <thead>
      <tr className="text-gray-500 border-b whitespace-nowrap">
    <th className="text-left py-2 px-2 min-w-[160px]">Supplier Name</th>
    <th className="text-left py-2 px-2 min-w-[150px]">Company</th>
    <th className="text-left py-2 px-2 min-w-[180px]">Contact</th>
    <th className="text-left py-2 px-2 min-w-[120px]">Status</th>
    <th className="text-left py-2 px-2 min-w-[160px]">Last Order Date</th>
    <th className="text-left py-2 px-2 min-w-[120px]">Actions</th>
  </tr>
     </thead>
      <tbody>
       {[
         {
           name: "Summit Logistics",
           company: "Summit Global Inc.",
           email: "sarah@summit.com",
           status: "Active",
           date: "Oct 24, 2023",
           },
            {
                  name: "Azure Chemicals",
                  company: "Azure Labs LLC",
                  email: "mark@azure.io",
                  status: "Pending",
                  date: "Oct 20, 2023",
                },
                {
                  name: "Ironclad Forge",
                  company: "Ironclad Manufacturing",
                  email: "ops@ironclad.com",
                  status: "Active",
                  date: "Oct 18, 2023",
                },
                {
                  name: "Stellar Packaging",
                  company: "Stellar Solutions",
                  email: "billing@stellar.com",
                  status: "Blocked",
                  date: "Sep 29, 2023",
                },
                {
                  name: "Green Valley Farms",
                  company: "Eco Agro Ltd",
                  email: "orders@greenvalley.org",
                  status: "Active",
                  date: "Oct 26, 2023",
                },
              ].map((item, i) => (
          <tr key={i} className="border-b hover:bg-[#F9FAFB] transition">
           <td className="py-3">
           <div className="flex items-center gap-2">
           <img src={supplierImg} alt="" className="h-8 w-8 rounded-full" />
            {item.name} </div>
           </td>
           <td>{item.company}</td>
          <td className="text-gray-500">{item.email}</td>
             <td>
            <span className={`px-2 py-1 rounded-full text-xs ${
           item.status === "Active"
             ? "bg-[#0D6CF21A] text-black"
             : item.status === "Pending"
             ? "bg-[#0D6CF21A] text-black"
             : "bg-[#0D6CF21A] text-black" }`}>
             {item.status}  </span> </td>
             <td>{item.date}</td>
             <td>
                  <div className="flex gap-2">
                   <img src={viewIcon} alt="" className="h-4 w-4 cursor-pointer" />
                   <img src={editIcon} alt="" className="h-4 w-4 cursor-pointer" />
                   <img src={deleteIcon} alt="" className="h-4 w-4 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 gap-3">
          <p className="text-sm text-gray-500">
            Showing 1 to 5 of 1,284 suppliers
          </p>
          <div className="flex items-center gap-2 flex-wrap"> 
      <button  className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100"
        onClick={() => activePage > 1 && setActivePage(activePage - 1)} >
        Previous
      </button>
      {pages.map((page) => (
        <button  key={page}  onClick={() => setActivePage(page)}
          className={`px-3 py-1 rounded-lg text-sm border ${
            activePage === page
              ? "bg-[#A68B5BFF] text-white shadow"
              : "hover:bg-gray-100"}`}  >
          {page}
        </button>))}
      <button className="px-3 py-1 border rounded-lg text-sm hover:bg-[#A68B5BFF]"
        onClick={() => activePage < pages.length && setActivePage(activePage + 1)}>
        Next
      </button>
    </div>
        </div>
      </div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex items-start gap-3 p-4 rounded-xl shadow bg-[linear-gradient(180deg,#FFFFFFFF_0%,#FFF49CFF_100%)] hover:shadow-md transition">  
    <div className="p-2 bg-white rounded-lg shadow">
      <img src={reportIcon} alt="" className="h-5 w-5" />
    </div>
    <div>
      <h3 className="font-semibold text-sm md:text-base">
        Predictive Analytics
      </h3>
      <p className="text-xs md:text-sm text-gray-600 mt-1">
        Unlock supply chain insights with AI-driven forecasting based on historical data.
      </p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-4 rounded-xl shadow bg-[linear-gradient(180deg,#FFFFFFFF_0%,#FFF49CFF_100%)] hover:shadow-md transition">   
    <div className="p-2 bg-white rounded-lg shadow">
      <img src={cardIcon} alt="" className="h-5 w-5" />
    </div>
    <div>
      <h3 className="font-semibold text-sm md:text-base">
        Swift Payments
      </h3>
      <p className="text-xs md:text-sm text-gray-600 mt-1">
        Process payments faster for verified suppliers and reduce transaction fees by up to 30%.
      </p>
    </div>
  </div>
</div>
    </div>
  );
}

export default Supplier;