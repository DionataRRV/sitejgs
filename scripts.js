const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#000000";
    header.style.width = "120%";
    header.style.height = "10%";
  } else{
    header.style.backgroundColor = "transparent";
  }
});

