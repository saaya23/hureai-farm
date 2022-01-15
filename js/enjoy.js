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

// 飛ぶ//
$(function(){
  $('a[href^="#"]').click(function(){
    var speed=1000;
    var href=$(this).attr("href");
    if(href==="#"){
      var target=$("html");
    }else{
      var target=$(href);
    }
    var position=target.offset().top;
    $("html,body").animate({
      scrollTop:position
    },speed);
    return false;
  });
});

// map//
$(function(){
   $(".family,.letter1").on("mouseover",function(){
     $(".family").css("opacity",0.7);
   });
   $(".family").on("mouseout",function(){
     $(this).css("opacity",1.0);
   });
   $(".family,.letter1").on("mouseover",function(){
     $(".letter1").css("opacity",1.0);
   });
   $(".family").on("mouseout",function(){
     $(".letter1").css("opacity",0);
   });
   $(window).on("load",function(){
     $(".letter1").css("opacity",0);
   });
});


// お土産//
$(function(){
   $(".souvenir").on("mouseover",function(){
     $(this).children("img").css("opacity",0.5);
     $(this).children("p").css("visibility","visible");
   });
   $(".souvenir").on("mouseout",function(){
     $(this).children("img").css("opacity",1.0);
     $(this).children("p").css("visibility","hidden");
   });
});
