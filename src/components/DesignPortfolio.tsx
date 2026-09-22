import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ArrowUpRight,
  Eye,
  X,
} from 'lucide-react';
import { SiDribbble } from 'react-icons/si';

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

interface DeliverableItem {
  title: string;
  description: string;
}

interface ClientInfo {
  name: string;
  role: string;
  region: string;
  projectRole: string;
  workType: string;
  tools: string;
}

interface ProjectData {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  client: ClientInfo;
  screens: ScreenData[];
  deliverables: DeliverableItem[];
}

const projectsData: ProjectData[] = [
  {
    id: 'humansights',
    badge: 'HIGH-FIDELITY WEB PROTOTYPE',
    title: 'Humansights.org Website Prototype',
    tagline: 'Professional Resolve for Complex Humanitarian Action & Rapid Crisis Intervention',
    description:
      'Prototipe digital komprehensif yang dirancang untuk platform kemanusiaan darurat. Mengintegrasikan pusat komando krisis (Crisis Center), pemantauan kasus aktif secara real-time, portal pelaporan aman terenkripsi (Secure Communication Portal), dan manajemen program intervensi sosial multidisipliner.',
    client: {
      name: 'Syailendra Adi Sapta',
      role: 'Founder of Indonesia Contra Terror',
      region: 'Indonesia',
      projectRole: 'UI/UX Designer',
      workType: 'Interactive Web Prototype',
      tools: 'Figma • Web Architecture',
    },
    screens: [
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
    ],
    deliverables: [
      {
        title: 'Riset Alur Triase',
        description:
          'Pemetaan alur navigasi darurat dan respons cepat untuk korban atau pelapor yang membutuhkan intervensi mendesak.',
      },
      {
        title: 'Portal Asupan Rahasia',
        description:
          'Arsitektur formulir intake aman dengan prinsip kerahasiaan identitas dan opsi anonimitas penuh pelapor.',
      },
      {
        title: 'Design System Taktis',
        description:
          'Palet visual dark-theme dengan kontras tinggi, tipografi editorial serif, serta komponen interaktif terstruktur.',
      },
      {
        title: 'Prototipe Figma Terpadu',
        description:
          'Prototipe interaktif resolusi tinggi siap uji dengan transisi layar, state tombol, dan feedback mikro visual.',
      },
    ],
  },
  {
    id: 'kusuma-holistic',
    badge: 'HOLISTIC WELLNESS & CLINICAL PROTOTYPE',
    title: 'Kusuma Holistic Website Prototype',
    tagline: 'Traditional Wisdom Meets Modern Clinical Hygiene for Holistic Wellness',
    description:
      'Prototipe web terapis kesehatan holistik yang memadukan kearifan terapi tradisional (Bekam Sunnah, Pijat Refleksi, Totok Punggung, Infrared) dengan standar higienitas klinis modern. Dirancang untuk memberikan ketenangan pikiran bagi pasien dengan informasi tarif transparan, etalase produk madu herbal alami, ulasan autentik, peta klinik terpadu di Pandeglang Banten, serta alur reservasi instan melalui WhatsApp.',
    client: {
      name: 'Taufik Indra Kusuma',
      role: 'Theraphist',
      region: 'Indonesia',
      projectRole: 'UI/UX Designer',
      workType: 'Interactive Web Prototype',
      tools: 'Figma • Holistic UI System',
    },
    screens: [
      {
        id: 'home',
        name: 'Beranda & Solusi Terpadu',
        badgeTitle: 'SENTUHAN TERAPI DARI HATI YANG PEDULI',
        headline: 'Kusuma Holistic Therapy — Traditional Wisdom & Clinical Hygiene',
        subtitle: 'Pintu Masuk Terapi Menyeluruh & Pendekatan Pemulihan Alami',
        image: '/portfolio/kusumaholistic/home.png',
        overview:
          'Antarmuka beranda yang menghadirkan atmosfer tenang, hangat, dan terpercaya. Memadukan proposisi nilai terapi holistik alami 100%, kredibilitas terapis ahli bersertifikat, ringkasan 4 pilar solusi utama (Bekam Sunnah & Terapi Manual, Pijat Refleksi, Totok Punggung, Terapi Infrared & Herbal Alami), serta call-to-action ganda untuk memulai pemulihan.',
        keyModules: [
          'Hero Banner "Sentuhan Terapi dari Hati yang Peduli" dengan CTA ganda: Mulai Perjalanan Sehat & Pelajari Layanan.',
          'Indikator Kredibilitas Visual: Badge Terapi Alami 100% Holistik dan Terapis Ahli Bersertifikat.',
          'Grid Solusi Holistik Terpadu: Modul Bekam Sunnah, Pijat Refleksi, Totok Punggung, dan Terapi Infrared & Herbal.',
          'Aksen Kategori Navigasi: Tag terpadu Terapi Holistik, Bekam Sunnah, Refleksi, Totok, Infrared, dan Herbal Alami.',
        ],
        technicalDetails: [
          'Gaya Visual: Earthy Clean Palette dengan nuansa warm beige, sage green tenang, dan deep slate kontras tinggi.',
          'Hierarki Tipografi: Font display serif berwibawa berpadu harmonis dengan teks antarmuka sans-serif bersih.',
          'Akses Cepat Reservasi: Header terpadu dengan tombol Book Now dan floating WhatsApp quick action button.',
        ],
      },
      {
        id: 'services',
        name: 'Layanan Holistic & Investasi Tarif',
        badgeTitle: 'HOLISTIC SERVICES & TRANSPARENT PRICING',
        headline: 'Layanan Holistic Kami — Keseimbangan Tubuh, Pikiran & Jiwa',
        subtitle: 'Katalog Layanan Komprehensif, Keunggulan Higienitas & Tabel Tarif Transparan',
        image: '/portfolio/kusumaholistic/services.png',
        overview:
          'Halaman perincian layanan terapi spesifik mencakup Terapi Bekam (Cupping) untuk detoksifikasi alami, Pijat Refleksi untuk stimulasi simpul saraf organ tubuh, dan Totok Wajah & Aura untuk peremajaan. Dilengkapi 3 pilar keunggulan higienitas klinis serta tabel transparansi tarif tanpa biaya tersembunyi dengan tombol reservasi langsung WhatsApp.',
        keyModules: [
          'Kartu Layanan Interaktif: Terapi Bekam (Detox), Refleksi (Relief), dan Totok Wajah (Rejuvenate) dengan indikator tarif mulai.',
          '3 Pilar Mengapa Memilih Kusuma: Terapis Bersertifikat, Bahan Alami & Organik, dan Standar Higienitas Klinis.',
          'Tabel Investasi Kesehatan Anda: Tarif transparan untuk Bekam Kering (45 mnt), Bekam Basah Populer (60 mnt), Refleksi Kaki, & Paket Totok Relaksasi.',
          'Tombol Reservasi via WhatsApp: Integrasi direct booking memudahkan konfirmasi jadwal terapis secara instan.',
        ],
        technicalDetails: [
          'Transparansi Informasi: Desain tabel tarif bersih dengan rincian durasi sesi dan estimasi biaya tanpa ambiguitas.',
          'Penanda Layanan Unggulan: Label khusus status Populer pada paket Bekam Basah untuk kemudahan keputusan pasien.',
          'Komposisi Fotografi: Frame organik halus menampilkan aromaterapi, batu hangat, dan botol minyak herbal murni.',
        ],
      },
      {
        id: 'products_contact',
        name: 'Produk Herbal, Testimoni & Kontak',
        badgeTitle: 'HERBAL APOTHECARY, SOCIAL PROOF & CLINIC MAP',
        headline: 'Produk Herbal Alami, Testimoni Pasien & Kontak Klinik',
        subtitle: 'Kurasi Madu Murni, Ulasan Nyata Komunitas & Navigasi Lokasi Pandeglang',
        image: '/portfolio/kusumaholistic/products_contact.png',
        overview:
          'Etalase kurasi produk herbal organik untuk mendukung terapi mandiri (Madu Hutan Liar, Madu Kaliandra, Artisan Herbal Blend). Menampilkan ulasan autentik pasien setia serta informasi operasional lengkap klinik beserta visualisasi peta area Serang - Pandeglang Banten.',
        keyModules: [
          'Katalog Produk Herbal: Madu Hutan Liar (Immunity), Madu Kaliandra (Digestion), & Artisan Herbal Blend (Stress Relief) dengan tombol View Details.',
          'Ulasan & Testimoni Pasien: Bukti sosial nyata dari Siti Rahma (klien sejak 2022) dan Budi Santoso (pasien reguler).',
          'Informasi Hubungi Kami: Alamat fisik Jl. Raya Serang - Pandeglang Km. 14 Cimanuk, konsultasi telepon, dan jam operasional.',
          'Peta Lokasi Interaktif: Panduan visual rute wilayah Pandeglang, Mengger, Gunung Karang, dan Banten.',
        ],
        technicalDetails: [
          'Desain Kartu Produk: Arsitektur e-commerce mini yang elegan dengan detail khasiat alami dan visual madu premium.',
          'Tipografi Editorial Testimoni: Kutipan berukuran proporsional dengan aksen quote icon yang hangat.',
          'Integrasi Multi-Saluran: Akses langsung WhatsApp chat, info reservasi, dan petunjuk arah lokasi klinik.',
        ],
      },
    ],
    deliverables: [
      {
        title: 'Riset Pasien & Reservasi',
        description:
          'Pemetaan kebutuhan pasien terapi holistik, penjadwalan terapis, dan kemudahan booking via WhatsApp.',
      },
      {
        title: 'Standar Higienitas Klinis',
        description:
          'Penonjolan transparansi sterilisasi instrumen bekam dan protokol kebersihan profesional untuk membangun kepercayaan.',
      },
      {
        title: 'Design System Wellness',
        description:
          'Palet warna earth-tone menenangkan, tipografi serif elegan, dan tata letak UI higienis modern.',
      },
      {
        title: 'Prototipe Interaktif Siap Uji',
        description:
          'Alur prototipe lengkap mulai dari eksplorasi layanan, kurasi produk herbal, hingga konfirmasi jadwal reservasi.',
      },
    ],
  },
  {
    id: 'afroturk-expo',
    badge: 'INTERNATIONAL B2B EXPO & BRAND IDENTITY',
    title: 'AfroTurk Expo 2026 — Türkiye-Africa Business Gateway',
    tagline: 'Strategic Dialogue for Economic Cooperation between Turkey and East Africa',
    description:
      'Perancangan identitas brand dan materi publikasi resmi berskala internasional untuk AFROTURK EXPO 2026 di Nairobi, Kenya. Menghubungkan manufaktur, eksportir, dan investor Turki dengan pasar potensial Afrika Timur melalui brosur lipat tiga (trifold) 6-panel komprehensif, sampul buku panduan strategis bilateral, infografis agenda B2B matchmaking 4 hari, serta analisis makroekonomi gerbang logistik Kenya.',
    client: {
      name: 'Yussuf Ahmeed',
      role: 'President of AFROTURK & Trade Convener',
      region: 'Turkey',
      projectRole: 'Graphic & Brand Identity Designer',
      workType: 'Comprehensive Expo Brochure & Strategic Booklet',
      tools: 'Figma • Illustrator • Print Editorial System',
    },
    screens: [
      {
        id: 'main-brochure',
        name: 'Brosur Utama Trifold Expo',
        badgeTitle: 'COMPREHENSIVE 6-PANEL TRIFOLD BROCHURE',
        headline: 'AfroTurk Expo Nairobi 2026 — Türkiye-Africa Business Gateway',
        subtitle: 'Materi Promosi Resmi, Nilai Strategis Kenya & Alur Partisipasi B2B',
        image: '/portfolio/afroturk/main_brochure.png',
        overview:
          'Brosur lipat tiga (trifold) 6-panel komprehensif yang dirancang untuk menarik eksportir, manufaktur Turki, dan investor internasional. Menyajikan analisis "Why Kenya & Why AfroTurk Expo", proposisi nilai "What You Gain", diferensiasi kategori partisipasi (Sponsors, Exhibitors, Investors), serta kontak kantor resmi di Istanbul dan Nairobi.',
        keyModules: [
          'Arsitektur Nilai Strategis: Modul Why Kenya? dan Why AfroTurk Expo? dengan infografis konektivitas logistik.',
          'Kategori Partisipasi Terstruktur: Alur khusus bagi Sponsors (visibilitas brand), Exhibitors (showcase produk), dan Investors (market reach).',
          'Manfaat Partisipasi B2B: Direct access ke manufaktur, verified business connections, dan distribusi franchise.',
          'Informasi Kontak Multinasional: Alamat kantor Istanbul (Pendik) dan Nairobi (Trance Towers) dengan QR Code verifikasi.',
        ],
        technicalDetails: [
          'Palet Visual Korporat: Kombinasi hijau botol berwibawa, merah Turki, dan aksen emas elegan untuk citra kredibel.',
          'Tipografi Hirarkis: Tipografi sans-serif modern dipadukan dengan aksen display bold untuk keterbacaan optimal saat dicetak.',
          'Optimalisasi Format Cetak: Dirancang dengan bleed presisi, pembagian lipatan 3-kolom simetris, dan densitas grafis tinggi.',
        ],
      },
      {
        id: 'booklet-cover',
        name: 'Sampul Booklet Strategis',
        badgeTitle: 'OFFICIAL STRATEGIC DIALOGUE BOOKLET',
        headline: 'AfroTurk Expo 2026 Strategic Dialogue Booklet Cover',
        subtitle: 'Sampul Publikasi Resmi Kerjasama Ekonomi Bilateral Turki - Afrika Timur',
        image: '/portfolio/afroturk/booklet_cover.png',
        overview:
          'Perancangan sampul buku panduan resmi (booklet) bilateral AfroTurk Expo 2026. Menampilkan cityscape megah Nairobi berlatar langit senja keemasan dengan perpaduan logo simbolik jabat tangan bendera Turki dan benua Afrika, merepresentasikan kemitraan ekonomi masa depan yang kokoh.',
        keyModules: [
          'Identitas Visual Simbolik: Logo AfroTurk Expo dengan elemen jabat tangan persaudaraan benua Afrika dan bulan sabit Turki.',
          'Fotografi Lanskap Kota: Siluet gedung pencakar langit Nairobi sebagai pusat inovasi dan keuangan Afrika Timur.',
          'Tipografi Sampul Berwibawa: Judul AfroTurk Expo dalam display bold kontras tinggi di atas pita warna marun korporat.',
          'Atribusi Acara Resmi: Subjudul Strategic Dialogue for Economic Cooperation between Turkey and East Africa.',
        ],
        technicalDetails: [
          'Komposisi Simetris: Pembagian vertikal seimbang antara fotografi arsitektur kota, zona judul, dan metadata institusional.',
          'Gradasi Warna Hangat: Transisi keemasan lembut yang menyatu elegan dengan bidang warna marun dan krem ivory.',
          'Standar Editorial Internasional: Tata letak ramah cetak untuk publikasi diplomatik dan bisnis tingkat tinggi.',
        ],
      },
      {
        id: 'program-overview',
        name: 'Agenda & Program Acara',
        badgeTitle: '4-DAY EVENT PROGRAM & B2B MATCHMAKING',
        headline: 'Event Program Overview — 4-Day High-Impact Schedule',
        subtitle: 'Jadwal Pameran, Forum Investasi Bilateral & Pengalaman Safari Nairobi',
        image: '/portfolio/afroturk/program_overview.png',
        overview:
          'Struktur jadwal pelaksanaan acara 4 hari penuh. Merinci fase pembukaan (Opening Ceremony), sesi B2B Matchmaking sektoral terkurasi, forum penandatanganan memorandum investasi (Investment & Partnerships), hingga program pengalaman safari di Nairobi National Park.',
        keyModules: [
          'Timeline 4 Hari Terstruktur: Pemetaan harian Day 1 (Opening), Day 2 (B2B Matchmaking), Day 3 (Investment), Day 4 (Safari).',
          '3 Pilar Inti Pameran: Exhibition showcase, pre-scheduled targeted B2B meetings, dan peluang ekspansi pasar.',
          'Highlight Safari Program: Kunjungan eksklusif Nairobi National Park dan Giraffe Centre untuk networking informal di alam.',
          'Slogan Resmi Kampanye: Slogan #BridgeToProsperity sebagai jembatan kemitraan jangka panjang.',
        ],
        technicalDetails: [
          'Sistem Grid Kartu Waktu: Penataan kotak harian dengan ikonografi fungsional dan palet warna status terarah.',
          'Keterbacaan Informasi: Pembagian hierarki hari 1-3 (Expo/B2B) dan hari 4 (Safari) menggunakan kontras warna tegas.',
          'Navigasi Visual Bersih: Penggunaan garis alur penanda waktu dan ruang kosong proporsional untuk kenyamanan membaca delegasi.',
        ],
      },
      {
        id: 'why-kenya',
        name: 'Gerbang Regional Kenya',
        badgeTitle: 'MACROECONOMIC & LOGISTICS GATEWAY INFOGRAPHIC',
        headline: 'Why Kenya & Nairobi — The Regional Gateway & Business Capital',
        subtitle: 'Infografis Konektivitas Logistik Pelabuhan Mombasa, Ekosistem Teknologi & Bebas Bea COMESA',
        image: '/portfolio/afroturk/why_kenya.png',
        overview:
          'Halaman infografis data makroekonomi yang menjelaskan signifikansi Kenya sebagai gerbang utama Afrika Timur (akses 300 juta konsumen regional via COMESA & EAC) dan Nairobi sebagai ibukota bisnis dengan konektivitas udara internasional Jomo Kenyatta Airport.',
        keyModules: [
          'Kenya The Regional Gateway: Konektivitas Pelabuhan Mombasa, perdagangan bebas bea, dan bahasa resmi Inggris.',
          'Nairobi The Business Capital: Ekosistem inovasi teknologi "Silicon Savannah", kantor pusat regional 100+ multinasional, dan hub penerbangan 50+ destinasi.',
          'Hero Panorama Skyline: Visual lanskap kota Nairobi bersinar dalam pencahayaan matahari terbenam alami.',
          'Data Keunggulan Pasar: Panduan ringkas bagi delegasi manufaktur Turki untuk ekspansi bisnis lintas negara.',
        ],
        technicalDetails: [
          'Tata Letak Infografis Dua Kolom: Perbandingan komprehensif antara keunggulan infrastruktur negara dan fasilitas ibukota.',
          'Ikonografi Vektor Khusus: Ikon representasi kapal kargo, jaringan global, regulasi hukum, teknologi, gedung, dan penerbangan.',
          'Desain Editorial Ringkas: Penyusunan kutipan ringkasan berbingkai halus di bagian bawah halaman.',
        ],
      },
    ],
    deliverables: [
      {
        title: 'Riset Pasar Bilateral Turki-Afrika',
        description:
          'Pemetaan komprehensif kebutuhan manufaktur Turki dan peluang ekspansi ke pasar Afrika Timur.',
      },
      {
        title: 'Desain Trifold Brosur 6-Panel',
        description:
          'Tata letak publikasi promosi cetak resolusi tinggi dengan arsitektur pesan persuasif B2B.',
      },
      {
        title: 'Identitas & Desain Sampul Booklet',
        description:
          'Perancangan sampul buku panduan strategis bilateral dengan integrasi visual landmark Nairobi.',
      },
      {
        title: 'Infografis Program & Agenda 4 Hari',
        description:
          'Visualisasi jadwal pameran, alur B2B matchmaking, dan program networking safari terstruktur.',
      },
    ],
  },
  {
    id: 'uihm-campaign',
    badge: 'INSTITUTIONAL CAMPAIGN & CULTURAL EDITORIAL',
    title: 'UIHM Institutional & Cultural Festival Campaign',
    tagline: 'Global Brotherhood, Memorial Forests in 50 Countries & Cultural Art Festival in Ankara',
    description:
      'Perancangan materi kampanye visual institusional untuk UİHM (Uluslararası İmam Hatip Mezunları ve Mensupları Derneği) di Turki. Mencakup poster resmi festival budaya dan seni antar-bangsa di Beştepe Millet Kongre ve Kültür Merkezi Ankara, serta brosur lipat tiga kampanye global penanaman pohon memorial "Ümmetin Ağacı" (Pohon Umat) di 50 negara dunia.',
    client: {
      name: 'Abdulvahab',
      role: 'Representative of UIHM Derneği',
      region: 'Turkey',
      projectRole: 'Graphic & Editorial Designer',
      workType: 'Cultural Campaign Posters & Memorial Forest Trifold Brochure',
      tools: 'Photoshop • Illustrator • Editorial Layout System',
    },
    screens: [
      {
        id: 'festival-poster',
        name: 'Poster Festival Budaya Ankara',
        badgeTitle: 'OFFICIAL CULTURAL FESTIVAL POSTER (ANKARA)',
        headline: 'UİHM Standıyla Festivaldeyiz — Kültür ve Sanat Festivali',
        subtitle: 'Poster Publikasi Festival Budaya & Seni Uluslararası Sekolah Imam Hatip di Beştepe Ankara',
        image: '/portfolio/uihm/festival_poster.png',
        overview:
          'Poster promosi acara berskala nasional yang diselenggarakan di Beştepe Millet Kongre ve Kültür Merkezi, Ankara pada 10 Juni. Menggambarkan persatuan santri dan pemuda antar-bangsa dengan latar siluet megah arsitektur masjid klasik Turki dan ilustrasi bibit tanaman persaudaraan.',
        keyModules: [
          'Headline Tipografis Bold: Tipografi display berkarakter tegas "UİHM Standıyla Festivaldeyiz".',
          'Ilustrasi Karakter Pemuda: Visualisasi 5 pemuda merangkul bahu bersatu dengan latar lanskap kota Ankara.',
          'Detail Waktu & Lokasi Terpadu: Tanggal 10 Haziran dan lokasi prestisius Beştepe Millet Kongre ve Kültür Merkezi.',
          'Branding Institusi Resmi: Logo UİHM di bagian atas dan kanal komunikasi resmi (+90 544 159 10 93 & uihmbirlik.org.tr).',
        ],
        technicalDetails: [
          'Komposisi Ilustratif Realistis: Perpaduan teknik lukisan digital bernuansa hangat dengan latar kubah masjid bersejarah.',
          'Palet Warna Institusional: Warna biru malam pekat, merah marun Turki, dan aksen emas lembut pada ornamen pembagi.',
          'Penataan Informasi Hierarkis: Pembagian zona header judul, visual utama persaudaraan, dan footer kontak terarah.',
        ],
      },
      {
        id: 'ummetin-agaci',
        name: 'Brosur Lipat Tiga Ümmetin Ağacı',
        badgeTitle: 'MEMORIAL FOREST GLOBAL CAMPAIGN BROCHURE',
        headline: 'Ümmetin Ağacı — 50 Ülkede Aynı Niyet, Bir Fidan Bir Dua Bir Kardeşlik',
        subtitle: 'Brosur Trifold Kampanye Hutan Peringatan & Gerakan Kepedulian Lingkungan di 50 Negara',
        image: '/portfolio/uihm/ummetin_agaci_brochure.png',
        overview:
          'Brosur lipat tiga komprehensif kampanye penanaman pohon "Ümmetin Ağacı" yang digagas UİHM di 50 negara dunia pada hari Arafah. Menampilkan filosofi Hatıra Ormanları ("Kökleri Kardeşlikte, Dalları Gelecekte"), visual bola dunia bersemi bibit hijau, serta alur ajakan partisipasi donasi fidan berkelanjutan.',
        keyModules: [
          'Tema Sentral 50 Ülkede Aynı Niyet: Desain tipografi angka "50" bertekstur peta dunia yang menonjol.',
          'Filosofi Hatıra Ormanları: Papan kayu artistik bertuliskan "Kökleri Kardeşlikte, Dalları Gelecekte".',
          'Modul Tanya-Jawab "Ümmetin Ağacı Nedir?": Edukasi 5 dimensi gerakan (Bir Ülkeye, Bir Mezuna, Bir Duaya, Bir Hatıraya, Ortak Geleceğe).',
          'Alasan Bergabung "Neden Ümmetin Ağacı?": Daftar 5 komitmen kepedulian lingkungan dan persaudaraan lintas generasi.',
        ],
        technicalDetails: [
          'Visual Metaphor Menawan: Ilustrasi bibit pohon yang tumbuh subur menembus bola dunia marun mengkilap.',
          'Desain Trifold 6-Panel Terpadu: Sinkronisasi visual antara halaman depan, lipatan tengah, dan halaman belakang.',
          'Harmoni Warna Bumi & Spiritual: Perpaduan warna marun institusi, hijau daun alami, dan warna tanah hangat.',
        ],
      },
    ],
    deliverables: [
      {
        title: 'Konsep Kampanye Budaya & Lingkungan',
        description:
          'Perumusan strategi komunikasi visual untuk penguatan persaudaraan pemuda antar-bangsa.',
      },
      {
        title: 'Poster Acara Beştepe Millet Kongresi',
        description:
          'Desain poster publikasi seni dan budaya resmi beresolusi tinggi dengan ilustrasi digital megah.',
      },
      {
        title: 'Desain Trifold Brosur 50 Negara',
        description:
          'Brosur lipat tiga gerakan penanaman pohon di 50 negara dengan metafora bola dunia bersemi.',
      },
      {
        title: 'Tipografi & Infografis Edukasi',
        description:
          'Struktur tata letak pesan edukasi Hatıra Ormanları dengan tipografi terstandarisasi.',
      },
    ],
  },
];

