import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  if (isHomePage) {
    return null;
  }
  return <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="PhysiLearn Logo" className="h-16" />
        </Link>
        <div className="flex space-x-4">
          <Link to="/learning" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Learning Module
          </Link>
          <Link to="/games" className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors">
            Game Module
          </Link>
        </div>
      </div>
    </header>;
};
export default Header;
