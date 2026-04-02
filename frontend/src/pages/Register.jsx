import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate=useNavigate()
  const [agreed, setAgreed] = useState(false);
  const{register}=useAuth()
  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",
    role:"user"
  })
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
      console.log(data)
    };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await register(data);
      navigate("/")
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
      alert(error.message)
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden min-h-150">
        {/* Left Side: Graphic & Logo */}
        <div className="w-full md:w-1/2 p-12 bg-white flex flex-col relative border-r border-gray-50">
          {/* Logo (Top Left) */}
          <div className="mb-auto">
            <div className="w-8 h-8 rounded-full bg-[#1e2d3b] relative overflow-hidden">
              <div className="absolute right-0 w-1/2 h-full bg-[#26d0ce]"></div>
            </div>
          </div>

          {/* Central Illustration - Slightly different variant for Register */}
          <div className="flex-grow flex items-center justify-center relative">
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Teal Left Half */}
              <div className="w-20 h-40 bg-[#26d0ce] rounded-l-full"></div>
              {/* Dark Right Half */}
              <div className="w-20 h-40 bg-[#1e2d3b] rounded-r-full ml-1"></div>

              {/* Floating accents */}
              <div className="absolute -top-8 -right-4 w-6 h-6 border-2 border-[#26d0ce] rounded-full opacity-40"></div>
              <div className="absolute bottom-0 -left-10 w-4 h-4 bg-[#26d0ce] rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-12 w-3 h-3 bg-[#1e2d3b] rounded-full opacity-20"></div>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <p className="text-gray-400 text-sm">Already have an account?</p>
            <Link to="/login">
            <button className="text-[#26d0ce] font-semibold hover:underline">
              Sign in here
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-[#f8fafb]">
          <h2 className="text-[#1e2d3b] text-2xl font-bold mb-2">
            Create User
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Join us to get started with your account.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full p-3 bg-white border border-gray-100 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-[#26d0ce] transition-all"
                value={data.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">
                E-mail Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="w-full p-3 bg-white border border-gray-100 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-[#26d0ce] transition-all"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full p-3 bg-white border border-gray-100 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-[#26d0ce] transition-all"
                value={data.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center pt-2">
              <input
                type="checkbox"
                className="accent-[#26d0ce] h-4 w-4"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="terms" className="ml-2 text-xs text-gray-500">
                I agree to the{" "}
                <span className="text-[#26d0ce] cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading || !agreed}
              className="w-full py-3 bg-[#1e2d3b] text-white font-medium rounded shadow-lg hover:bg-[#2a3e52] transition-colors mt-4"
              onClick={handleSubmit}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
