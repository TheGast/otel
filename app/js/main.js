$(function(){

$('.menu').on('click', function(){
  $('.menu__gamburger').toggleClass('menu__gamburger--active');
  $('.menu-box').slideToggle();
});

$('select').styler();

let mySwiper1 = new Swiper('.swiper-container-1', {   
  autoplay: {
    delay: 3000,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let mySwiper2 = new Swiper('.swiper-container-2', { 
   autoplay: {
    delay: 3000,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let mySwiper3 = new Swiper('.swiper-container-3', {
   autoplay: {
    delay: 3000,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
	
});