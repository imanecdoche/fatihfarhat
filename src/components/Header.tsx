import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { MoreHorizontal, X } from 'lucide-react';

interface HeaderProps {
  currentPage?: 'home' | 'about';
  onNavigate?: (page: 'home' | 'about') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage = 'home', onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [origin, setOrigin] = useState<{ x: number; y: number; maxScale: number }>({
    x: 0,
    y: 0,
    maxScale: 60,
  });
  const desktopButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  // Scroll detection: slide header up on scroll down, reveal on scroll up or at top
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;
    if (latest < 40) {
      setIsVisible(true);
    } else if (diff > 4) {
      // scrolling down -> slide up to hide
      setIsVisible(false);
    } else if (diff < -4) {
      // scrolling up -> slide down to show
      setIsVisible(true);
    }
  });

  // Compute live center coordinates and maximum scale multiplier from the active button
  const getOriginAndScale = useCallback((isMobileCall = false) => {
    const activeRef = (isMobileCall || (typeof window !== 'undefined' && window.innerWidth < 640))
      ? mobileButtonRef.current || desktopButtonRef.current
      : desktopButtonRef.current || mobileButtonRef.current;

    if (activeRef) {
      const rect = activeRef.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const maxDistance = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      // Base circle radius is 30px, add 25% safety margin
      const maxScale = Math.ceil((maxDistance / 30) * 1.25);
      return { x, y, maxScale };
    }
    const defaultX = typeof window !== 'undefined' ? window.innerWidth - 40 : 300;
    const defaultY = 40;
    const maxDistance = typeof window !== 'undefined' ? Math.hypot(defaultX, window.innerHeight) : 2000;
    return { x: defaultX, y: defaultY, maxScale: Math.ceil((maxDistance / 30) * 1.25) };
  }, []);

  const updateOrigin = useCallback((isMobileCall = false) => {
    setOrigin(getOriginAndScale(isMobileCall));
  }, [getOriginAndScale]);

  useEffect(() => {
    updateOrigin();
    const handleResize = () => updateOrigin();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateOrigin]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = (isMobile = false) => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      updateOrigin(isMobile);
      setIsMenuOpen(true);
    }
  };

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      {/* Floating Center Header Capsule (z-70: Always above fullscreen menu cover) */}
      <header className="w-full fixed top-0 left-0 right-0 z-70 pt-4 sm:pt-5 px-3 sm:px-6 md:px-8 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{
            y: !isVisible && !isMenuOpen ? -100 : 0,
            opacity: !isVisible && !isMenuOpen ? 0 : 1,
            pointerEvents: !isVisible && !isMenuOpen ? 'none' : 'auto',
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-[92vw] sm:w-[520px] md:w-[600px] max-w-[700px] h-[54px] sm:h-[60px] md:h-[64px] rounded-[50px] pl-5 sm:pl-7 pr-2 sm:pr-2.5 py-1.5 sm:py-2.5 flex items-center justify-between transition-colors duration-300 pointer-events-auto ${
            isMenuOpen ? 'bg-transparent' : 'bg-[#ffffff]'
          }`}
        >
          {/* Left: Brand Text - Transforms to background color #f5f1e4 when menu is open */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              if (isMenuOpen) closeMenu();
              if (onNavigate) onNavigate('home');
            }}
          >
            <span
              className={`font-black tracking-[0.14em] sm:tracking-[0.2em] text-[15px] sm:text-[18px] md:text-[19px] uppercase select-none font-sans transition-colors duration-300 ${
                isMenuOpen ? 'text-[#f5f1e4]' : 'text-[#2c2e2a]'
              }`}
            >
              FATIH FARHAT
            </span>
          </div>

          {/* Desktop Navigation Menu (Fades out when menu open, hidden on Mobile) */}
          <motion.nav
            animate={{ opacity: isMenuOpen ? 0 : 1, pointerEvents: isMenuOpen ? 'none' : 'auto' }}
            transition={{ duration: 0.25 }}
            className="hidden sm:flex items-center h-full gap-1"
          >
            <a
              href="#home"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('home');
                }
              }}
              className={`h-full px-3 sm:px-5 rounded-[50px] text-[13px] sm:text-[14px] font-bold transition-colors duration-200 flex items-center justify-center ${
                currentPage === 'home'
                  ? 'bg-[#2c2e2a] text-[#ffffff]'
                  : 'text-[#2c2e2a] hover:bg-[#f5f1e4]'
              }`}
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('about');
                }
              }}
              className={`h-full px-3 sm:px-5 rounded-[50px] text-[13px] sm:text-[14px] font-bold transition-colors duration-200 flex items-center justify-center ${
                currentPage === 'about'
                  ? 'bg-[#2c2e2a] text-[#ffffff]'
                  : 'text-[#2c2e2a] hover:bg-[#f5f1e4]'
              }`}
            >
              TENTANG
            </a>
          </motion.nav>

          {/* Mobile Inside Button: Switches between MoreHorizontal and X icon */}
          <button
            ref={mobileButtonRef}
            onClick={() => toggleMenu(true)}
            aria-label={isMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
            className={`sm:hidden w-[40px] h-[40px] rounded-full flex items-center justify-center active:scale-95 transition-all duration-200 cursor-pointer select-none shrink-0 ${
              isMenuOpen
                ? 'bg-transparent text-[#f5f1e4] hover:bg-white/10'
                : 'bg-[#f5f1e4] text-[#2c2e2a] hover:bg-[#2c2e2a] hover:text-[#ffffff]'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="mobile-close"
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="mobile-dots"
                  initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <MoreHorizontal size={20} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </header>

      {/* Desktop Floating Three-Dots / Close Button at Top Right Corner (Hidden on Mobile) */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{
          y: !isVisible && !isMenuOpen ? -100 : 0,
          opacity: !isVisible && !isMenuOpen ? 0 : 1,
          pointerEvents: !isVisible && !isMenuOpen ? 'none' : 'auto',
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="hidden sm:flex fixed top-4 sm:top-5 right-4 sm:right-6 md:right-8 z-80 pointer-events-auto"
      >
        <button
          ref={desktopButtonRef}
          onClick={() => toggleMenu(false)}
          aria-label={isMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
          className="w-[54px] sm:w-[60px] md:w-[64px] h-[54px] sm:h-[60px] md:h-[64px] rounded-full flex items-center justify-center bg-[#ffffff] text-[#2c2e2a] hover:bg-[#2c2e2a] hover:text-[#ffffff] active:scale-95 transition-all duration-200 cursor-pointer select-none"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} strokeWidth={2.5} />
              </motion.div>
            ) : (
              <motion.div
                key="dots-icon"
                initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <MoreHorizontal size={24} strokeWidth={2.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Expanding Circle Background Cover (z-60) */}
      <motion.div
        initial={false}
        animate={{
          scale: isMenuOpen ? origin.maxScale : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          position: 'fixed',
          left: origin.x || (typeof window !== 'undefined' ? window.innerWidth - 40 : 300),
          top: origin.y || 40,
          width: '60px',
          height: '60px',
          marginLeft: '-30px',
          marginTop: '-30px',
          borderRadius: '9999px',
          backgroundColor: '#2c2e2a',
          pointerEvents: 'none',
          zIndex: 60,
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
      />

      {/* Fullscreen Navigation Menu Content Overlay (z-65) */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
        transition={{
          duration: isMenuOpen ? 0.45 : 0.25,
          delay: isMenuOpen ? 0.18 : 0,
        }}
        className="fixed inset-0 z-65 flex flex-col justify-between p-6 sm:p-12 md:p-16 text-[#f5f1e4]"
      >
        {/* Top spacer (brand text is rendered above in Header at z-70) */}
        <div className="w-full max-w-5xl mx-auto h-[60px]" />

        {/* Center: Large Navigation Links in #f5f1e4 with hover to #ffffff */}
        <nav className="w-full max-w-5xl mx-auto my-auto py-6 sm:py-10">
          <ul className="flex flex-col space-y-3 sm:space-y-5">
            {[
              { num: '01', title: 'HOME', page: 'home' as const, href: '#home' },
              { num: '02', title: 'TENTANG SAYA', page: 'about' as const, href: '#about' },
              { num: '03', title: 'PORTOFOLIO', page: 'home' as const, href: '#portfolio' },
              { num: '04', title: 'KEAHLIAN & JASA', page: 'home' as const, href: '#services' },
              { num: '05', title: 'KONTAK', page: 'home' as const, href: '#contact' },
            ].map((item, idx) => (
              <motion.li
                key={item.num}
                initial={{ opacity: 0, x: -30 }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{
                  duration: 0.5,
                  delay: isMenuOpen ? 0.22 + idx * 0.08 : 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    closeMenu();
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate(item.page);
                    }
                  }}
                  className="group inline-flex items-baseline gap-3 sm:gap-6 transition-transform duration-300 hover:translate-x-3 cursor-pointer"
                >
                  <span className="text-sm sm:text-lg font-mono font-bold text-[#f5f1e4]/60 group-hover:text-[#ffffff] transition-colors duration-200">
                    {item.num}
                  </span>
                  <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#f5f1e4] group-hover:text-[#ffffff] transition-colors duration-200">
                    {item.title}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Bottom bar: Socials / Info in #f5f1e4 */}
        <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#f5f1e4]/20 text-sm sm:text-base text-[#f5f1e4]/70">
          <div className="flex items-center gap-6 font-semibold text-xs sm:text-sm tracking-wider uppercase">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#ffffff] transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#ffffff] transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#ffffff] transition-colors">Instagram</a>
          </div>
          <span className="font-mono text-xs sm:text-sm text-[#f5f1e4]/50">
            © {new Date().getFullYear()} FATIH FARHAT. All Rights Reserved.
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
