import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
const Home = () => {
  return <div className="container mx-auto px-6 py-10">
      <div className="text-center mb-16">
        <img src="/logo.png" alt="PhysiLearn Logo" className="mx-auto h-64 mb-12" />
      </div>
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Learning Module
            </h2>
            <p className="text-gray-600 mb-6">
              Explore physics concepts through interactive lessons, formula
              visualizations, and step-by-step problem solving. Track your
              progress as you master each topic.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 rounded-full flex-shrink-0 mr-2"></span>
                <span>Interactive formula calculators</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 rounded-full flex-shrink-0 mr-2"></span>
                <span>Step-by-step solution demonstrations</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-blue-100 rounded-full flex-shrink-0 mr-2"></span>
                <span>Comprehensive topic coverage</span>
              </li>
            </ul>
            <Link to="/learning" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Start Learning
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="p-8">
            <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Game Module
            </h2>
            <p className="text-gray-600 mb-6">
              Reinforce your physics knowledge through fun, interactive games
              designed to test your understanding of formulas and concepts.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-teal-100 rounded-full flex-shrink-0 mr-2"></span>
                <span>Formula quizzes with multiple-choice questions</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-teal-100 rounded-full flex-shrink-0 mr-2"></span>
                <span>Missing value challenges</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-teal-100 rounded-full flex-shrink-0 mr-2"></span>
                <span>True or false physics statements</span>
              </li>
            </ul>
            <Link to="/games" className="inline-block px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">
              Play Games
            </Link>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Interactive Learning
              </h3>
              <p className="text-gray-600 text-sm">
                Engage with physics concepts through hands-on calculators and
                visual demonstrations that make complex formulas easy to
                understand.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 shadow-md">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Gamified Practice
              </h3>
              <p className="text-gray-600 text-sm">
                Test your knowledge with fun mini-games designed to reinforce
                learning and track your progress in physics mastery.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-12">
        IT-2101 PHY 101
      </div>
    </div>;
};
export default Home;