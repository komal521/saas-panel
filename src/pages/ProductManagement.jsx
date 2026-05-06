import React, { useState } from "react";
import addIcon from "../assets/add.png";
import productImg from "../assets/pic1.png";
import rightArrow from "../assets/right-arrow.png";
import rightArrowAlt from "../assets/right-arrow (1).png";
import downChevron from "../assets/down-chevron.png";
import d1 from "../assets/d1.jpeg";
import d2 from "../assets/d2.jpeg";
import d3 from "../assets/d3.jpeg";
import d4 from "../assets/d4.jpeg";
import m1 from "../assets/m1.jpeg";
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";
import m4 from "../assets/m4.jpeg";
import leftArrow from "../assets/left.png";
import rightArrow3 from "../assets/right-arrow (3).png";
import { useNavigate } from "react-router-dom";
const ProductManagement = () => {
  const [toast, setToast] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [allFilterActive, setAllFilterActive] = useState(false);
  const showNotification = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);};
  const filterBtn = (name) =>
    `px-4 py-2 rounded-lg text-sm shadow transition ${
      activeFilter === name
        ? "bg-[#bf7a2c] text-white"
        : "bg-white text-black hover:bg-gray-100" }`;
    const navigate = useNavigate(); 
    const [currentPage, setCurrentPage] = useState(1);
const totalPages = 7; 
  return (
    <div className="p-4 md:p-6 bg-[#F8F6F2] min-h-screen relative">
      {toast && (
        <div className="fixed top-5 right-5 bg-[#1f2937] text-white px-5 py-3 rounded-lg shadow-lg z-50 text-sm font-medium">
          {toast}
        </div> )}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
     <div>
    <h1 className="text-xl sm:text-2xl font-semibold">
      Product Management </h1>
    <p className="text-gray-500 text-xs sm:text-sm">
      Create, manage and track your products easily
    </p>
  </div>
  <div className="flex gap-3">
     <button
    onClick={() => navigate("/manage-category")}
    className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition" >
    <img src={addIcon} className="h-4" />
    Manage Category
  </button>
    <button onClick={() => navigate("/add-category")}
      className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition" >
      <img src={addIcon} className="h-4" />
      Add Category
    </button>
    <button onClick={() => navigate("/add-product")}
      className="flex items-center gap-2 bg-[#A68B5BFF] text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition">
      <img src={addIcon} className="h-4 invert" />
      Add New Product
    </button>
    </div>
   </div>
      <div className="relative rounded-xl overflow-hidden shadow-md">
        <img src={productImg}
          className="w-full h-[220px] md:h-[300px] object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF49CFF]/80 via-[#A68B5BFF]/50 to-transparent"></div>
        <div className="absolute top-4 left-4 text-white text-xs sm:text-sm">
          Featured Release
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 text-white max-w-md">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
            Elite Series: Cloud Walker
          </h2>
          <p className="text-xs sm:text-sm mb-4">
            Experience the next generation of comfort and style with our limited edition sneakers.</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => showNotification("Promotion updated successfully")}
              className="bg-white text-[#C2863FFF] px-4 py-2 rounded-lg text-sm" >
              Edit Promotion
            </button>
            <button onClick={() => showNotification("Viewing analytics")}
              className="flex items-center gap-2 bg-white/90 text-black px-4 py-2 rounded-lg text-sm">
              View Analytics
              <img src={rightArrowAlt} className="h-3" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <button  onClick={() => setAllFilterActive(!allFilterActive)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow text-sm transition ${
              allFilterActive
                ? "bg-[#A68B5BFF] text-white"
                : "bg-white text-black hover:bg-gray-100"}`}>
            <img src={rightArrow} className="h-3" />
            All Filters
          </button>
          <button onClick={() => setActiveFilter("All")} className={filterBtn("All")}>
            All
          </button>
          <button onClick={() => setActiveFilter("In Stock")} className={filterBtn("In Stock")}>
            In Stock
          </button>
          <button onClick={() => setActiveFilter("Out of Stock")} className={filterBtn("Out of Stock")}>
            Out of Stock
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow text-sm hover:bg-[#A68B5BFF] transition">
            Category: All
            <img src={downChevron} className="h-3" />
          </button>
          <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow text-sm hover:bg-[#A68B5BFF] transition">
            Sort: Newest
            <img src={downChevron} className="h-3" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[ 
          {img:d1,name:"Aurelia Minimalist",price:"₹450.00",stock:"In Stock",left:"24"},
          {img:d2,name:"Elysian Fragrance",price:"₹120.00",stock:"Low Stock",left:"5"},
          {img:d3,name:"Nomad Canvas",price:"₹285.00",stock:"Out of Stock",left:"0"},
          {img:d4,name:"Suede Chelsea Boot",price:"₹320.00",stock:"In Stock",left:"12"},
        ].map((item,i)=>(
          <div key={i} className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">        
            <img src={item.img} className="h-52 w-full object-cover"/>
            <div className="p-4">      
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <span className="text-[#C2863FFF] font-semibold text-sm">
                  {item.price}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Premium quality product with modern design
              </p>
              <div className="flex justify-between text-xs mt-2">
                <span>{item.stock}</span>
                <span>{item.left} UNITS LEFT</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {[
          {
            img: m1,
            name: "Terrazzo Stone",
            price: "₹65.00",
            desc: "Set of 4 hand-polished natural",
            stock: "In Stock",
            left: "42",
          },
          {
            img: m2,
            name: "Merino Wool Scarf",
            price: "₹95.00",
            desc: "Extra-fine merino wool from",
            stock: "Low Stock",
            left: "8",
          },
          {
            img: m3,
            name: "Velvet Accent",
            price: "₹890.00",
            desc: "Mid-century modern silhouette",
            stock: "Low Stock",
            left: "2",
          },
          {
            img: m4,
            name: "Copper Drip Kettle",
            price: "₹115.00",
            desc: "Precision gooseneck spout for",
            stock: "In Stock",
            left: "15",
          },
        ].map((item, i) => (
          <div  key={i}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden" >
            <img src={item.img} className="h-52 w-full object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <span className="text-[#C2863FFF] font-semibold text-sm">
                  {item.price}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {item.desc}
              </p>
              <div className="flex justify-between text-xs mt-3">
                <span className="bg-gray-100 px-2 py-1 rounded">
                  {item.stock}
                </span>
                <span className="text-gray-400">
                  {item.left} UNITS LEFT
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
   <p className="text-sm text-gray-500">
    Showing 8 of 124 products
  </p>
  <div className="flex items-center gap-2">
    <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      className="p-2 rounded-lg bg-white shadow hover:bg-gray-100">
      <img src={leftArrow} className="h-3" />
    </button>
    {[...Array(totalPages)].map((_, i) => {
      const page = i + 1;
      return (
        <button  key={page}  onClick={() => setCurrentPage(page)}
          className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition
            ${
              currentPage === page
                ? "bg-[#A68B5BFF] text-white"
                : "bg-white text-black hover:bg-gray-100" }`}>
          {page}
        </button>
      ); })}
    <button onClick={() =>
        setCurrentPage((prev) => Math.min(prev + 1, totalPages)) }
      className="p-2 rounded-lg bg-white shadow hover:bg-gray-100" >
      <img src={rightArrow3} className="h-3" />
    </button>
  </div>
</div>
    </div>
  );
};
export default ProductManagement;