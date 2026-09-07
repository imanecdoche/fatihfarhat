import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import './LogoLoop.css';

export interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({
  logos = [],
  speed = 60,
  direction = 'left',
  logoHeight = 44,
  gap = 48,
  hoverSpeed,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#f5f1e4',
  ariaLabel = 'Technology logos loop',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackSize, setTrackSize] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const isVertical = direction === 'up' || direction === 'down';
  const isReverse = direction === 'right' || direction === 'down';

  const basePos = useMotionValue(0);

  useEffect(() => {
    const updateSize = () => {
      if (trackRef.current) {
        if (isVertical) {
          setTrackSize(trackRef.current.offsetHeight);
        } else {
          setTrackSize(trackRef.current.offsetWidth);
        }
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [logos, gap, isVertical]);

  function wrap(min: number, max: number, v: number) {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const offset = useTransform(basePos, (v) => {
    if (trackSize === 0) return '0px';
    return `${wrap(-trackSize, 0, v)}px`;
  });

  useAnimationFrame((_, delta) => {
    if (trackSize === 0) return;

    let currentSpeed = speed;
    if (isHovered && hoverSpeed !== undefined) {
      currentSpeed = hoverSpeed;
    }

    const moveBy = (currentSpeed * (delta / 1000)) * (isReverse ? 1 : -1);
    basePos.set(basePos.get() + moveBy);
  });

  // Render 3 copies to ensure a seamless unbroken infinite loop
  const copies = [0, 1, 2];

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden select-none ${className}`}
      style={{
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        width: '100%',
        height: isVertical ? '100%' : 'auto',
      }}
    >
      {/* Fade out gradient overlays */}
      {fadeOut && !isVertical && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-16 sm:w-28 md:w-36"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-16 sm:w-28 md:w-36"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      {fadeOut && isVertical && (
        <>
          <div
            className="absolute left-0 right-0 top-0 z-10 pointer-events-none h-12 sm:h-16"
            style={{
              background: `linear-gradient(to bottom, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none h-12 sm:h-16"
            style={{
              background: `linear-gradient(to top, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <motion.div
        style={{
          display: 'flex',
          flexDirection: isVertical ? 'column' : 'row',
          x: isVertical ? 0 : offset,
          y: isVertical ? offset : 0,
          willChange: 'transform',
        }}
      >
        {copies.map((copyIdx) => (
          <div
            key={copyIdx}
            ref={copyIdx === 0 ? trackRef : null}
            style={{
              display: 'flex',
              flexDirection: isVertical ? 'column' : 'row',
              alignItems: 'center',
              gap: `${gap}px`,
              paddingRight: isVertical ? 0 : `${gap}px`,
              paddingBottom: isVertical ? `${gap}px` : 0,
              flexShrink: 0,
            }}
          >
            {logos.map((logo, idx) => {
              const content = (
                <div
                  className="inline-flex items-center justify-center transition-transform duration-200"
                  style={{
                    height: `${logoHeight}px`,
                    transform: scaleOnHover ? 'scale(1)' : undefined,
                  }}
                  title={logo.title || logo.alt}
                >
                  {logo.node ? (
                    <span
                      className="inline-flex items-center justify-center"
                      style={{
                        fontSize: `${logoHeight}px`,
                        lineHeight: 1,
                      }}
                    >
                      {logo.node}
                    </span>
                  ) : logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.alt || logo.title || 'Logo'}
                      style={{
                        height: `${logoHeight}px`,
                        width: 'auto',
                        objectFit: 'contain',
                      }}
                    />
                  ) : null}
                </div>
              );

              if (logo.href) {
                return (
                  <a
                    key={`${copyIdx}-${idx}`}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none cursor-pointer text-inherit"
                    aria-label={logo.title || logo.alt || 'Logo Link'}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={`${copyIdx}-${idx}`}>
                  {content}
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
