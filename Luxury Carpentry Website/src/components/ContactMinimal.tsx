import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactMinimal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative w-full max-w-full py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', padding: '4rem', borderRadius: '8px' }}>
          {/* Left Side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pr-12"
          >
            <h2 className="mb-6 text-white leading-tight ml-12" style={{ marginLeft: '120px' }}>
              Let&apos;s Talk About Your Project
            </h2>
            <p className="text-white/70 text-lg leading-relaxed" style={{ marginLeft: '120px' }}>
              Tell us a little about your project and we will connect you with the right contact.
            </p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name - Full Width */}
              <div>
                <label htmlFor="name" className="block mb-3 text-xs tracking-[0.15em] text-white/60">
                  NAME*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/20 px-4 py-3 focus:outline-none focus:border-[#c9a050] transition-colors duration-300 text-white placeholder:text-white/40"
                />
              </div>

              {/* Phone and Email - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className="block mb-3 text-xs tracking-[0.15em] text-white/60">
                    PHONE NUMBER*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-white/20 px-4 py-3 focus:outline-none focus:border-[#c9a050] transition-colors duration-300 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-3 text-xs tracking-[0.15em] text-white/60">
                    EMAIL ADDRESS*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-white/20 px-4 py-3 focus:outline-none focus:border-[#c9a050] transition-colors duration-300 text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              {/* Message - Full Width */}
              <div>
                <label htmlFor="message" className="block mb-3 text-xs tracking-[0.15em] text-white/60">
                  LEAVE US A MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-black/30 border border-white/20 px-4 py-3 focus:outline-none focus:border-[#c9a050] transition-colors duration-300 resize-none text-white placeholder:text-white/40"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 border border-white/30 px-8 py-3 text-white hover:bg-[#c9a050] hover:border-[#c9a050] hover:text-white transition-all duration-300 text-sm tracking-[0.15em]"
                >
                  {isSubmitted ? 'MESSAGE SENT' : 'SUBMIT MESSAGE'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}