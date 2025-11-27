import React, { useState } from 'react';
import FormulaCalculator from '../../../components/FormulaCalculator';
import { forceFormula } from '../../../utils/formulas';
const NewtonsLaws = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    title: "Introduction to Newton's Laws",
    content: <div className="space-y-4">
          <p>
            <strong>Newton's Laws of Motion</strong> are three fundamental laws
            that describe the relationship between a body and the forces acting
            upon it, and its motion in response to those forces.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">The Three Laws:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>First Law:</strong> An object at rest stays at rest, and
                an object in motion stays in motion with the same speed and
                direction, unless acted upon by an external force.
              </li>
              <li>
                <strong>Second Law:</strong> The acceleration of an object is
                directly proportional to the net force acting on it and
                inversely proportional to its mass.
              </li>
              <li>
                <strong>Third Law:</strong> For every action, there is an equal
                and opposite reaction.
              </li>
            </ul>
          </div>
          <p>
            These laws form the foundation of classical mechanics and help
            explain the motion of objects in our everyday world.
          </p>
        </div>
  }, {
    title: "Newton's First Law: Law of Inertia",
    content: <div className="space-y-4">
          <p>
            <strong>Newton's First Law</strong>, also known as the{' '}
            <strong>Law of Inertia</strong>, states that an object at rest will
            remain at rest, and an object in motion will remain in motion with
            the same speed and in the same direction, unless acted upon by an
            unbalanced force.
          </p>
          <p>
            This law introduces the concept of <strong>inertia</strong>, which
            is the resistance of an object to any change in its state of motion.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">
              Examples of Newton's First Law:
            </h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>A book on a table stays at rest until pushed</li>
              <li>
                Passengers in a car continue moving forward when the car
                suddenly stops
              </li>
              <li>
                A soccer ball continues rolling until friction slows it down
              </li>
              <li>
                Objects in space continue moving in the same direction
                indefinitely
              </li>
            </ul>
          </div>
          <p>
            The first law is essentially a statement about frames of reference:
            it identifies special frames, called inertial frames, in which the
            law is valid.
          </p>
        </div>
  }, {
    title: "Newton's Second Law: F = ma",
    content: <div className="space-y-4">
          <p>
            <strong>Newton's Second Law</strong> quantifies the relationship
            between force, mass, and acceleration. It states that the
            acceleration of an object is directly proportional to the net force
            acting on it and inversely proportional to its mass.
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
          <p className="mt-4">Implications of the Second Law:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Larger forces cause greater acceleration</li>
            <li>
              More massive objects require more force to accelerate at the same
              rate
            </li>
            <li>
              The direction of acceleration is the same as the direction of the
              net force
            </li>
          </ul>
        </div>
  }, {
    title: "Newton's Third Law: Action-Reaction",
    content: <div className="space-y-4">
          <p>
            <strong>Newton's Third Law</strong> states that for every action,
            there is an equal and opposite reaction. This means that when one
            object exerts a force on a second object, the second object exerts
            an equal force in the opposite direction on the first object.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Key Points:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Action and reaction forces are equal in magnitude</li>
              <li>Action and reaction forces are opposite in direction</li>
              <li>Action and reaction forces act on different objects</li>
              <li>Action and reaction forces are of the same type</li>
            </ul>
          </div>
          <p className="mt-4">Examples of Newton's Third Law:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              A swimmer pushing water backward (action) and the water pushing
              the swimmer forward (reaction)
            </li>
            <li>
              A rocket expelling gas (action) and the gas pushing the rocket
              forward (reaction)
            </li>
            <li>
              A person walking on the ground (action) and the ground pushing
              back (reaction)
            </li>
            <li>
              A hammer hitting a nail (action) and the nail pushing back on the
              hammer (reaction)
            </li>
          </ul>
        </div>
  }, {
    title: "Applications of Newton's Laws",
    content: <div className="space-y-4">
          <p>
            Newton's Laws of Motion have numerous applications in everyday life
            and engineering:
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Practical Applications:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>Transportation:</strong> Design of vehicles, braking
                systems, seat belts
              </li>
              <li>
                <strong>Sports:</strong> Optimizing athletic performance,
                equipment design
              </li>
              <li>
                <strong>Space Travel:</strong> Rocket propulsion, satellite
                orbits, spacecraft navigation
              </li>
              <li>
                <strong>Construction:</strong> Structural analysis, building
                stability
              </li>
              <li>
                <strong>Manufacturing:</strong> Machine design, automation
                systems
              </li>
            </ul>
          </div>
          <p className="mt-4">
            Understanding Newton's Laws allows engineers and scientists to
            predict and control the motion of objects, leading to technological
            advancements and innovations in various fields.
          </p>
        </div>
  }, {
    title: 'Example Problems',
    content: <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">
              Example 1: Newton's Second Law
            </h4>
            <p>
              <strong>Problem:</strong> A 1500 kg car accelerates from 0 to 27
              m/s in 10 seconds. What is the net force acting on the car?
            </p>
            <p className="mt-3">
              <strong>Solution:</strong>
            </p>
            <p>Given:</p>
            <ul className="list-none ml-4">
              <li>Mass (m) = 1500 kg</li>
              <li>Initial velocity (v₀) = 0 m/s</li>
              <li>Final velocity (v) = 27 m/s</li>
              <li>Time (t) = 10 s</li>
            </ul>
            <p className="mt-2">First, find the acceleration:</p>
            <p className="font-mono">
              a = (v - v₀) / t = (27 - 0) / 10 = 2.7 m/s²
            </p>
            <p className="mt-2">Using Newton's Second Law:</p>
            <p className="font-mono">F = m × a = 1500 kg × 2.7 m/s² = 4050 N</p>
            <p className="mt-2">The net force acting on the car is 4050 N.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">
              Example 2: Newton's Third Law
            </h4>
            <p>
              <strong>Problem:</strong> A 70 kg person stands on a scale in an
              elevator. What is the reading on the scale when the elevator is
              accelerating upward at 2 m/s²?
            </p>
            <p className="mt-3">
              <strong>Solution:</strong>
            </p>
            <p>Given:</p>
            <ul className="list-none ml-4">
              <li>Mass (m) = 70 kg</li>
              <li>Acceleration (a) = 2 m/s² upward</li>
              <li>g = 9.81 m/s²</li>
            </ul>
            <p className="mt-2">The forces acting on the person are:</p>
            <p className="font-mono">
              Weight: W = m × g = 70 kg × 9.81 m/s² = 686.7 N (downward)
            </p>
            <p className="font-mono">Normal force: N = ? (upward)</p>
            <p className="mt-2">
              Using Newton's Second Law (upward is positive):
            </p>
            <p className="font-mono">N - W = m × a</p>
            <p className="font-mono">N - 686.7 = 70 × 2</p>
            <p className="font-mono">N - 686.7 = 140</p>
            <p className="font-mono">N = 826.7 N</p>
            <p className="mt-2">
              The scale reading is 826.7 N, which is equivalent to about 84.3
              kg.
            </p>
          </div>
        </div>
  }, {
    title: 'Force Calculator',
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
        <h1 className="text-3xl font-bold text-gray-800">Newton's Laws</h1>
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
export default NewtonsLaws;