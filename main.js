let titleName = "Icon Bar";
document.title = titleName;
document.querySelector("h1").innerHTML = titleName;

let items_one = document.querySelectorAll(".container_one .icon-bar a");
let items_two = document.querySelectorAll(".container_two .icon-bar a");
items_one.forEach((icon_one) => {
  icon_one.addEventListener("click", function () {
    items_one.forEach((icon_one) => {
      icon_one.classList.remove("active");
    });
    icon_one.classList.add("active");
  });
});
items_two.forEach((icon_two) => {
  icon_two.addEventListener("click", function () {
    items_two.forEach((icon_two) => {
      icon_two.classList.remove("active");
    });
    icon_two.classList.add("active");
  });
});

// Icon Menu
// let cont = document.querySelector(".container1");
// let bar_2 = document.querySelectorAll(".bar");

// cont.addEventListener("click", function () {
//   this.classList.toggle("change");
// });

// Add Event

let changeBackground = document.querySelector(".container_Icon");
let menu = document.querySelector(".container1");
let bar = document.querySelector(".container_two");

menu.addEventListener("click", function () {
  bar.classList.toggle("toggle");
  changeBackground.classList.toggle("changeBack");
});

var cont = document.querySelector(".container1");

cont.addEventListener("click", function () {
  cont.classList.toggle("change");
});
