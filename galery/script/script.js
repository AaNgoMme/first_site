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



let modal = document.querySelector("#modal");
let galery = document.querySelectorAll(".galery-box #image-zoom");
let modalImage = document.querySelector("#modal-img");
let captionText = document.querySelector(".modal-caption");
let modalClose = document.querySelector(".close");

if (document.documentElement.clientWidth > 767) {

for (let galeryImage of galery) {
    galeryImage.onclick = function() {
        modal.style.display = "block";
        modalImage.src = galeryImage.src;
        captionText.innerHTML = galeryImage.alt;
    }
}

modalClose.onclick = function() {
  modal.style.display = "none";
}

}
