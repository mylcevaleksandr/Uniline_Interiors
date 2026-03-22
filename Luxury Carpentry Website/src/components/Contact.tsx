import { useState } from 'react';

export function Contact() {
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
    <section id="contact" className="relative w-full max-w-full py-32 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent"></div>
      
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#c9a050]"></div>
            <h4 className="text-[#c9a050]">Let&apos;s Connect</h4>
            <div className="w-12 h-px bg-[#c9a050]"></div>
          </div>
          <h2 className="mb-8 text-white">Begin Your Project</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Experience the professionalism and outstanding workmanship that defines Uniline Carpentry
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 w-full">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-12 min-w-0">
            <div>
              <h4 className="text-[#c9a050] mb-6">Studio</h4>
              <p className="text-white/80 leading-relaxed">
                123 Craftsman Lane<br />
                Portland, Oregon 97201<br />
                United States
              </p>
            </div>

            <div>
              <h4 className="text-[#c9a050] mb-6">Inquiries</h4>
              <div className="space-y-3 text-white/80">
                <div>
                  <a href="tel:+15551234567" className="hover:text-[#c9a050] transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <a href="mailto:info@artisancarpentry.com" className="hover:text-[#c9a050] transition-colors">
                    info@unilinecarpentry.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[#c9a050] mb-6">Hours</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between max-w-sm">
                  <span>Monday — Friday</span>
                  <span className="text-white/60">8:00 — 18:00</span>
                </div>
                <div className="flex justify-between max-w-sm">
                  <span>Saturday</span>
                  <span className="text-white/60">10:00 — 16:00</span>
                </div>
                <div className="flex justify-between max-w-sm">
                  <span>Sunday</span>
                  <span className="text-white/60">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 min-w-0">
            <form onSubmit={handleSubmit} className="space-y-8 w-full">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block mb-3 text-sm tracking-wider text-white/60">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-[#c9a050] transition-colors text-white placeholder-white/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-3 text-sm tracking-wider text-white/60">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-[#c9a050] transition-colors text-white placeholder-white/30"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block mb-3 text-sm tracking-wider text-white/60">
                  PHONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-[#c9a050] transition-colors text-white placeholder-white/30"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-3 text-sm tracking-wider text-white/60">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-[#c9a050] transition-colors resize-none text-white placeholder-white/30"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="relative group overflow-hidden"
                >
                  <div className="relative z-10 px-12 py-5 border border-[#c9a050] text-[#c9a050] transition-colors duration-300 group-hover:text-[#0a0a0a]">
                    {isSubmitted ? 'MESSAGE SENT' : 'SEND MESSAGE'}
                  </div>
                  <div className="absolute inset-0 bg-[#c9a050] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent"></div>
    </section>
  );
}