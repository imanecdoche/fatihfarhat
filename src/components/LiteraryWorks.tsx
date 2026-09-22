import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight, Eye, Star } from 'lucide-react';
import { SiWattpad } from 'react-icons/si';

interface Novel {
  id: string;
  title: string;
  genre: string;
  author: string;
  year: string;
  pages: string;
  words: string;
  chapters: string;
  coverImage: string;
  synopsis: string;
  highlight: string;
  quote: string;
}

interface WattpadStory {
  id: string;
  title: string;
  author: string;
  views: number;
  votes: number;
  parts: number;
  ranking?: string;
  status: string;
  coverImage: string;
  synopsis: string;
  url: string;
}

const novels: Novel[] = [
  {
    id: 'risalah-terakhir',
    title: 'Risalah Terakhir dari Padang Pasir',
    genre: 'Novel Sejarah Islam / Sirah Nabawiyah',
    author: 'Fatih Farhat Asshidiq',
    year: '2026',
    pages: '323 Halaman A5',
    words: '55.031 Kata',
    chapters: '27 Bagian Lengkap',
    coverImage: '/covers/risalah_terakhir.jpeg',
    synopsis:
      'Hikayat perjalanan agung Rasulullah SAW dari bukit-bukit Bakkah menuju fajar peradaban Madinah yang disusun dengan adab tertinggi serta riset komprehensif Al-Qur\'an dan Kutubus Sittah.',
    highlight: 'Disusun melalui riset ketat sirah shahih, menjaga adab Maqam Kenabian tanpa visualisasi fisik langsung.',
    quote:
      '"Pada hari ini, aku mengatakan kepada kalian sebagaimana saudaraku Yusuf berkata: Tidak ada celaan bagi kalian pada hari ini. Pergilah, karena kalian adalah orang-orang yang bebas!"',
  },
  {
    id: 'sembilan-ratus-musim-dingin',
    title: '900 Musim Dingin',
    genre: 'Novel Sejarah Islam / Kisah Nabi Nuh',
    author: 'Fatih Farhat Asshidiq',
    year: '2026',
    pages: '180 Halaman A5',
    words: '32.500 Kata',
    chapters: '16 Bab',
    coverImage: '/covers/sembilan_ratus_musim_dingin.jpg',
    synopsis:
      'Kisah keteguhan luar biasa Nabi Nuh \'alaihissalam mendakwahi kaumnya selama 950 tahun di tengah pengingkaran zaman, merakit bahtera di puncak bukit tandus hingga tibanya pemurnian air bah.',
    highlight: 'Eksplorasi emosi dan ketabahan dakwah terlama dalam sejarah kenabian serta pesan integritas jiwa manusiawi.',
    quote:
      '"Kayu-kayu ini tidak tumbuh untuk membalas dendam, melainkan untuk menjadi rumah bagi mereka yang percaya pada fajar baru."',
  },
  {
    id: 'sebelas-bintang',
    title: 'Sebelas Bintang',
    genre: 'Novel Sejarah Islam & Manajemen Krisis',
    author: 'Fatih Farhat Asshidiq',
    year: '2026',
    pages: '240 Halaman A5',
    words: '42.000 Kata',
    chapters: '20 Bab',
    coverImage: '/covers/sebelas_bintang.png',
    synopsis:
      'Rekonstruksi sastrawi kisah Nabi Yusuf \'alaihissalam: dari sumur kering Kanaan, godaan istana, dinginnya penjara, hingga kemegahan takhta Mesir dan kepemimpinan visioner mengelola lumbung pangan akbar.',
    highlight: 'Kajian mendalam Ahsanul Qashash, kecerdasan perencanaan logistik publik, dan refleksi kesabaran yang indah.',
    quote:
      '"Wahai ayahku! Inilah takwil mimpiku yang dahulu itu; sesungguhnya Tuhanku telah menjadikannya kenyataan."',
  },
  {
    id: 'golden-ratio',
    title: 'Golden Ratio',
    genre: 'Fiksi & Sains Matematika',
    author: 'Fatih Farhat Asshidiq',
    year: '2025',
    pages: '210 Halaman Cetak',
    words: '36.000 Kata',
    chapters: '18 Bab',
    coverImage: '/covers/golden_ratio.png',
    synopsis:
      'Misteri intelektual yang menelusuri rahasia bilangan rasio emas (phi) dalam geometri alam, arsitektur kuno, dan jejak teka-teki hilangnya seorang perancang bangunan legendaris.',
    highlight: 'Harmonisasi fiksi misteri, sains geometri populer, dan teka-teki logika yang mengasah daya nalar.',
    quote:
      '"Di setiap sudut semesta yang tampak acak, keteraturan selalu menyembunyikan wajahnya dalam senyuman simetri."',
  },
  {
    id: 'the-beastkeeper-secret',
    title: "The Beastkeeper's Secret",
    genre: 'Fantasi & Sastra Satwa Purba',
    author: 'Fatih Farhat Asshidiq',
    year: '2025',
    pages: '260 Halaman Cetak',
    words: '45.000 Kata',
    chapters: '22 Bab',
    coverImage: '/covers/the_beastkeepers_secret.png',
    synopsis:
      'Ikrar sakral seorang pemuda penjaga satwa purba terakhir di lembah jurang es abadi di tengah ancaman ekspansi kota besi, menghadirkan suara tentang keselarasan antara manusia dan alam.',
    highlight: 'Worldbuilding mendalam flora dan fauna mitologis dengan resonansi etika pelestarian biosfer bumi.',
    quote:
      '"Mereka yang tak pernah mendengarkan desah napas hutan tak akan pernah mengerti arti kesetiaan seekor makhluk liar."',
  },
  {
    id: 'bayangan-azkaban',
    title: 'Bayangan Azkaban (The Beastkeeper II)',
    genre: 'Sekuel Fantasi & Petualangan Epik',
    author: 'Fatih Farhat Asshidiq',
    year: '2025',
    pages: '280 Halaman Cetak',
    words: '48.000 Kata',
    chapters: '24 Bab',
    coverImage: '/covers/the_beastkeeper_buku_2.png',
    synopsis:
      'Kelanjutan saga penjaga satwa purba menghadapi benteng misterius Azkaban dan konspirasi pemanfaatan energi makhluk mitis di pusat hegemoni kekuasaan imperium.',
    highlight: 'Eskalasi pertempuran taktis berskala besar, sistem sihir purba, dan pergulatan etika kebebasan sejati.',
    quote:
      '"Benteng ini mungkin dibangun dari batu terkeras, namun tekad yang lahir dari kebebasan akan selalu menemukan celah untuk meruntuhkannya."',
  },
];

