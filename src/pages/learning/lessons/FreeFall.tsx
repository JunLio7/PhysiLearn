import React, { useState } from 'react';
import FormulaCalculator from '../../../components/FormulaCalculator';
import { freeFallFormulas } from '../../../utils/formulas';
const FreeFall = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    title: 'Introduction to Free Fall',
    content: <div className="space-y-4">
          <p>
            <strong>Free fall</strong> is the motion of a body when only the
            force due to gravity is acting on it. The acceleration experienced
            by an object in free fall is called the{' '}
            <strong>acceleration due to gravity</strong>, or{' '}
            <strong>free-fall acceleration</strong>.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Key Points:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Free-fall acceleration is denoted with the symbols a<sub>g</sub>{' '}
                or simply g
              </li>
              <li>On Earth's surface, g = 9.81 m/s²</li>
              <li>
                The negative sign (-9.81 m/s²) indicates that the acceleration
                is downward
              </li>
              <li>
                Free-fall acceleration is the same for all objects, regardless
                of mass
              </li>
            </ul>
          </div>
        </div>
  }, {
    title: 'Understanding Gravitational Acceleration',
    content: <div className="space-y-4">
          <p>
            The value of <strong>g = 9.81 m/s²</strong> means that every second
            an object is in free fall, its velocity increases by 9.81 meters per
            second in the downward direction.
          </p>
          <h4 className="font-semibold mt-4">Direction Convention:</h4>
          <p>In physics problems, we often use a coordinate system where:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>"Up" is positive (+)</li>
            <li>"Down" is negative (-)</li>
          </ul>
          <p>
            Therefore, g = -9.81 m/s² indicates that the acceleration is in the
            downward direction.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Velocity Changes:</h4>
            <p>For an object dropped from rest (initial velocity = 0 m/s):</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>After 1 second: v = -9.81 m/s</li>
              <li>After 2 seconds: v = -19.62 m/s</li>
              <li>After 3 seconds: v = -29.43 m/s</li>
            </ul>
          </div>
        </div>
  }, {
    title: 'Free Fall Equations',
    content: <div className="space-y-4">
          <p>
            The equations of motion for free fall are derived from the general
            kinematic equations by substituting a = -g.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Free Fall Equations:</h4>
            <p className="font-mono">v = v₀ - g·t</p>
            <p className="font-mono">h = v₀·t - ½·g·t²</p>
            <p className="font-mono">v² = v₀² - 2·g·h</p>
            <p className="mt-3">Where:</p>
            <ul className="list-none ml-4 space-y-1">
              <li>v = final velocity (m/s)</li>
              <li>v₀ = initial velocity (m/s)</li>
              <li>g = 9.81 m/s²</li>
              <li>t = time (s)</li>
              <li>h = height or displacement (m)</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Note:</strong> These equations assume:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>No air resistance</li>
            <li>Constant gravitational acceleration</li>
            <li>Positive direction is upward</li>
          </ul>
        </div>
  }, {
    title: 'Upward Motion and Free Fall',
    content: <div className="space-y-4">
          <p>
            When an object is thrown upward, gravity still causes a constant
            downward acceleration of -9.81 m/s².
          </p>
          <h4 className="font-semibold mt-4">Sequence of Events:</h4>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>The object is thrown upward with an initial velocity v₀</li>
            <li>The upward velocity decreases by 9.81 m/s every second</li>
            <li>At the peak height, the velocity momentarily becomes zero</li>
            <li>The object then begins falling back down</li>
            <li>The downward velocity increases by 9.81 m/s every second</li>
          </ol>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Maximum Height:</h4>
            <p>At the maximum height, v = 0. Using the equation:</p>
            <p className="font-mono">v² = v₀² - 2·g·h</p>
            <p className="font-mono">0 = v₀² - 2·g·h</p>
            <p className="font-mono">h = v₀²/(2·g)</p>
          </div>
        </div>
  }, {
    title: 'Example Problems',
    content: <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example 1: Dropped Object</h4>
            <p>
              <strong>Problem:</strong> A construction worker accidentally drops
              a brick from a high scaffold. What is the velocity of the brick
              after 4.0 s? How far does the brick fall during this time?
            </p>
            <p className="mt-3">
              <strong>Solution:</strong>
            </p>
            <p>Given:</p>
            <ul className="list-none ml-4">
              <li>Initial velocity v₀ = 0 m/s (dropped from rest)</li>
              <li>Time t = 4.0 s</li>
              <li>g = 9.81 m/s²</li>
            </ul>
            <p className="mt-2">a) Velocity after 4.0 s:</p>
            <p className="font-mono">v = v₀ - g·t</p>
            <p className="font-mono">v = 0 - 9.81·4.0</p>
            <p className="font-mono">v = -39.24 m/s</p>
            <p className="mt-2">b) Distance fallen:</p>
            <p className="font-mono">h = v₀·t - ½·g·t²</p>
            <p className="font-mono">h = 0·4.0 - ½·9.81·(4.0)²</p>
            <p className="font-mono">h = -½·9.81·16</p>
            <p className="font-mono">h = -78.48 m</p>
            <p className="mt-2">
              The negative sign indicates downward displacement. The brick falls
              78.48 meters in 4.0 seconds.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example 2: Free-Fall Ride</h4>
            <p>
              <strong>Problem:</strong> Suppose a free-fall ride at an amusement
              park starts at rest and is in free fall. What is the velocity of
              the ride after 2.3 s? How far do people on the ride fall during
              the 2.3-s time period?
            </p>
            <p className="mt-3">
              <strong>Solution:</strong>
            </p>
            <p>Given:</p>
            <ul className="list-none ml-4">
              <li>Initial velocity v₀ = 0 m/s (starts at rest)</li>
              <li>Time t = 2.3 s</li>
              <li>g = 9.81 m/s²</li>
            </ul>
            <p className="mt-2">a) Velocity after 2.3 s:</p>
            <p className="font-mono">v = v₀ - g·t</p>
            <p className="font-mono">v = 0 - 9.81·2.3</p>
            <p className="font-mono">v = -22.56 m/s</p>
            <p className="mt-2">b) Distance fallen:</p>
            <p className="font-mono">h = v₀·t - ½·g·t²</p>
            <p className="font-mono">h = 0·2.3 - ½·9.81·(2.3)²</p>
            <p className="font-mono">h = -½·9.81·5.29</p>
            <p className="font-mono">h = -25.95 m</p>
            <p className="mt-2">
              The ride falls 25.95 meters in 2.3 seconds, with a final velocity
              of 22.56 m/s downward.
            </p>
          </div>
        </div>
  }, {
    title: 'Free Fall Calculators',
    content: <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">
            Interactive Free Fall Calculators
          </h3>
          <FormulaCalculator name="Velocity in Free Fall" formula="v = u + g × t" variables={freeFallFormulas.velocity.variables} calculate={(u, t, g = 9.81) => freeFallFormulas.velocity.calculate(u, t, g)} result={{
        name: 'Final Velocity',
        unit: 'm/s'
      }} />
          <FormulaCalculator name="Height in Free Fall" formula="h = u × t + ½ × g × t²" variables={freeFallFormulas.height.variables} calculate={(u, t, g = 9.81) => freeFallFormulas.height.calculate(u, t, g)} result={{
        name: 'Height',
        unit: 'm'
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
        <h1 className="text-3xl font-bold text-gray-800">Free Fall</h1>
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
export default FreeFall;