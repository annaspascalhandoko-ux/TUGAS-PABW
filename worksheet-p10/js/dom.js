
import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}


const kosong = document.querySelector("#kosong");

function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

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

const form = document.querySelector("#rekomendasi form");

const inputNama = document.querySelector("#nama");
const inputFilm = document.querySelector("#film");
const inputGenre = document.querySelector("#genre");

const errorNama = document.querySelector("#error-nama");
const errorFilm = document.querySelector("#error-film");
const errorGenre = document.querySelector("#error-genre");

const tombolKirim = form.querySelector('button[type="submit"]');

function validasiNama() {
  const sah = inputNama.value.trim() !== "";
  errorNama.textContent = sah ? "" : "Nama lengkap wajib diisi.";
  inputNama.setAttribute("aria-invalid", String(!sah));
  return sah;
}

function validasiFilm() {
  const sah = inputFilm.value.trim() !== "";
  errorFilm.textContent = sah ? "" : "Judul film wajib diisi.";
  inputFilm.setAttribute("aria-invalid", String(!sah));
  return sah;
}

function validasiGenre() {
  const sah = inputGenre.value.trim() !== "";
  errorGenre.textContent = sah ? "" : "Genre wajib diisi.";
  inputGenre.setAttribute("aria-invalid", String(!sah));
  return sah;
}

inputNama.addEventListener("input", () => {
  validasiNama();
  perbaruiTombolKirim();
});

inputFilm.addEventListener("input", () => {
  validasiFilm();
  perbaruiTombolKirim();
});

inputGenre.addEventListener("input", () => {
  validasiGenre();
  perbaruiTombolKirim();
});

function perbaruiTombolKirim() {
  const sah =
    inputNama.value.trim() !== "" &&
    inputFilm.value.trim() !== "" &&
    inputGenre.value.trim() !== "";

  tombolKirim.disabled = !sah;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const namaSah = validasiNama();
  const filmSah = validasiFilm();
  const genreSah = validasiGenre();

  perbaruiTombolKirim();

  if (!namaSah || !filmSah || !genreSah) {
    return;
  }

  console.log("Formulir valid dan siap diproses.");
});

