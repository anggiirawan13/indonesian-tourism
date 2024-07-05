const hotel = [
  {
    img: "amanjiwo.jpg",
    nama: "Amanjiwo, Yogyakarta",
    description: "Luxury experience with direct view of Borobudur Temple.",
    alt: "Amanjiwo, Yogyakarta",
    loc: "https://maps.app.goo.gl/RTZS2QeBgCEd87mo7",
  },
  {
    img: "ayana.jpg",
    nama: "Ayana Resort and Spa, Bali",
    description:
      "Spectacular ocean views and exceptional culinary experiences.",
    alt: "Ayana Resort and Spa, Bali",
    loc: "https://maps.app.goo.gl/YNvjHvuj4mvHmvKK8",
  },
  {
    img: "four-seasons.jpg",
    nama: "Four Seasons Resort, Bali at Sayan",
    description:
      "Tranquil atmosphere in Ubud's tropical forest with exclusive services.",
    alt: "Four Seasons Resort, Bali at Sayan",
    loc: "https://maps.app.goo.gl/gXwe5mAJNyLguHBF7",
  },
  {
    img: "kempinski.jpg",
    nama: "Hotel Indonesia Kempinski, Jakarta",
    description:
      "Luxury in the heart of the capital with easy access to shopping and business centers.",
    alt: "Hotel Indonesia Kempinski, Jakarta",
    loc: "https://maps.app.goo.gl/QV1FrWEekQ1cQN4p7",
  },
  {
    img: "mulia.jpg",
    nama: "The Mulia, Bali",
    description:
      "Known for exceptional service and luxurious facilities with stunning beach views.",
    alt: "The Mulia, Bali",
    loc: "https://maps.app.goo.gl/iEMgCeFXufQPGwHX7",
  },
  {
    img: "plataran.jpg",
    nama: "Plataran Borobudur Resort & Spa, Magelang",
    description:
      "Luxurious and serene stay with direct view of Borobudur Temple.",
    alt: "Plataran Borobudur Resort & Spa, Magelang",
    loc: "https://maps.app.goo.gl/X7W6YsYPr38FhFuZA",
  },
];

hotel.forEach((data) => {
  let element = document.getElementById("row-card-hotel-container");
  element.innerHTML += `<div class="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
              <div class="card" style="width: 20rem; height:30rem;">
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
                <div class="card-footer text-center d-flex justify-content-around">
                    <a class="btn btn-outline-primary" href="${data.loc}" target="_blank" role="button"><i class="fa fa-map"></i> Location</a>
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    data-bs-toggle="modal"
                    data-bs-target="#booking"
                    onclick="setHotelName('${data.nama}')"
                  >
                     <i class="fa fa-pencil"></i> Booking
                  </button>
                </div>
              </div>
            </div>`;
});

function setHotelName(hotel) {
  document.getElementById("hotel").value = hotel;
}
