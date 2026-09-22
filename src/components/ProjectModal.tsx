import React, { useEffect } from 'react';
import { X, ArrowUpRight, Cpu, Layers, GitBranch, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isEmerald = project.statusColor === 'tertiary';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a0e17]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl my-8 bg-[#181b25] border border-[#464554]/60 rounded-2xl shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
        id={`modal-${project.id}`}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#464554]/30 bg-[#1c1f29]">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[#c0c1ff] font-semibold tracking-wider text-sm">
              {project.number} //
            </span>
            <span className="text-[#7bd0ff] uppercase tracking-wider">
              {project.category}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10px] ${
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

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#262a34] border border-[#464554]/50 flex items-center justify-center text-[#dfe2ef] hover:text-white hover:border-[#c0c1ff] transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Project Title & Short Summary */}
          <div>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold text-[#dfe2ef] mb-3">
              {project.title}
            </h3>
            <p className="text-base text-[#c7c4d7] leading-relaxed">
              {project.fullDetails?.overview || project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          {project.fullDetails?.keyHighlights && (
            <div className="p-4 rounded-xl bg-[#0f131c] border border-[#464554]/40">
              <h4 className="font-mono text-xs text-[#c0c1ff] uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4edea3]" />
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2.5">
                {project.fullDetails.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#dfe2ef]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff] mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Hardware & Software Stacks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.fullDetails?.hardwareStack && (
              <div className="p-4 rounded-xl bg-[#1c1f29] border border-[#464554]/40">
                <h4 className="font-mono text-xs text-[#7bd0ff] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#7bd0ff]" />
                  Hardware Architecture
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.fullDetails.hardwareStack.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#0a0e17] border border-[#464554]/30 text-xs font-mono text-[#dfe2ef]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.fullDetails?.softwareStack && (
              <div className="p-4 rounded-xl bg-[#1c1f29] border border-[#464554]/40">
                <h4 className="font-mono text-xs text-[#4edea3] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#4edea3]" />
                  Software / Firmware Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.fullDetails.softwareStack.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#0a0e17] border border-[#464554]/30 text-xs font-mono text-[#dfe2ef]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Execution Pipeline Steps */}
          {project.fullDetails?.architectureFlow && (
            <div className="p-4 rounded-xl bg-[#0f131c] border border-[#464554]/40">
              <h4 className="font-mono text-xs text-[#c0c1ff] uppercase tracking-wider mb-3">
                System Workflow Pipeline
              </h4>
              <div className="space-y-2">
                {project.fullDetails.architectureFlow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 font-mono text-xs">
                    <span className="text-[#7bd0ff] font-semibold">0{idx + 1}.</span>
                    <span className="text-[#c7c4d7] leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#464554]/20">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#1c1f29] border border-[#464554]/40 text-[#dfe2ef]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 border-t border-[#464554]/30 bg-[#1c1f29] flex items-center justify-between">
          <a
            href={project.fullDetails?.githubUrl || 'https://github.com/anushkavishwakarma227-wq'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#7bd0ff] hover:text-[#c0c1ff] transition-colors"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>View Source on GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#262a34] text-[#dfe2ef] hover:bg-[#31353f] font-mono text-xs border border-[#464554]/60 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
