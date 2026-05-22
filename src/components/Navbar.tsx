import { useState } from "react"; 
import { CiSearch, CiFilter } from "react-icons/ci";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { Profile } from "./profile";

export const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const username = "Demo User";

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm px-6 py-4  ">
      <div className="relative flex items-center">

        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-lg text-gray-900">Welcome! {username}</h1>
        </div>

        <div className="relative ml-auto flex items-center gap-2">
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
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            )}
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
                  
          <Profile />
        </div>
      </div>
    </header>
  );
};
