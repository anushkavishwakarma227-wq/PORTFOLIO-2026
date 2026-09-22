import React from 'react';
import { Megaphone, Calendar, Plane, Bot } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getExperienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-[#c0c1ff]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#c0c1ff]" />;
      case 'Plane':
        return <Plane className="w-5 h-5 text-[#7bd0ff]" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-[#7bd0ff]" />;
      default:
        return <Bot className="w-5 h-5 text-[#7bd0ff]" />;
    }
  };

  return (
    <section id="experience" className="w-full py-20 border-b border-[#464554]/30 bg-[#0a0e17]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#c0c1ff] font-mono text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c0c1ff]" />
              <span>Involvement & Leadership</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#dfe2ef] tracking-tight flex items-center gap-3">
              Experience & Activities <span className="font-mono text-[#908fa0]/40 text-sm font-normal">/ 05</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-[#c7c4d7] flex items-center gap-1.5 tracking-wider">
            <span className="text-[#c0c1ff] font-bold">+</span> ROLES, WORKSHOPS & HANDS-ON BOOTCAMPS
          </p>
        </div>

        {/* 4 Experience & Workshop Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCE_DATA.map((item) => {
            const isLeadership = item.isLeadership;

            return (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-[#181b25] border border-[#464554]/40 hover:border-[#c0c1ff]/50 transition-all duration-300 hover:-translate-y-0.5 shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 border ${
                      isLeadership
                        ? 'bg-[#8083ff]/20 border-[#c0c1ff]/30'
                        : 'bg-[#1c1f29] border-[#464554]/40'
                    }`}
                  >
                    {getExperienceIcon(item.iconName)}
                  </div>

                  {/* Role Type */}
                  <span
                    className={`font-mono text-xs uppercase tracking-wider ${
                      isLeadership ? 'text-[#c0c1ff]' : 'text-[#c7c4d7]'
                    }`}
                  >
                    {item.roleType}
                  </span>

                  {/* Title */}
                  <h3 className="font-sans text-lg font-semibold text-[#dfe2ef] mt-1 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#c7c4d7] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
