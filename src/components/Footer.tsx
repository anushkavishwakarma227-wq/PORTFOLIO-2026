import React from 'react';
import { Linkedin, Terminal, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0e17] border-t border-[#464554]/30 py-10">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Name and University Info */}
        <div className="flex flex-col gap-1">
          <span className="font-sans text-lg font-semibold text-[#dfe2ef]">
            Anushka Vishwakarma
          </span>
          <span className="text-xs sm:text-sm text-[#c7c4d7]">
            B.Tech Artificial Intelligence &amp; Data Science · REVA University
          </span>
        </div>

        {/* Social Links and Back to Top */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors flex items-center gap-1.5"
            id="footer-linkedin-link"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors flex items-center gap-1.5"
            id="footer-github-link"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="font-mono text-xs text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors flex items-center gap-1.5"
            id="footer-email-link"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-[#181b25] border border-[#464554]/40 flex items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff] hover:border-[#c0c1ff]/50 transition-all cursor-pointer ml-2"
            title="Scroll to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