const wattpadStories: WattpadStory[] = [
  {
    id: 'nada-di-lantai-27',
    title: 'Nada di Lantai 27',
    author: 'Fatih F. Asshidiq',
    views: 57,
    votes: 4,
    parts: 9,
    ranking: '#12 dalam Gen-Z',
    status: 'Dipublikasikan',
    coverImage: '/covers/nada_di_lantai_27.png',
    synopsis:
      'Di tengah rimba beton Jakarta, Angga hanyalah seorang anak muda yang bermimpi untuk memulai hidup baru. Diterima bekerja di sebuah agensi periklanan ternama adalah langkah pertamanya. Namun, sebuah insiden di suatu malam membawanya pada melodi misterius dari jendela lantai 27...',
    url: 'https://www.wattpad.com/user/imanecdoche',
  },
  {
    id: 'bayangan-azkaban-wattpad',
    title: "The Beastkeeper's Secret: Bayangan Azkaban",
    author: 'Fatih Farhat Asshidiq',
    views: 30,
    votes: 6,
    parts: 15,
    ranking: '#718 dalam SiriusBlack',
    status: 'Dipublikasikan',
    coverImage: '/covers/the_beastkeeper_buku_2.png',
    synopsis:
      'Tahun 1993. Bayang-bayang kelam menyelimuti Kastil Hogwarts pasca-kaburnya Sirius Black dari benteng terkutuk Azkaban. Ratusan Dementor dikerahkan menjaga gerbang sekolah, menyebarkan radiasi hawa beku nekrotik yang mengancam keseimbangan satwa purba magis.',
    url: 'https://www.wattpad.com/user/imanecdoche',
  },
  {
    id: 'tentang-dia',
    title: 'Tentang Dia',
    author: 'Fatih F. Asshiddiq',
    views: 134,
    votes: 24,
    parts: 23,
    ranking: '#259 dalam Teka-Teki',
    status: 'Dipublikasikan',
    coverImage: '/covers/tentang_dia.png',
    synopsis:
      'Untuk memenangkan hati seorang gadis, Kevin setuju menggunakan keahlian meretasnya untuk memberi pelajaran pada saingan sahabatnya. Apa yang dimulai sebagai lelucon balas dendam di dunia maya dengan cepat berubah menjadi teka-teki tak terduga.',
    url: 'https://www.wattpad.com/user/imanecdoche',
  },
  {
    id: 'secangkir-kopi',
    title: 'Secangkir Kopi Sebelum Mati',
    author: 'Fatih F.A.',
    views: 17,
    votes: 9,
    parts: 16,
    ranking: 'Keluarga • Rantau • Kehormatan',
    status: 'Draf Penulisan Aktif',
    coverImage: '/covers/secangkir_kopi_sebelum_mati.png',
    synopsis:
      'Kisah tentang luka, penyesalan, dan cinta yang tidak pernah padam, bahkan setelah kematian. Reza, seorang pemuda yang tumbuh dalam kekacauan ekonomi dan keluarga yang runtuh, menelusuri arti penerimaan di balik secangkir kopi terakhirnya.',
    url: 'https://www.wattpad.com/user/imanecdoche',
  },
];

