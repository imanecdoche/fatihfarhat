import React from 'react';
import { ArrowRight } from 'lucide-react';

export type PortfolioCategoryType = 'all' | 'software' | 'writing' | 'design' | 'content' | 'music';

interface PortfolioCategoriesProps {
  onSelectCategory: (category: PortfolioCategoryType) => void;
}

export const PortfolioCategories: React.FC<PortfolioCategoriesProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'software' as PortfolioCategoryType,
      title: 'Software Engineering',
      tagline: 'Rekayasa Perangkat Lunak & Sistem',
      description:
        'Aplikasi mobile Android, low-latency audio DSP, user-space driver hardware Linux, interactive game logic overlay, dan web apps.',
      featuredItems: [
        'VOX — Minimalist Audio Engine',
        'Epson L1110 Linux Driver & GUI',
        'ChessBeater — Tactical Overlay',
        'RePrompter — Rhythm Teleprompter',
      ],
      actionLabel: 'Jelajahi Software Engineering',
    },
    {
      id: 'writing' as PortfolioCategoryType,
      title: 'Karya Tulis & Literatur',
      tagline: 'Novel Sejarah & Karya Sastra',
      description:
        'Koleksi karya sastra orisinal, novel sejarah Islam berbasis riset shahih, naskah risalah peradaban, dan eksplorasi naratif mendalam.',
      featuredItems: [
        'Risalah Terakhir dari Padang Pasir',
        '900 Musim Dingin',
        'Sebelas Bintang',
        "The Beastkeeper's Secret",
      ],
      actionLabel: 'Jelajahi Karya Tulis',
    },
    {
      id: 'design' as PortfolioCategoryType,
      title: 'Desain Grafis & UI/UX',
      tagline: 'Antarmuka Visual & Identitas Brand',
      description:
        'Perancangan sistem desain terstruktur, wireframing teliti, tata letak editorial, corporate identity mockup, dan visual branding.',
      featuredItems: [
        'MindMarket UI Design System',
        'Editorial Typography & Book Layout',
        'Corporate Identity Program & Mockups',
        'Interactive Web Component Architecture',
      ],
      actionLabel: 'Jelajahi Portofolio Desain',
    },
    {
      id: 'content' as PortfolioCategoryType,
      title: 'Konten Kreator & Multimedia',
      tagline: 'Produksi Audiovisual & Media Digital',
      description:
        'Produksi video storytelling berkecepatan dinamis, motion assets, copywriting persuasif, dan strategi konten digital modern.',
      featuredItems: [
        'Short-Form Narrative Video Editing',
        'Tech Instructional & Tutorial Media',
        'Brand Promotional Copywriting',
        'Kinetic Typography & Motion Graphics',
      ],
      actionLabel: 'Jelajahi Konten Kreator',
    },
    {
      id: 'music' as PortfolioCategoryType,
      title: 'Music & Sound Design',
      tagline: 'Produksi Musik, Komposisi Instrumental & Audio Engineering',
      description:
        'Komposisi instrumental orisinal, aransemen partitur orkestra, perancangan sintesis audio DSP latency rendah, foley sinematik, dan mixing mastering audio.',
      featuredItems: [
        'Masihkah Aku Diterima (Spotify Single)',
        'Halfway (Alternative Pop Single)',
        'Wind of Fall (Acoustic Ballad)',
        'ZeroTwenty Spotify & Suno Catalog',
      ],
      actionLabel: 'Jelajahi Music & Sound Design',
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 font-sans">
      {/* Category Selection Header */}
      <div className="mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight leading-tight">
          Pilih Kategori Portofolio
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#2c2e2a]/70 leading-relaxed">
          Silakan pilih fokus portofolio yang ingin Anda eksplorasi untuk melihat detail karya dan dokumentasi teknis yang relevan.
        </p>
      </div>

      {/* 2x2 Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {categories.map((cat) => {
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="bg-[#ffffff] rounded-[24px] sm:rounded-[30px] border border-[#2c2e2a]/15 p-7 sm:p-9 flex flex-col justify-between transition-all hover:border-[#2c2e2a]/40 cursor-pointer group select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(cat.id);
                }
              }}
              aria-label={`Pilih kategori portofolio ${cat.title}`}
            >
              <div>
                {/* Header Tagline */}
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/55">
                    {cat.tagline}
                  </span>
                </div>

                {/* Category Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-[#2c2e2a] tracking-tight mb-3 group-hover:text-[#8ed462] transition-colors">
                  {cat.title}
                </h3>

                {/* Category Description */}
                <p className="text-xs sm:text-sm text-[#2c2e2a]/70 leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Featured Project List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#2c2e2a]/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/45 block mb-2">
                    Karya Pilihan Termasuk:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#2c2e2a]/80 font-medium">
                    {cat.featuredItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8ed462] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#2c2e2a]/10 flex items-center justify-between text-sm font-bold text-[#2c2e2a] group-hover:text-[#8ed462] transition-colors">
                <span>{cat.actionLabel}</span>
                <div className="w-9 h-9 rounded-full bg-[#f5f1e4] group-hover:bg-[#8ed462] group-hover:text-[#2c2e2a] flex items-center justify-center transition-colors">
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioCategories;
