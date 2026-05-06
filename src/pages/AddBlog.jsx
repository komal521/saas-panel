import React, { useState } from "react";
import searchIcon from "../assets/search.png";
import notificationIcon from "../assets/notification.png";
import clockIcon from "../assets/clock.png";
import reportIcon from "../assets/report.png";
import chartIcon from "../assets/chart.png";
import filterIcon from "../assets/filter.png";
import addIcon from "../assets/add.png";
import l1 from "../assets/l1.jpeg";
import l2 from "../assets/l2.jpeg";
import l3 from "../assets/l3.jpeg";
import l4 from "../assets/l4.jpeg";
import l5 from "../assets/l5.jpeg";
import l6 from "../assets/l6.jpeg";
import viewIcon from "../assets/view.png";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/bin.png";
import shareIcon from "../assets/share.png";
import leftIcon from "../assets/left.png";
import rightIcon from "../assets/right-arrow (3).png";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
const [activePage, setActivePage] = useState(1);
const blogs = [
  {
    img: l1,
    title: "The Art of Minimalist Living in a",
    status: "Published",
    read: "6 MIN READ",
    date: "MAY 12, 2024",
    desc: "Discover how simplifying your physical environment can lead to a more focused",
    views: "2.4k",
    avg: "84%"
  },
  {
    img: l2,
    title: "10 Organic Textures to Elevate",
    status: "Published",
    read: "4 MIN READ",
    date: "MAY 08, 2024",
    desc: "From raw linen to distressed wood, learn how to layer textures to add warmth",
    views: "1.8k",
    avg: "84%"
  },
  {
    img: l3,
    title: "Brewing the Perfect Cup: A",
    status: "Draft",
    read: "12 MIN READ",
    date: "PENDING",
    desc: "Everything from bean selection to water temperature matters. We sit down with",
    views: "0",
    avg: "84%"
  },
  {
    img: l4,
    title: "Sustainable Architecture:",
    status: "Published",
    read: "8 MIN READ",
    date: "APR 24, 2024",
    desc: "Exploring passive cooling, recycled concrete, and circular design principles in",
    views: "3.1k",
    avg: "84%"
  },
  {
    img: l5,
    title: "The Psychology of Color in",
    status: "Published",
    read: "5 MIN READ",
    date: "APR 18, 2024",
    desc: "How specific hues influence cognitive performance and mood. Learn why your",
    views: "4.2k",
    avg: "84%"
  },
  {
    img: l6,
    title: "Weekend Escapes: Hidden",
    status: "Draft",
    read: "7 MIN READ",
    date: "PENDING",
    desc: "A curated list of off-grid retreats for those looking to disconnect and recharge amidst",
    views: "0",
    avg: "84%"
  }
];
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FFF49CFF] p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Blog Management</h1>
          <p className="text-gray-500 text-sm">
            Refine your story, reach your audience
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center bg-white border rounded-full px-3 py-2 w-full md:w-[250px]">
            <img src={searchIcon} className="h-4 mr-2" />
            <input placeholder="Search posts..."
              className="outline-none text-sm w-full" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl shadow flex items-center gap-3 
          bg-gradient-to-b from-[#F9FAFB] to-[#C2863F] text-black">
          <img src={clockIcon} className="h-6" />
          <div>
            <p className="text-xs">Total Published</p>
            <h2 className="font-bold text-lg">42</h2>
          </div>
        </div>
        <div className="p-4 rounded-xl shadow flex items-center gap-3 
          bg-gradient-to-b from-[#F9FAFB] to-[#C2863F] text-black">
          <img src={reportIcon} className="h-6" />
          <div>
            <p className="text-xs">Active Drafts</p>
            <h2 className="font-bold text-lg">08</h2>
          </div>
        </div>
        <div className="p-4 rounded-xl shadow flex items-center gap-3 
          bg-gradient-to-b from-[#F9FAFB] to-[#C2863F] text-black">
          <img src={chartIcon} className="h-6" />
          <div>
            <p className="text-xs">Avg. Monthly Reads</p>
            <h2 className="font-bold text-lg">24.8k</h2>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="flex items-center bg-white border rounded-lg px-3 py-2 w-full sm:w-[250px]">
            <img src={searchIcon} className="h-4 mr-2" />
            <input  placeholder="Search by title or keyword..."
              className="outline-none text-sm w-full" />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#A68B5BFF] text-white text-sm hover:bg-[#C2863FFF] transition w-full sm:w-auto">
            <img src={filterIcon} className="h-4" />
            Filters </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <p className="text-sm text-gray-500 text-center sm:text-left whitespace-nowrap">
            Showing <span className="font-semibold text-black">6 posts</span></p>
        <button onClick={() => navigate("/add-blog")}
  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#A68B5BFF] text-white text-sm hover:bg-[#C2863FFF] transition whitespace-nowrap">
  <img src={addIcon} className="h-4" />
  Add New Blog
</button>
        </div>
      </div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {blogs.map((blog, i) => (
    <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="relative">
      {/* IMAGE */}
  <div className="relative">
   <div className="w-full h-[160px] sm:h-[170px] md:h-[180px] overflow-hidden">
    <img src={blog.img} 
      className="w-full h-full object-cover hover:scale-105 transition duration-300"  />
  </div>
  <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
    {blog.status} </span>
       </div>
        <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
          {blog.status}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3 text-[10px] text-gray-400 mb-2">
  <div className="flex items-center gap-1">
    <img src={clockIcon} className="h-3" />
    {blog.read}
  </div>
  <span>• {blog.date}</span>
</div>
        <h3 className="text-sm font-semibold leading-snug">
          {blog.title}  </h3>
        <p className="text-xs text-gray-500 mt-2">
  {blog.desc}
</p>
        <div className="flex items-center gap-4 text-[10px] text-gray-400 mt-3">
  <div className="flex items-center gap-1">
    <img src={viewIcon} className="h-3" />
    {blog.views} views
  </div>
  <div className="flex items-center gap-1">
    <img src={chartIcon} className="h-3" />
    {blog.avg} avg read
  </div>
</div>
        <div className="flex items-center justify-between mt-4 border-t pt-3 text-xs text-gray-600">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-black">
              <img src={editIcon} className="h-3" />
              Edit
            </button>
            <button className="flex items-center gap-1 hover:text-red-500">
              <img src={deleteIcon} className="h-3" />
              Delete
            </button>
          </div>
          <button className="hover:text-black">
            <img src={shareIcon} className="h-4" />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
<div className="flex justify-center mt-10">
  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
    <button> <img src={leftIcon} className="h-4" /> </button>
    {[1,2,3,4,5,6,7,8].map(num => (
      <button  key={num}  onClick={() => setActivePage(num)}
        className={`w-7 h-7 rounded-full text-sm 
          ${activePage === num 
            ? "bg-[#A68B5BFF] text-white" 
            : "text-gray-600 hover:bg-gray-100"}`}>
        {num}
      </button> ))}
    <button> <img src={rightIcon} className="h-4" /> </button>
  </div>
   </div>

    </div>
  );
};

export default AddBlog;