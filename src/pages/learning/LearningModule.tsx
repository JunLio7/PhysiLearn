import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Award, Calculator } from 'lucide-react';
const LearningModule = () => {
  const topics = [{
    id: 'scalars-vectors',
    title: 'Scalars & Vectors',
    description: 'Learn about scalar and vector quantities, vector operations, and trigonometric applications.',
    icon: <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>,
    progress: 0
  }, {
    id: 'kinematics',
    title: 'Kinematics',
    description: 'Explore motion concepts including displacement, velocity, acceleration, and motion equations.',
    icon: <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="12" x2="2" y2="12" />
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
          <line x1="6" y1="16" x2="6.01" y2="16" />
          <line x1="10" y1="16" x2="10.01" y2="16" />
        </svg>,
    progress: 0
  }, {
    id: 'free-fall',
    title: 'Free Fall',
    description: 'Study objects in free fall motion under the influence of gravity and related calculations.',
    icon: <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>,
    progress: 0
  }, {
    id: 'forces-motion',
    title: 'Forces & Motion',
    description: 'Understand the relationship between forces and motion, including free body diagrams.',
    icon: <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="10" cy="13" r="2" />
          <path d="m14 13 3 3" />
        </svg>,
    progress: 0
  }, {
    id: 'newtons-laws',
    title: "Newton's Laws",
    description: "Learn about Newton's three laws of motion and their applications in physics problems.",
    icon: <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>,
    progress: 0
  }];
  return <div className="container mx-auto px-6 py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Physics Learning Module
        </h1>
        <p className="text-lg text-gray-600">
          Explore interactive physics lessons with formula visualizations and
          step-by-step problem solving. Select a topic below to begin your
          learning journey.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map(topic => <Link key={topic.id} to={`/learning/${topic.id}`} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="p-6">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {topic.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {topic.title}
              </h2>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: `${topic.progress}%`
                }}></div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {topic.progress}%
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </Link>)}
      </div>
    </div>;
};
export default LearningModule;