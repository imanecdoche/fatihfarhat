import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutHero } from './components/AboutHero';
import { AboutBio } from './components/AboutBio';
import { IdentityCard } from './components/IdentityCard';
import { EducationTimeline } from './components/EducationTimeline';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ArrowLeft } from 'lucide-react';
import { PortfolioHero } from './components/PortfolioHero';
import { PortfolioCategories, PortfolioCategoryType } from './components/PortfolioCategories';
import { PortfolioGrid } from './components/PortfolioGrid';
import { GithubOverview } from './components/GithubOverview';
import { LiteraryWorks } from './components/LiteraryWorks';
import { DesignPortfolio } from './components/DesignPortfolio';
import { ContentPortfolio } from './components/ContentPortfolio';
import { MusicPortfolio } from './components/MusicPortfolio';
import { ServicesHero } from './components/ServicesHero';
import { SkillsCharts } from './components/SkillsCharts';
import { ContactHero } from './components/ContactHero';
import { ContactSection } from './components/ContactSection';
import { HomeShowcase } from './components/HomeShowcase';
import ScrollVelocity from './components/ScrollVelocity';
import LogoLoop from './components/LogoLoop';
import { techLogos } from './components/TechLogos';
import { portfolioLogos } from './components/PortfolioLogos';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'portfolio' | 'services' | 'contact'>('home');
  const [portfolioCategory, setPortfolioCategory] = useState<PortfolioCategoryType>('all');
  const [isBioSticky, setIsBioSticky] = useState(false);
  const [isEducationSticky, setIsEducationSticky] = useState(false);
  const [isExperienceSticky, setIsExperienceSticky] = useState(false);
  const isTimelineSticky = isBioSticky || isEducationSticky || isExperienceSticky;
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
      } else if (hash === '#contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: 'home' | 'about' | 'portfolio' | 'services' | 'contact') => {
    setIsBioSticky(false);
    setIsEducationSticky(false);
    setIsExperienceSticky(false);
    if (page === 'portfolio') {
      setPortfolioCategory('all');
    }
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#home' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Initialize smooth scrolling with Lenis synchronized to GSAP ticker
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Synchronize scroll updates to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Bind render tick to GSAP's RAF ticker to avoid race conditions
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
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
                    'Software Developer - Frontend Engineer - Creative Technologist - UI/UX Specialist - Web Architect -',
                    'Software Developer - Frontend Engineer - Creative Technologist - UI/UX Specialist - Web Architect -',
                  ]}
                  velocity={60}
                  className="custom-scroll-text text-[#2c2e2a] font-bold tracking-tight"
                  numCopies={12}
                  damping={100}
                  stiffness={750}
                />
              </section>
              <HomeShowcase onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about-page"
              className="pb-32 sm:pb-48"
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
              <AboutBio onStickyChange={setIsBioSticky} />
              <IdentityCard />
              <EducationTimeline onStickyChange={setIsEducationSticky} />
              <ExperienceTimeline onStickyChange={setIsExperienceSticky} />
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
              {/* Category Navigation Hub (Default View: includes PortfolioHero & LogoLoop) */}
              {portfolioCategory === 'all' && (
                <>
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
                  <PortfolioCategories
                    onSelectCategory={(cat) => {
                      setPortfolioCategory(cat);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </>
              )}

              {/* Specific Category View with Sub-Navigation (Hero & Running Logo are hidden) */}
              {portfolioCategory !== 'all' && (
                <div className="w-full pt-28 sm:pt-32 md:pt-36 pb-16">
                  {/* Category Switcher & Back Navigation Bar */}
                  <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      onClick={() => {
                        setPortfolioCategory('all');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ffffff] text-[#2c2e2a] font-bold text-xs sm:text-sm hover:bg-[#2c2e2a] hover:text-[#ffffff] transition-colors cursor-pointer w-fit group"
                    >
                      <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                      <span>Semua Kategori Portofolio</span>
                    </button>

                    {/* Quick Switch Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                      {[
                        { id: 'software' as PortfolioCategoryType, label: 'Software' },
                        { id: 'writing' as PortfolioCategoryType, label: 'Karya Tulis' },
                        { id: 'design' as PortfolioCategoryType, label: 'Desain' },
                        { id: 'content' as PortfolioCategoryType, label: 'Konten Kreator' },
                        { id: 'music' as PortfolioCategoryType, label: 'Music & Sound' },
                      ].map((tab) => {
                        const isActive = portfolioCategory === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => {
                              setPortfolioCategory(tab.id);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-colors cursor-pointer shrink-0 ${
                              isActive
                                ? 'bg-[#2c2e2a] text-[#ffffff]'
                                : 'bg-[#ffffff] text-[#2c2e2a]/70 hover:text-[#2c2e2a]'
                            }`}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Render the Selected Category Content */}
                  {portfolioCategory === 'software' && (
                    <>
                      <PortfolioGrid />
                      <GithubOverview />
                    </>
                  )}

                  {portfolioCategory === 'writing' && <LiteraryWorks />}

                  {portfolioCategory === 'design' && <DesignPortfolio />}

                  {portfolioCategory === 'content' && <ContentPortfolio />}

                  {portfolioCategory === 'music' && <MusicPortfolio />}

                  {/* Bottom Navigation Back Button */}
                  <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-16 text-center">
                    <button
                      onClick={() => {
                        setPortfolioCategory('all');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ffffff] text-[#2c2e2a] font-bold text-sm hover:bg-[#2c2e2a] hover:text-[#ffffff] transition-all cursor-pointer group active:scale-95"
                    >
                      <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                      <span>Kembali ke Pilihan Kategori Portofolio</span>
                    </button>
                  </div>
                </div>
              )}
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
              <SkillsCharts />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContactHero onNavigateHome={() => handleNavigate('home')} />
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
