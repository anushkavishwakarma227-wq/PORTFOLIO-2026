import React, { useState } from 'react';
import { Mail, Linkedin, Terminal, ArrowUpRight, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [showDirectForm, setShowDirectForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instantaneous delivery & prepare mailto fallback
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
    }, 800);
  };

  return (
    <section id="contact" className="w-full py-24 bg-[#0f131c] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-10 relative">
        {/* Centered Glass Container */}
        <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-2xl bg-[#181b25]/70 border border-[#464554]/40 backdrop-blur shadow-2xl relative overflow-hidden">
          {/* Ambient Lighting Accents */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#8083ff]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#7bd0ff]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Tag */}
          <div className="inline-flex items-center gap-2 text-[#c0c1ff] font-mono text-xs uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#c0c1ff]" />
            <span>Get in Touch</span>
          </div>

          {/* Heading */}
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-[#dfe2ef] tracking-tight mb-4 leading-tight">
            Let’s Connect
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#c7c4d7] mb-10 max-w-xl mx-auto leading-relaxed">
            Open to connecting around technology, AI & Data Science, projects, robotics, innovation, and collaborative learning.
          </p>

          {/* Direct Action Link Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email Button */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#c0c1ff] text-[#0d0096] font-mono text-xs font-semibold hover:bg-white hover:text-[#0a0e17] transition-all duration-300 ease-out shadow-lg shadow-[#c0c1ff]/20 hover:-translate-y-0.5 cursor-pointer group"
              id="contact-email-btn"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            {/* LinkedIn Link */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#1c1f29] border border-[#464554]/60 text-[#dfe2ef] font-mono text-xs hover:bg-[#262a34] hover:border-[#c0c1ff]/50 transition-all duration-300 ease-out hover:-translate-y-0.5 cursor-pointer group"
              id="contact-linkedin-btn"
            >
              <Linkedin className="w-4 h-4 text-[#c0c1ff]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#908fa0] group-hover:text-[#dfe2ef] transition-colors" />
            </a>

            {/* GitHub Link */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#1c1f29] border border-[#464554]/60 text-[#dfe2ef] font-mono text-xs hover:bg-[#262a34] hover:border-[#c0c1ff]/50 transition-all duration-300 ease-out hover:-translate-y-0.5 cursor-pointer group"
              id="contact-github-btn"
            >
              <Terminal className="w-4 h-4 text-[#c0c1ff]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#908fa0] group-hover:text-[#dfe2ef] transition-colors" />
            </a>
          </div>

          {/* Quick Note Toggle & Email Copy Button */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c1f29] border border-[#464554]/40 text-[#c7c4d7] hover:text-[#dfe2ef] hover:border-[#c0c1ff]/40 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#4edea3]" /> : <Copy className="w-3.5 h-3.5 text-[#7bd0ff]" />}
              <span>{copied ? 'Email Copied!' : PERSONAL_INFO.email}</span>
            </button>

            <button
              onClick={() => setShowDirectForm(!showDirectForm)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c1f29] border border-[#464554]/40 text-[#c0c1ff] hover:bg-[#262a34] transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{showDirectForm ? 'Hide Quick Message Form' : 'Send Quick Note Directly'}</span>
            </button>
          </div>

          {/* In-App Direct Message Form */}
          {showDirectForm && (
            <form
              onSubmit={handleSubmit}
              className="mt-8 text-left bg-[#0a0e17] p-6 rounded-xl border border-[#464554]/50 shadow-inner space-y-4 animate-in fade-in duration-200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] text-[#c7c4d7] mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2 rounded-lg bg-[#181b25] border border-[#464554]/60 text-sm text-[#dfe2ef] focus:outline-none focus:border-[#c0c1ff] transition-colors font-mono"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] text-[#c7c4d7] mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full px-3.5 py-2 rounded-lg bg-[#181b25] border border-[#464554]/60 text-sm text-[#dfe2ef] focus:outline-none focus:border-[#c0c1ff] transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] text-[#c7c4d7] mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Collaboration / Project / Question"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#181b25] border border-[#464554]/60 text-sm text-[#dfe2ef] focus:outline-none focus:border-[#c0c1ff] transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-[#c7c4d7] mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note or inquiry here..."
                  className="w-full px-3.5 py-2 rounded-lg bg-[#181b25] border border-[#464554]/60 text-sm text-[#dfe2ef] focus:outline-none focus:border-[#c0c1ff] transition-colors font-sans resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-[#908fa0]">
                  Direct delivery to Anushka's inbox
                </span>
                <button
                  type="submit"
                  disabled={submitted}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#c0c1ff] text-[#0d0096] font-mono text-xs font-semibold hover:bg-white transition-colors cursor-pointer disabled:opacity-50"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0d0096]" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Location Stamp */}
          <div className="mt-14 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1f29] border border-[#464554]/40 font-mono text-xs text-[#c7c4d7]">
            <span className="w-2 h-2 rounded-full bg-[#4edea3]" />
            <span>BENGALURU, KARNATAKA · REVA UNIVERSITY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
