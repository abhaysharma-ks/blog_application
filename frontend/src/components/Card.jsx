// import React from 'react';

import { Link } from "react-router-dom";

const Card = ({ article }) => {
  // Destructuring for cleaner code
  const { id, title, content, status, userId, image, date, category } = article;

  return (
    <Link to={`/blog/${id}`}>
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full m-5">
      

      {/* Content Section */}
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[#26d0ce] text-xs font-bold uppercase tracking-widest">
            {category || 'Community'}
          </span>
          <span className="text-gray-400 text-xs">{date || 'Mar 2026'}</span>
        </div>

        <h3 className="text-xl font-bold text-[#1e2d3b] mb-3 line-clamp-2 group-hover:text-[#26d0ce] transition-colors capitalize">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {content}
        </p>

        {/* Footer Section */}
        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1e2d3b] flex items-center justify-center text-white text-[10px] font-bold">
              U{userId}
            </div>
            <span className="text-sm font-medium text-gray-700">Author ID: {userId}</span>
          </div>
          
          <button className="text-sm font-bold text-[#1e2d3b] hover:underline">
            Read More
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;