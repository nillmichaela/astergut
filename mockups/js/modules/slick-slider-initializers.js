$(document).ready(function() {
  $('.gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallery-nav'
  });
  $('.gallery-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.gallery',
    dots: false,
    arrows: true,
    focusOnSelect: true
  });
});
