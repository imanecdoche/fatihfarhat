import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/me.jpeg';

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
        {/* Lingkaran Foto Profil Asli (me.jpeg) - Zero Shadow, Flat Modern */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-[#ffffff] border-4 border-[#2c2e2a] flex items-center justify-center overflow-hidden select-none group transition-transform duration-300 hover:scale-[1.02]">
          <img
            src={profilePic}
            alt="Fatih Farhat"
            className="w-full h-full object-cover select-none pointer-events-none"
            loading="lazy"
          />
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
