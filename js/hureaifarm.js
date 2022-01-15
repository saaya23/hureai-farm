$('.top_cont').slick({
  dots: false,/*下の点々*/
  infinite: true,/*ループするか*/
  speed: 1000,/*スピード*/
  fade: true,/*スライドでなくフェイドインに*/
  cssEase: 'linear',/*イージング設定（加速、減速）*/
  arrows:false,/*左右矢印*/
  autoplay:true,
  autoplayspeed:500,
});


$('.merch_photo').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  infinite:true,
  useTransform:true,
  autoplay:true,
  autoplayspeed:5,
  speed:500,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1399,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5
      }
    }
  ]
});
