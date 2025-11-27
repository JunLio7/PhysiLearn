import React, { useState } from 'react';
import FormulaCalculator from '../../../components/FormulaCalculator';
import { forceFormula } from '../../../utils/formulas';
const ForcesMotion = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    title: 'Introduction to Forces and Motion',
    content: <div className="space-y-4">
          <p>
            <strong>Forces</strong> are pushes or pulls that can cause an object
            to change its motion. Forces are vector quantities, having both
            magnitude and direction.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Key Concepts:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Forces cause objects to accelerate</li>
              <li>Multiple forces can act on an object simultaneously</li>
              <li>Forces can be balanced or unbalanced</li>
              <li>Net force determines an object's acceleration</li>
            </ul>
          </div>
          <p>
            Understanding forces is fundamental to explaining why objects move
            the way they do.
          </p>
        </div>
  }, {
    title: 'Types of Forces',
    content: <div className="space-y-4">
          <p>There are several types of forces that we encounter in physics:</p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Common Forces:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>Gravitational Force:</strong> The attraction between
                objects with mass
              </li>
              <li>
                <strong>Normal Force:</strong> The perpendicular force exerted
                by surfaces
              </li>
              <li>
                <strong>Friction:</strong> The force that opposes motion between
                surfaces
              </li>
              <li>
                <strong>Tension:</strong> The force transmitted through strings,
                ropes, or cables
              </li>
              <li>
                <strong>Applied Force:</strong> Forces directly applied to
                objects
              </li>
              <li>
                <strong>Spring Force:</strong> The force exerted by compressed
                or stretched springs
              </li>
            </ul>
          </div>
          <p>
            Each type of force has its own characteristics and behavior in
            physical systems.
          </p>
        </div>
  }, {
    title: "Newton's Second Law",
    content: <div className="space-y-4">
          <p>
            <strong>Newton's Second Law</strong> relates force, mass, and
            acceleration. It states that the acceleration of an object is
            directly proportional to the net force acting on it and inversely
            proportional to its mass.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Mathematical Form:</h4>
            <p className="font-mono">F = m × a</p>
            <p className="mt-3">Where:</p>
            <ul className="list-none ml-4 space-y-1">
              <li>F = net force (N)</li>
              <li>m = mass (kg)</li>
              <li>a = acceleration (m/s²)</li>
            </ul>
          </div>
          <p className="mt-4">This equation allows us to calculate:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>The force needed to accelerate an object</li>
            <li>The acceleration produced by a given force</li>
            <li>The mass of an object based on its response to forces</li>
          </ul>
        </div>
  }, {
    title: 'Free Body Diagrams',
    content: <div className="space-y-4">
          <p>
            <strong>Free Body Diagrams (FBDs)</strong> are visual tools used to
            analyze the forces acting on an object. They show all external
            forces acting on an isolated object.
          </p>
          <p>Steps to create a free body diagram:</p>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>Isolate the object of interest</li>
            <li>Identify all forces acting on the object</li>
            <li>
              Draw arrows representing each force (length indicates magnitude)
            </li>
            <li>Label each force with its type and magnitude</li>
          </ol>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Common Forces in FBDs:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Weight (mg) - always points downward</li>
              <li>Normal force (N) - perpendicular to surfaces</li>
              <li>Friction (f) - parallel to surfaces, opposes motion</li>
              <li>Applied forces (F) - in the direction of application</li>
              <li>Tension (T) - along strings or ropes</li>
            </ul>
          </div>
        </div>
  }, {
    title: 'Example Problems',
    content: <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example 1: Calculating Force</h4>
            <p>
              <strong>Problem:</strong> A 2.0 kg object is accelerating at 4.0
              m/s². What is the net force acting on the object?
            </p>
            <p className="mt-3">
              <strong>Solution:</strong>
            </p>
            <p>Given:</p>
            <ul className="list-none ml-4">
              <li>Mass (m) = 2.0 kg</li>
              <li>Acceleration (a) = 4.0 m/s²</li>
            </ul>
            <p className="mt-2">Using Newton's Second Law:</p>
            <p className="font-mono">F = m × a</p>
            <p className="font-mono">F = 2.0 kg × 4.0 m/s²</p>
            <p className="font-mono">F = 8.0 N</p>
            <p className="mt-2">The net force acting on the object is 8.0 N.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example 2: Inclined Plane</h4>
            <p>
              <strong>Problem:</strong> A 5.0 kg box sits on a frictionless
              inclined plane that makes an angle of 30° with the horizontal.
              What is the acceleration of the box down the plane?
            </p>
            <p className="mt-3">
              <strong>Solution:</strong>
            </p>
            <p>Given:</p>
            <ul className="list-none ml-4">
              <li>Mass (m) = 5.0 kg</li>
              <li>Angle (θ) = 30°</li>
              <li>g = 9.81 m/s²</li>
            </ul>
            <p className="mt-2">
              The component of weight parallel to the incline:
            </p>
            <p className="font-mono">F = m × g × sin(θ)</p>
            <p className="font-mono">F = 5.0 kg × 9.81 m/s² × sin(30°)</p>
            <p className="font-mono">F = 5.0 kg × 9.81 m/s² × 0.5</p>
            <p className="font-mono">F = 24.525 N</p>
            <p className="mt-2">Using Newton's Second Law:</p>
            <p className="font-mono">
              a = F/m = 24.525 N / 5.0 kg = 4.905 m/s²
            </p>
            <p className="mt-2">
              The box accelerates down the plane at 4.905 m/s².
            </p>
          </div>
        </div>
  }, {
    title: 'Force Calculators',
    content: <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">
            Interactive Force Calculator
          </h3>
          <FormulaCalculator name="Newton's Second Law" formula="F = m × a" variables={forceFormula.variables} calculate={(m, a) => forceFormula.calculate(m, a)} result={{
        name: 'Force',
        unit: 'N'
      }} />
        </div>
  }];
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  return <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Forces & Motion</h1>
        <div className="flex items-center space-x-2 text-sm">
          <span>
            Slide {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {slides[currentSlide].title}
          </h2>
          {slides[currentSlide].content}
        </div>
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t">
          <button onClick={prevSlide} className={`px-4 py-2 rounded-md ${currentSlide > 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`} disabled={currentSlide === 0}>
            Previous
          </button>
          <div className="flex space-x-2">
            {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`} aria-label={`Go to slide ${index + 1}`} />)}
          </div>
          <button onClick={nextSlide} className={`px-4 py-2 rounded-md ${currentSlide < slides.length - 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`} disabled={currentSlide === slides.length - 1}>
            Next
          </button>
        </div>
      </div>
    </div>;
};
export default ForcesMotion;