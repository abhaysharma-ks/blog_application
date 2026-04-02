import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(form.email, form.password);
      navigate("/")
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden min-h-150">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-[#f8fafb]">
          {/* Logo (Top Left) */}
          <div className="mb-12">
            <div className="w-8 h-8 rounded-full bg-[#1e2d3b] relative overflow-hidden">
              <div className="absolute right-0 w-1/2 h-full bg-[#26d0ce]"></div>
            </div>
          </div>

          <h2 className="text-[#1e2d3b] text-xl font-semibold mb-8">
            Login with e-mail and password
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">E-mail</label>
              <input
                type="email"
                className="w-full p-3 bg-white border border-gray-100 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-[#26d0ce]"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 bg-white border border-gray-100 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-[#26d0ce]"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#26d0ce] text-white font-medium rounded shadow-lg hover:bg-[#22bcb9] transition-colors mt-4"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Side: Graphic & Navigation */}
        <div className="w-full md:w-1/2 p-12 bg-white flex flex-col relative">
          {/* Top Navigation */}
          <div className="flex justify-end items-center space-x-6 text-sm mb-auto">
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              Login
            </button>
            <Link to="/register">
            <button className="px-6 py-2 bg-[#26d0ce] text-white rounded hover:bg-[#22bcb9] transition-colors shadow-sm">
              Create user
            </button>
            </Link>
          </div>

          {/* Central Illustration */}
          <div className="grow flex items-center justify-center relative">
            {/* The "Split Circle" Graphic */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Dark Left Half */}
              <div className="w-24 h-48 bg-[#1e2d3b] rounded-l-full"></div>
              {/* Teal Right Half */}
              <div className="w-24 h-48 bg-[#26d0ce] rounded-r-full ml-1"></div>

              {/* Decorative Dots */}
              <div className="absolute top-10 left-[-20px] w-3 h-3 bg-[#26d0ce] rounded-full opacity-60"></div>
              <div className="absolute top-0 right-10 w-2 h-2 bg-[#26d0ce] rounded-full opacity-40"></div>
              <div className="absolute bottom-10 left-0 w-4 h-4 bg-[#26d0ce] rounded-full opacity-50"></div>
              <div className="absolute bottom-20 right-[-10px] w-3 h-3 bg-[#26d0ce] rounded-full"></div>
              <div className="absolute top-1/2 right-[-40px] w-2 h-2 bg-[#26d0ce] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
