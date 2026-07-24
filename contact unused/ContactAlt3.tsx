import { useState } from 'react';

export function ContactAlt3() {
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
      {/* Top Decorative Line with Center Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#c9a050] rotate-45"></div>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a050]"></div>
            <h4 className="text-[#c9a050] tracking-[0.3em]">CONTACT</h4>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a050]"></div>
          </div>
          <h2 className="mb-8 text-white">Let&apos;s Create Together</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Schedule a consultation to discuss your project and discover the Uniline difference
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-20 w-full">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-14 min-w-0">
            <div className="group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#c9a050]"></div>
                <h4 className="text-[#c9a050]">Our Studio</h4>
              </div>
              <p className="text-white/80 leading-relaxed pl-6">
                123 Craftsman Lane<br />
                Portland, Oregon 97201<br />
                United States
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#c9a050]"></div>
                <h4 className="text-[#c9a050]">Get in Touch</h4>
              </div>
              <div className="space-y-4 text-white/80 pl-6">
                <div>
                  <div className="text-white/50 text-sm mb-1 tracking-wider">PHONE</div>
                  <a href="tel:+15551234567" className="hover:text-[#c9a050] transition-colors duration-300">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1 tracking-wider">EMAIL</div>
                  <a href="mailto:info@unilinecarpentry.com" className="hover:text-[#c9a050] transition-colors duration-300">
                    info@unilinecarpentry.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#c9a050]"></div>
                <h4 className="text-[#c9a050]">Business Hours</h4>
              </div>
              <div className="space-y-4 text-white/80 pl-6">
                <div className="flex justify-between items-center max-w-xs border-b border-white/10 pb-3">
                  <span>Monday — Friday</span>
                  <span className="text-white/60 text-sm">8:00 — 18:00</span>
                </div>
                <div className="flex justify-between items-center max-w-xs border-b border-white/10 pb-3">
                  <span>Saturday</span>
                  <span className="text-white/60 text-sm">10:00 — 16:00</span>
                </div>
                <div className="flex justify-between items-center max-w-xs border-b border-white/10 pb-3">
                  <span>Sunday</span>
                  <span className="text-white/60 text-sm">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 min-w-0">
            <form onSubmit={handleSubmit} className="space-y-8 w-full">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block mb-3 text-sm tracking-[0.2em] text-white/60">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-white/20 pb-4 focus:outline-none focus:border-[#c9a050] transition-all duration-300 text-white placeholder-white/30"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-3 text-sm tracking-[0.2em] text-white/60">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-white/20 pb-4 focus:outline-none focus:border-[#c9a050] transition-all duration-300 text-white placeholder-white/30"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block mb-3 text-sm tracking-[0.2em] text-white/60">
                  PHONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white/20 pb-4 focus:outline-none focus:border-[#c9a050] transition-all duration-300 text-white placeholder-white/30"
                  placeholder="Optional contact number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-3 text-sm tracking-[0.2em] text-white/60">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-white/20 pb-4 focus:outline-none focus:border-[#c9a050] transition-all duration-300 resize-none text-white placeholder-white/30"
                  placeholder="Share your project details, timeline, and vision..."
                ></textarea>
              </div>

              <div className="pt-6 flex items-center gap-8">
                <button
                  type="submit"
                  className="relative group overflow-hidden border-2 border-[#c9a050]"
                >
                  <div className="relative z-10 px-14 py-5 text-[#c9a050] transition-colors duration-500 group-hover:text-[#0a0a0a] tracking-[0.2em] text-sm">
                    {isSubmitted ? 'MESSAGE SENT' : 'SEND INQUIRY'}
                  </div>
                  <div className="absolute inset-0 bg-[#c9a050] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                </button>
                
                <div className="text-white/40 text-sm">
                  <div>Response time:</div>
                  <div className="text-[#c9a050]">24 hours</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line with Center Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#c9a050] rotate-45"></div>
      </div>
    </section>
  );
}
