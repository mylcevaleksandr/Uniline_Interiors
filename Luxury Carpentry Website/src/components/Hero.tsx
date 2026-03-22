import heroImage from 'figma:asset/97390a4a8e49fd740846084b3e6f99d1cf7ea3f3.png';
import { Logo } from './Logo';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury carpentry"
          className="w-full h-full object-cover opacity-50"
          style={{ maxWidth: '100vw', width: '100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col w-full max-w-full">
        {/* Logo and Company Name at Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center px-4 md:px-16 pt-8 pb-8 border-b border-white/10 w-full"
        >
          <div className="flex flex-col items-center">
            <Logo className="h-12 md:h-14 mb-4" />
            <div className="text-white text-base md:text-xl tracking-[0.2em]">
              UNILINE CARPENTRY
            </div>
          </div>
          <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 hidden md:flex gap-6 text-white/90 text-sm tracking-wider">
            <a href="#portfolio" className="hover:text-[#c9a050] transition-colors duration-300">PORTFOLIO</a>
            <a href="#contact" className="hover:text-[#c9a050] transition-colors duration-300">CONTACT</a>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white mb-8 max-w-5xl"
          >
            Precision & Artistry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-white/80 mb-16 max-w-2xl text-lg"
          >
            High-end finish carpentry, custom cabinetry, and bespoke woodwork crafted with unparalleled attention to detail for discerning homeowners
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            onClick={scrollToPortfolio}
            className="relative group overflow-hidden"
          >
            <div className="relative z-10 px-12 py-5 border border-[#c9a050] text-[#c9a050] transition-colors duration-300 group-hover:text-white">
              EXPLORE COLLECTION
            </div>
            <div className="absolute inset-0 bg-[#c9a050] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="pb-16 flex flex-col items-center gap-4 w-full"
        >
          <div className="text-white/60 text-xs tracking-widest">SCROLL</div>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}