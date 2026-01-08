'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-background border-l border-foreground/10 z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Close button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-foreground/5 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex flex-col gap-2 px-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={onClose}
                      className={`py-4 px-4 rounded-lg text-lg font-medium transition-colors ${
                        isActive
                          ? 'bg-accent text-white'
                          : 'hover:bg-foreground/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
