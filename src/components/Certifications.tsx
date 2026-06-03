import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, ExternalLink, Download } from 'lucide-react';
import { CERTIFICATIONS } from '../data';

export default function Certifications() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    // Instantly try opening the local file URI in a new tab
    window.open(url, '_blank');
  };

  return (
    <section 
      id="certifications" 
      className="py-24 px-6 bg-transparent text-neutral-950 dark:text-neutral-100 transition-colors relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header content section */}
        <div className="flex flex-col mb-16 space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0A84FF] font-semibold">
            04 / Credentials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Industry Certifications
          </h2>
          <p className="text-neutral-400 dark:text-neutral-500 text-xs md:text-sm max-w-sm mt-1 font-sans">
            Verified standards proving deep conceptual understanding in advanced technologies.
          </p>
          <div className="h-[2px] w-12 bg-neutral-200 dark:bg-neutral-800 rounded mt-4" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="certifications-grid">
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              id={`certification-card-${cert.id}`}
              className="group relative flex flex-col glass-card-light dark:glass-card-dark rounded-2xl overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Decorative side color strip */}
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                cert.issuer === 'Google Cloud' ? 'bg-[#0A84FF]' : 'bg-[#30D158]'
              }`} />

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Organization Logo Tag & Verification Pillar */}
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-neutral-400 dark:text-neutral-500">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center space-x-1 font-mono text-[10px] text-[#30D158] font-bold">
                      <CheckCircle size={11} /> <span>Verified Authority</span>
                    </span>
                  </div>

                  {/* Program Title name */}
                  <a
                    href={cert.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleLinkClick(e, cert.downloadUrl)}
                    className="block group/title mt-4 cursor-pointer"
                    title="Click to view local certificate file"
                  >
                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover/title:text-[#0A84FF] transition-colors">
                      {cert.title}
                    </h3>
                  </a>

                  {/* Certificate graphic panel preview */}
                  <a
                    href={cert.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleLinkClick(e, cert.downloadUrl)}
                    className="block group/panel my-6 cursor-pointer"
                    title="Click to view local certificate file"
                  >
                    <div className="p-5 rounded-xl bg-neutral-200/20 dark:bg-black/25 border border-white/25 dark:border-white/5 flex items-center justify-between hover:border-[#0A84FF]/40 dark:hover:border-[#0A84FF]/40 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-white dark:bg-[#2C2C2E] rounded-xl shadow-sm text-neutral-700 dark:text-neutral-200 group-hover/panel:scale-105 transition-transform">
                          <Award size={22} className={cert.issuer === 'Google Cloud' ? 'text-[#0A84FF]' : 'text-[#30D158]'} />
                        </div>
                        <div className="space-y-0.5">
                          <p className="font-sans font-semibold text-xs text-neutral-800 dark:text-neutral-200 group-hover/panel:text-[#0A84FF] transition-colors">
                            {cert.title}
                          </p>
                          <p className="font-mono text-[10px] text-neutral-400">
                            Credential {cert.credentialId}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Foot indicators and download/validation controls */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-900/60 mt-4 h-11">
                  <span className="font-mono text-xs text-neutral-400">
                    Granted {cert.date}
                  </span>

                  <div className="flex items-center space-x-2">
                    <a
                      id={`cert-download-btn-${cert.id}`}
                      href={cert.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkClick(e, cert.downloadUrl)}
                      className="p-2 bg-neutral-50 dark:bg-[#1C1C1E] rounded-full text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:text-[#0A84FF] dark:hover:text-white transition-all cursor-pointer"
                      title="Open Certificate File"
                    >
                      <Download size={13} />
                    </a>
                    <a
                      id={`cert-verify-link-${cert.id}`}
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkClick(e, cert.verificationUrl)}
                      className="flex items-center space-x-1.5 px-3.5 py-1.5 font-mono text-[11px] font-bold tracking-tight rounded-full bg-[#0A84FF] text-white hover:bg-[#0070E3] shadow-sm transition-all cursor-pointer"
                    >
                      <span>Verify Code</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
