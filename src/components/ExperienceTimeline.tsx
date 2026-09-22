import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItem {
  id: string;
  step: string;
  shortLabel: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 'fajrul-karim',
    step: '01',
    shortLabel: 'FAJRUL KARIM',
    role: 'Multimedia & Tech Creative Staff',
    organization: 'Yayasan Fajrul Karim',
    period: 'Juli 2023 — Oktober 2024',
    description:
      'Mengelola infrastruktur multimedia, pemeliharaan aset digital web, otomatisasi alur publikasi informasi lembaga, dan standardisasi dokumentasi teknis institusi pendidikan.',
  },
  {
    id: 'logos',
    step: '02',
    shortLabel: 'LOGOS CENTER',
    role: 'Technical & Language Instructor',
    organization: 'LOGOS Course Center',
    period: 'November 2024 — Maret 2025',
    description:
      'Merancang kurikulum pelatihan teknis dan materi instruksional interaktif, memandu pemecahan masalah logika digital, serta membimbing siswa dalam komunikasi teknologi.',
  },
  {
    id: 'megasoccer',
    step: '03',
    shortLabel: 'MEGASOCCER',
    role: 'Technical Production Operator',
    organization: 'Megasoccer Jersey',
    period: 'Mei 2025 — September 2025',
    description:
      'Mengoperasikan mesin cetak industri dan alur pre-press digital berakurasi tinggi dengan software RIP, memastikan efisiensi teknis, kalibrasi sistem warna, dan keandalan operasional.',
  },
  {
    id: 'passion',
    step: '04',
    shortLabel: 'PASSION ABADI',
    role: 'Product & Presentation Specialist',
    organization: 'PT Passion Abadi Korpora',
    period: 'Oktober 2025 — Januari 2026',
    description:
      'Mengembangkan materi presentasi visual korporat tingkat tinggi, visualisasi interaktif produk digital, dan optimalisasi alur komunikasi pemasaran berbasis teknologi.',
  },
  {
    id: 'benua-jaya-gold',
    step: '05',
    shortLabel: 'BENUA JAYA GOLD',
    role: 'Customer Advisory & Gold Specialist',
    organization: 'Benua Jaya Gold',
    period: 'Maret 2026 — April 2026',
    description:
      'Melayani customer secara profesional dan memberikan edukasi komprehensif seputar karakteristik, kadar kemurnian, serta pemilihan logam mulia dan perhiasan emas berkualitas.',
  },
];

interface ExperienceTimelineProps {
  onStickyChange?: (isSticky: boolean) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ onStickyChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolledPastTop = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolledPastTop / totalScrollable));

      const isSticky = scrolledPastTop > 0 && scrolledPastTop < totalScrollable;
      if (onStickyChange) {
        onStickyChange(isSticky);
      }

      const totalSteps = experienceData.length;
      // Plateau buffer: mencapai milestone ke-5 (Benua Jaya Gold) lebih awal dan stabil sebelum batas scroll bawah
      const effectiveProgress = Math.min(1, progress / 0.82);
      const step = Math.min(Math.floor(effectiveProgress * totalSteps), totalSteps - 1);

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

  const currentItem = experienceData[activeIndex];

  const handleStepClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const startY = rect.top + scrollTop;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetFraction = (index + 0.45) / experienceData.length;
    const targetScroll = startY + Math.min(0.98, targetFraction * 0.82) * totalHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full h-[520vh]"
    >
      {/* Pinned Sticky Viewport: Locks in place for the full 400vh scroll duration */}
      <div className="sticky top-0 h-screen w-full flex items-start sm:items-center justify-center pt-20 sm:pt-0 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-10 md:px-12 py-3 sm:py-6 md:py-10 select-none">
          <div className="flex flex-col md:flex-row items-start gap-5 sm:gap-8 md:gap-14 lg:gap-20">
            {/* Left Column: Fixed Sticky Label & Interactive Vertical Timeline */}
            <div className="w-full md:w-64 lg:w-72 shrink-0">
              {/* Main Label */}
              <h3 className="text-[34px] sm:text-[44px] lg:text-[52px] font-black tracking-[-0.03em] text-[#2c2e2a] uppercase leading-none font-sans">
                EXPERIENCE
              </h3>
              <p className="mt-2 text-[13px] sm:text-[14px] font-bold text-[#2c2e2a]/60 uppercase tracking-[0.14em]">
                Riwayat Pekerjaan
              </p>

              {/* Interactive Timeline Track (Desktop) */}
              <div className="hidden md:flex flex-col relative mt-9">
                {experienceData.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  const isPassed = activeIndex >= idx;
                  const isLast = idx === experienceData.length - 1;
                  const isSegmentActive = activeIndex > idx;

                  return (
                    <div key={item.id} className="relative flex flex-col">
                      {/* Milestone Row */}
                      <button
                        type="button"
                        onClick={() => handleStepClick(idx)}
                        className="relative z-10 flex items-center gap-4 group text-left cursor-pointer transition-all duration-300 select-none py-1.5"
                      >
                        {/* Single Solid Dot (18px) */}
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
                          {item.step}. {item.shortLabel}
                        </span>
                      </button>

                      {/* Continuous Connector Line to Next Dot (zero gap between dots) */}
                      {!isLast && (
                        <div className="relative ml-[7px] w-[4px] h-7 my-[-2px] z-0">
                          {/* Base Track */}
                          <div className="absolute inset-0 w-full bg-[#d5d5d4]" />
                          {/* Active Filled Segment */}
                          <div
                            className={`absolute inset-0 w-full bg-[#2c2e2a] transition-all duration-300 ease-out ${
                              isSegmentActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                            } origin-top`}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Step Indicators (Horizontal Pills, 100% solid) */}
              <div className="flex md:hidden items-center gap-2 mt-3">
                {experienceData.map((item, idx) => (
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
                  {/* Role Title & Organization (Direct title without upper meta headers) */}
                  <h4 className="text-[26px] sm:text-[36px] md:text-[42px] font-black text-[#2c2e2a] tracking-tight leading-tight">
                    {currentItem.role}
                  </h4>
                  <p className="mt-1 sm:mt-1.5 text-[15px] sm:text-[19px] font-bold text-[#2c2e2a]/75">
                    {currentItem.organization}{' '}
                    <span className="font-medium text-[#2c2e2a]/50">({currentItem.period})</span>
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

export default ExperienceTimeline;
