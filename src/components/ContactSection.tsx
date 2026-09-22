import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight, Copy, Check, Send } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formContact, setFormContact] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Fatih, nama saya ${formName || 'Pengunjung'}${
      formContact ? ` (${formContact})` : ''
    }. ${formMessage || 'Saya ingin berdiskusi mengenai proyek / kolaborasi.'}`;
    const url = `https://wa.me/6282111500190?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Pesan Portofolio dari ${formName || 'Pengunjung'}`;
    const body = `Nama: ${formName}\nKontak: ${formContact}\n\nPesan:\n${formMessage}`;
    const mailto = `mailto:kazokuhairy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`;
    window.location.href = mailto;
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 py-12 sm:py-16 md:py-20">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16 text-left max-w-3xl">
        <p className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#8ed462] mb-3">
          DIRECT COMMUNICATION & CHANNELS
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2c2e2a] tracking-tight leading-[1.1]">
          Saluran Komunikasi & Media Sosial
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#2c2e2a]/75 leading-relaxed">
          Jangan ragu untuk menghubungi melalui WhatsApp untuk respon paling cepat, Instagram untuk interaksi visual, atau email untuk penawaran resmi.
        </p>
      </div>

      {/* Contact Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {/* WhatsApp Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="group relative flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] bg-[#ffffff] border border-[#2c2e2a]/10 hover:border-[#2c2e2a]/30 transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between gap-4 mb-5">
              <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#2c2e2a]/60">
                WHATSAPP (RESPON CEPAT)
              </span>
              <div className="w-11 h-11 rounded-full bg-[#f5f1e4] flex items-center justify-center text-[#2c2e2a] group-hover:bg-[#8ed462] group-hover:text-[#2c2e2a] transition-colors duration-300">
                <WhatsAppIcon size={22} />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#2c2e2a] tracking-tight mb-2">
              WhatsApp Messenger
            </h3>
            <p className="text-sm text-[#2c2e2a]/75 leading-relaxed mb-6">
              Tersedia untuk obrolan langsung seputar proyek pengembangan web, implementasi antarmuka, konsultasi teknologi, maupun diskusi santai.
            </p>

            <div className="space-y-3 mb-8">
              {/* Primary Number */}
              <div className="p-4 rounded-2xl bg-[#f5f1e4]/70 border border-[#2c2e2a]/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50">
                    Nomor Utama
                  </div>
                  <div className="text-base sm:text-lg font-black text-[#2c2e2a]">
                    +62 8211-1500-190
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('+6282111500190', 'wa-primary')}
                  className="p-2 rounded-xl bg-white hover:bg-[#2c2e2a] text-[#2c2e2a] hover:text-white transition-colors cursor-pointer"
                  title="Salin Nomor"
                >
                  {copiedType === 'wa-primary' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              {/* Secondary Number */}
              <div className="p-4 rounded-2xl bg-[#f5f1e4]/70 border border-[#2c2e2a]/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50">
                    Nomor Alternatif
                  </div>
                  <div className="text-base sm:text-lg font-black text-[#2c2e2a]">
                    +62 8950-6100-075
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('+6289506100075', 'wa-secondary')}
                  className="p-2 rounded-xl bg-white hover:bg-[#2c2e2a] text-[#2c2e2a] hover:text-white transition-colors cursor-pointer"
                  title="Salin Nomor Alternatif"
                >
                  {copiedType === 'wa-secondary' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/6282111500190?text=Halo%20Fatih%20Farhat,%20saya%20menghubungi%20melalui%20portofolio."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-[50px] bg-[#2c2e2a] hover:bg-[#8ed462] text-white hover:text-[#2c2e2a] font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98]"
          >
            <span>Chat Langsung via WhatsApp</span>
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Instagram Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] bg-[#ffffff] border border-[#2c2e2a]/10 hover:border-[#2c2e2a]/30 transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between gap-4 mb-5">
              <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#2c2e2a]/60">
                INSTAGRAM RESMI
              </span>
              <div className="w-11 h-11 rounded-full bg-[#f5f1e4] flex items-center justify-center text-[#2c2e2a] group-hover:bg-[#8ed462] group-hover:text-[#2c2e2a] transition-colors duration-300">
                <InstagramIcon size={22} />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#2c2e2a] tracking-tight mb-2">
              @ih.fernandez
            </h3>
            <p className="text-sm text-[#2c2e2a]/75 leading-relaxed mb-6">
              Ikuti aktivitas, visual journey, eksperimen kreatif, dan pemikiran seputar teknologi antarmuka dan pengembangan digital.
            </p>

            <div className="space-y-3 mb-8">
              <div className="p-4 rounded-2xl bg-[#f5f1e4]/70 border border-[#2c2e2a]/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50">
                    Akun Instagram
                  </div>
                  <div className="text-base sm:text-lg font-black text-[#2c2e2a]">
                    @ih.fernandez
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('@ih.fernandez', 'instagram')}
                  className="p-2 rounded-xl bg-white hover:bg-[#2c2e2a] text-[#2c2e2a] hover:text-white transition-colors cursor-pointer"
                  title="Salin Username"
                >
                  {copiedType === 'instagram' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#f5f1e4]/70 border border-[#2c2e2a]/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50">
                    Tautan Profil
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#2c2e2a]/80 truncate max-w-[200px] sm:max-w-[260px]">
                    instagram.com/ih.fernandez
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('https://instagram.com/ih.fernandez', 'instagram-link')}
                  className="p-2 rounded-xl bg-white hover:bg-[#2c2e2a] text-[#2c2e2a] hover:text-white transition-colors cursor-pointer"
                  title="Salin Link Profil"
                >
                  {copiedType === 'instagram-link' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          </div>

          <a
            href="https://instagram.com/ih.fernandez"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-[50px] bg-[#2c2e2a] hover:bg-[#8ed462] text-white hover:text-[#2c2e2a] font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98]"
          >
            <span>Kunjungi Profil @ih.fernandez</span>
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="group relative flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] bg-[#ffffff] border border-[#2c2e2a]/10 hover:border-[#2c2e2a]/30 transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between gap-4 mb-5">
              <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#2c2e2a]/60">
                EMAIL FORMAL
              </span>
              <div className="w-11 h-11 rounded-full bg-[#f5f1e4] flex items-center justify-center text-[#2c2e2a] group-hover:bg-[#8ed462] group-hover:text-[#2c2e2a] transition-colors duration-300">
                <Mail size={22} />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#2c2e2a] tracking-tight mb-2">
              Surat Elektronik
            </h3>
            <p className="text-sm text-[#2c2e2a]/75 leading-relaxed mb-6">
              Ideal untuk tawaran kerja sama jangka panjang, pengiriman dokumen spesifikasi teknis, atau proposal rekayasa perangkat lunak.
            </p>

            <div className="space-y-3 mb-8">
              <div className="p-4 rounded-2xl bg-[#f5f1e4]/70 border border-[#2c2e2a]/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50">
                    Alamat Email
                  </div>
                  <div className="text-sm sm:text-base font-black text-[#2c2e2a]">
                    kazokuhairy@gmail.com
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('kazokuhairy@gmail.com', 'email')}
                  className="p-2 rounded-xl bg-white hover:bg-[#2c2e2a] text-[#2c2e2a] hover:text-white transition-colors cursor-pointer"
                  title="Salin Alamat Email"
                >
                  {copiedType === 'email' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          </div>

          <a
            href="mailto:kazokuhairy@gmail.com?subject=Inquiry%20from%20Portfolio"
            className="w-full py-4 px-6 rounded-[50px] bg-[#2c2e2a] hover:bg-[#8ed462] text-white hover:text-[#2c2e2a] font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98]"
          >
            <span>Kirim Email Langsung</span>
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Location & Portfolio Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="group relative flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] bg-[#ffffff] border border-[#2c2e2a]/10 hover:border-[#2c2e2a]/30 transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between gap-4 mb-5">
              <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#2c2e2a]/60">
                LOKASI & DOMISILI
              </span>
              <div className="w-11 h-11 rounded-full bg-[#f5f1e4] flex items-center justify-center text-[#2c2e2a] group-hover:bg-[#8ed462] group-hover:text-[#2c2e2a] transition-colors duration-300">
                <MapPin size={22} />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#2c2e2a] tracking-tight mb-2">
              Pandeglang, Banten
            </h3>
            <p className="text-sm text-[#2c2e2a]/75 leading-relaxed mb-6">
              Berbasis di Banten, Indonesia. Terbuka untuk model kerja Remote secara penuh maupun On-Site untuk wilayah yang terjangkau.
            </p>

            <div className="space-y-3 mb-8">
              <div className="p-4 rounded-2xl bg-[#f5f1e4]/70 border border-[#2c2e2a]/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50">
                    Website Resmi
                  </div>
                  <div className="text-sm sm:text-base font-black text-[#2c2e2a]">
                    fatihfarhat.vercel.app
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('https://fatihfarhat.vercel.app', 'portfolio-url')}
                  className="p-2 rounded-xl bg-white hover:bg-[#2c2e2a] text-[#2c2e2a] hover:text-white transition-colors cursor-pointer"
                  title="Salin URL Website"
                >
                  {copiedType === 'portfolio-url' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#f5f1e4]/70 border border-[#2c2e2a]/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2c2e2a]/50">
                    Repositori GitHub
                  </div>
                  <div className="text-sm sm:text-base font-black text-[#2c2e2a]">
                    github.com/imanecdoche
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('https://github.com/imanecdoche', 'github-url')}
                  className="p-2 rounded-xl bg-white hover:bg-[#2c2e2a] text-[#2c2e2a] hover:text-white transition-colors cursor-pointer"
                  title="Salin URL GitHub"
                >
                  {copiedType === 'github-url' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/imanecdoche"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 px-5 rounded-[50px] bg-[#2c2e2a] hover:bg-[#8ed462] text-white hover:text-[#2c2e2a] font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98]"
            >
              <span>Buka GitHub</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://fatihfarhat.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 px-5 rounded-[50px] bg-white hover:bg-[#2c2e2a] text-[#2c2e2a] hover:text-white border-2 border-[#2c2e2a] font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98]"
            >
              <span>Portofolio Web</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Interactive Quick Direct Message Box */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="p-6 sm:p-10 md:p-12 rounded-[32px] sm:rounded-[40px] bg-[#ffffff] border border-[#2c2e2a]/10"
      >
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#8ed462] mb-2">
            QUICK MESSAGE
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2c2e2a] tracking-tight leading-tight mb-3">
            Kirimkan Pesan Singkat
          </h3>
          <p className="text-sm sm:text-base text-[#2c2e2a]/75 mb-8">
            Tuliskan pesan atau kebutuhan Anda di bawah ini, lalu pilih pengiriman langsung ke WhatsApp atau Email.
          </p>
        </div>

        <form className="space-y-5 max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/70 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="Contoh: Rahmat Hidayat"
                className="w-full px-4 py-3.5 rounded-2xl bg-[#f5f1e4]/50 border border-[#2c2e2a]/15 text-[#2c2e2a] placeholder-[#2c2e2a]/40 text-sm font-medium focus:outline-none focus:border-[#2c2e2a] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/70 mb-2">
                Kontak Anda (Nomor WA / Email)
              </label>
              <input
                type="text"
                value={formContact}
                onChange={(e) => setFormContact(e.target.value)}
                placeholder="Contoh: 0812xxxx atau email@domain.com"
                className="w-full px-4 py-3.5 rounded-2xl bg-[#f5f1e4]/50 border border-[#2c2e2a]/15 text-[#2c2e2a] placeholder-[#2c2e2a]/40 text-sm font-medium focus:outline-none focus:border-[#2c2e2a] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#2c2e2a]/70 mb-2">
              Pesan / Rencana Kolaborasi
            </label>
            <textarea
              rows={4}
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              placeholder="Tuliskan ide proyek, penawaran kerja sama, atau pertanyaan Anda..."
              className="w-full px-4 py-3.5 rounded-2xl bg-[#f5f1e4]/50 border border-[#2c2e2a]/15 text-[#2c2e2a] placeholder-[#2c2e2a]/40 text-sm font-medium focus:outline-none focus:border-[#2c2e2a] transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full sm:w-auto px-8 py-4 rounded-[50px] bg-[#2c2e2a] hover:bg-[#8ed462] text-white hover:text-[#2c2e2a] font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              <WhatsAppIcon size={18} />
              <span>Kirimkan ke WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleSendEmail}
              className="w-full sm:w-auto px-8 py-4 rounded-[50px] bg-[#ffffff] hover:bg-[#2c2e2a] text-[#2c2e2a] hover:text-white border-2 border-[#2c2e2a] font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              <Send size={18} />
              <span>Kirimkan via Email</span>
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
