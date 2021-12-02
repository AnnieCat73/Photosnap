//To open and close dropdown menu in mobile view

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



//Toggle Monthly and Yearly text bold when pressing the switch on the Pricing page

const textChange = document.getElementById("jsTextChange");
const switchHeading1 = document.querySelector(".switch-heading-1");
const switchHeading2 = document.querySelector(".switch-heading-2");

textChange.addEventListener("click", function () {

  if (switchHeading1.classList.contains("change")) {
    switchHeading1.classList.remove("change");
    switchHeading2.classList.add("change");
  } else {
    switchHeading1.classList.add("change");
    switchHeading2.classList.remove("change");
  }
});



