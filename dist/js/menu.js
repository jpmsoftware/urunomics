var nav = document.getElementsByClassName("nav-bar")[0];
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