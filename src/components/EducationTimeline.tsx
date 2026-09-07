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
              <div className="hidden md:flex flex-col relative mt-9 space-y-8">
                {/* Base vertical track line (+2pt thicker: 4px width, 100% solid opaque, no alpha) */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[4px] bg-[#d5d5d4] rounded-full z-0" />

                {/* Dynamic animated progress fill (same 4px width) */}
                <div
                  style={{ height: `${scrollPct * 100}%` }}
                  className="absolute left-[7px] top-2 max-h-[calc(100%-16px)] w-[4px] bg-[#2c2e2a] rounded-full z-0 origin-top transition-all duration-150"
                />

                {/* Step Points (Single Solid Dot with matching 100% solid color, no alpha/blend) */}
                {educationData.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  const isPassed = activeIndex >= idx;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleStepClick(idx)}
                      className="relative z-10 flex items-center gap-4 group text-left cursor-pointer transition-all duration-300 select-none"
                    >
                      {/* Single Solid Dot (100% solid opacity, perfectly covers track behind it) */}
                      <div
                        className={`w-[18px] h-[18px] rounded-full transition-all duration-300 shrink-0 ${
                          isActive
                            ? 'bg-[#2c2e2a] scale-125'
                            : isPassed
                            ? 'bg-[#2c2e2a]'
                            : 'bg-[#d5d5d4] group-hover:bg-[#b8b5ab]'
                        }`}
                      />

                      {/* Step Name (+5px larger: text-[17px], 100% solid color) */}
                      <span
                        className={`text-[17px] font-black tracking-[0.14em] uppercase transition-colors duration-200 ${
                          isActive
                            ? 'text-[#2c2e2a]'
                            : isPassed
                            ? 'text-[#6b6963]'
                            : 'text-[#9c9991] group-hover:text-[#6b6963]'
                        }`}
                      >
                        {item.step}. {item.id.toUpperCase()}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Step Indicators (Horizontal Pills, 100% solid) */}
              <div className="flex md:hidden items-center gap-2 mt-3">
                {educationData.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleStepClick(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? 'w-8 bg-[#2c2e2a]'
                        : 'w-2.5 bg-[#d5d5d4] hover:bg-[#b8b5ab]'
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
