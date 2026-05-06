import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeIcon from "../assets/close.png";
import reportIcon from "../assets/report.png";
import infoIcon from "../assets/information (2).png";
import tagIcon from "../assets/tag.png";
import boxIcon from "../assets/box.png";
import cameraIcon from "../assets/camra.png";
import uploadIcon from "../assets/upload.png";
import clockIcon from "../assets/clock (1).png";
import addIcon from "../assets/add.png";
import chainIcon from "../assets/chain.png";
import d3 from "../assets/d3.jpeg";
import d4 from "../assets/d4.jpeg";
const AddEditProduct = () => {
  const navigate = useNavigate();
  const [lowStock, setLowStock] = useState(true);
  const [active, setActive] = useState(true);
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF49CFF_100%)] p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
          <h1 className="text-lg md:text-xl font-semibold">
            Add / Edit Product
          </h1>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => navigate("/manage-category")}
              className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm bg-white">
              <img src={closeIcon} className="h-4" />
              Cancel
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#A68B5BFF] text-white rounded-lg text-sm shadow">
              <img src={reportIcon} className="h-4" />
              Save Product
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow border p-4 md:p-6">
          <div className="flex items-start gap-3 mb-5">
            <div className="bg-[#FFF4DC] p-2 rounded-full">
              <img src={infoIcon} className="h-4" />
            </div>
            <div>
              <h2 className="font-semibold text-sm md:text-base">
                Basic Information
              </h2>
              <p className="text-xs text-gray-500">
                General information about the product shown to customers.
              </p>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input  placeholder="e.g. Premium Silk Scarf - Azure Mist"
              className="border rounded-lg p-2.5 text-sm w-full mt-1 outline-none focus:ring-1 focus:ring-[#C2863FFF]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium">
                Category <span className="text-red-500">*</span>
              </label>
              <input className="border rounded-lg p-2.5 text-sm w-full mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium">Brand</label>
              <input placeholder="Enter Brand Name"
                className="border rounded-lg p-2.5 text-sm w-full mt-1" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">
              Product Description</label>
            <textarea  rows={4}  placeholder="Describe the material, fit, and unique features..."
              className="border rounded-lg p-2.5 text-sm w-full mt-1 resize-none" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div>
              <div className="flex items-start gap-3 mb-5">
                <div className="bg-[#FFF4DC] p-2 rounded-full">
                  <img src={tagIcon} className="h-4" />
                </div>
                <div>
                  <h2 className="font-semibold text-sm md:text-base">
                    Pricing
                  </h2>
                  <p className="text-xs text-gray-500">
                    Configure price, tax, and promotional rates.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium">
                    Base Price <span className="text-red-500">*</span>
                  </label>
                  <input placeholder="$ 0.00"
                    className="border rounded-lg p-2.5 text-sm w-full mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Discount Price
                  </label>
                  <input placeholder="$ 0.00"
                    className="border rounded-lg p-2.5 text-sm w-full mt-1"/>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">
                  Tax Configuration (Optional)
                </label>
                <input placeholder="e.g. VAT 15%"
                  className="border rounded-lg p-2.5 text-sm w-full mt-1" />
              </div>
            </div>
            <div>
              <div className="flex items-start gap-3 mb-5">
                <div className="bg-[#FFF4DC] p-2 rounded-full">
                  <img src={boxIcon} className="h-4" />
                </div>
                <div>
                  <h2 className="font-semibold text-sm md:text-base">
                    Inventory</h2>
                  <p className="text-xs text-gray-500">
                    Manage stock levels and tracking numbers.
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium">
                  SKU (Stock Keeping Unit) <span className="text-red-500">*</span>
                </label>
                <input placeholder="AUREUM-SKU-001"
                  className="border rounded-lg p-2.5 text-sm w-full mt-1"/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium">
                    Stock Quantity <span className="text-red-500">*</span>
                  </label>
                  <input placeholder="0"
                    className="border rounded-lg p-2.5 text-sm w-full mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Low Stock Limit
                  </label>
                  <input  placeholder="5"
                    className="border rounded-lg p-2.5 text-sm w-full mt-1"/>
                </div>
              </div>
              <div className="bg-gray-50 border rounded-xl p-3 flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">
                    Low Stock Notifications
                  </p>
                  <p className="text-xs text-gray-500">
                    Alert me via email when stock is low
                  </p>
                </div>
                <div onClick={() => setLowStock(!lowStock)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                    lowStock ? "bg-[#C2863FFF]" : "bg-gray-300"
                  }`}>
                  <div
                    className={`bg-white w-4 h-4 rounded-full ${
                      lowStock ? "translate-x-6" : ""
                    }`} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-start gap-3 mb-5">
              <div className="bg-[#FFF4DC] p-2 rounded-full">
                <img src={cameraIcon} className="h-4" />
              </div>
              <div>
                <h2 className="font-semibold text-sm md:text-base">
                  Product Media
                </h2>
                <p className="text-xs text-gray-500">
                  Add up to 5 high-resolution images of your product.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 border-dashed border rounded-xl p-6 text-center bg-gray-50">
                <img src={uploadIcon} className="h-6 mx-auto mb-2" />
                <p className="text-sm font-medium">
                  Click to upload or drag & drop
                </p>
                <p className="text-xs text-gray-400">
                  PNG, JPG or WebP up to 10MB
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 border rounded-lg p-2 text-xs">
                  <img src={infoIcon} className="h-4" />
                  Minimum size 800x800px
                </div>
                <div className="flex items-center gap-2 border rounded-lg p-2 text-xs">
                  <img src={clockIcon} className="h-4" />
                  Use neutral backgrounds
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5 flex-wrap">
              <img src={d3} className="h-16 w-16 rounded-lg object-cover" />
              <img src={d4} className="h-16 w-16 rounded-lg object-cover" />
              <div className="h-16 w-16 border flex items-center justify-center rounded-lg">
                <img src={addIcon} className="h-5" />
              </div>
            </div>
          </div>
          <div className="mt-6 bg-gray-100 border rounded-2xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-white border p-2 rounded-full shadow-sm">
                <img src={chainIcon} className="h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">Product Status</p>
                <p className="text-xs text-gray-500">
                  Is this product available for purchase?
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 bg-white border rounded-xl px-4 py-3 w-full md:w-auto shadow-sm">
              <div>
                <p className="text-sm font-medium">Public / Active</p>
                <p className="text-xs text-gray-400">
                  Currently visible on storefront
                </p>
              </div>
              <div  onClick={() => setActive(!active)}
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                  active ? "bg-[#C2863FFF]" : "bg-gray-300"
                }`}>
                <div className={`bg-white w-4 h-4 rounded-full ${
                    active ? "translate-x-6" : "" }`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddEditProduct;