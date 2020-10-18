$(function(){

$('.menu').on('click', function(){
  $('.menu__gamburger').toggleClass('menu__gamburger--active');
  $('.menu-box').slideToggle();
});

$(document).on('mouseup', function(e) {
  if (! $('.menu').is(e.target) && $('.menu').has(e.target).length === 0 && ! $('.menu-box').is(e.target) && $('.menu-box').has(e.target).length === 0 ){
    $('.menu-box').fadeOut();
    $('.menu__gamburger').removeClass('menu__gamburger--active');
  };
  
});

$('select').styler();  


// let mySwiperMain = new Swiper('.swiper-container--main', {
//   slidesPerView: 3,
//   spaceBetween: 40,
//   centeredSlides: true,
//   loop: true,
// });

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

$(".reviews-item__rate").rateYo({
  rating: 5,
  starWidth: '20px',
  ratedFill: "#F8B41B",
  spacing: "10px"
});

$('.faq__item-title').on('click', function(){
  $(this).toggleClass('faq__item-title--active');
  $(this).siblings('.faq__item-text').slideToggle();
});
$('.footer-column__title').on('click', function(){  
  $(this).siblings('.footer__list-item').slideToggle();
});
	
});