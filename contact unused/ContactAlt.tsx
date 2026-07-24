import { useState } from 'react';

export function ContactAlt() {
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
    <section id="contact" className="relative w-full h-screen min-h-[800px] overflow-hidden">
      <div className="grid lg:grid-cols-2 h-full">
        {/* Left Side - Image with Overlay */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1676250747209-eee2d728da64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kJTIwY2FycGVudHJ5JTIwd29ya3Nob3B8ZW58MXx8fHwxNzY1Mzk3NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Carpentry Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-transparent"></div>
          </div>
          
          {/* Content on Image */}
          <div className="relative h-full flex flex-col justify-center px-16 xl:px-24">
            <div className="max-w-md">
              <div className="mb-8">
                <div className="w-16 h-px bg-[#c9a050] mb-6"></div>
                <h2 className="text-white mb-6">Begin Your Project</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Experience the professionalism and outstanding workmanship that defines Uniline Carpentry
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-8 mt-16">
                <div>
                  <div className="text-[#c9a050] text-xs tracking-widest mb-3">STUDIO</div>
                  <p className="text-white/80 leading-relaxed">
                    123 Craftsman Lane<br />
                    Portland, Oregon 97201
                  </p>
                </div>

                <div>
                  <div className="text-[#c9a050] text-xs tracking-widest mb-3">CONTACT</div>
                  <div className="text-white/80 space-y-2">
                    <div>
                      <a href="tel:+15551234567" className="hover:text-[#c9a050] transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                    <div>
                      <a href="mailto:info@unilinecarpentry.com" className="hover:text-[#c9a050] transition-colors">
                        info@unilinecarpentry.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[#c9a050] text-xs tracking-widest mb-3">HOURS</div>
                  <div className="text-white/80 space-y-2">
                    <div>Monday — Friday: 8:00 — 18:00</div>
                    <div>Saturday: 10:00 — 16:00</div>
                    <div>Sunday: By Appointment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="relative bg-[#0a0a0a] flex items-center justify-center px-8 py-16 lg:px-16">
          {/* Decorative Corner Elements */}
          <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-[#c9a050]/30"></div>
          <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-[#c9a050]/30"></div>

          <div className="w-full max-w-lg">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-[#c9a050]"></div>
                <h4 className="text-[#c9a050]">Let&apos;s Connect</h4>
                <div className="w-12 h-px bg-[#c9a050]"></div>
              </div>
              <h2 className="text-white mb-6">Begin Your Project</h2>
            </div>

            <div className="text-center mb-10 hidden lg:block">
              <h4 className="text-[#c9a050] tracking-widest text-sm mb-8">Let&apos;s Connect</h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block mb-3 text-xs tracking-widest text-[#c9a050]">
                  NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 focus:outline-none focus:border-[#c9a050] transition-all duration-300 text-white placeholder-white/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-3 text-xs tracking-widest text-[#c9a050]">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 focus:outline-none focus:border-[#c9a050] transition-all duration-300 text-white placeholder-white/30"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-3 text-xs tracking-widest text-[#c9a050]">
                  PHONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 focus:outline-none focus:border-[#c9a050] transition-all duration-300 text-white placeholder-white/30"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-3 text-xs tracking-widest text-[#c9a050]">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border-2 border-white/10 px-6 py-4 focus:outline-none focus:border-[#c9a050] transition-all duration-300 resize-none text-white placeholder-white/30"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-12 py-5 bg-[#c9a050] text-[#0a0a0a] tracking-widest text-sm transition-all duration-500 hover:bg-[#d4b366] hover:shadow-lg hover:shadow-[#c9a050]/20"
                >
                  {isSubmitted ? 'MESSAGE SENT' : 'SEND MESSAGE'}
                </button>
              </div>
            </form>

            {/* Mobile Contact Info */}
            <div className="lg:hidden mt-16 pt-12 border-t border-white/10 space-y-8">
              <div>
                <div className="text-[#c9a050] text-xs tracking-widest mb-3">STUDIO</div>
                <p className="text-white/80">
                  123 Craftsman Lane<br />
                  Portland, Oregon 97201
                </p>
              </div>

              <div>
                <div className="text-[#c9a050] text-xs tracking-widest mb-3">CONTACT</div>
                <div className="text-white/80 space-y-2">
                  <div>
                    <a href="tel:+15551234567" className="hover:text-[#c9a050] transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div>
                    <a href="mailto:info@unilinecarpentry.com" className="hover:text-[#c9a050] transition-colors">
                      info@unilinecarpentry.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
