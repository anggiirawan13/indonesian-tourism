// let i = 1;
// let imgName = "";

// function onload() {
//   document.getElementById("overlay").style.display = "none";
// }

// window.addEventListener("DOMContentLoaded", function () {
//   const scrollLinks = document.querySelectorAll("#nav-links a");

//   for (const link of scrollLinks) {
//     link.addEventListener("click", smoothScroll);
//   }

//   function smoothScroll(e) {
//     e.preventDefault();
//     const targetId = this.getAttribute("href");
//     const targetPosition = document.querySelector(targetId).offsetTop - 60;
//     window.scrollTo({
//       top: targetPosition,
//       behavior: "smooth",
//     });
//   }
// });

// function focusCard(card, imageName) {
//   i = 1;

//   imgName = imageName;

//   var imgSrc = card.querySelector("img").getAttribute("src");
//   var descriptionText = card.querySelector(".description").textContent;

//   document.getElementById("img-focused").src = imgSrc;
//   document.getElementById("desc-focused").innerHTML = descriptionText;

//   document.getElementById("card-focused").style.display = "block";
//   document.getElementById("overlay").style.display = "block";
//   document.getElementById("previous-btn").style.display = "none";
//   document.getElementById("next-btn").style.display = "block";
//   document.body.style.overflow = "hidden";
// }

// function unfocusCard() {
//   i = 1;

//   document.getElementById("card-focused").style.display = "none";
//   document.getElementById("overlay").style.display = "none";
//   document.getElementById("img-focused").src = "";
//   document.getElementById("desc-focused").innerHTML = "";
//   document.body.style.overflowY = "scroll";
// }

// function nextImage() {
//   i++;

//   document.getElementById("img-focused").src = `img/${imgName}-${i}.jpg`;
//   if (i == 3) {
//     document.getElementById("next-btn").style.display = "none";
//   } else {
//     document.getElementById("previous-btn").style.display = "block";
//   }
// }

// function previousImage() {
//   i--;

//   document.getElementById("img-focused").src = `img/${imgName}-${i}.jpg`;
//   if (i == 1) {
//     document.getElementById("previous-btn").style.display = "none";
//   } else {
//     document.getElementById("next-btn").style.display = "block";
//   }
// }
