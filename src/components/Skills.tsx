import React, { useState } from 'react';
import {
  Brain,
  BarChart2,
  Terminal,
  Code2,
  Database,
  Globe,
  Radio,
  Bot,
  Cpu,
  CircuitBoard,
  GitBranch,
  ShieldCheck,
  Check
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai' | 'hardware' | 'software' | 'tools'>('all');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const getSkillIcon = (iconName: string, category: string) => {
    const props = { className: 'w-5 h-5 transition-transform duration-200 group-hover:scale-110' };
    
    // Icon colors matching the alternating purple/cyan/emerald theme in screenshot
    let colorClass = 'text-[#c0c1ff]';
    if (category === 'ai' && iconName === 'BarChart2') colorClass = 'text-[#7bd0ff]';
    else if (iconName === 'Terminal' || iconName === 'Globe' || iconName === 'Cpu' || iconName === 'ShieldCheck') colorClass = 'text-[#4edea3]';
    else if (iconName === 'Database' || iconName === 'Bot' || iconName === 'GitBranch') colorClass = 'text-[#7bd0ff]';
    else colorClass = 'text-[#c0c1ff]';

    switch (iconName) {
      case 'Brain':
        return <Brain {...props} className={`${props.className} ${colorClass}`} />;
      case 'BarChart2':
        return <BarChart2 {...props} className={`${props.className} ${colorClass}`} />;
      case 'Terminal':
        return <Terminal {...props} className={`${props.className} ${colorClass}`} />;
      case 'Code2':
        return <Code2 {...props} className={`${props.className} ${colorClass}`} />;
      case 'Database':
        return <Database {...props} className={`${props.className} ${colorClass}`} />;
      case 'Globe':
        return <Globe {...props} className={`${props.className} ${colorClass}`} />;
      case 'Radio':
        return <Radio {...props} className={`${props.className} ${colorClass}`} />;
      case 'Bot':
        return <Bot {...props} className={`${props.className} ${colorClass}`} />;
      case 'Cpu':
        return <Cpu {...props} className={`${props.className} ${colorClass}`} />;
      case 'CircuitBoard':
        return <CircuitBoard {...props} className={`${props.className} ${colorClass}`} />;
      case 'GitBranch':
        return <GitBranch {...props} className={`${props.className} ${colorClass}`} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} className={`${props.className} ${colorClass}`} />;
      default:
        return <Code2 {...props} className={`${props.className} ${colorClass}`} />;
    }
  };

  const filteredSkills = selectedFilter === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedFilter);

  return (
    <section id="skills" className="w-full py-20 border-b border-[#464554]/30 bg-[#0f131c]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#c0c1ff] font-mono text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c0c1ff]" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#dfe2ef] tracking-tight flex items-center gap-3">
              Skills & Interests <span className="font-mono text-[#908fa0]/40 text-sm font-normal">/ 02</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-[#c7c4d7] flex items-center gap-1.5 tracking-wider">
            <span className="text-[#c0c1ff] font-bold">+</span> CORE COMPETENCIES · HARDWARE & SOFTWARE
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { key: 'all', label: 'All Core (12)' },
            { key: 'ai', label: 'AI & Data Science' },
            { key: 'hardware', label: 'Hardware & Robotics' },
            { key: 'software', label: 'Programming & Web' },
            { key: 'tools', label: 'Tools & Security' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedFilter(tab.key as any)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 cursor-pointer ${
                selectedFilter === tab.key
                  ? 'bg-[#c0c1ff] text-[#0a0e17] font-semibold shadow-md shadow-[#c0c1ff]/10'
                  : 'bg-[#181b25] text-[#c7c4d7] hover:text-[#dfe2ef] hover:bg-[#1c1f29] border border-[#464554]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 12 Skills Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const isSelected = activeSkill?.id === skill.id;
            return (
              <div
                key={skill.id}
                onClick={() => setActiveSkill(isSelected ? null : skill)}
                className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg cursor-pointer ${
                  isSelected
                    ? 'bg-[#1c1f29] border-2 border-[#c0c1ff] shadow-md shadow-[#c0c1ff]/15'
                    : 'bg-[#181b25] border border-[#464554]/40 hover:border-[#c0c1ff]/60 hover:bg-[#1c1f29]'
                }`}
                title={`Click for details about ${skill.name}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex-shrink-0">
                    {getSkillIcon(skill.iconName, skill.category)}
                  </div>
                  <span className="font-sans text-sm md:text-[15px] text-[#dfe2ef] font-medium truncate group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#7bd0ff]/70 group-hover:text-[#7bd0ff] transition-colors ml-2 flex-shrink-0">
                  {skill.index}
                </span>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Quick Detail Callout */}
        {activeSkill && (
          <div className="mt-6 p-4 rounded-xl bg-[#1c1f29] border border-[#c0c1ff]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2 duration-200 shadow-xl">
            <div className="flex items-start sm:items-center gap-3">
              <span className="font-mono text-xs text-[#7bd0ff] px-2 py-0.5 rounded bg-[#181b25] border border-[#464554]/40">
                {activeSkill.index}
              </span>
              <div>
                <h4 className="font-sans text-base font-semibold text-[#dfe2ef]">
                  {activeSkill.name}
                </h4>
                <p className="text-sm text-[#c7c4d7]">
                  {activeSkill.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveSkill(null)}
              className="text-xs font-mono text-[#c0c1ff] hover:text-white px-3 py-1 rounded bg-[#262a34] border border-[#464554]/50 cursor-pointer self-end sm:self-auto"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
