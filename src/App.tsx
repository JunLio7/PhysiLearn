import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import LearningModule from './pages/learning/LearningModule';
import GameModule from './pages/games/GameModule';
import ScalarsVectors from './pages/learning/lessons/ScalarsVectors';
import Kinematics from './pages/learning/lessons/Kinematics';
import FreeFall from './pages/learning/lessons/FreeFall';
import ForcesMotion from './pages/learning/lessons/ForcesMotion';
import NewtonsLaws from './pages/learning/lessons/NewtonsLaws';
import QuizGame from './pages/games/QuizGame';
import MissingValue from './pages/games/MissingValue';
import TrueFalse from './pages/games/TrueFalse';
export function App() {
  
  return <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<LearningModule />} />
            <Route path="/learning/scalars-vectors" element={<ScalarsVectors />} />
            <Route path="/learning/kinematics" element={<Kinematics />} />
            <Route path="/learning/free-fall" element={<FreeFall />} />
            <Route path="/learning/forces-motion" element={<ForcesMotion />} />
            <Route path="/learning/newtons-laws" element={<NewtonsLaws />} />
            <Route path="/games" element={<GameModule />} />
            <Route path="/games/quiz-game" element={<QuizGame />} />
            <Route path="/games/missing-value" element={<MissingValue />} />
            <Route path="/games/true-false" element={<TrueFalse />} />
          </Routes>
        </main>
      </div>
    </Router>;
}