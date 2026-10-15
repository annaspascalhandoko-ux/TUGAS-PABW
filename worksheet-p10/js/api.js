
const ALAMAT = 'data/proyek.json'; // relatif terhadap profil.html

async function muat() {
  const respons = await fetch(ALAMAT);

  console.log('status', respons.status, 'ok', respons.ok);

  if (!respons.ok) {
    throw new Error('status ' + respons.status);
  }

  return respons.json();
}

muat()
  .then((data) => console.log(data))
  .catch((galat) => console.error('Gagal memuat:', galat.message));
