import React, { useRef, useState, useEffect, useCallback } from 'react';
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
  logoHeight = 28,
  gap = 40,
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
  const [numCopies, setNumCopies] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  const isVertical = direction === 'up' || direction === 'down';
  const isReverse = direction === 'right' || direction === 'down';

  const basePos = useMotionValue(0);

  const updateSize = useCallback(() => {
    if (trackRef.current) {
      const size = isVertical
        ? trackRef.current.offsetHeight
        : trackRef.current.offsetWidth;

      if (size > 0) {
        setTrackSize(size);
        const containerDim = containerRef.current
          ? isVertical
            ? containerRef.current.offsetHeight
            : containerRef.current.offsetWidth
          : (typeof window !== 'undefined' ? window.innerWidth : 1200);

        // Ensure we always have enough copies to seamlessly wrap beyond the viewport
        const needed = Math.max(4, Math.ceil((containerDim * 2) / size) + 2);
        setNumCopies(needed);
      }
    }
  }, [isVertical]);

  useEffect(() => {
    updateSize();

    // Use ResizeObserver to detect when images finish loading or track size adjusts
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        updateSize();
      });

      if (trackRef.current) {
        ro.observe(trackRef.current);
      }
      if (containerRef.current) {
        ro.observe(containerRef.current);
      }
    }

    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
      if (ro) ro.disconnect();
    };
  }, [updateSize, logos, gap]);

  function wrap(min: number, max: number, v: number) {
    const range = max - min;
    if (range <= 0) return 0;
    return ((((v - min) % range) + range) % range) + min;
  }

  const offset = useTransform(basePos, (v) => {
    if (trackSize === 0) return '0px';
    return `${wrap(-trackSize, 0, v)}px`;
  });

  useAnimationFrame((_, delta) => {
    if (trackSize === 0) return;

    // Cap delta at 32ms (~30fps drop) to prevent big jumps on tab switch/wake
    const dt = Math.min(delta, 32);

    let currentSpeed = speed;
    if (isHovered && hoverSpeed !== undefined) {
      currentSpeed = hoverSpeed;
    }

    const moveBy = (currentSpeed * (dt / 1000)) * (isReverse ? 1 : -1);
    basePos.set(basePos.get() + moveBy);
  });

  const copiesArray = Array.from({ length: numCopies }, (_, i) => i);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden select-none py-3 sm:py-5 ${className}`}
      style={{
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        width: '100%',
        minHeight: `${logoHeight + 20}px`,
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
          alignItems: 'center',
          x: isVertical ? 0 : offset,
          y: isVertical ? offset : 0,
          willChange: 'transform',
        }}
      >
        {copiesArray.map((copyIdx) => (
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
                  className="inline-flex items-center justify-center transition-transform duration-200 overflow-visible"
                  style={{
                    height: `${logoHeight}px`,
                    maxHeight: `${logoHeight}px`,
                    minWidth: `${logoHeight}px`,
                    transform: scaleOnHover ? 'scale(1)' : undefined,
                  }}
                  title={logo.title || logo.alt}
                >
                  {logo.node ? (
                    <span
                      className="inline-flex items-center justify-center overflow-visible"
                      style={{
                        fontSize: `${logoHeight}px`,
                        height: `${logoHeight}px`,
                        lineHeight: 1,
                      }}
                    >
                      {logo.node}
                    </span>
                  ) : logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.alt || logo.title || 'Logo'}
                      onLoad={updateSize}
                      style={{
                        height: `${logoHeight}px`,
                        maxHeight: `${logoHeight}px`,
                        width: 'auto',
                        maxWidth: 'none',
                        objectFit: 'contain',
                        display: 'block',
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
                    className="focus:outline-none cursor-pointer text-inherit inline-flex items-center justify-center"
                    aria-label={logo.title || logo.alt || 'Logo Link'}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={`${copyIdx}-${idx}`} className="inline-flex items-center justify-center">
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
