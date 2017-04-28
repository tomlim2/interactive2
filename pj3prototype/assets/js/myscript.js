$(document).ready(function() {

    var vip3= 520; //스크롤 위치값
    $(window).scroll(function(){
      var num=$(window).scrollTop();
        if(num>vip3){
          $(".oimg03").addClass("oimg03mv");
        }else{
          $(".oimg03").removeClass("oimg03mv");
        }
      });

    var vip2= 820; //스크롤 위치값
    $(window).scroll(function(){
      var num=$(window).scrollTop();
        if(num>vip2){
          $(".oimg02").addClass("oimg02mv");
        }else{
          $(".oimg02").removeClass("oimg02mv");
        }
      });

      var vip1= 2500;
      $(window).scroll(function(){
        var num=$(window).scrollTop();
          if(num>vip1){
            $(".oimg01").addClass("oimg01mv");
          }else{
            $(".oimg01").removeClass("oimg01mv");
          }
        });


    var max = 820;
    $(window).scroll(function(){
        var scrollPX = $(this).scrollTop();
        if( scrollPX  > max ) {
            $(".oimg021img").css({"opacity": Math.min((scrollPX-max)/scrollPX*6, 1)});
        }else{
            $(".oimg021img").css({"opacity": 0});
        }
    });
    var max2 = 900;
    $(window).scroll(function(){
        var scrollPX = $(this).scrollTop();
        if( scrollPX  > max2 ) {
            $(".oimg022img").css({"opacity": Math.min((scrollPX-max2)/scrollPX*6, 1)});
        }else{
            $(".oimg022img").css({"opacity": 0});
        }
    });
    var max3 = 1000;
    $(window).scroll(function(){
        var scrollPX = $(this).scrollTop();
        if( scrollPX  > max3 ) {
            $(".oimg023img").css({"opacity": Math.min((scrollPX-max3)/scrollPX*6, 1)});
        }else{
            $(".oimg023img").css({"opacity": 0});
        }
    });







  });




  //
  // var max = 1000; //100% 투명할때의 스크롤 값
  // $(window).scroll(function(){
  //     var scrollPX = $(this).scrollTop();
  //     if( scrollPX  < max ) {
  //         $("#bg").css({"opacity": (max-scrollPX)/max });
  //     }else{
  //         $("#bg").css({"opacity": 0});
  //     }
  // });
