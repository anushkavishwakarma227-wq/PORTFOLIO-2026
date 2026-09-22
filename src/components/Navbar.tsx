import React, { useState } from 'react';
import { Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0e17]/85 backdrop-blur-md border-b border-[#464554]/30">
      <div className="h-20 max-w-[1320px] mx-auto px-6 md:px-12 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand / Monogram */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="flex items-center gap-3.5 min-w-0 group"
          id="nav-brand-logo"
        >
          <img
            src={PERSONAL_INFO.logoUrl}
            alt="AV Monogram Logo"
            className="h-9 w-9 rounded-lg object-contain flex-shrink-0 border border-[#464554]/40 group-hover:border-[#c0c1ff]/60 transition-colors"
          />
          <div className="flex flex-col truncate">
            <span className="font-semibold text-sm md:text-base text-[#dfe2ef] tracking-tight truncate group-hover:text-[#c0c1ff] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[11px] text-[#7bd0ff] uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff]" />
              {PERSONAL_INFO.subtitle}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-[#181b25]/80 border border-[#464554]/30 shadow-inner"
          id="desktop-navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#c0c1ff] bg-[#1c1f29] font-semibold shadow-sm border border-[#c0c1ff]/20'
                    : 'text-[#c7c4d7] hover:text-[#dfe2ef] hover:bg-[#1c1f29]/60'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3.5 flex-shrink-0">
          {/* Availability Beacon */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#262a34]/90 text-[#7bd0ff] font-mono text-xs border border-[#464554]/40 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]" />
            </span>
            <span className="tracking-wide">Available for Projects</span>
          </div>

          {/* Quick Message / Email Icon Button */}
          <button
            onClick={onOpenContactModal}
            className="w-9 h-9 rounded-full bg-[#262a34] border border-[#464554]/50 flex items-center justify-center flex-shrink-0 shadow-sm text-[#c0c1ff] hover:border-[#c0c1ff] hover:bg-[#1c1f29] hover:text-white transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            title="Get in touch"
            id="nav-email-trigger-btn"
          >
            <Mail className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg bg-[#262a34] border border-[#464554]/50 flex items-center justify-center text-[#dfe2ef] hover:text-[#c0c1ff] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-t border-[#464554]/30 bg-[#0a0e17]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-1.5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
          id="mobile-navigation-drawer"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg font-mono text-xs transition-colors flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'text-[#c0c1ff] bg-[#1c1f29] font-medium'
                    : 'text-[#c7c4d7] hover:text-[#c0c1ff] hover:bg-[#1c1f29]/70'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff]" />}
              </button>
            );
          })}
          <div className="pt-2 mt-2 border-t border-[#464554]/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#c0c1ff] text-[#0a0e17] font-mono text-xs font-semibold hover:bg-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
