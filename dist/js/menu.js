var menu = document.querySelector('.menu');
var submenu = document.querySelector('.submenu');

menu.addEventListener('click', () => {
    menu.classList.toggle('clicked');
    if(submenu.style.display == 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
});