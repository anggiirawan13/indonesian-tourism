const budaya = [
  {
    img: "barong.jpg",
    nama: "Barong Dance",
    description:
      "A traditional Balinese dance depicting the battle between good (Barong) and evil (Rangda). Often performed during religious ceremonies.",
    alt: "Barong Dance",
  },
  {
    img: "gondang-naposo.jpg",
    nama: "Gondang Naposo",
    description:
      "A Batak music and dance tradition involving young men and women, often held for social bonding and traditional ceremonies.",
    alt: "Gondang Naposo",
  },
  {
    img: "kecak.jpg",
    nama: "Kecak Dance",
    description:
      "A Balinese dance performed by a group of men chanting 'cak' while depicting scenes from the Ramayana epic.",
    alt: "Kecak Dance",
  },
  {
    img: "ngaben.jpg",
    nama: "Ngaben Ceremony",
    description:
      "A Balinese cremation ceremony to release the soul of the deceased towards the next life, featuring elaborate processions.",
    alt: "Ngaben Ceremony",
  },
  {
    img: "reog.jpg",
    nama: "Reog Ponorogo",
    description:
      "A traditional dance from Ponorogo, East Java, known for its large masks adorned with peacock feathers and tiger heads.",
    alt: "Reog Ponorogo",
  },
  {
    img: "saman.jpg",
    nama: "Saman Dance",
    description:
      "A traditional dance from the Gayo people of Aceh, performed by a group sitting in rows, moving hands and bodies dynamically.",
    alt: "Saman Dance",
  },
];

budaya.forEach((data) => {
  let element = document.getElementById("row-card-budaya-container");
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
