import React from 'react';

const steps = [
  {
    id: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: (
      <svg className="w-10 h-10 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: (
      <svg className="w-10 h-10 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: (
      <svg className="w-10 h-10 text-[#7c3aed]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const GetStarted = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-[#64748b] text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative p-10 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow text-center"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 bg-[#7c3aed] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg shadow-purple-200">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-50 rounded-full mb-8">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">
                {step.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;