import React, { useState, useEffect } from 'react';
import { X, Mail, Send, CheckCircle2, Copy, Check, Linkedin, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickContactModal: React.FC<QuickContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e17]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#181b25] border border-[#464554]/60 rounded-2xl shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#464554]/30 bg-[#1c1f29]">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#c0c1ff]" />
            <h3 className="font-sans font-semibold text-base text-[#dfe2ef]">
              Get in Touch
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#262a34] border border-[#464554]/50 flex items-center justify-center text-[#dfe2ef] hover:text-white hover:border-[#c0c1ff] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-[#c7c4d7]">
            Send a message directly or connect across my technical profiles:
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="flex-1 py-2 px-3 rounded-lg bg-[#0a0e17] border border-[#464554]/50 text-xs font-mono text-[#dfe2ef] hover:border-[#c0c1ff]/50 flex items-center justify-center gap-2 transition-colors cursor-pointer truncate"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#4edea3]" /> : <Copy className="w-3.5 h-3.5 text-[#7bd0ff]" />}
              <span className="truncate">{copied ? 'Copied to Clipboard' : PERSONAL_INFO.email}</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
            <div>
              <label className="block font-mono text-[10px] text-[#c7c4d7] mb-1 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-lg bg-[#0a0e17] border border-[#464554]/60 text-xs text-[#dfe2ef] focus:outline-none focus:border-[#c0c1ff] font-mono"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] text-[#c7c4d7] mb-1 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="w-full px-3 py-2 rounded-lg bg-[#0a0e17] border border-[#464554]/60 text-xs text-[#dfe2ef] focus:outline-none focus:border-[#c0c1ff] font-mono"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] text-[#c7c4d7] mb-1 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project inquiry / Opportunity"
                className="w-full px-3 py-2 rounded-lg bg-[#0a0e17] border border-[#464554]/60 text-xs text-[#dfe2ef] focus:outline-none focus:border-[#c0c1ff] font-mono"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] text-[#c7c4d7] mb-1 uppercase tracking-wider">
                Message
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we collaborate?"
                className="w-full px-3 py-2 rounded-lg bg-[#0a0e17] border border-[#464554]/60 text-xs text-[#dfe2ef] focus:outline-none focus:border-[#c0c1ff] font-sans resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#908fa0]">
                REVA University · Bengaluru
              </span>
              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c0c1ff] text-[#0d0096] font-mono text-xs font-semibold hover:bg-white transition-colors cursor-pointer disabled:opacity-50"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0d0096]" />
                    <span>Dispatched!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
