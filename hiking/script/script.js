
// Открытие меню 

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

//Увеличение изображения

let modal = document.querySelector("#modal");
let galery = document.querySelectorAll("main img");
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


let pre1 = document.querySelector(".pre-btn1");
let next1 = document.querySelector(".next-btn1");
let image1 = document.querySelector("#image1");
let image2 = document.querySelector("#image2");
let image3 = document.querySelector("#image3");

if (document.documentElement.clientWidth < 767) {
    let num = 1;
    next1.onclick = function() {
        num++;
        if (num == 4) {
            num = 1;
            image1.src = 'image/image1.jpg';
        }
        if (num == 2) {
            image1.src = image2.src;
        }   
        if (num == 3){
            image1.src = image3.src;
        }
    }

    pre1.onclick = function() {
        num--;
        if (num == 0) {
            num = 3;
            image1.src = image3.src;
        }
        if (num == 2) {
            image1.src = image2.src; 
        }
        if (num == 1) {
            image1.src = 'image/image1.jpg';
        }
    }
}

let pre2 = document.querySelector(".pre-btn2");
let next2 = document.querySelector(".next-btn2");
let image4 = document.querySelector("#image4");
let image5 = document.querySelector("#image5");
let image6 = document.querySelector("#image6");
    
if (document.documentElement.clientWidth < 767) {
    let num = 1;
    next2.onclick = function() {
        num++;
        if (num == 4) {
            num = 1;
            image4.src = 'image/image4.jpg';
        }
        if (num == 2) {
            image4.src = image5.src;
        }   
        if (num == 3){
            image4.src = image6.src; 
        }
    }
    
    pre2.onclick = function() {
        num--;
        if (num == 0) {
            num = 3;
            image4.src = image6.src; 
        }
        if (num == 2) {
            image4.src = image5.src; 
        }
        if (num == 1) {
            image4.src = 'image/image4.jpg';
        }
    }
}

let pre3 = document.querySelector(".pre-btn3");
let next3 = document.querySelector(".next-btn3");
let image7 = document.querySelector("#image7");
let image8 = document.querySelector("#image8");
let image9 = document.querySelector("#image9");
        
if (document.documentElement.clientWidth < 767) {
    let num = 1;
    next3.onclick = function() {
        num++;
        if (num == 4) {
            num = 1;
            image7.src = 'image/image7.jpg';
        }
        if (num == 2) {
            image7.src = image8.src;
        }   
        if (num == 3){
            image7.src = image9.src;
        }
    }
        
    pre3.onclick = function() {
        num--;
        if (num == 0) {
            num = 3;
            image7.src = image9.src;
        }
        if (num == 2) {
            image7.src = image8.src; 
        }
        if (num == 1) {
            image7.src = 'image/image7.jpg';
        }
    }
}

let pre4 = document.querySelector(".pre-btn4");
let next4 = document.querySelector(".next-btn4");
let image10 = document.querySelector("#image10");
let image11 = document.querySelector("#image11");
let image12 = document.querySelector("#image12");
            
if (document.documentElement.clientWidth < 767) {
    let num = 1;
    next4.onclick = function() {
        num++;
        if (num == 4) {
            num = 1;
            image10.src = 'image/image10.jpg';
        }
        if (num == 2) {
            image10.src = image11.src;
        }   
        if (num == 3){
            image10.src = image12.src;
        }
    }
            
    pre4.onclick = function() {
        num--;
        if (num == 0) {
            num = 3;
            image10.src = image12.src;
        }
        if (num == 2) {
            image10.src = image11.src; 
        }
        if (num == 1) {
            image10.src = 'image/image10.jpg';
        }
    }
}

let pre5 = document.querySelector(".pre-btn5");
let next5 = document.querySelector(".next-btn5");
let image13 = document.querySelector("#image13");
let image14 = document.querySelector("#image14");
let image15 = document.querySelector("#image15");
                
if (document.documentElement.clientWidth < 767) {
    let num = 1;
    next5.onclick = function() {
        num++;
        if (num == 4) {
            num = 1;
            image13.src = 'image/image13.jpg';
        }
        if (num == 2) {
            image13.src = image14.src;
        }   
        if (num == 3) {
            image13.src = image15.src;
        }
    }
                
    pre5.onclick = function() {
        num--;
        if (num == 0) {
            num = 3;
            image13.src = image15.src;
        }
        if (num == 2) {
            image13.src = image14.src; 
        }
        if (num == 1) {
            image13.src = 'image/image13.jpg';
        }
    }
}

let pre6 = document.querySelector(".pre-btn6");
let next6 = document.querySelector(".next-btn6");
let image16 = document.querySelector("#image16");
let image17 = document.querySelector("#image17");
let image18 = document.querySelector("#image18");
                
if (document.documentElement.clientWidth < 767) {
    let num = 1;
    next6.onclick = function() {
        num++;
        if (num == 4) {
            num = 1;
            image16.src = 'image/image16.jpg';
        }
        if (num == 2) {
            image16.src = image17.src;
        }   
        if (num == 3) {
            image16.src = image18.src;
        }
    }
                
    pre6.onclick = function() {
        num--;
        if (num == 0) {
            num = 3;
            image16.src = image18.src;
        }
        if (num == 2) {
            image16.src = image17.src; 
        }
        if (num == 1) {
            image16.src = 'image/image16.jpg';
        }
    }
}

let pre7 = document.querySelector(".pre-btn7");
let next7 = document.querySelector(".next-btn7");
let image19 = document.querySelector("#image19");
let image20 = document.querySelector("#image20");
let image21 = document.querySelector("#image21");
                
if (document.documentElement.clientWidth < 767) {
    let num = 1;
    next7.onclick = function() {
        num++;
        if (num == 4) {
            num = 1;
            image19.src = 'image/image19.jpg';
        }
        if (num == 2) {
            image19.src = image20.src;
        }   
        if (num == 3) {
            image19.src = image21.src;
        }
    }
                
    pre7.onclick = function() {
        num--;
        if (num == 0) {
            num = 3;
            image19.src = image21.src;
        }
        if (num == 2) {
            image19.src = image20.src; 
        }
        if (num == 1) {
            image19.src = 'image/image19.jpg';
        }
    }
}

let pre8 = document.querySelector(".pre-btn8");
let next8 = document.querySelector(".next-btn8");
let image22 = document.querySelector("#image22");
let image23 = document.querySelector("#image23");
let image24 = document.querySelector("#image24");
                
if (document.documentElement.clientWidth < 767) {
    let num = 1;
    next8.onclick = function() {
        num++;
        if (num == 4) {
            num = 1;
            image22.src = 'image/image22.jpg';
        }
        if (num == 2) {
            image22.src = image23.src;
        }   
        if (num == 3) {
            image22.src = image24.src;
        }
    }
                
    pre8.onclick = function() {
        num--;
        if (num == 0) {
            num = 3;
            image22.src = image24.src;
        }
        if (num == 2) {
            image22.src = image23.src; 
        }
        if (num == 1) {
            image22.src = 'image/image22.jpg';
        }
    }
}