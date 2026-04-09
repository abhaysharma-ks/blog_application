// export default Navbar;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user, logout } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group cursor-pointer">
          <div className="relative">
            <span className="text-2xl font-black text-[#1e2d3b] tracking-tighter">
              B<span className="text-[#26d0ce]">lo</span>g
            </span>
            <div className="absolute -top-1 -right-2 w-2 h-2 bg-[#26d0ce] rounded-full group-hover:animate-ping"></div>
          </div>
          <div className="ml-4 h-6 w-[1px] bg-gray-200 hidden sm:block"></div>
          <span className="ml-4 text-xs font-medium text-gray-400 uppercase tracking-[0.2em] hidden sm:block">
            Insight & Vision
          </span>
        </Link>

        {/* Navigation Logic */}
        <div className="flex items-center space-x-6">
          <Link
            to="/article"
            className="text-sm font-medium text-gray-600 hover:text-[#26d0ce] transition-colors hidden md:block"
          >
            Articles
          </Link>

          {/* --- ADMIN ONLY LINK --- */}
          {user?.role === "admin" && (
            <Link
              to="/requests"
              className="text-sm font-medium text-gray-600 hover:text-[#26d0ce] transition-colors"
            >
              Requests
            </Link>
          )}

          {user ? (
            /* --- LOGGED IN STATE --- */
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="flex items-center space-x-2 group">
                <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-200 flex items-center justify-center overflow-hidden group-hover:border-[#26d0ce] transition-all">
                  <span className="text-xs font-bold text-gray-500">
                    {user.name?.charAt(0) || "U"}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#26d0ce] hidden sm:block">
                  Profile
                </span>
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-red-400 hover:text-red-600 cursor-pointer px-4 py-2 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            /* --- LOGGED OUT STATE --- */
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-sm font-medium text-gray-600 hover:text-[#26d0ce] transition-colors"
              >
                Login
              </Link>

              <Link to="/register">
                <button className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white transition-all duration-300 bg-[#1e2d3b] rounded-full hover:bg-[#26d0ce] group shadow-md">
                  <span className="relative text-sm tracking-wide">
                    Get Started
                  </span>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;