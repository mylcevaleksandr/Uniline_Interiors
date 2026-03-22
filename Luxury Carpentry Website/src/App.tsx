import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Partners } from './components/Partners';
import { ContactMinimal } from './components/ContactMinimal';
import { Footer } from './components/Footer';

export default function App() {
  // Add smooth scroll behavior to the entire document
  if (typeof document !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  return (
    <div className="w-full">
      <Hero />
      <Portfolio />
      <Partners />
      <div className="h-24 md:h-32 bg-black" />
      <ContactMinimal />
      <Footer />
    </div>
  );
}