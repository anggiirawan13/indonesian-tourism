const contact = [
  {
    title: "UKM Futsal",
    wa: "85774548928",
    ig: "futsal_unpam",
  },
  {
    title: "UKM Badminton",
    wa: "8559893946",
    ig: "badminton.unpam",
  },
  {
    title: "UKM Taekwondo",
    wa: "87784437495",
    ig: "taekwondounivpamulang",
  },
  {
    title: "UKM Voli",
    wa: "88294938425",
    ig: "pbvunpam",
  },
  {
    title: "UKM Panahan",
    wa: "81234567890",
    ig: "ukmpanahanunpam",
  },
  {
    title: "UKM Catur",
    wa: "81296362020",
    ig: "chessunpam",
  },
];

contact.forEach((data) => {
  let element = document.getElementById("contact-container");
  element.innerHTML += `<div class="contact-card">
  <h3>${data.title}</h3>
  <p>
    <img class="wa-icon" src="img/whatsapp.png" alt="WhatsApp Icon" />
    <a href="https://wa.me/62${data.wa}" target="_blank"
      >0${data.wa}</a
    >
  </p>
  <p>
    <img class="ig-icon" src="img/instagram.png" alt="Instagram Icon" />
    <a href="https://instagram.com/${data.ig}" target="_blank"
      >@${data.ig}</a
    >
  </p>
</div>`;
});
