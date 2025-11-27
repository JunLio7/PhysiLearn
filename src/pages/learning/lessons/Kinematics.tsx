import React, { useState } from 'react';
import FormulaCalculator from '../../../components/FormulaCalculator';
import { kinematicsFormulas } from '../../../utils/formulas';
const Kinematics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    title: 'Introduction to Kinematics',
    content: <div className="space-y-4">
          <p>
            <strong>Kinematics</strong> is the branch of physics that describes
            the motion of objects without considering the forces that cause the
            motion.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Key Concepts in Kinematics:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Position and displacement</li>
              <li>Distance and speed</li>
              <li>Velocity (speed with direction)</li>
              <li>Acceleration (change in velocity)</li>
              <li>Motion equations</li>
            </ul>
          </div>
          <p>
            Kinematics provides the mathematical tools to describe and analyze
            motion in terms of position, velocity, and acceleration as functions
            of time.
          </p>
        </div>
  }, {
    title: 'Position, Distance, and Displacement',
    content: <div className="space-y-4">
          <p>
            <strong>Position</strong> refers to the location of an object with
            respect to some reference frame.
          </p>
          <p>
            <strong>Distance</strong> is a scalar quantity that refers to "how
            much ground an object has covered" during its motion. It is the
            total path length traversed.
          </p>
          <p>
            <strong>Displacement</strong> is a vector quantity that refers to
            "how far out of place an object is" - it's the change in position in
            a particular direction.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Key Differences:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Distance is a scalar (magnitude only), displacement is a vector
                (magnitude and direction)
              </li>
              <li>
                Distance is always positive, displacement can be positive,
                negative, or zero
              </li>
              <li>Distance ≥ |Displacement|</li>
            </ul>
          </div>
        </div>
  }, {
    title: 'Speed and Velocity',
    content: <div className="space-y-4">
          <p>
            <strong>Speed</strong> is a scalar quantity that refers to "how fast
            an object is moving" regardless of direction. It is the rate of
            change of distance with time.
          </p>
          <p className="font-mono">Speed = Distance / Time</p>
          <p>
            <strong>Velocity</strong> is a vector quantity that refers to "the
            rate at which an object changes its position." It includes both
            speed and direction.
          </p>
          <p className="font-mono">Velocity = Displacement / Time</p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Average vs. Instantaneous:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>Average speed</strong> = Total distance / Total time
              </li>
              <li>
                <strong>Average velocity</strong> = Total displacement / Total
                time
              </li>
              <li>
                <strong>Instantaneous speed</strong> = Speed at a specific
                moment in time
              </li>
              <li>
                <strong>Instantaneous velocity</strong> = Velocity at a specific
                moment in time
              </li>
            </ul>
          </div>
        </div>
  }, {
    title: 'Acceleration',
    content: <div className="space-y-4">
          <p>
            <strong>Acceleration</strong> is the rate of change of velocity with
            respect to time. It is a vector quantity that describes how the
            velocity of an object changes.
          </p>
          <p className="font-mono">Acceleration = Change in velocity / Time</p>
          <p className="font-mono">a = (v₂ - v₁) / (t₂ - t₁)</p>
          <p>
            Velocity can change in three ways, and all result in acceleration:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>Change in speed (either increase or decrease)</li>
            <li>Change in direction</li>
            <li>Change in both speed and direction</li>
          </ol>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Units:</h4>
            <p>
              The SI unit of acceleration is meters per second squared (m/s²)
            </p>
            <p>This means the velocity changes by this amount every second.</p>
          </div>
        </div>
  }, {
    title: 'Kinematic Equations',
    content: <div className="space-y-4">
          <p>
            For motion with constant acceleration, we can use a set of equations
            known as the kinematic equations to describe the motion.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Kinematic Equations:</h4>
            <p className="font-mono">v = v₀ + at</p>
            <p className="font-mono">s = v₀t + ½at²</p>
            <p className="font-mono">v² = v₀² + 2as</p>
            <p className="font-mono">s = ((v₀ + v)/2) × t</p>
            <p className="mt-3">Where:</p>
            <ul className="list-none ml-4 space-y-1">
              <li>v = final velocity</li>
              <li>v₀ = initial velocity</li>
              <li>a = acceleration</li>
              <li>t = time</li>
              <li>s = displacement</li>
            </ul>
          </div>
          <p className="mt-4">These equations are valid only when:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Acceleration is constant</li>
            <li>Motion is in a straight line</li>
          </ul>
        </div>
  }, {
    title: 'Example Problems',
    content: <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">
              Example 1: Velocity and Displacement
            </h4>
            <p>
              <strong>Problem:</strong> A car accelerates uniformly from rest to
              a speed of 20 m/s in 10 seconds. What is the car's acceleration
              and how far does it travel?
            </p>
            <p className="mt-3">
              <strong>Solution:</strong>
            </p>
            <p>Given:</p>
            <ul className="list-none ml-4">
              <li>Initial velocity v₀ = 0 m/s (rest)</li>
              <li>Final velocity v = 20 m/s</li>
              <li>Time t = 10 s</li>
            </ul>
            <p className="mt-2">a) Finding acceleration:</p>
            <p className="font-mono">
              a = (v - v₀) / t = (20 - 0) / 10 = 2 m/s²
            </p>
            <p className="mt-2">b) Finding displacement:</p>
            <p className="font-mono">
              s = v₀t + ½at² = 0 × 10 + ½ × 2 × 10² = 100 m
            </p>
            <p className="mt-2">
              The car accelerates at 2 m/s² and travels 100 meters.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">
              Example 2: Motion with Constant Acceleration
            </h4>
            <p>
              <strong>Problem:</strong> A motorcyclist heading east accelerates
              as he passes a signpost. His acceleration is constant at 4 m/s².
              At time t = 0, he is 5 m east of the signpost with a velocity of 3
              m/s. Find his position and velocity at time t = 2 s.
            </p>
            <p className="mt-3">
              <strong>Solution:</strong>
            </p>
            <p>Given:</p>
            <ul className="list-none ml-4">
              <li>Initial position x₀ = 5 m</li>
              <li>Initial velocity v₀ = 3 m/s</li>
              <li>Acceleration a = 4 m/s²</li>
              <li>Time t = 2 s</li>
            </ul>
            <p className="mt-2">a) Finding velocity at t = 2 s:</p>
            <p className="font-mono">v = v₀ + at = 3 + 4 × 2 = 11 m/s</p>
            <p className="mt-2">b) Finding position at t = 2 s:</p>
            <p className="font-mono">
              x = x₀ + v₀t + ½at² = 5 + 3 × 2 + ½ × 4 × 2² = 5 + 6 + 8 = 19 m
            </p>
            <p className="mt-2">
              At t = 2 s, the motorcyclist is 19 m east of the origin with a
              velocity of 11 m/s.
            </p>
          </div>
        </div>
  }, {
    title: 'Kinematics Calculators',
    content: <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">
            Interactive Kinematics Calculators
          </h3>
          <FormulaCalculator name="Final Velocity (from time)" formula="v = u + a × t" variables={kinematicsFormulas.velocityTime.variables} calculate={(u, a, t) => kinematicsFormulas.velocityTime.calculate(u, a, t)} result={{
        name: 'Final Velocity',
        unit: 'm/s'
      }} />
          <FormulaCalculator name="Final Velocity (from displacement)" formula="v² = u² + 2 × a × s" variables={kinematicsFormulas.velocityDisplacement.variables} calculate={(u, a, s) => kinematicsFormulas.velocityDisplacement.calculate(u, a, s)} result={{
        name: 'Final Velocity',
        unit: 'm/s'
      }} />
          <FormulaCalculator name="Displacement" formula="s = u × t + ½ × a × t²" variables={kinematicsFormulas.displacement.variables} calculate={(u, a, t) => kinematicsFormulas.displacement.calculate(u, a, t)} result={{
        name: 'Displacement',
        unit: 'm'
      }} />
          <FormulaCalculator name="Average Velocity" formula="v_avg = (u + v) / 2" variables={kinematicsFormulas.averageVelocity.variables} calculate={(u, v) => kinematicsFormulas.averageVelocity.calculate(u, v)} result={{
        name: 'Average Velocity',
        unit: 'm/s'
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
        <h1 className="text-3xl font-bold text-gray-800">Kinematics</h1>
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
export default Kinematics;