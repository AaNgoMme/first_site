let menuImageList = document.querySelectorAll(".menu-image-list");
let boxImage = document.querySelector(".box1-image1");

for (let menuImage of menuImageList) {
    menuImage.onclick = function() {
        boxImage.innerHTML = `<img src="${menuImage.src}" class="box1-image">`;
    }
};

let menuImageList2 = document.querySelectorAll(".menu-image-list2");
let boxImage2 = document.querySelector(".box2-image2");

for (let menuImage2 of menuImageList2) {
    menuImage2.onclick = function() {
        boxImage2.innerHTML = `<img src="${menuImage2.src}">`;
    }
};

let menuImageList3 = document.querySelectorAll(".menu-image-list3");
let boxImage3 = document.querySelector(".box3-image3");

for (let menuImage3 of menuImageList3) {
    menuImage3.onclick = function() {
        boxImage3.innerHTML = `<img src="${menuImage3.src}">`;
    }
};

let menuImageList4 = document.querySelectorAll(".menu-image-list4");
let boxImage4 = document.querySelector(".box4-image4");

for (let menuImage4 of menuImageList4) {
    menuImage4.onclick = function() {
        boxImage4.innerHTML = `<img src="${menuImage4.src}">`;
    }
};


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
