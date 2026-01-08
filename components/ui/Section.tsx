import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Section({
  children,
  className = '',
  fullWidth = false,
}: SectionProps) {
  return (
    <section className={`py-20 md:py-32 ${className}`}>
      <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-6 md:px-12'}>
        {children}
      </div>
    </section>
  );
}
