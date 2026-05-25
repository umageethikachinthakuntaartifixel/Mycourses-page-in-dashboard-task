import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FaBook, FaVideo } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { MdAssignment, MdSettings, MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Collapse } from "@mantine/core";

export const Sidebar = () => {
  const [openOthers, SetOpenOthers] = useState(false);

  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-100 transition";
  return (
    <aside className="w-64 bg-white shadow-md border-r p-4 ">
      <div className="h-12 flex items-center gap-3 px-2">
        <MdDashboard size={22} className="text-gray-700" />

              <h1 className="text-xl font-semibold text-gray-800">
                  Dashboard
              </h1>
      </div>

      <div className="flex flex-col gap-2 mt-6">
        <NavLink to="/" className={linkStyle}>
          <IoMdHome size={24} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/courses" className={linkStyle}>
          <FaBook size={20} />
          <span>My Courses</span>
        </NavLink>

        <NavLink to="/Recordings" className={linkStyle}>
          <FaVideo size={20} />
          <span>Recording classes</span>
        </NavLink>

        <NavLink to="/Results" className={linkStyle}>
          <AiOutlineBarChart size={24} />
          <span>Live Results</span>
        </NavLink>

        <NavLink to="/Assignments" className={linkStyle}>
          <MdAssignment size={20} />
          <span>Assignments</span>
        </NavLink>

        <button
          onClick={() => SetOpenOthers(!openOthers)}
          className={`${linkStyle} justify-between-full`}
        >
          <div className="flex items-center gap-3">
            <MdSettings size={20} />
            <span>Settings</span>
          </div>

          {openOthers ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
        </button>
        <Collapse in={openOthers}>
          <div className="ml-8 mt-2 flex flex-col gap-2">
            <NavLink
              to="/More"
              className="flex items-center gap-3 py-0 hover:text-blue-600"
            >
              <BsThreeDots size={18} />
              More
            </NavLink>
          </div>
        </Collapse>
      </div>
    </aside>
  );
};
