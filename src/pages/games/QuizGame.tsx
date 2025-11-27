import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}
const QuizGame = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    message: string;
  } | null>(null);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  useEffect(() => {
    // Define quiz questions
    const quizQuestions: Question[] = [{
      question: 'If a 2 kg object is accelerating at 3 m/s², what is the force acting on it?',
      options: ['2 N', '3 N', '5 N', '6 N'],
      correctAnswer: '6 N',
      explanation: "Using Newton's Second Law: F = m × a = 2 kg × 3 m/s² = 6 N"
    }, {
      question: 'What is the formula for calculating displacement in free fall?',
      options: ['s = u × t', 's = u × t + ½ × g × t²', 's = ½ × g × t²', 's = v × t - ½ × g × t²'],
      correctAnswer: 's = u × t + ½ × g × t²',
      explanation: 'The formula for displacement in free fall is s = u × t + ½ × g × t², where u is initial velocity, t is time, and g is acceleration due to gravity.'
    }, {
      question: 'Which formula correctly represents the relationship between velocity, displacement, and acceleration?',
      options: ['v² = u² + 2as', 'v = u + at', 's = ut + ½at²', 'All of the above'],
      correctAnswer: 'All of the above',
      explanation: 'All three formulas are correct kinematic equations for constant acceleration.'
    }, {
      question: "What is the value of g (acceleration due to gravity) on Earth's surface?",
      options: ['9.1 m/s²', '9.81 m/s²', '10 m/s²', '8.91 m/s²'],
      correctAnswer: '9.81 m/s²',
      explanation: "The acceleration due to gravity on Earth's surface is approximately 9.81 m/s²."
    }, {
      question: 'In the equation F = G(m₁m₂)/r², what does G represent?',
      options: ['Gravitational acceleration', 'Gravitational force', 'Universal gravitational constant', 'Gravity'],
      correctAnswer: 'Universal gravitational constant',
      explanation: 'G is the universal gravitational constant, which has a value of approximately 6.674 × 10⁻¹¹ N·m²/kg².'
    }, {
      question: 'Which formula is used to calculate the magnitude of a vector from its components?',
      options: ['|v| = v_x + v_y', '|v| = √(v_x² + v_y²)', '|v| = tan⁻¹(v_y/v_x)', '|v| = v_x × v_y'],
      correctAnswer: '|v| = √(v_x² + v_y²)',
      explanation: 'The magnitude of a vector is calculated using the Pythagorean theorem: |v| = √(v_x² + v_y²).'
    }, {
      question: 'If an object is thrown upward with an initial velocity of 20 m/s, how high will it go?',
      options: ['10.2 m', '20.4 m', '40.8 m', '204 m'],
      correctAnswer: '20.4 m',
      explanation: 'Using the formula h = v₀²/(2g) = (20 m/s)²/(2 × 9.81 m/s²) = 400/19.62 ≈ 20.4 m.'
    }, {
      question: 'What is the formula for average velocity?',
      options: ['v_avg = (v₁ + v₂) / 2', 'v_avg = d / t', 'v_avg = (d₂ - d₁) / (t₂ - t₁)', 'Both A and C'],
      correctAnswer: 'Both A and C',
      explanation: 'Average velocity can be calculated as v_avg = (v₁ + v₂) / 2 (for constant acceleration) or as v_avg = (d₂ - d₁) / (t₂ - t₁) (from the definition).'
    }, {
      question: 'What is the SI unit of force?',
      options: ['Joule', 'Newton', 'Watt', 'Pascal'],
      correctAnswer: 'Newton',
      explanation: 'The SI unit of force is the Newton (N), which is equivalent to kg·m/s².'
    }, {
      question: 'Which of the following is a vector quantity?',
      options: ['Speed', 'Mass', 'Velocity', 'Time'],
      correctAnswer: 'Velocity',
      explanation: 'Velocity is a vector quantity because it has both magnitude and direction. Speed, mass, and time are scalar quantities.'
    }];
    setQuestions(quizQuestions);
  }, []);
  const checkAnswer = () => {
    if (!selectedOption) return;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setFeedback({
        correct: true,
        message: `Correct! ${currentQuestion.explanation}`
      });
      setScore(score + 1);
    } else {
      setFeedback({
        correct: false,
        message: `Incorrect. The correct answer is "${currentQuestion.correctAnswer}". ${currentQuestion.explanation}`
      });
    }
  };
  const nextQuestion = () => {
    setSelectedOption(null);
    setFeedback(null);
    if (currentQuestionIndex + 1 >= questions.length) {
      setGameFinished(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
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
              Quiz Complete!
            </h1>
            <div className="mb-6">
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {score} / {questions.length}
              </div>
              <p className="text-xl text-gray-600">
                {score === questions.length ? 'Perfect score! Excellent work!' : score >= questions.length * 0.7 ? 'Great job! Keep practicing!' : 'Good effort! Try again to improve!'}
              </p>
            </div>
            <div className="flex space-x-4 justify-center">
              <button onClick={restartGame} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
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
        <h1 className="text-3xl font-bold text-gray-800">Quiz Game</h1>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
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
              {currentQuestion.question}
            </h2>
          </div>
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => <div key={index} className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${selectedOption === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`} onClick={() => !feedback && setSelectedOption(option)}>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" className="form-radio h-5 w-5 text-blue-600" checked={selectedOption === option} onChange={() => setSelectedOption(option)} disabled={!!feedback} />
                  <span className="ml-3">{option}</span>
                </label>
              </div>)}
          </div>
          {feedback ? <div className={`p-4 rounded-lg mb-6 ${feedback.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {feedback.message}
            </div> : null}
          <div className="flex space-x-4">
            {!feedback ? <button onClick={checkAnswer} disabled={!selectedOption} className={`px-4 py-2 rounded-md transition-colors ${selectedOption ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                Check Answer
              </button> : <button onClick={nextQuestion} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                {currentQuestionIndex + 1 >= questions.length ? 'View Results' : 'Next Question'}
              </button>}
          </div>
        </div>
      </div>
    </div>;
};
export default QuizGame;