import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();

  // Mock data for blogs - replace with your actual API data later
  const myBlogs = [
    { id: 1, title: "The Future of React 2026", date: "Oct 12, 2025", views: "1.2k" },
    { id: 2, title: "Mastering Tailwind CSS Transitions", date: "Sep 28, 2025", views: "850" },
    { id: 3, title: "Why I switched to Bun.js", date: "Aug 15, 2025", views: "2.1k" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Profile Header Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-[#1e2d3b] to-[#26d0ce]"></div>
          <div className="px-8 pb-8">
            <div className="relative flex justify-between items-end -mt-12 mb-6">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
                <div className="w-full h-full rounded-xl bg-gray-200 flex items-center justify-center text-3xl font-bold text-[#1e2d3b]">
                  {user?.name?.charAt(0) || "U"}
                </div>
              </div>
              {/* Edit Button */}
              <button className="px-6 py-2 border border-gray-200 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors">
                Edit Profile
              </button>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-[#1e2d3b]">{user?.name || "User Name"}</h1>
              <p className="text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {user?.email || "user@example.com"}
              </p>
              <div className="pt-2">
                 <span className="inline-block bg-[#26d0ce]/10 text-[#26d0ce] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                   {user?.role || "Member"}
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Stats Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <p className="text-xl font-bold text-[#1e2d3b]">{myBlogs.length}</p>
                  <p className="text-xs text-gray-500">Posts</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <p className="text-xl font-bold text-[#1e2d3b]">4.1k</p>
                  <p className="text-xs text-gray-500">Reads</p>
                </div>
              </div>
            </div>
          </div>

          {/* Blogs List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-[#1e2d3b]">Your Publications</h2>
              <Link to="/create" className="text-sm font-bold text-[#26d0ce] hover:underline">Write New</Link>
            </div>

            {myBlogs.map((blog) => (
              <div key={blog.id} className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-[#26d0ce]/50 transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-[#1e2d3b] group-hover:text-[#26d0ce] transition-colors mb-1">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.views} views</span>
                    </div>
                  </div>
                  <button className="text-gray-300 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="C12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;