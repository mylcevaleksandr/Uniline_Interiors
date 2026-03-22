import { motion } from 'framer-motion';

const partners = [
  { 
    name: 'Blum Hardware',
    category: 'Premium Hardware'
  },
  { 
    name: 'Hafele',
    category: 'Specialty Hardware'
  },
  { 
    name: 'Benjamin Moore',
    category: 'Fine Finishes'
  },
  { 
    name: 'Exotic Lumber Inc.',
    category: 'Wood Supplier'
  },
  { 
    name: 'Sub-Zero Wolf',
    category: 'Appliance Partner'
  },
  { 
    name: 'Toll Brothers',
    category: 'Custom Builders'
  },
  { 
    name: 'Crystal Cabinets',
    category: 'Cabinet Partners'
  },
  { 
    name: 'National Association of Home Builders',
    category: 'Professional Member'
  },
];

export function Partners() {
  return (
    <section className="bg-black border-t border-white/10" style={{ paddingTop: '12rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#c9a050]"></div>
            <h4 className="text-[#c9a050]">Trusted Partners</h4>
            <div className="w-12 h-px bg-[#c9a050]"></div>
          </div>
          <h2 className="mb-4 text-white" style={{ marginBottom: '3rem' }}>Proudly Working With</h2>
        </motion.div>

        {/* Partners Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="group flex flex-col items-center justify-center p-6 border border-white/10 bg-white/5 hover:border-[#c9a050]/50 hover:bg-[#c9a050]/5 transition-all duration-500 rounded-lg"
            >
              <div className="text-center">
                <div className="text-white/90 group-hover:text-[#c9a050] transition-colors duration-500 mb-2">
                  {partner.name}
                </div>
                <div className="text-white/40 text-xs tracking-wider uppercase">
                  {partner.category}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional trust badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 pt-16 border-t border-white/10"
          style={{ marginTop: '6rem' }}
        >
          <div className="flex flex-col items-center">
            <div className="text-[#c9a050] text-3xl mb-2">15+</div>
            <div className="text-white/60 text-sm tracking-wider">Years Experience</div>
          </div>
          <div className="h-12 w-px bg-white/10"></div>
          <div className="flex flex-col items-center">
            <div className="text-[#c9a050] text-3xl mb-2">$5M+</div>
            <div className="text-white/60 text-sm tracking-wider">Projects Completed</div>
          </div>
          <div className="h-12 w-px bg-white/10"></div>
          <div className="flex flex-col items-center">
            <div className="text-[#c9a050] text-3xl mb-2">100%</div>
            <div className="text-white/60 text-sm tracking-wider">Insured & Licensed</div>
          </div>
          <div className="h-12 w-px bg-white/10"></div>
          <div className="flex flex-col items-center">
            <div className="text-[#c9a050] text-3xl mb-2">5 Year</div>
            <div className="text-white/60 text-sm tracking-wider">Warranty</div>
          </div>
        </motion.div>

        {/* Description moved to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
          style={{ marginTop: '4rem' }}
        >
          <p className="text-white/70 text-lg" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            We collaborate with industry-leading suppliers, builders, and manufacturers to deliver uncompromising quality
          </p>
        </motion.div>
      </div>
    </section>
  );
}