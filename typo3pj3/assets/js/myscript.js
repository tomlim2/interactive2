

  $("#mvpoint1").click(function() {
  $('html, body').animate({
    scrollLeft: $("#mvpoint2").offset().left
  }, 1200);

  });

  $("#boxxx01").hover(function() {
    $(".dc1").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps2").toggleClass('appearmv2');
  });

  $("#boxxx02").hover(function() {
    $(".dc2").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps1").toggleClass('appearmv2');
  });

  $("#boxxx03").hover(function() {
    $(".dc3").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps3").toggleClass('appearmv2');
  });

  $("#boxxx04").hover(function() {
    $(".dc4").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps5").toggleClass('appearmv2');
  });

  $("#boxxx05").hover(function() {
    $(".dc5").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps4").toggleClass('appearmv2');
  });

  $("#boxxx06").hover(function() {
    $(".dc6").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps6").toggleClass('appearmv2');
  });

  $("#boxxx07").hover(function() {
    $(".dc7").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps8").toggleClass('appearmv2');
  });

  $("#boxxx08").hover(function() {
    $(".dc8").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps7").toggleClass('appearmv2');
  });

  $("#boxxx09").hover(function() {
    $(".dc9").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps10").toggleClass('appearmv2');
  });

  $("#boxxx10").hover(function() {
    $(".dc10").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps11").toggleClass('appearmv2');
  });

  $("#boxxx11").hover(function() {
    $(".dc11").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps12").toggleClass('appearmv2');
  });

  $("#boxxx12").hover(function() {
    $(".dc12").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps13").toggleClass('appearmv2');
  });

  $("#boxxx13").hover(function() {
    $(".dc13").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps14").toggleClass('appearmv2');
  });

  $("#boxxx14").hover(function() {
    $(".dc14").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps15").toggleClass('appearmv2');
  });

  $("#boxxx15").hover(function() {
    $(".dc15").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps16").toggleClass('appearmv2');
  });

  $("#boxxx16").hover(function() {
    $(".dc16").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps17").toggleClass('appearmv2');
  });

  $("#boxxx17").hover(function() {
    $(".dc17").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps22").toggleClass('appearmv2');
  });

  $("#boxxx18").hover(function() {
    $(".dc18").toggleClass('appearmv');
    $(".msimg1").toggleClass('op07mv');

    $(".dotsps18").toggleClass('appearmv2');
  });

  $("#mvpoint1").hover(function() {
    $(".dotsps24").toggleClass('appearmv2');
  });

  $("#boxxx19").hover(function() {
    $(".dotsps9").toggleClass('appearmv2');
  });
  $("#boxxx20").hover(function() {
    $(".dotsps19").toggleClass('appearmv2');
  });
  $("#boxxx21").hover(function() {
    $(".dotsps20").toggleClass('appearmv2');
  });
  $("#boxxx22").hover(function() {
    $(".dotsps21").toggleClass('appearmv2');
  });
  $("#boxxx23").hover(function() {
    $(".dotsps23").toggleClass('appearmv2');
  });
  $("#boxxx24").hover(function() {
    $(".dotsps25").toggleClass('appearmv2');
  });
  $("#boxxx25").hover(function() {
    $(".dotsps26").toggleClass('appearmv2');
  });


  var ho= 600; //스크롤 위치값
	$(window).scroll(function(){
		var num=$(window).scrollLeft();
			if(num>ho){
				$(".nav00").fadeIn();
			}else{
				$(".nav00").fadeOut();
			}
		});
