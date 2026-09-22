# Absolute Rules & Instructions Log

Acuan utama dan mutlak selalu benar.

## 📌 Log Instruksi Proyek
1. **Acuan Desain:** Gunakan `DESIGN.md` sebagai acuan mutlak, patuhi semua tokens, colors, font scales, radius, spacing, dan layout rules.
2. **Aturan Badge:** JANGAN PERNAH MEMBUAT BADGE dengan style outlined dan fill yang lebih transparan. Jika ingin membuat badge, pastikan kapsul badge FILLED tanpa outlined (lihat [.agents/rules/badge-rules.md](./rules/badge-rules.md)).
3. **Scope Pengerjaan Awal:** Cukup buat header saja dulu (floating capsule panjang warna putih, kiri teks bold extended "FATIH FARHAT", menu navbar hanya "HOME"). Jangan buat elemen lain selain navbar.
4. **Hero Section:** Buat hero section center-aligned dengan headline utama 1 baris ("FATIH FARHAT") super besar, sub-teks di tengah dengan ukuran lebih besar ("Selamat datang di portofolioku!"), tetap memberikan ruang nafas visual (generous breathing room).
5. **Tipografi FATIH FARHAT Hero:** Gunakan font **Nunito Black / Extra Bold** (weight 900 / 800) untuk headline hero section.
6. **Lebar Header:** Buat lebar floating header capsule lebih pendek 40% (menjadi ~720px max-width / 60% dari standard 1200px) agar lebih compact dan proporsional.
7. **Font Global:** Gunakan font **Nunito** (`family=Nunito:wght@200..1000`) secara global menggantikan font Varela Round untuk semua elemen dan teks website.
8. **Tombol Menu Titik Tiga (Metaball / Gooey Effect):** Tombol menu titik tiga awalnya tersembunyi di balik header capsule. Ketika header di-hover oleh kursor, tombol lingkaran putih meluncur keluar ke sebelah kanan dengan **efek metaball / gooey liquid** yang elastis dan mulus (memakai SVG `feGaussianBlur` + `feColorMatrix` tanpa merusak ketajaman teks/icon), menyatu secara organik saat bersentuhan dan meregang saat memisahkan diri.
9. **Jarak Navigasi HOME ke Ujung Kanan:** Jarak antara tombol navigasi "HOME" dengan ujung kanan header capsule harus sama persis dengan padding atas & bawahnya ke header capsule (simetris vertikal & horizontal kanan).
10. **Jarak Subteks Hero:** Buat jarak antara subteks ("Selamat datang di portofolioku!") dengan headline utama hero lebih pendek dan rapat (compact margin-top).
11. **Animasi Hero:** Gunakan animasi clean fade/slide dengan Framer Motion untuk teks headline FATIH FARHAT (tanpa FoldText).
12. **ScrollVelocity Marquee:** Pasang komponen `ScrollVelocity` (@react-bits/ScrollVelocity-JS-CSS) di bawah hero section dengan teks "Vibe Coder - Web Developer - Graphic Designer - Illustrator - Digital Marketer - Copywriter". Props: velocity=60, numCopies=12, damping=100, stiffness=750, ukuran font 30% lebih kecil (~1.35rem mobile, 2.25rem desktop).
13. **Font Nunito Configuration:** Menyediakan class utilitas `.nunito-<uniquifier>` (`.nunito-regular`, `.nunito-bold`, `.nunito-extrabold`, `.nunito-black`) dengan `font-family: "Nunito", sans-serif; font-optical-sizing: auto; font-weight: <weight>;` dan diterapkan di CSS `:root`, `html`, `body`, serta token `--font-nunito`.
14. **Tombol JELAJAHI Hero:** Tambahkan tombol kapsul "JELAJAHI" di bawah subteks hero section dengan jarak lebih turun (`mt-12 sm:mt-14 md:mt-16`), label font ultra tebal/black (`font-black`, `tracking-[0.12em]`), background putih (`#ffffff`), teks hitam (`#2c2e2a`), serta efek hover invert warna (background hitam `#2c2e2a` dan teks putih `#ffffff`).
15. **Animasi Kursor Drag Selection Hero:** Elemen kursor masuk secara bertahap dari luar halaman (`-50vw, -40vh`) dengan easing mulus ke pojok kiri atas teks "FATIH FARHAT", mendarat dan jeda micro-click terlebih dahulu sebelum seleksi dimulai. Setelah kursor mendarat, kursor mulai menyeret bounding box dengan ujung pointer terkunci 100% di sudut kanan bawah sampai 100% ukuran penuh, menahan sejenak, lalu meluncur keluar halaman (`55vw, 45vh`) secara fisik dengan kurva easing halus tanpa fade.
16. **Posisi & Opasitas ScrollVelocity Marquee:** Posisikan section teks berjalan `ScrollVelocity` naik ke atas sebesar 25px (`-translate-y-[25px]`) dan turunkan opasitasnya sebesar 25% (menjadi `opacity-75` / 75%) agar tampil lebih halus dan harmonis di bawah Hero section.
17. **Scrollbar & Scroll Progress:** Sembunyikan scrollbar bawaan browser secara cross-browser (`scrollbar-width: none`, `-ms-overflow-style: none`, `::-webkit-scrollbar { display: none }`). Sebagai gantinya, buat custom scroll progress bar di bagian paling atas halaman dengan Framer Motion `useScroll` + `useSpring` beraksen warna Fresh Grass (`#8ed462`, `h-[3.5px]`, `fixed top-0 z-60`).
18. **Zero Shadow (Flat Design):** Tidak boleh ada bayangan (*shadow / drop-shadow / box-shadow*) pada elemen UI manapun, termasuk header capsule, tombol titik tiga, scroll progress bar, kursor pointer, tombol jelajahi, dan surface lainnya sesuai prinsip flat modern `DESIGN.md`.
19. **Delay Sembunyi Tombol Titik Tiga (1 Detik):** Tombol menu titik tiga di header diberikan jeda/delay 1 detik (`1000ms`) setelah kursor meninggalkan area header sebelum tombol kembali meluncur masuk dan bersembunyi ke balik header capsule.
20. **Easing & Durasi Tombol Titik Tiga:** Menggunakan kurva easing ultra-smooth quintic cubic-bezier (`ease: [0.16, 1, 0.3, 1]`) dan durasi `0.85s` agar transisi gerakan meluncur dan efek metaball terasa sangat mulus, santai, dan tidak terburu-buru.
21. **Vite Network Host:** Mengaktifkan konfigurasi `server: { host: true, port: 5176 }` pada `vite.config.ts` agar server dapat diakses melalui jaringan lokal (LAN / Wi-Fi) dari perangkat lain seperti HP atau laptop lain.
22. **Layout Khusus Mobile Browser & ScrollVelocity:** Mengoptimalkan layout responsif khusus layar mobile (browser HP) dengan menaikkan posisi `ScrollVelocity` jauh ke atas sebesar 200px (`-translate-y-[200px]` pada mobile dan `-translate-y-[25px]` pada desktop/tablet/sm), serta menyesuaikan padding dan proporsi hero section agar compact dan pas di viewport mobile.
23. **Arah Muncul Tombol Titik Tiga di Mobile:** Pada tampilan mobile browser (`< 640px`), tombol menu titik tiga di header meluncur keluar **ke arah BAWAH** (`y: 66px`) dari bawah header capsule dengan efek metaball/gooey liquid (bukan ke arah samping), dan mendukung interaksi sentuh (tap/click). Pada tampilan desktop (`>= 640px`), tombol tetap meluncur ke arah samping kanan (`x: 68px`).
24. **Headline Hero 2 Baris di Mobile:** Pada tampilan mobile browser (`< 640px`), teks headline hero "FATIH FARHAT" dibuat menjadi **2 baris** ("FATIH" di atas, "FARHAT" di bawah) dengan ukuran font jauh lebih besar (`text-[17vw]` dengan `leading-[0.88]`). Bounding box seleksi dan kursor pointer secara dinamis menyesuaikan ukuran 2 baris tersebut dari sudut kiri atas "FATIH" hingga sudut kanan bawah "FARHAT". Pada desktop (`>= 640px`), teks tetap 1 baris horizontal.
25. **Fullscreen Expanding Circle Navigation Menu:** Menekan tombol titik tiga (baik di mobile maupun desktop) memicu animasi lingkaran yang membesar secara ekspansif (*circular ripple / clip-path expansion*) dari titik pusat tombol titik tiga hingga menutupi seluruh layar (*fullscreen*) sebagai background menu navigasi. Selama menu terbuka, ikon titik tiga bertransformasi mulus menjadi ikon silang (×) di posisi terdepan (*z-index 70*). Menekan tombol × atau salah satu menu link akan menyusutkan kembali lingkaran ke posisi tombol titik tiga dan mengembalikan ikon titik tiga.
26. **Perbaikan Animasi & Warna Menu Navigasi:** 
    - **Origin Presisi:** Titik awal pembesaran lingkaran harus tepat 100% dari posisi pusat tombol titik tiga yang sedang aktif (`origin.x` dan `origin.y` diukur secara live via `getBoundingClientRect()`).
    - **Ekspansi Mulus Kontinu:** Pembesaran lingkaran menggunakan radius satuan piksel presisi (`0px` ke `${maxRadius}px` yang mencakup seluruh diagonal layar) agar animasi berjalan kontinu dari awal hingga penuh tanpa terhenti di tengah jalan atau melompat statis.
    - **Warna Sesuai Style (Bebas Hijau):** Background menu navigasi menggunakan warna teks hero section (`#2c2e2a` / Ink Black), dan seluruh teks/elemen navigasi (termasuk nomor `01`-`05`, label navigasi, link sosial, copyright) menggunakan warna background layar utama (`#f5f1e4` / Cream Paper) dengan efek hover ke `#ffffff` (Pure White), tanpa menggunakan warna hijau sama sekali.
27. **GPU Radial Scale Menu Expansion:** Menggunakan elemen lingkaran `scale` berbasis GPU (`transform: scale(0)` ke `scale(maxScale)`) yang terkunci 100% pada koordinat tengah tombol titik tiga (`origin.x`, `origin.y` terpusat presisi dengan `marginLeft: -30px`, `marginTop: -30px`, `transformOrigin: center center`), menjamin ekspansi radial mulus sempurna langsung dari pusat tombol titik tiga tanpa meleset atau bergeser ke sudut layar.
28. **Visibilitas Tombol Tutup (×) & Penyesuaian Header Menu:**
    - Tombol titik tiga / ikon silang (×) selalu berada di lapisan terdepan (`z-index 75+` di atas background dan konten menu navigasi) dan kapsul header otomatis fade-out saat menu terbuka sehingga tombol silang (×) tampak jelas mengambang di atas menu navigasi.
    - Label teks `'NAVIGASI'` pada bagian atas menu navigasi fullscreen dihilangkan.
