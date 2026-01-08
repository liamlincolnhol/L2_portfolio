'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-foreground/10" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-14 h-7 rounded-full bg-foreground/10 transition-colors hover:bg-foreground/20"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 28 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === 'dark' ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M10.5 7C10.5 9.48528 8.48528 11.5 6 11.5C3.51472 11.5 1.5 9.48528 1.5 7C1.5 4.51472 3.51472 2.5 6 2.5C6.17746 2.5 6.35276 2.51164 6.52503 2.53431C5.87867 3.15685 5.5 4.03071 5.5 5C5.5 6.933 7.067 8.5 9 8.5C9.96929 8.5 10.8431 8.12133 11.4657 7.47497C11.4884 7.64724 11.5 7.82254 11.5 8C11.5 8.16667 11.1667 8 10.5 7Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="2" fill="white" />
            <line x1="6" y1="1" x2="6" y2="2" stroke="white" strokeWidth="1" />
            <line x1="6" y1="10" x2="6" y2="11" stroke="white" strokeWidth="1" />
            <line x1="1" y1="6" x2="2" y2="6" stroke="white" strokeWidth="1" />
            <line x1="10" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1" />
            <line x1="2.5" y1="2.5" x2="3.2" y2="3.2" stroke="white" strokeWidth="1" />
            <line x1="8.8" y1="8.8" x2="9.5" y2="9.5" stroke="white" strokeWidth="1" />
            <line x1="2.5" y1="9.5" x2="3.2" y2="8.8" stroke="white" strokeWidth="1" />
            <line x1="8.8" y1="3.2" x2="9.5" y2="2.5" stroke="white" strokeWidth="1" />
          </svg>
        )}
      </motion.div>
    </button>
  );
}
