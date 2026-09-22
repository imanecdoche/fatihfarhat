import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  isMenuOpen?: boolean;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ isMenuOpen = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = (customY?: number) => {
      const currentScrollY = typeof customY === 'number' ? customY : window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY;

      // Sembunyikan saat dekat dengan bagian paling atas halaman (< 300px)
      if (currentScrollY <= 300) {
        setIsVisible(false);
      } else if (scrollDiff < -6) {
        // Muncul saat user melakukan scrolling ke atas dari bawah
        setIsVisible(true);
      } else if (scrollDiff > 6) {
        // Sembunyikan saat user scrolling ke bawah
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    const onWindowScroll = () => handleScroll();
    window.addEventListener('scroll', onWindowScroll, { passive: true });

    // Dengarkan juga event scroll dari Lenis jika tersedia
    const lenis = (window as any).__lenis;
    const onLenisScroll = (e: any) => {
      if (typeof e?.scroll === 'number') {
        handleScroll(e.scroll);
      }
    };

    if (lenis?.on) {
      lenis.on('scroll', onLenisScroll);
    }

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      if (lenis?.off) {
        lenis.off('scroll', onLenisScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sembunyikan tombol jika menu navigasi sedang terbuka
  const shouldRender = isVisible && !isMenuOpen;

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2c2e2a] hover:bg-[#8ed462] text-[#ffffff] hover:text-[#2c2e2a] flex items-center justify-center transition-colors duration-300 cursor-pointer active:scale-95"
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
