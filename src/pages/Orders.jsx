import React, { useState } from "react";
import searchIcon from "../assets/magnifying-glass.png";
import downloadIcon from "../assets/download.png";
import arrowRight from "../assets/arrow-right.png";
import clockIcon from "../assets/clock.png";
import parcelIcon from "../assets/parcel.png";
import rightArrowSmall from "../assets/right-arrow (1).png";
import eleanorImg from "../assets/a1.png";
import julianImg from "../assets/A1.jpg";
import sophiaImg from "../assets/t2.jpeg";
import marcusImg from "../assets/t3.jpeg";
import isabellaImg from "../assets/user1.png";
import calendarIcon from "../assets/calendar.png";
import menuDots from "../assets/three-dot-menu.png";
function Orders() {
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const [activeTab, setActiveTab] = useState("Filter");
  const [activePage, setActivePage] = useState(1);
  const formatCurrency = (amount) => {
    return "₹" + amount.toLocaleString("en-IN"); };
  const handleExport = () => {
    setToast("Data exported successfully ");
    setTimeout(() => setToast(""), 2500);};
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {toast && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-50 text-sm">
          {toast} </div> )}
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Orders</h1>
          <p className="text-gray-500 text-sm">
            Manage and track your boutique orders </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center bg-white border rounded-lg px-3 py-1 shadow-sm">
        <img src={searchIcon} className="w-4 opacity-60" />
        <input type="text" placeholder="Search orders..." value={search} onChange={(e) => setSearch(e.target.value)}
         className="outline-none px-2 text-sm" /></div>
          <button onClick={handleExport}
            className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:opacity-90" >
            <img src={downloadIcon} className="w-4" />
            Export Data
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">TOTAL REVENUE</p>
            <img src={arrowRight} className="w-5 opacity-70" /> </div>
          <h2 className="text-xl font-bold mt-2">{formatCurrency(45280)}</h2>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
            <img src={rightArrowSmall} className="w-3" />
            12.5% vs last month </p> </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">ACTIVE ORDERS</p>
            <img src={clockIcon} className="w-5 opacity-70" /> </div>
          <h2 className="text-xl font-bold mt-2">128</h2>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
            <img src={rightArrowSmall} className="w-3" />
            4.2% vs last month</p> </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">DELIVERED</p>
            <img src={clockIcon} className="w-5 opacity-70" />  </div>
          <h2 className="text-xl font-bold mt-2">842</h2>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
            <img src={rightArrowSmall} className="w-3" />
            8.1% vs last month </p></div>
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">AVG. VALUE</p>
            <img src={parcelIcon} className="w-5 opacity-70" /> </div>
          <h2 className="text-xl font-bold mt-2">{formatCurrency(850)}</h2>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
            <img src={rightArrowSmall} className="w-3" />
            2.4% vs last month</p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-5">      
      <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
      <div className="flex flex-wrap gap-2">
      <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-lg">
      <img src={searchIcon} className="w-4 opacity-60" />
      <input className="bg-transparent outline-none px-2 text-sm" placeholder="Search orders." />
      </div>
      <button onClick={() => setActiveTab("Filter")}
       className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
       activeTab === "Filter"
       ? "bg-yellow-500 text-black"
       : "bg-gray-100 text-gray-600"}`} >
      <img src={arrowRight} className="w-4" />
              Filter </button>
            <button  onClick={() => setActiveTab("Date")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
                activeTab === "Date"
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-100 text-gray-600" }`} >
              <img src={calendarIcon} className="w-4" />
              Date </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm table-fixed">
            <thead className="text-gray-500 text-left border-b">
          <tr>
          <th className="py-3 w-[90px]">Order ID</th>
          <th className="w-[140px]">Customer</th>
          <th className="w-[180px]">Product</th>
          <th className="w-[110px]">Date</th>
          <th className="w-[110px]">Amount</th>
          <th className="w-[100px]">Status</th>
          <th className="w-[60px]">Actions</th> </tr>
           </thead>
            <tbody className="text-gray-700">
            <tr className="border-b hover:bg-gray-50">
            <td className="py-3">GC-9284</td>
            <td>
             <div className="flex items-center gap-2 min-w-0">
            <img src={eleanorImg}
         className="w-8 h-8 rounded-full flex-shrink-0" />
         <p className="truncate">Eleanor Vance</p>
         </div>
           </td>
            <td>
            <p className="line-clamp-2">Gilded Monogram Stationery Set </p>
            </td>
            <td className="text-gray-500 text-xs">Oct 24, 2023</td>
            <td className="font-medium">₹1,250.00</td>
            <td className="text-black text-sm">Delivered</td>
            <td><img src={menuDots} className="w-4 cursor-pointer" /></td>
             </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3">GC-9285</td>
                <td className="flex items-center gap-2">
                  <img src={julianImg} className="w-8 h-8 rounded-full" />
                  Julian Thorne</td>
                <td>Bespoke Wax Seal Kit (Gold Leaf)</td>
                <td className="text-gray-500 text-xs">Oct 24, 2023</td>
                <td className="font-medium">₹420.00</td>
                <td className="text-black text-sm">Pending</td>
                <td><img src={menuDots} className="w-4 cursor-pointer" /></td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3">GC-9286</td>
                <td className="flex items-center gap-2">
                  <img src={sophiaImg} className="w-8 h-8 rounded-full" />
                  Sophia Chen
                </td>
                <td>Hand-Bound Leather Artist Journal</td>
                <td className="text-gray-500 text-xs">Oct 23, 2023</td>
                <td className="font-medium">₹850.00</td>
                <td className="text-black text-sm">Delivered</td>
                <td><img src={menuDots} className="w-4 cursor-pointer" /></td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3">GC-9287</td>
                <td className="flex items-center gap-2">
                  <img src={marcusImg} className="w-8 h-8 rounded-full" />
                  Marcus Sterling
                </td>
                <td>Limited Edition Platinum Fountain Pen</td>
                <td className="text-gray-500 text-xs">Oct 22, 2023</td>
                <td className="font-medium">₹3,400.00</td>
                <td className="text-black text-sm">Cancelled</td>
                <td><img src={menuDots} className="w-4 cursor-pointer" /></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3">GC-9288</td>
                <td className="flex items-center gap-2">
                  <img src={isabellaImg} className="w-8 h-8 rounded-full" />
                  Isabella Rossi
                </td>
                <td>Velvet Gift Wrapping Master Collection</td>
                <td className="text-gray-500 text-xs">Oct 22, 2023</td>
                <td className="font-medium">₹680.00</td>
                <td className="text-black text-sm">Pending</td>
                <td><img src={menuDots} className="w-4 cursor-pointer" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-4 text-sm text-gray-500 gap-3">
          <p>Showing 1 to 5 of 1,240 results</p>
          <div className="flex gap-2 items-center">
            {[1,2,3,4,5].map((num) => (
          <button key={num} onClick={() => setActivePage(num)}
           className={`px-3 py-1 rounded ${activePage === num
              ? "bg-yellow-500 text-black"
              : "bg-gray-200"}`} >
                {num} </button>
            ))}
          </div> </div> </div>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6">
             {/* CARD 1 */}
         <div className="p-5 rounded-xl border bg-gradient-to-r from-[#fff7e6] to-[#fff1cc] hover:shadow-md transition">
    <p className="text-xs text-gray-500 mb-1">Logistics Active</p>
    <h3 className="font-semibold text-lg text-gray-800">
      Order Optimization Active
    </h3>
    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
      Your boutique's shipping routes have been automatically recalibrated for
      the Q4 holiday rush. Courier performance is currently 14% higher than the
      industry baseline.
    </p>
    <button className="flex items-center gap-1 mt-3 text-sm font-medium text-yellow-700 hover:underline">
      View Detailed Forecast
      <img src={rightArrowSmall} className="w-3" />
    </button>
  </div>
  {/* CARD 2 */}
  <div className="p-5 rounded-xl border bg-gradient-to-r from-[#fff7e6] to-[#fff1cc] hover:shadow-md transition">
    <p className="text-xs text-gray-500 mb-1">Financial AI</p>
    <h3 className="font-semibold text-lg text-gray-800">
      Q4 Revenue Forecast
    </h3>
    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
      Based on current order velocity for bespoke monogrammed collections, we
      anticipate a 22% increase in net revenue year-end.
    </p>
    <button className="flex items-center gap-1 mt-3 text-sm font-medium text-yellow-700 hover:underline">
      View Detailed Forecast
      <img src={rightArrowSmall} className="w-3" />
    </button>
  </div>
</div>
    </div>
  );
}

export default Orders;