29. **Urutan Penutupan Menu & Sembunyi Tombol Titik Tiga:** Saat menu navigasi ditutup (baik via tombol ×, link navigasi, atau Escape), tombol titik tiga tetap bertahan di posisinya selama proses penutupan background lingkaran berlangsung (~0.8s). Setelah menu navigasi tertutup sempurna dan jeda selesai, tombol titik tiga baru kemudian meluncur masuk dan bersembunyi kembali ke balik header capsule.
30. **Halaman Tentang Saya:** Halaman "Tentang Saya" dibuat dengan layout, estetika flat, tipografi Nunito Black, dan animasi drag selection kursor yang sama persis dengan hero section home ("FATIH FARHAT"), dengan teks headline utama "TENTANG SAYA", serta navigasi seamless melalui header navbar maupun fullscreen menu overlay.
31. **LogoLoop di Halaman Tentang Saya:** Menggantikan `ScrollVelocity` di halaman "Tentang Saya" dengan komponen `LogoLoop` (@react-bits/LogoLoop-JS-CSS). Konfigurasi: daftar tech logos lengkap (React.js, Vercel, Vite, Google Antigravity, VS Code, Firebase, Next.js, JavaScript, TypeScript, Tailwind CSS, Claude, Adobe Photoshop, Adobe Illustrator, Blender) dengan style flat vector dan warna solid (`#2c2e2a`), fade-out gradient tepi (`#f5f1e4`), kecepatan halus dengan perlambatan saat hover (`speed: 70`, `hoverSpeed: 15`).
32. **Pemisah Teks ScrollVelocity:** Teks marquee `ScrollVelocity` pada halaman Home ditambahkan tanda hubung pemisah `" -"` setelah kata `"Copywriter"` sehingga menjadi: `"Vibe Coder - Web Developer - Graphic Designer - Illustrator - Digital Marketer - Copywriter -"`, menjaga konsistensi visual saat looping berulang.
33. **Biografi Profesional di Halaman Tentang Saya:** Menambahkan template/placeholder biografi profesional di bawah komponen LogoLoop pada halaman "Tentang Saya", terdiri dari lingkaran placeholder besar (avatar/profil) di tengah dengan gaya flat zero-shadow dan di bawahnya paragraf teks dummy biografi yang rapi dengan alignment center (`text-center`) dan tipografi Nunito yang proporsional.
34. **Posisi Tombol Titik Tiga di Pojok Kanan Atas:** Memindahkan tombol menu titik tiga ke posisi **pojok kanan atas** layar (`fixed top-5 right-4 sm:right-6 md:right-8 z-80`) sebagai floating circular button yang elegan dan mandiri (zero shadow, flat modern). Ketika ditekan, animasi ekspansi radial menu fullscreen tetap membesar mulus presisi dari koordinat tombol di pojok kanan atas, dan ikon bertransisi mulus menjadi silang (×).
35. **Animasi Header Sembunyi Saat Scroll (Scroll-Aware Slide Up):** Floating header capsule dan tombol menu otomatis meluncur (*slide*) ke atas keluar layar saat pengguna melakukan *scroll down*, dan meluncur turun kembali secara halus saat melakukan *scroll up* atau berada di bagian atas halaman (`scrollY < 50`). Jika menu navigasi fullscreen sedang terbuka, status visibilitas tetap terkunci terbuka.
36. **Header & Tombol Menu Khusus Mobile:**
    - Pada tampilan **mobile** (`< 640px`): Tombol menu titik tiga ditempatkan **di dalam header capsule** pada pojok kanan, dan menu navigasi teks inline ("HOME" & "TENTANG") dihilangkan dari header capsule sehingga hanya menyisakan brand "FATIH FARHAT" dan tombol titik tiga. Tombol floating luar disembunyikan di mobile.
    - Pada tampilan **desktop** (`>= 640px`): Header capsule tetap menampilkan brand dan menu navigasi ("HOME" & "TENTANG"), sedangkan tombol titik tiga berada di pojok kanan atas layar secara floating.
37. **Teks Brand FATIH FARHAT Saat Menu Terbuka:**
    - Teks brand "FATIH FARHAT" di header selalu berada di atas cover (*z-index* lebih tinggi dari cover background menu navigasi fullscreen).
    - Ketika menu titik tiga dibuka, warna teks "FATIH FARHAT" bertransisi menjadi warna background utama (`#f5f1e4`), sedangkan kapsul putih dan menu inline memudar transparan.
    - Teks "FATIH FARHAT" di dalam top-bar overlay menu navigasi fullscreen dihilangkan sepenuhnya (mencegah duplikasi).
38. **Posisi LogoLoop di Halaman Tentang Saya:** Menurunkan posisi komponen `LogoLoop` pada halaman "Tentang Saya" ke bawah sebesar 50pt / ~50-66px (`translate-y-[50px]` / `-translate-y-[150px] sm:translate-y-[25px]`) agar jarak visual dengan section hero dan biografi menjadi lebih lapang dan harmonis.
39. **Animasi Pergeseran Teks Header Desktop Saat Menu Dibuka:**
    - Pada tampilan **desktop** (`>= 640px`): Saat menu navigasi fullscreen dibuka, teks brand "FATIH FARHAT" di header bergeser ke arah kiri dengan transisi animasi halus (`ease: [0.16, 1, 0.3, 1]`, durasi ~0.6s) hingga sejajar vertikal dengan list item menu navigasi fullscreen (`max-w-5xl`), dan meluncur kembali ke posisi tengah header saat menu ditutup.
40. **Foto Profil Halaman Tentang Saya (`me.jpeg`):** Menggunakan foto asli `me.jpeg` sebagai foto profil di dalam lingkaran avatar pada halaman "Tentang Saya" (komponen `AboutBio.tsx`), disajikan dengan bingkai border solid flat (`border-4 border-[#2c2e2a]`), `object-cover`, `rounded-full`, dan zero-shadow.
41. **Skala LogoLoop Lebih Kecil di Halaman Tentang Saya:** Memperkecil skala ukuran ikon komponen `LogoLoop` pada halaman "Tentang Saya" (mengubah `logoHeight` dari 42 menjadi 28 dan `gap` menjadi 40) agar tampil lebih compact, proporsional, dan elegan di bawah section hero.
42. **Halaman Navigasi Portofolio & Logo Brand:**
    - Membuat halaman Portofolio (`#portfolio`) dengan hero section (`PortfolioHero.tsx`), headline 2 baris `"MY"` (baris 1) dan `"WORKS"` (baris 2) dengan gaya flat modern, tipografi Nunito Black, dan animasi selection kursor.
    - Menempatkan `LogoLoop` pada halaman Portofolio dengan posisi dan skala yang sama dengan halaman Tentang Saya (`logoHeight={28}`, `gap={40}`, `-translate-y-[135px] sm:translate-y-[25px]`).
    - Daftar logo portofolio: Adobe, Tokopedia, Steam, Marvel Studios, GoTo, TikTok, MICO, Moonton, Valve, ForceOrg dengan style flat vector monokrom (`#2c2e2a`).
43. **Aset Logo Asli/High-Res Halaman Portofolio:** Memperbarui seluruh 10 logo brand di halaman Portofolio menggunakan file vektor SVG resmi / PNG resolusi tinggi dari sumber terpercaya (Adobe, Tokopedia, Steam, Marvel Studios, GoTo, TikTok, MICO Live, Moonton, Valve, ForceOrg) dengan styling monokrom solid `#2c2e2a` yang presisi.
44. **Perbaikan Animasi Infinite LogoLoop (True Seamless Loop):** Mengoptimalkan komponen `LogoLoop.tsx` dengan `ResizeObserver` dinamis, handling `onLoad` pada seluruh aset logo gambar/vektor, delta-time capping pada animation frame, dan 4x buffer copy track berulang. Memastikan animasi bergerak berkesinambungan secara kontinu 100% mulus (*infinite seamless loop*) tanpa jeda statis atau lompatan visual mendadak.
45. **Skala Responsif LogoLoop di Halaman Tentang Saya:** Khusus pada tampilan desktop (`>= 640px`), ukuran logo pada `LogoLoop` halaman Tentang Saya dikembalikan menjadi lebih besar (`logoHeight: 42`, `gap: 56`) sesuai ukuran semula sebelum diperkecil, sedangkan pada tampilan mobile (`< 640px`) tetap compact (`logoHeight: 28`, `gap: 40`).
46. **Bebas Clipping pada Seluruh Logo Loop:** Menambahkan ruang vertikal (vertical padding `py-4 sm:py-6`) pada container dan track `LogoLoop`, `overflow-visible` pada logo wrapper, dan `object-fit: contain` pada aset gambar/SVG agar seluruh logo tidak ada yang terpotong (*clipped*) secara visual.
47. **Halaman Navigasi Keahlian & Jasa:**
    - Membuat halaman "Keahlian & Jasa" (`#services`) dengan hero section (`ServicesHero.tsx`), headline 2 baris `"MY"` (baris 1) dan `"SKILLS"` (baris 2) dengan tipografi Nunito Black, animasi selection kursor, dan gaya flat modern.
    - Menempatkan `LogoLoop` pada halaman Keahlian & Jasa dengan konfigurasi yang sama persis seperti halaman Tentang Saya (`techLogos`, `logoHeight={isMobile ? 28 : 42}`, `gap={isMobile ? 40 : 56}`, `-translate-y-[135px] sm:translate-y-[25px]`).
    - Mengintegrasikan navigasi `#services` pada header dan fullscreen navigation menu overlay.
48. **Panel Sticky Timeline Edukasi di Halaman Tentang Saya:** Menambahkan panel timeline riwayat pendidikan di bawah biografi halaman "Tentang Saya" dengan label sticky `"EDUCATION"`, garis timeline vertikal dan indikator lingkaran di sebelah kiri yang statis/sticky saat scroll, serta deretan informasi pendidikan (SD, SMP, SMA, S1) di sisi kanan dengan animasi dan penyorotan dinamis.
49. **Penyempurnaan Sticky Scroll Timeline Edukasi:**
    - **Sticky on the Top:** Panel timeline menempel di bagian atas viewport (`sticky top-24 sm:top-28 md:top-32`) selama proses scroll.
    - **Muncul Satu per Satu (Step-by-Step Transition):** Ketika di-scroll, konten perjalanan edukasi (SD, SMP, SMA/SMK, S1) tampil bergantian satu per satu secara halus dan dinamis, bukan sekaligus semua dalam bentuk list panjang.
    - **Tanpa Kontainer Putih:** Menghapus kontainer kartu putih (`bg-[#ffffff]`) dan border box; konten menyatu langsung secara flat di atas background cream (`#f5f1e4`).
    - **Tanpa Badge "AKADEMIK":** Menghilangkan badge kapsul "AKADEMIK" di atas label judul "EDUCATION".
50. **True Screen-Pinned Sticky Timeline Lock:**
    - Panel timeline terkunci statis di layar (`sticky top-0 h-screen flex items-center`) saat di-scroll ke bawah; posisi tampilan sama sekali tidak bergeser atau bergeser turun naik.
    - Selama proses scroll terkunci ini, hanya konten kartu edukasi yang berganti secara bertahap (SD → SMP → SMA/SMK → S1).
    - Halaman baru dapat melanjutkan scroll ke bawah setelah melewati jenjang terakhir (mentok S1).
    - Saat di-scroll kembali ke atas, kartu bergerak mundur secara berurutan (S1 → SMA/SMK → SMP → SD) sebelum unpin kembali ke biografi atas.
51. **Solusi Perbaikan CSS Sticky Context:**
    - Mengganti `overflow-x: hidden` menjadi `overflow-x: clip` pada `html, body` dan wrapper utama untuk mencegah pemutusan konteks scroll sticky oleh browser.
    - Menilangkan `transform` (misal `y: 15` pada animasi transisi halaman) dari parent wrapper halaman (`motion.div`) agar tidak merusak stacking context `position: sticky`.
    - Menjamin panel timeline edukasi 100% menempel statis di viewport tanpa terbawa scroll ke atas.
52. **Single Active Page Indicator di Header Desktop:**
    - Pada tampilan desktop (`>= 640px`), deretan tombol navigasi di dalam header capsule dihilangkan, digantikan hanya dengan satu indikator/pill aktif yang menampilkan nama halaman yang sedang dibuka saat ini (misal: "HOME", "TENTANG SAYA", "PORTOFOLIO", "KEAHLIAN & JASA").
53. **Penyederhanaan Tampilan Panel Education:**
    - **Jarak Atas Lebih Pendek di Mobile:** Pada tampilan mobile (`< 640px`), jarak antara batas atas layar dan konten sticky panel timeline edukasi diperpendek (`pt-20 sm:pt-0 items-start sm:items-center`) agar konten pas dan lapang di viewport mobile.
    - **Hapus Tag/Badge Bawah Deskripsi:** Menghilangkan seluruh badge/tag keahlian di bawah paragraf deskripsi setiap kartu pendidikan.
    - **Hapus Teks Meta di Atas Judul Sekolah:** Menghilangkan teks nomor step/level dan tahun/periode di atas judul nama jenjang pendidikan.
54. **Sembunyikan Header Saat Timeline Edukasi Sticky:**
    - Ketika panel education timeline berada dalam status terkunci (*sticky on the screen*), header tetap tersembunyi (*hidden*) meskipun pengguna melakukan scroll ke atas untuk memundurkan kartu timeline edukasi.
    - Header baru dapat muncul kembali secara normal saat pengguna telah selesai/keluar dari sticky timeline dan berada di area biografi atau bagian atas halaman.
55. **Hapus Counter Step (0X / 04) pada Sidebar Education:**
    - Menghilangkan badge indikator nomor langkah/counter step (`01 / 04`, `02 / 04`, dst.) pada sidebar panel timeline edukasi agar tampilan lebih bersih dan rapi.
56. **Styling Garis & Titik Timeline Desktop:**
    - Pada tampilan desktop, garis timeline vertikal dibuat lebih tebal (+2pt menjadi `w-[4px]`) dan ukuran elemen diperbesar (+5px).
    - Titik timeline disederhanakan menjadi single solid dot murni dengan warna yang sama persis seperti garis (`#2c2e2a` untuk aktif/passed dan `#2c2e2a]/20` untuk inaktif, tanpa concentric inner ring atau warna hijau).
