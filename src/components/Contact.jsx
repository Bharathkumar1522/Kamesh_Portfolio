import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  FileDown, 
  Send, 
  CheckCircle2, 
  ArrowUpRight,
  UserCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ onCopyEmail }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Compose formatted mailto link
    const subject = encodeURIComponent(`Engineering Inquiry for V. Kamesh (${formData.roleOrCompany || 'Java Role'})`);
    const body = encodeURIComponent(
      `Hello Kamesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany/Role: ${formData.roleOrCompany}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:V. Kamesh
N:Kamesh;V.;;;
TITLE:Java Developer
TEL;TYPE=CELL:${personalInfo.phone}
EMAIL;TYPE=INTERNET:${personalInfo.email}
ADR;TYPE=HOME:;;Nagalapuram;Andhra Pradesh;517589;India
URL:${personalInfo.linkedIn}
NOTE:MCA Graduate (CGPA 8.48). Java Developer, Aegis Gateway & Blockchain Systems.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'V_Kamesh.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-24 bg-obsidian-900 relative scroll-mt-20 border-t border-champagne-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 text-xs font-mono tracking-widest uppercase mb-3">
              <span>05</span>
              <span>&bull;</span>
              <span>DIRECT COMMUNICATIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Initiate Inquiries & Hiring
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-1">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available Immediately &bull; Full-Time</span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md text-left md:text-right">
              Available immediately for full-time Java Developer, Backend Engineering, or Associate Software Engineer opportunities.
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Channels & Telemetry */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-lg bg-obsidian-900 border border-white/10 hover:border-champagne-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-400 uppercase">DIRECT EMAIL</span>
                <Mail className="w-4 h-4 text-champagne-400" />
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-white mb-4">
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onCopyEmail(personalInfo.email)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-slate-200 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5 text-champagne-400" />
                  <span>Copy Email</span>
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-mono font-medium rounded bg-champagne-500 hover:bg-champagne-400 text-obsidian-950 transition-colors"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-lg bg-obsidian-900 border border-white/10 hover:border-champagne-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-400 uppercase">PHONE / MOBILE</span>
                <Phone className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-white mb-4">
                {personalInfo.formattedPhone}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-slate-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Direct</span>
                </a>
                <a
                  href={`https://wa.me/91${personalInfo.phone}?text=Hi%20Kamesh,%20I%20reviewed%20your%20Java%20developer%20portfolio.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-mono font-medium rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Dossier & vCard Export */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.resumePath}
                download="V_Kamesh_Resume.pdf"
                className="p-4 rounded-lg bg-obsidian-900 border border-white/10 hover:border-champagne-500/40 text-left transition-all group flex flex-col justify-between"
              >
                <FileDown className="w-4 h-4 text-champagne-400 mb-2 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs font-mono font-bold text-white block">Download CV</span>
                  <span className="text-[10px] font-mono text-slate-500">PDF [221 KB]</span>
                </div>
              </a>

              <button
                onClick={handleDownloadVCard}
                className="p-4 rounded-lg bg-obsidian-900 border border-white/10 hover:border-champagne-500/40 text-left transition-all group flex flex-col justify-between"
              >
                <UserCheck className="w-4 h-4 text-champagne-400 mb-2 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs font-mono font-bold text-white block">Save Contact</span>
                  <span className="text-[10px] font-mono text-slate-500">vCard (.vcf)</span>
                </div>
              </button>
            </div>

            {/* Social Channels Strip */}
            <div className="p-4 rounded-lg bg-obsidian-900/50 border border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <a
                href={personalInfo.gitHub}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>{personalInfo.gitHubHandle}</span>
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>{personalInfo.linkedInHandle}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-obsidian-900 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Send Direct Message
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    Generates a pre-formatted message dispatch directly to Kamesh
                  </p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white">
                    Inquiry Prepared & Dispatched
                  </h4>
                  <p className="text-xs font-mono text-slate-400 max-w-sm mx-auto">
                    Your email client has been prompted. You can also contact directly at {personalInfo.email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-champagne-400 underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autocomplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 text-xs font-mono bg-obsidian-950 border border-white/10 rounded focus:outline-none focus:border-champagne-500/70 text-slate-200 placeholder-slate-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autocomplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2.5 text-xs font-mono bg-obsidian-950 border border-white/10 rounded focus:outline-none focus:border-champagne-500/70 text-slate-200 placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-opportunity" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Company / Opportunity Title
                    </label>
                    <input
                      id="contact-opportunity"
                      name="opportunity"
                      type="text"
                      value={formData.roleOrCompany}
                      onChange={(e) => setFormData({ ...formData, roleOrCompany: e.target.value })}
                      placeholder="e.g. Associate Java Developer Role at FinTech Corp"
                      className="w-full px-3.5 py-2.5 text-xs font-mono bg-obsidian-950 border border-white/10 rounded focus:outline-none focus:border-champagne-500/70 text-slate-200 placeholder-slate-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Message / Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Kamesh, we are impressed by your Aegis Gateway project and would like to discuss an opportunity..."
                      className="w-full px-3.5 py-2.5 text-xs font-mono bg-obsidian-950 border border-white/10 rounded focus:outline-none focus:border-champagne-500/70 text-slate-200 placeholder-slate-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded text-xs font-mono font-bold tracking-wider text-obsidian-950 bg-champagne-500 hover:bg-champagne-400 transition-all flex items-center justify-center gap-2 shadow-md shadow-champagne-500/10"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>TRANSMIT MESSAGE VIA EMAIL</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
