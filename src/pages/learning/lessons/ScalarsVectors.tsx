import React, { useState, Component } from 'react';
import FormulaCalculator from '../../../components/FormulaCalculator';
import TrigCalculator from '../../../components/TrigCalculator';
import { vectorOperations } from '../../../utils/formulas';
const ScalarsVectors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    title: 'Scalar and Vector Quantities',
    content: <div className="space-y-4">
          <p>
            A <strong>scalar quantity</strong> has magnitude (size) but no
            direction. Examples include:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Speed</li>
            <li>Distance</li>
            <li>Time</li>
            <li>Mass</li>
            <li>Energy</li>
            <li>Power</li>
          </ul>
          <p>
            A <strong>vector quantity</strong> has both magnitude and direction.
            Examples include:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Velocity</li>
            <li>Displacement</li>
            <li>Acceleration</li>
            <li>Force</li>
            <li>Weight</li>
            <li>Momentum</li>
          </ul>
        </div>
  }, {
    title: 'Representing Vectors',
    content: <div className="space-y-4">
          <p>Vectors are represented graphically as arrows:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              The <strong>length</strong> of the arrow represents the magnitude
            </li>
            <li>
              The <strong>direction</strong> of the arrow shows the direction
            </li>
            <li>
              The <strong>tail</strong> of the arrow shows the starting point
            </li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Direction Conventions:</h4>
            <p>The direction of a vector can be described in several ways:</p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>
                As an angle from a reference direction (e.g., 30° north of east)
              </li>
              <li>As a counterclockwise angle from the positive x-axis</li>
              <li>Using cardinal directions (N, S, E, W)</li>
            </ol>
          </div>
        </div>
  }, {
    title: 'Vector Addition Methods',
    content: <div className="space-y-4">
          <p>There are several methods to add vectors:</p>
          <h4 className="font-semibold mt-4">1. Graphical Methods</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>Parallelogram Method:</strong> Useful for adding two
              vectors by forming a parallelogram and finding the diagonal
            </li>
            <li>
              <strong>Polygon (Head-to-Tail) Method:</strong> Place the tail of
              each subsequent vector at the head of the previous one
            </li>
          </ul>
          <h4 className="font-semibold mt-4">2. Analytical Method</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Break vectors into x and y components</li>
            <li>Add the components separately</li>
            <li>Find the magnitude and direction of the resultant</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">For Perpendicular Vectors:</h4>
            <p>
              When vectors are perpendicular, the Pythagorean theorem can be
              used:
            </p>
            <p className="font-mono mt-2">|R|² = |A|² + |B|²</p>
            <p>Where |R| is the magnitude of the resultant vector</p>
          </div>
        </div>
  }, {
    title: 'Vector Components',
    content: <div className="space-y-4">
          <p>
            Any vector can be broken down into components along coordinate axes:
          </p>
          <h4 className="font-semibold">Component Formulas:</h4>
          <div className="bg-blue-50 p-4 rounded-lg mt-2 mb-4">
            <p className="font-mono">A_x = |A| × cos(θ)</p>
            <p className="font-mono">A_y = |A| × sin(θ)</p>
            <p className="mt-2">
              Where θ is the angle from the positive x-axis
            </p>
          </div>
          <h4 className="font-semibold">Resultant Vector from Components:</h4>
          <div className="bg-blue-50 p-4 rounded-lg mt-2">
            <p className="font-mono">|A| = √(A_x² + A_y²)</p>
            <p className="font-mono">θ = tan⁻¹(A_y / A_x)</p>
          </div>
        </div>
  }, {
    title: 'Trigonometry in Vector Analysis',
    content: <div className="space-y-4">
          <p>Trigonometric functions are essential for vector analysis:</p>
          <div className="bg-blue-50 p-4 rounded-lg mt-2">
            <h4 className="font-semibold mb-2">SOH-CAH-TOA:</h4>
            <p>
              <strong>S</strong>ine = <strong>O</strong>pposite /{' '}
              <strong>H</strong>ypotenuse
            </p>
            <p>
              <strong>C</strong>osine = <strong>A</strong>djacent /{' '}
              <strong>H</strong>ypotenuse
            </p>
            <p>
              <strong>T</strong>angent = <strong>O</strong>pposite /{' '}
              <strong>A</strong>djacent
            </p>
          </div>
          <h4 className="font-semibold mt-4">
            Applications in Vector Problems:
          </h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Finding vector components</li>
            <li>Determining angles between vectors</li>
            <li>Resolving forces in different directions</li>
            <li>Calculating work done by a force at an angle</li>
          </ul>
        </div>
  }, {
    title: 'Example Problems',
    content: <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example 1: Vector Addition</h4>
            <p>
              <strong>Problem:</strong> A force of 280 N and a force of 320 N
              are acting on an object. There is an angle of 20° between the
              forces. Calculate the resultant force.
            </p>
            <p className="mt-3">
              <strong>Solution:</strong>
            </p>
            <p>Using the law of cosines for vector addition:</p>
            <p className="font-mono">|R|² = |A|² + |B|² + 2|A||B|cos(θ)</p>
            <p className="font-mono">
              |R|² = (280 N)² + (320 N)² + 2(280 N)(320 N)cos(20°)
            </p>
            <p className="font-mono">
              |R|² = 78,400 N² + 102,400 N² + 179,200 N² × 0.9397
            </p>
            <p className="font-mono">
              |R|² = 78,400 N² + 102,400 N² + 168,395 N²
            </p>
            <p className="font-mono">|R|² = 349,195 N²</p>
            <p className="font-mono">|R| = 590.9 N</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Example 2: Vector Components</h4>
            <p>
              <strong>Problem:</strong> A vector has a magnitude of 50 units and
              points at an angle of 37° above the positive x-axis. Find its x
              and y components.
            </p>
            <p className="mt-3">
              <strong>Solution:</strong>
            </p>
            <p>Using component formulas:</p>
            <p className="font-mono">
              A_x = |A| × cos(θ) = 50 × cos(37°) = 50 × 0.7986 = 39.93 units
            </p>
            <p className="font-mono">
              A_y = |A| × sin(θ) = 50 × sin(37°) = 50 × 0.6018 = 30.09 units
            </p>
          </div>
        </div>
  }, {
    title: 'Vector Calculators',
    content: <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">
            Interactive Vector Calculators
          </h3>
          <FormulaCalculator name="Vector Addition" formula="|R|² = |A|² + |B|² + 2|A||B|cos(θ)" variables={{
        A: {
          name: 'Vector A Magnitude',
          unit: ''
        },
        B: {
          name: 'Vector B Magnitude',
          unit: ''
        },
        θ: {
          name: 'Angle Between Vectors',
          unit: '°'
        }
      }} calculate={(A, B, theta) => vectorOperations.addition.calculate(A, B, theta)} result={{
        name: 'Resultant Vector Magnitude',
        unit: ''
      }} />
          <FormulaCalculator name="Vector Components" formula="A_x = |A|cos(θ), A_y = |A|sin(θ)" variables={{
        A: {
          name: 'Vector Magnitude',
          unit: ''
        },
        θ: {
          name: 'Angle from x-axis',
          unit: '°'
        }
      }} calculate={(A, theta) => {
        const x = vectorOperations.components.calculateX(A, theta);
        const y = vectorOperations.components.calculateY(A, theta);
        return Math.sqrt(x * x + y * y); // Return the magnitude for verification
      }} result={{
        name: 'Components',
        unit: ''
      }} />
          <TrigCalculator />
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
        <h1 className="text-3xl font-bold text-gray-800">
          Scalars and Vectors
        </h1>
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
export default ScalarsVectors;