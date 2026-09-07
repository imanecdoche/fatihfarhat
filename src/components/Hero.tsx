import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 text-center"
    >
      <div className="w-full flex flex-col items-center justify-center">
        {/* Massive 1-Line Headline with Animated Cursor Selection */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="select-none flex flex-row items-center justify-center font-sans relative w-full"
        >
          {/* Relative text container wrapping the headline and selection overlays */}
          <div className="relative inline-block px-3 py-1">
            <h1 className="flex flex-col sm:flex-row items-center justify-center font-black tracking-[-0.02em] text-[#2c2e2a] uppercase select-none text-[17vw] leading-[0.88] sm:text-[80px] md:text-[100px] lg:text-[120px] sm:leading-none sm:whitespace-nowrap">
              <span>FATIH</span>
              <span className="sm:ml-4">FARHAT</span>
            </h1>

            {/* Selection Bounding Box Container - Starts expanding ONLY AFTER cursor arrives at top-left */}
            <motion.div
              initial={{ width: '0%', height: '0%', opacity: 0 }}
              animate={{
                // 0.0s - 1.2s (Phase 1): 0% (Waiting for cursor to enter & arrive at top-left)
                // 1.2s - 1.4s (Phase 1.5): Click/prepare at top-left (visible but 0% size)
                // 1.4s - 3.2s (Phase 2): Expands smoothly to 100%
                // 3.2s - 4.4s (Phase 3 & 4): Stays 100%
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
                  // Phase 1 (0 -> 0.27): Enters from outside viewport to top-left corner
                  // Phase 1.5 (0.27 -> 0.32): Subtle micro-pause / click before dragging
                  // Phase 2 (0.32 -> 0.72): Remains locked exactly at (0,0) relative to bottom-right corner as box expands
                  // Phase 3 (0.72 -> 0.82): Settles & pauses at completed bottom-right corner
                  // Phase 4 (0.82 -> 1.0): Glides out smoothly to the bottom-right beyond page
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

        {/* Larger Sub-headline centered */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 md:mt-6 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.3] font-medium text-[#2c2e2a]/80 max-w-2xl"
        >
          Selamat datang di portofolioku!
        </motion.p>

        {/* JELAJAHI Button - White Capsule, Black text, Invert on hover */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-14 md:mt-16"
        >
          <a
            href="#explore"
            className="inline-flex items-center justify-center px-9 sm:px-12 py-4 sm:py-4.5 rounded-[50px] bg-[#ffffff] text-[#2c2e2a] font-black text-[15px] sm:text-[17px] tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[#2c2e2a] hover:text-[#ffffff] active:scale-95 cursor-pointer"
          >
            JELAJAHI
          </a>
        </motion.div>
      </div>
    </section>
  );
};
