import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  level: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}

const educationData: EducationItem[] = [
  {
    level: '01. SEKOLAH DASAR (SD)',
    degree: 'Pendidikan Dasar',
    institution: 'SD Negeri 01',
    period: '2008 — 2014',
    description:
      'Membangun pondasi rasa ingin tahu yang kuat terhadap sains, kreativitas seni visual, dan pengenalan awal terhadap teknologi komputer serta internet.',
    highlights: ['Dasar Logika & Matematika', 'Seni Rupa & Gambar', 'Pengenalan Komputer Awal'],
  },
  {
    level: '02. SEKOLAH MENENGAH PERTAMA (SMP)',
    degree: 'Pendidikan Menengah Pertama',
    institution: 'SMP Negeri 01',
    period: '2014 — 2017',
    description:
      'Mulai aktif mengeksplorasi software grafis digital, desain antarmuka dasar, dan menulis kode HTML/CSS pertama untuk kustomisasi template web.',
    highlights: ['Eksplorasi Desain Digital', 'Dasar Pemrograman Web', 'Klub Sains & Komputer'],
  },
  {
    level: '03. SEKOLAH MENENGAH ATAS (SMA / SMK)',
    degree: 'Pendidikan Menengah Atas / Kejuruan',
    institution: 'SMA Negeri 01 (Peminatan IPA / Rekayasa)',
    period: '2017 — 2020',
    description:
      'Memperdalam logika algoritma, sains analitik, dan prinsip desain multimedia. Membangun portofolio karya kreatif independen dan proyek antarmuka interaktif.',
    highlights: ['Algoritma & Pemecahan Masalah', 'Desain Visual & Multimedia', 'Proyek Web Sederhana'],
  },
  {
    level: '04. PERGURUAN TINGGI (S1)',
    degree: 'Sarjana Komputer / Teknik Informatika (S1)',
    institution: 'Universitas / Institut Teknologi',
    period: '2020 — 2024',
    description:
      'Fokus mendalam pada Software Engineering, Human-Computer Interaction (HCI), Frontend Frameworks (React, TypeScript), serta animasi dan sistem desain interaktif.',
    highlights: ['Frontend Architecture & HCI', 'Sistem Desain & Web Modern', 'Creative Fullstack Development'],
  },
];

export const EducationTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto px-5 sm:px-10 md:px-12 pt-10 pb-28 sm:pb-36"
    >
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-14 lg:gap-18 relative">
        {/* Sticky Left Sidebar: EDUCATION Label, Line & Node */}
        <div className="md:sticky md:top-28 lg:top-32 w-full md:w-64 lg:w-72 shrink-0 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start">
          <div>
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2c2e2a] text-[#ffffff] text-[11px] sm:text-[12px] font-black tracking-[0.16em] uppercase select-none">
              <GraduationCap size={14} strokeWidth={2.5} />
              <span>AKADEMIK</span>
            </div>

            {/* Main Sticky Label */}
            <h3 className="mt-3 text-[28px] sm:text-[36px] lg:text-[44px] font-black tracking-[-0.02em] text-[#2c2e2a] uppercase leading-none select-none font-sans">
              EDUCATION
            </h3>
            <p className="mt-1.5 text-[13px] sm:text-[14px] font-bold text-[#2c2e2a]/60 uppercase tracking-[0.14em]">
              Perjalanan Edukasi
            </p>
          </div>

          {/* Vertical Timeline Track in Sticky Sidebar (Desktop) */}
          <div className="hidden md:flex flex-col items-center relative mt-10 ml-4 h-64 lg:h-80">
            {/* Base Background Track Line */}
            <div className="w-[3px] h-full bg-[#2c2e2a]/15 rounded-full absolute top-0 left-1/2 -translate-x-1/2" />

            {/* Dynamic Progress Fill Line */}
            <motion.div
              style={{ height: progressHeight }}
              className="w-[3px] bg-[#2c2e2a] rounded-full absolute top-0 left-1/2 -translate-x-1/2 origin-top"
            />

            {/* Sticky Indicator Dot (Circle Point) */}
            <div className="relative z-20 w-6 h-6 rounded-full bg-[#ffffff] border-4 border-[#2c2e2a] flex items-center justify-center select-none top-0">
              <div className="w-2 h-2 rounded-full bg-[#2c2e2a]" />
            </div>
          </div>
        </div>

        {/* Right Content: Milestone Cards (SD to S1) */}
        <div className="w-full flex-1 space-y-6 sm:space-y-8 md:space-y-10">
          {educationData.map((item, index) => (
            <motion.div
              key={item.level}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full bg-[#ffffff] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 border-2 border-[#2c2e2a]/10 hover:border-[#2c2e2a] transition-colors duration-300 select-none group"
            >
              {/* Top Meta: Level & Period */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#2c2e2a]/10">
                <span className="text-[12px] sm:text-[13px] font-black tracking-[0.14em] text-[#2c2e2a] uppercase">
                  {item.level}
                </span>
                <span className="text-[12px] sm:text-[13px] font-mono font-bold text-[#2c2e2a]/60 bg-[#f5f1e4] px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>

              {/* Institution & Degree */}
              <h4 className="mt-4 text-[20px] sm:text-[24px] md:text-[26px] font-black text-[#2c2e2a] tracking-tight leading-snug">
                {item.degree}
              </h4>
              <p className="mt-1 text-[14px] sm:text-[16px] font-bold text-[#2c2e2a]/70">
                {item.institution}
              </p>

              {/* Description */}
              <p className="mt-3.5 text-[14px] sm:text-[16px] leading-[1.65] text-[#2c2e2a]/80 font-normal">
                {item.description}
              </p>

              {/* Highlights Chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-[11px] sm:text-[12px] font-bold tracking-wide px-3 py-1 rounded-full bg-[#f5f1e4] text-[#2c2e2a] border border-[#2c2e2a]/10 group-hover:border-[#2c2e2a]/30 transition-colors"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
