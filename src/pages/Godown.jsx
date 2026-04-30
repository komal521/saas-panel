import React, { useState } from "react";
import searchIcon from "../assets/search.png";
import filterIcon from "../assets/filter.png";
import locationIcon from "../assets/location.png";
import importIcon from "../assets/import.png";
import exportIcon from "../assets/upload.png";
import addIcon from "../assets/add.png";
import a1jpg from "../assets/A1.jpg";
import a1png from "../assets/a1.png";
import a3jpg from "../assets/a3.jpg";
import t2jpeg from "../assets/t2.jpeg";
import downChevron from "../assets/down-chevron.png";
import reportIcon from "../assets/report.png";
import auditIcon from "../assets/audit.png";
import homeIcon from "../assets/home.png";
import boxIcon from "../assets/box.png";
import batteryIcon from "../assets/battery.png";
import crisisIcon from "../assets/crisis.png";
import trendIcon from "../assets/curve-arrow.png";
function Godown() {
  const [activeBtn, setActiveBtn] = useState("");
  const cards = [
    {
      title: "Total Godowns",
      value: "12",
      sub: "Across 8 regions",
      change: "+2",
      icon: homeIcon,
    },
    {
      title: "Active Storage",
      value: "455,200",
      sub: "m² in use today",
      change: "+12%",
      icon: boxIcon,
    },
    {
      title: "Capacity Used",
      value: "74.2%",
      sub: "System-wide average",
      change: "-2.4%",
      icon: batteryIcon,
    },
    {
      title: "Available Space",
      value: "158,800",
      sub: "m² ready to assign",
      change: "+5%",
      icon: boxIcon, 
    },
    {
      title: "Critical Alerts",
      value: "3",
      sub: "Low stock/Full capacity",
      change: "-1",
      icon: crisisIcon,
    },
  ];
 const [active, setActive] = useState("reports");
 const [activePageBtn, setActivePageBtn] = useState("next");
  return (
    <div className="p-4 md:p-6 bg-[#FAFAFA] min-h-screen">
      <div className="rounded-xl p-6 mb-6"
        style={{ background:
            "linear-gradient(180deg, #FFFFFFFF 0%, #FFF49CFF 100%)", }} >
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Global Godown Management</h1>
            <p className="text-sm text-gray-600">
              Real-time inventory and capacity tracking </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setActiveBtn("import")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow transition ${
                activeBtn === "import"
                  ? "text-white"
                  : "bg-white hover:scale-105" }`}
              style={{   backgroundColor:
                  activeBtn === "import" ? "#A68B5BFF" : "white",}} >
              <img   src={importIcon}  className={`h-4 ${
                  activeBtn === "import" ? "invert" : "" }`} />
              Import </button>
            <button  onClick={() => setActiveBtn("export")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow transition ${
                activeBtn === "export"
                  ? "text-white"
                  : "bg-white hover:scale-105" }`}
              style={{backgroundColor:    activeBtn === "export" ? "#A68B5BFF" : "white",
              }} >
              <img src={exportIcon}className={`h-4 ${
                  activeBtn === "export" ? "invert" : ""}`} />
              Export
            </button>
            <button onClick={() => setActiveBtn("add")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg shadow hover:scale-105 transition text-white"
              style={{ backgroundColor: "#A68B5BFF" }}>
              <img src={addIcon} className="h-4 invert" />
              Add Godown
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <div key={index}
            className="p-4 rounded-xl shadow hover:shadow-lg transition"
            style={{
              background:
                "linear-gradient(180deg, #F9FAFBFF 0%, #C2863FFF 100%)", }} >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm text-gray-700 font-medium">
                {card.title}
              </h3>
              <img src={card.icon} className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold text-gray-900"> {card.value} </h2>
            <p className="text-xs text-gray-700 mt-1">{card.sub} </p>
            <div className="flex items-center gap-1 mt-2 text-xs">
              <img src={trendIcon} className="h-3 w-3" />
              <span className={`font-medium ${
                  card.change.includes("-")
                    ? "text-red-600"
                    : "text-green-600"  }`} >
                {card.change}
              </span>
              <span className="text-gray-600">vs last month</span>
            </div>
          </div>
        ))}
      </div>
