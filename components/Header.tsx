import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="max-w-5xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        {/* Left: Title */}
        <div className="flex-1">
          <div className="text-xl font-bold text-gray-800">SAMSUNG USB DRIVER</div>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Download</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Tutorial</a>
        </nav>

        {/* Right Side: Search Icon and Mobile Menu Toggle */}
        <div className="flex flex-1 justify-end items-center space-x-4">
            {/* Desktop Search Icon */}
            <button className="hidden md:block text-gray-600 hover:text-blue-600 transition-colors" aria-label="Search">
                <i className="fa-solid fa-search text-lg"></i>
            </button>
            
            {/* Mobile Controls */}
            <div className="flex items-center space-x-4 md:hidden">
                {/* Mobile Search Icon */}
                <button className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Search">
                    <i className="fa-solid fa-search text-xl"></i>
                </button>
                {/* Mobile Hamburger Icon */}
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className="text-gray-600"
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                    <i className="fa-solid fa-bars text-xl"></i>
                </button>
            </div>
        </div>
      </div>
      
       {/* Mobile Menu (without search bar) */}
       <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Home</a>
        <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Download</a>
        <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded">Tutorial</a>
      </nav>
    </header>
  );
};
