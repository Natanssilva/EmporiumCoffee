
const openMenu = document.querySelector('#nav-links');
const icon = document.querySelector('#burger');

icon.addEventListener('click', function clicado(){
    openMenu.classList.toggle('is-active');
});