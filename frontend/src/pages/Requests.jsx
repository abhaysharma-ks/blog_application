import React, { useState } from "react";
import { Check, X, Clock } from "lucide-react"; 
import { useAdmin } from "../context/AdminContext";

const Requests = () => {

  const {pending,approve}=useAdmin()
  const[error,setError]=useState('')
  // console.log(pending)



  const handleApprove = async(id) => {
    setError("");

    try {
      await approve(id)
    } catch (error) {
      setError(error.response?.data?.message || "failed to post blog");
      alert(error.message);
    }
  };

  const handleReject = (id) => {

  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Pending Blog Requests</h1>

        {pending.length === 0 ? (
          <p className="text-gray-500 italic">No pending requests at the moment.</p>
        ) : (
          <div className="grid gap-6">
            {pending.map((blog) => (
              <div 
                key={blog.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row md:items-center justify-between transition-hover hover:shadow-md"
              >
                {/* Content Section */}
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1">
                      <Clock size={14} /> Pending
                    </span>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{blog.title}</h2>
                </div>

                {/* Actions Section */}
                <div className="flex gap-3 mt-4 md:mt-0">
                  <button
                    onClick={() => handleReject(blog.id)}
                    className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
                  >
                    <X size={18} /> Reject
                  </button>
                  <button
                    onClick={() => handleApprove(blog.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <Check size={18} /> Approve
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
   )
};

export default Requests;