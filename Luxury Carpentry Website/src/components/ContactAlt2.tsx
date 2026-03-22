import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactAlt2() {
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
    <section id="contact" className="relative w-full py-32 bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201, 160, 80, 0.1) 35px, rgba(201, 160, 80, 0.1) 70px)'
        }}></div>
      </div>

      <div className="relative w-full max-w-[1200px] px-8" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#c9a050] rotate-45"></div>
              <h4 className="text-[#c9a050] tracking-widest">CONTACT US</h4>
              <div className="w-2 h-2 bg-[#c9a050] rotate-45"></div>
            </div>
          </div>
          <h2 className="mb-6 text-white">Start Your Journey</h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can bring your vision to life with exceptional craftsmanship
          </p>
        </div>

        {/* Main Content Card */}
        <div className="relative">
          {/* Decorative Border Frame */}
          <div className="absolute -top-4 -left-4 w-24 h-24">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c9a050] to-transparent"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#c9a050] to-transparent"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24">
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#c9a050] to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-[#c9a050] to-transparent"></div>
          </div>

          <div className="relative bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/10 p-12 md:p-16">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-3 text-xs tracking-widest text-white/60">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/20 px-5 py-4 focus:outline-none focus:border-[#c9a050] focus:bg-white/10 transition-all duration-300 text-white placeholder-white/30"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-3 text-xs tracking-widest text-white/60">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/20 px-5 py-4 focus:outline-none focus:border-[#c9a050] focus:bg-white/10 transition-all duration-300 text-white placeholder-white/30"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-3 text-xs tracking-widest text-white/60">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 px-5 py-4 focus:outline-none focus:border-[#c9a050] focus:bg-white/10 transition-all duration-300 text-white placeholder-white/30"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-3 text-xs tracking-widest text-white/60">
                      PROJECT DETAILS
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-white/5 border border-white/20 px-5 py-4 focus:outline-none focus:border-[#c9a050] focus:bg-white/10 transition-all duration-300 resize-none text-white placeholder-white/30"
                      placeholder="Tell us about your project vision, timeline, and budget..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    <button
                      type="submit"
                      className="group relative px-10 py-4 bg-[#c9a050] text-[#0a0a0a] tracking-widest text-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a050]/30 hover:-translate-y-0.5"
                    >
                      <span className="relative z-10">
                        {isSubmitted ? 'MESSAGE RECEIVED' : 'SUBMIT INQUIRY'}
                      </span>
                    </button>
                    <p className="text-white/40 text-sm">We&apos;ll respond within 24 hours</p>
                  </div>
                </form>
              </div>

              {/* Contact Info - Takes 1 column */}
              <div className="space-y-8 lg:pl-8 lg:border-l lg:border-white/10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#c9a050]/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#c9a050]" />
                    </div>
                    <h4 className="text-white">Location</h4>
                  </div>
                  <p className="text-white/70 leading-relaxed ml-13">
                    123 Craftsman Lane<br />
                    Portland, Oregon 97201<br />
                    United States
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#c9a050]/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#c9a050]" />
                    </div>
                    <h4 className="text-white">Phone</h4>
                  </div>
                  <a href="tel:+15551234567" className="text-white/70 hover:text-[#c9a050] transition-colors ml-13">
                    +1 (555) 123-4567
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#c9a050]/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#c9a050]" />
                    </div>
                    <h4 className="text-white">Email</h4>
                  </div>
                  <a href="mailto:info@unilinecarpentry.com" className="text-white/70 hover:text-[#c9a050] transition-colors ml-13 break-all">
                    info@unilinecarpentry.com
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#c9a050]/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#c9a050]" />
                    </div>
                    <h4 className="text-white">Hours</h4>
                  </div>
                  <div className="text-white/70 space-y-2 ml-13 text-sm">
                    <div>Mon — Fri: 8:00 — 18:00</div>
                    <div>Saturday: 10:00 — 16:00</div>
                    <div>Sunday: By Appointment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c9a050]"></div>
            <p className="text-white/40 text-sm tracking-wider">EXCELLENCE IN EVERY DETAIL</p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c9a050]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}