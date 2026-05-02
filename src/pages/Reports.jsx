import React, { useState } from "react";
import searchIcon from "../assets/search.png";
import downloadIcon from "../assets/report.png";
import arrowDown from "../assets/down-chevron.png";
import clockIcon from "../assets/clock (1).png";
import infoIcon from "../assets/information (2).png";
import boxIcon from "../assets/box.png";
import arrowRight from "../assets/arrow-right.png";
import usersIcon from "../assets/multiple-users-silhouette.png";
import uptrend from "../assets/uptrend.png";
import decrease from "../assets/decrease.png";
import diagram from "../assets/diagram.png";
import userIcon2 from "../assets/user.png";
import handIcon from "../assets/hand.png";
import filterIcon from "../assets/filter.png";
import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import t3 from "../assets/t3.jpeg";
function Reports() {
  const [activeFilter, setActiveFilter] = useState("Weekly");
  const [downloadActive, setDownloadActive] = useState(false);
  return (
    <div className="min-h-screen p-4 md:p-6 bg-[#F9FAFB]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6"> 
        <h1 className="text-xl md:text-2xl font-semibold">Reports Dashboard</h1>
        <div className="flex flex-col lg:flex-row gap-3 w-full lg:w-auto">
          <div className="flex items-center bg-white rounded-lg px-3 py-2 w-full lg:w-80 shadow-sm">
            <img src={searchIcon} className="w-4 h-4 mr-2" />
            <input  type="text"  placeholder="Search reports or products..."
              className="outline-none text-sm w-full bg-transparent" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["Today", "Weekly", "Monthly"].map((item) => (
              <button key={item}
                 onClick={() => setActiveFilter(item)}
                className={`px-3 py-2 rounded-lg text-sm transition ${
                  activeFilter === item
                    ? "bg-[#A68B5BFF] text-white"
                    : "bg-white shadow" }`} >
                {item}
              </button>))}
          </div>
          <button onClick={() => setDownloadActive(!downloadActive)}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm transition ${
              downloadActive
                ? "bg-[#A68B5BFF] text-white"
                : "bg-white shadow"  }`}  >
            <img src={downloadIcon} className="w-4 h-4" />
            Download
            <img src={arrowDown} className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-[linear-gradient(180deg,#F9FAFBFF_0%,#C2863FFF_100%)] p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-medium">DAILY TOTAL SALES</p>
            <img src={clockIcon} className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold">₹42,300</h2>
          <p className="text-xs mt-1">↑ 12% | Target: ₹50,000</p>
        </div>
        <div className="bg-[linear-gradient(180deg,#F9FAFBFF_0%,#C2863FFF_100%)] p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-medium">TOTAL ORDERS</p>
            <img src={clockIcon} className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold">142</h2>
          <p className="text-xs mt-1">Avg Ticket: ₹298</p>
        </div>
        <div className="bg-[linear-gradient(180deg,#F9FAFBFF_0%,#C2863FFF_100%)] p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-medium">STOCK VALUATION</p>
            <img src={boxIcon} className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold">₹8.45L</h2>
          <p className="text-xs mt-1">Cost: ₹5.2L | Margin: 38%</p>
        </div>
        <div className="bg-[linear-gradient(180deg,#F9FAFBFF_0%,#C2863FFF_100%)] p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-medium">CUSTOMER REPEAT RATE</p>
            <img src={infoIcon} className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold">32.4%</h2>
          <p className="text-xs mt-1">Repeat Orders: 84</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow">
          <div className="flex justify-between items-center p-4 border-b bg-[#A68B5B4D] rounded-t-xl">
            <div className="flex items-center gap-2">
              <img src={arrowRight} className="w-4 h-4" />
              <p className="font-medium">Daily Sales Report</p>
            </div>
            <p className="text-sm text-black cursor-pointer">View Details</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 text-center p-4 border-b text-sm gap-2">
            <div>
              <p className="text-black">Total Revenue</p>
              <p className="font-semibold text-[#C2863FFF]">₹42,300</p>
            </div>
            <div>
              <p className="text-black">Number of Orders</p>
              <p className="font-semibold">142</p>
            </div>
            <div>
              <p className="text-black">Average Order Value</p>
              <p className="font-semibold">₹298</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead className="text-gray-500">
                <tr className="text-left">
                  <th className="p-3">Date</th>
                  <th>Orders</th>
                  <th>Revenue</th>
                  <th>Payment Split</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["2023-10-24", "142", "₹42,300", "Cash: 30%, UPI: 70%"],
                  ["2023-10-23", "128", "₹38,150", "Cash: 45%, UPI: 55%"],
                  ["2023-10-22", "165", "₹48,900", "Cash: 20%, UPI: 80%"],
                  ["2023-10-21", "110", "₹31,200", "Cash: 50%, UPI: 50%"],
                  ["2023-10-20", "134", "₹39,800", "Cash: 35%, UPI: 65%"],
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3">{row[0]}</td>
                    <td>{row[1]}</td>
                    <td className="text-[#C2863FFF] font-medium">{row[2]}</td>
                    <td className="text-gray-500">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex justify-between items-center mb-4 bg-[#C2863FFF] p-2 rounded-lg">
            <div className="flex items-center gap-2">
              <img src={usersIcon} className="w-4 h-4" />
              <p className="font-medium">Loyalty & Repeat Rate</p>
            </div>
            <p className="text-sm text-gray-500 cursor-pointer">View Details</p>
          </div>
          <div className="rounded-xl p-4 text-center mb-4 bg-[linear-gradient(180deg,#FFFFFFFF_0%,#FFF49CFF_100%)]">
            <p className="text-xs text-gray-500 mb-1">REPEAT RATE</p>
            <h2 className="text-2xl font-bold">32.4%</h2>
            <p className="text-xs text-red-500 mt-1">2.4% vs last month</p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between bg-gray-100 p-3 rounded-lg">
              <p>Returning Customers</p>
              <p className="font-medium">1,240</p>
            </div>
            <div className="flex justify-between bg-gray-100 p-3 rounded-lg">
              <p>Total Repeat Orders</p>
              <p className="font-medium text-black">4,850</p>
            </div>
            <div className="flex justify-between bg-gray-100 p-3 rounded-lg">
              <p>Retention Goal</p>
              <p className="font-medium">40%</p>
            </div>
          </div>
        </div>
      </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
  <div className="bg-white rounded-xl shadow">
<div className="flex justify-between items-center p-4 bg-[ linear-gradient(180deg, #FFFFFFFF 0%, #FFF49CFF 100%)] rounded-t-xl">
  <div className="flex items-center gap-2">
    <img src={uptrend} className="w-4 h-4" />
    <p className="font-medium">Fast Moving Items</p>
  </div>
  <p className="text-sm text-black cursor-pointer hover:underline">
    View Details
  </p>
</div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-[500px]">
        <thead className="text-gray-500">
          <tr className="text-left">
            <th className="p-3">Product Name</th>
            <th>Category</th>
            <th>Qty Sold</th>
            <th>Velocity</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Pilot V5 Hi-Tecpoint (Blue)", "Pens", "450", "High"],
            ["Classmate Octane Gel Pen", "Pens", "380", "Steady"],
            ["JK Copier Paper A4 75GSM", "Paper", "310", "High"],
            ["Camel Artist Watercolors", "Art", "245", "Seasonal"],
            ["Faber-Castell Erasers (Pack 5)", "Misc", "220", "Steady"],
          ].map((item, i) => (
            <tr key={i} className="border-t hover:bg-gray-50 transition">
              <td className="p-3">{item[0]}</td>
              <td>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                  {item[1]}
                </span>
              </td>
              <td className="text-[#C2863FFF] font-medium">{item[2]}</td>
              <td>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    item[3] === "High"
                      ? "bg-[#A68B5B4D] text-black"
                      : item[3] === "Steady"
                      ? "bg-[#A68B5B4D] text-black"
                      : "bg-[#A68B5B4D] text-black"
                  }`}>
                  {item[3]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  <div className="bg-white rounded-xl shadow">
  <div className="flex justify-between items-center p-4 bg-[ linear-gradient(180deg, #FFFFFFFF 0%, #FFF49CFF 100%)] rounded-t-xl border-b">
  <div className="flex items-center gap-2">
    <img src={decrease} className="w-4 h-4" />
    <p className="font-medium">Slow Moving Items</p>
  </div>
  <p className="text-sm text-black font-medium cursor-pointer hover:underline">
    View Details
  </p>
</div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-[500px]">
        <thead className="text-gray-500">
          <tr className="text-left">
            <th className="p-3">Product Name</th>
            <th>Stock</th>
            <th>Last Sale</th>
            <th>Aging</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Parker Quink Ink (Red)", "15", "45 days ago", "90+ Days"],
            ["Casio Scientific Calculator", "4", "32 days ago", "60+ Days"],
            ["Acrylic Paint Set (Large)", "8", "28 days ago", "45+ Days"],
            ["Bond Paper Ream 100gsm", "20", "22 days ago", "45+ Days"],
            ["Geometry Set Premium", "12", "15 days ago", "30+ Days"],
          ].map((item, i) => (
            <tr key={i} className="border-t hover:bg-gray-50 transition">
              <td className="p-3">{item[0]}</td>
              <td>{item[1]}</td>
              <td className="text-gray-500">{item[2]}</td>
              <td>
                <span className="text-red-500 font-medium">
                  {item[3]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
<div className="bg-white rounded-xl shadow mt-6">
<div className="flex justify-between items-center p-4 bg-[linear-gradient(180deg,#F9FAFBFF_0%,#C2863FFF_100%)] rounded-t-xl">
  <div className="flex items-center gap-2">
    <img src={infoIcon} className="w-4 h-4" />
    <p className="font-medium">Low Stock Alerts</p>
  </div>
  <p className="text-sm text-black  cursor-pointer hover:underline">
    View Details</p>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full text-sm min-w-[600px]">  
      <thead className="bg-[#A68B5B4D] text-gray-600">
        <tr className="text-left">
          <th className="p-3">Product Description</th>
          <th>Current Stock</th>
          <th>Min. Threshold</th>
          <th>Gap</th>
          <th>Status Action</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Staedtler Mars Lumograph", "5 units", "20 units", "Needs 15 more", "Critical"],
          ["Apsara Platinum Pencils", "12 units", "50 units", "Needs 38 more", "Low"],
          ["Cello Butterfly Blue", "15 units", "100 units", "Needs 85 more", "Critical"],
          ["Doms Drawing Book 20pg", "8 units", "30 units", "Needs 22 more", "Low"],
          ["Stick-On Notes (3x3)", "10 units", "40 units", "Needs 30 more", "Low"],
        ].map((item, i) => (
          <tr key={i} className="border-t hover:bg-gray-50 transition">
            <td className="p-3 flex items-center gap-2">
              {(item[0].includes("Staedtler") || item[0].includes("Cello")) && (
                <img src={infoIcon} className="w-4 h-4" />
              )}
              {item[0]}
            </td>
            <td className="text-red-500 font-medium">
              {item[1]}</td>
            <td className="text-gray-500">
              {item[2]}
            </td>
            <td className="text-[#161A1DFF] text-xs font-medium">
              {item[3]}
            </td>
            <td>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    item[4] === "Critical"
                      ? "bg-red-100 text-black"
                      : "bg-yellow-100 text-black"
                  }`} >
                  {item[4] === "Critical" ? "Critical" : "Low Stock"}
                </span>
                <button className="text-xs px-2 py-1 border rounded hover:bg-gray-100">
                  Restock Now
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
  <div className="space-y-4">
    <div className="bg-white rounded-xl shadow-sm border p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <img src={diagram} className="w-4 h-4 opacity-70" />
          <p className="font-medium text-sm md:text-base">Stock Valuation</p>
        </div>
        <p className="text-xs md:text-sm text-[#C2863FFF] cursor-pointer hover:underline">
          View Details
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="bg-[#C2863FFF] text-black p-4 rounded-lg">
          <p className="text-xs opacity-80">TOTAL VALUATION</p>
          <h2 className="font-bold text-xl">₹8,45,200</h2>
        </div>
        <div className="bg-[#C2863FFF] text-white p-4 rounded-lg">
          <p className="text-xs opacity-80">EXPECTED PROFIT</p>
          <h2 className="font-bold text-xl">₹3,25,000</h2>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-600 border-t pt-3">
        <p>
          Inventory Cost Price <br />
          <span className="text-[#C2863FFF] font-semibold">₹5,20,200</span>
        </p>
        <p className="text-right">
          Selling Price Value <br />
          <span className="text-[#C2863FFF] font-semibold">₹8,45,200</span>
        </p>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-sm border p-4">
      <div className="flex justify-between items-center mb-4 bg-[linear-gradient(90deg,#FFF49C,#C2863F)] px-3 py-2 rounded-lg">
        <div className="flex items-center gap-2">
          <img src={handIcon} className="w-4 h-4" />
          <p className="font-medium text-sm md:text-base">
            GST / Tax Summary
          </p>
        </div>
        <p className="text-xs md:text-sm cursor-pointer hover:underline">
          View Details
        </p>
      </div>
      <div className="flex justify-between items-center mb-3">
        <div>
          <p className="text-xs text-gray-500">TOTAL TAX COLLECTED</p>
          <h2 className="text-xl font-bold">₹12,450.00</h2>
        </div>
        <p className="text-xs text-gray-400">Audit Ready</p>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs mb-2">
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-gray-500">CGST (9%)</p>
          <p className="font-semibold">₹5,602.50</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-gray-500">SGST (9%)</p>
          <p className="font-semibold">₹5,602.50</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-gray-500">IGST</p>
          <p className="font-semibold">₹1,245.00</p>
        </div>
      </div>
      <p className="text-[10px] text-gray-400 text-center">
        Calculated based on 18% weighted average GST on Stationery items.
      </p>
    </div>
  </div>
  <div className="space-y-4">
    <div className="bg-white rounded-xl shadow-sm border p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <img src={userIcon2} className="w-4 h-4 opacity-70" />
          <p className="font-medium text-sm md:text-base">
            Cashier Performance
          </p>
        </div>
        <p className="text-xs md:text-sm text-[#C2863FFF] cursor-pointer hover:underline">
          View Details
        </p>
      </div>
      {[
        { name: "Rahul Sharma", img: t3, bills: 450, sales: "₹1,42,000", id:"CS-01" },
        { name: "Priya Verma", img: t2, bills: 412, sales: "₹1,28,500", id:"CS-02" },
        { name: "Amit Singh", img: t1, bills: 385, sales: "₹1,18,000", id:"CS-03" },
      ].map((item, i) => (
        <div key={i}
          className="flex items-center justify-between bg-gray-50 border p-3 rounded-lg mb-2">
          <div className="flex items-center gap-3">
            <img src={item.img}
              className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">
                ID: {item.id} • Senior Cashier
              </p>
            </div>
          </div>
          <div className="text-right text-xs">
            <p className="text-gray-500">Bills Handled</p>
            <p className="font-semibold">{item.bills}</p>
            <p className="text-[#C2863FFF] font-semibold mt-1">
              {item.sales}
            </p>
          </div>
        </div>
      ))}

      <p className="text-center text-xs text-[#C2863FFF] mt-2 cursor-pointer hover:underline">
        Download Individual Logs
      </p>
    </div>

    <div className="bg-[#FFF49CFF] rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-3 border">
      <div className="flex items-center gap-2">
        <img src={filterIcon} className="w-5 h-5" />
        <div>
          <p className="font-medium text-sm">Advanced Filtering Applied</p>
          <p className="text-xs text-gray-600">
            Showing data for the selected weekly period. Some metrics are estimated.
          </p>
        </div>
      </div>

      <div className="flex gap-2 w-full md:w-auto">
        <button className="text-xs px-3 py-1 bg-white rounded shadow w-full md:w-auto">
          Schedule Email Report
        </button>
        <button className="text-xs px-3 py-1 bg-[#C2863FFF] text-white rounded w-full md:w-auto">
          Refresh All Data
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
export default Reports;