import React, { useState } from "react";
import ordersIcon from "../assets/online-shopping.png";
import productsIcon from "../assets/box.png";
import usersIcon from "../assets/multiple-users-silhouette.png";
import pendingIcon from "../assets/clock.png";
import arrowRight from "../assets/arrow-right.png";
import filterIcon from "../assets/right-arrow.png";
import dotsIcon from "../assets/dots.png";
import whatsappIcon from "../assets/whatsapp.png";
import reportIcon from "../assets/report.png";
import infoIcon from "../assets/information (2).png";
import caretDown from "../assets/caret-down.png";
import checkIcon from "../assets/checkmark.png";
import sarahImg from "../assets/user1.png";
import michaelImg from "../assets/A1.jpg";
import arrowIcon from "../assets/right-arrow (2).png";
import alishaImg from "../assets/alisha.jpg";
import davidImg from "../assets/a3.jpg";
import emmaImg from "../assets/a1.png";
import { useNavigate } from "react-router-dom";
import downChevron from "../assets/down-chevron.png";
import k1 from "../assets/k1.jpeg";
import k2 from "../assets/k2.jpeg";
import k3 from "../assets/k3.jpeg";
import k4 from "../assets/k4.jpeg";
import k5 from "../assets/k5.jpeg";
import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import t3 from "../assets/t3.jpeg";
import t4 from "../assets/t4.jpeg";
import t5 from "../assets/t5.jpeg";
import fileIcon from "../assets/google-docs.png";
import addIcon from "../assets/add.png";
import settingsIcon from "../assets/settings.png";
const Dashboard = () => {
  const [toastMsg, setToastMsg] = useState("");
  const [message, setMessage] = useState(
    "Hi! We have a special weekend sale just for you. Use code SAVE20 for 20% off...");
  const handleSend = () => {
    setToastMsg("Offer sent via WhatsApp ");
    setTimeout(() => setToastMsg(""), 3000);};
  const handleActionClick = (name) => {
    setToastMsg(`Clicked on ${name}`);
    setTimeout(() => setToastMsg(""), 2000);};
  const handleFilterClick = () => {
    setToastMsg("Filter clicked ");
    setTimeout(() => setToastMsg(""), 2000); };
  const handleViewAll = () => {
    setToastMsg("Viewing all orders ");
    setTimeout(() => setToastMsg(""), 2000); };
  const [activeBillTab, setActiveBillTab] = useState("generate");
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="p-3 sm:p-4 md:p-6 bg-gray-100 min-h-screen">
      {toastMsg && (
        <div className="fixed top-4 right-4 z-50 bg-gray-800 text-white px-4 py-2 rounded shadow-lg text-sm">
          {toastMsg}
        </div>)}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {[
      { title: "Total Orders", value: "12,482", icon: ordersIcon, change: "+12.5%", up: true },
      { title: "Total Products", value: "3,142", icon: productsIcon, change: "+5.2%", up: true },
      { title: "Total Users", value: "48,901", icon: usersIcon, change: "+18.7%", up: true },
      { title: "Pending Orders", value: "154", icon: pendingIcon, change: "-2.4%", up: false },].map((item, i) => (
      <div
  key={i}
  className="relative p-4 rounded-xl shadow bg-[linear-gradient(180deg,#F9FAFBFF_0%,#C2863FFF_100%)]">
      <div className={`absolute top-3 right-3 text-xs font-semibold flex items-center gap-1 ${
              item.up ? "text-[#C2863FFF]" : "text-red-500" }`}>
      <img src={arrowRight} className={`w-3 ${item.up ? "rotate-[-45deg]" : "rotate-[135deg]"}`} />
              <span>{item.change}</span> </div>
      <div className="flex flex-col gap-2">
              <img src={item.icon} className="w-6" />
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-lg sm:text-xl font-bold">{item.value}</h2>
            </div>
     </div>))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-4 overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Recent Orders</h2>
            <button onClick={handleFilterClick}
              className="flex items-center gap-2 border px-3 py-1 rounded hover:bg-gray-100 text-sm">
              <img src={filterIcon} className="w-4" />
              Filter
            </button>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            View and manage the latest customer transactions.
          </p>
          <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
          <thead>
          <tr className="text-gray-500 text-left border-b">
                  <th className="py-2">Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                 </tr>
                 </thead>
                   <tbody>
            {[ 
             { id: "#ORD-921", name: "Sarah Johnson", img: sarahImg, amount: "₹124.50", status: "Completed" },
             { id: "#ORD-922", name: "Michael Chen", img: michaelImg, amount: "₹89.00", status: "Pending" },
             { id: "#ORD-923", name: "Alisha Patel", img: alishaImg, amount: "₹210.30", status: "Completed" },
             { id: "#ORD-924", name: "David Ross", img: davidImg, amount: "₹45.00", status: "Cancelled" },
             { id: "#ORD-925", name: "Emma Wilson", img: emmaImg, amount: "₹156.75", status: "Completed" },
             ].map((o, i) => (
             <tr key={i} className="border-b">
                 <td className="py-3">{o.id}</td>
                 <td className="py-3 flex items-center gap-2">
                 <img src={o.img} className="w-8 h-8 rounded-full" />
                    {o.name}
                 </td>
            <td>Oct 23</td>
            <td>{o.amount}</td>
            <td>
            <span className={`px-2 py-1 rounded text-black text-xs ${
             o.status === "Completed"? "bg-[#A68B5B4D]": o.status === "Pending"? "bg-[#C2863FFF]": "bg-[#C2863FFF]" }`}>
                {o.status} </span>
                </td>
               <td>
               <img src={dotsIcon} className="w-5 cursor-pointer" onClick={() => handleActionClick(o.name)} />
                 </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div onClick={handleViewAll}
            className="text-center mt-4 text-[#161A1DFF] cursor-pointer">
            View All Orders
          </div>
        </div>
<div className="bg-white rounded-xl shadow p-4 w-full">
  <div className="flex items-center gap-2 mb-4">
    <img src={whatsappIcon} className="w-5" />
    <h2 className="font-semibold">WhatsApp Marketing</h2>
  </div>
  <div className="flex flex-wrap gap-2 mb-4">
    <button onClick={() => setActiveTab("discountTop")}
      className={`px-3 py-1.5 text-[10px] font-medium border rounded-lg transition-all ${
        activeTab === "discountTop"
          ? "bg-[#A68B5BFF] text-white shadow-sm border-[#A68B5BFF]"
          : "bg-white text-gray-600 hover:bg-gray-50"}`} >
      Coupon / Discount
    </button>
    <button onClick={() => setActiveTab("wishes")}
      className={`px-3 py-1.5 text-[10px] font-medium border rounded-lg transition-all ${
        activeTab === "wishes"
          ? "bg-[#A68B5BFF] text-white shadow-sm border-[#A68B5BFF]"
          : "bg-white text-gray-600 hover:bg-gray-50" }`} >
      Send Wishes
    </button>
    <button  onClick={() => setActiveTab("bulk")}
      className={`px-3 py-1.5 text-[10px] font-medium border rounded-lg transition-all ${
        activeTab === "bulk"
          ? "bg-[#A68B5BFF] text-white shadow-sm border-[#A68B5BFF]"
          : "bg-white text-gray-600 hover:bg-gray-50" }`}>
      Bulk / Excel
    </button>
  </div>
  <p className="text-gray-400 text-xs mb-4">
    Send offers & wishes directly to customers.
  </p>
  {activeTab === "discountTop" && (
    <div className="border p-3 rounded bg-gray-50 space-y-2 mb-3">
      <div className="relative">
        <select className="w-full border p-2 rounded text-sm appearance-none bg-white">
          <option>Select Festival</option>
          <option>Diwali Offer</option>
        </select>
        <img  src={downChevron}
          className="w-3 absolute right-3 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />
      </div>
      <textarea defaultValue="Diwali Special! Get 30% OFF on all products "
        className="w-full border p-2 rounded text-sm"
        rows={3} />
      <input  type="text"  placeholder="Coupon Code"  className="w-full border p-2 rounded text-sm"/>
      <div className="relative">
        <select className="w-full border p-2 rounded text-sm appearance-none bg-white">
          <option>Discount Type</option>
          <option>Percentage (%)</option>
          <option>Flat Amount (₹)</option>
        </select>
        <img src={downChevron}
          className="w-3 absolute right-3 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none"/>
      </div>
      <input  type="number"  placeholder="Discount Value"  className="w-full border p-2 rounded text-sm"/>
      <div className="relative">
        <select className="w-full border p-2 rounded text-sm appearance-none bg-white">
          <option>Send To</option>
          <option>All Customers</option>
          <option>Specific Customers</option>
        </select>
        <img    src={downChevron}
          className="w-3 absolute right-3 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none"  />
      </div>
      <input type="text" placeholder="Search customer..." className="w-full border p-2 rounded text-sm"/>
      <button  onClick={() => setToastMsg("Coupon Sent ")}
        className="w-full bg-[#A68B5BFF] text-white py-1 rounded text-xs" >
        Send Coupon Campaign
      </button>
    </div>
  )}
  {activeTab === "wishes" && (
    <div className="border p-3 rounded bg-gray-50 space-y-2 mb-3">
      <div className="relative">
        <select className="w-full border p-2 rounded text-sm appearance-none bg-white">
          <option>Select Occasion</option>
          <option>Diwali Wishes</option>
        </select>
        <img src={downChevron}
          className="w-3 absolute right-3 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none"  />
      </div>
      <textarea  placeholder="Happy Diwali ! Wishing you happiness & prosperity."
        className="w-full border p-2 rounded text-sm" rows={3} />
      <div className="relative">
        <select className="w-full border p-2 rounded text-sm appearance-none bg-white">
          <option>Send To</option>
          <option>All Customers</option>
          <option>Specific Customers</option>
        </select>
        <img src={downChevron}
          className="w-3 absolute right-3 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none"/>
      </div>
      <input  type="text"  placeholder="Search customer..."  className="w-full border p-2 rounded text-sm"/>
      <button  onClick={() => setToastMsg("Wishes Sent ")}
        className="w-full bg-[#404C31FF] text-white py-1 rounded text-xs"   >
        Send Wishes
      </button>
    </div>
  )}
  {activeTab === "bulk" && (
    <div className="border p-3 rounded bg-gray-50 space-y-3 mb-3">
      <p className="text-xs text-gray-500 font-medium">
        Bulk WhatsApp Messaging
      </p>
      <div className="space-y-2">
        <label className="text-[10px] text-gray-400">
          PASTE MULTIPLE NUMBERS
        </label>
        <textarea placeholder="Enter numbers separated by comma (e.g. 9876543210, 9123456789)"
          className="w-full border p-2 rounded text-sm resize-none"
          rows={2}/>
      </div>
     <div className="space-y-2">
  <label className="text-[10px] text-gray-400">
    OR UPLOAD EXCEL / CSV
  </label>
  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-[#A68B5BFF] transition-colors bg-white"> 
    <img  src={reportIcon}
      className="w-6 h-6 mx-auto mb-2 opacity-40"/>
    <p className="text-xs text-gray-500">
      Click to upload .xlsx or .csv sheet
    </p>
  </div>
</div>
      <div className="space-y-2">
        <label className="text-[10px] text-gray-400">
          MESSAGE
        </label>
        <textarea   placeholder="Type your bulk message here..."
          className="w-full border p-2 rounded text-sm resize-none"  rows={3}/>
      </div>
      <button onClick={() => setToastMsg("Bulk Campaign Started! ")}
        className="w-full bg-[#A68B5BFF] text-white py-2 rounded text-xs font-semibold shadow-sm">
        Start Bulk Campaign
      </button>
    </div>
  )}
</div></div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
   <div className="bg-white rounded-2xl shadow p-4 h-fit">
  <div className="flex items-center justify-between mb-1">
    <h2 className="font-semibold text-lg">Low Stock Products</h2>
    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
      Action Required
    </span>
  </div>
  <p className="text-gray-400 text-sm mb-4">
    Products running low in inventory</p>
  {[
    { name: "Premium Wireless Headphones", price: "₹299", id: "P-101", stock: "3", img: k1 },
    { name: "Ergonomic Mechanical Keyboard", price: "₹159", id: "P-102", stock: "2", img: k2 },
    { name: "4K Ultra-Wide Monitor", price: "₹699", id: "P-103", stock: "5", img: k3 },
    { name: "Smart Home Security Kit", price: "₹199", id: "P-104", stock: "1", img: k4 },
    { name: "Portable SSD 2TB", price: "₹129", id: "P-105", stock: "4", img: k5 },
  ].map((p, i) => (
    <div  key={i}
      className="flex items-center justify-between py-3 border-b last:border-none" >
      <div className="flex items-center gap-3">
        <img  src={p.img}
          className="w-12 h-12 rounded-lg object-cover" />
        <div>
          <p className="text-sm font-medium">{p.name}</p>
          <p className="text-xs text-gray-400">
            {p.id}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-800">
            {p.price}
          </p>
          <p className="text-xs text-red-500 flex items-center gap-1 justify-end">
            <img src={infoIcon} className="w-3 h-3" />
            {p.stock} left
          </p>
        </div>
      </div>
    </div>
  ))}
<div className="flex items-center justify-center gap-2 mt-4 text-gray-500 hover:text-[#C2863F] cursor-pointer text-sm">
  <span>View All Products</span>
  <img src={arrowIcon} className="w-4 h-4" />
</div>  
</div>
    <div className="bg-white rounded-xl shadow p-4 h-fit">
      <div className="flex justify-between items-center mb-1">
        <h2 className="font-semibold text-lg">Recent Users</h2>
        <div className="hidden lg:flex gap-2">
          <button  onClick={() => {
              setToastMsg("WhatsApp Broadcast started for all registered users! ");
              setTimeout(() => setToastMsg(""), 3000);}}
            className="bg-[#404C31FF] text-white px-3 py-1.5 rounded-lg text-[10px] font-medium flex items-center gap-2 hover:opacity-90 shadow-sm transition-all">
            <img src={whatsappIcon} className="w-3" />
            Broadcast All
          </button>
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        New sign-ups in the last 24 hours.
      </p>
      {[ 
        { name: "Liam Thompson", email: "liam.t@example.com", time: "2 MINS AGO", img: t1 },
        { name: "Sophia Garcia", email: "sophia.g@example.com", time: "15 MINS AGO", img: t2 },
        { name: "James Miller", email: "j.miller@example.com", time: "1 HOUR AGO", img: t3 },
        { name: "Isabella Martinez", email: "isabella.m@example.com", time: "3 HOURS AGO", img: t4 },
        { name: "Noah Williams", email: "noah.w@example.com", time: "YESTERDAY", img: t5 },
      ].map((u, i) => (
        <div key={i} className="flex items-center justify-between py-3 border-b last:border-none">
          <div className="flex items-center gap-3">
            <img src={u.img} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium">{u.name}</p>
              <p className="text-xs text-gray-400">{u.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[10px] text-gray-400 font-medium">{u.time}</p>
            <button   onClick={(e) => {    e.stopPropagation();
                setToastMsg(`Opening WhatsApp chat for ${u.name}...`);
                setTimeout(() => setToastMsg(""), 2000);}}
              className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-[10px] hover:bg-green-100 transition-colors border border-green-200">
              <img src={whatsappIcon} className="w-3 h-3" />
              <span>Send</span>
            </button>
          </div>
        </div>
      ))}
      <div onClick={() => setToastMsg("Managing all users ")}
        className="text-center mt-4 text-gray-500 hover:text-[#C2863FFF] cursor-pointer text-sm">
        Manage All Users
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-6">
    <div className="bg-gradient-to-br from-white to-pink-50 rounded-xl shadow p-4 border border-orange-200">
      <div className="flex items-center gap-2 mb-3">
        <img src={fileIcon} className="w-5" />
        <h2 className="font-semibold">Bill Generation</h2>
      </div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => navigate("/generate-bill")}
  className="flex-1 py-2 text-sm rounded flex items-center justify-center gap-2 bg-[#A68B5BFF] text-white shadow">
       Generate Bill
          </button>
        <button onClick={() => setActiveBillTab("download")}
          className={`flex-1 py-2 text-sm rounded ${
            activeBillTab === "download"
              ? "bg-[#A68B5BFF] text-white shadow"
              : "border text-gray-600" }`}>
          Download PDF
        </button>
      </div>
      <div className="border rounded p-3 text-sm bg-white">
        <p className="text-gray-400 text-xs mb-2">DRAFT PREVIEW</p>
        <p className="flex justify-between">
          Order <span>#ORD-9021</span>
        </p>
        <p className="flex justify-between">
          Customer <span>Sarah Johnson</span>
        </p>
        <p className="mt-2 font-semibold flex justify-between">
          Total Payable
          <span className="text-[#C2863FFF]">₹124.50</span>
        </p>
      </div>
      <button onClick={() => {
          setToastMsg("Bill Confirmed & Saved ");
          setTimeout(() => setToastMsg(""), 2000);
        }}
        className="w-full mt-4 bg-gray-900 text-white py-2 rounded text-sm hover:bg-black">
        Confirm & Save
      </button>
    </div>
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-semibold mb-4">Quick Actions</h2>
      <div className="flex flex-col gap-3">
        <div  onClick={() => handleActionClick("Add New Product")}
          className="flex items-center gap-3 border p-3 rounded cursor-pointer hover:bg-[#FFF49CFF]">
          <img src={addIcon} className="w-5" />
          <p className="text-sm">Add New Product</p>
        </div>
        <div  onClick={() => handleActionClick("Invite Staff Member")}
          className="flex items-center gap-3 border p-3 rounded cursor-pointer hover:bg-[#FFF49CFF]">
          <img src={usersIcon} className="w-5" />
          <p className="text-sm">Invite Staff Member</p>
        </div>
        <div onClick={() => handleActionClick("Update Shop Settings")}
          className="flex items-center gap-3 border p-3 rounded cursor-pointer hover:bg-[#FFF49CFF]">
          <img src={settingsIcon} className="w-5" />
          <p className="text-sm">Update Shop Settings</p>
        </div>
        <div onClick={() => handleActionClick("Quick Generate Bill")}
          className="flex items-center gap-3 border p-3 rounded cursor-pointer hover:bg-[#FFF49CFF] text-[#C2863FFF]" >
          <img src={fileIcon} className="w-5" />
          <p className="text-sm">Quick Generate Bill</p>
        </div>
        <div onClick={() => handleSend()}
          className="flex items-center gap-3 border p-3 rounded cursor-pointer hover:bg-[#FFF49CFF] text-[#404C31FF]">
          <img src={whatsappIcon} className="w-5" />
          <p className="text-sm">Quick WhatsApp Offer</p>
        </div>
        </div>
      </div>
     </div>
    </div></div> 
  );
};
export default Dashboard;