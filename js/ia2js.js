$(document).ready(function(){

  $("a").hover(function(){
    $("#hovers")[0].pause();
    $("#hovers")[0].currentTime=0;
    $("#hovers")[0].play();
    //hover in
  },
  function(){
    //hover out
  }

});
