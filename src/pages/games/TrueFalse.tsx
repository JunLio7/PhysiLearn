import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
interface Question {
  statement: string;
  isTrue: boolean;
  explanation: string;
}
const TrueFalse = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  useEffect(() => {
    // Define questions
    const physicsQuestions: Question[] = [{
      statement: "Acceleration due to gravity on Earth's surface is approximately 9.81 m/s².",
      isTrue: true,
      explanation: "The acceleration due to gravity on Earth's surface is indeed approximately 9.81 m/s²."
    }, {
      statement: 'A scalar quantity has both magnitude and direction.',
      isTrue: false,
      explanation: 'A scalar quantity has only magnitude, not direction. Vector quantities have both magnitude and direction.'
    }, {
      statement: "Newton's First Law states that force equals mass times acceleration.",
      isTrue: false,
      explanation: "Newton's First Law is the law of inertia, stating that an object at rest stays at rest and an object in motion stays in motion unless acted upon by an external force. Newton's Second Law states that force equals mass times acceleration (F = ma)."
    }, {
      statement: 'The SI unit for power is the Watt.',
      isTrue: true,
      explanation: 'The SI unit for power is indeed the Watt (W), which equals one joule per second (J/s).'
    }, {
      statement: 'All objects fall at the same rate regardless of their mass in a vacuum.',
      isTrue: true,
      explanation: 'In a vacuum where there is no air resistance, all objects fall at the same rate regardless of their mass due to the uniform acceleration due to gravity.'
    }, {
      statement: 'Velocity is a scalar quantity.',
      isTrue: false,
      explanation: 'Velocity is a vector quantity as it has both magnitude (speed) and direction. Speed is the scalar quantity.'
    }, {
      statement: 'Momentum is calculated as mass times velocity.',
      isTrue: true,
      explanation: 'Momentum (p) is indeed calculated as mass (m) times velocity (v): p = mv.'
    }, {
      statement: "Kinetic energy is proportional to the square of an object's speed.",
      isTrue: true,
      explanation: 'Kinetic energy is calculated as KE = (1/2)mv², so it is proportional to the square of the speed.'
    }, {
      statement: 'Free fall acceleration is different for objects with different masses.',
      isTrue: false,
      explanation: 'Free fall acceleration is the same for all objects regardless of their mass (in the absence of air resistance).'
    }, {
      statement: 'The gravitational force is one of the four fundamental forces in nature.',
      isTrue: true,
      explanation: 'The gravitational force is indeed one of the four fundamental forces in nature, along with the electromagnetic force, the strong nuclear force, and the weak nuclear force.'
    }];
    setQuestions(physicsQuestions);
  }, []);
  const checkAnswer = (answer: boolean) => {
    const currentQuestion = questions[currentQuestionIndex];
    setUserAnswer(answer);
    if (answer === currentQuestion.isTrue) {
      setFeedback('Correct! ' + currentQuestion.explanation);
      setScore(score + 1);
    } else {
      setFeedback('Incorrect. ' + currentQuestion.explanation);
    }
  };
  const nextQuestion = () => {
    setUserAnswer(null);
    setFeedback(null);
    if (currentQuestionIndex + 1 >= questions.length) {
      setGameFinished(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setUserAnswer(null);
    setFeedback(null);
    setScore(0);
    setGameFinished(false);
  };
  if (questions.length === 0) {
    return <div className="container mx-auto px-6 py-8">Loading...</div>;
  }
  if (gameFinished) {
    return <div className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-2xl mx-auto">
          <div className="p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Challenge Complete!
            </h1>
            <div className="mb-6">
              <div className="text-6xl font-bold text-purple-600 mb-2">
                {score} / {questions.length}
              </div>
              <p className="text-xl text-gray-600">
                {score === questions.length ? 'Perfect! You know your physics!' : score >= questions.length * 0.7 ? 'Great job! Keep it up!' : 'Nice effort! Keep learning!'}
              </p>
            </div>
            <div className="flex space-x-4 justify-center">
              <button onClick={restartGame} className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                Play Again
              </button>
              <Link to="/games" className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                Back to Games
              </Link>
            </div>
          </div>
        </div>
      </div>;
  }
  const currentQuestion = questions[currentQuestionIndex];
  return <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          True or False Challenge
        </h1>
        <div className="flex items-center space-x-4">
          <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg">
            Question {currentQuestionIndex + 1} / {questions.length}
          </div>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
            Score: {score}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Is this statement true or false?
            </h2>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-lg text-center">{currentQuestion.statement}</p>
            </div>
          </div>
          {userAnswer === null ? <div className="grid grid-cols-2 gap-4">
              <button onClick={() => checkAnswer(true)} className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                <Check className="w-5 h-5" />
                <span>True</span>
              </button>
              <button onClick={() => checkAnswer(false)} className="flex items-center justify-center space-x-2 px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                <X className="w-5 h-5" />
                <span>False</span>
              </button>
            </div> : <div className="space-y-6">
              <div className={`p-4 rounded-lg ${userAnswer === currentQuestion.isTrue ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {feedback}
              </div>
              <button onClick={nextQuestion} className="w-full px-4 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                {currentQuestionIndex + 1 >= questions.length ? 'View Results' : 'Next Question'}
              </button>
            </div>}
        </div>
      </div>
    </div>;
};
export default TrueFalse;