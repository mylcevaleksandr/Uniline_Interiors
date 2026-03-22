import logoImage from 'figma:asset/535e8dac5dc2ca0e99ceebb54481b5f9d210f0df.png';

export function Logo({ className = "h-24 md:h-32" }: { className?: string }) {
  return (
    <img 
      src={logoImage} 
      alt="Uniline Carpentry Logo"
      className={`${className} w-auto max-w-[200px] object-contain`}
      style={{ maxWidth: '200px' }}
    />
  );
}