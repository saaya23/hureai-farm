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

// details//
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

$(function(){
   $(".relax,.letter2").on("mouseover",function(){
     $(".relax").css("opacity",0.7);
   });
   $(".relax").on("mouseout",function(){
     $(this).css("opacity",1.0);
   });
   $(".relax,.letter2").on("mouseover",function(){
     $(".letter2").css("opacity",1.0);
   });
   $(".relax").on("mouseout",function(){
     $(".letter2").css("opacity",0);
   });
   $(window).on("load",function(){
     $(".letter2").css("opacity",0);
   });
});

$(function(){
   $(".lavenda,.letter3").on("mouseover",function(){
     $(".lavenda").css("opacity",0.7);
   });
   $(".lavenda").on("mouseout",function(){
     $(this).css("opacity",1.0);
   });
   $(".lavenda,.letter3").on("mouseover",function(){
     $(".letter3").css("opacity",1.0);
   });
   $(".lavenda").on("mouseout",function(){
     $(".letter3").css("opacity",0);
   });
   $(window).on("load",function(){
     $(".letter3").css("opacity",0);
   });
});

$(function(){
   $(".milk,.letter4").on("mouseover",function(){
     $(".milk").css("opacity",0.7);
   });
   $(".milk").on("mouseout",function(){
     $(this).css("opacity",1.0);
   });
   $(".milk,.letter4").on("mouseover",function(){
     $(".letter4").css("opacity",1.0);
   });
   $(".milk").on("mouseout",function(){
     $(".letter4").css("opacity",0);
   });
   $(window).on("load",function(){
     $(".letter4").css("opacity",0);
   });
});