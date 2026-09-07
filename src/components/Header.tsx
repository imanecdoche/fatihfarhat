import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal, X } from 'lucide-react';

interface HeaderProps {
  currentPage?: 'home' | 'about';
  onNavigate?: (page: 'home' | 'about') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage = 'home', onNavigate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number; maxScale: number }>({
    x: 0,
    y: 0,
    maxScale: 60,
  });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Compute live center coordinates and maximum scale multiplier
  const getOriginAndScale = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
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
    const defaultX = typeof window !== 'undefined' ? window.innerWidth - 60 : 300;
    const defaultY = 50;
    const maxDistance = typeof window !== 'undefined' ? Math.hypot(defaultX, window.innerHeight) : 2000;
    return { x: defaultX, y: defaultY, maxScale: Math.ceil((maxDistance / 30) * 1.25) };
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (!isMenuOpen) {
        setIsHovered(false);
      }
    }, 1000);
  };

  const handleToggleClick = () => {
    if (isMobile && !isMenuOpen) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsHovered((prev) => {
        const next = !prev;
        if (next) {
          timeoutRef.current = setTimeout(() => {
            if (!isMenuOpen) {
              setIsHovered(false);
            }
          }, 3000);
        }
        return next;
      });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // Keep 3-dots button visible while the menu background circle shrinks (~0.8s)
    setIsHovered(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // After menu completely closes + breathing delay, slide the button back behind capsule
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 1400);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      const coords = getOriginAndScale();
      setOrigin(coords);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsHovered(true);
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

  const showButton = isHovered || isMenuOpen;

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-75 pt-5 px-4 sm:px-6 md:px-8 flex items-center justify-center pointer-events-none">
        {/* SVG Gooey / Metaball Filter Definition */}
        <svg
          style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
          aria-hidden="true"
        >
          <defs>
            <filter id="metaball-gooey" colorInterpolationFilters="sRGB">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -10"
                result="gooey"
              />
            </filter>
          </defs>
        </svg>

        {/* Interactive Header Wrapper with Hover and Touch Detection */}
        <div
          className="pointer-events-auto relative flex items-center justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleToggleClick}
        >
          {/* Gooey / Metaball Background Layer (Only visible when menu is closed) */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
            style={{
              filter: 'url(#metaball-gooey)',
              opacity: isMenuOpen ? 0 : 1,
            }}
          >
            <div className="relative flex items-center">
              {/* Main Capsule Shape */}
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="w-[88vw] sm:w-[540px] md:w-[620px] max-w-[720px] h-[60px] sm:h-[64px] bg-[#ffffff] rounded-[50px] relative z-20"
              />

              {/* Circle Shape (Mobile: drops down below right side; Desktop: slides out to the right) */}
              <motion.div
                initial={false}
                animate={{
                  x: isMobile ? 0 : (showButton ? 68 : -64),
                  y: isMobile ? (showButton ? 66 : 0) : 0,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`shrink-0 w-[60px] sm:w-[64px] h-[60px] sm:h-[64px] rounded-full bg-[#ffffff] ${
                  isMobile
                    ? 'absolute right-2 top-0 z-10'
                    : 'relative z-10 -ml-14'
                }`}
              />
            </div>
          </div>

          {/* Sharp Foreground Content Layer */}
          <div className="relative flex items-center justify-center">
            {/* Main Capsule Content - Smoothly fades when menu is open */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{
                y: 0,
                opacity: isMenuOpen ? 0 : 1,
                pointerEvents: isMenuOpen ? 'none' : 'auto',
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-30 w-[88vw] sm:w-[540px] md:w-[620px] max-w-[720px] h-[60px] sm:h-[64px] bg-[#ffffff] rounded-[50px] pl-6 sm:pl-7 pr-2 sm:pr-2.5 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 pointer-events-auto"
            >
              {/* Left: Black Extended Brand Text */}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => onNavigate && onNavigate('home')}
              >
                <span className="font-black tracking-[0.16em] sm:tracking-[0.2em] text-[16px] sm:text-[19px] uppercase text-[#2c2e2a] select-none font-sans">
                  FATIH FARHAT
                </span>
              </div>

              {/* Navigation Menu */}
              <nav className="flex items-center h-full gap-1">
                <a
                  href="#home"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('home');
                    }
                  }}
                  className={`h-full px-3.5 sm:px-5 rounded-[50px] text-[13px] sm:text-[14px] font-bold transition-colors duration-200 flex items-center justify-center ${
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
                  className={`h-full px-3.5 sm:px-5 rounded-[50px] text-[13px] sm:text-[14px] font-bold transition-colors duration-200 flex items-center justify-center ${
                    currentPage === 'about'
                      ? 'bg-[#2c2e2a] text-[#ffffff]'
                      : 'text-[#2c2e2a] hover:bg-[#f5f1e4]'
                  }`}
                >
                  TENTANG
                </a>
              </nav>
            </motion.div>

            {/* Circle Button Content (Stays always at top z-80 when menu open or hovered) */}
            <motion.div
              initial={false}
              animate={{
                x: isMobile ? 0 : (showButton ? 68 : -64),
                y: isMobile ? (showButton ? 66 : 0) : 0,
                pointerEvents: showButton ? 'auto' : 'none',
                opacity: isMobile ? (showButton ? 1 : 0) : 1,
              }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`shrink-0 z-40 ${
                isMobile
                  ? 'absolute right-2 top-0'
                  : 'relative -ml-14'
              }`}
            >
              <button
                ref={buttonRef}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenu();
                }}
                aria-label={isMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
                className="w-[60px] sm:w-[64px] h-[60px] sm:h-[64px] rounded-full flex items-center justify-center bg-[#ffffff] text-[#2c2e2a] hover:bg-[#f5f1e4] active:scale-95 transition-all duration-200 cursor-pointer pointer-events-auto"
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
                      <X size={24} className="text-[#2c2e2a]" strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="dots-icon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MoreHorizontal size={24} className="text-[#2c2e2a]" strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Expanding Circle Background - Locked 100% to Button Exact Center */}
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
          left: origin.x || (typeof window !== 'undefined' ? window.innerWidth - 60 : 300),
          top: origin.y || 50,
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

      {/* Fullscreen Navigation Menu Content Overlay */}
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
        {/* Top bar inside menu: Logo / Brand in #f5f1e4 (without NAVIGASI label) */}
        <div className="flex items-center justify-between w-full max-w-5xl mx-auto pt-4 sm:pt-2">
          <span
            onClick={() => {
              closeMenu();
              if (onNavigate) onNavigate('home');
            }}
            className="font-black tracking-[0.2em] text-[18px] sm:text-[22px] uppercase text-[#f5f1e4] select-none cursor-pointer"
          >
            FATIH FARHAT
          </span>
        </div>

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
