import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [inspectingProject, setInspectingProject] = useState<Project | null>(null);

  const filterTabs = [
    { key: 'all', label: 'All Projects (5)' },
    { key: 'hardware', label: 'Hardware & Embedded' },
    { key: 'mechatronics', label: 'Mechatronics' },
    { key: 'robotics', label: 'Robotics' },
    { key: 'ai', label: 'AI & Security' },
    { key: 'web', label: 'Web' },
  ];

  const filteredProjects = selectedDomain === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.domain === selectedDomain);

  return (
    <section id="projects" className="w-full py-20 border-b border-[#464554]/30 bg-[#0a0e17]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-[#c0c1ff] font-mono text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#c0c1ff]" />
            <span>Technical Work</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#dfe2ef] tracking-tight mb-2 flex items-center gap-3">
            Selected Projects <span className="font-mono text-[#908fa0]/40 text-sm font-normal">/ 03</span>
          </h2>
          <p className="text-base sm:text-lg text-[#c7c4d7]">
            A selection of hardware, software, and autonomous systems projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedDomain(tab.key)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 cursor-pointer ${
                selectedDomain === tab.key
                  ? 'bg-[#c0c1ff] text-[#0a0e17] font-semibold shadow-md shadow-[#c0c1ff]/10'
                  : 'bg-[#181b25] text-[#c7c4d7] hover:text-[#dfe2ef] hover:bg-[#1c1f29] border border-[#464554]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-6">
          {filteredProjects.map((project) => {
            const isEmerald = project.statusColor === 'tertiary';

            return (
              <div
                key={project.id}
                className="bg-[#181b25]/90 backdrop-blur rounded-xl border border-[#464554]/40 p-6 md:p-8 hover:border-[#c0c1ff]/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c0c1ff]/5 transition-all duration-300 ease-out group"
                id={`project-card-${project.id}`}
              >
                <div className="flex flex-col gap-5">
                  {/* Card Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#464554]/20 pb-4">
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-[#c0c1ff] font-semibold tracking-wider text-base">
                        {project.number} //
                      </span>
                      <span className="text-xs text-[#7bd0ff] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[11px] ${
                        isEmerald
                          ? 'bg-[#4edea3]/10 border border-[#4edea3]/30 text-[#4edea3]'
                          : 'bg-[#7bd0ff]/10 border border-[#7bd0ff]/30 text-[#7bd0ff]'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isEmerald ? 'bg-[#4edea3]' : 'bg-[#7bd0ff]'
                        }`}
                      />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  {/* Card Content & Action Button */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="max-w-3xl">
                      <h3 className="font-sans text-xl sm:text-2xl font-semibold text-[#dfe2ef] mb-2 tracking-tight group-hover:text-[#c0c1ff] transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#c7c4d7] leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Technology Chips */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => {
                          const isSpecialTag = tag === 'Hardware & Embedded' || tag === 'Artificial Intelligence';
                          return (
                            <span
                              key={idx}
                              className={`font-mono text-xs px-2.5 py-1 rounded-md border ${
                                isSpecialTag
                                  ? 'bg-[#8083ff]/20 border-[#c0c1ff]/40 text-[#c0c1ff] font-medium'
                                  : 'bg-[#1c1f29] border-[#464554]/40 text-[#dfe2ef]'
                              }`}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* View Project Button */}
                    <div className="flex-shrink-0 self-start lg:self-center">
                      <button
                        onClick={() => setInspectingProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1c1f29] border border-[#464554]/50 text-[#c0c1ff] font-mono text-xs font-semibold hover:bg-[#c0c1ff] hover:text-[#0a0e17] hover:border-[#c0c1ff] transition-all duration-200 cursor-pointer shadow-sm group/btn"
                        id={`btn-view-${project.id}`}
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Deep Inspection Modal */}
      <ProjectModal
        project={inspectingProject}
        onClose={() => setInspectingProject(null)}
      />
    </section>
  );
};
