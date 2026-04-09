import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../context/PostContext";

const Write = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const { generate } = usePost();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await generate(data);
      navigate("/profile");
    } catch (error) {
      setError(error.response?.data?.message || "failed to post blog");
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-[#1e2d3b] uppercase tracking-tight">
            Write New <span className="text-[#26d0ce]">Story</span>
          </h1>
          <p className="text-gray-500 mt-2">
            Share your thoughts and ideas with the world.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="space-y-6">
            {/* Title Input */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-bold text-[#1e2d3b] uppercase mb-2"
              >
                Article Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={data.title}
                onChange={handleChange}
                placeholder="Enter a catchy title..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#26d0ce] focus:ring-2 focus:ring-[#26d0ce]/20 outline-none transition-all text-lg"
                required
              />
            </div>

            {/* Content Textarea */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-bold text-[#1e2d3b] uppercase mb-2"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={data.content}
                onChange={handleChange}
                placeholder="Tell your story..."
                rows="10"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#26d0ce] focus:ring-2 focus:ring-[#26d0ce]/20 outline-none transition-all resize-none leading-relaxed"
                required
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#1e2d3b] text-white font-bold py-4 rounded-xl hover:bg-[#26d0ce] transition-all duration-300 shadow-lg shadow-gray-200 disabled:opacity-50"
              >
                {loading ? "Publishing..." : "Publish Article"}
              </button>

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-8 py-4 text-[#1e2d3b] font-bold hover:text-gray-500 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;
