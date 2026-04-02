import React from 'react';
import { usePost } from '../context/PostContext';

const Home = () => {
  const {post} = usePost()
  console.log(post)
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          
          {/* Hero Text */}
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-black text-[#1e2d3b] leading-tight mb-6">
              Perspective <br /> 
              <span className="text-[#26d0ce]">Matters.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-lg mb-10 mx-auto lg:mx-0">
              Explore stories from the world's leading creators, designers, and thinkers. Join a community where curiosity meets code.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-[#1e2d3b] text-white rounded-full font-bold shadow-lg hover:bg-black transition-all">
                Read Latest Stories
              </button>
              <button className="px-8 py-4 border-2 border-gray-100 text-[#1e2d3b] rounded-full font-bold hover:bg-gray-50 transition-all">
                Our Manifesto
              </button>
            </div>
          </div>

          {/* Hero Visual (Geometric Reference) */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center">
            {/* The "Split Circle" Graphic enlarged and stylized */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-pulse-slow">
              <div className="absolute inset-0 bg-[#1e2d3b] rounded-l-full translate-x-[-10px]"></div>
              <div className="absolute inset-0 bg-[#26d0ce] rounded-r-full translate-x-[10px] opacity-90"></div>
              {/* Floating "Image" cards */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white p-2 rounded-lg shadow-2xl rotate-6 hidden sm:block border border-gray-100">
                <div className="w-full h-full bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white p-2 rounded-lg shadow-2xl -rotate-12 hidden sm:block border border-gray-100">
                <div className="w-full h-full bg-[#26d0ce]/20 rounded flex items-center justify-center">
                  <span className="text-[#26d0ce] text-xs font-bold">UI Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative blobs */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8fafb] -z-10 rounded-l-[100px]"></div>
      </section>

      {/* 2. STATS / TRUST SECTION */}
      <section className="bg-[#1e2d3b] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Readers', val: '200K+' },
            { label: 'Articles', val: '1.2K' },
            { label: 'Writers', val: '450' },
            { label: 'Coffee/yr', val: '15K' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-[#26d0ce] text-3xl font-black">{stat.val}</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED POSTS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-[#1e2d3b]">Featured Stories</h2>
            <div className="h-1 w-20 bg-[#26d0ce] mt-2"></div>
          </div>
          <button className="text-[#26d0ce] font-bold text-sm hover:underline">View all posts →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "The Future of Minimalist Interfaces", tag: "Design", color: "bg-[#26d0ce]" },
            { title: "Why React is Still King in 2026", tag: "Dev", color: "bg-[#1e2d3b]" },
            { title: "Psychology of Color in UX", tag: "Strategy", color: "bg-teal-700" }
          ].map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`aspect-video ${post.color} rounded-2xl mb-6 overflow-hidden relative shadow-lg`}>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold border border-white px-4 py-2 rounded-full">Read Article</span>
                </div>
              </div>
              <span className="text-[#26d0ce] text-xs font-black uppercase tracking-widest">{post.tag}</span>
              <h3 className="text-xl font-bold text-[#1e2d3b] mt-2 group-hover:text-[#26d0ce] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mt-3 line-clamp-2">
                Exploring the boundaries between physical interaction and digital canvas...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NEWSLETTER CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[40px] p-10 md:p-20 text-center border border-gray-100">
          <h2 className="text-3xl font-black text-[#1e2d3b] mb-4">Don't miss a beat.</h2>
          <p className="text-gray-500 mb-8">Get our weekly top 5 stories delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email address"
              className="flex-grow px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#26d0ce]"
            />
            <button className="px-8 py-4 bg-[#26d0ce] text-white rounded-full font-bold shadow-md hover:bg-[#22bcb9] transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;