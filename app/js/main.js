$(function(){

$('.menu').on('click', function(){
  $('.menu__gamburger').toggleClass('menu__gamburger--active');
  $('.menu-box').slideToggle();
});

$('select').styler();
	
});