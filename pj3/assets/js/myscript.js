$(document).ready(function() {

    var scrlll1= 5600;
    $(window).scroll(function(){
      var num=$(window).scrollLeft();
        if(num>scrlll1){
          $(".mnbttn1").addClass("appear");
        }else{
          $(".mnbttn1").removeClass("appear");
        }
      });

      var scrlll41= 1230;
      $(window).scroll(function(){
        var num=$(window).scrollLeft();
          if(num>scrlll41){
            $(".mtxt4").addClass("hidden");
          }else{
            $(".mtxt4").removeClass("hidden");
          }
        });
        var scrlll42= 1480;
        $(window).scroll(function(){
          var num=$(window).scrollLeft();
            if(num>scrlll42){
              $(".cbbtnimg04").addClass("hidden");
            }else{
              $(".cbbtnimg04").removeClass("hidden");
            }
          });


      // patels----------------------

      var oimg011 = 0;
      $(window).scroll(function(){
          var scrollPX = $(this).scrollLeft();
          if( scrollPX > oimg011 ) {
              $(".oimg01").css({"left": Math.min(scrollPX*4 + 100, 6000) + "px"});
          }else{
              $(".oimg01").css({"left": 100 + "px"});
          }
      });

      var oimg021 = 0;
      var oimg022 = 1400;
      var oimg023 = 4800;
      $(window).scroll(function(){
          var scrollPX = $(this).scrollLeft();
          if( scrollPX > oimg021 ) {
              $(".oimg02").css({"left": Math.min(scrollPX*3 + 500, oimg023) + "px"});
              //
              // if( scrollPX > oimg022 ) {
              //     $(".oimg02").css({"left": Math.min(oimg022 + (scrollPX - oimg022)*3, oimg023) + "px"});
              // }

              if( scrollPX > oimg023 ) {
                  $(".oimg02").css({"left": Math.max(oimg023 - (scrollPX - oimg023)*0.8, 4000) + "px"});
              }
          }else{
              $(".oimg02").css({"left": 500 + "px"});
          }
      });

      var oimg031 = 0;
      var oimg032 = 1400;
      $(window).scroll(function(){
          var scrollPX = $(this).scrollLeft();
          if( scrollPX > oimg031 ) {
              $(".oimg03").css({"left": Math.min(scrollPX*5 + 100, oimg032) + "px"});

              if( scrollPX > oimg032 ) {
                  $(".oimg03").css({"left": Math.max(oimg032 - (scrollPX - oimg032), 800) + "px"});
              }

          }else{
              $(".oimg03").css({"left": 100 + "px"});
          }
      });


      var oimg041 = 0;
      $(window).scroll(function(){
          var scrollPX = $(this).scrollLeft();
          if( scrollPX > oimg041 ) {
              $(".oimg04").css({"left": Math.max(-scrollPX*2 + 100, -600) + "px"});
          }else{
              $(".oimg04").css({"left": 100 + "px"});
          }
      });



  });




  // var max = 1000; //100% 투명할때의 스크롤 값
  // $(window).scroll(function(){
  //     var scrollPX = $(this).scrollTop();
  //     if( scrollPX  < max ) {
  //         $("#bg").css({"opacity": (max-scrollPX)/max });
  //     }else{
  //         $("#bg").css({"opacity": 0});
  //     }
  // });
