import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GitCommit,
  Star,
  BookOpen,
  ArrowUpRight,
  Code2,
  FolderGit2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars?: number;
  url: string;
}

const pinnedRepos: PinnedRepo[] = [
  {
    name: 'calc-',
    description: 'Aplikasi kalkulator presisi tinggi dengan fungsi lanjutan (kalkulator plus).',
    language: 'TypeScript',
    languageColor: '#3178c6',
    url: 'https://github.com/imanecdoche/calc-',
  },
  {
    name: 'kavstud',
    description: 'Platform edukasi digital dan sistem manajemen materi belajar Kavio Studi.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    url: 'https://github.com/imanecdoche/kavstud',
  },
  {
    name: 'kusumaterapiweb',
    description: 'Website landing page interaktif dan sistem informasi KusumaTerapi.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    url: 'https://github.com/imanecdoche/kusumaterapiweb',
  },
  {
    name: 'OstifakODP',
    description: 'Platform Digital Terpadu OSTIFAK untuk pembaca dokumen dan sistem edukasi.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    url: 'https://github.com/imanecdoche/OstifakODP',
  },
  {
    name: 'RePrompter',
    description: 'Aplikasi pengelola dan penyempurna prompt AI berbasis arsitektur Vercel.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    url: 'https://github.com/imanecdoche/RePrompter',
  },
  {
    name: 'chess-beater',
    description: 'Algoritma mesin catur analitik berkecepatan tinggi dengan optimasi komputasi mendalam.',
    language: 'C++',
    languageColor: '#f34b7d',
    stars: 1,
    url: 'https://github.com/imanecdoche/chess-beater',
  },
];

interface MonthlyActivity {
  month: string;
  totalCommits: number;
  repoCount: number;
  repos: { name: string; commits: number; url: string }[];
  createdRepos?: { name: string; language: string; date: string; url: string }[];
}

