import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutHero } from './components/AboutHero';
import { AboutBio } from './components/AboutBio';
import { EducationTimeline } from './components/EducationTimeline';
import { PortfolioHero } from './components/PortfolioHero';
import { ServicesHero } from './components/ServicesHero';
import ScrollVelocity from './components/ScrollVelocity';
import LogoLoop from './components/LogoLoop';
import { techLogos } from './components/TechLogos';
import { portfolioLogos } from './components/PortfolioLogos';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'portfolio' | 'services'>('home');
  const [isTimelineSticky, setIsTimelineSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#portfolio') {
        setCurrentPage('portfolio');
      } else if (hash === '#services') {
        setCurrentPage('services');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: 'home' | 'about' | 'portfolio' | 'services') => {
    setIsTimelineSticky(false);
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#home' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f1e4] text-[#2c2e2a] overflow-x-clip">
      {/* Custom Scroll Progress Bar at the Top - Pure Flat Color without shadow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-[#8ed462] origin-left z-60 pointer-events-none"
        style={{ scaleX }}
      />

      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isTimelineSticky={isTimelineSticky}
      />
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Hero />
              <section className="w-full pb-10 sm:pb-20 -translate-y-[200px] sm:-translate-y-[25px] opacity-75">
                <ScrollVelocity
                  texts={[
                    'Vibe Coder - Web Developer - Graphic Designer - Illustrator - Digital Marketer - Copywriter -',
                    'Vibe Coder - Web Developer - Graphic Designer - Illustrator - Digital Marketer - Copywriter -',
                  ]}
                  velocity={60}
                  className="custom-scroll-text text-[#2c2e2a] font-bold tracking-tight"
                  numCopies={12}
                  damping={100}
                  stiffness={750}
                />
              </section>
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <AboutHero onNavigateHome={() => handleNavigate('home')} />
              <section className="w-full pb-10 sm:pb-20 -translate-y-[135px] sm:translate-y-[25px] opacity-75 text-[#2c2e2a]">
                <LogoLoop
                  logos={techLogos}
                  speed={70}
                  direction="left"
                  logoHeight={isMobile ? 28 : 42}
                  gap={isMobile ? 40 : 56}
                  hoverSpeed={15}
                  scaleOnHover={false}
                  fadeOut
                  fadeOutColor="#f5f1e4"
                  ariaLabel="Tech stack and creative tools"
                />
              </section>
              <AboutBio />
              <EducationTimeline onStickyChange={setIsTimelineSticky} />
            </motion.div>
          )}

          {currentPage === 'portfolio' && (
            <motion.div
              key="portfolio-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <PortfolioHero onNavigateHome={() => handleNavigate('home')} />
              <section className="w-full pb-10 sm:pb-20 -translate-y-[135px] sm:translate-y-[25px] opacity-75 text-[#2c2e2a]">
                <LogoLoop
                  logos={portfolioLogos}
                  speed={70}
                  direction="left"
                  logoHeight={28}
                  gap={40}
                  hoverSpeed={15}
                  scaleOnHover={false}
                  fadeOut
                  fadeOutColor="#f5f1e4"
                  ariaLabel="Clients and partner brands"
                />
              </section>
            </motion.div>
          )}

          {currentPage === 'services' && (
            <motion.div
              key="services-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServicesHero onNavigateHome={() => handleNavigate('home')} />
              <section className="w-full pb-10 sm:pb-20 -translate-y-[135px] sm:translate-y-[25px] opacity-75 text-[#2c2e2a]">
                <LogoLoop
                  logos={techLogos}
                  speed={70}
                  direction="left"
                  logoHeight={isMobile ? 28 : 42}
                  gap={isMobile ? 40 : 56}
                  hoverSpeed={15}
                  scaleOnHover={false}
                  fadeOut
                  fadeOutColor="#f5f1e4"
                  ariaLabel="Tech stack and creative tools"
                />
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
