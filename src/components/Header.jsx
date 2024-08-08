import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../features/UserSlicer";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => !!state.user.token);
  const userData = useSelector((state) => state.user.user);

  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      toast.success("Logged out successfully!");
      navigate("/signin");
    } catch (error) {
      toast.error("Error logging out. Please try again.");
      console.error("Logout error:", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full h-10">
      {/* inner container */}
      <div className="flex justify-end items-center px-[59px] py-[33px]">
        {isAuthenticated ? (
          <>
            <h1 className="font-bold text-[19px] uppercase font-Satoshi-Bold">
              {userData?.username || "Admin"}
            </h1>
            <img
              src="./images/Dropdown.png"
              alt="dropdown"
              className="w-[10px] h-[10px] ml-[10px] cursor-pointer"
              onClick={toggleDropdown}
            />
            <div className="w-[58px] h-[58px] bg-primary rounded-full relative ml-[37px]">
              <div className="rounded-full h-full w-full " />
              {/* badge */}
              <div className="w-[12px] h-[12px] bg-[#3DF265] rounded-full absolute top-10 right-0 flex items-center justify-center"></div>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-10 top-24 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
                <ul>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                  {/* Add more options if needed */}
                </ul>
              </div>
            )}
          </>
        ) : (
          <h1
            className="font-bold text-[19px] uppercase font-Satoshi-Bold cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </h1>
        )}
      </div>
    </div>
  );
}

export default Header;
