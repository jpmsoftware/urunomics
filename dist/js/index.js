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
    alert(sessionStorage.getItem('SelectedOpt'));
    ClearAll();
    SlideShow();

    var ctx = document.getElementById('grafica').getContext('2d');
    var chart = new chart(ctx, {
        type: 'line',
        data: {
            labels: ['1960', '1961', '1962', '1963', '1964', '1965'],
            datasets: [{
                label: 'PBI',
                backgroundColor: 'rgb(100, 100, 100)',
                data: [1242, 1547, 1710, 1540, 1976, 1891]
            }]
        }
    })
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