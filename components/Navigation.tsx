'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ui/ThemeToggle';
import MobileMenu from './MobileMenu';

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-8"
      >
      <div className="glass px-4 md:px-12 py-3 md:py-4 rounded-[999px] shadow-lg flex items-center gap-4 md:gap-8 w-full">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-lg md:text-xl font-bold"
        >
          L2 Design
        </Link>

        {/* Navigation Items */}
        <ul className="hidden md:flex items-center gap-8 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path || pathname.startsWith(item.path + '/');

            return (
              <li key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-foreground'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>

                {/* Active indicator - accent line */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -top-[18px] left-0 right-0 h-[2px] bg-accent"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 hover:bg-foreground/5 rounded-full transition-colors"
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
      </motion.nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
