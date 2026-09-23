import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';

interface HomeShowcaseProps {
  onNavigate: (page: 'home' | 'about' | 'portfolio' | 'services' | 'contact') => void;
}

export const HomeShowcase: React.FC<HomeShowcaseProps> = ({ onNavigate }) => {
  // Live Local Time in Pandeglang (WIB / Asia/Jakarta)
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = [
    {
      id: 'voxplayer',
      title: 'VOX — Ultra-Minimalist Audio Player',
      category: 'Mobile & Audio DSP',
      description:
        'Aplikasi audio offline monokromatis Android dengan Jetpack Media3 & Android NDK berlatensi ultra-rendah dan 0% telemetri.',
      techStack: 'Kotlin • Jetpack Compose • Android NDK • C++',
      repoUrl: 'https://github.com/imanecdoche/voxplayer',
    },
    {
      id: 'epson-l1110-driver',
      title: 'Epson EcoTank L1110 Linux Driver & GUI',
      category: 'System Utility & Linux Hardware',
      description:
        'Driver user-space mandiri dan utility GUI PyQt6 untuk monitoring sisa tinta CMYK dan pemeliharaan print head printer Epson di Linux.',
      techStack: 'Python • PyQt6 • LibUSB • CUPS Backend',
      repoUrl: 'https://github.com/imanecdoche/EPSON_L1110_Printer_Driver_for_Linux',
    },
    {
      id: 'chess-beater',
      title: 'ChessBeater — Floating Chess Overlay',
      category: 'Game Engine & Android Systems',
      description:
        'Overlay interaktif semi-transparan dengan engine evaluasi taktis real-time dan touch dispatch pass-through non-intrusif.',
      techStack: 'C++ • Android Overlay Service • Chess Logic',
      repoUrl: 'https://github.com/imanecdoche/chess-beater',
    },
    {
      id: 'reprompter',
      title: 'RePrompter — Smart Rhythm Teleprompter',
      category: 'Web Application & Rhythm Engine',
      description:
        'Teleprompter cerdas adaptif yang menghitung jeda berbicara alami berdasarkan ritme frasa dan tanda baca naskah presentasi.',
      techStack: 'TypeScript • React • Next.js • Tailwind CSS',
      repoUrl: 'https://github.com/imanecdoche/RePrompter',
    },
    {
      id: 'headless-multicloud',
      title: 'Headless 5-Platform Integration Ecosystem',
      category: 'Cloud Architecture & Headless APIs',
      description:
        'Integrasi orkestrasi headless 100% mulus menghubungkan GitHub, Vercel, Firebase, Supabase, dan Appwrite dalam satu ekosistem data terpadu.',
      techStack: 'GitHub • Vercel • Firebase • Supabase • Appwrite',
      repoUrl: 'https://github.com/imanecdoche',
    },
  ];

  return (
    <div id="explore" className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 pb-24 sm:pb-32 font-sans space-y-20 sm:space-y-28">
      {/* ======================================================== */}
      {/* 1. QUICK INTRO / MINI BIO TEASER                        */}
      {/* ======================================================== */}
      <section className="w-full">
        <div className="bg-[#ffffff] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 sm:gap-10">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2c2e2a] tracking-tight leading-tight">
              Membangun Solusi Digital dengan Harmoni Kode & Estetika
            </h2>
            <p className="text-sm sm:text-base text-[#2c2e2a]/75 leading-relaxed">
              Halo! Saya <strong className="text-[#2c2e2a]">Fatih Farhat Asshidiq</strong> — Software Developer dan Creative Technologist asal Banten yang berfokus menciptakan aplikasi berperforma tinggi, arsitektur sistem yang andal, dan antarmuka web interaktif yang taktil dan manusiawi.
            </p>
          </div>
          <div className="shrink-0 flex items-center">
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#2c2e2a] text-[#ffffff] font-bold text-sm sm:text-base tracking-wide hover:bg-[#8ed462] hover:text-[#2c2e2a] transition-colors cursor-pointer group"
            >
              <span>Kenal Lebih Dekat</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FEATURED PROJECTS (KARYA UNGGULAN TERPILIH)          */}
      {/* ======================================================== */}
      <section className="w-full space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8ed462]">
              Karya Pilihan
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2c2e2a] tracking-tight mt-1">
              Proyek Unggulan Berdampak
            </h2>
            <p className="text-xs sm:text-sm text-[#2c2e2a]/70 max-w-xl mt-1.5 leading-relaxed">
              Solusi sistem nyata, audio DSP, utilitas hardware Linux, dan web engine yang dikembangkan dengan standar rekayasa presisi.
            </p>
          </div>
          <button
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2c2e2a] hover:text-[#8ed462] transition-colors cursor-pointer group shrink-0"
          >
            <span>Lihat Semua Proyek</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 2x2 Grid of Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {featuredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-[#ffffff] rounded-[20px] sm:rounded-[26px] p-6 sm:p-7 flex flex-col justify-between transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50">
                      {project.category}
                    </span>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-[#2c2e2a]/50 hover:text-[#2c2e2a] transition-colors"
                      aria-label={`Buka repositori ${project.title}`}
                    >
                      <SiGithub size={18} />
                    </a>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#2c2e2a] tracking-tight leading-snug mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#2c2e2a]/70 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2c2e2a]/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#2c2e2a]/75">
                    {project.techStack}
                  </span>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#8ed462] hover:text-[#7bc352] transition-colors shrink-0"
                  >
                    <span>Source</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. WHAT I DO / 3 PILAR LAYANAN                         */}
      {/* ======================================================== */}
      <section className="w-full space-y-6 sm:space-y-8">
        <div>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8ed462]">
            Keahlian Utama
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2c2e2a] tracking-tight mt-1">
            Fokus Disiplin & Kapabilitas Teknis
          </h2>
          <p className="text-xs sm:text-sm text-[#2c2e2a]/70 max-w-xl mt-1.5 leading-relaxed">
            Menghubungkan rekayasa kode yang tangguh dengan perancangan visual fungsional untuk menghasilkan produk digital berkualitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Pillar 1 */}
          <div className="bg-[#ffffff] rounded-[20px] sm:rounded-[26px] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#2c2e2a] mb-2 tracking-tight">
                Web & Frontend Engineering
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#2c2e2a]/70 leading-relaxed mb-4">
                Membangun antarmuka web performa tinggi dengan arsitektur modular, transisi gerakan halus, integrasi API, serta kepatuhan aksesibilitas.
              </p>
            </div>
            <div className="pt-3 border-t border-[#2c2e2a]/10 text-xs font-semibold text-[#2c2e2a]/60">
              React • TypeScript • Next.js • Tailwind • GSAP
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#ffffff] rounded-[20px] sm:rounded-[26px] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#2c2e2a] mb-2 tracking-tight">
                UI/UX & Product Design
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#2c2e2a]/70 leading-relaxed mb-4">
                Merancang pengalaman pengguna yang terstruktur, desain sistem terstandarisasi, wireframing teliti, serta hierarki visual yang jelas.
              </p>
            </div>
            <div className="pt-3 border-t border-[#2c2e2a]/10 text-xs font-semibold text-[#2c2e2a]/60">
              Design Systems • Wireframing • 8pt Grid • UX Architecture
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#ffffff] rounded-[20px] sm:rounded-[26px] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#2c2e2a] mb-2 tracking-tight">
                Systems & Creative Technology
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#2c2e2a]/70 leading-relaxed mb-4">
                Pengembangan utilitas hardware Linux, pemrosesan audio lokal perangkat, optimasi memori Android, dan tool otomasi alur kerja.
              </p>
            </div>
            <div className="pt-3 border-t border-[#2c2e2a]/10 text-xs font-semibold text-[#2c2e2a]/60">
              Kotlin • Python • C++ • Android NDK • Linux Subsystem
            </div>
          </div>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2c2e2a] hover:text-[#8ed462] transition-colors cursor-pointer group"
          >
            <span>Eksplorasi Matriks Keahlian Lengkap</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CURRENT STATUS & LOCAL TIME                          */}
      {/* ======================================================== */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Status Ketersediaan */}
          <div className="bg-[#ffffff] rounded-[20px] sm:rounded-[26px] p-6 sm:p-7 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8ed462]/20 flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} className="text-[#8ed462]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8ed462] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]">
                  Status Ketersediaan
                </span>
              </div>
              <p className="text-xs sm:text-[13.5px] font-bold text-[#2c2e2a]">
                Tersedia untuk Proyek Freelance & Kontrak Profesional
              </p>
              <p className="text-[11px] sm:text-xs text-[#2c2e2a]/60 mt-0.5">
                Siap berdiskusi untuk inisiatif baru dan kolaborasi jangka panjang.
              </p>
            </div>
          </div>

          {/* Zona Waktu Lokal */}
          <div className="bg-[#ffffff] rounded-[20px] sm:rounded-[26px] p-6 sm:p-7 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f5f1e4] flex items-center justify-center shrink-0 text-[#2c2e2a]">
              <Clock size={24} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/60 block mb-1">
                Waktu Lokal • Pandeglang, Banten
              </span>
              <p className="text-xl sm:text-2xl font-black text-[#2c2e2a] tracking-tight">
                {timeString || 'Memuat waktu...'} <span className="text-xs font-bold text-[#2c2e2a]/60">WIB (UTC+7)</span>
              </p>
              <p className="text-[11px] sm:text-xs text-[#2c2e2a]/60 mt-0.5">
                Waktu operasional aktif: 08.00 — 22.00 WIB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. CALL TO ACTION (CTA) BANNER                          */}
      {/* ======================================================== */}
      <section className="w-full">
        <div className="bg-[#2c2e2a] text-[#ffffff] rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 md:p-16 text-center flex flex-col items-center justify-center space-y-5 sm:space-y-6">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8ed462]">
            Mulai Percakapan
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-2xl leading-tight">
            Punya Ide Proyek Menarik atau Ingin Berkolaborasi?
          </h2>
          <p className="text-xs sm:text-base text-[#ffffff]/75 max-w-xl leading-relaxed">
            Saya selalu terbuka untuk mendiskusikan peluang kerja sama baru, pengembangan aplikasi, desain produk, atau sekadar berbagi wawasan teknologi.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-[#8ed462] text-[#2c2e2a] font-black text-sm sm:text-base tracking-wide hover:bg-[#ffffff] hover:text-[#2c2e2a] transition-all cursor-pointer group active:scale-95"
            >
              <span>Hubungi Saya Sekarang</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeShowcase;
