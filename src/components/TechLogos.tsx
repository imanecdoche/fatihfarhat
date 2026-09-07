import React from 'react';
import {
  SiReact,
  SiVercel,
  SiVite,
  SiFirebase,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiClaude,
  SiBlender,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// Custom Flat Vector for Google Antigravity
export const GoogleAntigravityIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.59L8.41 12 13 7.41 14.41 8.83 11.24 12l3.17 3.17-1.41 1.42z" />
    <path d="M12 4a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm-1 4.41L15.59 12 11 16.59 9.59 15.17 12.76 12 9.59 8.83 11 7.41z" />
  </svg>
);

// Custom Flat Vector for Adobe Photoshop (Ps)
export const PhotoshopIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="4.5" fill="currentColor" />
    <path
      d="M6.5 16.5V7.5H10.2C11.8 7.5 12.8 8.5 12.8 9.9C12.8 11.4 11.8 12.3 10.2 12.3H8.5V16.5H6.5ZM8.5 10.7H10.1C10.9 10.7 11.3 10.3 11.3 9.9C11.3 9.4 10.9 9.1 10.1 9.1H8.5V10.7ZM14.1 14.4C14.4 14.8 15 15.1 15.8 15.1C16.6 15.1 17 14.7 17 14.2C17 13.6 16.5 13.3 15.4 13C14.1 12.7 13.3 12.1 13.3 11C13.3 9.8 14.4 9 15.8 9C16.8 9 17.5 9.3 18 9.9L17.2 11.1C16.8 10.7 16.3 10.4 15.7 10.4C15.1 10.4 14.7 10.7 14.7 11.1C14.7 11.5 15 11.7 16 12C17.4 12.3 18.3 12.9 18.3 14.1C18.3 15.4 17.2 16.3 15.6 16.3C14.5 16.3 13.6 15.8 13.2 15.1L14.1 14.4Z"
      fill="#f5f1e4"
    />
  </svg>
);

// Custom Flat Vector for Adobe Illustrator (Ai)
export const IllustratorIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="4.5" fill="currentColor" />
    <path
      d="M6 16.5L8.9 7.5H11L13.9 16.5H11.9L11.3 14.4H8.6L8 16.5H6ZM9 12.8H10.9L9.95 9.5L9 12.8ZM16 7.5C16.6 7.5 17 7.9 17 8.5C17 9.1 16.6 9.5 16 9.5C15.4 9.5 15 9.1 15 8.5C15 7.9 15.4 7.5 16 7.5ZM15.1 16.5V10.5H16.9V16.5H15.1Z"
      fill="#f5f1e4"
    />
  </svg>
);

export const techLogos = [
  { node: <SiReact />, title: "React.js", href: "https://react.dev" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiVite />, title: "Vite", href: "https://vite.dev" },
  { node: <GoogleAntigravityIcon size={38} />, title: "Google Antigravity", href: "https://about.google" },
  { node: <VscVscode />, title: "VS Code", href: "https://code.visualstudio.com" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiClaude />, title: "Claude", href: "https://claude.ai" },
  { node: <PhotoshopIcon size={38} />, title: "Adobe Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
  { node: <IllustratorIcon size={38} />, title: "Adobe Illustrator", href: "https://www.adobe.com/products/illustrator.html" },
  { node: <SiBlender />, title: "Blender", href: "https://www.blender.org" },
];
