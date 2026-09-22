import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

interface LanguageItem {
  name: string;
  percentage: number;
  color: string;
}

interface Project {
  id: string;
  category: string;
  repoName: string;
  title: string;
  subtitle: string;
  description: string;
  benefit: string;
  languages: LanguageItem[];
  highlights: string[];
  repoUrl: string;
}

const projects: Project[] = [
  {
    id: 'voxplayer',
    category: 'Mobile & Audio Signal Processing',
    repoName: 'imanecdoche/voxplayer',
    title: 'VOX — Ultra-Minimalist Offline Audio Player',
    subtitle: 'Zero-Telemetry Android Audio Engine & Ultra-Low Latency DSP',
    description:
      'Aplikasi pemutar audio offline bernuansa monokrom murni untuk Android yang dirancang dengan arsitektur modern Jetpack Media3 dan Android NDK. Menghadirkan reproduksi suara akurasi tinggi tanpa beban bloatware, tanpa analitik di latar belakang, dan konsumsi daya komputasi minimal.',
    benefit:
      'Menjamin privasi 100% tanpa pelacakan data, bebas iklan yang mengganggu, menghemat baterai secara drastis saat memutar pustaka musik lokal berkualitas tinggi, serta dapat diandalkan sepenuhnya saat tanpa koneksi internet.',
    languages: [
      { name: 'Kotlin', percentage: 72.8, color: '#A97BFF' },
      { name: 'C++', percentage: 21.4, color: '#f34b7d' },
      { name: 'CMake', percentage: 5.8, color: '#DA3434' },
    ],
    highlights: [
      'Pemrosesan sinyal audio lokal langsung di perangkat dengan latensi ultra-rendah.',
      'Arsitektur offline murni: 0% telemetri, tanpa izin jaringan yang tidak perlu.',
      'Antarmuka monokromatis taktil yang sangat hemat konsumsi daya layar OLED.',
      'Manajemen memori efisien untuk perpustakaan ribuan file audio lossless (FLAC/WAV).',
    ],
    repoUrl: 'https://github.com/imanecdoche/voxplayer',
  },
  {
    id: 'epson-l1110-driver',
    category: 'System Utility & Linux Hardware Driver',
    repoName: 'imanecdoche/EPSON_L1110_Printer_Driver_for_Linux',
    title: 'Epson EcoTank L1110 Linux Driver & GUI',
    subtitle: 'Standalone User-Space Driver, Real-Time Ink Monitor & Head Utility',
    description:
      'Driver user-space mandiri dan pusat kontrol GUI berbasis PyQt6 untuk printer tangki tinta Epson EcoTank L1110 di lingkungan Linux. Membaca status hardware dan volume tangki tinta empat warna (CMYK) secara langsung melalui protokol LibUSB tanpa bergantung pada utility proprietary tertutup.',
    benefit:
      'Menghilangkan hambatan terbesar pengguna Linux (sekolah, UMKM percetakan, dan kantor) yang sebelumnya tidak bisa mengetahui sisa tinta atau membersihkan print head tanpa Windows/Mac, menyelamatkan operasional printer dari risiko kehabisan tinta mendadak.',
    languages: [
      { name: 'Python', percentage: 94.2, color: '#3572A5' },
      { name: 'Shell', percentage: 5.8, color: '#89e051' },
    ],
    highlights: [
      'Monitoring level tangki tinta 4 warna (Black, Cyan, Magenta, Yellow) secara real-time.',
      'Akses langsung fitur pemeliharaan perangkat keras: Head Cleaning & Nozzle Check.',
      'Kompatibel universal dengan distro Debian, Ubuntu, Fedora, Arch Linux, dan openSUSE.',
      'Eksekusi user-space aman tanpa memodifikasi kernel Linux atau merusak stabilitas sistem.',
    ],
    repoUrl: 'https://github.com/imanecdoche/EPSON_L1110_Printer_Driver_for_Linux',
  },
  {
    id: 'chess-beater',
    category: 'Game Engine & Android Systems Tool',
    repoName: 'imanecdoche/chess-beater',
    title: 'ChessBeater — Interactive Floating Chess Overlay',
    subtitle: 'Non-Intrusive Tactical Board Overlay & Real-Time Move Validation',
    description:
      'Aplikasi mini-board interaktif semi-transparan yang melayang (overlay) di atas aplikasi catur Android pihak ketiga. Mengintegrasikan mesin kalkulasi taktik cerdas, validasi legal move, dan sistem touch pass-through yang tidak mengganggu alur sentuhan permainan dasar.',
    benefit:
      'Memungkinkan pemain catur dan pelajar taktik menganalisis langkah, mempelajari struktur bidak, serta mengevaluasi kalkulasi posisi secara real-time langsung di layar permainan tanpa perlu repot bolak-balik beralih antar-aplikasi.',
    languages: [
      { name: 'C++', percentage: 82.5, color: '#f34b7d' },
      { name: 'C', percentage: 12.0, color: '#555555' },
      { name: 'CMake', percentage: 5.5, color: '#DA3434' },
    ],
    highlights: [
      'Overlay semi-transparan dengan kontrol kalibrasi sentuhan pass-through presisi.',
      'Validasi aturan legal move dan kepemilikan buah catur secara akurat.',
      'Integrasi engine evaluasi taktis langsung di atas aplikasi bermain tanpa jeda.',
      'Guardrail sistem ketat: tidak memodifikasi dispatchTouchEvent saat overlay dinonaktifkan.',
    ],
    repoUrl: 'https://github.com/imanecdoche/chess-beater',
  },
  {
    id: 'reprompter',
    category: 'Web Application & Presentation Tech',
    repoName: 'imanecdoche/RePrompter',
    title: 'RePrompter — Smart Adaptive Rhythm Teleprompter',
    subtitle: 'Dynamic Phrase Pacing Engine & Natural Speech Teleprompter',
    description:
      'Aplikasi teleprompter cerdas berbasis web yang memecahkan kelemahan scrolling konvensional dengan Rhythm Engine inovatif. Sistem memotong naskah menjadi frasa logis dan menghitung jeda waktu adaptif berdasarkan panjang suku kata dan bobot tanda baca naskah.',
    benefit:
      'Membantu pembicara publik, dosen, presenter video, dan jurnalis berbicara dengan tempo yang rileks, intonasi alami, serta jeda bernafas yang manusiawi, menghilangkan tatapan kaku dan kesan membaca robotik.',
    languages: [
      { name: 'TypeScript', percentage: 76.4, color: '#3178c6' },
      { name: 'CSS', percentage: 18.2, color: '#563d7c' },
      { name: 'JavaScript', percentage: 5.4, color: '#f1e05a' },
    ],
    highlights: [
      'Algoritma Rhythm Engine: tempo dinamis berdasarkan tanda baca dan panjang kata.',
      'Tampilan frasa adaptif per napas, bukan scrolling konstan yang membuat mata lelah.',
      'Kontrol kecepatan membaca (WPM) interaktif dengan hotkeys keyboard dan remote.',
      'Bebas instalasi rumit: berjalan mulus langsung di peramban web modern.',
    ],
    repoUrl: 'https://github.com/imanecdoche/RePrompter',
  },
];

