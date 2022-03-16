"use strict";

const modal = document.getElementById("myModal");

const images = document.getElementsByClassName("myImages");

const modalImgage = document.getElementById("image01");

// const captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  const img = images[i];

  img.onclick = function (event) {
    modal.style.display = "block";
    modalImgage.src = this.src;
    // captionText.textContent = this.alt;
  };
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    span.onclick();
});
