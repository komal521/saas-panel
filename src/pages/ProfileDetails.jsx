import React, { useState } from "react";
import profileImg from "../assets/t2.jpeg";
import cameraIcon from "../assets/camra.png";
import premiumIcon from "../assets/premium.png";
import verifyIcon from "../assets/verify.png";
import clockIcon from "../assets/clock.png";
import keyIcon from "../assets/key.png";
import globeIcon from "../assets/globe.png";
import arrowIcon from "../assets/right-arrow (2).png";
import userIcon from "../assets/user.png";
import locationIcon from "../assets/location.png";
import activityIcon from "../assets/clock.png";
import globeIcon2 from "../assets/globe.png";
const ProfileDetails = () => {
  const [activeBtn, setActiveBtn] = useState("save");
  const [activeTag, setActiveTag] = useState("verified");
  const [toggleOn, setToggleOn] = useState(true);
  return (
    <div className="min-h-screen p-6 md:p-10 bg-[linear-gradient(180deg,#FFFFFFFF_0%,#FFF49CFF_100%)]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
      <h1 className="text-2xl md:text-3xl font-semibold text-black">
         Account Settings</h1>
          <p className="text-gray-500 text-sm md:text-base">
            Manage your professional identity and security preferences. </p>
        </div>
        <div className="flex gap-3">
          <button  onClick={() => setActiveBtn("discard")}
            className={`px-4 py-2 rounded-lg border transition ${
              activeBtn === "discard"
                ? "bg-[#A68B5BFF] text-black"
                : "bg-white text-black border-gray-300"}`} >
            Discard Changes
          </button>
          <button onClick={() => setActiveBtn("save")}
            className={`px-4 py-2 rounded-lg transition ${
              activeBtn === "save"
                ? "bg-[#A68B5BFF] text-black"
                : "bg-black text-white"}`} >
            Save All Changes
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[350px]">
        <div className="bg-white rounded-2xl shadow p-6">
        <div className="h-24 bg-white rounded-xl"></div>
        <div className="flex justify-center -mt-12">
        <div className="relative">
        <img  src={profileImg} className="h-24 w-24 rounded-full border-4 border-white object-cover" />
        <img src={cameraIcon}
        className="h-6 w-6 absolute bottom-1 right-1 bg-white rounded-full p-1 shadow"/>
        </div>
          </div>
            <div className="text-center mt-3">
              <h2 className="text-lg font-semibold">Alex Silva</h2>
              <p className="text-gray-500 text-sm">
                Senior Solutions Architect
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-3">
              <span onClick={() => setActiveTag("admin")}
                className={`px-3 py-1 text-xs rounded-full cursor-pointer ${
                  activeTag === "admin"
                    ? "bg-[#A68B5BFF]"
                    : "bg-gray-200" }`} >
                Super Admin</span>
              <span onClick={() => setActiveTag("verified")}
                className={`px-3 py-1 text-xs rounded-full cursor-pointer ${
                  activeTag === "verified"
                    ? "bg-[#A68B5BFF]"
                    : "bg-gray-200" }`}>
                Verified Account
              </span>
            </div>
            <hr className="my-4" />
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <img src={premiumIcon} className="h-4 w-4" />
                  Member Since
                </div>
                <span>Oct 2021</span>
              </div>
              <div className="flex justify-between">
              <div className="flex items-center gap-2 text-gray-600">
              <img src={verifyIcon} className="h-4 w-4" />
                  Security Score </div>
                <span className="text-[#C2863FFF]">98/100</span>
              </div>
              <div className="flex justify-between">
              <div className="flex items-center gap-2 text-gray-600">
              <img src={clockIcon} className="h-4 w-4" />
                 Last Activity </div>
                <span>2h ago</span>
              </div>
            </div>
            <button onClick={() => alert("Edit Profile Clicked")}
              className="w-full mt-5 py-2 rounded-lg bg-[#A68B5BFF]">
              Edit Public Profile
            </button>
          </div>
          <div className="mt-6">
            <h3 className="text-xs text-gray-500 mb-3">SHORTCUTS</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 cursor-pointer">
                <img src={keyIcon} className="h-4 w-4" />
                Reset API Access
              </div>
              <div className="flex gap-3 cursor-pointer">
                <img src={globeIcon} className="h-4 w-4" />
                Language & Region
              </div>
              <div className="flex gap-3 text-red-500 cursor-pointer">
                <img src={arrowIcon} className="h-4 w-4" />
                Terminate All Sessions
              </div>
            </div>
          </div>
          <div className="mt-4">
  <button onClick={() => alert("You have been logged out successfully")}
    className="w-full py-2 rounded-lg bg-[#A68B5BFF] text-black  hover:bg-[#C2863FFF] transition text-sm font-medium">
       Logout
        </button>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-2xl shadow p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <img src={userIcon} className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Personal Information</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Update your basic contact details and physical location.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs text-black">FULL NAME</label>
              <input className="w-full mt-1 p-2 border rounded-lg" placeholder="Alex Silva" />
            </div>
            <div>
              <label className="text-xs text-black">EMAIL ADDRESS</label>
              <input className="w-full mt-1 p-2 border rounded-lg" placeholder="alex@email.com" />
            </div>
            <div>
              <label className="text-xs text-black">PHONE NUMBER</label>
              <input className="w-full mt-1 p-2 border rounded-lg" placeholder="+1 234 567 890" />
            </div>

            <div>
              <label className="text-xs text-black flex items-center gap-1">
                <img src={locationIcon} className="h-4 w-4" />
                LOCATION
              </label>
              <div className="flex items-center gap-2 border rounded-lg p-2 mt-1">
                <input className="w-full outline-none" placeholder="California, USA" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <img src={verifyIcon} className="h-5 w-5" />
                <h3 className="font-semibold">Account Details</h3>
              </div>
              <p className="text-xs text-gray-400 flex gap-2">
                <img src={userIcon} className="h-4 w-4" />
                USERNAME </p>
              <p className="mb-3">asilva_admin</p>
              <p className="text-xs text-gray-400 flex gap-2">
                <img src={verifyIcon} className="h-4 w-4" />
                SYSTEM ROLE
              </p>
              <p className="mb-3">Lead Administrator</p>
              <div>
                <p className="text-xs text-gray-400 mb-1">ACCOUNT STATUS</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 text-xs font-medium">
                    ● Active
                  </span>
                  <span className="bg-[#C2863FFF] px-2 py-1 text-xs rounded-full">
                    System Verified
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <img src={keyIcon} className="h-5 w-5" />
                <h3 className="font-semibold">Security</h3>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm font-medium">Two-Factor Auth</p>
                  <p className="text-xs text-gray-400">Highly recommended</p>
                </div>
                <div onClick={() => setToggleOn(!toggleOn)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                    toggleOn ? "bg-[#A68B5BFF]" : "bg-gray-300"
                  }`}>
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow transform ${
                      toggleOn ? "translate-x-6" : "" }`}/>
                </div>
              </div>
              <div className="flex justify-between items-center border p-3 rounded-lg cursor-pointer">
                <span>Change Password</span>
                <img src={arrowIcon} className="h-4 w-4" />
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Last changed 4 days ago
              </p>
            </div>
          </div>
        </div>
      </div>
 <div className="mt-8 border rounded-2xl p-5 bg-white lg:w-[65%] ml-auto">
  <div className="flex items-center justify-between mb-5">
    <div className="flex flex-col">  
      <div className="flex items-center gap-2">
        <img src={activityIcon} className="h-5 w-5" />
        <h3 className="font-semibold">Activity Overview</h3>
      </div>
      <p className="text-gray-500 text-sm mt-1">
        Recent security and operational events related to your account
      </p>
    </div>
    <button className="text-sm text-[#A68B5BFF] font-medium">
      View Full Audit Log
    </button>
  </div>
  <div className="space-y-5">
    <div className="flex gap-3">
      <img src={activityIcon} className="h-5 w-5 mt-1" />
      <div>
        <p className="text-sm font-medium">
          Successful login from MacBook • Safari
        </p>
        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
          <div className="flex items-center gap-1">
            <img src={clockIcon} className="h-3 w-3" />
            2 hrs ago
          </div>
          <div className="flex items-center gap-1">
            <img src={globeIcon2} className="h-3 w-3" />
            San Francisco, US
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-3">
      <img src={activityIcon} className="h-5 w-5 mt-1" />
      <div>
        <p className="text-sm font-medium">
          Profile information updated
        </p>
        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
          <div className="flex items-center gap-1">
            <img src={clockIcon} className="h-3 w-3" />
            Yesterday
          </div>
          <div className="flex items-center gap-1">
            <img src={globeIcon2} className="h-3 w-3" />
            Remote Web App
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-3">
      <img src={activityIcon} className="h-5 w-5 mt-1" />
      <div>
        <p className="text-sm font-medium">
          Unusual Login Attempt Blocked
        </p>
        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
          <div className="flex items-center gap-1">
            <img src={clockIcon} className="h-3 w-3" />
            3 days ago
          </div>
          <div className="flex items-center gap-1">
            <img src={globeIcon2} className="h-3 w-3" />
            Stockholm, SE
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-3">
      <img src={activityIcon} className="h-5 w-5 mt-1" />
      <div>
        <p className="text-sm font-medium">
          New API Key Generated
        </p>
        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
          <div className="flex items-center gap-1">
            <img src={clockIcon} className="h-3 w-3" />
            Last week
          </div>
          <div className="flex items-center gap-1">
            <img src={globeIcon2} className="h-3 w-3" />
            Admin Console
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-between items-center pt-4 border-t mt-6">
    <div className="flex items-center gap-2 text-[#A68B5BFF] cursor-pointer">
      <img src={verifyIcon} className="h-4 w-4" />
      <span className="text-sm font-medium">
        All activities are encrypted and archived for 90 days
      </span>
    </div>
  </div>

</div>
    </div>
  );
};

export default ProfileDetails;