// $('.photo_img').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   arrows:true,
// });

//header//
$(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $('.menu').addClass('active');
    }else{
      $('.menu').removeClass('active');
    }
  });
});

// spring
$('.spring_large').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 lazyLoad: 'ondemand',
 asNavFor: '.spring_img',
});
$('.spring_img').slick({
 slidesToShow: 5,
 slidesToScroll: 1,
 asNavFor: '.spring_large',
 dots: true,
 arrows: false,
 centerMode: true,
 focusOnSelect: true,
 lazyLoad: 'ondemand',
});

// summer
$('.summer_large').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 lazyLoad: 'ondemand',
 asNavFor: '.summer_img',
});
$('.summer_img').slick({
 slidesToShow: 5,
 slidesToScroll: 1,
 asNavFor: '.summer_large',
 dots: true,
 arrows: false,
 centerMode: true,
 focusOnSelect: true,
 lazyLoad: 'ondemand',
});

// autumn
$('.autumn_large').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 lazyLoad: 'ondemand',
 asNavFor: '.autumn_img',
});
$('.autumn_img').slick({
 slidesToShow: 5,
 slidesToScroll: 1,
 asNavFor: '.autumn_large',
 dots: true,
 arrows: false,
 centerMode: true,
 focusOnSelect: true,
 lazyLoad: 'ondemand',
});

// winter
$('.winter_large').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 lazyLoad: 'ondemand',
 asNavFor: '.winter_img',
});
$('.winter_img').slick({
 slidesToShow: 5,
 slidesToScroll: 1,
 asNavFor: '.winter_large',
 dots: true,
 arrows: false,
 centerMode: true,
 focusOnSelect: true,
 lazyLoad: 'ondemand',
});
