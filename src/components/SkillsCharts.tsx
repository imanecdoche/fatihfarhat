import React from 'react';
import { motion } from 'framer-motion';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

interface SkillItem {
  id: string;
  name: string;
  level: string;
  percentage: number;
  icon: string;
  description: string;
  color?: string;
  isLearning?: boolean;
}

interface SkillCategory {
  id: string;
  categoryNumber: string;
  title: string;
  subtitle: string;
  hasChart?: boolean;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    categoryNumber: '01',
    title: 'Kompetensi Bahasa & Linguistik',
    subtitle: '',
    skills: [
      {
        id: 'lang-id',
        name: 'Bahasa Indonesia',
        level: 'Native / Fasih',
        percentage: 78,
        icon: '/icons/flag_3d_id.png',
        description: 'Bahasa ibu, penulisan formal naskah akademik, sastra, dan publikasi digital.',
        color: '#2c2e2a',
      },
      {
        id: 'lang-gb',
        name: 'Bahasa Inggris',
        level: 'Tingkat Lanjut (B2-C1)',
        percentage: 75,
        icon: '/icons/flag_3d_gb.png',
        description: 'Komunikasi teknis global, dokumentasi API, artikel, dan ekspresi profesional.',
        color: '#8ed462',
      },
      {
        id: 'lang-sa',
        name: 'Bahasa Arab',
        level: 'Menengah (B1)',
        percentage: 71,
        icon: '/icons/flag_3d_sa.png',
        description: 'Pemahaman gramatikal nahwu-sharaf, literatur klasik, dan teks keagamaan.',
        color: '#3a86ff',
      },
      {
        id: 'lang-es',
        name: 'Bahasa Spanyol',
        level: 'Tingkat Dasar (A2)',
        percentage: 69,
        icon: '/icons/flag_3d_es.png',
        description: 'Percakapan harian mendasar, fonetik, dan pemahaman frasa esensial.',
        color: '#e76f51',
      },
    ],
  },
  {
    id: 'frontend',
    categoryNumber: '02',
    title: 'Bahasa Pemrograman — Frontend Engineering',
    subtitle: 'Arsitektur komponen interaktif, styling utility-first, dan ekosistem modern web.',
    skills: [
      {
        id: 'tech-react',
        name: 'React.js',
        level: 'Spesialis / Mahir',
        percentage: 78,
        icon: '/icons/react.svg',
        description: 'Arsitektur SPA modular, custom hooks, context management, & optimasi render.',
        color: '#8ed462',
      },
      {
        id: 'tech-nextjs',
        name: 'Next.js',
        level: 'Tingkat Lanjut',
        percentage: 76,
        icon: '/icons/nextjs.svg',
        description: 'App Router, Server Components, SSR/SSG, dynamic routing, & optimasi SEO.',
        color: '#2c2e2a',
      },
      {
        id: 'tech-tailwind',
        name: 'Tailwind CSS',
        level: 'Spesialis / Mahir',
        percentage: 77,
        icon: '/icons/tailwind.svg',
        description: 'Penerapan 8-pt grid system, design tokens, utility classes, & zero bloat.',
        color: '#2a9d8f',
      },
      {
        id: 'tech-ts',
        name: 'TypeScript',
        level: 'Tingkat Lanjut',
        percentage: 77,
        icon: '/icons/typescript.svg',
        description: 'Strict type safety, generics, interfaces modeling, & kode enterprise bebas bug.',
        color: '#3a86ff',
      },
      {
        id: 'tech-js',
        name: 'JavaScript (ES6+)',
        level: 'Spesialis / Mahir',
        percentage: 76,
        icon: '/icons/javascript.svg',
        description: 'Async/await, DOM APIs, Web APIs, functional programming, & event handling.',
        color: '#f4a261',
      },
      {
        id: 'tech-html5',
        name: 'HTML5 Semantik',
        level: 'Ahli / Fondasi',
        percentage: 78,
        icon: '/icons/html5.svg',
        description: 'Struktur semantik ramah SEO, a11y aksesibilitas, audio/canvas web APIs.',
        color: '#e76f51',
      },
      {
        id: 'tech-css3',
        name: 'CSS3 Modern',
        level: 'Tingkat Lanjut',
        percentage: 75,
        icon: '/icons/css3.svg',
        description: 'Flexbox, CSS Grid, keyframes, transitions, responsive viewport design.',
        color: '#457b9d',
      },
    ],
  },
  {
    id: 'backend',
    categoryNumber: '03',
    title: 'Bahasa Pemrograman — Backend & Runtime',
    subtitle: 'Layanan server-side, otomatisasi komputasi data, dan endpoint integrasi API.',
    skills: [
      {
        id: 'tech-node',
        name: 'Node.js',
        level: 'Tingkat Lanjut',
        percentage: 75,
        icon: '/icons/nodejs.svg',
        description: 'Runtime server-side JavaScript, modular architecture, non-blocking I/O.',
        color: '#2a9d8f',
      },
      {
        id: 'tech-python',
        name: 'Python',
        level: 'Tingkat Lanjut',
        percentage: 74,
        icon: '/icons/python.svg',
        description: 'Scripting otomatisasi data, file processing, openpyxl, dan CLI automation.',
        color: '#3d5a80',
      },
      {
        id: 'tech-express',
        name: 'Express.js',
        level: 'Menengah-Lanjut',
        percentage: 73,
        icon: '/icons/express.svg',
        description: 'RESTful API routing, custom middleware, JSON parsing, & CORS handler.',
        color: '#2c2e2a',
      },
      {
        id: 'tech-api',
        name: 'RESTful API Architecture',
        level: 'Sedang Dipelajari',
        percentage: 76,
        icon: '/icons/fastapi.svg',
        description: 'Perancangan endpoint standar, status code, sanitasi payload, & API contract.',
        color: '#8ed462',
        isLearning: true,
      },
      {
        id: 'tech-graphql',
        name: 'GraphQL',
        level: 'Sedang Dipelajari',
        percentage: 71,
        icon: '/icons/graphql.svg',
        description: 'Schema definition, queries, mutations, & optimasi declarative data fetching.',
        color: '#e07a5f',
        isLearning: true,
      },
      {
        id: 'tech-kotlin',
        name: 'Kotlin',
        level: 'Tingkat Lanjut',
        percentage: 75,
        icon: '/icons/kotlin.svg',
        description: 'Pemrograman Android modern, coroutines concurrency, type-safe DSL, & arsitektur modular.',
        color: '#7f52ff',
      },
    ],
  },
  {
    id: 'databases',
    categoryNumber: '04',
    title: 'Database & Cloud BaaS Platform',
    subtitle: 'Penyimpanan relasional, real-time document stores, dan backend-as-a-service.',
    skills: [
      {
        id: 'db-firebase',
        name: 'Firebase Cloud',
        level: 'Spesialis / Mahir',
        percentage: 76,
        icon: '/icons/firebase.svg',
        description: 'Firestore real-time sync, Firebase Auth, security rules, & hosting.',
        color: '#ffb703',
      },
      {
        id: 'db-supabase',
        name: 'Supabase (PostgreSQL)',
        level: 'Tingkat Lanjut',
        percentage: 75,
        icon: '/icons/supabase.svg',
        description: 'PostgreSQL relational database, Row-Level Security, & real-time APIs.',
        color: '#2a9d8f',
      },
      {
        id: 'db-mysql',
        name: 'MySQL Database',
        level: 'Menengah-Lanjut',
        percentage: 73,
        icon: '/icons/mysql.svg',
        description: 'Relational schema design, normalization, complex joins, & indexing.',
        color: '#0077b6',
      },
      {
        id: 'db-appwrite',
        name: 'Appwrite Cloud',
        level: 'Sedang Dipelajari',
        percentage: 71,
        icon: '/icons/appwrite.svg',
        description: 'Open-source BaaS, collections database, user auth, & cloud storage.',
        color: '#d90429',
        isLearning: true,
      },
      {
        id: 'db-amplify',
        name: 'AWS Amplify',
        level: 'Sedang Dipelajari',
        percentage: 70,
        icon: '/icons/awsamplify.svg',
        description: 'Integrasi backend cloud AWS, serverless functions, & client SDK setup.',
        color: '#e76f51',
        isLearning: true,
      },
    ],
  },
  {
    id: 'design',
    categoryNumber: '05',
    title: 'Software Desain & Vektor Grafis',
    subtitle: 'Perancangan prototipe visual, aset vektor tajam, dan standarisasi pre-press.',
    skills: [
      {
        id: 'des-figma',
        name: 'Figma UI/UX',
        level: 'Spesialis / Mahir',
        percentage: 78,
        icon: '/icons/figma.svg',
        description: 'Desain antarmuka UI/UX, auto-layout, interaksi prototype, & design system.',
        color: '#8ed462',
      },
      {
        id: 'des-ai',
        name: 'Adobe Illustrator',
        level: 'Spesialis / Mahir',
        percentage: 77,
        icon: '/icons/illustrator.svg',
        description: 'Vektor presisi tinggi, desain logo, tipografi kustom, & prepress artwork.',
        color: '#f4a261',
      },
      {
        id: 'des-ps',
        name: 'Adobe Photoshop',
        level: 'Tingkat Lanjut',
        percentage: 75,
        icon: '/icons/photoshop.svg',
        description: 'Raster image editing, photo manipulation, digital compositing, & mockup.',
        color: '#3a86ff',
      },
      {
        id: 'des-id',
        name: 'Adobe InDesign',
        level: 'Menengah-Lanjut',
        percentage: 72,
        icon: '/icons/indesign.svg',
        description: 'Tata letak editorial majalah/buku, master spread pages, & prepress cetak.',
        color: '#e63946',
      },
      {
        id: 'des-xd',
        name: 'Adobe XD',
        level: 'Menengah',
        percentage: 70,
        icon: '/icons/adobexd.svg',
        description: 'Wireframing interaktif, responsive resize, & alur transisi antarmuka.',
        color: '#9b5de5',
      },
      {
        id: 'des-coreldraw',
        name: 'Corel Draw',
        level: 'Tingkat Lanjut',
        percentage: 75,
        icon: '/icons/coreldraw.svg',
        description: 'Desain ilustrasi vektor presisi, tata letak grafis, separasi warna, & persiapan cetak.',
        color: '#00aa4f',
      },
    ],
  },
  {
    id: 'video',
    categoryNumber: '06',
    title: 'Software Video Editing & Motion',
    subtitle: 'Editing timeline naratif, motion graphics, audio sync, dan color grading dinamis.',
    skills: [
      {
        id: 'vid-pr',
        name: 'Adobe Premiere Pro',
        level: 'Spesialis / Mahir',
        percentage: 77,
        icon: '/icons/premiere.svg',
        description: 'Multi-cam timeline editing, Lumetri color grading, & audio sync video.',
        color: '#8ed462',
      },
      {
        id: 'vid-ae',
        name: 'Adobe After Effects',
        level: 'Tingkat Lanjut',
        percentage: 75,
        icon: '/icons/aftereffects.svg',
        description: 'Motion design micro-interactions, motion graphics visual, & keyframe curve.',
        color: '#9b5de5',
      },
      {
        id: 'vid-dv',
        name: 'DaVinci Resolve',
        level: 'Menengah-Lanjut',
        percentage: 72,
        icon: '/icons/davinci.svg',
        description: 'Node-based color grading profesional, Fairlight audio, & cut page workflow.',
        color: '#023e8a',
      },
      {
        id: 'vid-cc',
        name: 'CapCut Desktop',
        level: 'Spesialis / Cepat',
        percentage: 76,
        icon: '/icons/capcut.svg',
        description: 'Short-form social editing, auto-captioning, dynamic kinetic typography.',
        color: '#2c2e2a',
      },
    ],
  },
  {
    id: 'office',
    categoryNumber: '07',
    title: 'Software Office & Manajemen Dokumen',
    subtitle: 'Penyusunan naskah terstruktur, otomatisasi spreadsheet kalkulatif, dan basis data.',
    skills: [
      {
        id: 'off-word',
        name: 'Microsoft Word',
        level: 'Spesialis / Mahir',
        percentage: 78,
        icon: '/icons/word.svg',
        description: 'Format dokumen F4/Folio standar, styles heading berjenjang, & naskah master.',
        color: '#3a86ff',
      },
      {
        id: 'off-excel',
        name: 'Microsoft Excel',
        level: 'Spesialis / Mahir',
        percentage: 76,
        icon: '/icons/excel.svg',
        description: 'Formula lookup/logika analitik, pivot table data, & spreadsheet terstruktur.',
        color: '#8ed462',
      },
      {
        id: 'off-access',
        name: 'Microsoft Access',
        level: 'Menengah',
        percentage: 71,
        icon: '/icons/access.svg',
        description: 'Relational tables, query design, input forms terpadu, & report generation.',
        color: '#d00000',
      },
      {
        id: 'off-ppt',
        name: 'Microsoft PowerPoint',
        level: 'Spesialis / Mahir',
        percentage: 75,
        icon: '/icons/powerpoint.svg',
        description: 'Pitch deck visual korporat, layout slide profesional, & presentasi interaktif.',
        color: '#f4a261',
      },
    ],
  },
  {
    id: 'coding-tools',
    categoryNumber: '08',
    title: 'Coding Tools & AI Pair Programming',
    subtitle: 'Editor kode andalan, terminal automation, dan akselerator rekayasa perangkat lunak modern berbasis AI.',
    hasChart: false,
    skills: [
      {
        id: 'tool-vscode',
        name: 'Visual Studio Code',
        level: 'Primary Code Editor',
        percentage: 0,
        icon: '/icons/vscode.svg',
        description: 'IDE utama pengembangan software, integrasi ekosistem TypeScript/React, extensions & debugging interaktif.',
        color: '#007acc',
      },
      {
        id: 'tool-androidstudio',
        name: 'Android Studio',
        level: 'Android IDE & SDK',
        percentage: 0,
        icon: '/icons/androidstudio.svg',
        description: 'IDE resmi Google untuk rekayasa Android, layout inspector, Gradle build system, emulator, & profiling performa.',
        color: '#3ddc84',
      },
      {
        id: 'tool-sublime',
        name: 'Sublime Text',
        level: 'Ultra-Fast Text Editor',
        percentage: 0,
        icon: '/icons/sublimetext.png',
        description: 'Penyunting teks berkecepatan tinggi untuk inspeksi data besar, regex multi-cursor, & penyuntingan instan.',
        color: '#ff9800',
      },
      {
        id: 'tool-claude',
        name: 'Claude Code',
        level: 'Autonomous Agentic CLI',
        percentage: 0,
        icon: '/icons/claude.png',
        description: 'Agentic coding terminal dari Anthropic untuk refactoring arsitektur, deep context understanding, & eksekusi komputasi.',
        color: '#d97757',
      },
      {
        id: 'tool-antigravity',
        name: 'Antigravity CLI',
        level: 'Autonomous AI Assistant',
        percentage: 0,
        icon: '/icons/antigravity.png',
        description: 'Platform AI pair-programming mutakhir dari Google DeepMind dengan kapabilitas eksekusi agentic multi-tools otonom.',
        color: '#8ed462',
      },
      {
        id: 'tool-codex',
        name: 'ChatGPT Codex',
        level: 'Code Synthesis & Logic',
        percentage: 0,
        icon: '/icons/chatgptcodex.png',
        description: 'Akselerasi sintesis logika algoritma, pemecahan masalah komputasi kompleks, dan optimasi struktur data.',
        color: '#10a37f',
      },
    ],
  },
  {
    id: 'creative-writing',
    categoryNumber: '09',
    title: 'Kepenulisan Naratif, Sastra & Storytelling',
    subtitle: 'Arsitektur penulisan fiksi panjang, riset historis mendalam, perancangan semesta (worldbuilding), dan narasi sastrawi teruji.',
    skills: [
      {
        id: 'write-novel',
        name: 'Penulisan Fiksi Naratif & Novel',
        level: 'Karya Utuh & Terbit',
        percentage: 78,
        icon: '/icons/skill_novel.png',
        description: 'Penulisan novel panjang dengan konsistensi alur, kedalaman tematik, dan resonansi emosional tinggi.',
        color: '#2c2e2a',
      },
      {
        id: 'write-worldbuilding',
        name: 'Worldbuilding & Lore Architecture',
        level: 'Tingkat Lanjut',
        percentage: 76,
        icon: '/icons/skill_worldbuilding.png',
        description: 'Perancangan semesta fiksi mendalam, sistem budaya, aturan magis/sains, geografi, dan sejarah fiktif.',
        color: '#8ed462',
      },
      {
        id: 'write-history',
        name: 'Riset Historis & Rekonstruksi Sastra',
        level: 'Tingkat Lanjut',
        percentage: 75,
        icon: '/icons/skill_history.png',
        description: 'Eksplorasi sumber primer (sirah, teks klasik, manuskrip), akurasi latar zaman, dan kontekstualisasi sastra.',
        color: '#3a86ff',
      },
      {
        id: 'write-plot',
        name: 'Arsitektur Plot & Karakterisasi',
        level: 'Menengah-Lanjut',
        percentage: 73,
        icon: '/icons/skill_plot.png',
        description: 'Manajemen struktur plot multi-bab, busur perkembangan karakter (character arc), dialog dinamis, & pacing naratif.',
        color: '#f4a261',
      },
    ],
  },
  {
    id: 'music-sound',
    categoryNumber: '10',
    title: 'Composing & Sound Design',
    subtitle: 'Produksi musik digital, komposisi instrumen, penyuntingan audio multi-track, dan sound design berbasis AI.',
    skills: [
      {
        id: 'sound-suno',
        name: 'Suno',
        level: 'Generative Audio & Sound Design',
        percentage: 89,
        icon: '/icons/suno.png',
        description: 'Eksplorasi komposisi musik AI, crafting prompt musik, aransemen melodi vokal, & sound generation.',
        color: '#8ed462',
      },
      {
        id: 'sound-audition',
        name: 'Adobe Audition',
        level: 'Post-Production & Mixing',
        percentage: 87,
        icon: '/icons/audition.svg',
        description: 'Restorasi audio profesional, mastering frekuensi spektral, multitrack mixing, & noise reduction.',
        color: '#00e4bb',
      },
      {
        id: 'sound-audacity',
        name: 'Audacity',
        level: 'Multi-Track Audio Editing',
        percentage: 78,
        icon: '/icons/audacity.svg',
        description: 'Penyuntingan waveform audio, normalisasi desibel, pemotongan vokal, & konversi format lossless.',
        color: '#1f538d',
      },
      {
        id: 'sound-flstudio',
        name: 'FL Studio',
        level: 'DAW & Beat Sequencing',
        percentage: 65,
        icon: '/icons/fl_studio.png',
        description: 'Komposisi musik berbasis sequencer, aransemen MIDI instrumen, layering synth, & beat arrangement.',
        color: '#ff8400',
      },
    ],
  },
];

