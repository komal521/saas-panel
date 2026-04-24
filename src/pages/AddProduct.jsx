import React, { useState } from "react";
import checkIcon from "../assets/check.png";
import chainIcon from "../assets/chain.png";
import downChevron from "../assets/down-chevron.png";
import starIcon from "../assets/star.png";
import boxIcon from "../assets/box.png";
import codeIcon from "../assets/code.png";
import arrowIcon from "../assets/right-arrow.png";
import sideImg from "../assets/d2.jpeg";
import a1 from "../assets/a1.png";
import a3 from "../assets/a3.jpg";
import uploadIcon from "../assets/download.png";
import closeIcon from "../assets/close.png";
import addIcon from "../assets/add.png";
import imageIcon from "../assets/image.png";
import d3 from "../assets/d3.jpeg";
import d4 from "../assets/d4.jpeg";
import k1 from "../assets/k1.jpeg";
import toggleIcon from "../assets/toggle.png";
import infoIcon from "../assets/information (2).png";
const AddProduct = () => {
  const [images, setImages] = useState([d3, d4, k1]);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImgs = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImgs]);};
    const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);};
   return (
    <div className="p-4 md:p-6 bg-[#F6F4EF] min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-semibold"> Add New Product</h1>
       <div className="flex flex-col sm:flex-row gap-3">
     <button onClick={() => alert("Changes cancelled!")}
    className="w-full sm:w-auto px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm transition">
    Cancel </button>
  <button onClick={() => alert("Product saved successfully!")}
    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#C2863FFF] hover:bg-[#A68B5BFF] text-white px-4 py-2 rounded-lg text-sm shadow transition" >
    <img src={checkIcon} className="h-4" />
    Save Product </button>
      </div> </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-5 rounded-xl shadow">
        <div className="flex items-start gap-3 mb-4">
        <img src={chainIcon} className="h-5 mt-1" />
      <div>
         <h2 className="font-semibold text-sm">PRODUCT INFORMATION  </h2>
         <p className="text-xs text-gray-500">
          Define the core identity of your product</p>
          </div></div>
          <label className="text-xs text-black">PRODUCT NAME</label>
             <input placeholder="e.g. Gold Leaf Embossed Journal"
              className="w-full border p-3 rounded-lg mb-3 text-sm"/>
            <label className="text-xs text-black">PRODUCT DESCRIPTION</label>
            <textarea className="w-full border p-3 rounded-lg mb-3 text-sm h-28 resize-none"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-black">CATEGORY</label>
                <div className="flex justify-between items-center border p-3 rounded-lg text-sm">
                  <span>Handcrafted Writing</span>
                  <img src={downChevron} className="h-3" />
                </div>
              </div>
              <div>
                <label className="text-xs text-black">
                  SUB-CATEGORY
                </label>
                <div className="flex justify-between items-center border p-3 rounded-lg text-sm">
                  <span>Artisan Journals</span>
                  <img src={downChevron} className="h-3" />
                 </div>
                </div>
               </div>
              </div>
          <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#f3e7d9] p-2 rounded-lg text-[#A68B5BFF]"> ₹</div>
          <div>
          <h2 className="font-semibold text-sm">PRICING & INVENTORY </h2>
          <p className="text-xs text-gray-500">
            Management of retail value and stock availability</p>
          </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-black">BASE PRICE</label>
                <input className="border p-3 rounded-lg w-full" placeholder="₹ 0.00" />
              </div>
              <div>
                <label className="text-xs text-black">DISCOUNT PRICE (Optional) </label>
                <input className="border p-3 rounded-lg w-full" placeholder="₹ 0.00" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="text-xs text-black">STOCK QUANTITY</label>
                <div className="flex items-center border p-3 rounded-lg gap-2">
                  <img src={boxIcon} className="h-4" />
                  <input className="w-full outline-none text-sm" placeholder="50" />
                </div>
              </div>
              <div>
                <label className="text-xs text-black">SKU CODE</label>
                <div className="flex items-center border p-3 rounded-lg gap-2">
                  <img src={codeIcon} className="h-4" />
                  <input className="w-full outline-none text-sm" placeholder="G-CRTN-001" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex items-center gap-2 mb-2">
              <img src={imageIcon} className="h-4" />
              <h2 className="font-semibold text-sm">PRODUCT MEDIA</h2>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              High-quality imagery that captures the essence
            </p>
            <label className="border-2 border-dashed border-[#e5d3b3] p-6 rounded-xl text-center cursor-pointer block bg-[#faf7f2]">
              <img src={uploadIcon} className="h-6 mx-auto mb-3 opacity-70" />
              <p className="text-sm font-medium text-gray-700">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400 mt-1">
                High-resolution PNG or JPG (min. 1200x1200px)
              </p>
              <button type="button" onClick={() => alert("Opening file manager...")}
                className="mt-4 px-4 py-2 text-sm border rounded-lg bg-white shadow-sm hover:bg-gray-50">
                Select Files</button>
              <input type="file" hidden multiple onChange={handleFileChange} />
            </label>
            <div className="flex gap-3 mt-4 flex-wrap">
              {images.map((img, i) => (
                <div key={i} className="relative">
                  <img src={img} className="h-16 w-16 rounded-lg object-cover" />
                  <img  src={closeIcon} onClick={() => removeImage(i)}
                    className="absolute top-1 right-1 h-4 bg-white rounded-full p-[2px] shadow cursor-pointer" />
                </div>
              ))}
              <div className="h-16 w-16 border rounded-lg flex items-center justify-center">
                <img src={addIcon} className="h-5" />
              </div>
            </div>
          </div>
          <div className="bg-[#f8f8f8] p-6 rounded-2xl border border-gray-200">
     <div className="flex items-center gap-3 mb-4">
    <div className="bg-[#f3e7d9] p-2 rounded-lg">
      <img src={boxIcon} className="h-4" />
    </div>
    <div>
      <h2 className="text-sm font-semibold text-gray-800">
        PRODUCT VARIANTS
      </h2>
      <p className="text-xs text-gray-500">
        Offer your customers choices in size, color, or material
      </p>
    </div>
  </div>
  <hr className="mb-5" />
  <div className="bg-white rounded-xl border border-gray-200 p-4">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-800">
          Current Variants
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Define different options for this product.
        </p>
      </div>
      <button onClick={() => alert("Add Variant clicked!")}
        className="flex items-center gap-1 text-xs text-[#A68B5BFF] border border-[#e5d3b3] bg-white px-3 py-1.5 rounded-lg hover:bg-[#faf6ef]" >
        <img src={addIcon} className="h-3" />
        Add Variant
      </button>
    </div>
    <div className="space-y-3">
      {[
        { name: "Gold Leaf", color: "#D4AF37", price: "+₹0.00" },
        { name: "Silver Leaf", color: "#C0C0C0", price: "+₹0.00" },
        { name: "Rose Copper", color: "#B87333", price: "+₹0.00" }].map((v, i) => (
        <div key={i}
          className="flex justify-between items-center border border-gray-200 rounded-lg px-4 py-3"  >
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-full" style={{ background: v.color }} ></div>
            <span className="text-sm text-gray-700">{v.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400">{v.price}</span>
            <span className="text-[#161A1DFFn] text-xs font-medium bg-green-50 px-2 py-0.5 rounded">
              In Stock
            </span>
            <img src={closeIcon}
              className="h-4 cursor-pointer opacity-60 hover:opacity-100"/>
          </div>
        </div>
      ))}
      </div>
    </div>
     </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-[#f3e7d9] p-2 rounded-lg">
                <img src={starIcon} className="h-4" />
              </div>
              <div>
                <h2 className="font-semibold text-sm">STATUS & SETTINGS</h2>
                <p className="text-xs text-gray-500">
                  Finalize the visibility and customization options
                </p>
              </div>
            </div>
            <hr className="mb-4" />
            <div className="flex items-center justify-between border rounded-xl p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#f3e7d9] p-2 rounded-full">
                  <img src={checkIcon} className="h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Active Status</p>
                  <p className="text-xs text-gray-500">
                    Visible to customers on the storefront
                  </p>
                </div>
              </div>
              <img src={toggleIcon} className="h-6" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border rounded-xl p-4 flex items-start gap-2">
                <input type="checkbox" defaultChecked className="mt-1 accent-[#A68B5BFF]" />
                <div>
                  <p className="text-sm font-medium">Featured Product</p>
                  <p className="text-xs text-gray-500">
                    Display in curated collections
                  </p>
                </div>
              </div>
              <div className="border rounded-xl p-4 flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-[#A68B5BFF]" />
                <div>
                  <p className="text-sm font-medium">Allow Customization</p>
                  <p className="text-xs text-gray-500">
                    Enabled bespoke engraving options
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <img src={infoIcon} className="h-4" />
                <span>Last saved today at 10:24 AM</span>
              </div>
              <div className="flex gap-3">
                <button className="text-sm text-gray-500">
                  Discard Changes
                </button>
                <button className="px-4 py-2 border border-[#A68B5BFF] text-[#C2863FFF] rounded-lg text-sm">
                  Preview Storefront
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
           <p className="text-xs font-semibold text-gray-400 mb-2">LIVE STOREFRONT PREVIEW</p>
            <div className="bg-white p-4 rounded-xl shadow">
              <img src={sideImg} className="rounded-lg mb-3 w-full" />
              <p className="text-[10px] text-[#C2863FFF] font-semibold"> HANDCRAFTED NOTEBOOKS</p>
              <h3 className="font-semibold text-sm"> Gold Leaf Embossed Journal </h3>
              <p className="text-xs text-gray-400 mt-1"> RETAIL PRICE </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">₹85.00</span>
                <div className="flex -space-x-2">
                  <img src={a1} className="h-6 w-6 rounded-full border-2 border-white" />
                  <img src={a3} className="h-6 w-6 rounded-full border-2 border-white" />
                </div>
              </div>
              <div className="mt-3">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-[#C2863FFF] w-[75%] rounded-full"></div>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 text-right">  QUALITY CHECK 75% </p>
              </div>
            </div>
          </div>
          <div className="bg-[#f3e7d9] p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <img src={starIcon} className="h-4" />
              <h3 className="font-semibold text-sm">Luxury Listing Tips</h3>
            </div>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Use high-quality images</li>
              <li>• Keep titles short</li>
              <li>• Highlight craftsmanship</li>
              <li>• Use proper variants</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="border rounded-xl py-4 flex flex-col items-center">
                <img src={boxIcon} className="h-5 mb-1" />
                <span className="text-xs">Duplicate</span>
              </button>
              <button className="border rounded-xl py-4 flex flex-col items-center">
                <img src={arrowIcon} className="h-5 mb-1 rotate-180" />
                <span className="text-xs">Archive</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;