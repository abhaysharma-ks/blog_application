import React from 'react';
import Card from '../components/Card';

const Articles = () => {
  // Mock Data - In a real app, you'd fetch this from your backend
  const articles = [
    {
      id: 1,
      title: "The Art of Minimalist Web Design in 2026",
      excerpt: "Explore how simplicity is becoming the ultimate sophistication in modern web interfaces and user experience.",
      category: "Design",
      date: "Mar 15, 2026",
      readTime: "5",
      author: "Alex Rivera",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800"
    },
    {
      id: 2,
      title: "React Server Components: A Deep Dive",
      excerpt: "Understanding the shift from client-side rendering to the powerful new capabilities of Server Components.",
      category: "Tech",
      date: "Mar 12, 2026",
      readTime: "8",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800"
    },
    {
      id: 3,
      title: "Why Typography Matters More Than You Think",
      excerpt: "How the right typeface can increase user retention and define your brand's digital voice.",
      category: "Branding",
      date: "Mar 10, 2026",
      readTime: "4",
      author: "Jordan Smith",
      image: "https://images.unsplash.com/photo-1561070791-26c11d6f9a3d?q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 border-l-4 border-[#26d0ce] pl-6">
          <h1 className="text-4xl font-black text-[#1e2d3b] mb-2 uppercase tracking-tight">
            Latest <span className="text-[#26d0ce]">Stories</span>
          </h1>
          <p className="text-gray-500 max-w-lg">
            Insightful articles from the world of design, technology, and creative vision.
          </p>
        </div>

        {/* Filter Tabs (Optional UI touch) */}
        <div className="flex gap-4 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {['All', 'Tech', 'Design', 'Branding', 'Lifestyle'].map((tab) => (
            <button key={tab} className="whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium border border-gray-100 hover:border-[#26d0ce] hover:text-[#26d0ce] transition-all">
              {tab}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <Card key={article.id} article={article} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 border-2 border-[#1e2d3b] text-[#1e2d3b] font-bold rounded-full hover:bg-[#1e2d3b] hover:text-white transition-all duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;