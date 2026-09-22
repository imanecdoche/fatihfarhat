import React from 'react';
import {
  Palette,
  Layout,
  Layers,
  BookOpen,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { SiDribbble } from 'react-icons/si';

export const DesignPortfolio: React.FC = () => {
  const designProjects = [
    {
      id: 'mindmarket-design-system',
      title: 'MindMarket UI Design System & Component Library',
      category: 'UI/UX & Design Systems',
      subtitle: 'Token Architecture, 8-Point Grid Foundation & Accessible Patterns',
      description:
        'Sistem desain modular komprehensif yang dirancang untuk platform web berdensitas tinggi. Mengintegrasikan arsitektur token tiga lapis (primitives, semantic, component) dengan penegakan grid 8-point sistematis.',
      deliverables: [
        'Arsitektur token warna semantik WCAG AAA untuk tema terang dan gelap.',
        'Sistem tata letak ritme matematika 8pt dengan baseline sub-grid 4pt.',
        'Spesifikasi komponen UI: Tombol, form input, modal, dan data table.',
        'Panduan interaksi mikro dan kurva easing transisi visual.',
      ],
      tools: 'Figma • Tailwind CSS • Radix UI • Design Tokens',
      icon: Layout,
    },
    {
      id: 'editorial-typography',
      title: 'Editorial Typography & Classical Book Layout System',
      category: 'Print & Editorial Typography',
      subtitle: 'Classical Margin Proportion, Golden Ratio & Microtypography',
      description:
        'Perancangan tata letak buku dan naskah literatur komprehensif dengan pendekatan kanon proporsi klasik (Van de Graaf canon). Mengutamakan keterbacaan tinggi untuk ratusan halaman naskah berkelanjutan.',
      deliverables: [
        'Kalkulasi proporsi marjin bidang teks emas (*golden section margin ratio*).',
        'Kalibrasi optical margin alignment, kerning manual, dan tracking ketat.',
        'Hierarki tipografi editorial: drop-caps, running headers, dan nomor halaman.',
        'Layout spesifikasi percetakan format A5 & B5 standar penerbitan.',
      ],
      tools: 'Adobe InDesign • Adobe Illustrator • Typography Pairing',
      icon: BookOpen,
    },
    {
      id: 'corporate-identity',
      title: 'Corporate Identity Program & Brand Architecture',
      category: 'Brand Identity & Visual System',
      subtitle: 'Geometric Logo Construction, Stationery Suite & Brand Guidelines',
      description:
        'Perancangan identitas visual korporat terpadu mulai dari konstruksi geometris logo hingga aplikasi implementasi materi komunikasi resmi, stationery kit, dan merchandise pendukung.',
      deliverables: [
        'Konstruksi grid logo berbasis rasio matematika dan safe clearance area.',
        'Matriks palet warna korporat: CMYK, RGB, HEX, dan Pantone standar.',
        'Desain paket kop surat, amplop resmi, kartu nama, dan tanda pengenal.',
        'Buku panduan brand (*brand guideline manual*) komprehensif.',
      ],
      tools: 'Adobe Illustrator • Adobe Photoshop • Vector System',
      icon: Palette,
    },
    {
      id: 'product-interface-design',
      title: 'Minimalist Tactile Web Interface & Product UX',
      category: 'Product Design & Web UI',
      subtitle: 'Content-First Wireframing, Cognitive Load Reduction & Zero Bloat',
      description:
        'Eksplorasi antarmuka digital yang menghilangkan beban visual berlebih demi menghadirkan alur kerja yang intuitif, cepat, dan terfokus pada konten pengguna yang sesungguhnya.',
      deliverables: [
        'Wireframing alur tugas utama dan pemetaan arsitektur informasi terstruktur.',
        'Pengurangan beban kognitif melalui hierarki tipografi kontras murni.',
        'Prototipe interaktif state komponen: default, hover, focus, dan active.',
        'Desain adaptif lintas perangkat: desktop, tablet, dan smartphone.',
      ],
      tools: 'Figma • Prototyping • Design Thinking • UX Research',
      icon: Layers,
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 font-sans space-y-12 sm:space-y-16">
      {/* Category Section Header */}
      <div className="text-left max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight leading-[1.1]">
          Portofolio Desain Grafis & UI/UX
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#2c2e2a]/75 leading-relaxed">
          Koleksi proyek perancangan antarmuka pengguna, sistem desain modular, tipografi editorial, dan arsitektur identitas visual terpadu.
        </p>
      </div>

      {/* Grid of Design Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {designProjects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.id}
              className="bg-[#ffffff] rounded-[24px] sm:rounded-[30px] border border-[#2c2e2a]/15 p-7 sm:p-9 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Category */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5f1e4] flex items-center justify-center text-[#2c2e2a]">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/50">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-black text-[#2c2e2a] tracking-tight mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-[13px] font-bold text-[#8ed462] mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#2c2e2a]/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Deliverables / Highlights */}
                <div className="pt-4 border-t border-[#2c2e2a]/10 space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50 block">
                    Cakupan Hasil Kerja & Spesifikasi:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#2c2e2a]/80">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#8ed462] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="pt-4 border-t border-[#2c2e2a]/10 flex items-center justify-between text-xs">
                <span className="font-bold text-[#2c2e2a]/80">
                  Perangkat & Standar:
                </span>
                <span className="font-semibold text-[#2c2e2a]/60">
                  {project.tools}
                </span>
              </div>
            </div>
          );
        })}
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
    </div>
  );
};

export default DesignPortfolio;
