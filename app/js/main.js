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
let mySwiperThumbs = new Swiper('.swiper-container-product--thumbs', {    
 
  
  
  spaceBetween: 18,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        
      },
});

let mySwiperProduct = new Swiper('.swiper-container-product', {    
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  thumbs: {
    swiper: mySwiperThumbs
  },
 
});


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

$('.js-tab-trigger').on('click', function() {
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
  
  $('.js-tab-trigger.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2
  
  $('.js-tab-content.active').removeClass('active'); // 3
  content.addClass('active'); // 4
});
  

jQuery(function(){
  var j = jQuery; //Just a variable for using jQuery without conflicts
  var addInput = '#qty1'; //This is the id of the input you are changing
  var n = 1; //n is equal to 1
  
  //Set default value to n (n = 1)
  j(addInput).val(n);

  //On click add 1 to n
  j('.plus').on('click', function(){
    j(addInput).val(++n);
  })

  j('.min').on('click', function(){
    //If n is bigger or equal to 1 subtract 1 from n
    if (n >= 1) {
      j(addInput).val(--n);
    } else {
      //Otherwise do nothing
    }
  });
});
jQuery(function(){
  var j = jQuery; //Just a variable for using jQuery without conflicts
  var addInput = '#qty2'; //This is the id of the input you are changing
  var n = 1; //n is equal to 1
  
  //Set default value to n (n = 1)
  j(addInput).val(n);

  //On click add 1 to n
  j('.plus2').on('click', function(){
    j(addInput).val(++n);
  })

  j('.min2').on('click', function(){
    //If n is bigger or equal to 1 subtract 1 from n
    if (n >= 1) {
      j(addInput).val(--n);
    } else {
      //Otherwise do nothing
    }
  });
});



});