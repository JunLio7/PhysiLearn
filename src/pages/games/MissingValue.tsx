import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { kinematicsFormulas, freeFallFormulas, forceFormula } from '../../utils/formulas';
interface Problem {
  formula: string;
  variables: Record<string, {
    name: string;
    unit: string;
  }>;
  missingVariable: string;
  givenValues: Record<string, number>;
  calculate: (values: Record<string, number>) => number;
}
const MissingValue = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    message: string;
  } | null>(null);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  useEffect(() => {
    // Generate problems
    const generatedProblems: Problem[] = [{
      formula: 'F = m × a',
      variables: forceFormula.variables,
      missingVariable: 'F',
      givenValues: {
        m: 5,
        a: 2
      },
      calculate: values => values.m * values.a
    }, {
      formula: 'F = m × a',
      variables: forceFormula.variables,
      missingVariable: 'm',
      givenValues: {
        F: 20,
        a: 4
      },
      calculate: values => values.F / values.a
    }, {
      formula: 'F = m × a',
      variables: forceFormula.variables,
      missingVariable: 'a',
      givenValues: {
        F: 30,
        m: 6
      },
      calculate: values => values.F / values.m
    }, {
      formula: 'v = u + a × t',
      variables: kinematicsFormulas.velocityTime.variables,
      missingVariable: 'v',
      givenValues: {
        u: 5,
        a: 2,
        t: 3
      },
      calculate: values => values.u + values.a * values.t
    }, {
      formula: 'v = u + a × t',
      variables: kinematicsFormulas.velocityTime.variables,
      missingVariable: 't',
      givenValues: {
        v: 15,
        u: 5,
        a: 2
      },
      calculate: values => (values.v - values.u) / values.a
    }, {
      formula: 'v = u + g × t',
      variables: freeFallFormulas.velocity.variables,
      missingVariable: 'v',
      givenValues: {
        u: 0,
        g: 9.81,
        t: 2
      },
      calculate: values => values.u + values.g * values.t
    }, {
      formula: 's = u × t + ½ × a × t²',
      variables: kinematicsFormulas.displacement.variables,
      missingVariable: 's',
      givenValues: {
        u: 2,
        a: 3,
        t: 4
      },
      calculate: values => values.u * values.t + 0.5 * values.a * Math.pow(values.t, 2)
    }, {
      formula: 'v_avg = (u + v) / 2',
      variables: kinematicsFormulas.averageVelocity.variables,
      missingVariable: 'v_avg',
      givenValues: {
        u: 10,
        v: 20
      },
      calculate: values => (values.u + values.v) / 2
    }, {
      formula: 'F = m × a',
      variables: forceFormula.variables,
      missingVariable: 'F',
      givenValues: {
        m: 10,
        a: 5
      },
      calculate: values => values.m * values.a
    }, {
      formula: 'v = u + a × t',
      variables: kinematicsFormulas.velocityTime.variables,
      missingVariable: 'a',
      givenValues: {
        v: 25,
        u: 5,
        t: 4
      },
      calculate: values => (values.v - values.u) / values.t
    }];
    setProblems(generatedProblems);
  }, []);
  const checkAnswer = () => {
    const currentProblem = problems[currentProblemIndex];
    const correctAnswer = currentProblem.calculate(currentProblem.givenValues);
    const userNumericAnswer = parseFloat(userAnswer);
    // Check if answer is within 1% of the correct answer to account for rounding
    const isCorrect = !isNaN(userNumericAnswer) && Math.abs((userNumericAnswer - correctAnswer) / correctAnswer) < 0.01;
    if (isCorrect) {
      setFeedback({
        correct: true,
        message: `Correct! ${currentProblem.missingVariable} = ${correctAnswer.toFixed(2)} ${currentProblem.variables[currentProblem.missingVariable].unit}`
      });
      setScore(score + 1);
    } else {
      setFeedback({
        correct: false,
        message: `Incorrect. The correct answer is ${correctAnswer.toFixed(2)} ${currentProblem.variables[currentProblem.missingVariable].unit}`
      });
    }
  };
  const nextProblem = () => {
    setUserAnswer('');
    setFeedback(null);
    if (currentProblemIndex + 1 >= problems.length) {
      setGameFinished(true);
    } else {
      setCurrentProblemIndex(currentProblemIndex + 1);
    }
  };
  const restartGame = () => {
    setCurrentProblemIndex(0);
    setUserAnswer('');
    setFeedback(null);
    setScore(0);
    setGameFinished(false);
  };
  const formatFormula = (formula: string, missingVariable: string) => {
    return formula.replace(missingVariable, '<span class="text-red-500 font-bold">?</span>');
  };
  if (problems.length === 0) {
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
              <div className="text-6xl font-bold text-indigo-600 mb-2">
                {score} / {problems.length}
              </div>
              <p className="text-xl text-gray-600">
                {score === problems.length ? 'Perfect score! Outstanding!' : score >= problems.length * 0.7 ? 'Well done! Great work!' : 'Good try! Practice makes perfect!'}
              </p>
            </div>
            <div className="flex space-x-4 justify-center">
              <button onClick={restartGame} className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
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
  const currentProblem = problems[currentProblemIndex];
  return <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Guess the Missing Value
        </h1>
        <div className="flex items-center space-x-4">
          <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg">
            Problem {currentProblemIndex + 1} / {problems.length}
          </div>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
            Score: {score}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Find the Missing Value
            </h2>
            <p className="text-gray-600">
              Solve for the missing variable in the following physics formula.
            </p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg mb-6">
            <p className="text-center text-xl font-mono" dangerouslySetInnerHTML={{
            __html: formatFormula(currentProblem.formula, currentProblem.missingVariable)
          }} />
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Given Values:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(currentProblem.givenValues).map(([variable, value]) => <div key={variable} className="bg-gray-50 p-3 rounded-md">
                    <span className="font-mono">
                      {variable} = {value}{' '}
                      {currentProblem.variables[variable].unit}
                    </span>
                  </div>)}
            </div>
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              {currentProblem.variables[currentProblem.missingVariable].name} (
              {currentProblem.missingVariable}):
            </label>
            <div className="flex">
              <input type="number" step="0.01" value={userAnswer} onChange={e => setUserAnswer(e.target.value)} className="border rounded-l-md px-3 py-2 w-full" placeholder="Enter your answer" />
              <span className="bg-gray-100 px-3 py-2 rounded-r-md border border-l-0 text-gray-600">
                {currentProblem.variables[currentProblem.missingVariable].unit}
              </span>
            </div>
          </div>
          {feedback ? <div className={`p-4 rounded-lg mb-6 ${feedback.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {feedback.message}
            </div> : null}
          <div className="flex space-x-4">
            {!feedback ? <button onClick={checkAnswer} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Check Answer
              </button> : <button onClick={nextProblem} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                {currentProblemIndex + 1 >= problems.length ? 'View Results' : 'Next Problem'}
              </button>}
          </div>
        </div>
      </div>
    </div>;
};
export default MissingValue;