$(document).ready(function() {

  $("a").hover(function(){
    $("#hovers")[0].pause();
    $("#hovers")[0].currentTime=0;
    $("#hovers")[0].play();
    //hover in
  },
  function(){
    //hover out
  }
);

  $("#ex1").hover(function(){
    $(".nodp2").toggleClass('tlc2');
    $(".tlc1").toggleClass('nodp1');
  });
  $("#ex3").hover(function(){
    $(".ex3").toggleClass('tlc3');
    $(".tlc1").toggleClass('nodp1');
  });
  $("#pre1").hover(function(){
    $(".nodp3").toggleClass('tlc3');
    $(".tlc1").toggleClass('nodp1');
  });


  $("#pjtl1").hover(function(){
    $(".nodp4").toggleClass('tlc6');
    $("body").toggleClass('tlc6mv');

    $(".floatbros").toggleClass('noop1mv');
    $("#ex1").toggleClass('noop1mv');
    $("#ex2").toggleClass('noop1mv');
    $("#pre1").toggleClass('noop1mv');
    $("#wk2").toggleClass('noop1mv');
    $("#wk3").toggleClass('noop1mv');
    $("#wk4").toggleClass('noop1mv');
    $("#wk5").toggleClass('noop1mv');
    $("#temp1").toggleClass('noop1mv');
    $("#temp2").toggleClass('noop1mv');

    $(".tlc1").toggleClass('nodp1');
  });


  $("#wk2").hover(function(){
    $(".nodp5").toggleClass('tlc60');
    $(".tlc1").toggleClass('nodp1');
  });
  $("#wk3").hover(function(){
    $(".nodp5").toggleClass('tlc60');
    $(".tlc1").toggleClass('nodp1');
  });
  $("#wk4").hover(function(){
    $(".nodp6").toggleClass('tlc50');
    $(".tlc1").toggleClass('nodp1');
  });
  $("#wk5").hover(function(){
    $(".nodp6").toggleClass('tlc50');
    $(".tlc1").toggleClass('nodp1');
  });
  $("#ex2").hover(function(){
    $(".nodp7").toggleClass('tlc7');
    $(".tlc1").toggleClass('nodp1');
  });

});
