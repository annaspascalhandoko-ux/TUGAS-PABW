
import { ambilProyek } from './api.js';
import { render, tampilkanGalat, aturMemuat } from './dom.js';

const profil = {
  nama: "Annas Pascal Handoko",
  nim: "25523263",
  judulHalaman: "Film Favoritku",
  peran: "Mahasiswa yang belajar front-end",
  tahun: 2026,
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const buatPerkenalan = ({ nama, peran }) => `${nama} — ${peran}`;
const formatKeahlian = (daftar) => daftar.join(" · ");

const elemenJudul = document.querySelector("h1");
const elemenFooter = document.querySelector("footer p");

document.title = profil.judulHalaman;

if (elemenJudul !== null) {
  elemenJudul.textContent = profil.judulHalaman;
}

if (elemenFooter !== null) {
  elemenFooter.textContent =
    `Nama: ${profil.nama} NIM: ${profil.nim} Tahun: ${profil.tahun}`;
}

const kota = profil.alamat?.kota ?? "-";
const kalimat =
  `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat);
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.log(`Kota: ${kota}`);

console.table(profil.keahlian);

async function muat() {
  aturMemuat(true);

  try {
    const data = await ambilProyek();
    render(data);
  } catch (galat) {
    tampilkanGalat(
      'Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.'
    );
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();