export const LiteraryWorks: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="text-[#8ed462] shrink-0" size={24} />
          <span className="font-mono text-sm sm:text-base font-bold text-[#8ed462]">
            Karya Sastra, Fiksi & Penulisan Naratif
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight mb-4">
          Pustaka Novel & Karya Sastra Orisinal
        </h2>
        <p className="text-base sm:text-lg text-[#2c2e2a]/75 max-w-4xl leading-relaxed">
          Dedikasi kepenulisan fiksi panjang, riset historis sirah nabawiyah yang mendalam, rekonstruksi peradaban,
          serta perancangan semesta naratif terstruktur—terekam dalam naskah-naskah novel utuh yang telah selesai ditulis.
        </p>

        {/* Aggregate Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 p-4 sm:p-6 rounded-[24px] bg-[#ffffff] border border-[#2c2e2a]/10">
          <div className="p-3 sm:p-4">
            <span className="block text-2xl sm:text-3xl font-black text-[#2c2e2a]">6 Novel</span>
            <span className="text-xs sm:text-sm text-[#2c2e2a]/65 font-medium">Naskah Sastra Utuh</span>
          </div>
          <div className="p-3 sm:p-4 border-l border-[#2c2e2a]/10">
            <span className="block text-2xl sm:text-3xl font-black text-[#2c2e2a]">1.493+</span>
            <span className="text-xs sm:text-sm text-[#2c2e2a]/65 font-medium">Halaman Cetak Terstruktur</span>
          </div>
          <div className="p-3 sm:p-4 border-t md:border-t-0 md:border-l border-[#2c2e2a]/10">
            <span className="block text-2xl sm:text-3xl font-black text-[#8ed462]">258.500+</span>
            <span className="text-xs sm:text-sm text-[#2c2e2a]/65 font-medium">Total Kata Orisinal</span>
          </div>
          <div className="p-3 sm:p-4 border-t md:border-t-0 border-l border-[#2c2e2a]/10">
            <span className="block text-2xl sm:text-3xl font-black text-[#2c2e2a]">100%</span>
            <span className="text-xs sm:text-sm text-[#2c2e2a]/65 font-medium">Riset Historis & Mandiri</span>
          </div>
        </div>
      </div>

      {/* Grid of Books */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {novels.map((novel, idx) => (
          <motion.article
            key={novel.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col justify-between p-5 sm:p-7 rounded-[28px] sm:rounded-[32px] bg-[#ffffff] border border-[#2c2e2a]/10 hover:border-[#2c2e2a]/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div>
              {/* Book Cover Frame */}
              <div className="w-full aspect-[3/4] max-h-[380px] rounded-2xl overflow-hidden bg-[#f5f1e4] border border-[#2c2e2a]/12 mb-6 flex items-center justify-center relative shadow-sm group-hover:border-[#2c2e2a]/25 transition-colors">
                <img
                  src={novel.coverImage}
                  alt={`Sampul novel ${novel.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Book Title */}
              <h3 className="text-xl sm:text-2xl font-black text-[#2c2e2a] tracking-tight leading-snug mb-2">
                {novel.title}
              </h3>

              {/* Release Year */}
              <p className="text-xs font-mono font-bold text-[#2c2e2a]/60 mb-4 pb-3 border-b border-[#2c2e2a]/10">
                Tahun Rilis: {novel.year}
              </p>

              {/* Synopsis */}
              <div className="mb-6">
                <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2c2e2a]/55 mb-1.5">
                  Sinopsis Karya
                </h4>
                <p className="text-sm leading-relaxed text-[#2c2e2a]/85 font-normal">
                  {novel.synopsis}
                </p>
              </div>
            </div>

            {/* Bottom Spec Details */}
            <div className="pt-3.5 border-t border-[#2c2e2a]/10 flex items-center justify-between text-xs font-mono text-[#2c2e2a]/65">
              <span>{novel.chapters}</span>
              <span className="font-bold text-[#2c2e2a]">Naskah Lengkap</span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* ======================================================== */}
      {/* 2. SERIAL FIKSI WATTPAD                                  */}
      {/* ======================================================== */}
      <div className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-[#2c2e2a]/10">
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <SiWattpad className="text-[#ff6122] shrink-0" size={24} />
            <span className="font-mono text-sm sm:text-base font-bold text-[#ff6122]">
              Serial Fiksi Digital • Wattpad
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight mb-4">
            Karya & Serial Fiksi di Wattpad
          </h3>
          <p className="text-base sm:text-lg text-[#2c2e2a]/75 max-w-4xl leading-relaxed">
            Koleksi serial novel web, cerita bersambung kontemporer, dan eksperimen naratif orisinal yang dipublikasikan secara daring di platform Wattpad.
          </p>

          {/* Wattpad Cumulative Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 p-4 sm:p-6 rounded-[24px] bg-[#ffffff] border border-[#2c2e2a]/10">
            <div className="p-3 sm:p-4">
              <span className="block text-2xl sm:text-3xl font-black text-[#2c2e2a]">4 Karya</span>
              <span className="text-xs sm:text-sm text-[#2c2e2a]/65 font-medium">Serial Fiksi Wattpad</span>
            </div>
            <div className="p-3 sm:p-4 border-l border-[#2c2e2a]/10">
              <span className="block text-2xl sm:text-3xl font-black text-[#ff6122]">238+</span>
              <span className="text-xs sm:text-sm text-[#2c2e2a]/65 font-medium">Total Pembaca (Views)</span>
            </div>
            <div className="p-3 sm:p-4 border-t md:border-t-0 md:border-l border-[#2c2e2a]/10">
              <span className="block text-2xl sm:text-3xl font-black text-[#e6a817]">43+</span>
              <span className="text-xs sm:text-sm text-[#2c2e2a]/65 font-medium">Suara Apresiasi (Votes)</span>
            </div>
            <div className="p-3 sm:p-4 border-t md:border-t-0 border-l border-[#2c2e2a]/10">
              <span className="block text-2xl sm:text-3xl font-black text-[#2c2e2a]">63 Bab</span>
              <span className="text-xs sm:text-sm text-[#2c2e2a]/65 font-medium">Total Bab Dirilis</span>
            </div>
          </div>
        </div>

        {/* Grid of Wattpad Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {wattpadStories.map((story, sIdx) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: sIdx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] bg-[#ffffff] border border-[#2c2e2a]/10 hover:border-[#2c2e2a]/30 transition-all duration-300 group"
            >
              <div>
                {/* Horizontal Top: Cover + Core Info */}
                <div className="flex gap-5 sm:gap-6 mb-5">
                  {/* Cover */}
                  <div className="w-24 sm:w-28 aspect-[2/3] rounded-xl overflow-hidden bg-[#f5f1e4] border border-[#2c2e2a]/10 shrink-0">
                    <img
                      src={story.coverImage}
                      alt={`Sampul ${story.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Stats */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-[#2c2e2a] tracking-tight leading-snug group-hover:text-[#ff6122] transition-colors mb-1">
                        {story.title}
                      </h4>
                      <p className="text-xs font-bold text-[#2c2e2a]/55 mb-3">
                        Karya: {story.author}
                      </p>
                    </div>

                    {/* Stats Row with Views and Votes */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-[#2c2e2a]/75 pb-2 border-b border-[#2c2e2a]/10">
                      <span className="flex items-center gap-1.5 text-[#2c2e2a]">
                        <Eye size={14} className="text-[#2c2e2a]/60" />
                        <span>{story.views} Views</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-[#e6a817]">
                        <Star size={14} fill="currentColor" />
                        <span>{story.votes} Votes</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-[#2c2e2a]/60">
                        <BookOpen size={14} />
                        <span>{story.parts} Bab</span>
                      </span>
                    </div>

                    {story.ranking && (
                      <p className="text-[11px] font-semibold text-[#ff6122] mt-2">
                        {story.ranking}
                      </p>
                    )}
                  </div>
                </div>

                {/* Synopsis */}
                <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#2c2e2a]/75 mb-6 font-normal">
                  {story.synopsis}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-[#2c2e2a]/10 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-[#2c2e2a]/55">
                  Status: {story.status}
                </span>
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#ff6122] hover:text-[#e04f14] transition-colors"
                >
                  <span>Buka di Wattpad</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Master Wattpad Profile Action Button */}
        <div className="pt-10 sm:pt-14 text-center flex flex-col items-center justify-center">
          <a
            href="https://www.wattpad.com/user/imanecdoche"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-[50px] bg-[#2c2e2a] text-[#ffffff] hover:bg-[#ff6122] hover:text-[#ffffff] font-bold text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-95 cursor-pointer select-none group"
          >
            <SiWattpad size={21} className="shrink-0 text-[#ff6122] group-hover:text-[#ffffff] transition-colors" />
            <span>Buka Profil Lengkap di Wattpad</span>
            <ArrowUpRight size={17} className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiteraryWorks;
