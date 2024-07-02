const hotel = [
  {
    img: "amanjiwo.jpg",
    description:"<b>Nama Hotel:</b> Amanjiwo, Yogyakarta<br><b>Alamat:</b> Desa Majaksingi, Borobudur, Magelang, Jawa Tengah.<br><b>Harga:</b> Mulai dari Rp 10.000.000 per malam<br><b>Fasilitas:</b> Kolam renang outdoor, Pusat kebugaran, Spa dan pusat kesehatan, Restoran dengan pemandangan Candi Borobudur, Tur dan aktivitas budaya, Layanan antar-jemput bandara<br><b>Informasi Tambahan:</b> Amanjiwo menawarkan pengalaman mewah dengan pemandangan langsung ke Candi Borobudur dan pelayanan yang personal.<br><br>",
    alt: "Amanjiwo, Yogyakarta",
  },
  {
    img: "ayana.jpg",
    description:"<b>Nama Hotel:</b> Ayana Resort and Spa, Bali<br><b>Alamat:</b> Jalan Karang Mas Sejahtera, Jimbaran, Bali.<br><b>Harga:</b> Mulai dari Rp 4.000.000 per malam<br><b>Fasilitas:</b> Kolam renang infinity, Pusat kebugaran, Spa dan pusat kesehatan, Berbagai restoran dan bar, termasuk Rock Bar yang terkenal, Pantai pribadi, Lapangan golf<br><b>Informasi Tambahan:</b> Ayana Resort and Spa menawarkan pemandangan laut yang spektakuler dan pengalaman kuliner yang luar biasa.<br><br>",
    alt: "Ayana Resort and Spa, Bali",
  },
  {
    img: "four-seasons.jpg",
    description:"<b>Nama Hotel:</b> Four Seasons Resort, Bali at Sayan<br><b>Alamat:</b> Sayan, Ubud, Gianyar, Bali.<br><b>Harga:</b> Mulai dari Rp 9.000.000 per malam<br><b>Fasilitas:</b> Kolam renang infinity, Pusat kebugaran, Spa dan pusat kesehatan, Restoran dengan menu internasional dan lokal, Kegiatan yoga dan meditasi, Layanan kamar 24 jam<br><b>Informasi Tambahan:</b> Terletak di tengah hutan tropis Ubud, resort ini menawarkan suasana yang tenang dan layanan eksklusif.<br><br>",
    alt: "Four Seasons Resort, Bali at Sayan",
  },
  {
    img: "kempinski.jpg",
    description:"<b>Nama Hotel:</b> Hotel Indonesia Kempinski, Jakarta<br><b>Alamat:</b> Jalan M.H. Thamrin No.1, Menteng, Jakarta Pusat.<br><b>Harga:</b> Mulai dari Rp 3.500.000 per malam<br><b>Fasilitas:</b> Kolam renang rooftop, Pusat kebugaran, Spa dan pusat kesehatan, Restoran dengan berbagai pilihan menu, Pusat bisnis dan ruang konferensi, Layanan kamar 24 jam<br><b>Informasi Tambahan:</b> Hotel ini menawarkan kemewahan di jantung ibu kota dengan akses mudah ke pusat perbelanjaan dan bisnis.<br><br>",
    alt: "Hotel Indonesia Kempinski, Jakarta",
  },
  {
    img: "mulia.jpg",
    description:"<b>Nama Hotel:</b> The Mulia, Bali<br><b>Alamat:</b> Jalan Raya Nusa Dua Selatan, Kawasan Sawangan, Nusa Dua, Bali.<br><b>Harga:</b> Mulai dari Rp 4.500.000 per malam<br><b>Fasilitas:</b> Kolam renang outdoor, Pusat kebugaran, Spa dan pusat kesehatan, Restoran dengan berbagai pilihan menu, Pantai pribadi, Layanan kamar 24 jam<br><b>Informasi Tambahan:</b> The Mulia dikenal dengan layanan yang luar biasa dan fasilitas mewah, serta pemandangan pantai yang menakjubkan.<br><br>",
    alt: "The Mulia, Bali",
  },
  {
    img: "plataran.jpg",
    description:"<b>Nama Hotel:</b> Plataran Borobudur Resort & Spa, Magelang<br><b>Alamat:</b> Dusun Tanjungan, Borobudur, Magelang, Jawa Tengah.<br><b>Harga:</b> Mulai dari Rp 5.000.000 per malam<br><b>Fasilitas:</b> Villa pribadi dengan kolam renang, Pusat kebugaran, Spa dan pusat kesehatan, Restoran dengan pemandangan Candi Borobudur, Kegiatan budaya dan alam, Layanan antar-jemput bandara<br><b>Informasi Tambahan:</b> Plataran Borobudur menawarkan pengalaman menginap yang mewah dan tenang dengan pemandangan langsung ke Candi Borobudur.<br>",
    alt: "Plataran Borobudur Resort & Spa, Magelang",
  },
];

hotel.forEach((data) => {
  let element = document.getElementsByClassName("gallery-container")[0];
  element.innerHTML += `<div class="gallery-card" style="text-align:left;">
    <img src="img/${data.img}" alt="${data.alt}" />
    <div class="description">
      ${data.description}
    </div>
  </div>`;
});
