export function Footer() {
  return (
    <footer className="w-full max-w-full bg-[#0a0a0a] text-white overflow-hidden">
      <div className="w-full max-w-[1400px] px-8 md:px-24 py-16" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <div className="text-[#c9a050] tracking-[0.2em] text-xs mb-3">UNILINE CARPENTRY</div>
            <p className="text-white/50 text-xs max-w-sm">
              Years of proven experience in exceptional craftsmanship
            </p>
          </div>

          <div className="flex gap-12 text-xs">
            <a href="#portfolio" className="text-white/60 hover:text-[#c9a050] transition-colors tracking-wider">
              PORTFOLIO
            </a>
            <a href="#contact" className="text-white/60 hover:text-[#c9a050] transition-colors tracking-wider">
              CONTACT
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Uniline Carpentry. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c9a050] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#c9a050] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}