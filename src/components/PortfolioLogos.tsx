import React from 'react';
import { SiSteam, SiTiktok, SiValve } from 'react-icons/si';

// Adobe Logo Flat Vector
export const AdobeLogo: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M13.96 3H24v18l-5.63-14.39L13.96 3zM10.04 3H0v18l5.63-14.39L10.04 3zm1.96 7.74l3.75 9.26h-3.03l-1.39-3.64h-3.41l3.08-5.62z" />
  </svg>
);

// Tokopedia Logo Flat Vector
export const TokopediaLogo: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.14 2.52 7.7 6.11 9.24.16-.67.49-1.92.49-1.92s-.13-.25-.13-.62c0-.58.34-1.01.76-1.01.36 0 .53.27.53.59 0 .36-.23.9-.35 1.4-.1.42.21.76.62.76.74 0 1.31-.78 1.31-1.9 0-1-.73-1.7-1.75-1.7-1.28 0-2.03.96-2.03 1.95 0 .39.15.8.34.98.04.04.04.08.03.13-.04.16-.13.52-.15.59-.02.09-.08.11-.18.06-1.05-.49-1.54-1.8-1.54-2.9 0-2.36 1.72-4.53 4.95-4.53 2.6 0 4.62 1.85 4.62 4.33 0 2.58-1.63 4.66-3.89 4.66-.76 0-1.47-.39-1.72-.85l-.47 1.78c-.17.65-.63 1.47-.94 1.96 1.01.31 2.08.48 3.19.48 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

// Marvel Studios Flat Vector
export const MarvelLogo: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size * 2} height={size} viewBox="0 0 60 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="24" rx="2" fill="currentColor" />
    <path d="M5 19V5h3.2l2.3 8.2L12.8 5H16v14h-2.5V9.4L11.7 19H9.8L8 9.4V19H5zm14 0V5h5.5c1.8 0 3 1.2 3 3 0 1.2-.6 2.2-1.7 2.6L28 19h-2.9l-1.8-7.5H21.5V19H19zm2.5-9.5h2.8c.6 0 1-.4 1-1s-.4-1-1-1h-2.8v2zm10 9.5L28.2 5h2.8l2.2 10.5L35.4 5h2.8L34.9 19h-3.4zm9.5 0V5h6.5v2.2H43v3.7h3.8v2.2H43v3.7h4.8V19H41zm9.5 0V5h2.5v11.8h4.2V19h-6.7z" fill="#f5f1e4" />
  </svg>
);

// GoTo Flat Vector
export const GotoLogo: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size * 1.8} height={size} viewBox="0 0 54 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c3.85 0 7.05-2.72 7.82-6.33H12v-3.33h11.45C23.8 11 24 11.5 24 12c0 6.63-5.37 12-12 12S0 18.63 0 12 5.37 0 12 0c3.5 0 6.67 1.49 8.89 3.89l-2.48 2.48C16.92 4.88 14.63 4 12 4z" />
    <circle cx="34" cy="12" r="6" />
    <path d="M48 6h4v12h-4v-2c-.85 1.3-2.3 2-4 2-3.3 0-6-2.7-6-6s2.7-6 6-6c1.7 0 3.15.7 4 2V6zm-4 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
  </svg>
);

// MICO Flat Vector
export const MicoLogo: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size * 1.6} height={size} viewBox="0 0 48 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19V5h3.5l4.5 8.5L16.5 5H20v14h-3.2v-8.8L12.5 18h-1L7.2 10.2V19H4zm19 0V5h3.2v14H23zm6 0V5h7c2.8 0 5 2.2 5 5s-2.2 5-5 5h-3.8v4H29zm3.2-7h3.5c1.1 0 2-.9 2-2s-.9-2-2-2h-3.5v4zm10.8 7c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-3c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" />
  </svg>
);

// Moonton Games Flat Vector
export const MoontonLogo: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size * 2} height={size} viewBox="0 0 64 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19V5h3.2l4.8 9.2L16.8 5H20v14h-3V9.6L12.6 18h-1.2L7 9.6V19H4zm19 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-3c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm13 3c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-3c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm8 3V5h3.2l6.8 9.6V5H53v14h-3.2L43 9.4V19H40zm16-11h-3V5h9v3h-3v11h-3V8z" />
  </svg>
);

// ForceOrg / Salesforce Flat Vector
export const ForceOrgLogo: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size * 1.8} height={size} viewBox="0 0 54 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8 7.2C12.3 4.5 15.2 2.7 18.6 2.7c4.1 0 7.5 2.6 8.7 6.3 1.3-.6 2.7-.9 4.2-.9 5.3 0 9.6 4.3 9.6 9.6 0 .5-.05 1.1-.13 1.6-1.5.5-3.1.7-4.8.7H8.7c-4.8 0-8.7-3.9-8.7-8.7 0-4.3 3.1-7.8 7.2-8.5.8 2 2.2 3.6 3.6 4.4z" />
    <path d="M28 14h-4v-2h4c1.1 0 2-.9 2-2s-.9-2-2-2h-6v10h2v-4h4c2.2 0 4-1.8 4-4s-1.8-4-4-4zm8 0h3v4h-3v-4zm6-6h2v10h-2V8zm6 4h4v2h-4v4h-2V8h6v2h-4v2z" fill="#f5f1e4" />
  </svg>
);

export const portfolioLogos = [
  { node: <AdobeLogo size={28} />, title: "Adobe", href: "https://www.adobe.com" },
  { node: <TokopediaLogo size={28} />, title: "Tokopedia", href: "https://www.tokopedia.com" },
  { node: <SiSteam />, title: "Steam", href: "https://store.steampowered.com" },
  { node: <MarvelLogo size={28} />, title: "Marvel Studios", href: "https://www.marvel.com" },
  { node: <GotoLogo size={28} />, title: "GoTo", href: "https://www.gotocompany.com" },
  { node: <SiTiktok />, title: "TikTok", href: "https://www.tiktok.com" },
  { node: <MicoLogo size={28} />, title: "MICO", href: "https://www.micous.com" },
  { node: <MoontonLogo size={28} />, title: "Moonton", href: "https://www.moonton.com" },
  { node: <SiValve />, title: "Valve", href: "https://www.valvesoftware.com" },
  { node: <ForceOrgLogo size={28} />, title: "ForceOrg", href: "https://force.com" },
];