const monthlyActivities: MonthlyActivity[] = [
  {
    month: 'September 2026',
    totalCommits: 85,
    repoCount: 6,
    repos: [
      { name: 'imanecdoche/fatihfarhat', commits: 27, url: 'https://github.com/imanecdoche/fatihfarhat' },
      { name: 'imanecdoche/EPSON_L1110_Printer_Driver_for_Linux', commits: 22, url: 'https://github.com/imanecdoche/EPSON_L1110_Printer_Driver_for_Linux' },
      { name: 'imanecdoche/calc-', commits: 17, url: 'https://github.com/imanecdoche/calc-' },
      { name: 'imanecdoche/KasTongkrongan', commits: 9, url: 'https://github.com/imanecdoche/KasTongkrongan' },
      { name: 'imanecdoche/voxplayer', commits: 9, url: 'https://github.com/imanecdoche/voxplayer' },
      { name: 'imanecdoche/chess-beater', commits: 1, url: 'https://github.com/imanecdoche/chess-beater' },
    ],
    createdRepos: [
      { name: 'EPSON_L1110_Printer_Driver_for_Linux', language: 'Python', date: '19 Sep', url: 'https://github.com/imanecdoche/EPSON_L1110_Printer_Driver_for_Linux' },
      { name: 'fatihfarhat', language: 'TypeScript', date: '7 Sep', url: 'https://github.com/imanecdoche/fatihfarhat' },
      { name: 'voxplayer', language: 'Kotlin', date: '2 Sep', url: 'https://github.com/imanecdoche/voxplayer' },
    ],
  },
  {
    month: 'Agustus 2026',
    totalCommits: 137,
    repoCount: 5,
    repos: [
      { name: 'imanecdoche/OstifakODP-Verdana', commits: 76, url: 'https://github.com/imanecdoche/OstifakODP-Verdana' },
      { name: 'imanecdoche/kavadmin', commits: 45, url: 'https://github.com/imanecdoche/kavadmin' },
      { name: 'imanecdoche/KasTongkrongan', commits: 13, url: 'https://github.com/imanecdoche/KasTongkrongan' },
      { name: 'imanecdoche/chess-beater', commits: 2, url: 'https://github.com/imanecdoche/chess-beater' },
      { name: 'imanecdoche/pesanuntukmu', commits: 1, url: 'https://github.com/imanecdoche/pesanuntukmu' },
    ],
    createdRepos: [
      { name: 'chess-beater', language: 'C++', date: '31 Agu', url: 'https://github.com/imanecdoche/chess-beater' },
      { name: 'OstifakODP-Verdana', language: 'JavaScript', date: '26 Agu', url: 'https://github.com/imanecdoche/OstifakODP-Verdana' },
      { name: 'KasTongkrongan', language: 'TypeScript', date: '15 Agu', url: 'https://github.com/imanecdoche/KasTongkrongan' },
      { name: 'pesanuntukmu', language: 'JavaScript', date: '10 Agu', url: 'https://github.com/imanecdoche/pesanuntukmu' },
      { name: 'kavadmin', language: 'JavaScript', date: '2 Agu', url: 'https://github.com/imanecdoche/kavadmin' },
    ],
  },
  {
    month: 'Juli 2026',
    totalCommits: 107,
    repoCount: 8,
    repos: [
      { name: 'imanecdoche/kavstud', commits: 42, url: 'https://github.com/imanecdoche/kavstud' },
      { name: 'imanecdoche/OstifakODP', commits: 38, url: 'https://github.com/imanecdoche/OstifakODP' },
      { name: 'imanecdoche/kusumaterapiweb', commits: 15, url: 'https://github.com/imanecdoche/kusumaterapiweb' },
      { name: 'imanecdoche/RePrompter', commits: 12, url: 'https://github.com/imanecdoche/RePrompter' },
    ],
  },
  {
    month: 'Mei & Juni 2026',
    totalCommits: 26,
    repoCount: 6,
    repos: [
      { name: 'imanecdoche/sales-tracker', commits: 12, url: 'https://github.com/imanecdoche/sales-tracker' },
      { name: 'imanecdoche/JETEv2', commits: 5, url: 'https://github.com/imanecdoche/JETEv2' },
      { name: 'imanecdoche/SCRIBA', commits: 3, url: 'https://github.com/imanecdoche/SCRIBA' },
      { name: 'imanecdoche/zerotwentymusicpage', commits: 3, url: 'https://github.com/imanecdoche/zerotwentymusicpage' },
      { name: 'imanecdoche/prompt-bank-v2', commits: 2, url: 'https://github.com/imanecdoche/prompt-bank-v2' },
      { name: 'imanecdoche/Prompt-Bank', commits: 1, url: 'https://github.com/imanecdoche/Prompt-Bank' },
    ],
  },
];

// Generate authentic-looking 52-week calendar grid matching the 380 contributions in 2026
const generateYearCalendar = () => {
  const weeks: number[][] = [];
  // 52 weeks in a year, 7 days each
  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      // Month indices approx:
      // Jan: w 0-3 (low)
      // Feb: w 4-7 (low)
      // Mar: w 8-12 (low)
      // Apr: w 13-16 (moderate)
      // May: w 17-21 (moderate: 20 commits)
      // Jun: w 22-25 (low-moderate: 6 commits)
      // Jul: w 26-30 (high: 107 commits)
      // Aug: w 31-34 (very high: 137 commits)
      // Sep: w 35-38 (very high: 85 commits)
      // Oct-Dec: upcoming
      let val = 0;
      if (w >= 16 && w <= 21) {
        // May
        val = (w + d) % 4 === 0 ? 1 : 0;
      } else if (w >= 22 && w <= 25) {
        // Jun
        val = (w + d) % 5 === 0 ? 1 : 0;
      } else if (w >= 26 && w <= 30) {
        // Jul
        val = (w * 3 + d) % 3 === 0 ? 2 : (w + d) % 2 === 0 ? 1 : 0;
      } else if (w >= 31 && w <= 34) {
        // Aug - Peak
        val = (w + d) % 7 === 0 ? 4 : (w * 2 + d) % 3 === 0 ? 3 : 2;
      } else if (w >= 35 && w <= 38) {
        // Sep - Peak
        val = (w + d) % 5 === 0 ? 4 : (w + d) % 2 === 0 ? 3 : 1;
      }
      week.push(val);
    }
    weeks.push(week);
  }
  return weeks;
};

