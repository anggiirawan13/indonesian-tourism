const wisata = [
  {
    img: "jogja.jpg",
    description:
      "The largest Buddhist temple in the world, known for its beautiful reliefs and as a UNESCO World Heritage site.",
    alt: "Candi Borobudur",
    nama: "Candi Borobudur",
  },
  {
    img: "raja-ampat.jpg",
    description:
      "A paradise for divers with incredible marine biodiversity, consisting of around 1,500 small islands.",
    alt: "Raja Ampat",
    nama: "Raja Ampat",
  },
  {
    img: "malang.jpg",
    description:
      "One of the most famous volcanoes in Indonesia, offering spectacular views, especially at sunrise.",
    alt: "Gunung Bromo",
    nama: "Gunung Bromo",
  },
  {
    img: "bali.jpg",
    description:
      "Known as the cultural and artistic center of Bali, offering art galleries, traditional dances, and stunning rice fields.",
    alt: "Ubud",
    nama: "Ubud",
  },
  {
    img: "raja-ampat.jpg",
    description:
      "The world's largest volcanic lake with Samosir Island in the middle, offering beautiful scenery and unique Batak culture.",
    alt: "Danau Toba",
    nama: "Danau Toba",
  },
  {
    img: "lombok.jpg",
    description:
      "Natural habitat of the Komodo dragon, the largest lizard in the world, with stunning natural scenery and rich marine life.",
    alt: "Taman Nasional Komodo",
    nama: "Taman Nasional Komodo",
  },
];

wisata.forEach((data) => {
  let element = document.getElementById("row-card-wisata-container");
  element.innerHTML += `<div class="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
              <div class="card" style="width: 20rem; height:25rem;">
                <img
                  src="img/${data.img}"
                  class="img-fluid img-thumbnail"
                  style="width: 100%; height: 15rem"
                  alt="${data.alt}"
                />
                <div class="card-body">
                  <h5 class="card-title">${data.nama}</h5>
                  <p class="card-text">
                    ${data.description}
                  </p>
                </div>
              </div>
            </div>`;
});
