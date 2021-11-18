//To open and close menu in mobile

const menuBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const dropdown = document.querySelector(".dropdown-menu");


menuBtn.addEventListener("click", () => {

  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  dropdown.style.display = "block";

});

closeBtn.addEventListener("click", () => {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  dropdown.style.display = "none";

});