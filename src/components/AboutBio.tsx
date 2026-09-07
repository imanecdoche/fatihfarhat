import React, { useRef, useState, useEffect, useMemo } from 'react';
import profilePic from '../assets/me.jpeg';

interface AboutBioProps {
  onStickyChange?: (isSticky: boolean) => void;
}

const paragraph1Text =
  'Halo! Saya adalah seorang pengembang web dan kreator digital yang berfokus merancang pengalaman web interaktif, berkinerja tinggi, dan bernyawa. Memadukan estetika visual flat modern dengan kode yang modular dan efisien.';

const paragraph2Text =
  'Berasal dari perpaduan antusiasme koding, desain antarmuka, dan komunikasi visual, saya senang mengeksplorasi ide-ide baru dan mentransformasikannya menjadi produk digital yang solutif serta menyenangkan untuk digunakan.';

export const AboutBio: React.FC<AboutBioProps> = ({ onStickyChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolledPastTop = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolledPastTop / totalScrollable));
      setScrollProgress(progress);

      const isSticky = scrolledPastTop > 0 && scrolledPastTop < totalScrollable;
      if (onStickyChange) {
        onStickyChange(isSticky);
      }
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

  // Total characters across both paragraphs
  const totalChars1 = paragraph1Text.length;
  const totalChars2 = paragraph2Text.length;
  const totalChars = totalChars1 + totalChars2;

  // Current number of typed characters based on scrollProgress (0 to 1)
  const currentTypedCount = Math.round(scrollProgress * totalChars);

  // Split paragraphs into words to maintain fixed word-wrapping boundaries
  const wordsP1 = useMemo(() => {
    let runningIndex = 0;
    return paragraph1Text.split(' ').map((word) => {
      const chars = word.split('').map((char) => ({
        char,
        index: runningIndex++,
      }));
      // account for the space character
      runningIndex++;
      return chars;
    });
  }, []);

  const wordsP2 = useMemo(() => {
    let runningIndex = totalChars1;
    return paragraph2Text.split(' ').map((word) => {
      const chars = word.split('').map((char) => ({
        char,
        index: runningIndex++,
      }));
      // account for the space character
      runningIndex++;
      return chars;
    });
  }, [totalChars1]);

  return (
    <section ref={containerRef} className="relative w-full h-[260vh]">
      {/* Pinned Sticky Screen Content */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 py-6 sm:py-10 flex flex-col items-center text-center select-none">
          {/* Lingkaran Foto Profil Asli (me.jpeg) - Zero Shadow, Flat Modern */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-[#ffffff] border-4 border-[#2c2e2a] flex items-center justify-center overflow-hidden select-none group transition-transform duration-300 hover:scale-[1.02] shrink-0">
            <img
              src={profilePic}
              alt="Fatih Farhat"
              className="w-full h-full object-cover select-none pointer-events-none"
              loading="lazy"
            />
          </div>

          {/* Heading & Subtitle */}
          <h2 className="mt-5 sm:mt-7 text-[22px] sm:text-[30px] md:text-[36px] font-black text-[#2c2e2a] tracking-[-0.01em] uppercase leading-none">
            Fatih Farhat
          </h2>
          <p className="mt-2 text-[12px] sm:text-[14px] font-bold text-[#2c2e2a]/60 uppercase tracking-[0.18em]">
            Vibe Coder & Fullstack Creative Developer
          </p>

          {/* Paragraf Biografi dengan Fixed Word Boundaries & Zero-Shift Typing */}
          <div className="mt-5 sm:mt-7 space-y-3.5 sm:space-y-4 max-w-2xl text-center">
            {/* Paragraph 1 */}
            <p className="text-[15px] sm:text-[17px] md:text-[19px] leading-[1.65] sm:leading-[1.7] font-medium min-h-[4.8em]">
              {wordsP1.map((wordChars, wIdx) => (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {wordChars.map(({ char, index }) => {
                    const isRevealed = index < currentTypedCount;
                    const isCursor =
                      currentTypedCount < totalChars1
                        ? index === currentTypedCount - 1
                        : currentTypedCount === totalChars1 && index === totalChars1 - 1;

                    return (
                      <span key={index} className="relative inline">
                        <span
                          className={
                            isRevealed
                              ? 'text-[#2c2e2a] opacity-100 transition-opacity duration-75'
                              : 'opacity-0 select-none pointer-events-none'
                          }
                        >
                          {char}
                        </span>
                        {isCursor && (
                          <span className="absolute left-full top-[10%] bottom-[10%] w-[2.5px] bg-[#2c2e2a] animate-typing-cursor z-10 pointer-events-none" />
                        )}
                      </span>
                    );
                  })}
                  {/* Fixed trailing space */}
                  <span className="inline opacity-100">&nbsp;</span>
                </span>
              ))}
            </p>

            {/* Paragraph 2 */}
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.65] sm:leading-[1.7] font-normal min-h-[4.8em]">
              {wordsP2.map((wordChars, wIdx) => (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {wordChars.map(({ char, index }) => {
                    const isRevealed = index < currentTypedCount;
                    const isCursor =
                      currentTypedCount >= totalChars1 &&
                      (index === currentTypedCount - 1 ||
                        (currentTypedCount === totalChars && index === totalChars - 1));

                    return (
                      <span key={index} className="relative inline">
                        <span
                          className={
                            isRevealed
                              ? 'text-[#2c2e2a]/80 opacity-100 transition-opacity duration-75'
                              : 'opacity-0 select-none pointer-events-none'
                          }
                        >
                          {char}
                        </span>
                        {isCursor && (
                          <span className="absolute left-full top-[10%] bottom-[10%] w-[2.5px] bg-[#2c2e2a] animate-typing-cursor z-10 pointer-events-none" />
                        )}
                      </span>
                    );
                  })}
                  {/* Fixed trailing space */}
                  <span className="inline opacity-100">&nbsp;</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBio;
