// implementando o click do menu mobile

const openMenu = document.querySelector('#nav-links');
const icon = document.querySelector('#burger');

icon.addEventListener('click', function clicado(){
    openMenu.classList.toggle('is-active');
    icon.classList.toggle('is-active')
});