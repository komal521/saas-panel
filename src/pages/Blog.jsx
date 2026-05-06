import React, { useState } from "react";
import z1 from "../assets/z1.jpeg";
import user1 from "../assets/user1.png";
import arrowIcon from "../assets/right-arrow (2).png";
import e1 from "../assets/e1.jpeg";
import { useNavigate } from "react-router-dom";
import e2 from "../assets/e2.jpeg";
import e3 from "../assets/e3.jpeg";
import e4 from "../assets/e4.jpeg";
import e5 from "../assets/e5.jpeg";
import e6 from "../assets/e6.jpeg";
import y1 from "../assets/y1.jpeg";
import y2 from "../assets/y2.jpeg";
import addIcon from "../assets/add.png";
import y3 from "../assets/y3.jpeg";
import searchIcon from "../assets/search.png";
import infoIcon from "../assets/information (2).png";
import chainIcon from "../assets/chain.png";
import a1 from "../assets/a1.jpg";
import a3 from "../assets/a3.jpg";
import a1png from "../assets/a1.png";
import alisha from "../assets/alisha.jpg";
import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import gmailIcon from "../assets/gmail.png";
const Blog = () => {
  const [visible, setVisible] = useState(6);
  const blogData = [
    {
      title: "How to Scale Your SaaS Infrastructure in 2024",
      desc: "Scaling isn't just about adding more servers. It's about optimizing your architecture for resilience and growth.",
      author: "Sarah Chen",
      date: "Oct 12, 2024",
      category: "Tech",
      image: e1,
      authorImg: a1
    },
    {
      title: "Mastering the Art of Customer Retention for SaaS",
      desc: "Churn is the silent killer of SaaS. Learn the psychological triggers that keep customers engaged.",
      author: "Marcus Thorne",
      date: "Oct 12, 2024",
      category: "SaaS",
      image: e2,
      authorImg: a3
    },
    {
      title: "The Shift Towards Product-Led Growth in Sales",
      desc: "Sales-led growth is facing challenges. Explore why giants are adopting product-led strategies.",
      author: "Elena Rodriguez",
      date: "Oct 12, 2024",
      category: "Business",
      image: e3,
      authorImg: a1png
    },
    {
      title: "Effective B2B Marketing Strategies",
      desc: "You don't need a massive budget to dominate your niche. Discover high-leverage tactics.",
      author: "David Kim",
      date: "Oct 12, 2024",
      category: "Marketing",
      image: e4,
      authorImg: alisha
    },
    {
      title: "Why Developer Experience (DX) is Your Advantage",
      desc: "A happy developer is a productive developer. Improve internal tools for better results.",
      author: "Sarah Chen",
      date: "Oct 12, 2024",
      category: "Tech",
      image: e5,
      authorImg: t1
    },
    {
      title: "Navigating Global Compliance: GDPR",
      desc: "Data privacy isn't optional. A guide for SaaS founders to build compliant systems.",
      author: "Marcus Thorne",
      date: "Oct 12, 2024",
      category: "Business",
      image: e6,
      authorImg: t2
    }
  ];
  const handleClick = () => {
    alert("Read More clicked ");
  };
  const posts = [
  {
    img: y1,
    title: "Building an API First Culture",
    time: "2 hours ago",
  },
  {
    img: y2,
    title: "The Hidden Costs of Microservices",
    time: "5 hours ago",
  },
  {
    img: y3,
    title: "UX Trends in Enterprise Dashboards",
    time: "1 day ago",
  },
];
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#BCC7D2] p-4 md:p-8">
      <div className="flex justify-end mb-4">
 <button onClick={() => navigate("/blog-list")}
  className="flex items-center gap-2 bg-[#A68B5BFF] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
  <img src={addIcon} alt="add" className="h-4 w-4" />
  Add Blog
</button>
</div>
    <div className="relative rounded-2xl overflow-hidden shadow-xl">
    <img src={z1} className="w-full h-[220px] sm:h-[280px] md:h-[420px] object-cover" />
     <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent 
       p-4 sm:p-6 md:p-10 flex flex-col justify-center">
    <span className="bg-[#FFF49CFF] text-black text-[10px] sm:text-xs px-2 py-1 rounded-full w-fit mb-3 font-semibold">
      Featured Article
    </span>
    <h1 className="text-white text-lg sm:text-xl md:text-4xl font-bold max-w-2xl leading-snug">
      The Future of SaaS: AI-Native Platforms and the End of Legacy Tools</h1>
    <p className="text-gray-200 mt-2 sm:mt-3 max-w-xl text-[11px] sm:text-sm md:text-base">
      Explore how next-generation platforms are leveraging AI to automate workflows.
    </p>
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-4 sm:mt-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <img src={user1} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-white"/>
        <div>
          <p className="text-white text-xs sm:text-sm font-semibold">
            Juliane Vino
          </p>
          <p className="text-gray-300 text-[10px] sm:text-xs">
            Content Writer • 5 min read
          </p>
        </div>
      </div>
      <button onClick={handleClick}
        className="flex items-center justify-center gap-2 bg-[#A68B5BFF]  px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm 
          font-semibold hover:scale-105 transition w-fit" >
        Read More
        <img src={arrowIcon} className="h-3 w-3 sm:h-4 sm:w-4" />
      </button>
     </div>
    </div>
   </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {blogData.slice(0, visible).map((blog, i) => (
         <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
         <div className="relative">
         <img src={blog.image} className="h-40 w-full object-cover" />
         <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
             {blog.category} </span>
          </div>
          <div className="p-4">
          <h3 className="font-semibold text-sm">{blog.title}</h3>
          <p className="text-xs text-gray-500 mt-2">{blog.desc}</p>
          <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
          <img src={blog.authorImg} className="h-6 w-6 rounded-full object-cover border" />
           <div>
             <p className="text-xs font-semibold">{blog.author}</p>
             <p className="text-[10px] text-gray-400">{blog.date}</p></div>
           </div>
             <button onClick={handleClick}
              className="flex items-center gap-1 text-xs text-[#C2863FFF] font-semibold">
                 Read More
             <img src={arrowIcon} className="h-3 w-3" />
            </button>
            </div>
            </div>
            </div>
            ))}
        </div>
              {/* SIDEBAR */}
        <div className="space-y-6">
      <div className="text-xs text-gray-500">
       Showing: <span className="font-semibold text-black">All 48 Articles</span>
         </div>
  {/* SEARCH */}
  <div className="bg-white p-4 rounded-xl shadow">
    <p className="text-sm font-semibold mb-2">Search</p>
    <div className="flex items-center border rounded-lg px-2">
      <img src={searchIcon} className="h-4 mr-2" />
      <input placeholder="Find a topic..."
        className="w-full py-2 outline-none text-sm" />
    </div>
  </div>
      <div className="bg-white p-4 rounded-xl shadow">
  <p className="text-sm font-semibold mb-3">Recent Posts</p>
  {posts.map((post, i) => (
    <div key={i} className="flex gap-3 mb-4 items-start">  
      <img src={post.img}
        className="h-10 w-10 rounded-lg object-cover"/>
      <div>
        <p className="text-xs font-medium leading-tight"> {post.title}</p>
        <div className="flex items-center gap-1 text-gray-400 text-[10px] mt-1">
          <img src={infoIcon} className="h-3" />
          {post.time}
        </div>
      </div>
    </div>
  ))}
</div>
  <div className="bg-white p-4 rounded-xl shadow">
    <p className="text-sm font-semibold mb-3">Popular Tags</p>
    <div className="flex flex-wrap gap-2 text-xs">
      {[
        "Leadership",
        "Design",
        "Growth",
        "Security",
        "Web3",
        "Product",
        "Sales",
        "Strategy"
      ].map(tag => (
        <span  key={tag}
          className="bg-gray-100 px-3 py-1 rounded-full" >
          {tag} </span>
      ))}
    </div>
  </div>
<div className="bg-[#F9FAFB] p-4 rounded-xl border">
  <div className="flex items-center gap-2 mb-2">
    <img src={chainIcon} className="h-4" />
    <p className="text-sm font-semibold text-[#161A1DFF]">
      Trending Now
    </p>
  </div>
  <p className="text-xs text-gray-500 mb-3">
    Join 50k+ readers who get our weekly insights on SaaS scaling.</p>
  <button onClick={() => alert("Joined Community ")}
    className="w-full bg-[#A68B5BFF] text-white py-2 rounded-lg text-sm font-semibold hover:scale-105 transition" >
    Join Community
  </button>
        </div>
     </div></div>
      <div className="flex justify-center mt-10">
        <button   onClick={() => setVisible(prev => prev + 3)}
          className="bg-white px-6 py-2 rounded-full shadow text-sm hover:scale-105 transition">
          Load More Articles
        </button>
      </div>
     <div className="mt-16 bg-[#FFF49CFF] rounded-2xl py-16 px-6 md:px-10 text-center">
      <div className="flex justify-center mb-4">
    <img src={gmailIcon} className="h-10 w-10 opacity-80" /> </div>
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
    Keep up with the SaaS revolution
  </h2>
  <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
    We send one email every Tuesday with the most actionable SaaS advice,
    case studies, and industry news. No fluff, ever.
  </p>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6">
    <input type="email" placeholder="Enter your email address"
      className="w-full sm:w-[300px] px-4 py-3 rounded-full border outline-none text-sm"/>
    <button onClick={() => alert("Subscribed Successfully ")}
      className="bg-[#A68B5BFF] text-white px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition">
      Subscribe
    </button>
  </div>
  <p className="text-[11px] text-gray-400 mt-4">
    By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
  </p>
</div>
    </div>
  );
};
export default Blog;