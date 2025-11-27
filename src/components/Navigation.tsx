import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;

  const inLearningSection = path.includes('/learning');
  
  const inGamesSection = path.includes('/games');
  return <nav className="bg-gray-100 border-b">
      <div className="container mx-auto px-6">
        {inLearningSection && <div className="flex overflow-x-auto py-3 space-x-6">
            <Link to="/learning/scalars-vectors" className={`whitespace-nowrap font-medium ${path === '/learning/scalars-vectors' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              Scalars & Vectors
            </Link>
            <Link to="/learning/kinematics" className={`whitespace-nowrap font-medium ${path === '/learning/kinematics' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              Kinematics
            </Link>
            <Link to="/learning/free-fall" className={`whitespace-nowrap font-medium ${path === '/learning/free-fall' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              Free Fall
            </Link>
            <Link to="/learning/forces-motion" className={`whitespace-nowrap font-medium ${path === '/learning/forces-motion' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              Forces & Motion
            </Link>
            <Link to="/learning/newtons-laws" className={`whitespace-nowrap font-medium ${path === '/learning/newtons-laws' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              Newton's Laws
            </Link>
          </div>}
        {inGamesSection && <div className="flex overflow-x-auto py-3 space-x-6">
            <Link to="/games/quiz-game" className={`whitespace-nowrap font-medium ${path === '/games/quiz-game' ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}>
              Quiz Game
            </Link>
            <Link to="/games/missing-value" className={`whitespace-nowrap font-medium ${path === '/games/missing-value' ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}>
              Missing Value
            </Link>
            <Link to="/games/true-false" className={`whitespace-nowrap font-medium ${path === '/games/true-false' ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}>
              True or False
            </Link>
          </div>}
      </div>
    </nav>;
};
export default Navigation;