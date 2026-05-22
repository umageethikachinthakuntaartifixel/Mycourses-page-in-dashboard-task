import { useState } from "react";
import { CgProfile } from "react-icons/cg";

export const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);

  const username = "Demo User";
  const email = "demo@gmail.com";

  return (
    <div className="relative">
      <button
        onClick={() => setShowProfile(!showProfile)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
      >
        <CgProfile size={22} className="text-gray-700" />
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
  );
};
