$(document).ready(function(){

  if(window.matchMedia('(min-width: 1170px)').matches) {
    $('.multiple-items__projects4').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0
    });
  } else if(window.matchMedia('(min-width: 970px)').matches) {
    $('.multiple-items__projects').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 1
    });
  }


if(window.matchMedia('(min-width: 750px)').matches) {
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    vertical: true,
    focusOnSelect: true
  });

}



  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });






});