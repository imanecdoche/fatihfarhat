import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type PageName = 'home' | 'about' | 'portfolio' | 'services' | 'contact';

export interface HeroNavButtonsProps {
  prevPage: PageName;
  prevLabel: string;
  nextPage: PageName;
  nextLabel: string;
  onNavigate?: (page: PageName) => void;
  className?: string;
}

export const HeroNavButtons: React.FC<HeroNavButtonsProps> = ({
  prevPage,
  prevLabel,
  nextPage,
  nextLabel,
  onNavigate,
  className = 'mt-12 sm:mt-14 md:mt-16',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 select-none ${className}`}
    >
      <a
        href={`#${prevPage}`}
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate(prevPage);
          }
        }}
        className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-[50px] bg-[#ffffff] text-[#2c2e2a] font-black text-[13px] sm:text-[15px] md:text-[16px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#2c2e2a] hover:text-[#ffffff] active:scale-95 cursor-pointer group"
      >
        <ChevronLeft
          size={18}
          strokeWidth={2.5}
          className="transition-transform duration-200 group-hover:-translate-x-1 shrink-0"
        />
        <span>{prevLabel}</span>
      </a>

      <a
        href={`#${nextPage}`}
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate(nextPage);
          }
        }}
        className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-[50px] bg-[#ffffff] text-[#2c2e2a] font-black text-[13px] sm:text-[15px] md:text-[16px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#2c2e2a] hover:text-[#ffffff] active:scale-95 cursor-pointer group"
      >
        <span>{nextLabel}</span>
        <ChevronRight
          size={18}
          strokeWidth={2.5}
          className="transition-transform duration-200 group-hover:translate-x-1 shrink-0"
        />
      </a>
    </motion.div>
  );
};

export default HeroNavButtons;
