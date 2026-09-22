import React from 'react';
import { GraduationCap, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 border-b border-[#464554]/30 bg-[#0a0e17]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 text-[#c0c1ff] font-mono text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c0c1ff]" />
              <span>Profile Overview</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#dfe2ef] tracking-tight flex items-center gap-3">
              About Me <span className="font-mono text-[#908fa0]/40 text-sm font-normal">/ 01</span>
            </h2>
          </div>

          {/* Section Content */}
          <div className="lg:col-span-8">
            <div className="relative pl-6 md:pl-8 border-l-2 border-[#c0c1ff]/70">
              <p className="text-lg sm:text-xl text-[#dfe2ef] leading-relaxed md:leading-[1.75] font-normal">
                {PERSONAL_INFO.bioFull}
              </p>

              {/* Institution & Degree Metadata Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-xs text-[#c7c4d7]">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#181b25] border border-[#464554]/40">
                  <GraduationCap className="w-4 h-4 text-[#c0c1ff]" />
                  <span>{PERSONAL_INFO.university}</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#181b25] border border-[#464554]/40">
                  <MapPin className="w-4 h-4 text-[#c0c1ff]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#181b25] border border-[#464554]/40">
                  <CheckCircle2 className="w-4 h-4 text-[#c0c1ff]" />
                  <span>{PERSONAL_INFO.degree}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
