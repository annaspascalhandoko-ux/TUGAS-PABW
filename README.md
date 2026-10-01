# PABW — Annas Pascal Handoko — 25523263

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: Film Favoritku.

Judul halaman: Film Favoritku
Deskripsi: Halaman profil yang menampilkan daftar film favorit, formulir rekomendasi film, dan informasi kontak.
Tautan navigasi: Data Film, Rekomendasi, Kontak
Dua bagian utama: Daftar Film Favorit, Formulir Rekomendasi Film
Kolom tabel: Judul, Genre, Tahun, Alasan
Kolom form: Nama Lengkap, Judul Film, Genre

## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #8A1C3B (wine), digunakan untuk tombol dan tautan utama.
- Warna aksen fokus: #0E7490 (teal), digunakan untuk penanda fokus keyboard.
- Warna latar: #FBF8F4 agar background terang tetap nyaman dibaca.
- Warna teks utama: #1F1A17 agar teks jelas pada tema terang.
- Konsep token yang saya tetapkan:

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | var(--wine-700) / #8A1C3B | tombol dan tautan |
| --color-bg | var(--sand-50) / #FBF8F4 | latar halaman |
| --color-fg | var(--ink-900) / #1F1A17 | teks utama |
| --color-surface | var(--paper-0) / #FFFDF9 | latar kartu dan panel |
| --color-border | var(--stone-500) / #8C8279 | garis pembatas |
| --color-focus | var(--teal-700) / #0E7490 | penanda fokus keyboard |
| --color-danger | var(--red-700) / #B3261E | pesan dan keadaan kesalahan |
| --radius-md | 0.5rem | sudut tombol dan kotak |
| --space-4 | 1rem | jarak standar antar elemen |
| --text-md | 1rem | ukuran teks isi |
| --text-xl | 1.5rem | judul bagian |

Tema gelap mengganti token semantik menjadi latar #16121A, teks #EDE6F0, permukaan #221C28, garis #7C6E88, warna utama #F29BB4, warna bahaya #FF9C9C, dan warna fokus #5EEAD4. Tema dapat mengikuti pengaturan sistem atau diaktifkan melalui tombol pengalih.

Kriteria selesai saya: mengubah nilai --color-primary mengubah warna tombol dan tautan yang memakai token tersebut. Judul tetap mengikuti aturan tipografi, sedangkan garis fokus memakai --color-focus.

## Pertemuan 5 — Layout modern: flexbox dan grid

- Berkas yang digunakan: `profil.html`, `tokens.css`, `base.css`, `layout.css`, `komponen.css`, dan `tema.css` di folder `worksheet-p5`, hasil salinan dari Pertemuan 4 dengan tata letak yang diganti.
- Kerangka halaman dibungkus satu wadah `.page` memakai grid tiga baris (`auto 1fr auto`) untuk header, konten, dan footer, dengan tinggi minimum `100dvh` supaya kaki halaman tetap menempel di bawah.
- Navbar (logo, judul, menu) memakai flexbox satu baris dengan jarak diatur lewat `gap`, tanpa margin tempelan.
- Area isi (`.isi`) memakai grid dua kolom lewat `grid-template-areas`: sidebar formulir (`.sisi`) tetap 16rem, konten daftar film (`.utama`) menyerap sisa lebar dengan `1fr`.
- Galeri kartu film memakai grid adaptif `repeat(auto-fit, minmax(16rem, 1fr))`, sehingga jumlah kolom berubah sendiri mengikuti lebar layar tanpa media query. Isi setiap kartu (judul, alasan, baris genre-tahun) disusun dengan flexbox.
- Satu media query dipakai khusus untuk menumpuk `.isi` menjadi satu kolom pada layar sempit (maksimum 40rem), untuk mencegah kartu galeri meluber keluar kolom konten.
- Diuji pada lebar 360 px dan 1 280 px: tidak ada elemen yang meluber, jumlah kolom galeri berubah otomatis, dan tombol pengalih tema gelap dari Pertemuan 4 tetap berfungsi.

Kriteria selesai saya: kerangka halaman memakai grid untuk baris dan kolom utama, komponen di dalamnya memakai flexbox, jarak antar elemen memakai gap tanpa margin atau float, galeri berubah jumlah kolom tanpa media query, dan tidak ada elemen yang meluber pada lebar 360 px maupun 1 280 px.

## Pertemuan 6 — Responsif mobile-first

- Berkas yang digunakan: folder `worksheet-p6` berisi `profil.html`, lima berkas CSS dari Pertemuan 5 (`tokens.css`, `base.css`, `layout.css`, `komponen.css`, dan `tema.css`), serta berkas baru `responsif.css`. Saya memakai kembali halaman Pertemuan 5, bukan membuat halaman baru.
- Meta viewport pada `<head>` berada sebelum tautan CSS: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. Nilai `width=device-width` menyamakan lebar layout dengan lebar perangkat, sedangkan `initial-scale=1.0` mengatur skala awal ke 1:1.
- Pada gaya dasar di `responsif.css`, tanpa media query, `.content` dan `.grid` masing-masing satu kolom. Gambar dibatasi `max-width: 100%` dan `height: auto`, `.table-wrap` memakai `overflow-x: auto`, serta teks memakai `1rem` dengan `line-height: 1.6`.
- Pada `min-width: 48rem`, galeri menjadi dua kolom. Pada `min-width: 60rem`, sidebar selebar `16rem` disandingkan dengan konten dan galeri menjadi tiga kolom.
- Di `layout.css`, aturan `16rem 1fr` pada `.isi` dan media query `max-width: 40rem` dibuang; keduanya diganti gaya dasar satu kolom.
- Di `komponen.css`, `repeat(auto-fit, minmax(16rem, 1fr))` pada `.galeri` dibuang karena jumlah kolom kini diatur oleh titik henti.
- Di `profil.html`, tautan `responsif.css` ditambahkan paling akhir setelah `tema.css`. Kelas `content` dan `grid` ditambahkan di samping kelas `isi` dan `galeri` agar gaya worksheet berlaku.
- Pengujian pada lebar 360 px: Berhasil
- Pengujian pada lebar 768 px: Berhasil
- Pengujian pada lebar 1 280 px: Berhasil

Kriteria selesai saya: gaya dasar berlaku untuk layar sempit tanpa media query, dua titik henti memakai `min-width` dan satuan `rem`, gambar dibatasi `max-width: 100%`, dan tidak ada elemen yang meluber pada lebar 360 px, 768 px, maupun 1 280 px.

## Catatan penggunaan AI

AI digunakan untuk membantu mengecek struktur HTML dan CSS agar sesuai dengan ketentuan Worksheet PABW Pertemuan 3, 4, 5, dan 6.

Saya mengerjakan dan menentukan sendiri topik halaman, isi data film, struktur halaman, serta isi form.
