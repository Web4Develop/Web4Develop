"use strict";

const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

function backToTopFunction() {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
}
