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
    </div>
  );
};

export default Home;