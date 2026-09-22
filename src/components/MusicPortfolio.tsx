import React from 'react';
import {
  Headphones,
  CheckCircle2,
} from 'lucide-react';

export const MusicPortfolio: React.FC = () => {
  const musicProjects = [
    {
      id: 'symphonic-dawn',
      title: 'Symphonic Dawn — Cinematic Orchestral Suite',
      category: 'Komposisi Orkestra & Ilustrasi Sinematik',
      subtitle: 'Komposisi Orkestral Epik & Soundscapes Atmosferik',
      description:
        'Komposisi tema orkestra lengkap yang memadukan ensemble dawai (strings), brass megah, perkusi hybrid sinematik, dan choir atmosferik untuk ilustrasi narasi film pendek dan game.',
      highlights: [
        'Arsitektur partitur orkestra berdimensi dinamis dari piano lembut hingga crescendo megah.',
        'Layering perkusi hybrid sinematik dengan pukulan taiko berbobot dan sub-bass terdefinisi.',
        'Spatial panning 3D untuk memisahkan frekuensi instrumen akustik secara alami.',
        'Proses mastering terkalibrasi -14 LUFS untuk standar platform streaming modern.',
      ],
      tools: 'Logic Pro • FL Studio • Spitfire Audio Symphonic Strings • Native Instruments Kontakt',
    },
    {
      id: 'echoes-of-solitude',
      title: 'Echoes of Solitude — Minimalist Piano & Ambient Strings',
      category: 'Komposisi Instrumental Neo-Klasikal',
      subtitle: 'Eksplorasi Solo Piano Intim & Tekstur Cello Emosional',
      description:
        'Rekaman instrumental solo piano neo-klasikal dengan tekstur ruang reverb alami, lapisan cello emosional, dan resonansi akustik mendalam sebagai soundtrack narasi sastra dan momen reflektif.',
      highlights: [
        'Kalibrasi kurva velocity tuts piano untuk menangkap dinamika sentuhan halus (pianissimo).',
        'Desain reverb konvolusi ruang akustik nyata dengan peluruhan (decay) halus tanpa kekeruhan frekuensi.',
        'Saturasi tape analog lembut untuk memberikan kehangatan timbre organik pada dawai cello.',
        'Penyelarasan fase stereo mikrofon ganda untuk citra stereo yang lebar dan stabil.',
      ],
      tools: 'Pianoteq Pro • Keyscape • FabFilter Pro-Q 3 & Pro-C 2 • Valhalla VintageVerb',
    },
    {
      id: 'vox-audio-dsp',
      title: 'VOX Audio DSP Engine — Real-Time Wave Synthesis & DSP Filters',
      category: 'Audio Engineering & Real-Time DSP',
      subtitle: 'Perancangan DSP Audio Real-Time & Sintesis Audio Prosedural',
      description:
        'Desain synthesizer audio digital dan filter DSP interaktif berbasis komputasi latency rendah, mencakup filter resonansi band-pass, custom wavetable synthesis, dan envelope modulation.',
      highlights: [
        'Arsitektur pemrosesan buffer audio latency ultra-rendah (<5ms) bebas glitch dan audio tearing.',
        'Algoritma filter anti-aliasing dengan interpolasi kurva non-linear untuk harmonik bersih.',
        'Modulasi envelope ADSR responsif dengan kurva eksponensial matematis yang akurat.',
        'Implementasi visual penganalisis spektrum frekuensi Fourier real-time (FFT analyzer).',
      ],
      tools: 'C++ Audio Architecture • JUCE Framework • Pure Data • REAPER',
    },
    {
      id: 'cinematic-foley-soundscapes',
      title: 'Cinematic Foley & World-Building Soundscapes',
      category: 'Sound Design & Foley Recording',
      subtitle: 'Perekaman Suara Lingkungan & Perancangan Efek Suara Sinematik',
      description:
        'Perekaman audio lapangan (field recording) mikrofon stereo dan manipulasi foley organik untuk efek suara langkah kaki, desau angin padang pasir, gemertak api, dan transisi audio imersif.',
      highlights: [
        'Perekaman stereo 96kHz / 24-bit dengan rasio sinyal terhadap derau (SNR) tinggi.',
        'Restorasi audio spektral mendalam untuk menghilangkan derau statis mikrofon tanpa merusak transient.',
        'Desain lapisan transisi whoosh, impact bas, dan tekstur organik untuk transisi adegan visual.',
        'Audio cue timing yang presisi milidetik untuk sinkronisasi mutlak terhadap gerak visual.',
      ],
      tools: 'Zoom H-Series Recorder • iZotope RX Advanced • Soundtoys SoundShifter • Adobe Audition',
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 font-sans">
      {/* Category Header */}
      <div className="mb-12 sm:mb-16">
        <div className="mb-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#2c2e2a] text-white">
            <Headphones className="text-[#8ed462] shrink-0" size={18} />
            <span className="font-sans text-xs sm:text-sm font-bold text-white tracking-wide">
              Produksi Musik, Instrumental & Sound Design
            </span>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight mb-4">
          Music & Sound Design Showcase
        </h2>
        <p className="text-base sm:text-lg text-[#2c2e2a]/75 max-w-4xl leading-relaxed">
          Eksplorasi komposisi musik instrumental orisinal, aransemen partitur orkestra, perancangan arsitektur DSP audio latency rendah, sound design foley imersif, serta kalibrasi mixing dan mastering audio modern.
        </p>
      </div>

      {/* Grid of Music & Sound Design Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {musicProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="bg-[#ffffff] rounded-[24px] sm:rounded-[30px] border border-[#2c2e2a]/15 p-7 sm:p-9 flex flex-col justify-between transition-all hover:border-[#2c2e2a]/40 group select-none"
            >
              <div>
                {/* Header Category & Tagline */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50 block mb-1">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-black text-[#2c2e2a] tracking-tight leading-snug mb-2">
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

              {/* Tools & Ecosystem */}
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
    </div>
  );
};

export default MusicPortfolio;
