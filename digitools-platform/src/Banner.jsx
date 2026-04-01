import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative w-full bg-white flex flex-col md:flex-row items-center justify-between px-8 py-16 md:py-24 lg:px-24 font-sans overflow-hidden">
      
      {/* Left Column: Content */}
      <div className="flex-1 max-w-xl z-10 flex flex-col items-start space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f3e8ff] text-[#7c3aed] text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-[#7c3aed] shadow-[0_0_0_2px_#d8b4fe]"></span>
          New: AI-Powered Tools Available
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1e293b] leading-[1.15] tracking-tight">
          Supercharge Your <br /> <span className='text-[#7c3aed]'>Digital Workflow</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-[#64748b] leading-relaxed max-w-md">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-3.5 rounded-full font-medium transition-colors shadow-sm">
                Explore Products
            </button>
            
            <button className="flex items-center gap-2 bg-transparent border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#f3e8ff] px-8 py-3 rounded-full font-medium transition-colors">
                <i className="fas fa-play text-sm"></i>
                Watch Demo
            </button>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="flex-1 mt-12 md:mt-0 flex justify-end relative z-10 w-full">
        <div className="relative w-full max-w-lg aspect-[4/5] md:aspect-auto h-[400px] md:h-[500px]">
          <img 
            src="https://raw.githubusercontent.com/maruf-hossain74/Assignment-06-Programming-Hero/main/digitools-platform/assets/banner.png"
            alt="Digital Workflow Interface"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;