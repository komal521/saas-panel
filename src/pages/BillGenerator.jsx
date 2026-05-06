  import React, { useState } from "react";
  import userIcon from "../assets/user.png";
  import reportIcon from "../assets/report.png";
  import addIcon from "../assets/add.png";
  import binIcon from "../assets/bin.png";
  import clockIcon from "../assets/clock (1).png";
  import downloadIcon from "../assets/download.png";
  import infoIcon from "../assets/information (2).png";
  import pencilIcon from "../assets/pencil.png";
  import arrowIcon from "../assets/right-arrow (2).png";
  import DatePicker from "react-datepicker";
  import "react-datepicker/dist/react-datepicker.css";
  import { FaRegCalendarAlt } from "react-icons/fa";
  import { forwardRef } from "react";
    const BillGenerator = () => {
    const [items, setItems] = useState([
      { name: "SaaS Platform Development", qty: 1, price: 4500 },
      { name: "Cloud Infrastructure Setup", qty: 1, price: 1200 },
      { name: "UI/UX Maintenance (Monthly)", qty: 3, price: 500 },
    ]);
    const [currency, setCurrency] = useState("USD");
    const addRow = () => {
      setItems([...items, { name: "", qty: 1, price: 0 }]);
    };
    const removeRow = (index) => {
      setItems(items.filter((_, i) => i !== index));
    };
    const subtotal = items.reduce((acc, item) => acc + item.qty * item.price, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax - 250;
   const [activeBtn, setActiveBtn] = useState("generate");
   const [issuedDate, setIssuedDate] = useState(null);
const [dueDate, setDueDate] = useState(null);
const CustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <div className="relative w-full">
    <input
      ref={ref}
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      readOnly
      className="w-full border rounded-md px-3 py-2 pr-10 text-sm cursor-pointer" />
    <FaRegCalendarAlt
      onClick={onClick}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"/>
  </div>
     ));
    return (
      <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-6">
      <div className="mb-6">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Bill Generator </h1>
          <p className="text-xs md:text-sm text-gray-500">
            Dashboard / Invoices / New Generator
          </p>
        </div>
        <div className="flex justify-end mb-4">
          <button className="bg-[#A68B5BFF] text-white px-3 py-2 rounded-lg flex items-center gap-2 text-xs md:text-sm whitespace-nowrap">
            <img src={addIcon} className="w-4" />
            Create New Bill
          </button>
        </div>
      <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border overflow-visible">
      <div className="flex items-center gap-2 mb-4">
      <img src={userIcon} className="w-5" />
      <h2 className="font-semibold text-gray-700">Client Details</h2>
        </div>
      <div className="space-y-3"> <div>
      <p className="text-xs text-black mb-1">Client Name</p>
      <input className="w-full border rounded-md px-3 py-2 text-sm" /> </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-3"> <div>
      <p className="text-xs text-black mb-1">Email</p>
      <input className="w-full border rounded-md px-3 py-2 text-sm" />  </div>
        <div>
      <p className="text-xs text-black mb-1">Phone</p>
      <input className="w-full border rounded-md px-3 py-2 text-sm" />  </div> </div>
        <div>
      <p className="text-xs text-black mb-1">Address</p>
        <input className="w-full border rounded-md px-3 py-2 text-sm" />
                  </div>
                </div>
              </div>
        <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border overflow-visible">
          <div className="flex items-center gap-2 mb-4">
            <img src={reportIcon} className="w-5" />
            <h2 className="font-semibold text-gray-700">Invoice Details</h2></div>
                <div className="space-y-3">
            <div>
            <p className="text-xs text-black mb-1">Invoice No</p>
            <input className="w-full border rounded-md px-3 py-2 text-sm" /> </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div>
     <div>
  <p className="text-xs text-black mb-1">Issued Date</p>
  <DatePicker
    selected={issuedDate}
    onChange={(date) => setIssuedDate(date)}
    customInput={<CustomInput placeholder="Select issued date" />}/>
</div>
    </div>
   <div>
 <div>
  <p className="text-xs text-black mb-1">Due Date</p>
  <DatePicker
    selected={dueDate}
    onChange={(date) => setDueDate(date)}
    customInput={<CustomInput placeholder="Select due date" />}/>
</div>
</div>
  </div>
  <div>
    <p className="text-xs text-black mb-1">Currency</p>
    <div className="flex gap-2">
      {["USD", "EUR", "GBP"].map((cur) => (
        <button  key={cur} onClick={() => setCurrency(cur)}
          className={`px-3 py-1 text-sm rounded border ${
            currency === cur
              ? "bg-[#A68B5B] text-white border-[#A68B5B]"
              : "bg-white text-gray-600" }`}>
          {cur}
        </button>
      ))}
    </div>
  </div>
  </div></div>
            </div>
      <div className="bg-white p-5 rounded-xl shadow-sm border">
    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 flex items-center justify-center bg-[#F3F4F6] rounded">
          <span className="text-xs text-gray-500">#</span>
        </div>
        <h2 className="font-semibold text-gray-700">
          Itemized Services
        </h2>
      </div>
     <button
  onClick={() => setActiveBtn("addRow")}
  className={`px-3 py-1 rounded-md text-xs flex gap-2 items-center transition ${
    activeBtn === "addRow"
      ? "bg-[#A68B5B] text-white"
      : "bg-[#F9FAFB] hover:bg-[#A68B5B] hover:text-white"
       }`}>
       + Add New Row
</button>
    </div>
    <div className="overflow-x-auto">
      <div className="min-w-[750px]">
        <div className="grid grid-cols-12 text-xs text-black pb-2 border-b">
          <p className="col-span-6">Item Name & Description</p>
          <p className="col-span-2 text-center">Qty</p>
          <p className="col-span-2 text-right">Price</p>
          <p className="col-span-2 text-right">Total</p>
        </div>
        {items.map((item, i) => {
          const rowTotal = item.qty * item.price;
          return (
        <div key={i}
          className="grid grid-cols-12 py-4 gap-2 items-center border-b last:border-none"  >
        <div className="col-span-6">
            <input
        className="w-full text-sm text-gray-700 outline-none bg-transparent" value={item.name}
          onChange={(e) => {  const updated = [...items];  updated[i].name = e.target.value;
                    setItems(updated); }} />
              </div>
              <div className="col-span-2 flex justify-center">
                <input  type="number"
                  className="w-12 text-center bg-gray-100 rounded-md py-1 text-sm"  value={item.qty}
                  onChange={(e) => { const updated = [...items];
                    updated[i].qty = Number(e.target.value);
                    setItems(updated); }}  />
              </div>
              <div className="col-span-2 text-right text-sm text-gray-500">
                ₹{item.price.toLocaleString()}
              </div>
              <div className="col-span-2 flex justify-end items-center gap-3">
                <span className="text-sm font-semibold text-gray-800">
                  ₹{rowTotal.toLocaleString()}
                </span>
                <img src={binIcon}   onClick={() => removeRow(i)}
                  className="w-4 cursor-pointer opacity-50 hover:opacity-100" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="mt-5 pt-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 flex items-center justify-center bg-[#F3F4F6] rounded">
          <img src={pencilIcon} className="w-3 opacity-70" />
        </div>
        <p className="text-xs text-black">Invoice Notes & Terms</p>
      </div>
      <textarea
  className="w-full border rounded-md p-3 text-sm text-gray-600 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-[#A68B5BFF] resize-none"
        rows="3"  placeholder="Thank you for your business..." />
    </div>
      </div>
          </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border w-full lg:w-[320px]">
    <div className="flex items-center gap-2 mb-3">
      <img src={clockIcon} className="w-5 opacity-70" />
      <div>
        <h2 className="font-semibold text-black text-sm">
          Billing Summary</h2>
        <p className="text-xs text-black"> Review calculation before generating </p>
      </div>
    </div>
    <hr className="my-3" />
    <div className="space-y-2 text-sm text-gray-600">
      <p className="flex justify-between">
        Subtotal <span className="text-gray-800 font-medium">₹{subtotal}</span></p>
      <p className="flex justify-between">
        Tax (VAT 10%) <span className="text-gray-800 font-medium">₹{tax}</span></p>
      <p className="flex justify-between">
        Standard Discount 
        <span className="text-red-500 font-medium">-₹250</span>
      </p>
    </div>
    <div className="mt-4 border rounded-lg px-3 py-3 flex justify-between items-center">
      <p className="text-sm font-semibold text-gray-700">
        Grand Total </p>
      <p className="text-lg font-bold text-gray-900">
        ₹{total}</p>
    </div>
    <button onClick={() => setActiveBtn("generate")}
    className={`w-full mt-4 py-2.5 rounded-lg text-sm font-medium transition ${
      activeBtn === "generate"
        ? "bg-[#A68B5B] text-white"
        : "bg-gray-100 text-gray-700 hover:bg-[#A68B5B] hover:text-white" }`}>
    Generate Invoice</button>
  <button onClick={() => setActiveBtn("download")}
    className={`w-full mt-2 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition ${
      activeBtn === "download"
        ? "bg-[#A68B5B] text-white"
        : "border text-gray-700 hover:bg-[#A68B5B] hover:text-white" }`}>
    <img src={downloadIcon} className="w-4" />
    Download PDF
  </button>
    <p className="text-[15px] text-gray-400 mt-3 text-center leading-relaxed">
      By generating this invoice, you agree to our Terms of Service. 
      Final calculations are subject to tax regulation updates. </p>
  <div className="mt-4 bg-white p-4 rounded-xl shadow-sm border flex items-start gap-2 text-xs text-gray-500">
    <img src={infoIcon} className="w-4 mt-[2px]" />
    <div>
      <p className="font-medium text-black">Need Help?</p>
      <p>Contact billing support</p>
    </div>
  </div>
  </div></div>
  <div className="mt-6 bg-white p-5 rounded-xl shadow-sm border">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <img src={clockIcon} className="w-5 opacity-70" />
        <h2 className="font-semibold text-black text-sm md:text-base">
          Recent Activity
        </h2>
      </div>
      <button className="text-xs text-[#A68B5B] hover:underline flex items-center gap-1">
    View All History
    <img src={arrowIcon} className="w-3" />
  </button>
    </div>
    <div className="overflow-x-auto">
  <div className="min-w-[600px]">
    <div className="grid grid-cols-5 text-xs text-black border-b pb-2">
      <p>Invoice ID</p>
      <p>Client Name</p>
      <p>Amount</p>
   <p>Status</p>
<p className="text-right">Actions</p>
    </div>
    <div className="space-y-3 mt-3 w-full">
      {[
        { id: "INV-2024-001", name: "Acme Corp", amount: "₹5,200", status: "Paid" },
        { id: "INV-2024-002", name: "Global Tech", amount: "₹2,450", status: "Pending" },
        { id: "INV-2024-003", name: "Starlight Media", amount: "₹7,800", status: "Overdue" },
        { id: "INV-2024-004", name: "Nexus Systems", amount: "₹1,100", status: "Paid" },
        { id: "INV-2024-005", name: "Riverstone Labs", amount: "₹3,300", status: "Pending" },
      ].map((item, i) => {
        const statusStyle =
          item.status === "Paid"
            ? "bg-gray-100 text-gray-600"
            : item.status === "Pending"
            ? "bg-gray-100 text-gray-600"
            : "bg-red-500 text-white";
        return (
        <div key={i}
  className="grid grid-cols-5 items-center text-sm border rounded-lg p-3">
            <p className="text-gray-500">{item.id}</p>
            <p className="font-medium text-gray-700">{item.name}</p>
            <p className="text-gray-600">{item.amount}</p>
            <div className="hidden md:flex items-center gap-2">
              <img src={clockIcon} className="w-4 opacity-60" />
              <span className={`px-3 py-1 text-xs rounded-full ${statusStyle}`}>
                {item.status}
              </span>
            </div>
          <div className="flex justify-end">
              <button className="text-gray-400 hover:text-gray-700 text-lg">
                ⋯
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
      </div></div> 
      </div>
    );
  };

  export default BillGenerator;