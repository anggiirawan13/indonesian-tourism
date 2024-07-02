const budaya = [
  {
    img: "barong.jpg",
    description:
      "<b>Nama:</b> Tarian Barong<br><b>Asal:</b> Bali<br><b>Deskripsi:</b> Tarian Barong adalah tarian tradisional Bali yang menggambarkan pertarungan antara kebaikan (Barong) dan kejahatan (Rangda). Tarian ini sering dipertunjukkan dalam upacara keagamaan dan ritual adat Bali.<br><br>",
    alt: "Tarian Barong",
  },
  {
    img: "gondang-naposo.jpg",
    description:
      "<b>Nama:</b> Gondang Naposo<br><b>Asal:</b> Sumatra Utara<br><b>Deskripsi:</b> Gondang Naposo adalah tradisi musik dan tari dari suku Batak yang dilakukan oleh pemuda dan pemudi. Acara ini sering diadakan untuk menjalin hubungan sosial dan sebagai bagian dari upacara adat.<br><br>",
    alt: "Gondang Naposo",
  },
  {
    img: "kecak.jpg",
    description:
      "<b>Nama:</b> Tarian Kecak<br><b>Asal:</b> Bali<br><b>Deskripsi:</b> Tarian Kecak adalah tarian tradisional Bali yang dilakukan oleh puluhan pria yang duduk melingkar dan menyanyikan 'cak' berulang kali sambil mengangkat tangan. Tarian ini menggambarkan cerita dari epik Ramayana.<br><br>",
    alt: "Tarian Kecak",
  },
  {
    img: "ngaben.jpg",
    description:
      "<b>Nama:</b> Upacara Ngaben<br><b>Asal:</b> Bali<br><b>Deskripsi:</b> Ngaben adalah upacara kremasi tradisional Bali yang dilakukan untuk melepaskan roh seseorang yang telah meninggal dunia menuju kehidupan berikutnya. Upacara ini melibatkan prosesi besar dan sering kali disertai dengan tarian dan musik tradisional.<br><br>",
    alt: "Upacara Ngaben",
  },
  {
    img: "reog.jpg",
    description:
      "<b>Nama:</b> Reog Ponorogo<br><b>Asal:</b> Jawa Timur<br><b>Deskripsi:</b> Reog Ponorogo adalah tarian tradisional yang berasal dari Ponorogo, Jawa Timur. Tarian ini dikenal dengan topeng besar yang dipakai oleh penari utama, yang seringkali dihiasi dengan bulu merak dan kepala harimau.<br><br>",
    alt: "Reog Ponorogo",
  },
  {
    img: "saman.jpg",
    description:
      "<b>Nama:</b> Tari Saman<br><b>Asal:</b> Aceh<br><b>Deskripsi:</b> Tari Saman adalah tarian tradisional dari suku Gayo di Aceh yang dilakukan oleh sekelompok penari yang duduk berbaris dan menari dengan gerakan tangan dan tubuh yang dinamis. Tarian ini sering kali digunakan untuk merayakan peristiwa penting dalam kehidupan masyarakat Gayo.<br><br>",
    alt: "Tari Saman",
  },
];

budaya.forEach((data) => {
  let element = document.getElementsByClassName("gallery-container")[0];
  element.innerHTML += `<div class="gallery-card" style="text-align: left;">
    <img src="img/${data.img}" alt="${data.alt}" />
    <div class="description">
      ${data.description}
    </div>
  </div>`;
});
