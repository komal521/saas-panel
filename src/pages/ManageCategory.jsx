import React, { useState } from "react";
import boxIcon from "../assets/box.png";
import clockIcon from "../assets/clock.png";
import searchIcon from "../assets/search.png";
import viewIcon from "../assets/view.png";
import editIcon from "../assets/edit.png";
import binIcon from "../assets/bin.png";
import leftIcon from "../assets/left.png";
import rightIcon from "../assets/right-arrow (3).png";
import layersIcon from "../assets/layers.png";
import arrowIcon from "../assets/right-arrow (2).png";
import o1 from "../assets/o1.jpeg";
import o2 from "../assets/o2.jpeg";
import o3 from "../assets/o3.jpeg";
import o4 from "../assets/o4.jpeg";
import o5 from "../assets/o5.jpeg";
import { useNavigate } from "react-router-dom";
const ManageCategory = () => {
    const [activePage, setActivePage] = useState(1);
    const [activeFilter, setActiveFilter] = useState("All");
    const [showEditPage, setShowEditPage] = useState(false);
    const navigate = useNavigate();
  return (
    
    <div className="p-4 md:p-6 bg-[#F8F6F2] min-h-screen">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Product Management </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Manage your products, categories and inventory </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-b from-white to-[#FFF49CFF] p-4 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Total Products</p>
            <h2 className="text-xl font-semibold">1,248</h2>
          </div>
          <img src={boxIcon} className="h-5 opacity-70" />
        </div>
        <div className="bg-gradient-to-b from-white to-[#FFF49CFF] p-4 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Active Products</p>
            <h2 className="text-xl font-semibold">1,102</h2>
          </div>
          <img src={boxIcon} className="h-5 opacity-70" />
        </div>
        <div className="bg-gradient-to-b from-white to-[#FFF49CFF] p-4 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Out of Stock</p>
            <h2 className="text-xl font-semibold">46</h2>
          </div>
          <img src={clockIcon} className="h-5 opacity-70" />
        </div>
        <div className="bg-gradient-to-b from-white to-[#FFF49CFF] p-4 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Categories Count</p>
            <h2 className="text-xl font-semibold">24</h2>
          </div>
          <img src={boxIcon} className="h-5 opacity-70" />
        </div>
      </div>
<div className="flex flex-col md:flex-row md:items-center justify-between mt-8 gap-3">
<div className="flex bg-gray-200 rounded-full p-1 text-sm overflow-x-auto">
  {["All", "In Stock", "Out of Stock"].map((f, i) => (
    <button  key={i}  onClick={() => setActiveFilter(f)}
      className={`px-4 py-1 rounded-full transition ${
        activeFilter === f
          ? "bg-[#A68B5BFF] text-white"
          : "text-gray-600 hover:bg-gray-300" }`} >
      {f}
    </button>
  ))}
</div>
  <div className="flex items-center bg-white px-3 py-2 rounded-full shadow w-full md:w-72">
    <img src={searchIcon} className="h-4 mr-2 opacity-60" />
    <input
      placeholder="Search products..."
      className="outline-none text-sm w-full"/>
  </div>
</div>
<div className="bg-white rounded-xl shadow mt-6 overflow-x-auto">
 <table className="w-full min-w-[700px] text-sm">
    <thead className="text-gray-500 border-b">
      <tr>
        <th className="text-left p-4">Product Name & ID</th>
        <th>Category</th>
        <th>Price</th>
        <th>URL</th>
        <th>Stock</th>
        <th>Manage</th>
      </tr>
    </thead>
    <tbody>
      {[
        { img: o1, name: "Signature Gold Watch", id: "PRD-7281", cat: "Accessories", price: "$1,250.00", stock: "In Stock" },
        { img: o2, name: "Silk Velvet Blazer", id: "PRD-8890", cat: "Apparel", price: "$890.00", stock: "In Stock" },
        { img: o3, name: "Leather Artisan Tote", id: "PRD-4412", cat: "Bags", price: "$420.00", stock: "Out of Stock" },
        { img: o4, name: "Onyx Fountain Pen", id: "PRD-1022", cat: "Stationery", price: "$185.00", stock: "In Stock" },
        { img: o5, name: "Cashmere Travel Wrap", id: "PRD-5561", cat: "Apparel", price: "$310.00", stock: "Out of Stock" },
      ].map((item, i) => (
        <tr key={i} className="border-b hover:bg-gray-50">
          <td className="p-4">
  <div className="flex items-center gap-3 min-w-[180px]">
            <img src={item.img} className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-gray-400">ID: {item.id}</p>
            </div></div>
          </td>
          <td className="text-center">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">
              {item.cat}
            </span>
          </td>
          <td className="text-center">{item.price}</td>
          <td className="text-center text-[#C2863FFF] text-xs underline cursor-pointer">
            uxproduct.com/{item.id}
          </td>
          <td className="text-center">
            <span className={`px-2 py-1 rounded-full text-xs ${
              item.stock === "In Stock"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-500"
            }`}>
              {item.stock}
            </span>
          </td>
          <td className="flex justify-center gap-3 py-4">
            <img src={viewIcon} className="h-4 cursor-pointer" />
          <div onClick={() => navigate("/edit-product")}
  className="flex items-center gap-1 cursor-pointer text-[#C2863F] hover:underline">
  <img src={editIcon} className="h-4" />
  <span className="text-xs">Edit</span>
</div>
            <img src={binIcon} className="h-4 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
  <p className="text-sm text-gray-500">
    Showing 1-5 of 1248 products
  </p>
 <div className="flex items-center gap-2 flex-wrap justify-center">
    <button className="p-2 bg-white rounded shadow">
      <img src={leftIcon} className="h-3" />
    </button>
    {[1,2,3,4,5,6].map((n) => (
  <button
    key={n}
    onClick={() => setActivePage(n)}
    className={`w-8 h-8 rounded transition ${
      activePage === n
        ? "bg-[#A68B5BFF] text-white"
        : "bg-white hover:bg-gray-100"
    }`}>
    {n}
  </button>
))}
    <button className="p-2 bg-white rounded shadow">
      <img src={rightIcon} className="h-3" />
    </button>
  </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  <div className="bg-[linear-gradient(180deg,#FFFFFFFF_0%,#FFF49CFF_100%)] p-4 rounded-xl shadow">
   <div className="flex gap-4 items-start">
      <img src={boxIcon} className="h-6" />
      <div>
        <h3 className="font-semibold">Automated Restocking</h3>
        <p className="text-xs text-gray-500">
          Your inventory syncs every 15 minutes with the main distribution hub. Low stock alerts are currently active for 12 items.
        </p>
        <p className="text-[#C2863FFF] text-sm mt-2 cursor-pointer flex items-center gap-1">
          Configure Alerts
          <img src={arrowIcon} className="h-3" />
        </p>
      </div>
    </div>
  </div>
  <div className="bg-[linear-gradient(180deg,#FFFFFFFF_0%,#FFF49CFF_100%)] p-4 rounded-xl shadow">
    <div className="flex gap-4">
      <img src={layersIcon} className="h-6" />
      <div>
        <h3 className="font-semibold">Multi-Channel Listing</h3>
        <p className="text-xs text-gray-500">
          Current products are successfully listed across Shopify, Amazon Premium, and your direct boutique portal.
        </p>
        <p className="text-[#C2863FFF] text-sm mt-2 cursor-pointer flex items-center gap-1">
          View Channel Report
          <img src={arrowIcon} className="h-3" />
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ManageCategory;