import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { IdCard, RotateCw } from 'lucide-react';

export const IdentityCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Tanggal Lahir: 20 Agustus 2005 (Bulan 7 di JavaScript Date 0-indexed)
  const birthDate = useMemo(() => new Date(2005, 7, 20), []);

  // Hitung usia otomatis secara dinamis: X thn, Y bln, Z hr
  const ageString = useMemo(() => {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prevMonthLastDay;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return `${years} thn, ${months} bln, ${days} hr`;
  }, [birthDate]);

  // Interactive 3D Tilt based on cursor position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -y * 18, // max 9 deg tilt
      y: x * 18,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Ketebalan fisik kartu: 8px (+4px hingga -4px)
  const halfThickness = 4;
  // 15 Z-slices mikro untuk membentuk core 3D solid yang mulus tanpa tonjolan di sudut
  const zSlices = useMemo(
    () => [-3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5],
    []
  );

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 font-sans">
      {/* Section Title Header */}
      <div className="mb-8 sm:mb-10 text-center">
        <div className="inline-flex items-center gap-1.5 mb-1.5 text-[#8ed462]">
          <IdCard size={18} className="shrink-0" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            Objek 3D Fisik Solid
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2c2e2a] tracking-tight mb-2">
          Data Diri & Identitas
        </h2>
        <p className="text-xs sm:text-sm text-[#2c2e2a]/70 max-w-xl mx-auto leading-relaxed">
          Gerakkan kursor untuk melihat ketebalan fisik 3D kartu, atau klik untuk membalik depan-belakang.
        </p>
      </div>

      {/* 3D Perspective Stage */}
      <div
        className="w-full max-w-xl md:max-w-2xl mx-auto py-4 sm:py-6 flex flex-col items-center justify-center [perspective:1400px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Flippable 3D Card Body with Physical Solid Extrusion */}
        <motion.div
          ref={cardRef}
          animate={{
            rotateY: (isFlipped ? 180 : 0) + (isFlipped ? -tilt.y : tilt.y),
            rotateX: isFlipped ? -tilt.x : tilt.x,
          }}
          transition={{
            duration: 0.42,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full cursor-pointer select-none [transform-style:preserve-3d] transition-shadow duration-300"
          onClick={() => setIsFlipped((prev) => !prev)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsFlipped((prev) => !prev);
            }
          }}
          aria-label="Kartu Identitas 3D dengan ketebalan fisik nyata. Klik untuk membalik kartu."
        >
          {/* ======================================================== */}
          {/* 3D SOLID PHYSICAL CORE (Z-SLICES EXTRUSION)               */}
          {/* Tumpukan slice fisik di sumbu Z dengan radius sudut       */}
          {/* identik sempurna tanpa tonjolan tajam di sudut kartu      */}
          {/* ======================================================== */}
          {zSlices.map((z, idx) => (
            <div
              key={idx}
              style={{
                transform: `translateZ(${z}px)`,
              }}
              className="absolute inset-0 rounded-[20px] sm:rounded-[26px] bg-[#eae6db] pointer-events-none"
            />
          ))}

          {/* ======================================================== */}
          {/* FRONT FACE (Sisi Depan: translateZ(+4px))                  */}
          {/* ======================================================== */}
          <div
            style={{
              transform: `translateZ(${halfThickness}px)`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="w-full rounded-[20px] sm:rounded-[26px] p-5 sm:p-7 md:p-8 bg-[#ffffff] shadow-[0_12px_28px_rgba(44,46,42,0.12)] font-sans relative overflow-hidden"
          >
            {/* Top Bar: Flip Hint */}
            <div className="flex items-center justify-end mb-4 sm:mb-5 pb-3 border-b border-[#2c2e2a]/10">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#8ed462] hover:text-[#7bc352] transition-colors shrink-0">
                <RotateCw size={13} className="animate-spin-slow" />
                <span>Balik Kartu</span>
              </div>
            </div>

            {/* Data Diri Table with Laser-Straight Aligned Colons */}
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13.5px] text-[#2c2e2a] leading-relaxed">
              {/* Nama */}
              <div className="flex items-baseline">
                <span className="w-[105px] sm:w-[130px] md:w-[145px] shrink-0 text-[#2c2e2a]/65 font-medium">
                  Nama
                </span>
                <span className="w-4 shrink-0 text-center font-bold text-[#2c2e2a]">:</span>
                <span className="flex-1 font-black uppercase text-[#2c2e2a]">
                  FATIH FARHAT ASSHIDIQ
                </span>
              </div>

              {/* Tempat Lahir */}
              <div className="flex items-baseline">
                <span className="w-[105px] sm:w-[130px] md:w-[145px] shrink-0 text-[#2c2e2a]/65 font-medium">
                  Tempat Lahir
                </span>
                <span className="w-4 shrink-0 text-center font-bold text-[#2c2e2a]">:</span>
                <span className="flex-1 font-bold text-[#2c2e2a]">
                  Pandeglang, Banten
                </span>
              </div>

              {/* Tanggal Lahir */}
              <div className="flex items-baseline">
                <span className="w-[105px] sm:w-[130px] md:w-[145px] shrink-0 text-[#2c2e2a]/65 font-medium">
                  Tanggal Lahir
                </span>
                <span className="w-4 shrink-0 text-center font-bold text-[#2c2e2a]">:</span>
                <span className="flex-1 font-bold text-[#2c2e2a]">
                  20 Agustus 2005
                </span>
              </div>

              {/* Usia */}
              <div className="flex items-baseline">
                <span className="w-[105px] sm:w-[130px] md:w-[145px] shrink-0 text-[#2c2e2a]/65 font-medium">
                  Usia
                </span>
                <span className="w-4 shrink-0 text-center font-bold text-[#2c2e2a]">:</span>
                <span className="flex-1 font-bold text-[#2c2e2a]">
                  {ageString}
                </span>
              </div>

              {/* Alamat Domisili */}
              <div className="flex items-baseline pt-0.5">
                <span className="w-[105px] sm:w-[130px] md:w-[145px] shrink-0 text-[#2c2e2a]/65 font-medium">
                  Alamat Domisili
                </span>
                <span className="w-4 shrink-0 text-center font-bold text-[#2c2e2a]">:</span>
                <span className="flex-1 font-bold text-[#2c2e2a]">
                  Kp. Bojong Canar
                </span>
              </div>

              {/* Kelurahan */}
              <div className="flex items-baseline">
                <span className="w-[105px] sm:w-[130px] md:w-[145px] shrink-0 text-[#2c2e2a]/55 font-medium">
                  <span className="pl-3 sm:pl-3.5 inline-block">Kel/Desa</span>
                </span>
                <span className="w-4 shrink-0 text-center font-bold text-[#2c2e2a]">:</span>
                <span className="flex-1 font-medium text-[#2c2e2a]">
                  Ds. Dahu
                </span>
              </div>

              {/* Kecamatan */}
              <div className="flex items-baseline">
                <span className="w-[105px] sm:w-[130px] md:w-[145px] shrink-0 text-[#2c2e2a]/55 font-medium">
                  <span className="pl-3 sm:pl-3.5 inline-block">Kecamatan</span>
                </span>
                <span className="w-4 shrink-0 text-center font-bold text-[#2c2e2a]">:</span>
                <span className="flex-1 font-medium text-[#2c2e2a]">
                  Cikedal
                </span>
              </div>

              {/* Kota */}
              <div className="flex items-baseline">
                <span className="w-[105px] sm:w-[130px] md:w-[145px] shrink-0 text-[#2c2e2a]/55 font-medium">
                  <span className="pl-3 sm:pl-3.5 inline-block">Kabupaten</span>
                </span>
                <span className="w-4 shrink-0 text-center font-bold text-[#2c2e2a]">:</span>
                <span className="flex-1 font-medium text-[#2c2e2a]">
                  Kab. Pandeglang
                </span>
              </div>

              {/* Provinsi */}
              <div className="flex items-baseline">
                <span className="w-[105px] sm:w-[130px] md:w-[145px] shrink-0 text-[#2c2e2a]/55 font-medium">
                  <span className="pl-3 sm:pl-3.5 inline-block">Provinsi</span>
                </span>
                <span className="w-4 shrink-0 text-center font-bold text-[#2c2e2a]">:</span>
                <span className="flex-1 font-medium text-[#2c2e2a]">
                  Prov. Banten
                </span>
              </div>

              {/* Agama */}
              <div className="flex items-baseline pt-0.5">
                <span className="w-[105px] sm:w-[130px] md:w-[145px] shrink-0 text-[#2c2e2a]/65 font-medium">
                  Agama
                </span>
                <span className="w-4 shrink-0 text-center font-bold text-[#2c2e2a]">:</span>
                <span className="flex-1 font-bold text-[#2c2e2a]">
                  Islam
                </span>
              </div>

              {/* Gol Darah */}
              <div className="flex items-baseline">
                <span className="w-[105px] sm:w-[130px] md:w-[145px] shrink-0 text-[#2c2e2a]/65 font-medium">
                  Gol Darah
                </span>
                <span className="w-4 shrink-0 text-center font-bold text-[#2c2e2a]">:</span>
                <span className="flex-1 font-bold text-[#2c2e2a]">
                  -
                </span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* BACK FACE (Sisi Belakang: rotateY(180deg) translateZ(+4px)) */}
          {/* Polos hanya tulisan "Click Me to Reveal!"                 */}
          {/* ======================================================== */}
          <div
            style={{
              transform: `rotateY(180deg) translateZ(${halfThickness}px)`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="absolute inset-0 w-full h-full rounded-[20px] sm:rounded-[26px] p-6 sm:p-8 bg-[#ffffff] shadow-[0_12px_28px_rgba(44,46,42,0.12)] font-sans flex items-center justify-center text-center select-none"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[#2c2e2a]">
              Click Me to Reveal!
            </span>
          </div>
        </motion.div>

        {/* Ambient Physical 3D Ground Shadow */}
        <div className="w-[85%] h-5 -mt-2 bg-[#2c2e2a]/20 rounded-full blur-xl pointer-events-none transform -scale-y-50" />
      </div>
    </section>
  );
};

export default IdentityCard;