export const PortfolioGrid: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 py-12 sm:py-16 md:py-20">
      {/* Section Introduction */}
      <div className="mb-10 sm:mb-14 md:mb-16 text-left max-w-3xl">
        <p className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#8ed462] mb-3">
          SELECTED REPOSITORIES & ENGINEERING SHOWCASE
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight leading-[1.1]">
          Karya Rekayasa Perangkat Lunak & Proyek Digital
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#2c2e2a]/75 leading-relaxed">
          Berikut adalah 4 proyek repositori sumber terbuka (<em>open-source</em>) pilihan yang dirancang untuk memecahkan tantangan nyata, menghadirkan efisiensi teknis tingkat tinggi, dan memberikan manfaat langsung bagi pengguna serta komunitas pengembang.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {projects.map((project, index) => {
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] bg-[#ffffff] transition-all duration-300"
            >
              <div>
                {/* Header Row: Category */}
                <div className="mb-4 sm:mb-5">
                  <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#2c2e2a]/60">
                    {project.category}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-2xl sm:text-[28px] font-black text-[#2c2e2a] tracking-tight leading-[1.2] mb-2 group-hover:text-[#1b365d] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-[#8ed462] tracking-wide mb-4">
                  {project.subtitle}
                </p>

                {/* GitHub-style Language Distribution Bar */}
                <div className="mb-6 pb-5 border-b border-[#2c2e2a]/10 space-y-2.5">
                  <div className="w-full h-2 rounded-full overflow-hidden flex bg-[#ebe7dc]">
                    {project.languages.map((lang, lIdx) => (
                      <div
                        key={lIdx}
                        style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                        className="h-full"
                        title={`${lang.name}: ${lang.percentage}%`}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-sans">
                    {project.languages.map((lang, lIdx) => (
                      <div key={lIdx} className="flex items-center gap-1.5 text-[#2c2e2a]/80">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="font-bold text-[#2c2e2a]">{lang.name}</span>
                        <span className="text-[#2c2e2a]/60 text-[11px]">{lang.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Description (Ringkasan Proyek) */}
                <div className="mb-5">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2c2e2a]/55 mb-1.5">
                    Ringkasan Proyek
                  </h4>
                  <p className="text-[14.5px] sm:text-[15px] leading-[1.65] text-[#2c2e2a]/85 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Manfaat Terbesar Bagi Orang Lain */}
                <div className="mb-6">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2c2e2a]/55 mb-1.5">
                    Manfaat Terbesar Bagi Orang Lain
                  </h4>
                  <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#2c2e2a]/85 font-normal">
                    {project.benefit}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-8">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8ed462] shrink-0" />
                      <span className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#2c2e2a]/85 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-5 border-t border-[#2c2e2a]/10 flex flex-col gap-3.5">
                <div className="flex items-center justify-between text-xs font-sans font-bold text-[#2c2e2a]/60">
                  <span className="flex items-center gap-1.5">
                    <SiGithub size={14} />
                    <span>{project.repoName}</span>
                  </span>
                </div>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[50px] bg-[#2c2e2a] text-[#ffffff] hover:bg-[#8ed462] hover:text-[#2c2e2a] font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 active:scale-98 cursor-pointer select-none group/btn"
                >
                  <SiGithub size={16} className="shrink-0" />
                  <span>Buka di GitHub</span>
                  <ArrowUpRight size={16} className="shrink-0 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioGrid;
