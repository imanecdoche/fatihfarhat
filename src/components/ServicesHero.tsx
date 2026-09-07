import React from 'react';
import { motion } from 'framer-motion';

interface ServicesHeroProps {
  onNavigateHome?: () => void;
}

export const ServicesHero: React.FC<ServicesHeroProps> = ({ onNavigateHome }) => {
  return (
    <section
      id="services"
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 text-center"
    >
      <div className="w-full flex flex-col items-center justify-center">
        {/* 2-Line Headline ("MY SKILLS") with Animated Cursor Selection */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="select-none flex flex-row items-center justify-center font-sans relative w-full"
        >
          {/* Relative text container wrapping the 2-line headline and selection overlays */}
          <div className="relative inline-block px-4 py-2">
            <h1 className="flex flex-col items-center justify-center font-black tracking-[-0.02em] text-[#2c2e2a] uppercase select-none text-[16vw] sm:text-[85px] md:text-[105px] lg:text-[120px] leading-[0.88]">
              <span>MY</span>
              <span>SKILLS</span>
            </h1>

            {/* Selection Bounding Box Container - Starts expanding ONLY AFTER cursor arrives at top-left */}
            <motion.div
              initial={{ width: '0%', height: '0%', opacity: 0 }}
              animate={{
                width: ['0%', '0%', '0%', '100%', '100%'],
                height: ['0%', '0%', '0%', '100%', '100%'],
                opacity: [0, 0, 1, 1, 1],
              }}
              transition={{
                duration: 4.4,
                times: [0, 0.27, 0.32, 0.72, 1],
                delay: 0.4,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="absolute top-0 left-0 pointer-events-none border-2 border-dashed border-[#2c2e2a]/70 rounded-none bg-transparent"
            >
              {/* Flat Sharp Corner Handles */}
              <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#ffffff] border-2 border-[#2c2e2a] rounded-none" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#ffffff] border-2 border-[#2c2e2a] rounded-none" />
              <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#ffffff] border-2 border-[#2c2e2a] rounded-none" />
              <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#ffffff] border-2 border-[#2c2e2a] rounded-none z-10" />

              {/* Cursor attached directly to bottom-right of expanding box */}
              <motion.div
                initial={{
                  x: '-50vw',
                  y: '-40vh',
                }}
                animate={{
                  x: ['-50vw', '0px', '0px', '0px', '0px', '55vw'],
                  y: ['-40vh', '0px', '0px', '0px', '0px', '45vh'],
                }}
                transition={{
                  duration: 4.4,
                  times: [0, 0.27, 0.32, 0.72, 0.82, 1],
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -right-1.5 -bottom-1.5 pointer-events-none z-30 flex flex-col items-start translate-x-[20px] translate-y-[20px]"
              >
                {/* Clean Standard Pointer SVG (No Shadow) */}
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#2c2e2a]"
                  style={{ overflow: 'visible' }}
                >
                  <path
                    d="M0 0V17.58c0 .45.54.67.85.35l4.63-4.63a.5.5 0 0 1 .35-.15h6.45c.45 0 .67-.54.35-.85L0.35 0.35A.5.5 0 0 0 0 0z"
                    fill="#2c2e2a"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Sub-headline centered */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 md:mt-6 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.3] font-medium text-[#2c2e2a]/80 max-w-2xl"
        >
          Keahlian teknologi, kapabilitas desain, dan layanan solusi digital profesional.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-14 md:mt-16"
        >
          <a
            href="#home"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
            className="inline-flex items-center justify-center px-9 sm:px-12 py-4 sm:py-4.5 rounded-[50px] bg-[#ffffff] text-[#2c2e2a] font-black text-[15px] sm:text-[17px] tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[#2c2e2a] hover:text-[#ffffff] active:scale-95 cursor-pointer select-none"
          >
            KEMBALI KE HOME
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
