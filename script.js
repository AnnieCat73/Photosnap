const menuBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
//let menuOpen = false;

menuBtn.addEventListener("click", () => {

  menuBtn.style.display = "none";
  closeBtn.style.display = "block";

});

closeBtn.addEventListener("click", () => {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
});