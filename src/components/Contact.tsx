import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, User, MessageSquare, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

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
      tempErrors.email = 'Please provide a valid standard email layout.';
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

    // Simulate clean premium response cycle
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Store submission in client storage for offline trace
      const mockRecord = { name, email, message, submittedAt: new Date().toISOString() };
      localStorage.setItem('hasya_portfolio_contact', JSON.stringify(mockRecord));

      // Clear fields
      setName('');
      setEmail('');
      setMessage('');
    }, 1600);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6 bg-transparent text-neutral-950 dark:text-neutral-100 transition-colors relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Descriptive info (Lg: 5/12 span) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0A84FF] font-semibold">
                06 / Dialogue
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Get In Touch
              </h2>
              <div className="h-[2px] w-12 bg-neutral-200 dark:bg-neutral-800 rounded mt-3" />
            </div>

            <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed font-sans font-light">
              We can build something remarkable together. Submit a query containing brief specs about your pipeline or scheduling paths. I respond quickly.
            </p>

            {/* Quick action blocks for direct mailing */}
            <div className="space-y-4 pt-6">
              <a
                id="contact-mail-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-4 p-5 rounded-2xl glass-card-light dark:glass-card-dark hover:border-[#0A84FF] dark:hover:border-[#0A84FF] transition-all cursor-pointer group"
              >
                <div className="p-3 bg-[#0A84FF]/10 dark:bg-[#0A84FF]/5 text-[#0A84FF] rounded-xl group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="flex-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">Direct Email Address</span>
                  <p className="text-xs md:text-sm font-semibold text-neutral-800 dark:text-neutral-200">{PERSONAL_INFO.email}</p>
                </div>
                <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-[#0A84FF] transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact interactive Form (Lg: 7/12 span) */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 glass-container-light dark:glass-container-dark rounded-3xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  // Initial submission state form
                  <motion.form
                    id="contact-submission-form"
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                  >
                    {/* Integrated Full Identity Name field */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 font-mono uppercase tracking-wider">
                        Full Identity Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
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
                          className={`w-full bg-neutral-50 dark:bg-[#1C1C1E]/50 border rounded-2xl py-3.5 pl-11 pr-4 text-xs font-sans focus:outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-500 ${
                            errors.name 
                              ? 'border-[#FF453A] focus:ring-1 focus:ring-[#FF453A]' 
                              : 'border-neutral-200 dark:border-neutral-800/80 focus:border-[#0A84FF] focus:ring-1 focus:ring-[#0A84FF]/20'
                          }`}
                          placeholder="What should I call you?"
                        />
                      </div>
                      {errors.name && (
                        <div className="flex items-center space-x-1.5 text-[10px] text-[#FF453A] font-semibold font-mono pl-1">
                          <AlertCircle size={11} /> <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Integrated Secure email field */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 font-mono uppercase tracking-wider">
                        Secure Email Channel
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
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
                          className={`w-full bg-neutral-50 dark:bg-[#1C1C1E]/50 border rounded-2xl py-3.5 pl-11 pr-4 text-xs font-sans focus:outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-500 ${
                            errors.email 
                              ? 'border-[#FF453A] focus:ring-1 focus:ring-[#FF453A]' 
                              : 'border-neutral-200 dark:border-neutral-800/80 focus:border-[#0A84FF] focus:ring-1 focus:ring-[#0A84FF]/20'
                          }`}
                          placeholder="provide.address@domain.com"
                        />
                      </div>
                      {errors.email && (
                        <div className="flex items-center space-x-1.5 text-[10px] text-[#FF453A] font-semibold font-mono pl-1">
                          <AlertCircle size={11} /> <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Project/Idea Brief message box */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 font-mono uppercase tracking-wider">
                        Brief Project details
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-4 text-neutral-400">
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
                          className={`w-full bg-neutral-50 dark:bg-[#1C1C1E]/50 border rounded-2xl py-3.5 pl-11 pr-4 text-xs font-sans focus:outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-500 resize-none ${
                            errors.message 
                              ? 'border-[#FF453A] focus:ring-1 focus:ring-[#FF453A]' 
                              : 'border-neutral-200 dark:border-neutral-800/80 focus:border-[#0A84FF] focus:ring-1 focus:ring-[#0A84FF]/20'
                          }`}
                          placeholder="Specify timeline requirements or tech specifications..."
                        />
                      </div>
                      {errors.message && (
                        <div className="flex items-center space-x-1.5 text-[10px] text-[#FF453A] font-semibold font-mono pl-1">
                          <AlertCircle size={11} /> <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button Trigger */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl bg-[#0A84FF] hover:bg-[#0070E3] disabled:bg-neutral-300 dark:disabled:bg-neutral-800 disabled:cursor-not-allowed text-white font-semibold text-xs tracking-wide shadow-md active:scale-99 transition-all cursor-pointer mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Transmitting payload...</span>
                        </>
                      ) : (
                        <>
                          <Send size={13} />
                          <span>Transmit Secure Query</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Success confirmation block with Animation
                  <motion.div
                    id="contact-success-response"
                    key="contact-success"
                    className="flex flex-col items-center text-center py-12 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="p-4 bg-[#30D158]/15 dark:bg-[#30D158]/10 text-[#30D158] rounded-full">
                      <CheckCircle2 size={44} />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display text-2xl font-black text-neutral-900 dark:text-white">
                        Transmission Successful
                      </h4>
                      <p className="text-xs md:text-sm text-neutral-400 max-w-sm font-sans">
                        Your communication query packet has been registered successfully. Hasya Patel will reply soon.
                      </p>
                    </div>

                    <button
                      id="contact-success-dismiss"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
                    >
                      Transmit another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
