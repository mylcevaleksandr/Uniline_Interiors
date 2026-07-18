// @ts-ignore
import logoImage from '../assets/logo-transparent.png';

export function Logo({ className = "h-56 md:h-72" }: { className?: string }) {
  return (
    <img 
      src={logoImage} 
      alt="Uniline Carpentry Logo"
      className={`${className} w-auto max-w-[400px] object-contain`}
      style={{ maxWidth: '400px' }}
    />
  );
}