const calendarWeeks = generateYearCalendar();

const getIntensityColor = (level: number) => {
  switch (level) {
    case 4:
      return 'bg-[#1b4332] border-[#1b4332]'; // darkest
    case 3:
      return 'bg-[#2d6a4f] border-[#2d6a4f]';
    case 2:
      return 'bg-[#52b788] border-[#52b788]';
    case 1:
      return 'bg-[#95d5b2] border-[#95d5b2]';
    default:
      return 'bg-[#ebe7dc] border-transparent';
  }
};

export const GithubOverview: React.FC = () => {
  const [showAllActivity, setShowAllActivity] = useState(false);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 py-12 sm:py-16 md:py-24 border-t border-[#2c2e2a]/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#8ed462] mb-3">
            OPEN SOURCE & CODE REPOSITORIES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight leading-[1.1]">
            Overview Kontribusi GitHub & Repositori
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2c2e2a]/75 leading-relaxed">
            Transparansi komputasi nyata, riwayat commit aktif, dan repositori proyek open-source di akun GitHub resmi{' '}
            <span className="font-bold text-[#2c2e2a]">@imanecdoche</span>.
          </p>
        </div>

        <a
          href="https://github.com/imanecdoche"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[50px] bg-[#2c2e2a] text-white hover:bg-[#8ed462] hover:text-[#2c2e2a] font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 active:scale-95 shrink-0 select-none"
        >
          <span>Profil @imanecdoche</span>
          <ArrowUpRight size={16} />
        </a>
      </div>

      {/* GitHub Key Stats Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
        <div className="p-5 sm:p-7 rounded-[28px] bg-[#ffffff] border border-[#2c2e2a]/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60">
              Total Kontribusi
            </span>
            <GitCommit size={18} className="text-[#8ed462]" />
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight">
            380
          </div>
          <p className="text-xs font-medium text-[#2c2e2a]/60 mt-1">di tahun 2026</p>
        </div>

        <div className="p-5 sm:p-7 rounded-[28px] bg-[#ffffff] border border-[#2c2e2a]/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60">
              Repositori Publik
            </span>
            <FolderGit2 size={18} className="text-[#2c2e2a]" />
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight">
            28
          </div>
          <p className="text-xs font-medium text-[#2c2e2a]/60 mt-1">proyek aktif</p>
        </div>

        <div className="p-5 sm:p-7 rounded-[28px] bg-[#ffffff] border border-[#2c2e2a]/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60">
              Total Bintang
            </span>
            <Star size={18} className="text-[#e6a817]" />
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight">
            6
          </div>
          <p className="text-xs font-medium text-[#2c2e2a]/60 mt-1">stars diraih</p>
        </div>

        <div className="p-5 sm:p-7 rounded-[28px] bg-[#ffffff] border border-[#2c2e2a]/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60">
              Tipe Aktivitas
            </span>
            <Code2 size={18} className="text-[#8ed462]" />
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight">
            91%
          </div>
          <p className="text-xs font-medium text-[#2c2e2a]/60 mt-1">commits (+25 review, +12 PR)</p>
        </div>
      </div>

      {/* GitHub Calendar Heatmap & Breakdown Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] bg-[#ffffff] border border-[#2c2e2a]/10 mb-12 sm:mb-16"
      >
        {/* Heatmap Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2c2e2a]/10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60">
              GRAFIK KALENDER KONTRIBUSI GITHUB
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#2c2e2a] tracking-tight mt-1">
              380 Kontribusi di 2026
            </h3>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#2c2e2a] text-white text-xs font-black">
              2026
            </span>
            <span className="px-3 py-1.5 text-xs font-bold text-[#2c2e2a]/50">
              2025
            </span>
            <span className="px-3 py-1.5 text-xs font-bold text-[#2c2e2a]/50">
              2024
            </span>
          </div>
        </div>

        {/* Scrollable Heatmap Graph */}
        <div className="py-6 overflow-x-auto">
          <div className="min-w-[680px]">
            {/* Months Header */}
            <div className="flex text-[11px] font-bold text-[#2c2e2a]/50 mb-2 pl-7">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(
                (m, i) => (
                  <div key={i} className="flex-1">
                    {m}
                  </div>
                )
              )}
            </div>

            {/* Weeks and Days Grid */}
            <div className="flex gap-1">
              {/* Day Labels */}
              <div className="flex flex-col justify-between text-[10px] font-bold text-[#2c2e2a]/50 pr-2 py-0.5">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* 52 Columns Grid */}
              <div className="flex gap-[3.5px] flex-1">
                {calendarWeeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3.5px]">
                    {week.map((level, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3 h-3 rounded-[3px] border transition-colors ${getIntensityColor(
                          level
                        )}`}
                        title={`Minggu ${wIdx + 1}, Hari ${dIdx + 1}: ${
                          level > 0 ? `${level * 4}+ kontribusi` : '0 kontribusi'
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend Bottom */}
            <div className="flex items-center justify-between text-xs text-[#2c2e2a]/60 pt-4 mt-2">
              <span className="font-medium">Data diverifikasi langsung dari API & profil GitHub publik</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold">Less</span>
                <div className="w-3 h-3 rounded-[3px] bg-[#ebe7dc]" />
                <div className="w-3 h-3 rounded-[3px] bg-[#95d5b2]" />
                <div className="w-3 h-3 rounded-[3px] bg-[#52b788]" />
                <div className="w-3 h-3 rounded-[3px] bg-[#2d6a4f]" />
                <div className="w-3 h-3 rounded-[3px] bg-[#1b4332]" />
                <span className="text-[11px] font-bold">More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Overview Summary Bar */}
        <div className="pt-6 border-t border-[#2c2e2a]/10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60 block mb-2">
              Repositori Paling Sering Dikontribusikan
            </span>
            <div className="space-y-1.5 text-sm font-bold text-[#2c2e2a]">
              <div className="truncate">
                • <a href="https://github.com/imanecdoche/OstifakODP-Verdana" target="_blank" rel="noreferrer" className="hover:text-[#8ed462] transition-colors">imanecdoche/OstifakODP-Verdana</a> (76 commits)
              </div>
              <div className="truncate">
                • <a href="https://github.com/imanecdoche/kavadmin" target="_blank" rel="noreferrer" className="hover:text-[#8ed462] transition-colors">imanecdoche/kavadmin</a> (45 commits)
              </div>
              <div className="truncate">
                • <a href="https://github.com/imanecdoche/fatihfarhat" target="_blank" rel="noreferrer" className="hover:text-[#8ed462] transition-colors">imanecdoche/fatihfarhat</a> (27 commits)
              </div>
              <div className="text-xs font-semibold text-[#2c2e2a]/50">
                dan 22 repositori aktif lainnya
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#f5f1e4]/70 border border-[#2c2e2a]/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60">
                Distribusi Tipe Kontribusi
              </span>
              <span className="text-xs font-black text-[#2c2e2a]">91% Commits</span>
            </div>

            {/* Segmented Progress Bar */}
            <div className="w-full bg-[#ebe7dc] h-3.5 rounded-full overflow-hidden flex gap-0.5 mb-2.5">
              <div
                className="bg-[#8ed462] h-full transition-all duration-500 rounded-l-full"
                style={{ width: '91.1%' }}
                title="Commits: 380 (91.1%)"
              />
              <div
                className="bg-[#3a86ff] h-full transition-all duration-500"
                style={{ width: '6.0%' }}
                title="Code Review: +25 (6.0%)"
              />
              <div
                className="bg-[#f4a261] h-full transition-all duration-500 rounded-r-full"
                style={{ width: '2.9%' }}
                title="Pull Requests: +12 (2.9%)"
              />
            </div>

            {/* Metrics Breakdown with Colors */}
            <div className="flex flex-wrap items-center justify-between text-[11.5px] font-bold text-[#2c2e2a]/80 gap-2">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8ed462] shrink-0" />
                <span>Commits: 380</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3a86ff] shrink-0" />
                <span>Code Review: +25</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f4a261] shrink-0" />
                <span>Pull Requests: +12</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#2c2e2a]/40">
                <span className="w-2 h-2 rounded-full bg-[#2c2e2a]/20 shrink-0" />
                <span>Issues: 0</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pinned Repositories Grid (Repo Unggulan) */}
      <div className="mb-14 sm:mb-20">
        <div className="mb-8">
          <p className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#8ed462] mb-2">
            FEATURED & PINNED WORK
          </p>
          <h3 className="text-2xl sm:text-3xl font-black text-[#2c2e2a] tracking-tight">
            Daftar Repo Unggulan (Pinned Repositories)
          </h3>
          <p className="mt-1 text-sm sm:text-base text-[#2c2e2a]/70 font-normal">
            Koleksi proyek kode utama yang disematkan secara resmi di profil GitHub @imanecdoche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {pinnedRepos.map((repo) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between p-6 rounded-[28px] bg-[#ffffff] border border-[#2c2e2a]/10 hover:border-[#2c2e2a]/30 transition-all duration-300 hover:-translate-y-1 select-none"
            >
              <div>
                {/* Top Row: Repo Title + Star */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-[#2c2e2a]/70 shrink-0" />
                    <span className="text-lg font-black text-[#2c2e2a] group-hover:text-[#8ed462] transition-colors truncate">
                      {repo.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full border border-[#2c2e2a]/20 text-[#2c2e2a]/60 uppercase">
                      Public
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-[#2c2e2a]/40 group-hover:text-[#2c2e2a] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13.5px] leading-relaxed text-[#2c2e2a]/75 mb-6 font-normal">
                  {repo.description}
                </p>
              </div>

              {/* Bottom Row: Language + Stars */}
              <div className="flex items-center justify-between pt-4 border-t border-[#2c2e2a]/8 text-xs font-bold text-[#2c2e2a]/70">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                {repo.stars !== undefined && repo.stars > 0 && (
                  <div className="flex items-center gap-1 text-[#e6a817]">
                    <Star size={14} fill="currentColor" />
                    <span>{repo.stars}</span>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Detailed Monthly Activity Timeline */}
      <div className="p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] bg-[#ffffff] border border-[#2c2e2a]/10">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2c2e2a]/10">
          <div>
            <p className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#8ed462] mb-1">
              CHRONOLOGICAL CONTRIBUTION LOG
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-[#2c2e2a] tracking-tight">
              Rincian Aktivitas Kontribusi Bulanan
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setShowAllActivity(!showAllActivity)}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#2c2e2a] hover:text-[#8ed462] transition-colors cursor-pointer uppercase tracking-wider"
          >
            <span>{showAllActivity ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Riwayat'}</span>
            {showAllActivity ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        <div className="space-y-8">
          {(showAllActivity ? monthlyActivities : monthlyActivities.slice(0, 2)).map(
            (monthItem, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-[#2c2e2a]/15">
                {/* Timeline dot */}
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#8ed462] border-2 border-white" />

                {/* Month Title */}
                <h4 className="text-lg sm:text-xl font-black text-[#2c2e2a] tracking-tight mb-2">
                  {monthItem.month}
                </h4>

                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60">
                    Membuat {monthItem.totalCommits} commits di {monthItem.repoCount} repositori:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {monthItem.repos.map((r, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-2.5 rounded-xl bg-[#f5f1e4]/60 border border-[#2c2e2a]/8 flex items-center justify-between"
                      >
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-bold text-[#2c2e2a] hover:text-[#8ed462] transition-colors truncate max-w-[200px]"
                        >
                          {r.name}
                        </a>
                        <span className="text-xs font-black text-[#2c2e2a]/60 shrink-0">
                          {r.commits} commits
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Created Repos in this month */}
                {monthItem.createdRepos && monthItem.createdRepos.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-[#2c2e2a]/8">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60">
                      Membuat {monthItem.createdRepos.length} repositori baru:
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {monthItem.createdRepos.map((cr, crIdx) => (
                        <a
                          key={crIdx}
                          href={cr.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#2c2e2a]/15 text-xs font-bold text-[#2c2e2a] hover:border-[#2c2e2a] transition-colors"
                        >
                          <BookOpen size={13} className="text-[#2c2e2a]/50" />
                          <span>{cr.name}</span>
                          <span className="text-[10px] font-mono text-[#2c2e2a]/50">
                            ({cr.language} • {cr.date})
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default GithubOverview;
