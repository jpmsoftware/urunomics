var sliderIndex = 0;
var timer;
var items = document.getElementsByClassName("item");
var nav = document.getElementsByClassName("nav-bar")[0];

window.onload = () => {
    if(sessionStorage.getItem("SelectedOpt")) {
        var fileName = sessionStorage.getItem("SelectedOpt");
    } else {
        // no hay session, inicializar
        sessionStorage.setItem("SelectedOpt", "index");
    }
    ClearAll();
    SlideShow();
}

nav.onclick = (e) => {
    switch (e.target.parentElement.id) {
        case "pbi":
            sessionStorage.setItem("SelectedOpt", "pbi");
            break;

        case "pbi-interanual":
            sessionStorage.setItem("SelectedOpt", "pbi-interanual");
            break;

        case "pbi-per-capita":
            sessionStorage.setItem("SelectedOpt", "pbi-per-capita");
            break;

        case "inflacion":
            sessionStorage.setItem("SelectedOpt", "inflacion");
            break;

        case "desempleo":
            sessionStorage.setItem("SelectedOpt", "desempleo");
            break;
    }
}

function ClearAll() {
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
}

function SlideShow() {
    if (sliderIndex >= items.length) { sliderIndex = 0; }
    ClearAll();
    items[sliderIndex].style.display = "flex";


    sliderIndex++;
    setTimeout(SlideShow, 5000);
}

function LoadData() {
    //load h1
    //load description (p)
    //load json
    //load canvas data
}