57. **Warna Solid Tanpa Transparansi/Alpha pada Garis & Titik Inaktif Timeline:**
    - Seluruh elemen inaktif pada timeline edukasi (garis track dasar dan titik single dot inaktif) dilarang menggunakan transparansi atau alpha channel (seperti `/20` atau `opacity < 100%`) agar tidak menimbulkan efek tumpang-tindih (blend/stripe see-through) antara garis dan titik.
    - Sebagai gantinya, gunakan 100% opasitas solid dengan warna cerah/terang yang harmonis di atas background cream (misalnya `#d5d5d4` / `#e0dbce` untuk garis & titik, serta teks solid abu-abu `#9c9991` untuk label inaktif).
58. **Garis Timeline Vertikal Menyambung Penuh (Segment-Based Continuous Track):**
    - Garis timeline vertikal menggunakan arsitektur garis segmen penghubung (connector line) antar titik atau track yang terpasang presisi dari pusat dot atas ke dot bawah (`top-[9px] bottom-[9px]`, `w-[4px]`, `left-[7px]`), tanpa terpotong oleh `max-height` atau `padding`.
    - Garis aktif terisi penuh menyambungkan dari dot atas ke dot bawah pada setiap step yang aktif/terlewati secara solid dan kontinu.
59. **Sticky Scroll Typing Text Animation pada Panel Biografi (AboutBio):**
    - Panel biografi pada halaman Tentang Saya dikunci/sticky on screen saat di-scroll (`h-[250vh]` atau `h-[300vh]`, `sticky top-0 h-screen flex items-center justify-center`).
    - Selama terkunci di layar, teks deskripsi biografi memunculkan animasi typing/revealing per huruf (*character-by-character reveal*) atau per kata mengikuti persentase arah scroll pengguna secara interaktif (scroll ke bawah mengetik maju, scroll ke atas menghapus/mundur).
    - Setelah seluruh teks selesai terketik 100%, scroll akan unpin/lepas dan berlanjut ke panel timeline edukasi di bawahnya.
60. **Teks Unrevealed Tersembunyi Penuh (100% Transparan) & Kursor Garis Berkedip (Blinking Cursor):**
    - Teks biografi yang belum terketik (*untyped*) disembunyikan secara penuh (transparansi 100% / `opacity-0` / `invisible` atau `text-transparent`) sehingga tidak terlihat sama sekali sebelum giliran hurufnya terketik.
    - Kursor ketik menggunakan animasi garis vertikal yang berkedip tegas (*sharp blinking keyframe animation*, misal `@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }` dengan durasi ~0.8s) di ujung huruf yang sedang aktif.
61. **Layout Kata Tetap (Fixed Word Position / Pre-allocated Word Layout):**
    - Teks biografi typing harus menjaga struktur layout kata tetap stabil (*fixed position*) sejak awal sehingga tidak ada kata yang tiba-tiba melompat atau berpindah baris (*line wrap jump*) saat hurufnya mulai terketik.
    - Kursor kedip harus diposisikan secara mutlak (*absolute / zero-width relative layout*) pada akhir huruf aktif tanpa menyisipkan lebar spasi inline fisik baru yang menggeser kata berikutnya ke baris bawah.
62. **Optimasi Antialiasing Desktop & Sinkronisasi Render Loop Lenis + GSAP:**
    - Mengaktifkan antialiasing global (`-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`, `text-rendering: optimizeLegibility`) dan anti-shaking hardware acceleration (`backface-visibility: hidden`, `transform: translateZ(0)`, `outline: 1px solid transparent`) pada elemen animasi dan canvas di CSS global.
    - Mengawinkan render tick loop `Lenis` langsung ke dalam `gsap.ticker` (`gsap.ticker.add((time) => lenis.raf(time * 1000))` dan `gsap.ticker.lagSmoothing(0)`) untuk mencegah persaingan RAF (race condition) dan stuttering/frame drop di desktop.
63. **Penyelarasan Konten Teknologi, Rekayasa Perangkat Lunak, dan Showcase Proyek Nyata (22 September 2026):**
    - **Dev Server**: Server berjalan aktif pada `http://localhost:5176` (atau port Vite terkait).
    - **Penyelarasan Profil**: Selaraskan teks hero scroll velocity, deskripsi biografi pada `AboutBio.tsx`, dan ikon teknologi pada `TechLogos.tsx` (menambahkan Python dan Git) agar merefleksikan profil *Frontend Developer & Creative Technologist*.
    - **Showcase Proyek Nyata pada Halaman Portofolio**: Menampilkan proyek nyata (*Ostifak Interactive PDF Reader*, *Automated Data Engine*, dan *Clean Design System*) pada halaman portofolio dengan estetika MindMarket (Cream `#f5f1e4`, `#2c2e2a`, `#8ed462`, Inter font, border 1px solid, tanpa badge/tag/pill sembarangan sesuai `ai-anti-patterns.md`).
64. **Kelengkapan Halaman Kontak & Timeline Riwayat Pekerjaan (22 September 2026):**
    - **Halaman Kontak (`#contact`)**:
      - Lengkapi halaman kontak dengan data autentik:
        - Instagram: `@ih.fernandez` (`https://instagram.com/ih.fernandez`)
        - WhatsApp: Nomor aktif `+62 8211-1500-190` (`https://wa.me/6282111500190`) dan `+62 8950-6100-075` (`https://wa.me/6289506100075`)
        - Email: `kazokuhairy@gmail.com`
      - Desain konsisten estetika MindMarket/Fatih Farhat (Cream `#f5f1e4`, Ink `#2c2e2a`, Accent `#8ed462`), interaktif, tanpa badge/tag/pill tanpa perintah (mutlak patuhi `ai-anti-patterns.md`).
    - **Halaman Tentang Saya (`#about`) — Timeline Riwayat Pekerjaan (`ExperienceTimeline.tsx`)**:
      - Tambahkan timeline riwayat pekerjaan (riwayat pengalaman kerja) dengan gaya/style yang sama persis seperti `EducationTimeline.tsx` (sticky on scroll, step-by-step transition, connector line kontinu `w-[4px]`, single solid dot tanpa ring/transparansi, tipografi Nunito/Inter).
      - Menampilkan 4 pengalaman kerja autentik dari CV:
        1. *Multimedia & Tech Creative Staff* – Yayasan Fajrul Karim (Juli 2023 – Oktober 2024)
        2. *Technical Production Operator* – Megasoccer Jersey (Mei 2025 – September 2025)
        3. *Technical & Language Instructor* – LOGOS Course Center (November 2024 – Maret 2025)
        4. *Product & Presentation Specialist* – PT Passion Abadi Korpora (Oktober 2025 – Januari 2026)
65. **Integrasi GitHub https://github.com/imanecdoche, Diagram Lingkaran ApexCharts Keahlian & Jasa, dan Pembaruan Data Edukasi (22 September 2026):**
    - **Tautan GitHub**: Seluruh tautan GitHub diarahkan ke `https://github.com/imanecdoche` (di Header overlay, Contact Section, dan komponen terkait).
    - **Halaman Keahlian & Jasa (`#services`) — Diagram Distribusi Lingkaran ApexCharts**:
      - Wajib menggunakan library `apexcharts` dan `react-apexcharts` (`npm i apexcharts react-apexcharts` / `bun add apexcharts react-apexcharts`), dilarang menggunakan diagram bawaan tailwind.
      - Membangun diagram-diagram distribusi berbentuk lingkaran (*donut / pie charts*) yang rapi, interaktif, selaras dengan estetika MindMarket (Cream `#f5f1e4`, Ink Black `#2c2e2a`, Accent `#8ed462`, palet harmonis), font Nunito/Inter, tanpa badge/tag/pill tanpa perintah.
      - Diagram lingkaran yang wajib dihadirkan:
        1. **Bahasa (Languages)**: Indonesia, Inggris, Arab, Spanyol (mengacu pada data CV).
        2. **Skill Bahasa Program (2 Diagram Distribusi)**:
           - Diagram Distribusi Frontend: HTML, Tailwind CSS, React, JavaScript, TypeScript, CSS dll.
           - Diagram Distribusi Backend: Node.js, Python, Express, REST API, GraphQL, dll.
        3. **Database**: Firebase, MySQL, Supabase, Appwrite, AWS Amplify.
        4. **Software Design**: Illustrator, Photoshop, Figma, Adobe XD, InDesign.
        5. **Video Editing**: After Effects, Premiere Pro, DaVinci Resolve, CapCut.
        6. **Office**: Word, Excel, Access.
    - **Pembaruan Data Timeline Edukasi (`EducationTimeline.tsx`)**:
      - SD: **SDN Cipicung 02**
      - SMP: **SMP Fajrul Karim**
      - SMA: **SMA Fajrul Karim**
      - Tahap terakhir: **Bukan S1** (gunakan sebutan profesional non-S1, misal: *Pendidikan Mandiri & Rekayasa Perangkat Lunak / Independent Tech Study*).
66. **Perubahan Diagram Keahlian & Jasa Menjadi Diagram Lingkaran Per Skill Individual dengan Ikon Aplikasi Nyata (22 September 2026):**
    - **Model Visual**: Tidak menggunakan diagram distribusi multi-kategori dalam satu lingkaran besar. Setiap skill memiliki **satu diagram lingkaran individual (*individual circular radial gauge*)** tersendiri yang menampilkan persentase penguasaan secara fokus dan presisi.
    - **Ikon Aplikasi & Bendera Beresolusi Tinggi**: Setiap kartu skill dilengkapi dengan ikon aplikasi resmi (SVG/PNG beresolusi tinggi di `/icons/`):
      - Bahasa: Bendera Indonesia (`flag_id.png`), Inggris (`flag_gb.png`), Arab (`flag_sa.png`), Spanyol (`flag_es.png`) mengacu pada data CV.
      - Frontend: React.js (`react.svg`), Next.js (`nextjs.svg`), TypeScript (`typescript.svg`), JavaScript (`javascript.svg`), Tailwind CSS (`tailwind.svg`), HTML5 (`html5.svg`), CSS3 (`css3.svg`).
      - Backend: Node.js (`nodejs.svg`), Python (`python.svg`), Express.js (`express.svg`), REST API / FastAPI (`fastapi.svg`), GraphQL (`graphql.svg`).
      - Database: Firebase (`firebase.svg`), Supabase (`supabase.svg`), MySQL (`mysql.svg`), Appwrite (`appwrite.svg`), AWS Amplify (`awsamplify.svg`).
      - Software Desain: Figma (`figma.svg`), Illustrator (`illustrator.svg`), Photoshop (`photoshop.svg`), InDesign (`indesign.svg`), Adobe XD (`adobexd.svg`).
      - Video Editor: Premiere Pro (`premiere.svg`), After Effects (`aftereffects.svg`), DaVinci Resolve (`davinci.svg`), CapCut (`capcut.svg`).
      - Office: Word (`word.svg`), Excel (`excel.svg`), Access (`access.svg`), PowerPoint (`powerpoint.svg`).
    - **Library**: Menggunakan ApexCharts (`type: 'radialBar'`) untuk visualisasi diagram lingkaran, flat zero shadow, 8-point grid rhythm, tanpa badge/tag/pill tanpa perintah (mutlak patuhi `ai-anti-patterns.md`).
67. **Overview Kontribusi GitHub & Pinned Repositories pada Halaman Portofolio (22 September 2026):**
    - **Lokasi**: Di halaman Portofolio (`#portfolio`) di bawah showcase proyek nyata.
    - **Metrik Utama GitHub**:
      - Total 28 Repositori Publik.
      - Total 6 Stars.
      - Total 380 Kontribusi di tahun 2026 (100% commits).
    - **Komponen Overview & Heatmap Kontribusi**:
      - Visualisasi kalender kontribusi hijau (GitHub contribution heatmap) tahun 2026 yang merefleksikan 380 kontribusi nyata.
      - Diagram spider / distribution meter (100% commits, code review, issues, pull requests).
      - Rincian aktivitas kontribusi bulanan (September 2026: 85 commits di 6 repo, Agustus: 137 commits di 5 repo, Juli: 107 commits di 8 repo, Mei: 20 commits, dll.).
    - **Daftar Repo Unggulan (Pinned Repositories)**:
      1. `calc-` (Public) — kalkulator plus (TypeScript)
      2. `kavstud` (Public) — kavio studi platform (TypeScript)
      3. `kusumaterapiweb` (Public) — website landing page KusumaTerapi. (TypeScript)
      4. `OstifakODP` (Public) — Platform Digital Terpadu OSTIFAK (TypeScript)
      5. `RePrompter` (Public) — Vercel (TypeScript)
      6. `chess-beater` (Public) — C++ Engine (C++, 1 star)
    - **Tautan Langsung**: Masing-masing repo terhubung ke URL resminya di `https://github.com/imanecdoche/[repo-name]`.
    - **Estetika**: MindMarket flat modern (`#f5f1e4`, `#2c2e2a`, `#8ed462`), 8-point grid, zero shadow, no badge/tag/pill tanpa perintah.
