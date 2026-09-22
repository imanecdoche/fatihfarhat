import React from 'react';
import {
  ArrowUpRight,
} from 'lucide-react';
import { SiSpotify } from 'react-icons/si';

export const MusicPortfolio: React.FC = () => {
  // Daftar Rilisan Lagu Orisinal Spotify oleh ZeroTwenty
  const spotifyTracks = [
    {
      id: 'masihkah-aku-diterima',
      title: 'Masihkah Aku Diterima',
      artist: 'ZeroTwenty',
      releaseType: 'Single Populer',
      coverImage: '/music/masihkah_aku_diterima.jpg',
      spotifyUrl: 'https://open.spotify.com/track/56VVewiJAypMwY8OuJHR4k?si=32b02f41d05a4fca',
      description:
        'Lagu populer bernuansa emosional dan reflektif dengan melodi vokal menyentuh, lirik perenungan penerimaan diri, dan lapisan piano akustik yang intim.',
    },
    {
      id: 'halfway',
      title: 'Halfway',
      artist: 'ZeroTwenty',
      releaseType: 'Single Rilis Resmi',
      coverImage: '/music/halfway.jpg',
      spotifyUrl: 'https://open.spotify.com/track/76o2OlWrOMYSYwf7oGC9NA?si=bab0fd33e3284bf9',
      description:
        'Komposisi pop alternatif berdaya dorong ritmis dinamis, melodi katarsis, dan lapisan aransemen harmonik yang ekspresif.',
    },
    {
      id: 'wind-of-fall',
      title: 'Wind of Fall',
      artist: 'ZeroTwenty',
      releaseType: 'Single Rilis Resmi',
      coverImage: '/music/wind_of_fall.jpg',
      spotifyUrl: 'https://open.spotify.com/track/016nDtT629fN3fftTqrDJv?si=6e84cabc924b4c77',
      description:
        'Balada instrumental akustik bernuansa musim gugur dengan petikan dawai hangat, melodi melankolis, dan resonansi ruang alami.',
    },
  ];

  // Daftar Karya Musik dari Platform Suno
  const sunoTracks = [
    {
      id: 'no-translation',
      title: 'No Translation',
      genre: 'Acoustic, Folk',
      coverImage: '/music/no_translation.png',
      sunoUrl: 'https://suno.com/s/0HHjXPxKmud4oDAj',
      description:
        'Komposisi folk akustik kontemplatif dengan alunan dawai murni, vokal ekspresif, dan perenungan mendalam melampaui batas bahasa.',
    },
    {
      id: 'braving-winter',
      title: 'Braving Winter',
      genre: 'Acoustic, Folk',
      coverImage: '/music/braving_winter.png',
      sunoUrl: 'https://suno.com/s/g8GN2a7csYV6Y1jW',
      description:
        'Lagu folk akustik bertema keteguhan dan harapan melewati musim dingin dingin bersalju, memadukan dinamika ritmis dan melodi katarsis.',
    },
    {
      id: 'hujan-tahun-lalu',
      title: 'Hujan Tahun Lalu',
      genre: 'Acoustic, Pop',
      coverImage: '/music/hujan_tahun_lalu.png',
      sunoUrl: 'https://suno.com/s/2xKF9LZk4R2kZnAL',
      description:
        'Lagu pop akustik bernuansa nostalgia dan kenangan rintik hujan masa lampau dengan petikan gitar manis serta melodi vokal yang hangat.',
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 font-sans">
      {/* SECTION 1: Karya Musik Orisinal (Spotify - ZeroTwenty) */}
      <section className="mb-20 sm:mb-24">
        <div className="mb-10 sm:mb-12">
          {/* Header Badge Capsule */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#2c2e2a] text-white">
              <SiSpotify className="text-[#1ed760] shrink-0" size={18} />
              <span className="font-sans text-xs sm:text-sm font-bold text-white tracking-wide">
                Karya Musik Orisinal • ZeroTwenty
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight mb-4">
            Karya Musik Orisinal
          </h2>
          <p className="text-base sm:text-lg text-[#2c2e2a]/75 max-w-4xl leading-relaxed">
            Karya musik orisinal dengan melodi organik, lirik puitis, dan kedalaman narasi cerita di atas perpaduan instrumentasi modern (<span className="italic">organic melody, lyric and story over generated instruments</span>). Seluruh karya musik dan rilisan audio ini digubah serta dipublikasikan di bawah nama panggung <strong className="font-bold text-[#2c2e2a]">ZeroTwenty</strong>.
          </p>
        </div>

        {/* Featured Spotify Track Embed (Lagu Populer) */}
        <div className="mb-10 sm:mb-12 overflow-hidden rounded-2xl border border-[#2c2e2a]/15 bg-[#ffffff] p-2.5 sm:p-3">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/56VVewiJAypMwY8OuJHR4k?utm_source=generator&theme=0&si=5e9892d38a85403b"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Embed: Masihkah Aku Diterima"
          />
        </div>

        {/* Grid of Spotify Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {spotifyTracks.map((track) => (
            <div
              key={track.id}
              className="bg-[#ffffff] rounded-[24px] sm:rounded-[28px] border border-[#2c2e2a]/15 p-5 sm:p-6 flex flex-col justify-between hover:border-[#2c2e2a]/40 transition-all duration-300 group select-none"
            >
              <div>
                {/* Track Cover Image */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#f5f1e4] border border-[#2c2e2a]/10 mb-5 relative group-hover:border-[#2c2e2a]/25 transition-colors">
                  <img
                    src={track.coverImage}
                    alt={`Sampul lagu ${track.title} oleh ${track.artist}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Track Meta */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50 block mb-1">
                  {track.releaseType}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#2c2e2a] tracking-tight leading-snug mb-1">
                  {track.title}
                </h3>
                <p className="text-xs sm:text-[13px] font-bold text-[#8ed462] mb-3">
                  {track.artist}
                </p>

                <p className="text-xs sm:text-sm text-[#2c2e2a]/70 leading-relaxed mb-6 font-normal">
                  {track.description}
                </p>
              </div>

              {/* Bottom Play Action Link */}
              <div className="pt-4 border-t border-[#2c2e2a]/10 flex items-center justify-between">
                <a
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1ed760] hover:text-[#18ac4d] transition-colors"
                >
                  <SiSpotify size={16} />
                  <span>Dengarkan di Spotify</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: Buka Profil Artis Spotify di bawah Section Spotify */}
        <div className="text-center flex justify-center pt-2">
          <a
            href="https://open.spotify.com/artist/61lnv533fb8bQVV5cQ7h5y?si=ozZTj4q5TKSrBAPdhzIlHg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-[50px] bg-[#2c2e2a] text-[#ffffff] hover:bg-[#000000] hover:text-[#1ed760] font-sans font-bold text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-95 cursor-pointer select-none group border border-transparent hover:border-[#1ed760]/40"
          >
            <SiSpotify size={20} className="shrink-0 text-[#1ed760] group-hover:scale-110 transition-transform" />
            <span>Buka Profil Artis</span>
            <ArrowUpRight size={17} className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </section>

      {/* SECTION 2: Karya dari Platform Suno */}
      <section className="mb-12 sm:mb-16">
        <div className="mb-10 sm:mb-12">
          {/* Header Badge Capsule */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#2c2e2a] text-white">
              <img
                src="/icons/suno.png"
                alt="Suno Official Logo"
                className="w-4 h-4 rounded-full object-contain shrink-0"
              />
              <span className="font-sans text-xs sm:text-sm font-bold text-white tracking-wide">
                Eksplorasi Musik • Platform Suno
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight mb-4">
            Karya dari Platform Suno
          </h2>
          <p className="text-base sm:text-lg text-[#2c2e2a]/75 max-w-4xl leading-relaxed">
            Koleksi karya eksplorasi musik akustik, folk, dan pop yang dirilis melalui platform Suno dengan kekuatan melodi organik, lirik mendalam, dan aransemen harmonik yang intim.
          </p>
        </div>

        {/* Grid of Suno Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {sunoTracks.map((track) => (
            <div
              key={track.id}
              className="bg-[#ffffff] rounded-[24px] sm:rounded-[28px] border border-[#2c2e2a]/15 p-5 sm:p-6 flex flex-col justify-between hover:border-[#2c2e2a]/40 transition-all duration-300 group select-none"
            >
              <div>
                {/* Track Cover Image */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#f5f1e4] border border-[#2c2e2a]/10 mb-5 relative group-hover:border-[#2c2e2a]/25 transition-colors">
                  <img
                    src={track.coverImage}
                    alt={`Sampul lagu ${track.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Track Meta */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50 block mb-1">
                  {track.genre}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#2c2e2a] tracking-tight leading-snug mb-1">
                  {track.title}
                </h3>
                <p className="text-xs sm:text-[13px] font-bold text-[#8ed462] mb-3">
                  Suno Release
                </p>

                <p className="text-xs sm:text-sm text-[#2c2e2a]/70 leading-relaxed mb-6 font-normal">
                  {track.description}
                </p>
              </div>

              {/* Bottom Play Action Link */}
              <div className="pt-4 border-t border-[#2c2e2a]/10 flex items-center justify-between">
                <a
                  href={track.sunoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2c2e2a] hover:text-[#000000] transition-colors"
                >
                  <img
                    src="/icons/suno.png"
                    alt="Suno"
                    className="w-4 h-4 rounded-full object-contain shrink-0"
                  />
                  <span>Dengarkan di Suno</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: Suno Profile di bawah Section Suno */}
        <div className="text-center flex justify-center pt-2">
          <a
            href="https://suno.com/@zerotwentymusic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-[50px] bg-[#2c2e2a] text-[#ffffff] hover:bg-[#000000] hover:text-[#8ed462] font-sans font-bold text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-95 cursor-pointer select-none group border border-transparent hover:border-[#8ed462]/40"
          >
            <img
              src="/icons/suno.png"
              alt="Suno Official Logo"
              className="w-5 h-5 rounded-full object-contain shrink-0 group-hover:scale-110 transition-transform"
            />
            <span>Suno Profile</span>
            <ArrowUpRight size={17} className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default MusicPortfolio;
