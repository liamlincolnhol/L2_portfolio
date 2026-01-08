'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  variant = 'light',
  className = '',
  hover = true,
}: CardProps) {
  const variants = {
    light: 'bg-[var(--card-light-bg)] backdrop-blur-sm border border-foreground/5',
    dark: 'bg-[var(--card-dark-bg)] text-[var(--card-dark-text)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`rounded-[16px] p-6 md:p-8 ${variants[variant]} ${className} transition-colors duration-300`}
    >
      {children}
    </motion.div>
  );
}
