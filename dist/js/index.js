var sliderIndex = 0;
var timer;
var items = document.getElementsByClassName('item');
var burger = document.querySelector('.burger');
var menuMobile = document.querySelector('.menu-mobile');

window.onload = () => {
    if (sessionStorage.getItem('SelectedOpt')) {
        var fileName = sessionStorage.getItem('SelectedOpt');
    } else {
        sessionStorage.setItem("SelectedOpt", "index");
    }

    ClearAll();
    
    SlideShow();
}

function ClearAll() {
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
}

function SlideShow() {
    if (sliderIndex >= items.length) {
        sliderIndex = 0;
    }

    ClearAll();

    items[sliderIndex].style.display = "flex";

    sliderIndex++;

    setTimeout(SlideShow, 5000);
}

burger.onclick = () => {
    menuMobile.classList.toggle('visible');
}