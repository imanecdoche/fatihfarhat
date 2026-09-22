import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ArrowUpRight,
  Shield,
  Activity,
  Layers,
  Eye,
  UserCheck,
  X,
} from 'lucide-react';
import { SiDribbble, SiFigma } from 'react-icons/si';

interface ScreenData {
  id: string;
  name: string;
  badgeTitle: string;
  headline: string;
  subtitle: string;
  image: string;
  overview: string;
  keyModules: string[];
  technicalDetails: string[];
}

const screens: ScreenData[] = [
  {
    id: 'home',
    name: 'Beranda & Pusat Operasional',
    badgeTitle: 'URGENT INTERVENTION & OVERVIEW',
    headline: 'Confronting Crisis. Defending Humanity.',
    subtitle: 'Overview Operasional Terpadu & Pintu Masuk Penanganan Kemanusiaan',
    image: '/portfolio/humansights/home.png',
    overview:
      'Halaman beranda taktis yang menyajikan gambaran operasional terpusat secara langsung (real-time operational picture). Mengombinasikan telemetri kasus aktif, modul intervensi berbasis ICT, navigasi program strategis, serta integrasi alur donasi terpercaya.',
    keyModules: [
      'Counter Kasus Aktif Real-time (1,492 Active Cases) dengan indikator status Critical Active.',
      'Pusat Informasi & Intervensi ICT dengan monitoring node server langsung (NODE: JKT-01 Live Link).',
      'Inisiatif Strategis: GOTA (Gerakan Orang Tua Asuh), Ketahanan Pangan, dan Edukasi & Deradikalisasi.',
      'Tombol Tindakan Cepat (Quick Action CTA): Konsultasi Sekarang, Dukung Program, & Inisiasi Donasi.',
    ],
    technicalDetails: [
      'Gaya Visual: Dark-Mode Tactical Editorial dengan kontras tinggi dan aksen merah krisis.',
      'Arsitektur Navigasi: Header transparan dengan akses cepat Crisis Center, Programs, dan Donasi.',
      'Hierarki Tipografi: Font display serif tegas dipadukan dengan tipografi antarmuka bersih.',
    ],
  },
  {
    id: 'crisis-center',
    name: 'Crisis Center & Sektor Intervensi',
    badgeTitle: 'IMMEDIATE ASSISTANCE & SECURE INTAKE',
    headline: 'Crisis Center — Immediate Assistance',
    subtitle: 'Dukungan Profesional Rahasia & Jalur Hotline Darurat 24/7',
    image: '/portfolio/humansights/crisis_center.png',
    overview:
      'Pusat intervensi darurat bagi individu yang menghadapi ancaman hukum akut, krisis psikologis, atau diskriminasi sosial. Dilengkapi sektor intervensi multidisipliner dan portal komunikasi rahasia aman (Secure Communication Portal) dengan formulir intake terenkripsi.',
    keyModules: [
      'Jalur Bantuan Darurat: Emergency Hotline & Jalur WhatsApp Krisis 24/7 respon cepat di bawah 2 jam.',
      '5 Sektor Intervensi Khusus: Legal Aid, Psychology & Mental Health, Drug Rehab, Deradicalization, LGBT Counseling.',
      'Portal Komunikasi Rahasia (Secure Communication Portal): Formulir intake terenkripsi dengan alias pengirim.',
      'Indikator Urgensi: Checkbox khusus penandaan status kritis mendesak (life-threatening flag).',
    ],
    technicalDetails: [
      'Keamanan Pengguna: Formulir asinkron tanpa penyimpanan log IP terbuka (anti-trace architecture).',
      'Pemetaan Jalur Triase: Pengalihan otomatis kasus trauma berat ke spesialis medis terkait.',
      'Tampilan Sektor Interaktif: Desain kartu berdensitas informasi jelas dengan panduan konsultasi tim hukum.',
    ],
  },
  {
    id: 'programs',
    name: 'Inisiatif Aktif & Jadwal Operasi',
    badgeTitle: 'STRATEGIC PROGRAMS & RESOLVE',
    headline: 'Active Initiatives & Resolve',
    subtitle: 'Struktur Program Kemanusiaan, Triase Medis & Jadwal Operasi',
    image: '/portfolio/humansights/programs.png',
    overview:
      'Halaman arsitektur inisiatif aksi kemanusiaan struktural jangka panjang. Menampilkan program bantuan pangan mandiri, perwalian anak rentan, pemulihan ideologis, unit triase psikologis tanggap bencana, serta jadwal operasional di berbagai sektor wilayah.',
    keyModules: [
      'Kerangka Ketahanan Pangan: Rantai pasok pangan lokal dan distribusi bantuan di zona rentan.',
      'GOTA (Gerakan Orang Tua Asuh): Bimbingan pendidikan mandiri dan pendampingan psikososial anak terlantar.',
      'Framework Deradikalisasi & Triase Psikologis: Protokol reintegrasi dengan metrik keberhasilan 89%.',
      'Jadwal Operasional (Operational Schedule): Agenda penugasan lapangan (Jakarta Sector 4, Reintegration Seminar, Mentor Orientation).',
    ],
    technicalDetails: [
      'Penyajian Data Berkelanjutan: Visualisasi metrik kasus aktif dan rasio reintegrasi sosial nyata.',
      'Navigasi Jadwal Terstruktur: Komponen daftar jadwal penyebaran tim lapangan dengan aksi partisipasi.',
      'Alur Pendaftaran Terpadu: Tombol Volunteer, Closed Session Briefing, dan Register Mentor langsung.',
    ],
  },
];