68. **Penyelarasan Distribusi Tipe Kontribusi GitHub (Pull Requests & Code Review) (22 September 2026):**
    - **Data Tipe Kontribusi**:
      - Commits: 380 (91.1%)
      - Pull Requests: +12 (2.9%)
      - Code Review: +25 (6.0%)
      - Issues: 0
    - **Visualisasi**: Bar multi-segmen terdistribusi secara proporsional dengan warna harmonis MindMarket (Commits `#8ed462`, Code Review `#3a86ff`, Pull Requests `#f4a261`), teks persentase dominan (91% Commits), dan rincian label di bawahnya: `Commits: 380`, `Code Review: +25`, `Pull Requests: +12`, `Issues: 0`.
69. **Tombol Navigasi Lanjutkan Ke Riwayat Pekerjaan pada Panel Edukasi (22 September 2026):**
    - **Lokasi**: Di bagian bawah tengah (*bottom center*) panel Education Timeline (`EducationTimeline.tsx`).
    - **Teks**: `"Lanjutkan Ke Riwayat Pekerjaan"`.
    - **Interaktivitas Hover**: Saat di-hover, muncul ikon panah ke bawah (*arrow down*) dengan animasi smooth/bounce.
    - **Aksi Klik**: Melakukan scroll halus (*smooth scroll*) langsung menuju panel Riwayat Pekerjaan (`ExperienceTimeline.tsx` / `#experience`).
    - **Estetika**: Desain flat modern, tipografi tegas berkarakter (`#2c2e2a`), zero shadow, patuhi aturan `ai-anti-patterns.md`.
