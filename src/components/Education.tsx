import React from 'react';
import { MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="w-full py-20 border-b border-[#464554]/30 bg-[#0f131c]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-[#c0c1ff] font-mono text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#c0c1ff]" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#dfe2ef] tracking-tight flex items-center gap-3">
            Education <span className="font-mono text-[#908fa0]/40 text-sm font-normal">/ 04</span>
          </h2>
        </div>

        {/* 3 Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((item) => {
            const isReva = item.isCurrent;

            return (
              <div
                key={item.id}
                className={`p-6 md:p-8 rounded-xl bg-[#181b25] border border-[#464554]/50 flex flex-col justify-between relative overflow-hidden shadow-lg hover:border-[#c0c1ff]/50 transition-all duration-300 hover:-translate-y-0.5 ${
                  isReva ? 'ring-1 ring-[#c0c1ff]/20' : ''
                }`}
              >
                {/* Atmospheric Glow on Active Degree */}
                {isReva && (
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#8083ff]/10 rounded-full -mr-10 -mt-10 pointer-events-none blur-xl" />
                )}

                <div>
                  {/* Period Badge */}
                  <div
                    className={`inline-block font-mono text-xs font-semibold px-2.5 py-1 rounded-md mb-4 border ${
                      isReva
                        ? 'bg-[#8083ff]/20 border-[#c0c1ff]/30 text-[#c0c1ff]'
                        : 'bg-[#1c1f29] border-[#464554]/40 text-[#c7c4d7]'
                    }`}
                  >
                    {item.period}
                  </div>

                  {/* Institution Name */}
                  <h3 className="font-sans text-xl font-semibold text-[#dfe2ef] mb-1">
                    {item.institution}
                  </h3>

                  {/* Degree Subtitle */}
                  <p className="text-sm font-medium text-[#7bd0ff] mb-3">
                    {item.degree}
                  </p>

                  {/* Coursework & Studies Description */}
                  <p className="text-xs sm:text-sm text-[#c7c4d7] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer Location / Certificate Stamp */}
                <div className="mt-8 pt-4 border-t border-[#464554]/30 flex items-center gap-1.5 font-mono text-xs text-[#c7c4d7]">
                  {item.badge === 'FOUNDATIONAL' ? (
                    <ShieldCheck className="w-4 h-4 text-[#7bd0ff]" />
                  ) : (
                    <MapPin className="w-4 h-4 text-[#c0c1ff]" />
                  )}
                  <span>{item.location}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
