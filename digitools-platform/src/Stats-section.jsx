import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <section className="w-full bg-[#7c3aed] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-around">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              {/* Stat Item */}
              <div className="flex flex-col items-center text-center py-6 md:py-0">
                <span className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </span>
                <span className="text-purple-100 text-sm font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>

              {/* Divider - hidden on mobile, shown between items on desktop */}
              {index < stats.length - 1 && (
                <div className="hidden md:block h-16 w-[1px] bg-white/30 self-center mx-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;