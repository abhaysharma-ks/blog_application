import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-black text-[#1e2d3b] tracking-tighter">
                B<span className="text-[#26d0ce]">lo</span>g
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              We are a collective of writers and designers dedicated to sharing 
              meaningful insights on technology, design, and digital culture. 
              Our mission is to provide a platform where complex ideas become 
              simple conversations.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Social Icons Placeholders */}
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#1e2d3b] hover:bg-[#26d0ce] hover:text-white transition-colors cursor-pointer">
                <span className="text-xs font-bold">In</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#1e2d3b] hover:bg-[#26d0ce] hover:text-white transition-colors cursor-pointer">
                <span className="text-xs font-bold">Tw</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#1e2d3b] hover:bg-[#26d0ce] hover:text-white transition-colors cursor-pointer">
                <span className="text-xs font-bold">Ig</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#1e2d3b] font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#26d0ce] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#26d0ce] transition-colors">Featured Authors</a></li>
              <li><a href="#" className="hover:text-[#26d0ce] transition-colors">Latest Articles</a></li>
              <li><a href="#" className="hover:text-[#26d0ce] transition-colors">Newsletter</a></li>
            </ul>
          </div>

          {/* Contact/Support */}
          <div>
            <h4 className="text-[#1e2d3b] font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#26d0ce] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#26d0ce] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#26d0ce] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#26d0ce] transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 Blog Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-[#26d0ce] rounded-full mr-2"></span>
              System Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;