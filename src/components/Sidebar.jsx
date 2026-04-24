import React, { useState } from "react";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.png";
import dashboardIcon from "../assets/dashboard (1).png";
import ordersIcon from "../assets/online-shopping.png";
import productIcon from "../assets/box.png";
import blogIcon from "../assets/blogging.png";
import profiledetails from "../assets/user (1).png";
import { useNavigate} from "react-router-dom";
import usersIcon from "../assets/user.png";
import godownIcon from "../assets/warehouse.png";
import supplierIcon from "../assets/cargo-truck.png";
function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState(false);
  const allItems = [
    { name: "Dashboard", icon: dashboardIcon },
    { name: "Orders", icon: ordersIcon },
    { name: "Product Management", icon: productIcon },
    { name: "Blog", icon: blogIcon },
    { name: "Profile details", icon: profiledetails },
   { name: "Staff Management", icon: usersIcon },
   { name: "Godown Management", icon: godownIcon },
  { name: "Supplier Management", icon: supplierIcon },];
  const navigate = useNavigate();
  return (
    <>
      <div className="md:hidden flex items-center justify-between bg-black text-white p-4">
        <img src={logo} alt="logo" className="h-8" />
        <button onClick={() => setOpen(true)}>
          <img src={menuIcon} alt="menu" className="h-6 w-6 invert" />
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)} />
      )}
      <div
     className={`fixed top-0 left-0 h-full w-64 bg-black text-white flex flex-col justify-between transform 
       ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 z-50`}>
        <div>
          <div className="p-4">
            <img src={logo} alt="logo" className="h-10" />
          </div>
          <div className="px-3">
            {allItems.map((item, index) => (
              <div key={index} onClick={() => {
      setActive(item.name);
       setOpen(false);
       if (item.name === "Dashboard") navigate("/");
       else if (item.name === "Orders") navigate("/orders");
       else if (item.name === "Product Management") navigate("/product");
       else if (item.name === "Staff Management") navigate("/staff");
       else if (item.name === "Godown Management") navigate("/godown");
       else if (item.name === "Supplier Management") navigate("/supplier");
       else if (item.name === "Blog") navigate("/blog");
       else if (item.name === "Settings") navigate("/settings");}}
        className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-2 transition ${
                  active === item.name
                    ? "bg-[#A68B5BFF] text-black"
                    : "hover:bg-gray-800"}`} >
                <img src={item.icon} alt=""
                  className={`h-5 w-5 object-contain transition ${
                    active === item.name
                      ? "brightness-0"
                      : "invert group-hover:scale-110"}`}/>
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div> 
      </div>
    </>
  );
}
export default Sidebar;