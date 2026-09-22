import React from 'react';
import {
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { SiTiktok, SiYoutube } from 'react-icons/si';

export const ContentPortfolio: React.FC = () => {
  const contentProjects = [
    {
      id: 'short-form-video',
      title: 'Short-Form Narrative Video Production & Dynamic Editing',
      category: 'Video Editing & Creative Storytelling',
      subtitle: 'High-Retention Hook Pacing, Audio Layering & Kinetic Text',
      description:
        'Produksi dan penyuntingan video format vertikal modern (Reels/TikTok/Shorts) dengan fokus pada retensi penonton tinggi melalui ritme potongan presisi, sound design atmosferik, dan tipografi dinamis.',
      highlights: [
        'Arsitektur 3 detik pertama (hook) untuk memaksimalkan retensi audiens.',
        'Audio mixing berlapis: voice-over jernih, ambient audio, dan SFX berbobot.',
        'Penyelarasan warna (color grading) natural yang konsisten di berbagai layar.',
        'Integrasi kinetic typography untuk keterbacaan tanpa suara (muted playback).',
      ],
      tools: 'DaVinci Resolve • Adobe Premiere Pro • CapCut Desktop',
    },
    {
      id: 'tech-instructional-media',
      title: 'Technical Educational Media & Coding Walkthroughs',
      category: 'Instructional Tech Content',
      subtitle: 'Structured Concept Explanations, Clean Screencasting & Diagramming',
      description:
        'Pembuatan konten edukasi teknologi yang menyederhanakan konsep rekayasa perangkat lunak dan arsitektur sistem yang rumit menjadi penjelasan visual langkah demi langkah yang ramah bagi pemula.',
      highlights: [
        'Struktur modul terencana: pengantar masalah, solusi kode, dan uji coba nyata.',
        'Perekaman layar (screencast) beresolusi tinggi dengan penekanan visual kursor.',
        'Diagram alur konsep teranimasi untuk memvisualisasikan cara kerja algoritma.',
        'Penyusunan ringkasan catatan kuliah dan repositori kode sumber pendukung.',
      ],
      tools: 'OBS Studio • Premiere Pro • Markdown Documentation • Figma',
    },
    {
      id: 'creative-copywriting',
      title: 'Persuasive Brand Storytelling & Commercial Copywriting',
      category: 'Digital Copywriting & Narrative Scripts',
      subtitle: 'Emotionally Resonant Storylines, Product Positioning & Microcopy',
      description:
        'Penyusunan naskah narasi dan copywriting strategis yang menyentuh sisi manusiawi pembaca, membangun kredibilitas merek, dan mendorong audiens mengambil tindakan tanpa terkesan memaksa.',
      highlights: [
        'Naskah narasi video profil dan manifesto visi produk digital.',
        'Microcopy antarmuka aplikasi: dialog aksi, onboarding, dan error states empatik.',
        'Artikel teknologi mendalam (long-form blog) dengan penulisan beradab.',
        'Struktur copy landing page berbasis formula pemecahan masalah (Problem-Agitate-Solve).',
      ],
      tools: 'Copywriting Frameworks • Audience Psychology • Editorial Tone Guide',
    },
    {
      id: 'motion-graphics-assets',
      title: 'Brand Motion Assets & Visual Ident Animations',
      category: 'Motion Design & Visual Branding',
      subtitle: 'Kinetic Intros, Lower-Thirds & Seamless Social Media Assets',
      description:
        'Pengembangan elemen motion grafis untuk melengkapi identitas visual video: pembuka saluran (ident), lower-third informasi narasumber, dan transisi grafis yang selaras dengan panduan brand.',
      highlights: [
        'Bumper intro dan outro animasi vektor dengan durasi ringkas dan berbobot.',
        'Paket lower-third transparan yang siap digunakan di editor video non-linear.',
        'Animasi logo interaktif dengan kurva easing kinetik yang elastis dan mulus.',
        'Format ekspor teroptimasi dengan bobot file ringan tanpa degradasi kualitas.',
      ],
      tools: 'Adobe After Effects • Illustrator • Motion Design Principles',
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 font-sans space-y-12 sm:space-y-16">
      {/* Category Section Header */}
      <div className="text-left max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight leading-[1.1]">
          Portofolio Konten Kreator & Multimedia
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#2c2e2a]/75 leading-relaxed">
          Karya produksi video, penceritaan audiovisual, penulisan naskah naratif, dan rekayasa motion graphics untuk media digital modern.
        </p>
      </div>

      {/* Grid of Content Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {contentProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="bg-[#ffffff] rounded-[24px] sm:rounded-[30px] p-7 sm:p-9 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="mb-4">
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

                {/* Highlights / Disciplines */}
                <div className="pt-4 border-t border-[#2c2e2a]/10 space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50 block">
                    Fokus Eksekusi & Mutu Produksi:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#2c2e2a]/80">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#8ed462] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools & Workflow */}
              <div className="pt-4 border-t border-[#2c2e2a]/10 flex items-center justify-between text-xs">
                <span className="font-bold text-[#2c2e2a]/80">
                  Perangkat & Ekosistem:
                </span>
                <span className="font-semibold text-[#2c2e2a]/60">
                  {project.tools}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Video / Creative Action Buttons */}
      <div className="pt-8 sm:pt-12 text-center flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {/* TikTok Profile */}
        <a
          href="https://www.tiktok.com/@setphenhawkin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-[50px] bg-[#2c2e2a] text-[#ffffff] hover:bg-[#000000] hover:text-[#25f4ee] font-sans font-bold text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-95 cursor-pointer select-none group border border-transparent hover:border-[#fe2c55]/40"
        >
          <SiTiktok size={20} className="shrink-0 text-[#ffffff] group-hover:text-[#25f4ee] transition-colors" />
          <span>Profile TikTok</span>
          <ArrowUpRight size={17} className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* YouTube Channel */}
        <a
          href="https://www.youtube.com/@gimanajadinyaid"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-[50px] bg-[#2c2e2a] text-[#ffffff] hover:bg-[#ff0000] hover:text-[#ffffff] font-sans font-bold text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-95 cursor-pointer select-none group border border-transparent hover:border-[#ff0000]/40"
        >
          <SiYoutube size={22} className="shrink-0 text-[#ff0000] group-hover:text-[#ffffff] transition-colors" />
          <span>Buka YouTube</span>
          <ArrowUpRight size={17} className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
};

export default ContentPortfolio;