<div className="mt-8 flex flex-col lg:flex-row gap-6">
  <div className="bg-white rounded-xl shadow p-4 md:p-6 flex-1">
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Facility Directory </h2>
        <p className="text-sm text-gray-500">
          Managed list of all active storage units </p>
      </div>
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-full lg:w-80">
        <img src={searchIcon} className="h-4 w-4 mr-2 opacity-60" />
        <input type="text"  placeholder="Search facility name or ID..."
          className="bg-transparent outline-none text-sm flex-1" />
        <img src={filterIcon} className="h-4 w-4 ml-2 opacity-70 cursor-pointer" />
      </div>
    </div>
    <div className="overflow-x-auto">
  <table className="min-w-[700px] w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="py-2">GODOWN NAME</th>
            <th>LOCATION</th>
            <th>TOTAL CAPACITY</th>
            <th>USED SPACE</th>
            <th>STATUS</th>
            <th>LAST UPDATED</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {[
            {
              name: "Apex Central",
              id: "GD-001",
              location: "London, UK",
              capacity: "50,000 m²",
              used: "85%",
              status: "Operational",
              time: "2h ago",
            },
            {
              name: "Eastbay Hub",
              id: "GD-002",
              location: "New York, US",
              capacity: "120,000 m²",
              used: "92%",
              status: "Warning",
              time: "15m ago",
            },
            {
              name: "Pacific Port",
              id: "GD-003",
              location: "Singapore",
              capacity: "200,000 m²",
              used: "45%",
              status: "Operational",
              time: "1d ago",
            },
            {
              name: "Nordic Chill",
              id: "GD-004",
              location: "Oslo, NO",
              capacity: "30,000 m²",
              used: "98%",
              status: "Full",
              time: "5m ago",
            },
            {
              name: "Desert Logistics",
              id: "GD-005",
              location: "Dubai, UAE",
              capacity: "150,000 m²",
              used: "60%",
              status: "Maintenance",
              time: "3h ago",
            },
          ].map((row, i) => (
         <tr key={i} className="border-b hover:bg-gray-50">
         <td className="py-3">
         <p className="font-medium">{row.name}</p>
         <p className="text-xs text-gray-400">{row.id}</p>
         </td>
         <td>
         <div className="flex items-center gap-1 text-gray-600">
         <img src={locationIcon} className="h-3 w-3" />
          {row.location}  </div>
           </td>
           <td>{row.capacity}</td>
           <td>
           <div>
           <p className="text-xs mb-1">{row.used}</p>
           <div className="w-20 h-1.5 bg-gray-200 rounded">
           <div  className="h-1.5 rounded"
             style={{
                width: row.used,
                backgroundColor: "#C2863F",  }}></div>
                  </div>
                </div>
              </td>
              <td>
              <span className={`text-xs px-2 py-1 rounded-full ${
              row.status === "Operational"
               ? "bg-green-100 text-green-600"
               : row.status === "Warning"
               ? "bg-yellow-100 text-yellow-600"
               : row.status === "Full"
               ? "bg-red-100 text-red-600"
               : "bg-gray-200 text-gray-600"}`} >
                  {row.status}
                </span>
              </td>
              <td className="text-gray-500 text-xs">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-4 gap-3">
      <p className="text-xs text-gray-500"> Showing 5 of 12 facilities</p>
      <div className="flex gap-2">
  <button onClick={() => setActivePageBtn("prev")}
    className="px-3 py-1 text-sm rounded border"
    style={{   backgroundColor:
        activePageBtn === "prev" ? "#A68B5BFF" : "white",
      color: activePageBtn === "prev" ? "white" : "black",}}>
    Previous
  </button>
  <button onClick={() => setActivePageBtn("next")}
    className="px-3 py-1 text-sm rounded"
    style={{
      backgroundColor:
        activePageBtn === "next" ? "#A68B5BFF" : "white",
      color: activePageBtn === "next" ? "white" : "black", }}>
    Next
  </button>
</div>
    </div>
  </div>
<div className="w-full lg:w-[320px] flex flex-col gap-6">
  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="text-sm font-semibold text-gray-600 mb-4">
      UTILIZATION PULSE </h3>
    <div className="flex items-center justify-center mb-4">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle cx="64" cy="64" r="50" stroke="#E5E7EB" strokeWidth="10" fill="none" />
          <circle
            cx="64"
            cy="64"
            r="50"
            stroke="#C2863F"
            strokeWidth="10"
            fill="none"
            strokeDasharray="314"
            strokeDashoffset="82"
            strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold">74%</span>
          <span className="text-xs text-gray-500">TOTAL CAPACITY</span>
        </div>
      </div>
    </div>
    <div className="text-xs text-gray-600 space-y-2">
      <div className="flex justify-between">
        <span>Busiest Hub</span>
        <span className="text-[#C2863F] font-medium">Eastbay Hub (92%)</span>
      </div>
      <div className="flex justify-between">
        <span>Underutilized</span>
        <span className="text-[#C2863F] font-medium">Pacific Port (45%)</span>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-xl shadow p-6">
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-sm font-semibold text-gray-700">
        RECENT ACTIVITY
      </h3>
      <span className="text-xs text-[#C2863F] cursor-pointer">
        View All</span>
    </div>
    <div className="space-y-4">
      <div className="flex gap-3 items-start">
        <img src={a1jpg} className="w-8 h-8 rounded-full object-cover" />
        <div className="text-xs">
          <p className="font-medium">Stock Replenishment</p>
          <p className="text-gray-500">
            <span className="text-[#C2863F]">Elena Vance</span> approved delivery of 4,000 units to Nordic Chill </p>
        </div>
        <span className="ml-auto text-[10px] text-gray-400">12m ago</span>
      </div>
      <div className="flex gap-3 items-start">
        <img src={a1png} className="w-8 h-8 rounded-full object-cover" />
        <div className="text-xs">
          <p className="font-medium">Capacity Alert</p>
          <p className="text-gray-500">
            <span className="text-[#C2863F]">System Monitor</span> triggered alert for Eastbay Hub
          </p>
        </div>
        <span className="ml-auto text-[10px] text-gray-400">1h ago</span>
      </div>
      <div className="flex gap-3 items-start">
        <img src={a3jpg} className="w-8 h-8 rounded-full object-cover" />
        <div className="text-xs">
          <p className="font-medium">Inventory Audit</p>
          <p className="text-gray-500">
            <span className="text-[#C2863F]">Marcus Thorne</span> verified stock at Apex Central
          </p>
        </div>
        <span className="ml-auto text-[10px] text-gray-400">3h ago</span>
      </div>
      <div className="flex gap-3 items-start">
        <img src={t2jpeg} className="w-8 h-8 rounded-full object-cover" />
        <div className="text-xs">
          <p className="font-medium">Facility Update</p>
          <p className="text-gray-500">
            <span className="text-[#C2863F]">Sarah Chen</span> updated Desert Logistics
          </p>
        </div>
        <span className="ml-auto text-[10px] text-gray-400">5h ago</span>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-xl shadow p-6">
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-xs text-gray-500">System Shortcuts</h3>
      <img src={downChevron} className="h-4 w-4 opacity-60 cursor-pointer" />
    </div>
    <div className="grid grid-cols-2 gap-3">

  <div onClick={() => setActive("reports")}
    className={`border rounded-lg p-3 text-center cursor-pointer transition ${
      active === "reports" ? "shadow" : "hover:shadow"}`}
    style={{backgroundColor:
        active === "reports" ? "#FFF49CFF" : "white",}}>
    <img src={reportIcon} className="h-5 mx-auto mb-1" />
    <p className="text-xs">Reports</p>
  </div>
  <div onClick={() => setActive("audits")}
    className={`border rounded-lg p-3 text-center cursor-pointer transition ${
      active === "audits" ? "shadow" : "hover:shadow" }`}
    style={{  backgroundColor:
        active === "audits" ? "#FFF49CFF" : "white", }} >
    <img src={auditIcon} className="h-5 mx-auto mb-1" />
    <p className="text-xs">Audits</p>
  </div>
</div>
  </div>
</div>
  </div>
</div>
 ); } 
export default Godown;