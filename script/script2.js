
// галерея 

let menuImageList = document.querySelectorAll(".menu-image-list");
let boxImage = document.querySelector(".box1-image1 img");

for (let menuImage of menuImageList) {
    menuImage.onclick = function() {
        boxImage.src = menuImage.src
    };
};

let menuImageList2 = document.querySelectorAll(".menu-image-list2");
let boxImage2 = document.querySelector(".box2-image2 img");

for (let menuImage2 of menuImageList2) {
    menuImage2.onclick = function() {
        boxImage2.src = menuImage2.src
    };
};

let menuImageList3 = document.querySelectorAll(".menu-image-list3");
let boxImage3 = document.querySelector(".box3-image3 img");

for (let menuImage3 of menuImageList3) {
    menuImage3.onclick = function() {
        boxImage3.src = menuImage3.src;
    };
};

let menuImageList4 = document.querySelectorAll(".menu-image-list4");
let boxImage4 = document.querySelector(".box4-image4 img");

for (let menuImage4 of menuImageList4) {
    menuImage4.onclick = function() {
        boxImage4.src = menuImage4.src;
    };
};

// открывает меню "куда сходить в Крыму"

let button = document.querySelector("#button");
let ul = document.querySelector(".head-list1");

button.onclick = function() {
    ul.classList.toggle("open");
};


// меню на маленьких экранах

let buttonMenu = document.querySelector('.button-menu');
let small = document.querySelector(".small-screen-menu");
let buttonMenu2 = document.querySelector('.button-menu2');

buttonMenu.onclick = function() {
    small.classList.toggle("open");
    buttonMenu.style.display = "none"
    buttonMenu2.style.display = "block"
    buttonMenu2.style.width = "50px"
    buttonMenu2.style.height = "35px"
};

buttonMenu2.onclick = function() {
    small.classList.toggle("open");
    buttonMenu2.style.display = "none"
    buttonMenu.style.display = "block"
    buttonMenu.style.width = "50px"
    buttonMenu.style.height = "35px"
};

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


//Карусель, листать фото зажимая 

const slider = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 1;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
});


// Увелечение фото в карусели на экранах ниже 992

let modal = document.querySelector("#modal");
let carousel = document.querySelectorAll(".carousel img");
let modalImage = document.querySelector("#modal-img");
let captionText = document.querySelector(".modal-caption");
let modalClose = document.querySelector(".close");

if (document.documentElement.clientWidth < 992) {

for (let carouselImage of carousel) {
    carouselImage.onclick = function() {
        modal.style.display = "block";
        modalImage.src = carouselImage.src;
        captionText.innerHTML = carouselImage.alt;
    }
}

modalClose.onclick = function() {
  modal.style.display = "none";
}

modalImage.onclick = function() {
    modal.style.display = "none";
}

}