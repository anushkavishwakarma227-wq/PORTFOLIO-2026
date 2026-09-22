import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onOpenContact }) => {
  return (
    <section
      id="hero"
      className="w-full relative overflow-hidden py-16 md:py-24 border-b border-[#464554]/30"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-10 relative">
        {/* Minimalist Technical Corner Crosshair Accent */}
        <div className="absolute -top-6 right-6 lg:right-10 hidden md:flex items-center gap-2 font-mono text-[11px] text-[#908fa0]/60 select-none tracking-wider">
          <span className="text-[#c0c1ff]">+</span>
          <span>LAT 13.1147° N</span>
          <span>·</span>
          <span>LON 77.6346° E</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Portfolio Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262a34] text-[#7bd0ff] font-mono text-xs border border-[#464554]/40 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
              <span>{PERSONAL_INFO.badge}</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] tracking-tight text-[#dfe2ef] mb-3 leading-[1.05]">
              ANUSHKA
              <br />
              <span className="text-[#c0c1ff]">VISHWAKARMA</span>
            </h1>

            {/* Role Bracket */}
            <p className="text-xl sm:text-2xl text-[#7bd0ff] mb-4 font-medium tracking-tight flex items-center gap-2">
              <span className="text-[#464554]">[</span>
              <span>{PERSONAL_INFO.subtitle}</span>
              <span className="text-[#464554]">]</span>
            </p>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-[#c7c4d7] max-w-xl mb-8 leading-relaxed font-normal">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#c0c1ff] text-[#0d0096] font-mono text-sm font-semibold hover:bg-white hover:text-[#0a0e17] transition-all duration-300 ease-out shadow-lg shadow-[#c0c1ff]/20 hover:-translate-y-0.5 cursor-pointer group"
                id="hero-view-projects-btn"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#181b25] text-[#dfe2ef] font-mono text-sm border border-[#464554]/60 hover:bg-[#1c1f29] hover:border-[#c0c1ff]/50 transition-all duration-300 ease-out hover:-translate-y-0.5 cursor-pointer group"
                id="hero-contact-btn"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-[#c0c1ff] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Profile Photo Card Column */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[340px] rounded-2xl border border-[#464554]/50 bg-gradient-to-b from-[#1c1f29] to-[#0a0e17] relative overflow-hidden shadow-2xl p-3.5 group hover:border-[#c0c1ff]/40 transition-colors duration-300">
              {/* Image Frame */}
              <div className="w-full h-[400px] sm:h-[410px] rounded-xl overflow-hidden relative bg-[#0a0e17]">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt="Anushka Vishwakarma"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Bottom Technical Frame Label */}
              <div className="mt-3 px-3 py-2 rounded-lg bg-[#0a0e17]/90 backdrop-blur border border-[#464554]/30 flex items-center justify-between font-mono text-xs">
                <span className="text-[11px] text-[#7bd0ff] flex items-center gap-1.5 tracking-tight truncate mr-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
                  <span className="truncate">ANUSHKA VISHWAKARMA // AI & DATA SCIENCE</span>
                </span>
                <span className="text-[11px] text-[#c0c1ff] font-semibold flex-shrink-0">
                  {PERSONAL_INFO.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