export const DesignPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [modalImage, setModalImage] = useState<string | null>(null);

  const currentScreen = screens.find((s) => s.id === activeTab) || screens[0];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 font-sans space-y-12 sm:space-y-16">
      {/* Category Section Header */}
      <div className="text-left max-w-3xl">
        <p className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#8ed462] mb-3">
          UI/UX & WEB ARCHITECTURE SHOWCASE
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight leading-[1.1]">
          Portofolio Desain Grafis & UI/UX
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#2c2e2a]/75 leading-relaxed">
          Koleksi proyek perancangan prototipe web antarmuka pengguna interaktif, sistem krisis kemanusiaan komprehensif, dan arsitektur desain visual terpadu.
        </p>
      </div>

      {/* Main Project Feature Card */}
      <div className="bg-[#ffffff] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 select-none">
        {/* Project Header Info */}
        <div className="pb-8 border-b border-[#2c2e2a]/10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60">
              <Layers size={15} className="text-[#8ed462]" />
              <span>HIGH-FIDELITY WEB PROTOTYPE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2c2e2a] tracking-tight leading-tight">
              Humansights.org Website Prototype
            </h3>
            <p className="mt-2 text-sm sm:text-base font-bold text-[#8ed462]">
              Professional Resolve for Complex Humanitarian Action & Rapid Crisis Intervention
            </p>
            <p className="mt-4 text-xs sm:text-sm text-[#2c2e2a]/75 leading-relaxed">
              Prototipe digital komprehensif yang dirancang untuk platform kemanusiaan darurat. Mengintegrasikan pusat komando krisis (Crisis Center), pemantauan kasus aktif secara real-time, portal pelaporan aman terenkripsi (Secure Communication Portal), dan manajemen program intervensi sosial multidisipliner.
            </p>
          </div>

          {/* Client & Attribution Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#f5f1e4]/70 border border-[#2c2e2a]/10 shrink-0 lg:w-[320px]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60 mb-3">
              <UserCheck size={16} className="text-[#8ed462]" />
              <span>KLIEN & ATRIBUSI</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-black text-[#2c2e2a]">
                Syailendra Adi Sapta
              </p>
              <p className="text-xs font-bold text-[#2c2e2a]/70">
                Founder of Indonesia Contra Terror
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#2c2e2a]/10 space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#2c2e2a]/60">Peran:</span>
                <span className="font-bold text-[#2c2e2a]">UI/UX Designer</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#2c2e2a]/60">Tipe Karya:</span>
                <span className="font-bold text-[#2c2e2a]">Interactive Web Prototype</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#2c2e2a]/60">Perangkat:</span>
                <span className="font-bold text-[#2c2e2a]">Figma • Web Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Screen Tabs Selector */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60 mb-1">
                EKSPLORASI HALAMAN PROTOTIPE
              </p>
              <h4 className="text-lg sm:text-xl font-black text-[#2c2e2a]">
                Pilih Tampilan Halaman untuk Pratinjau
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {screens.map((screen) => {
                const isActive = activeTab === screen.id;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveTab(screen.id)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-200 cursor-pointer active:scale-95 ${
                      isActive
                        ? 'bg-[#2c2e2a] text-white'
                        : 'bg-[#f5f1e4] text-[#2c2e2a]/70 hover:bg-[#ebe7dc] hover:text-[#2c2e2a]'
                    }`}
                  >
                    {screen.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Screen Display Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Screenshot Preview (Left / Top) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2c2e2a]/10 bg-[#121412] aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src={currentScreen.image}
                  alt={currentScreen.headline}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Hover Overlay Button to View Fullscreen */}
                <div className="absolute inset-0 bg-[#2c2e2a]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <button
                    type="button"
                    onClick={() => setModalImage(currentScreen.image)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#2c2e2a] hover:bg-[#8ed462] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <Eye size={16} />
                    <span>Lihat Ukuran Penuh</span>
                  </button>
                </div>
              </div>

              {/* Quick Screen Selector Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {screens.map((screen) => {
                  const isSelected = activeTab === screen.id;
                  return (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => setActiveTab(screen.id)}
                      className={`relative rounded-xl overflow-hidden aspect-[16/10] border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#2c2e2a] ring-2 ring-[#2c2e2a]'
                          : 'border-[#2c2e2a]/15 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={screen.image}
                        alt={screen.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2">
                        <span className="text-[10px] sm:text-[11px] font-bold text-white truncate">
                          {screen.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Screen Details & Specifications (Right) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8ed462] mb-1">
                  {currentScreen.badgeTitle}
                </p>
                <h5 className="text-xl sm:text-2xl font-black text-[#2c2e2a] tracking-tight leading-snug">
                  {currentScreen.headline}
                </h5>
                <p className="text-xs sm:text-[13px] font-bold text-[#2c2e2a]/60 mt-1">
                  {currentScreen.subtitle}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-[#2c2e2a]/75 leading-relaxed">
                  {currentScreen.overview}
                </p>
              </div>

              {/* Key Features & Modules */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#f5f1e4]/70 border border-[#2c2e2a]/10 space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/60 block">
                  Fitur Utama & Modul Halaman:
                </span>
                <ul className="space-y-2 text-xs text-[#2c2e2a]/80">
                  {currentScreen.keyModules.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#8ed462] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Design Decisions */}
              <div className="space-y-2 text-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/60 block">
                  Pertimbangan Desain UI/UX:
                </span>
                <ul className="space-y-1.5 text-xs text-[#2c2e2a]/75">
                  {currentScreen.technicalDetails.map((td, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2c2e2a]/40 shrink-0 mt-1.5" />
                      <span>{td}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables & Technical Scope Section */}
        <div className="mt-12 pt-8 border-t border-[#2c2e2a]/10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60 mb-2">
            DELIVERABLES & TECHNICAL SPECIFICATIONS
          </p>
          <h4 className="text-xl sm:text-2xl font-black text-[#2c2e2a] tracking-tight mb-6">
            Cakupan Perancangan & Hasil Kerja UI/UX
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#f5f1e4]/60 border border-[#2c2e2a]/8 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#2c2e2a] text-white flex items-center justify-center">
                <Activity size={16} />
              </div>
              <h6 className="text-sm font-black text-[#2c2e2a]">Riset Alur Triase</h6>
              <p className="text-xs text-[#2c2e2a]/75 leading-relaxed">
                Pemetaan alur navigasi darurat dan respons cepat untuk korban atau pelapor yang membutuhkan intervensi mendesak.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f5f1e4]/60 border border-[#2c2e2a]/8 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#2c2e2a] text-white flex items-center justify-center">
                <Shield size={16} />
              </div>
              <h6 className="text-sm font-black text-[#2c2e2a]">Portal Asupan Rahasia</h6>
              <p className="text-xs text-[#2c2e2a]/75 leading-relaxed">
                Arsitektur formulir intake aman dengan prinsip kerahasiaan identitas dan opsi anonimitas penuh pelapor.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f5f1e4]/60 border border-[#2c2e2a]/8 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#2c2e2a] text-white flex items-center justify-center">
                <Layers size={16} />
              </div>
              <h6 className="text-sm font-black text-[#2c2e2a]">Design System Taktis</h6>
              <p className="text-xs text-[#2c2e2a]/75 leading-relaxed">
                Palet visual dark-theme dengan kontras tinggi, tipografi editorial serif, serta komponen interaktif terstruktur.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f5f1e4]/60 border border-[#2c2e2a]/8 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#2c2e2a] text-white flex items-center justify-center">
                <SiFigma size={16} />
              </div>
              <h6 className="text-sm font-black text-[#2c2e2a]">Prototipe Figma Terpadu</h6>
              <p className="text-xs text-[#2c2e2a]/75 leading-relaxed">
                Prototipe interaktif resolusi tinggi siap uji dengan transisi layar, state tombol, dan feedback mikro visual.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dribbble Portfolio Action Button */}
      <div className="pt-6 sm:pt-8 text-center flex flex-col items-center justify-center">
        <a
          href="https://dribbble.com/fatihfarhat"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-[50px] bg-[#2c2e2a] text-[#ffffff] hover:bg-[#ea4c89] hover:text-[#ffffff] font-bold text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-95 cursor-pointer select-none group"
        >
          <SiDribbble size={20} className="shrink-0 text-[#ea4c89] group-hover:text-[#ffffff] transition-colors" />
          <span>Buka Dribbble</span>
          <ArrowUpRight size={17} className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Fullscreen Lightbox Modal for Screenshots */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/90 p-4 sm:p-8 flex items-center justify-center"
            onClick={() => setModalImage(null)}
          >
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 p-3 rounded-full bg-[#2c2e2a] text-white hover:bg-white hover:text-[#2c2e2a] transition-colors cursor-pointer z-10"
              title="Tutup Pratinjau"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d0f0d] p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImage}
                alt="Humansights Prototype Full Screenshot"
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesignPortfolio;
