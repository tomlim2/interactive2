$(document).ready(function() {

    var scrlll1= 6130;
    $(window).scroll(function(){
      var num=$(window).scrollLeft();
        if(num>scrlll1){
          $(".mtxt1").addClass("appear");
        }else{
          $(".mtxt1").removeClass("appear");
        }
      });

      var scrlll12= 6130;
      $(window).scroll(function(){
        var num=$(window).scrollLeft();
          if(num>scrlll12){
            $(".cbttn01").addClass("appear");
          }else{
            $(".cbttn01").removeClass("appear");
          }
        });



      var scrlll41= 1200;
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
      var oimg012 = 4580;
      $(window).scroll(function(){
          var scrollPX = $(this).scrollLeft();
          if( scrollPX > oimg011 ) {
              $(".oimg01").css({"left": Math.min(scrollPX*4 + 100, 5500) + "px"});
                if( scrollPX > oimg012 ) {
                $(".oimg01").css({"left": Math.min(5500 + (scrollPX - oimg012)*1.3, 6500) + "px"});
              }
          }else{
              $(".oimg01").css({"left": 100 + "px"});
          }
      });

      var mtxt3ps = 1400;
      $(window).scroll(function(){
          var scrollPX = $(this).scrollLeft();
          if( scrollPX > mtxt3ps ) {
              $(".mtxt3").css({"left": Math.min((scrollPX-mtxt3ps)*0.8 + -130, 80) + "px"});
          }else{
              $(".mtxt3").css({"left": -130 + "px"});
          }
      });

      var oimg021 = 0;
      var oimg022 = 1800;
      var oimg023 = 4600;
      $(window).scroll(function(){
          var scrollPX = $(this).scrollLeft();
          if( scrollPX > oimg021 ) {
              $(".oimg02").css({"left": Math.min(scrollPX*3 + 500, 5190) + "px"});
              //
              // if( scrollPX > oimg022 ) {
              //     $(".oimg02").css({"left": Math.min(oimg022 + (scrollPX - oimg022)*3, oimg023) + "px"});
              // }

              if( scrollPX > oimg023 ) {
                  $(".oimg02").css({"left": Math.max(5190 - (scrollPX - oimg023)*0.8, 4600) + "px"});
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
                  $(".oimg03").css({"left": Math.max(oimg032 - (scrollPX - oimg032), 1100) + "px"});
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
      var cover = 0;
      $(window).scroll(function(){
          var scrollPX = $(this).scrollLeft();
          if( scrollPX > cover ) {
              $(".logocover").css({"left": Math.max(-scrollPX*2 + 280, -420) + "px"});
          }else{
              $(".logocover").css({"left": 280 + "px"});
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