const getRadialBarOptions = (color: string): ApexOptions => ({
  chart: {
    type: 'radialBar',
    sparkline: { enabled: true },
    fontFamily: 'Nunito, sans-serif',
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 700,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
      hollow: {
        size: '62%',
      },
      track: {
        background: '#ebe7dc',
        strokeWidth: '100%',
        margin: 0,
      },
      dataLabels: {
        name: { show: false },
        value: {
          show: true,
          offsetY: 5,
          fontSize: '15px',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 900,
          color: '#2c2e2a',
          formatter: (val: number) => `${val}%`,
        },
      },
    },
  },
  colors: [color],
  stroke: {
    lineCap: 'round',
  },
  tooltip: {
    enabled: false,
  },
});

export const SkillsCharts: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 py-12 sm:py-16 md:py-20">
      {/* Section Header */}
      <div className="mb-14 sm:mb-20 text-left max-w-3xl">
        <p className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#8ed462] mb-3">
          INDIVIDUAL SKILL & CAPABILITY METERS
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight leading-[1.1]">
          Penguasaan & Keahlian
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#2c2e2a]/75 leading-relaxed">
          Integrasi solid rekayasa perangkat lunak modern, estetika desain antarmuka presisi, dan kapabilitas multi-bahasa global—teruji secara praktis untuk mewujudkan visi produk digital Anda menjadi solusi berkinerja tinggi, terukur, dan berdampak nyata.
        </p>
      </div>

      {/* Category Groups */}
      <div className="space-y-16 sm:space-y-24">
        {skillCategories.map((cat) => (
          <div key={cat.id} className="w-full">
            {/* Category Title Header */}
            <div className="mb-6 sm:mb-8 pb-4 border-b border-[#2c2e2a]/12">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="font-sans text-sm sm:text-base font-bold text-[#8ed462]">
                  {cat.categoryNumber}.
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#2c2e2a] tracking-tight">
                  {cat.title}
                </h3>
              </div>
              {cat.subtitle ? (
                <p className="text-sm sm:text-base text-[#2c2e2a]/70 font-normal">
                  {cat.subtitle}
                </p>
              ) : null}
            </div>

            {/* Individual Skill Cards Grid: 2 Kolom di Mobile, 3-4 Kolom di Tablet/Desktop */}
            <div
              className={`grid gap-3 sm:gap-5 md:gap-6 ${
                cat.hasChart === false
                  ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6'
                  : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}
            >
              {cat.skills.map((skill) => {
                const chartColor = skill.color || '#8ed462';
                const chartOptions = getRadialBarOptions(chartColor);

                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col p-3.5 sm:p-5 md:p-6 rounded-[22px] sm:rounded-[28px] md:rounded-[32px] bg-[#ffffff] transition-all duration-300 hover:-translate-y-1 select-none overflow-hidden relative"
                  >
                    {/* Top Row: Icon / Bendera 3D di Kiri + ApexCharts Radial Gauge di Kanan (Jika hasChart !== false) */}
                    <div
                      className={`flex items-center justify-between gap-1.5 sm:gap-3 mb-3 sm:mb-4 ${
                        cat.hasChart === false
                          ? 'h-10 sm:h-14 md:h-16'
                          : 'h-[70px] sm:h-[90px] md:h-[105px]'
                      }`}
                    >
                      {cat.id === 'languages' ? (
                        /* Bendera 3D Berkibar Transparan (Posisikan di Kiri, Scale +8% & Translate ke Kiri 20px, Clipped oleh Box) */
                        <div className="w-16 sm:w-24 md:w-28 h-12 sm:h-16 md:h-20 shrink-0 flex items-center justify-start">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain filter drop-shadow-sm scale-[1.2] sm:scale-[1.35] -translate-x-[12px] sm:-translate-x-[20px] transition-transform duration-300 hover:scale-[1.48]"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        /* High-Resolution App Icon (Unboxed & 2x Larger) */
                        <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-start">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Chart Area: Hanya tampil jika cat.hasChart !== false */}
                      {cat.hasChart !== false && (
                        <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[105px] md:h-[105px] shrink-0 flex items-center justify-center relative">
                          {skill.isLearning ? (
                            <div className="w-[54px] h-[54px] sm:w-[74px] sm:h-[74px] flex items-center justify-center relative" title="Sedang Dipelajari">
                              {/* SVG Track Circle & Animated Spinning Ring */}
                              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 74 74">
                                <circle
                                  cx="37"
                                  cy="37"
                                  r="28"
                                  stroke="#ebe7dc"
                                  strokeWidth="5"
                                  fill="none"
                                />
                                <circle
                                  cx="37"
                                  cy="37"
                                  r="28"
                                  stroke={chartColor}
                                  strokeWidth="5"
                                  strokeDasharray="176"
                                  strokeDashoffset="118"
                                  strokeLinecap="round"
                                  fill="none"
                                  className="animate-spin origin-center"
                                  style={{ animationDuration: '1.4s' }}
                                />
                              </svg>
                              {/* Inner Accent Pulse Dot (Tanpa Angka Persentase) */}
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span
                                  className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full animate-ping opacity-60"
                                  style={{ backgroundColor: chartColor }}
                                />
                              </div>
                            </div>
                          ) : (
                            <ReactApexChart
                              options={chartOptions}
                              series={[skill.percentage]}
                              type="radialBar"
                              width="100%"
                              height="100%"
                            />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Content: Name, Level, and Description */}
                    <div className="flex flex-col flex-1">
                      <h4 className="text-sm sm:text-base md:text-[19px] font-black text-[#2c2e2a] tracking-tight leading-snug min-h-[2.5rem] sm:min-h-[2.85rem] md:min-h-[3.35rem] flex items-start">
                        {skill.name}
                      </h4>
                      <div
                        className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1 min-h-[1.6rem] sm:min-h-[1.85rem] md:min-h-[2.1rem] flex items-center ${
                          skill.isLearning ? 'text-[#e76f51]' : 'text-[#8ed462]'
                        }`}
                      >
                        {skill.level}
                      </div>
                      <p className="text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed text-[#2c2e2a]/75 mt-1.5 sm:mt-2.5 font-normal">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCharts;