interface ProjectCardProps {
  project: ProjectData;
  onOpenModal: (imageSrc: string, title: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const [activeScreenId, setActiveScreenId] = useState<string>(project.screens[0].id);

  const currentScreen =
    project.screens.find((s) => s.id === activeScreenId) || project.screens[0];

  const gridColsClass =
    project.screens.length === 2
      ? 'grid-cols-2'
      : project.screens.length === 4
      ? 'grid-cols-2 sm:grid-cols-4'
      : 'grid-cols-3';

  return (
    <div className="bg-[#ffffff] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 select-none">
      {/* Project Header Info */}
      <div className="pb-8 border-b border-[#2c2e2a]/10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div className="max-w-2xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60">
            <span>{project.badge}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2c2e2a] tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#8ed462]">
            {project.tagline}
          </p>
          <p className="mt-4 text-xs sm:text-sm text-[#2c2e2a]/75 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Client & Attribution Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#f5f1e4]/70 shrink-0 lg:w-[320px]">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/60 mb-3">
            <span>KLIEN & ATRIBUSI</span>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-black text-[#2c2e2a]">{project.client.name}</p>
            <p className="text-xs font-bold text-[#2c2e2a]/70">{project.client.role}</p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#2c2e2a]/10 space-y-1 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#2c2e2a]/60">Wilayah / Region:</span>
              <span className="font-bold text-[#2c2e2a]">{project.client.region}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#2c2e2a]/60">Peran:</span>
              <span className="font-bold text-[#2c2e2a]">{project.client.projectRole}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#2c2e2a]/60">Tipe Karya:</span>
              <span className="font-bold text-[#2c2e2a]">{project.client.workType}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#2c2e2a]/60">Perangkat:</span>
              <span className="font-bold text-[#2c2e2a]">{project.client.tools}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Display Area */}
      <div className="pt-8">
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
                  onClick={() => onOpenModal(currentScreen.image, currentScreen.headline)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#2c2e2a] hover:bg-[#8ed462] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Eye size={16} />
                  <span>Lihat Ukuran Penuh</span>
                </button>
              </div>
            </div>

            {/* Quick Screen Selector Thumbnails */}
            <div className={`grid ${gridColsClass} gap-3`}>
              {project.screens.map((screen) => {
                const isSelected = activeScreenId === screen.id;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveScreenId(screen.id)}
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

            {/* Key Features & Modules (Unboxed) */}
            <div className="space-y-2.5 text-xs">
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
          {project.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#f5f1e4]/60 border border-[#2c2e2a]/8 space-y-2"
            >
              <h6 className="text-sm font-black text-[#2c2e2a]">{item.title}</h6>
              <p className="text-xs text-[#2c2e2a]/75 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const DesignPortfolio: React.FC = () => {
  const [modalData, setModalData] = useState<{ src: string; title: string } | null>(null);

  // Lock document scroll and pause Lenis smooth scroll while modal is active
  useEffect(() => {
    if (modalData) {
      const prevHtmlOverflow = document.documentElement.style.overflow;
      const prevBodyOverflow = document.body.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      // Pause Lenis smooth-scroll so window wheel events are not captured
      if (typeof window !== 'undefined' && (window as any).__lenis) {
        (window as any).__lenis.stop();
      }

      return () => {
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.body.style.overflow = prevBodyOverflow;
        if (typeof window !== 'undefined' && (window as any).__lenis) {
          (window as any).__lenis.start();
        }
      };
    }
  }, [modalData]);

  const handleOpenModal = (imageSrc: string, title: string) => {
    setModalData({ src: imageSrc, title });
  };

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
          Koleksi proyek perancangan prototipe web antarmuka pengguna interaktif, sistem penanganan krisis kemanusiaan komprehensif, arsitektur layanan kesehatan holistik, serta publikasi kampanye B2B dan institusional internasional di kawasan Turki.
        </p>
      </div>

      {/* Stack of Project Cards */}
      <div className="space-y-12 sm:space-y-16">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      {/* Dribbble Portfolio Action Button */}
      <div className="pt-6 sm:pt-8 text-center flex flex-col items-center justify-center">
        <a
          href="https://dribbble.com/fatihfarhat"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-[50px] bg-[#2c2e2a] text-[#ffffff] hover:bg-[#ea4c89] hover:text-[#ffffff] font-bold text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-95 cursor-pointer select-none group"
        >
          <SiDribbble
            size={20}
            className="shrink-0 text-[#ea4c89] group-hover:text-[#ffffff] transition-colors"
          />
          <span>Buka Dribbble</span>
          <ArrowUpRight
            size={17}
            className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
          />
        </a>
      </div>

      {/* Fullscreen Lightbox Modal for Screenshots rendered via Portal directly to body */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {modalData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                data-lenis-prevent
                data-lenis-prevent-wheel
                data-lenis-prevent-touch
                className="fixed inset-0 z-[9999] bg-black/90 p-4 sm:p-8 overflow-y-auto overscroll-contain flex justify-center items-start [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                onClick={() => setModalData(null)}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                {/* Fixed Close Button pinned to screen viewport corner */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalData(null);
                  }}
                  className="fixed top-5 right-5 sm:top-8 sm:right-8 p-3 rounded-full bg-[#2c2e2a] text-white hover:bg-white hover:text-[#2c2e2a] transition-colors cursor-pointer z-[10000]"
                  title="Tutup Pratinjau"
                >
                  <X size={20} />
                </button>

                {/* Modal Content - Scrollable through outer overlay with hidden scrollbar */}
                <motion.div
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-5xl w-full my-6 sm:my-10 rounded-2xl bg-[#0d0f0d] p-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={modalData.src}
                    alt={modalData.title}
                    className="w-full h-auto rounded-xl block"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};

export default DesignPortfolio;
