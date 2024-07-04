const wisata = [
  {
    img: "jogja.jpg",
    description: 
      "<b>Nama Tempat:</b> Candi Borobudur<br><b>Lokasi:</b> Magelang, Jawa Tengah<br><b>Deskripsi:</b> Candi Borobudur adalah candi Buddha terbesar di dunia yang dibangun pada abad ke-9. Tempat ini dikenal dengan relief-reliefnya yang indah dan menjadi salah satu warisan budaya dunia UNESCO.<br><b>Aktivitas:</b> Tur candi, menikmati matahari terbit dan terbenam, mempelajari sejarah dan budaya Buddha.",
    alt: "Candi Borobudur",
  },
  {
    img: "raja-ampat.jpg",
    description: 
      "<b>Nama Tempat:</b> Raja Ampat<br><b>Lokasi:</b> Papua Barat<br><b>Deskripsi:</b> Raja Ampat adalah surga bagi para penyelam dengan keanekaragaman hayati laut yang luar biasa. Tempat ini terdiri dari sekitar 1.500 pulau kecil, atol, dan beting pasir.<br><b>Aktivitas:</b> Menyelam, snorkeling, berlayar, menjelajahi pulau-pulau.",
    alt: "Raja Ampat",
  },
  {
    img: "malang.jpg",
    description: 
      "<b>Nama Tempat:</b> Gunung Bromo<br><b>Lokasi:</b> Jawa Timur<br><b>Deskripsi:</b> Gunung Bromo adalah salah satu gunung berapi yang paling terkenal di Indonesia. Tempat ini menawarkan pemandangan spektakuler, terutama saat matahari terbit.<br><b>Aktivitas:</b> Mendaki gunung, menikmati pemandangan matahari terbit, berkeliling kawah.",
    alt: "Gunung Bromo",
  },
  {
    img: "bali.jpg",
    description: 
      "<b>Nama Tempat:</b> Ubud<br><b>Lokasi:</b> Bali<br><b>Deskripsi:</b> Ubud dikenal sebagai pusat budaya dan seni di Bali. Tempat ini menawarkan berbagai galeri seni, tarian tradisional, dan pemandangan sawah yang menakjubkan.<br><b>Aktivitas:</b> Mengunjungi galeri seni, menonton tarian tradisional, yoga, bersepeda melalui sawah.",
    alt: "Ubud",
  },
  {
    img: "raja-ampat.jpg",
    description: 
      "<b>Nama Tempat:</b> Danau Toba<br><b>Lokasi:</b> Sumatera Utara<br><b>Deskripsi:</b> Danau Toba adalah danau vulkanik terbesar di dunia dan memiliki pulau Samosir di tengahnya. Tempat ini menawarkan pemandangan alam yang indah dan kebudayaan Batak yang unik.<br><b>Aktivitas:</b> Berenang, berlayar, menjelajahi pulau Samosir, mempelajari kebudayaan Batak.",
    alt: "Danau Toba",
  },
  {
    img: "lombok.jpg",
    description: 
      "<b>Nama Tempat:</b> Taman Nasional Komodo<br><b>Lokasi:</b> Nusa Tenggara Timur<br><b>Deskripsi:</b> Taman Nasional Komodo adalah habitat alami dari komodo, kadal terbesar di dunia. Tempat ini juga menawarkan pemandangan alam yang menakjubkan dan kehidupan bawah laut yang kaya.<br><b>Aktivitas:</b> Trekking untuk melihat komodo, snorkeling, diving, berlayar.",
    alt: "Taman Nasional Komodo",
  }
];

wisata.forEach((data) => {
  let element = document.getElementsByClassName("gallery-container")[0];
  element.innerHTML += `<div class="gallery-card" style="text-align: left;">
    <img src="img/${data.img}" alt="${data.alt}" />
    <div class="description">
      ${data.description}
    </div>
  </div>`;
});
