import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EducationItem {
  id: string;
  level: string;
  step: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}

const educationData: EducationItem[] = [
  {
    id: 'sd',
    level: 'SEKOLAH DASAR',
    step: '01',
    degree: 'Pendidikan Dasar',
    institution: 'SD Negeri 01',
    period: '2008 — 2014',
    description:
      'Membangun pondasi rasa ingin tahu yang kuat terhadap sains, kreativitas seni visual, dan pengenalan awal terhadap teknologi komputer serta internet.',
    highlights: ['Dasar Logika & Matematika', 'Seni Rupa & Gambar', 'Pengenalan Komputer Awal'],
  },
  {
    id: 'smp',
    level: 'SEKOLAH MENENGAH PERTAMA',
    step: '02',
    degree: 'Pendidikan Menengah Pertama',
    institution: 'SMP Negeri 01',
    period: '2014 — 2017',
    description:
      'Mulai aktif mengeksplorasi software grafis digital, desain antarmuka dasar, dan menulis kode HTML/CSS pertama untuk kustomisasi template web.',
    highlights: ['Eksplorasi Desain Digital', 'Dasar Pemrograman Web', 'Klub Sains & Komputer'],
  },
  {
    id: 'sma',
    level: 'SEKOLAH MENENGAH ATAS',
    step: '03',
    degree: 'Pendidikan Menengah Atas / Rekayasa',
    institution: 'SMA Negeri 01 (Peminatan IPA / Rekayasa)',
    period: '2017 — 2020',
    description:
      'Memperdalam logika algoritma, sains analitik, dan prinsip desain multimedia. Membangun portofolio karya kreatif independen dan proyek antarmuka interaktif.',
    highlights: ['Algoritma & Pemecahan Masalah', 'Desain Visual & Multimedia', 'Proyek Web Sederhana'],
  },
  {
    id: 's1',
    level: 'PERGURUAN TINGGI (S1)',
    step: '04',
    degree: 'Sarjana Komputer / Teknik Informatika',
    institution: 'Universitas / Institut Teknologi',
    period: '2020 — 2024',
    description:
      'Fokus mendalam pada Software Engineering, Human-Computer Interaction (HCI), Frontend Frameworks (React, TypeScript), serta animasi dan sistem desain interaktif modern.',
    highlights: ['Frontend Architecture & HCI', 'Sistem Desain & Web Modern', 'Creative Fullstack Development'],
  },
];

interface EducationTimelineProps {
  onStickyChange?: (isSticky: boolean) => void;
}

export const EducationTimeline: React.FC<EducationTimelineProps> = ({ onStickyChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolledPastTop = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolledPastTop / totalScrollable));
      setScrollPct(progress);

      const isSticky = scrolledPastTop > 0 && scrolledPastTop < totalScrollable;
      if (onStickyChange) {
        onStickyChange(isSticky);
      }

      const totalSteps = educationData.length;
      const step = Math.min(Math.floor(progress * totalSteps), totalSteps - 1);

      setActiveIndex((prev) => {
        if (step !== prev) {
          setDirection(step > prev ? 1 : -1);
          return step;
        }
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (onStickyChange) {
        onStickyChange(false);
      }
    };
  }, [onStickyChange]);

  const currentItem = educationData[activeIndex];

  const handleStepClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const startY = rect.top + scrollTop;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = startY + (index / (educationData.length - 1)) * totalHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[400vh]"
    >
      {/* Pinned Sticky Viewport: Locks in place for the full 400vh scroll duration */}
      <div className="sticky top-0 h-screen w-full flex items-start sm:items-center justify-center pt-20 sm:pt-0 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-10 md:px-12 py-3 sm:py-6 md:py-10 select-none">
          <div className="flex flex-col md:flex-row items-start gap-5 sm:gap-8 md:gap-14 lg:gap-20">
            {/* Left Column: Fixed Sticky Label & Interactive Vertical Timeline */}
            <div className="w-full md:w-64 lg:w-72 shrink-0">
              {/* Main Label */}
              <h3 className="text-[34px] sm:text-[44px] lg:text-[52px] font-black tracking-[-0.03em] text-[#2c2e2a] uppercase leading-none font-sans">
                EDUCATION
              </h3>
              <p className="mt-2 text-[13px] sm:text-[14px] font-bold text-[#2c2e2a]/60 uppercase tracking-[0.14em]">
                Perjalanan Edukasi
              </p>

              {/* Interactive Timeline Track (Desktop) */}
              <div className="hidden md:flex flex-col relative mt-8 space-y-7">
                {/* Base vertical track line */}
                <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-[#2c2e2a]/15 z-0" />

                {/* Dynamic animated progress fill */}
                <div
                  style={{ height: `${scrollPct * 100}%` }}
                  className="absolute left-[11px] top-3 max-h-[calc(100%-24px)] w-[2px] bg-[#2c2e2a] z-0 origin-top transition-all duration-150"
                />

                {/* Step Points */}
                {educationData.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  const isPassed = activeIndex >= idx;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleStepClick(idx)}
                      className="relative z-10 flex items-center gap-3.5 group text-left cursor-pointer transition-all duration-300"
                    >
                      {/* Circle Node Point */}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-[#2c2e2a] text-[#ffffff] scale-110'
                            : isPassed
                            ? 'bg-[#2c2e2a]/70 text-[#ffffff]'
                            : 'bg-[#f5f1e4] border-2 border-[#2c2e2a]/20 text-[#2c2e2a]/40 group-hover:border-[#2c2e2a]/60'
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            isActive ? 'bg-[#8ed462]' : isPassed ? 'bg-[#ffffff]' : 'bg-transparent'
                          }`}
                        />
                      </div>

                      {/* Step Name */}
                      <span
                        className={`text-[12px] font-black tracking-[0.12em] uppercase transition-colors duration-200 ${
                          isActive
                            ? 'text-[#2c2e2a]'
                            : isPassed
                            ? 'text-[#2c2e2a]/60'
                            : 'text-[#2c2e2a]/30 group-hover:text-[#2c2e2a]/60'
                        }`}
                      >
                        {item.step}. {item.id.toUpperCase()}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Step Indicators (Horizontal Pills) */}
              <div className="flex md:hidden items-center gap-2 mt-3">
                {educationData.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleStepClick(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? 'w-8 bg-[#2c2e2a]'
                        : 'w-2.5 bg-[#2c2e2a]/20 hover:bg-[#2c2e2a]/40'
                    }`}
                    aria-label={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Single Active Milestone Display (Seamless Flat, No White Container) */}
            <div className="w-full flex-1 min-h-[220px] sm:min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, y: direction * 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -direction * 28 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full"
                >
                  {/* Degree & Institution (Direct title without upper meta headers) */}
                  <h4 className="text-[26px] sm:text-[36px] md:text-[42px] font-black text-[#2c2e2a] tracking-tight leading-tight">
                    {currentItem.degree}
                  </h4>
                  <p className="mt-1 sm:mt-1.5 text-[15px] sm:text-[19px] font-bold text-[#2c2e2a]/75">
                    {currentItem.institution}
                  </p>

                  {/* Description */}
                  <p className="mt-3.5 sm:mt-5 text-[14px] sm:text-[17px] leading-[1.65] sm:leading-[1.7] text-[#2c2e2a]/85 max-w-2xl font-normal">
                    {currentItem.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
