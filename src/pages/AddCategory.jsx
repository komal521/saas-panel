import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import addIcon from "../assets/add.png";
import uploadIcon from "../assets/upload.png";
import infoIcon from "../assets/information (2).png";
import downChevron from "../assets/down-chevron.png";
import m2 from "../assets/m2.jpeg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../assets/calendar1.png";
import { useRef } from "react";
const AddCategory = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [selectedBtn, setSelectedBtn] = useState("publish"); 
  const [date, setDate] = useState(null);
  const datePickerRef = useRef(null);
  return (
    <div className="w-full max-w-full overflow-hidden md:overflow-visible p-4 sm:p-6 bg-[#F8F6F2] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
      <div>
      <h1 className="text-2xl font-semibold">
        Add New Category </h1>
       <p className="text-gray-500 text-sm">
         Set up a new classification for your premium product collections.
      </p></div>
      <div className="flex gap-3 flex-wrap">
      <button onClick={() => navigate(-1)}
       className="px-4 py-2 bg-gray-200 rounded-lg text-sm">
         Cancel </button>
        <button className="px-4 py-2 bg-[#A68B5BFF] text-white rounded-lg flex items-center gap-2 text-sm">
         <img src={addIcon} className="h-4" />
         Create Category</button>
         </div></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      <div className="md:col-span-2 space-y-6">
      <div className="bg-white p-5 rounded-xl shadow w-full">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
      <img src={infoIcon} className="h-4" />
           Basic Information</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-3">  <div>
      <label className="text-sm font-medium">Category Name *</label>
      <input  className="border p-2 rounded w-full mt-1"  placeholder="Modern Living"/>
      <p className="text-xs text-red-500 mt-1">
      This name is already used for another category </p></div>
        <div>
         <label className="text-sm font-medium">  URL Slug </label>
          <input className="border p-2 rounded w-full mt-1" placeholder="/shop/modern-living"/>
          <p className="text-xs text-gray-400 mt-1">Generated automatically from name</p>
              </div>
            </div>
            <div className="mb-3">
            <label className="text-sm font-medium"> Description </label>
              <textarea className="w-full border p-2 rounded mt-1"
                placeholder="Describe what items are included in this category..."/>
              <p className="text-xs text-gray-400 mt-1">
                Provide a brief summary for customers (max 500 characters)
              </p>
            </div>
            <div>
              <label className="text-sm font-medium">
                Parent Category
              </label>
              <div className="flex justify-between items-center border p-2 rounded mt-1">
                <span className="text-sm text-gray-400">
                  Select parent category
                </span>
                <img src={downChevron} className="h-4" />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Optional: Nest this category under an existing one
              </p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow w-full">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <img src={uploadIcon} className="h-4" />
              Media & Assets
            </h3>
            <div className="border-2 border-dashed p-6 rounded-lg text-center w-full">
              <img src={uploadIcon} className="h-6 mx-auto mb-2" />
              <p className="text-sm text-gray-600"> Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400 mt-1">
                SVG, PNG, JPG or GIF (max. 800x400px) </p>
              <img src={m2} className="mt-4 mx-auto h-24 max-w-full rounded" />
            </div>
          </div>
        </div>
        <div className="space-y-6 w-full md:max-w-full">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-3">
              Visibility & Status
            </h3>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm font-medium">Active Status</p>
                <p className="text-xs text-gray-400">
                  Make this category visible on site
                </p>
              </div>
              <div onClick={() => setActive(!active)}
                className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
                  active ? "bg-[#C2863FFF]" : "bg-gray-300"}`}>
                <div className={`bg-white w-4 h-4 rounded-full shadow transform duration-300 ${
                    active ? "translate-x-5" : "" }`}/>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm mb-4">
              <input type="checkbox" />
              Featured Category
            </div>
           <div>
  <p className="text-xs text-gray-400 mb-1">
    SCHEDULE PUBLICATION
  </p>
  <div className="relative">
    <DatePicker
      ref={datePickerRef}
      selected={date}
      onChange={(d) => setDate(d)}
      showTimeSelect
      dateFormat="Pp"
      className="border p-2 pr-10 rounded w-full"
      popperPlacement="bottom-start"/>
    <img  src={calendarIcon}
      alt="calendar"
      onClick={() => datePickerRef.current.setOpen(true)}
      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 cursor-pointer" />
  </div>
  <p className="text-xs text-gray-400 mt-1">
    Leave blank to publish immediately upon saving </p>
    </div>
    </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-3">
              Metadata / SEO
            </h3>
            <div className="flex justify-between items-center border p-3 rounded mb-4">
              <span className="text-sm font-medium">
                Meta Title & Keywords
              </span>
              <img src={downChevron} className="h-4" />
            </div>
            <div className="mb-3">
              <label className="text-sm font-medium">
                SEO Title
              </label>
              <input className="border p-2 rounded w-full mt-1"
                placeholder="Meta title for search engines"/>
            </div>
            <div>
              <label className="text-sm font-medium">
                Meta Keywords </label>
              <input  className="border p-2 rounded w-full mt-1"
                placeholder="furniture, modern, luxury" />
            </div>
          </div>
          <div className="bg-[#FFF7ED] border border-orange-200 p-4 rounded-xl flex gap-2">
            <img src={infoIcon} className="h-4 mt-1" />
            <div>
              <p className="text-sm font-semibold text-[#C2863FFF]">Pro Tip </p>
              <p className="text-xs text-gray-600 mt-1">
                Categories with more than <span className="font-semibold">10 products</span> perform <span className="font-semibold">45%</span> better in search rankings. Try to group your collections logically to help customers find what they need.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">
          Last saved draft: 2 minutes ago
        </p>
        <div className="flex gap-3 flex-wrap justify-center md:justify-end w-full md:w-auto">
          <button onClick={() => setSelectedBtn("draft")}
            className={`px-4 py-2 rounded-lg text-sm ${
              selectedBtn === "draft"
                ? "bg-[#C2863FFF] text-white"
                : "bg-white border"}`} >
            Save as Draft
          </button>
          <button onClick={() => setSelectedBtn("publish")}
            className={`px-4 py-2 rounded-lg text-sm ${
              selectedBtn === "publish"
                ? "bg-[#C2863FFF] text-white"
                : "bg-white border" }`} >
            Publish Category
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddCategory;