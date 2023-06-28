$(document).ready(function(){
    $('.sidenav').sidenav();
  });
 
  $(document).ready(function(){
    $('.slider').slider();
  });

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  
  $(document).ready(function(){
    $('.carousel').carousel();
  });
  
  //scroll reveal

  window.sr = ScrollReveal ({reset: true});

  sr.reveal('.slider', {duration: 1500});
  sr.reveal('#slogan', {duration: 1500});
  sr.reveal('#about', {duration: 1500});
  sr.reveal('.carousel', {duration: 1500});
  sr.reveal('#products-page', {duration: 1500});
  sr.reveal('#contact', {duration: 1500});