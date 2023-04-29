let button = document.querySelector("#button");
let ul = document.querySelector(".head-list1");

button.onclick = function() {
    ul.classList.toggle("open");
}

let buttonMenu = document.querySelector('.button-menu');
let small = document.querySelector(".small-screen-menu");
let buttonMenu2 = document.querySelector('.button-menu2');

buttonMenu.onclick = function() {
    small.classList.toggle("open");
    buttonMenu.style.display = "none"
    buttonMenu2.style.display = "block"
    buttonMenu2.style.width = "50px"
    buttonMenu2.style.height = "35px"
}

buttonMenu2.onclick = function() {
    small.classList.toggle("open");
    buttonMenu2.style.display = "none"
    buttonMenu.style.display = "block"
    buttonMenu.style.width = "50px"
    buttonMenu.style.height = "35px"
}

function someFunc() {
    let width = window.innerWidth;
    if (width > 767) {
        buttonMenu2.style.display = "none";
        buttonMenu.style.display = "none";
    }
  }
  window.addEventListener('resize', function() {
    buttonMenu.style.display = "block";
    someFunc();
  });