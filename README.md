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

## Catatan penggunaan AI

AI digunakan untuk membantu mengecek struktur HTML dan CSS agar sesuai dengan ketentuan Worksheet PABW Pertemuan 3 dan 4.

Saya mengerjakan dan menentukan sendiri topik halaman, isi data film, struktur halaman, serta isi form.
