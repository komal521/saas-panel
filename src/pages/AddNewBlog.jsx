import React from "react";
import notificationIcon from "../assets/notification.png";
import imageIcon from "../assets/image.png";
import uploadIcon from "../assets/upload.png";
import addIcon from "../assets/add.png";
import premiumIcon from "../assets/premium.png";
import downIcon from "../assets/down-chevron.png";
import closeIcon from "../assets/close.png";
import clockIcon from "../assets/clock.png";
import reportIcon from "../assets/report.png";
import k2 from "../assets/k2.jpeg";
import k4 from "../assets/k4.jpeg";
const AddNewBlog = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold">Add New Blog</h1>
          <p className="text-sm text-gray-500">
            Draft your next masterpiece with our premium editor  </p>
        </div>
      
      </div>
      <div className="bg-white rounded-xl shadow p-4 md:p-6 max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-black mb-2">
          CORE CONTENT </h2>
        <div className="border-b mb-4"></div>
        <div className="mb-4">
          <p className="text-xs mb-1 text-black">Blog Title</p>
          <input placeholder="Enter a captivating title..."
            className="w-full border rounded-lg p-3 text-sm outline-none focus:ring-1 focus:ring-[#A68B5BFF]" />
        </div>
        <div className="mb-2">
          <p className="text-xs mb-1 text-black">
            Description & Content </p>
          <div className="relative">
            <textarea  placeholder="Start writing your story here..."
              className="w-full border rounded-lg p-3 text-sm h-40 outline-none resize-none focus:ring-1 focus:ring-[#A68B5BFF]" />
            <span className="absolute bottom-2 right-3 text-[10px] text-black">
              0 / 5000 characters
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-6 mb-2">
          <img src={imageIcon} className="h-4" />
          <h2 className="text-sm font-semibold text-black">
            MEDIA ASSETS
          </h2>
        </div>
        <div className="border-b mb-4"></div>
        <p className="text-xs text-black mb-3">
  Upload Images</p>
        <div className="border-2 border-dashed rounded-xl p-6 text-center 
        bg-gradient-to-b from-[#FFFFFF] to-[#FFF49CFF]">
          <img src={uploadIcon} className="h-6 mx-auto mb-2" />
          <p className="text-sm font-medium">
            Click or drag images here to upload
          </p>
          <p className="text-xs text-black mt-1">
            PNG, JPG or WEBP (Max 10MB per file)
          </p>
        </div>
        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <img src={k4} className="h-14 w-20 rounded object-cover" />
          <img src={k2} className="h-14 w-20 rounded object-cover" />
          <div className="flex flex-col items-center justify-center border rounded-lg px-3 py-2 text-xs cursor-pointer hover:bg-gray-100">
            <img src={addIcon} className="h-4 mb-1" />
            Add More
          </div>
        </div>
        <div className="flex items-center gap-2 mt-6 mb-2">
          <img src={premiumIcon} className="h-4" />
          <h2 className="text-sm font-semibold text-black">
            ORGANIZATION
          </h2>
        </div>
        <div className="border-b mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs mb-1 text-black">Category</p>
            <div className="relative">
              <input   value="Lifestyle & Wellness"   readOnly  className="w-full border rounded-lg p-3 text-sm"   />
              <img   src={downIcon}
                className="h-4 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <div>
            <p className="text-xs mb-1 text-black">Tags</p>
            <input   placeholder="# add tags"
              className="w-full border rounded-lg p-3 text-sm mb-2 outline-none focus:ring-1 focus:ring-[#A68B5BFF]"  />
            <div className="flex flex-wrap gap-2">
              {["Lifestyle", "Tech", "Minimalism"].map((tag, i) => (
                <span  key={i}
                  className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2 text-xs" >
                  {tag}
                  <img src={closeIcon} className="h-3 cursor-pointer" />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          <div className="flex items-center gap-2 text-xs text-black">
            <img src={clockIcon} className="h-4" />
            Draft auto-saved 2 mins ago
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="px-4 py-2 rounded-lg text-sm text-white bg-[#A68B5BFF] hover:bg-[#C2863FFF] w-full md:w-auto">
              Cancel
            </button>
            <button className="flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-lg text-white bg-[#A68B5BFF] hover:bg-[#C2863FFF] w-full md:w-auto">
              <img src={reportIcon} className="h-4" />
              Save as Draft
            </button>
            <button className="px-5 py-2 rounded-lg text-white text-sm bg-[#A68B5BFF] hover:bg-[#C2863FFF] w-full md:w-auto">
              Publish Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBlog;