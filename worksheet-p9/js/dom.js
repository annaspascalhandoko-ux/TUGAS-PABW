
import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function render(daftar) {
  wadah.textContent = "";

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

render(daftarProyek);

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  tandaiTombolAktif(tombol);
  const terpilih = daftarProyek.filter((proyek) => {
  if (kategori === "semua") return true;
  if (kategori === "selesai") return proyek.selesai;
  if (kategori === "proses") return !proyek.selesai;
});

  render(terpilih);
});
