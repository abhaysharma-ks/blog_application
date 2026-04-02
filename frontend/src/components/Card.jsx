import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ article }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"} 
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-[#1e2d3b] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime} min read</span>
        </div>
        
        <h3 className="text-lg font-bold text-[#1e2d3b] mb-3 group-hover:text-[#26d0ce] transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#1e2d3b] flex items-center justify-center text-[10px] text-white font-bold">
              {article.author[0]}
            </div>
            <span className="text-xs font-semibold text-gray-600">{article.author}</span>
          </div>
          
          <Link to={`/article/${article.id}`} className="text-[#26d0ce] flex items-center gap-1 text-sm font-bold group/link">
            Read
            <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;