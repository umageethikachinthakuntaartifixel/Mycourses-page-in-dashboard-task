import { useState } from "react";
import { CiSearch, CiFilter } from "react-icons/ci";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";

export const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const username = "Demo User";
  const email = "demo@gmail.com";

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="relative flex items-center">
        <div>
          <MdDashboard size={22} className="text-gray-700" />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-lg  text-gray-900">Welcome! {username} </h1>
        </div>

        <div className="relative ml-auto flex items-center gap-2 relative">
                  
          <div className="flex items-center">
            {!showSearch ? (
              
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <CiSearch size={22} className="text-gray-700" />
              </button>
            ) : (
              
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 shadow-sm bg-white">
                <CiSearch size={18} className="text-gray-500" />

                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none px-2 w-60"
                  autoFocus
                />

                <button
                  onClick={() => setShowSearch(false)}
                  className="ml-2 text-gray-500 hover:text-gray-500"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <CiFilter size={22} className="text-gray-700" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <AiOutlineQuestionCircle size={22} className="text-gray-700" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <IoIosNotifications size={22} className="text-gray-700" />
        </button>

        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <CgProfile size={24} className="text-gray-700" />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-12 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
              <h3 className="font-semibold text-gray-800">{username}</h3>

              <p className="text-sm text-gray-500 mb-3">{email}</p>

              <button className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
