import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Target } from 'lucide-react';
const GameModule = () => {
  const games = [{
    id: 'quiz-game',
    title: 'Quiz Game',
    description: 'Test your knowledge of physics formulas with multiple-choice questions.',
    icon: <svg className="w-8 h-8 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>,
    color: 'bg-teal-100'
  }, {
    id: 'missing-value',
    title: 'Guess the Missing Value',
    description: 'Solve for the missing value in physics equations.',
    icon: <Target className="w-8 h-8 text-indigo-600" />,
    color: 'bg-indigo-100'
  }, {
    id: 'true-false',
    title: 'True or False Challenge',
    description: 'Decide whether physics statements are true or false.',
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    color: 'bg-purple-100'
  }];
  return <div className="container mx-auto px-6 py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Physics Game Module
        </h1>
        <p className="text-lg text-gray-600">
          Reinforce your physics knowledge through fun, interactive games
          designed to test your understanding of formulas and concepts.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map(game => <Link key={game.id} to={`/games/${game.id}`} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="p-6">
              <div className={`w-14 h-14 ${game.color} rounded-lg flex items-center justify-center mb-4`}>
                {game.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {game.title}
              </h2>
              <p className="text-gray-600">{game.description}</p>
            </div>
          </Link>)}
      </div>
    </div>;
};
export default GameModule;