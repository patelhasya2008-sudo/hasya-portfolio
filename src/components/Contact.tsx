import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, User, MessageSquare, Send, CheckCircle2, AlertCircle, ArrowUpRight, Sparkles, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import Magnetic from './Magnetic';
import FloatingParticles from './FloatingParticles';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = 'Full identity name is required.';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      tempErrors.email = 'Secure email channel is required.';
    } else if (!emailRegex.test(email)) {
      tempErrors.email = 'Please provide a valid standard email format.';
    }

    if (!message.trim()) {
      tempErrors.message = 'Please specify brief project parameters.';
    } else if (message.trim().length < 8) {
      tempErrors.message = 'Detailed messages must exceed 8 characters.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate clean premium response cycle with spring delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Store submission in client storage for offline tracking
      const mockRecord = { name, email, message, submittedAt: new Date().toISOString() };
      localStorage.setItem('hasya_portfolio_contact', JSON.stringify(mockRecord));

      // Clear fields
      setName('');
      setEmail('');
      setMessage('');
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6 bg-transparent text-neutral-950 dark:text-neutral-100 transition-colors relative z-10 overflow-hidden"
    >
      {/* Floating particles background inside the contact section */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <FloatingParticles />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Branding info */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="left" duration={0.8}>
              <div className="flex flex-col space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#0A84FF] font-bold flex items-center gap-1.5">
                  <Sparkles size={11} className="animate-pulse" />
                  <span>06 / Connection Portal</span>
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
                  Let's Create<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] via-purple-500 to-[#30D158]">
                    Something Remarkable
                  </span>
                </h2>
                <div className="h-[2.5px] w-14 bg-gradient-to-r from-[#0A84FF] to-[#30D158] rounded mt-3" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.15} duration={0.85}>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed font-sans font-normal max-w-md">
                Have an idea, project parameters, or scheduling queries? Fill out the portal. I monitor transmissions continuously and answer with detailed insights.
              </p>
            </ScrollReveal>

            {/* Quick stats / location info */}
            <ScrollReveal direction="left" delay={0.25} duration={0.9}>
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3 text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-mono">
                  <MapPin size={14} className="text-[#0A84FF]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-xs md:text-sm text-neutral-600 dark:text-neutral-300 font-mono">
                  <Globe size={14} className="text-[#30D158]" />
                  <span>Available for global remote cooperation</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick action blocks for direct mailing wrapped in Magnetic */}
            <ScrollReveal direction="left" delay={0.35} duration={1}>
              <div className="pt-4">
                <Magnetic range={45} strength={0.2}>
                  <a
                    id="contact-mail-link"
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center space-x-4 p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/40 dark:bg-[#121214]/40 backdrop-blur-md shadow-lg hover:border-[#0A84FF] dark:hover:border-[#0A84FF] transition-all cursor-pointer group"
                  >
                    <div className="p-3 bg-[#0A84FF]/10 dark:bg-[#0A84FF]/8 text-[#0A84FF] rounded-xl group-hover:scale-105 transition-transform">
                      <Mail size={18} />
                    </div>
                    <div className="text-left">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 block">Direct Email Connection</span>
                      <p className="text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-200">{PERSONAL_INFO.email}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-[#0A84FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform pl-1.5" />
                  </a>
                </Magnetic>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact interactive Form with Ultimate Glassmorphism card elements */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.2} duration={0.9}>
              <div className="p-7 md:p-9 rounded-[32px] border border-white/10 dark:border-white/5 bg-white/40 dark:bg-neutral-900/30 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden">
                {/* Visual glass flare effect */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none rounded-bl-[100px]" />
                
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      id="contact-submission-form"
                      key="contact-form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      {/* Full Identity Name field */}
                      <div className="space-y-2">
                        <label className="block text-[10.5px] font-bold text-neutral-500 dark:text-neutral-400 font-mono uppercase tracking-wider">
                          Full Name
                        </label>
                        <div className="relative group/input">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 group-focus-within/input:text-[#0A84FF] transition-colors">
                            <User size={15} />
                          </span>
                          <input
                            id="contact-input-name"
                            type="text"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                              if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                            }}
                            className={`w-full bg-white/50 dark:bg-[#121214]/40 border rounded-2xl py-3.5 pl-11 pr-4 text-xs font-sans focus:outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-500 ${
                              errors.name 
                                ? 'border-[#FF453A] focus:ring-1 focus:ring-[#FF453A] dark:border-[#FF453A]' 
                                : 'border-neutral-200/80 dark:border-neutral-800 focus:border-[#0A84FF] dark:focus:border-[#0A84FF] focus:ring-1 focus:ring-[#0A84FF]/20 dark:focus:ring-[#0A84FF]/10 focus:bg-white dark:focus:bg-[#121214]/60'
                            }`}
                            placeholder="e.g. Hasya Patel"
                          />
                        </div>
                        {errors.name && (
                          <motion.div 
                            initial={{ opacity: 0, y: -5 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="flex items-center space-x-1.5 text-[10.5px] text-[#FF453A] font-medium pl-1 font-mono"
                          >
                            <AlertCircle size={11} /> <span>{errors.name}</span>
                          </motion.div>
                        )}
                      </div>

                      {/* Secure email field */}
                      <div className="space-y-2">
                        <label className="block text-[10.5px] font-bold text-neutral-500 dark:text-neutral-400 font-mono uppercase tracking-wider">
                          Email Address
                        </label>
                        <div className="relative group/input">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 group-focus-within/input:text-[#0A84FF] transition-colors">
                            <Mail size={15} />
                          </span>
                          <input
                            id="contact-input-email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                            }}
                            className={`w-full bg-white/50 dark:bg-[#121214]/40 border rounded-2xl py-3.5 pl-11 pr-4 text-xs font-sans focus:outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-500 ${
                              errors.email 
                                ? 'border-[#FF453A] focus:ring-1 focus:ring-[#FF453A] dark:border-[#FF453A]' 
                                : 'border-neutral-200/80 dark:border-neutral-800 focus:border-[#0A84FF] dark:focus:border-[#0A84FF] focus:ring-1 focus:ring-[#0A84FF]/20 dark:focus:ring-[#0A84FF]/10 focus:bg-white dark:focus:bg-[#121214]/60'
                            }`}
                            placeholder="your.address@domain.com"
                          />
                        </div>
                        {errors.email && (
                          <motion.div 
                            initial={{ opacity: 0, y: -5 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="flex items-center space-x-1.5 text-[10.5px] text-[#FF453A] font-medium pl-1 font-mono"
                          >
                            <AlertCircle size={11} /> <span>{errors.email}</span>
                          </motion.div>
                        )}
                      </div>

                      {/* Project/Idea Message box */}
                      <div className="space-y-2">
                        <label className="block text-[10.5px] font-bold text-neutral-500 dark:text-neutral-400 font-mono uppercase tracking-wider">
                          Project Parameters / Thoughts
                        </label>
                        <div className="relative group/input">
                          <span className="absolute left-4 top-4 text-neutral-400 group-focus-within/input:text-[#0A84FF] transition-colors">
                            <MessageSquare size={15} />
                          </span>
                          <textarea
                            id="contact-input-message"
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                              if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                            }}
                            rows={4}
                            className={`w-full bg-white/50 dark:bg-[#121214]/40 border rounded-2xl py-3.5 pl-11 pr-4 text-xs font-sans focus:outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-500 resize-none ${
                              errors.message 
                                ? 'border-[#FF453A] focus:ring-1 focus:ring-[#FF453A] dark:border-[#FF453A]' 
                                : 'border-neutral-200/80 dark:border-neutral-800 focus:border-[#0A84FF] dark:focus:border-[#0A84FF] focus:ring-1 focus:ring-[#0A84FF]/20 dark:focus:ring-[#0A84FF]/10 focus:bg-white dark:focus:bg-[#121214]/60'
                            }`}
                            placeholder="Specify design requirements, platform details, or just say hello..."
                          />
                        </div>
                        {errors.message && (
                          <motion.div 
                            initial={{ opacity: 0, y: -5 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="flex items-center space-x-1.5 text-[10.5px] text-[#FF453A] font-medium pl-1 font-mono"
                          >
                            <AlertCircle size={11} /> <span>{errors.message}</span>
                          </motion.div>
                        )}
                      </div>

                      {/* Submit Button Wrapped in Magnetic component */}
                      <div className="pt-2 w-full">
                        <Magnetic range={40} strength={0.25}>
                          <button
                            id="contact-submit-btn"
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl bg-[#0A84FF] hover:bg-[#0070E3] disabled:bg-neutral-300 dark:disabled:bg-neutral-800/80 disabled:text-neutral-500 disabled:cursor-not-allowed text-white font-bold text-xs tracking-wide shadow-md active:scale-98 transition-all cursor-pointer overflow-hidden relative group/btn"
                          >
                            {/* Shiny animation background */}
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                            
                            <AnimatePresence mode="wait">
                              {isSubmitting ? (
                                <motion.div 
                                  key="submitting" 
                                  className="flex items-center space-x-2"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                >
                                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                  </svg>
                                  <span>Transmitting Query...</span>
                                </motion.div>
                              ) : (
                                <motion.div 
                                  key="idle" 
                                  className="flex items-center space-x-2"
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                >
                                  <Send size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                  <span>Send Message</span>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </button>
                        </Magnetic>
                      </div>
                    </motion.form>
                  ) : (
                    /* Elegant Success Confirmation card with stagger animations */
                    <motion.div
                      id="contact-success-response"
                      key="contact-success"
                      className="flex flex-col items-center text-center py-10 space-y-6"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <motion.div 
                        className="p-4 bg-[#30D158]/15 dark:bg-[#30D158]/10 text-[#30D158] rounded-full relative"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                      >
                        <CheckCircle2 size={48} />
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#30D158] rounded-full border-2 border-white dark:border-[#121214] animate-ping" />
                      </motion.div>

                      <div className="space-y-2 max-w-sm">
                        <motion.h4 
                          className="font-display text-2xl font-bold text-neutral-900 dark:text-white"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                        >
                          Transmission Complete
                        </motion.h4>
                        <motion.p 
                          className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35 }}
                        >
                          Thank you for connecting! Your package was transmitted successfully. Hasya Patel will coordinate and reply shortly.
                        </motion.p>
                      </div>

                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="pt-2"
                      >
                        <Magnetic range={30} strength={0.2}>
                          <button
                            id="contact-success-dismiss"
                            onClick={() => setIsSuccess(false)}
                            className="px-6 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-800 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 hover:text-neutral-950 dark:hover:text-white transition-all cursor-pointer shadow-sm active:scale-97"
                          >
                            Send Another Message
                          </button>
                        </Magnetic>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
