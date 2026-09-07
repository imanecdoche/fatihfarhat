import React from 'react';
import { motion } from 'framer-motion';

export const AboutBio: React.FC = () => {
  return (
    <section className="relative w-full max-w-4xl mx-auto px-6 sm:px-10 pt-6 sm:pt-12 pb-28 sm:pb-36 flex flex-col items-center text-center -translate-y-[80px] sm:translate-y-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col items-center"
      >
        {/* Placeholder Lingkaran Besar (Avatar / Foto Profil) - Zero Shadow, Flat Modern */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-[#ffffff] border-4 border-[#2c2e2a] flex items-center justify-center overflow-hidden select-none group transition-transform duration-300 hover:scale-[1.02]">
          {/* Subtle grid pattern background inside circle */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2c2e2a_1px,transparent_1px)] [background-size:12px_12px]" />
          
          {/* Default Placeholder Silhouette & Initials */}
          <div className="relative flex flex-col items-center justify-center text-[#2c2e2a]">
            <svg
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-[#2c2e2a]/40 group-hover:text-[#2c2e2a]/60 transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7ZM4 21C4 16.5817 7.58172 13 12 13C16.4183 13 20 16.5817 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21ZM12 15C8.68629 15 6 17.6863 6 20H18C18 17.6863 15.3137 15 12 15Z"
              />
            </svg>
            <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-[0.14em] text-[#2c2e2a]/60 mt-1">
              Foto Profil
            </span>
          </div>
        </div>

        {/* Heading & Subtitle */}
        <h2 className="mt-8 sm:mt-10 text-[24px] sm:text-[32px] md:text-[38px] font-black text-[#2c2e2a] tracking-[-0.01em] uppercase">
          Fatih Farhat
        </h2>
        <p className="mt-2 text-[13px] sm:text-[15px] font-bold text-[#2c2e2a]/60 uppercase tracking-[0.18em]">
          Vibe Coder & Fullstack Creative Developer
        </p>

        {/* Paragraf Biografi Dummy (Align Center) */}
        <div className="mt-6 sm:mt-8 space-y-4 max-w-2xl text-center">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.7] text-[#2c2e2a]/85 font-medium">
            Halo! Saya adalah seorang pengembang web dan kreator digital yang berfokus merancang pengalaman web interaktif, berkinerja tinggi, dan bernyawa. Memadukan estetika visual flat modern dengan kode yang modular dan efisien.
          </p>
          <p className="text-[15px] sm:text-[17px] md:text-[19px] leading-[1.7] text-[#2c2e2a]/75 font-normal">
            Berasal dari perpaduan antusiasme koding, desain antarmuka, dan komunikasi visual, saya senang mengeksplorasi ide-ide baru dan mentransformasikannya menjadi produk digital yang solutif serta menyenangkan untuk digunakan.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutBio;