70. **Showcase Portofolio Proyek Rekayasa GitHub Nyata (22 September 2026):**
    - **Lokasi**: Di bagian portofolio (MyWorks) > "Karya Rekayasa Perangkat Lunak & Proyek Digital" ([PortfolioGrid.tsx](file:///media/fatihfarhat/New%20Volume1/PROJECTS/Fatih%20Farhat/src/components/PortfolioGrid.tsx)).
    - **Daftar 4 Proyek Repositori Resmi**:
      1. **VOX Player** (`https://github.com/imanecdoche/voxplayer`): Pemutar musik offline monokrom ultra-minimalis & pemrosesan sinyal audio Android (Kotlin, Jetpack Compose, Media3). Manfaat: Tanpa iklan, nol telemetri/privasi 100% terjaga, sangat hemat baterai, latensi audio ultra-rendah.
      2. **Epson L1110 Linux Driver** (`https://github.com/imanecdoche/EPSON_L1110_Printer_Driver_for_Linux`): Driver user-space modern, monitor tinta real-time (CMYK), dan utility perawatan head/nozzle untuk Linux (Python, PyUSB, PyQt6). Manfaat: Membantu pengguna Linux memantau tinta & merawat printer Epson tanpa tergantung Windows/Mac, menyelamatkan operasional sekolah, UMKM & pengguna rumahan.
      3. **ChessBeater** (`https://github.com/imanecdoche/chess-beater`): Aplikasi overlay mini-board catur semi-transparan untuk Android dengan kalkulasi langkah, validasi legal move, dan sentuhan pass-through (C++, Android Overlay). Manfaat: Membantu pemain belajar strategi dan menganalisis taktik secara langsung di atas papan permainan tanpa harus bolak-balik ganti aplikasi.
      4. **RePrompter** (`https://github.com/imanecdoche/RePrompter`): Smart web teleprompter dengan algoritma *Rhythm Engine* yang memecah naskah menjadi frasa logis & tempo dinamis berbasis tanda baca (TypeScript, Next.js, Tailwind CSS). Manfaat: Membantu presenter & kreator konten membaca dengan intonasi alami serta jeda nafas manusiawi tanpa rasa kaku.
    - **Tautan Eksternal**: Setiap kartu memiliki tombol tautan langsung ke repositori GitHub masing-masing yang terbuka di tab baru (`target="_blank" rel="noopener noreferrer"`).
    - **Estetika**: Mengedepankan hierarki tipografi tegas MindMarket, card putih berbatas halus (`#2c2e2a/10`), ringkasan proyek + bagian eksplisit "Manfaat Terbesar Bagi Pengguna", zero badge tanpa izin (`ai-anti-patterns.md`).
71. **Penggunaan Aset Bendera 3D Berkibar untuk Skill Bahasa (22 September 2026):**
    - **Sumber Aset**: Menggunakan file gambar dari direktori `/home/fatihfarhat/Downloads/flags`:
      - `jangan_pakai_tiang_2K_20260922163048.jpeg` -> Bahasa Indonesia (`/icons/flag_3d_id.png`)
      - `ganti_jadi_bendera_UK_2K_20260922163051.jpeg` -> Bahasa Inggris (`/icons/flag_3d_gb.png`)
      - `ganti_jadi_bendera_Arab_Saudi_2K_20260922163055.jpeg` -> Bahasa Arab (`/icons/flag_3d_sa.png`)
      - `ganti_jadi_bendera_spanyol_2K_20260922163056.jpeg` -> Bahasa Spanyol (`/icons/flag_3d_es.png`)
    - **Pengolahan Gambar**:
      - Background putih (`#FFFFFF`) wajib dihapus secara bersih menjadi transparan (PNG transparan) menggunakan edge floodfill agar bagian putih kain bendera (Indonesia, UK, Arab Saudi) tidak terhapus.
      - Hasil gambar dipangkas (*cropped tight*) dan disimpan ke direktori `public/icons/`.
    - **Tata Letak & Ukuran**:
      - Pada kartu skill bahasa di `SkillsCharts.tsx`, gambar bendera diposisikan di **sebelah kiri** kartu.
      - **Clipping pada Box**: Seluruh kartu memiliki `overflow-hidden` sehingga gambar bendera yang bergeser ke kiri ter-clip secara presisi mengikuti kontur sudut box kartu (`rounded-[28px] sm:rounded-[32px]`).
      - **Ukuran & Scaling**: Scaling ditambah +8% lagi (menjadi `scale-[1.35]`), dengan translasi ke kiri `-translate-x-[20px]`.
      - Posisi bersanding harmonis dengan radial gauge persentase di sisi kanan.
      - Patuhi kaidah MindMarket flat modern, zero badge/tag/pill tanpa instruksi, 8-point grid.
72. **Judul Bagian Penguasaan & Keahlian (22 September 2026):**
    - **Judul Utama Section**: Judul utama pada bagian diagram keahlian individual (`SkillsCharts.tsx`) diganti dari `"Diagram Lingkaran Penguasaan Keahlian"` menjadi `"Penguasaan & Keahlian"`.
    - **Karakter Tipografi**: Tetap mempertahankan ketegasan font hitam MindMarket (`#2c2e2a`), tracking rapat (*tracking-tight*), responsive size (`text-3xl sm:text-4xl md:text-5xl font-black`), zero badge tanpa perintah (`ai-anti-patterns.md`).
73. **Peningkatan Copywriting Subtitle Bagian Penguasaan & Keahlian (22 September 2026):**
    - **Teks Deskripsi Menjual**: Mengubah kalimat teknis widget internal menjadi proposisi nilai (*value proposition*) yang kuat, kredibel, dan berdaya jual tinggi:
      > *"Integrasi solid rekayasa perangkat lunak modern, estetika desain antarmuka presisi, dan kapabilitas multi-bahasa global—teruji secara praktis untuk mewujudkan visi produk digital Anda menjadi solusi berkinerja tinggi, terukur, dan berdampak nyata."*
    - **Penyelarasan Nilai**: Menekankan dampak bisnis, kemampuan eksekusi teknis lintas domain (frontend, backend, database, desain, video & multi-bahasa), serta kesiapan kolaborasi kelas dunia.
74. **Desain Icon Keahlian Mandiri Tanpa Box & Ukuran 2x Lebih Besar (22 September 2026):**
    - **Tanpa Box Pembungkus**: Seluruh icon aplikasi/skill pada kartu `SkillsCharts.tsx` tidak boleh dibungkus kotak background (`rounded-2xl bg-[#f5f1e4] border border-[#2c2e2a]/8` dihapus total). Icon tampil mandiri dan leluasa (*frameless / unboxed*).
    - **Ukuran 2x Lebih Besar**: Dimensi icon diperbesar 2x lipat dari ukuran sebelumnya 32px (`w-8 h-8`) menjadi 64px (`w-16 h-16`), dengan efek `hover:scale-110` yang halus dan presisi.
    - **Kerapian & Konsistensi**: Posisi icon sejajar harmonis dengan diagram radial di sisi kanan, bersih dari elemen ornamen yang tidak diperintahkan (`ai-anti-patterns.md`).
75. **Standardisasi Rentang Persentase Kemahiran Keahlian (22 September 2026):**
    - **Batasan Mutlak**: Dilarang menggunakan nilai persentase di atas 80% pada seluruh meter diagram keahlian (`SkillsCharts.tsx`).
    - **Rentang Wajib**: Seluruh tingkat kemahiran (*percentage*) wajib berada dalam rentang **69% – 78%** secara proporsional dan realistis (tanpa ada satupun angka < 69% atau > 78%).
    - **Tujuan**: Menghadirkan kesan profesionalitas yang terukur, rendah hati, realistis, dan berorientasi pada proses pembelajaran berkelanjutan (*continuous mastery*).
76. **Status Keahlian "Sedang Dipelajari" (Being Learnt) & Animasi Loader Melingkar (22 September 2026):**
    - **Daftar Keahlian Sasaran**:
      1. `RESTful API Architecture` (`tech-api`)
      2. `GraphQL` (`tech-graphql`)
      3. `Appwrite Cloud` (`db-appwrite`)
      4. `AWS Amplify` (`db-amplify`)
    - **Status Label**: Status kemahiran diubah menjadi `"Sedang Dipelajari"` (Being learnt).
    - **Visualisasi Chart**:
      - Tidak menampilkan diagram persentase statis ataupun angka persentase.
      - Digantikan dengan **loader melingkar berputar (*spinning circular loader*)** yang beranimasi halus, mencerminkan proses eksplorasi dan pendalaman materi yang aktif berjalan.
    - **Estetika**: Tetap mengacu pada MindMarket flat modern, zero badge/tag/pill tanpa izin (`ai-anti-patterns.md`), proporsional dengan dimensi kartu lainnya.
77. **Kategori Coding Tool Tanpa Chart Keahlian (22 September 2026):**
    - **Penambahan Kategori**: Menambahkan kategori `08. Coding Tools` pada halaman Keahlian & Jasa ([`SkillsCharts.tsx`](file:///media/fatihfarhat/New%20Volume1/PROJECTS/Fatih%20Farhat/src/components/SkillsCharts.tsx)).
    - **Daftar 5 Alat Wajib**:
      1. **Visual Studio Code** (`/icons/vscode.png`)
      2. **Sublime Text** (`/icons/sublimetext.png`)
      3. **Claude Code** (`/icons/claude.png`)
      4. **Antigravity CLI** (`/icons/antigravity.png`)
      5. **ChatGPT Codex** (`/icons/chatgptcodex.png`)
    - **Ketiadaan Chart Keahlian**: Kartu pada kategori ini **TIDAK menampilkan diagram lingkaran / chart keahlian apa pun** (tanpa ApexCharts dan tanpa spinning loader). Kartu berfokus murni pada icon resmi aplikasi (`w-16 h-16` unboxed), nama alat, peran fungsional (*role tag*), dan ringkasan penggunaan teknis.
    - **Estetika Layout**: Menggunakan kartu MindMarket flat modern (`#ffffff`, border `#2c2e2a/10`, `rounded-[28px] sm:rounded-[32px]`), zero badge/tag/pill tanpa izin (`ai-anti-patterns.md`), responsive grid yang harmonis.
78. **Larangan Membuat SVG Sendiri & Kewajiban Mengambil Logo Resmi PNG dari Internet (22 September 2026):**
    - **ATURAN MUTLAK**: Jika harus memasukkan suatu icon/logo resmi, **WAJIB CARI DAN AMBIL DARI INTERNET LOGO RESMI DALAM FORMAT PNG TRANSPARAN (HIGH RESOLUTION)**.
    - **LARANGAN KERAS**: **DILARANG MENGARANG ATAU MEMBUAT KODE SVG TIRUAN SENDIRI SECARA MANUAL**.
    - **Penerapan**: Berlaku mutlak untuk seluruh aset coding tool (Visual Studio Code, Sublime Text, Claude Code, Antigravity CLI, ChatGPT Codex) dan seluruh aset logo resmi lainnya di seluruh workspace dan percakapan.
79. **Tata Letak Grid 2 Kolom untuk Kartu Keahlian di Tampilan Mobile (22 September 2026):**
    - **Grid Mobile Wajib**: Khusus tampilan mobile (`< sm`), seluruh kartu keahlian pada [`SkillsCharts.tsx`](file:///media/fatihfarhat/New%20Volume1/PROJECTS/Fatih%20Farhat/src/components/SkillsCharts.tsx) wajib tersusun dalam **grid 2 kolom (`grid-cols-2`)** (bukan 1 kolom).
    - **Proporsionalitas Komponen**:
      - Gap grid di mobile disesuaikan menjadi `gap-3.5 sm:gap-5 md:gap-6`.
      - Padding kartu di mobile disesuaikan menjadi `p-4 sm:p-5 md:p-6` dengan radius `rounded-[22px] sm:rounded-[28px] md:rounded-[32px]`.
      - Dimensi icon, gauge chart, dan tipografi judul/deskripsi diskalakan secara adaptif agar tetap proporsional dan tidak saling bertabrakan di layar ponsel sempit.
80. **Integrasi Keahlian Kepenulisan & Showcase Novel (Opsi 1) (22 September 2026):**
    - **Pilihan Pengguna**: Opsi 1 (Sinergi 2 Titik Portofolio & Keahlian):
      1. **Halaman Keahlian & Jasa (`SkillsCharts.tsx`)**: Menambahkan kategori `09. Kepenulisan Naratif, Sastra & Storytelling` dengan 4 sub-keahlian:
         - Penulisan Fiksi Naratif & Novel (78%, `/icons/skill_novel.png`)
         - Worldbuilding & Lore Architecture (76%, `/icons/skill_worldbuilding.png`)
         - Riset Historis & Rekonstruksi Sastra (75%, `/icons/skill_history.png`)
         - Arsitektur Plot & Karakterisasi (73%, `/icons/skill_plot.png`)
         - Seluruh persentase wajib berada dalam rentang 69%–78% sesuai Aturan 75.
         - Khusus tampilan mobile, kartu tersusun dalam grid 2 kolom (`grid-cols-2`) sesuai Aturan 79.
      2. **Halaman Portofolio (`LiteraryWorks.tsx` di `App.tsx`)**:
         - Menampilkan showcase 6 novel utuh karya Fatih Farhat Asshidiq (*Risalah Terakhir dari Padang Pasir*, *900 Musim Dingin*, *Sebelas Bintang*, *Golden Ratio*, *The Beastkeeper's Secret*, dan *Bayangan Azkaban*).
         - Menggunakan cover buku asli dari `public/covers/`, metrik riil jumlah halaman dan kata, sinopsis singkat, dan kutipan kunci.
         - Tampilan responsif, tipografi lugas, dan patuhi palet MindMarket flat modern tanpa badge/tag/pill sembarangan (`ai-anti-patterns.md`).
81. **Rekonstruksi & Minimalisasi Kartu Novel Portofolio (`LiteraryWorks.tsx`) (22 September 2026):**
    - **Hapus Teks Hijau di Atas Judul**: Hapus label genre / teks hijau di atas judul buku.
    - **Di Bawah Judul Cukup Tahun Rilis**: Hapus baris metadata panjang (`Karya: ... • Halaman ... • Kata ...`), gantikan hanya dengan tahun rilis buku (contoh: `Tahun Rilis: 2026` / `2026`).
    - **Hapus Box Kekuatan Narasi & Riset**: Hapus keseluruhan box *Kekuatan Narasi & Riset*.
    - **Hapus Quotes**: Hapus kutipan naskah (*quote block*) dari kartu novel.
    - **Komposisi Bersih**: Kartu novel mempertahankan cover buku, judul buku yang tegas, tahun rilis, sinopsis karya, serta footer jumlah bab & status naskah lengkap. Penuhi `ai-anti-patterns.md` tanpa elemen dekoratif berlebih.
82. **Bagian Data Diri Desain ID / KTP pada Halaman Tentang Saya (`IdentityCard.tsx`) (22 September 2026):**
    - **Lokasi Penempatan**: Tepat setelah bagian Ringkasan Profesional (`AboutBio.tsx`) dan sebelum `EducationTimeline.tsx` pada halaman Tentang Saya (`currentPage === 'about'`).
    - **Konsep Desain**: Desain kartu identitas berestetika e-KTP / Digital ID resmi Indonesia (REPUBLIK INDONESIA, PROVINSI BANTEN, KABUPATEN PANDEGLANG, chip pintar, NIK menonjol, dan foto profil resmi).
    - **Rincian Data Wajib**:
      - Nama: Fatih Farhat Asshidiq
      - Tempat Lahir: Pandeglang, Banten
      - Tanggal Lahir: 20 Agustus 2005
      - Usia: Dihitung otomatis secara dinamis (`X thn, Y bln, Z hr`) dari tanggal lahir (20 Agustus 2005) ke tanggal sekarang
      - Alamat Domisili: Kp. Bojong Canar
      - Kelurahan/Desa: Ds. Dahu
      - Kecamatan: Cikedal
      - Kota/Kabupaten: Kab. Pandeglang
      - Provinsi: Prov. Banten
      - NIK: 3601262008050001
      - NPWP: Sama spt NIK KTP (3601262008050001)
      - Gol Darah: -
      - Agama: Islam
    - **Estetika & Kepatuhan**: Responsif mobile & desktop, tipografi otentik e-KTP monospace/sans, zero shadow acak, tanpa badge/tag/pill tanpa izin eksplisit (`ai-anti-patterns.md`).
83. **Penambahan Riwayat Pekerjaan Benua Jaya Gold (`ExperienceTimeline.tsx`) (22 September 2026):**
    - **Posisi Milestone**: Langkah `05` setelah `04. Passion Abadi`.
    - **Perusahaan**: Benua Jaya Gold
    - **Short Label**: `BENUA JAYA GOLD`
    - **Role**: `Customer Advisory & Gold Specialist`
    - **Periode Waktu**: `Maret 2026 — April 2026` (durasi 2 bulan, dengan jeda/gap 1 bulan setelah Passion Abadi yang selesai Januari 2026).
    - **Tugas & Tanggung Jawab**: Melayani customer secara profesional dan memberikan edukasi komprehensif seputar karakteristik, kadar kemurnian, serta pemilihan logam mulia dan perhiasan emas berkualitas.
    - **Tinggi Container Scroll**: Disesuaikan secara proporsional menjadi `h-[480vh]` untuk 5 milestone interaktif yang mulus.
84. **Penyelarasan & Minimalisasi Kartu Data Diri (`IdentityCard.tsx`) (22 September 2026):**
    - **Hapus Pin Emas & Wifi**: Hapus elemen kontak chip emas di pojok kiri atas serta ikon wifi.
    - **Hapus Header KTP**: Hapus header teks 'REPUBLIK INDONESIA', 'PROVINSI BANTEN', 'KABUPATEN PANDEGLANG', dan tag 'e-KTP'.
    - **Hapus Footer**: Hapus footer 'KTP ELEKTRONIK • REPUBLIK INDONESIA' dan 'VALID & TERVERIFIKASI'.
    - **Lebar Kontainer**: Perlebar kartu menjadi `max-w-4xl` / `max-w-5xl`.
    - **Warna Latar & Design System MindMarket**: Dilarang menggunakan warna latar biru KTP; gunakan warna latar design system MindMarket (`#ffffff` / `#f5f1e4`, border `#2c2e2a]/10`, teks `#2c2e2a`, aksen `#8ed462`).
    - **Penyelarasan Kolom Titik Dua (':')**: Seluruh tanda titik dua (`:`) pada semua baris data wajib berada pada garis vertikal yang sejajar lurus (termasuk baris sub-alamat Kel/Desa, Kecamatan, Kota, Provinsi).
    - **Hapus Keterangan Otomatis pada Usia**: Pada baris usia, hapus teks `(dihitung otomatis)` sehingga murni hanya menampilkan hasil hitungan usia (contoh: `: 21 thn, 1 bln, 2 hr`).
85. **Optimasi Algoritma Scroll & Aksesibilitas Milestone Benua Jaya Gold (`ExperienceTimeline.tsx`) (22 September 2026):**
    - **Akar Masalah**: Sebagai komponen paling akhir di halaman Tentang Saya, kalkulasi linier `progress * totalSteps` membutuhkan scroll tepat di 80%–100%, yang sering terpotong oleh batas maksimal scroll browser (*scroll ceiling*) sebelum mencapai milestone ke-5.
    - **Solusi Plateau Buffer**: Mengimplementasikan `effectiveProgress = Math.min(1, progress / 0.82)` sehingga milestone ke-5 (`05. Benua Jaya Gold`) dapat dicapai secara nyaman dan mulus pada 68%–100% scroll tanpa terhambat batas bawah halaman.
    - **Buffer Bawah Halaman**: Menambahkan scroll runway `h-[520vh]` dan padding bawah di akhir halaman agar scroll sticky tidak mentok sebelum konten tampil utuh.
    - **Klik Milestone**: Mengkalibrasi `handleStepClick` agar klik pada `05. Benua Jaya Gold` langsung mengarahkan scroll ke posisi target yang presisi dan stabil.
86. **Format Nilai Angka NPWP pada Kartu Data Diri (`IdentityCard.tsx`) (22 September 2026):**
    - **Perubahan Nilai**: Mengubah teks pada baris NPWP dari semula `sama spt NIK KTP` menjadi langsung menampilkan nomor 16 digit NPWP resmi yang terintegrasi dengan NIK KTP: `3601262008050001`.
87. **Penyempurnaan Minimalis Kartu Data Diri (`IdentityCard.tsx`) (22 September 2026):**
    - **Hapus Foto & Tanda Tangan**: Hapus foto potret, tanda tangan, teks 'TANDA TANGAN', dan lokasi/tanggal terbit.
    - **Hapus Masa Berlaku**: Hapus baris 'Berlaku Hingga : SEUMUR HIDUP'.
    - **Standarisasi Font**: Ganti seluruh penggunaan `font-mono` menjadi tipografi utama proyek (`font-sans` / Nunito), konsisten 100% dengan bagian lain website.
    - **Penyelarasan Kolom Titik Dua**: Posisi tanda titik dua (`:`) tetap wajib 100% sejajar lurus secara vertikal.
88. **Penskalaan Kartu Data Diri 50% Lebih Kecil & Kompak (`IdentityCard.tsx`) (22 September 2026):**
    - **Ukuran Kontainer**: Skala lebar kartu dikurangi 50% menjadi `max-w-xl` / `max-w-2xl` (dari sebelumnya `max-w-5xl`).
    - **Skala Padding & Sudut**: Padding disesuaikan menjadi `p-5 sm:p-7 md:p-8` dengan radius `rounded-[20px] sm:rounded-[26px]`.
    - **Skala Tipografi**:
      - NIK: `text-xl sm:text-2xl md:text-[26px]`.
      - Baris Data: `text-xs sm:text-[13.5px]` dengan lebar kolom label `w-[105px] sm:w-[130px] md:w-[145px]` dan spasi antar-baris `space-y-1.5 sm:space-y-2`.
    - **Penyelarasan**: Posisi tanda titik dua (`:`) tetap wajib 100% sejajar lurus secara vertikal.
89. **Model Kartu 3D Interaktif dengan Efek Ketebalan Fisik & Flip Halus Cepat (`IdentityCard.tsx`) (22 September 2026):**
    - **Model Kartu 3D**: Menggunakan `perspective: 1200px` dan `transform-style: preserve-3d` dengan efek ketebalan tepi fisik kartu (*physical bevel edge & dimensional depth*) khas kartu plastik PVC.
    - **Interaksi Flip Depan-Belakang**: Kartu dapat ditekan/diklik untuk berbalik (`rotateY(180deg)`) antara sisi depan (Data Diri) dan sisi belakang (Pita magnetik, barcode verifikasi digital, dan sertifikasi kepemilikan).
    - **Animasi Cepat & Halus**: Transisi flip menggunakan kurva halus berkecepatan tinggi (`duration: 0.42s`, easing `[0.16, 1, 0.3, 1]`) dengan `backface-visibility: hidden`.
    - **Estetika & Penyelarasan**: Mempertahankan font utama (`font-sans` / Nunito), palet warna MindMarket, serta kelurusan tanda titik dua (`:`) pada data diri.
90. **Arsitektur Objek Geometri 3D Berketebalan Nyata (True 3D Extrusion) (`IdentityCard.tsx`) (22 September 2026):**
    - **Ketebalan Nyata Bukan Ilusi Vektor**: Kartu dibangun sebagai objek 3D fisik dengan ketebalan nyata (*true 3D volumetric extrusion*) berdimensi Z (+6px hingga -6px, total tebal 12px) menggunakan tumpukan layer Z-extrusion fisik solid di antara sisi depan (`translateZ(6px)`) dan sisi belakang (`rotateY(180deg) translateZ(6px)`).
    - **Penampakan Sisi Saat Berputar (Edge-on View)**: Saat kartu berputar pada sudut 90 derajat (maupun sudut lainnya), ketebalan tepi fisik kartu terlihat solid, padat, dan nyata seperti kartu PVC tebal yang sesungguhnya (tidak pernah menjadi garis tipis gepeng 0px).
    - **Interaktivitas 3D Tilt & Flip**: Dilengkapi respons kemiringan 3D halus saat kursor digerakkan (*interactive 3D parallax tilt*) sehingga ketebalan samping kartu terlihat jelas bahkan sebelum diklik, serta animasi flip 180° berkecepatan tinggi yang mulus dan taktil saat diklik.
91. **Eliminasi Cacat Visual Artefak & Penyempurnaan Geometri 3D Extrusion Mulus (`IdentityCard.tsx`) (22 September 2026):**
    - **Akar Masalah Cacat Visual**: Dinding samping persegi (*square side rims*) dan pergeseran Z-slice berlebihan sebelumnya mencuat keluar (*protrude*) di sudut lengkung kartu dan bagian bawah, menciptakan tonjolan patah/cacat yang merusak estetika.
    - **Eliminasi Rims Kotak Berlebih**: Menghapus seluruh elemen dinding flat kotak yang menusuk keluar dari radius sudut.
    - **Geometri Core Z-Stack Halus & Terpadu**: Menggunakan 15 irisan Z-slice mikro (rentang -3.5px s/d +3.5px, interval 0.5px) dengan radius sudut identik sempurna (`rounded-[20px] sm:rounded-[26px]`) dan warna hangat PVC alami (`#eae6db`), bebas garis pembatas tajam.
    - **Hasil Visual 3D**: Permukaan dan tepi kartu menyatu 100% mulus tanpa tonjolan liar, memiliki ketebalan nyata 8px yang solid dan rapi saat berputar, serta dilengkapi bayangan lantai 3D (*ambient ground shadow*) yang dinamis.
92. **Penyederhanaan Sisi Belakang Kartu Identitas 3D (`IdentityCard.tsx`) (22 September 2026):**
    - **Sisi Belakang Polos**: Hapus seluruh elemen pita magnetik, strip dokumen/verifikasi, teks hukum/kepemilikan, barcode, dan ikon/tombol balik pada sisi belakang kartu.
    - **Hanya Tulisan Tunggal**: Sisi belakang dibuat polos bersih (latar kartu putih dengan border halus konsisten) dan HANYA memuat tulisan "Click Me to Reveal!".
    - **Estetika & Tipografi**: Teks "Click Me to Reveal!" ditempatkan di tengah (center) menggunakan font proyek (`font-sans` / Nunito) yang bersih, jelas, dan tanpa komponen atau hiasan ekstra apa pun di luar instruksi.
93. **Struktur Konten Showroom & Teaser Halaman Home (`HomeShowcase.tsx` & `App.tsx`) (22 September 2026):**
    - **Penerapan Konsep Opsi 1**: Mengisi halaman Home di bawah Marquee dengan konten showroom terpadu:
      1. **Quick Intro / Mini Bio Teaser**: Ringkasan pengantar Fatih Farhat (Software Developer & Creative Technologist dari Banten) dan tombol navigasi ke halaman About.
      2. **Featured Projects**: 4 proyek unggulan terpilih (VOX, Epson L1110 Driver, ChessBeater, RePrompter) dengan link repo dan tombol 'Lihat Semua Karya' ke halaman Portfolio.
      3. **What I Do / 3 Pilar Keahlian**: Web Development, UI/UX & Product Design, Creative Tech & Systems.
      4. **Current Status & Local Time**: Indikator ketersediaan kerja (*Available for freelance & full-time*) dan jam live lokal Pandeglang, Indonesia (WIB).
      5. **Call To Action (CTA) Banner**: Ajakan kolaborasi proyek dengan tombol 'Hubungi Saya' menuju halaman Contact.
    - **Konsistensi Desain**: Patuh 100% pada `DESIGN.md` (flat design, zero shadow, border halus `border-[#2c2e2a]/15`, background `#f5f1e4` dan `#ffffff`), font Nunito (`font-sans`), serta aturan mutlak `ai-anti-patterns.md` tanpa badge/pill tak berdasar.
94. **Penghapusan Elemen Tag/Label 'Pengantar Singkat' (`HomeShowcase.tsx`) (22 September 2026):**
    - **Instruksi Pengguna**: Menghapus elemen tag/label yang memuat ikon Sparkles dan teks 'Pengantar Singkat' (`<Sparkles /> Pengantar Singkat`) pada bagian atas box pengantar halaman Home.
    - **Kepatuhan Mutlak**: Mengikuti `ai-anti-patterns.md` untuk mengeliminasi elemen tag/badge/eyebrow yang tidak dikehendaki.
95. **Penghapusan Nomor Induk Kependudukan (NIK) pada Kartu Identitas (`IdentityCard.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: Menghapus nomor dan label NIK pada bagian kartu identitas di halaman Tentang Saya untuk menjaga privasi data pribadi.
    - **Penyelarasan Layout**: Bagian top bar sisi depan kartu identitas disesuaikan dengan menghilangkan tampilan NIK, menyisakan indikator aksi balik kartu yang rapi dan selaras.
    - **Deploy GitHub**: Melakukan build check, staging, commit dengan Conventional Commits, dan langsung push ke repositori GitHub origin/main.
96. **Navigasi Kategori Portofolio Mandiri (Portfolio Category Hub) (`App.tsx`, `PortfolioCategories.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: Halaman portofolio tidak langsung menampilkan semua karya secara bertumpuk, melainkan menampilkan halaman navigasi kategori terlebih dahulu.
    - **4 Kategori Pilihan Utama**:
      1. **Software Engineering**: Proyek rekayasa perangkat lunak, sistem, utilitas Linux, mobile apps, dan GitHub overview.
      2. **Karya Tulis**: Kumpulan novel sejarah peradaban, buku komprehensif, dan karya sastra.
      3. **Desain (Graphic & UI/UX Design)**: Portofolio perancangan UI/UX, visual branding, dan desain grafis.
      4. **Konten Kreator**: Portofolio produksi video, audiovisual, media digital, dan konten kreatif.
    - **Alur Interaksi Navigasi**: Pengunjung memilih kategori di halaman utama portofolio, lalu diarahkan ke tampilan detail kategori yang dipilih dengan tombol navigasi kembali ('← Kembali ke Kategori Portofolio') untuk memudahkan eksplorasi.
    - **Kepatuhan Desain**: Menjaga estetika flat tanpa bayangan (`DESIGN.md`), tipografi `font-sans` (Nunito), dan kepatuhan mutlak `ai-anti-patterns.md` tanpa badge/pill yang dilarang.
97. **Penghapusan Nomor Pokok Wajib Pajak (NPWP) pada Kartu Identitas (`IdentityCard.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: Menghapus baris data NPWP pada kartu identitas di halaman Tentang Saya untuk menyempurnakan privasi data pribadi.
    - **Penyelarasan Layout**: Baris NPWP dihapus sehingga baris data diri diakhiri dengan data Golongan Darah secara bersih dan rapi.
    - **Deploy GitHub**: Melakukan build test, staging, commit dengan Conventional Commits, dan langsung push ke repositori GitHub origin/main.
98. **Penambahan Tombol Profil Dribbble pada Portofolio Desain (`DesignPortfolio.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: Pada bagian Portofolio > Portofolio Desain Grafis & UI/UX, tambahkan tombol di bawah untuk menuju ke Dribbble dengan ikon Dribbble (`SiDribbble`), tautan `https://dribbble.com/fatihfarhat`, dan label 'Buka Dribbble'.
    - **Desain & Aksesibilitas**: Tombol menggunakan format kapsul elegan tanpa bayangan (`DESIGN.md`), transisi hover halus, `target="_blank"`, dan `rel="noopener noreferrer"`.
    - **Kepatuhan ai-anti-patterns**: Tidak menambahkan elemen badge/pill yang dilarang.
99. **Penghapusan Kotak Ikon pada Kartu-Kartu Portofolio & Proyek (23 September 2026):**
    - **Instruksi Pengguna**: 'jangan ada icon icon ini di kartu kartu' disertai tangkapan layar elemen wadah ikon persegi melengkung (`bg-[#f5f1e4]` dengan rounded corner).
    - **Pembersihan Elemen**: Menghapus seluruh wadah ikon (`w-12 h-12 rounded-2xl bg-[#f5f1e4]` atau sejenisnya) dari kartu kategori portofolio (`PortfolioCategories.tsx`), kartu portofolio desain (`DesignPortfolio.tsx`), kartu portofolio konten (`ContentPortfolio.tsx`), kartu proyek software (`PortfolioGrid.tsx`), dan kartu pameran beranda (`HomeShowcase.tsx`).
    - **Tata Letak Bersih**: Header kartu difokuskan murni pada kategori/tagline dan judul dengan tipografi yang kuat, rapi, dan lapang tanpa dekorasi ikon berlebih, sepenuhnya selaras dengan prinsip `ai-anti-patterns.md` dan `DESIGN.md`.
100. **Penyempurnaan Kartu Repositori Software Engineering (`PortfolioGrid.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'icon icon ini di kartu portofolio repo github juga hapus aja, tombol BUKA DI GITHUB yang ada di kartu repo portofolio github dipindahin ke bawah, pake kapsul, box Manfaat Terbesar Bagi Orang Lain jangan dibungkus kontainer, dan jangan pake icon di labelnya'.
    - **Hapus Ikon Kartu**: Seluruh ikon lingkaran di bagian header kartu repositori dihapus total.
    - **Tombol Kapsul Buka di GitHub**: Tombol 'Buka di GitHub' diposisikan di bagian paling bawah kartu dengan format kapsul (`rounded-[50px]`/`rounded-full`), warna kontras solid flat tanpa bayangan (`DESIGN.md`), dan transisi hover yang elegan.
    - **Box Manfaat Terbesar Flat**: Wadah/kontainer background pada 'Manfaat Terbesar Bagi Orang Lain' dihapus total (menjadi teks biasa berhierarki rapi seperti Ringkasan Proyek), dan ikon dekoratif pada judul labelnya dihapus.
101. **Penggantian Titik Bahasa dengan Ikon Resmi Bahasa Pemrograman pada Pinned Repositories (`GithubOverview.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'section Daftar Repo Unggulan (Pinned Repositories) setiap kartu kan ada info bahasa utama yang dipake, nah itu titik/lingkaran kecil di samping nama bahasanya diganti sama icon bahasa nya aja yang resmi cari di internet'.
    - **Implementasi**: Mengganti lingkaran titik warna (`rounded-full`) dengan ikon SVG resmi bahasa pemrograman dari Simple Icons (`react-icons/si`: `SiTypescript`, `SiCplusplus`, `SiPython`, `SiJavascript`, `SiKotlin`, dsb.) dengan proporsi ukuran rapi (`size={15}`) dan warna brand resmi bahasa tersebut.
    - **Kepatuhan Desain**: Menjaga estetika flat, tidak membuat badge atau pill yang dilarang (`ai-anti-patterns.md`).
102. **Penyembunyian PortfolioHero (MY WORKS) & Running Logo pada Halaman Kategori Portofolio (`App.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'hapus hero section yang ada tulisan MY WORKS dan running logo ketika membuka halaman salah satu kategori portofolio'.
    - **Kondisional Render**: `PortfolioHero` dan `LogoLoop` (running logo) hanya ditampilkan pada tampilan hub utama (`portfolioCategory === 'all'`). Saat pengguna memilih salah satu kategori portofolio (`software`, `writing`, `design`, `content`), hero section 'MY WORKS' dan running logo disembunyikan sepenuhnya.
    - **Penyesuaian Padding & Scroll**: Menambahkan padding atas yang proporsional (`pt-28 sm:pt-32`) pada kontainer kategori agar navigasi switcher dan tombol kembali tidak tertutup oleh fixed Header, serta mengatur scroll langsung ke paling atas (`window.scrollTo({ top: 0, behavior: 'smooth' })`).
103. **Bar Distribusi Bahasa Pemrograman Bergaya GitHub pada Kartu Repositori (`PortfolioGrid.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'nah bagian ini kan di paling bawah itu ada info bahasa bahasa kan, dibuat bar distribusi bahasa aja, mirip sama yang ada di github, bahasa apa yang di pake' disertai tangkapan layar baris info bahasa/teknologi di bawah subtitle kartu repositori.
    - **Implementasi**: Menggantikan baris teks tech stack biasa dengan komponen bilah distribusi bahasa (language distribution progress bar) multi-segmen ala GitHub resmi yang proporsional (`h-2 rounded-full overflow-hidden flex bg-[#ebe7dc]`), dilengkapi daftar persentase dan titik warna resmi bahasa pemrograman yang digunakan (misal: Kotlin, C++, CMake, Python, Shell, TypeScript, CSS, JavaScript).
    - **Kepatuhan Desain**: Menggunakan warna resmi GitHub untuk tiap bahasa tanpa bayangan (`DESIGN.md`), tampilan flat, presisi matematis, dan bebas badge/pill terlarang (`ai-anti-patterns.md`).
104. **Penambahan Tombol Profil Wattpad pada Halaman Portofolio Karya Tulis (`LiteraryWorks.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'di halaman kategori portofolio karya tulis tambahin tombol di bawah, label Buka Wattpad dg icon wattpad resmi menuju ke profil saya https://www.wattpad.com/user/imanecdoche'.
    - **Implementasi**: Menambahkan tombol kapsul aksi elegan di bagian bawah grid novel pada `LiteraryWorks.tsx` dengan label 'Buka Wattpad', ikon resmi Wattpad (`SiWattpad` dari `react-icons/si`), tautan `https://www.wattpad.com/user/imanecdoche`, dan hover aksen warna resmi oranye Wattpad (`#ff6122`).
    - **Kepatuhan Desain**: Tampilan flat kapsul tanpa bayangan (`DESIGN.md`), atribut `target="_blank"` dan `rel="noopener noreferrer"`, bebas badge/pill terlarang (`ai-anti-patterns.md`).
105. **Penambahan Section Karya Wattpad & Statistik Views/Votes (`LiteraryWorks.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'di kategori portofolio karya tulis tambahkan section Karya Wattpad seklaian tambahin stats views sama votes nya juga' disertai 4 tangkapan layar karya Wattpad: Nada di Lantai 27, The Beastkeeper's Secret: Bayangan Azkaban, Tentang Dia, dan Secangkir Kopi Sebelum Mati.
    - **Implementasi**: Menambahkan section khusus 'Karya Wattpad' pada `LiteraryWorks.tsx` dengan kartu-kartu karya, sampul buku orisinal, sinopsis, statistik pembaca (*Views* dengan ikon mata), suara apresiasi (*Votes* dengan ikon bintang), jumlah bab, dan peringkat kategori.
    - **Kepatuhan Desain & Anti-Patterns**: Mengikuti estetika flat tanpa bayangan (`DESIGN.md`), hierarki tipografi murni tanpa badge/pill yang dilarang (`ai-anti-patterns.md`), tombol kapsul aksi terhubung langsung ke profil/bacaan Wattpad, dan integrasi ikon resmi `SiWattpad`.
106. **Pembaruan Logo Carousel Portofolio dengan 11 Brand Resmi Berdasarkan Kategori (`PortfolioLogos.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'logo logo di komponin ini, diganti sama logo logo resmi dari: tiktok, capcut, adobe creative cloud, google antigravity, codex, dribbble, wattpad, behance, microsoft visual studio code, github, vercel, diurutkan berdasarkan kategori'.
    - **Pengelompokan & Urutan Kategori**: Mengurutkan 11 brand secara tematis berdasarkan 4 pilar portofolio pengguna:
      1. **Software Engineering & Web Architecture**: GitHub (`SiGithub`), Microsoft Visual Studio Code (SVG resmi VS Code), Vercel (`SiVercel`), Google Antigravity (SVG resmi Google Antigravity IDE), Codex (SVG resmi OpenAI Codex).
      2. **Karya Tulis & Literatur**: Wattpad (`SiWattpad` / profil `https://www.wattpad.com/user/imanecdoche`).
      3. **Desain Grafis & UI/UX**: Dribbble (`SiDribbble` / profil `https://dribbble.com/fatihfarhat`), Behance (`SiBehance`), Adobe Creative Cloud (SVG resmi Adobe Creative Cloud).
      4. **Konten Kreator & Multimedia**: CapCut (SVG resmi CapCut), TikTok (`SiTiktok`).
    - **Kepatuhan Desain**: Menggunakan SVG vector resmi berkualitas tinggi dengan rendering tajam, link eksternal yang aman (`target="_blank"`, `rel="noopener noreferrer"`), proporsi tinggi seragam, flat tanpa efek bayangan (`DESIGN.md`), serta mematuhi aturan mutlak `ai-anti-patterns.md`.
107. **Integrasi Sampul Buku Orisinal Karya Wattpad (`LiteraryWorks.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'ini cover untuk di karya wattpad, bayangan azkaban tetap yang sekarang' disertai unggahan gambar sampul buku orisinal.
    - **Penerapan Gambar Sampul**:
      - 'Nada di Lantai 27': menggunakan cover orisinal (`/books/wattpad_nada_di_lantai_27.png`).
      - 'The Beastkeeper\'s Secret: Bayangan Azkaban': tetap menggunakan cover yang sudah ada (`/books/beastkeeper.png`).
      - 'Tentang Dia': menggunakan cover orisinal (`/books/wattpad_tentang_dia.png`).
      - 'Secangkir Kopi Sebelum Mati': menggunakan cover orisinal (`/books/wattpad_secangkir_kopi_sebelum_mati.png`).
    - **Kepatuhan Desain**: Format gambar buku proporsional (`aspect-[2/3]`), sudut melengkung `rounded-xl`, border 1px solid, flat tanpa efek bayangan (`DESIGN.md`), dan mematuhi aturan mutlak `ai-anti-patterns.md`.
108. **Larangan Mutlak Font Monospace dan Kapsul Aksen Gelap Section Header (`LiteraryWorks.tsx` & Global) (23 September 2026):**
    - **Instruksi Pengguna**: 'section ini, jangan gunakan font Monospace, RULES, TIDAK BOLEH MENGGUNAKAN FONT MONOSPACE dimanapun, section ini dibungkus kapsul warna aksen gelap dari design sistem dan teks nya warna putih' disertai tangkapan layar label section 'Karya Sastra, Fiksi & Penulisan Naratif' dan 'Serial Fiksi Digital • Wattpad'.
    - **Aturan Mutlak (RULES)**: DILARANG MENGGUNAKAN FONT MONOSPACE (`font-mono`) DI SELURUH BAGIAN WEBSITE MANAPUN. Seluruh tipografi wajib menggunakan font standar sans-serif (`font-sans` / Nunito / Inter).
    - **Kapsul Section Label**:
      - Dibungkus dengan kapsul elegan (`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2c2e2a] text-white`).
      - Teks label wajib berwarna putih (`text-white`) dengan font sans-serif berbobot tegas (`font-sans font-bold text-xs sm:text-sm tracking-wide`).
      - Ikon di dalam kapsul mempertahankan aksen khasnya (`#8ed462` untuk Buku, `#ff6122` untuk Wattpad) dengan ukuran proporsional.
    - **Pembersihan Monospace Global**: Menghapus seluruh kelas `font-mono` dari seluruh komponen website (`LiteraryWorks.tsx`, `GithubOverview.tsx`, `PortfolioGrid.tsx`, `Header.tsx`, `SkillsCharts.tsx`).
109. **Penambahan Tombol Profil TikTok pada Halaman Portofolio Konten Kreator & Multimedia (`ContentPortfolio.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'di halaman kategori portofolio konten kreator & multi media tambahkan di bawah tombol untuk membuka tiktik. Profile TikTok dg logo resmi tiktok https://www.tiktok.com/@setphenhawkin'.
    - **Implementasi**: Menambahkan tombol aksi kapsul elegan di bagian bawah grid proyek konten dengan label 'Profile TikTok', logo resmi TikTok (`SiTiktok`), tautan `https://www.tiktok.com/@setphenhawkin`, serta atribut keamanan `target="_blank"` dan `rel="noopener noreferrer"`.
    - **Kepatuhan Desain**: Format kapsul (`rounded-[50px]`/`rounded-full`), warna kontras solid aksen gelap `#2c2e2a` teks putih, flat tanpa bayangan (`DESIGN.md`), font sans-serif (`font-sans` sesuai Aturan 108), dan bebas badge/pill terlarang (`ai-anti-patterns.md`).
110. **Penambahan Tombol Channel YouTube pada Halaman Portofolio Konten Kreator & Multimedia (`ContentPortfolio.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'di halaman ini juga tambahkan tombol lagi untuk membuka youtube https://www.youtube.com/@gimanajadinyaid'.
    - **Implementasi**: Menambahkan tombol aksi kapsul YouTube berdampingan rapi dengan tombol TikTok di bagian bawah grid proyek konten dengan label 'Channel YouTube', logo resmi YouTube (`SiYoutube`), tautan `https://www.youtube.com/@gimanajadinyaid`, serta atribut keamanan `target="_blank"` dan `rel="noopener noreferrer"`.
    - **Kepatuhan Desain**: Format kapsul (`rounded-[50px]`/`rounded-full`), warna kontras solid aksen gelap `#2c2e2a` teks putih dengan aksen hover warna resmi YouTube (`#ff0000`), flat tanpa bayangan (`DESIGN.md`), font sans-serif (`font-sans` sesuai Aturan 108), dan bebas badge/pill terlarang (`ai-anti-patterns.md`).
111. **Penambahan Kategori Portofolio Baru 'Music & Sound Design' (`PortfolioCategories.tsx`, `MusicPortfolio.tsx`, & `App.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'di halaman utama portofolio tambahkan kategori baru yakni untuk menampilkan portofolio yang berhubungan denga karya musik dan instrumental Music & Sound Design'.
    - **Pembaruan Kategori Portofolio (`PortfolioCategories.tsx`)**:
      - Menambahkan tipe `PortfolioCategoryType` baru: `'music'`.
      - Menambahkan kartu kategori 'Music & Sound Design' pada grid kategori portofolio dengan tagline 'Produksi Musik, Komposisi Instrumental & Sound Design', deskripsi mendalam, serta featured items terstruktur.
    - **Komponen Halaman Kategori (`MusicPortfolio.tsx`)**:
      - Membangun komponen tampilan pameran karya musik dan instrumen orisinal (Cinematic Orchestral Suite, Minimalist Piano & Ambient Strings, Audio DSP Synthesis & Filters, Cinematic Foley & Ambience).
      - Header dibungkus kapsul aksen gelap `#2c2e2a` teks putih `text-white` tanpa monospace.
    - **Integrasi Navigasi & Routing (`App.tsx`)**:
      - Menambahkan tab switcher 'Musik & Audio' (`music`) pada sub-navigasi switcher kategori portofolio.
      - Me-render komponen `MusicPortfolio` ketika kategori `music` aktif.
    - **Kepatuhan Desain**: Menjaga estetika flat tanpa bayangan (`DESIGN.md`), font standar `font-sans` tanpa monospace (Aturan 108), dan patuh mutlak pada `ai-anti-patterns.md`.
112. **Section Karya Musik Orisinal (ZeroTwenty), Spotify Embed, Kartu Musik & Profil Suno (`MusicPortfolio.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'tambahkan section Karya Musik Orisinal, tambahkan kartu musik dari spotify, di paling atas tambahkan embed link track untuk lagu populer di spotify, tambahkan tombol Buka Profil Artis dan tombol Suno Profile, buat paragraf yang bilang karya musik orisinal, Organic melody, lyric and stoty over generated instruments, tambain nama panggung ZeroTwenty'.
    - **Embed Track Populer**: Menampilkan iframe embed resmi Spotify untuk lagu populer 'Masihkah Aku Diterima' di bagian atas section musik orisinal.
    - **Identitas & Filosofi Musik**: Menghadirkan nama panggung 'ZeroTwenty' serta narasi karya: 'Karya musik orisinal yang menggabungkan melodi organik, lirik puitis, dan kedalaman narasi di atas instrumen modern (organic melody, lyric, and story over generated instruments)'.
    - **Kartu Musik Spotify**: Menampilkan kartu-kartu lagu Spotify resmi dengan sampul album orisinal, judul lagu, dan tautan aksi: 'Masihkah Aku Diterima', 'Halfway', dan 'Wind of Fall'.
    - **Tombol Aksi**:
      1. 'Buka Profil Artis' menuju profil Spotify ZeroTwenty (`https://open.spotify.com/artist/61lnv533fb8bQVV5cQ7h5y?si=ozZTj4q5TKSrBAPdhzIlHg`) dengan logo resmi Spotify (`SiSpotify`).
      2. 'Suno Profile' menuju profil Suno (`https://suno.com/@zerotwentymusic`).
    - **Kepatuhan Desain**: Format kapsul (`rounded-[50px]`/`rounded-full`), warna kontras solid aksen gelap `#2c2e2a` teks putih, flat tanpa bayangan (`DESIGN.md`), font sans-serif (`font-sans` sesuai Aturan 108), dan bebas badge/pill terlarang (`ai-anti-patterns.md`).
113. **Penghapusan Kartu Portofolio Musik Dummy (`MusicPortfolio.tsx` & `PortfolioCategories.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'hapus dummy portofolio yang ini' disertai tangkapan layar 4 kartu dummy ('Symphonic Dawn', 'Echoes of Solitude', 'VOX Audio DSP Engine', dan 'Cinematic Foley & World-Building Soundscapes').
    - **Pembersihan Konten Dummy**: Menghapus seluruh 4 kartu dummy dan section dummy tersebut dari `MusicPortfolio.tsx` sehingga halaman portofolio murni fokus pada karya musik orisinal autentik dari artis ZeroTwenty (lagu populer 'Masihkah Aku Diterima', 'Halfway', 'Wind of Fall', embed player Spotify, serta tombol aksi ke profil Spotify dan Suno).
    - **Penyelarasan Featured Items (`PortfolioCategories.tsx`)**: Menyesuaikan daftar featuredItems pada kartu kategori 'Music & Sound Design' dengan karya riil: 'Masihkah Aku Diterima', 'Halfway', 'Wind of Fall', dan 'ZeroTwenty Spotify & Suno Catalog'.
    - **Kepatuhan Desain**: Menjaga estetika flat tanpa bayangan (`DESIGN.md`), font sans-serif (`font-sans` sesuai Aturan 108), dan bebas elemen terlarang (`ai-anti-patterns.md`).
114. **Penggunaan Ikon Resmi Suno pada Tombol Suno Profile (`MusicPortfolio.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'tombol ini pake icon resmi Suno https://cdn-o.suno.com/favicon-512x512.png' disertai tangkapan layar tombol Suno Profile.
    - **Penerapan Aset**: Mengunduh ikon resmi Suno beresolusi tinggi (`/icons/suno.png`) dan memasangnya sebagai ikon pada tombol 'Suno Profile' di `MusicPortfolio.tsx` dengan proporsi ukuran rapi (`w-5 h-5 rounded-full object-contain shrink-0`).
    - **Kepatuhan Desain**: Format kapsul (`rounded-[50px]`/`rounded-full`), warna kontras solid aksen gelap `#2c2e2a` teks putih, flat tanpa bayangan (`DESIGN.md`), font sans-serif (`font-sans` sesuai Aturan 108), dan bebas elemen terlarang (`ai-anti-patterns.md`).
115. **Section Karya Musik dari Platform Suno & Pemisahan Tombol Platform per Section (`MusicPortfolio.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'di kategori prtofolio musik tambahin section karya dari platform suno https://suno.com/s/0HHjXPxKmud4oDAj No Translation; Acoustic, Folk; https://suno.com/s/g8GN2a7csYV6Y1jW Braving Winter; Acoustic, Folk; https://suno.com/s/2xKF9LZk4R2kZnAL Hujan Tahun Lalu; Acoustic, Pop. tombol buka spotify dan buka suno di masing masing section ya'.
    - **Section Platform Suno**: Menambahkan section khusus 'Karya dari Platform Suno' dengan header kapsul aksen gelap `#2c2e2a` teks putih `text-white` berlogo resmi Suno (`/icons/suno.png`), deskripsi kurasi karya, dan grid 3 kartu lagu autentik dengan sampul gambar orisinal:
      1. *No Translation* (Acoustic, Folk) — `https://suno.com/s/0HHjXPxKmud4oDAj` (Cover: `/music/no_translation.png`).
      2. *Braving Winter* (Acoustic, Folk) — `https://suno.com/s/g8GN2a7csYV6Y1jW` (Cover: `/music/braving_winter.png`).
      3. *Hujan Tahun Lalu* (Acoustic, Pop) — `https://suno.com/s/2xKF9LZk4R2kZnAL` (Cover: `/music/hujan_tahun_lalu.png`).
    - **Pemisahan Tombol Aksi per Section**:
      - Section Spotify (Karya Musik Orisinal): Menampilkan tombol aksi kapsul 'Buka Profil Artis' menuju profil Spotify ZeroTwenty.
      - Section Suno (Karya dari Platform Suno): Menampilkan tombol aksi kapsul 'Suno Profile' menuju profil Suno ZeroTwenty dengan logo resmi Suno.
    - **Kepatuhan Desain**: Format kapsul (`rounded-[50px]`/`rounded-full`), warna kontras solid aksen gelap `#2c2e2a` teks putih, flat tanpa bayangan (`DESIGN.md`), font sans-serif (`font-sans` sesuai Aturan 108), dan bebas badge/pill terlarang (`ai-anti-patterns.md`).
116. **Penghapusan Deskripsi pada Kartu Lagu Portofolio Musik (`MusicPortfolio.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'kartu lagu jangan ada deskripsinya'.
    - **Implementasi**: Menghapus seluruh elemen dan teks paragraf deskripsi dari kartu lagu baik di section rilisan Spotify (ZeroTwenty) maupun di section rilisan platform Suno. Kartu lagu kini disederhanakan secara visual dan elegan, hanya menampilkan sampul karya asli, tag meta/genre, judul lagu, info artis/rilis, dan link aksi putar langsung.
    - **Kepatuhan Desain**: Layout bersih, flat tanpa bayangan (`DESIGN.md`), tipografi bebas monospace (`font-sans`), proporsi kartu padat dan proporsional, serta bebas badge/pill terlarang (`ai-anti-patterns.md`).
117. **Larangan Mutlak Outline/Stroke/Border pada Seluruh Komponen Berwarna Putih (23 September 2026):**
    - **Instruksi Pengguna**: 'semua box, tombol, kapsul, dan komponen apapun yang berwarna putih, jangan dikasih outline stroke'.
    - **Implementasi**: Menghapus seluruh border, stroke, ring, dan outline pada setiap box, kartu, tombol, kapsul, container, dan komponen apapun yang berlatar belakang putih (`bg-white`, `bg-[#ffffff]`, `bg-[#fff]`) di seluruh proyek (`MusicPortfolio.tsx`, `HomeShowcase.tsx`, `PortfolioCategories.tsx`, `ContentPortfolio.tsx`, `DesignPortfolio.tsx`, `PortfolioGrid.tsx`, `LiteraryWorks.tsx`, `GithubOverview.tsx`, `IdentityCard.tsx`, `ContactSection.tsx`, `SkillsCharts.tsx`, `App.tsx`, dan seluruh komponen Hero).
    - **Kepatuhan Desain Mutlak**: Komponen putih tampil murni flat tanpa garis pembatas tepi (`border-0`), menyatu kontras secara halus di atas latar belakang krem lembut `#f5f1e4` sesuai prinsip `DESIGN.md`, dan bebas dari artefak visual yang tidak diinginkan.
118. **Penambahan Logo Musik Resmi (Suno, Spotify, FL Studio) pada Deretan Logo (`PortfolioLogos.tsx`) & Preview Audio Song Karya Suno (`MusicPortfolio.tsx`) (23 September 2026):**
    - **Instruksi Pengguna 1**: 'bisa ga kalo tambahin preview song buat karya suno itu, ambil dari file kita di /media/fatihfarhat/New Volume1/FATIH DATA/Suno/v6 cari sesuai judul yang RAW'.
    - **Instruksi Pengguna 2**: 'berarti di deretan logo ini tambahin logo baru yang resmi: Suno, Spotify, FL Studio' disertai tangkapan layar deretan logo berjalan (`LogoLoop`).
    - **Implementasi Deretan Logo (`PortfolioLogos.tsx`)**:
      - Menambahkan 3 brand resmi kategori musik & audio:
        1. **Spotify** (`SiSpotify`): mengarah ke profil artis Spotify ZeroTwenty.
        2. **Suno** (`SiSuno`): mengarah ke profil resmi Suno ZeroTwenty.
        3. **FL Studio** (`FLStudioLogo` dari Image-Line): logo resmi buah/pepper FL Studio monokromatik proporsional (`public/icons/fl_studio.png`).
    - **Implementasi Audio Preview Song Suno (`MusicPortfolio.tsx`)**:
      - Mengambil file audio RAW v6 autentik dari `/media/fatihfarhat/New Volume1/FATIH DATA/Suno/v6/` dan menyimpannya di `public/music/`:
        1. *No Translation*: `No Translation v6 raw.mp3` &rarr; `/music/no_translation.mp3`
        2. *Braving Winter*: `Braving Winter v6 raw.mp3` &rarr; `/music/braving_winter.mp3`
        3. *Hujan Tahun Lalu*: `Hujan Tahun Lalu Pop v6 raw.mp3` &rarr; `/music/hujan_tahun_lalu.mp3`
      - Mengintegrasikan audio preview controller interaktif pada setiap kartu lagu Suno dengan tombol Play/Pause elegan, pemutaran satu audio eksklusif, dan penanganan status play/pause secara mulus.
    - **Kepatuhan Desain**: Tanpa border pada kartu putih (`Aturan 117`), flat tanpa shadow (`DESIGN.md`), font sans-serif (`font-sans` sesuai Aturan 108), dan bebas dari elemen terlarang (`ai-anti-patterns.md`).
119. **Penambahan Kategori 'Composing & Sound Design' dan Skill 'Corel Draw' pada Halaman MY SKILLS (`SkillsCharts.tsx`) (23 September 2026):**
    - **Instruksi Pengguna**: 'di halaman MY SKILLS > Penguasaan & Keahlian tambahin kategori baru: Composing & Sound Design: FL Studio 65%, Suno 89%, Adobe Audition 87%, Audacity 78%. Software Desain & Vektor Grafis tambahin Corel Draw 75%'.
    - **Penambahan Skill Desain**: Menambahkan *Corel Draw* (75%) dengan ikon resmi SVG (`/icons/coreldraw.svg`) pada kategori 'Software Desain & Vektor Grafis' (05).
    - **Kategori Baru 'Composing & Sound Design' (10)**:
      1. *Suno* (89%) — Ikon resmi Suno (`/icons/suno.png`), level: Generative Audio & Sound Design.
      2. *Adobe Audition* (87%) — Ikon resmi SVG (`/icons/audition.svg`), level: Post-Production & Mixing.
      3. *Audacity* (78%) — Ikon resmi SVG (`/icons/audacity.svg`), level: Multi-Track Audio Editing.
      4. *FL Studio* (65%) — Ikon resmi Image-Line (`/icons/fl_studio.png`), level: DAW & Beat Sequencing.
    - **Kepatuhan Desain**: Kartu skill putih tanpa border (`Aturan 117`), rendering ApexCharts Radial Gauge presisi, flat tanpa bayangan (`DESIGN.md`), tipografi bebas monospace (`font-sans`), dan bebas badge/pill terlarang (`ai-anti-patterns.md`).
