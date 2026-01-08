'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
}

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  >
    <path
      d="M4 12L12 4M12 4H6M12 4V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2 font-medium transition-all duration-200 group';

  const variants = {
    primary:
      'px-5 py-2.5 md:px-6 md:py-3 rounded-[24px] bg-accent text-white hover:bg-accent/90 transition-colors min-h-[44px]',
    secondary:
      'px-5 py-2.5 md:px-6 md:py-3 rounded-[24px] border border-foreground/20 hover:border-foreground/40 transition-colors min-h-[44px]',
    text: 'text-foreground/80 hover:text-foreground transition-colors',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="font-sans">{children}</span>
      <div className="w-5 h-5 rounded-full bg-current/10 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowIcon />
      </div>
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={styles}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={styles}
    >
      {content}
    </motion.button>
  );
}
