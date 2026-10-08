const profil = {
  nama: "Annas Pascal Handoko",
  nim: "25523263",
  judulHalaman: "Film Favoritku",
  peran: "Mahasiswa yang belajar front-end",
  tahun: 2026,
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const daftarProyek = 3[
  
];

const jumlahProyek = daftarProyek.length;

const buatPerkenalan = ({ nama, peran }) => `${nama} — ${peran}`;
const formatKeahlian = (daftar) => daftar.join(" · ");

const elemenJudul = document.querySelector("h1");
const elemenFooter = document.querySelector("footer p");

document.title = profil.judulHalaman;

if (elemenJudul !== null) {
  elemenJudul.textContent = profil.judulHalaman;
}

if (elemenFooter !== null) {
  elemenFooter.textContent = `Nama: ${profil.nama} NIM: ${profil.nim} Tahun: ${profil.tahun}`;
}

const kota = profil.alamat?.kota ?? "-";
const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat);
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.log(`Kota: ${kota}, jumlah proyek: ${jumlahProyek}`);

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const tryOut = daftarProyek.find((proyek) => proyek.judul === "Aplikasi Try Out");
console.log(tryOut);

const daftarJudul = daftarProyek.map((proyek) => proyek.judul);
console.log(daftarJudul);

const salinanProfil = { ...profil };
const urut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));
console.table(urut);
console.table(daftarProyek);
