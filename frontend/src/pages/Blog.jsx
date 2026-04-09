import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePost } from '../context/PostContext';

const Blog = () => {
    const { b_id } = useParams();
    const { fetchBlog, blog } = usePost();
    const navigate = useNavigate();

    useEffect(() => {
        if (b_id) {
            fetchBlog(b_id);
        }
    }, [b_id]);

    if (!blog) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-gray-600 font-medium">Loading blog details...</span>
            </div>
        );
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-25 animate-fadeIn">
            {/* Back Button */}
            <button 
                onClick={() => navigate(-1)}
                className="mb-8 flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
                ← Back to Feed
            </button>

            {/* Header Section */}
            <header className="mb-10 text-center">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-800 uppercase bg-blue-100 rounded-full">
                    {blog.category || "General"}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                    {blog.title}
                </h1>
                <div className="flex items-center justify-center space-x-4 text-gray-500">
                    <div className="flex items-center">
                        <span className="font-medium text-gray-900">By Author</span>
                    </div>
                    <span>•</span>
                    <time>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                </div>
            </header>

            {/* Hero Image */}
            {blog.image && (
                <div className="mb-12">
                    <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-100 object-cover rounded-3xl shadow-lg"
                    />
                </div>
            )}

            {/* Content Section */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {/* If your content has HTML from a rich text editor, use: 
                   <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                */}
                <p className="whitespace-pre-line">
                    {blog.content}
                </p>
            </div>

           
        </article>
    );
};

export default Blog;