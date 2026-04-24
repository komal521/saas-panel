import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import ProductManagement from "./pages/ProductManagement";
import AddProduct from "./pages/AddProduct";
import AddCategory from "./pages/AddCategory";
import Blog from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="bg-gray-100 min-h-screen md:ml-64">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product" element={<ProductManagement />} />
           <Route path="/add-product" element={<AddProduct />} />
           <Route path="/add-category" element={<AddCategory />} />
           <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;