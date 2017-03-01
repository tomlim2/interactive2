$(document).ready(function() {
  $(".spltta").hover(function(){
    $(".spltta").addClass('shakemv');
  });

  $('body').keydown(function(e){
    if(e.keyCode == 65){
      $("#xl01")[0].currentTime=0;
      $("#xl01")[0].play();
      $(".spltta").toggleClass('shakemv');
    }
  });

  $('body').keydown(function(e){
    if(e.keyCode == 83){
      $("#xl02")[0].currentTime=0;
      $("#xl02")[0].play();
      $(".spltts").toggleClass('shakemv');
    }
  });

  $('body').keydown(function(e){
    if(e.keyCode == 68){
      $("#xl03")[0].currentTime=0;
      $("#xl03")[0].play();
      $(".splttd").toggleClass('shakemv');
    }
  });

  $('body').keydown(function(e){
    if(e.keyCode == 70){
      $("#xl04")[0].currentTime=0;
      $("#xl04")[0].play();
      $(".spltte").toggleClass('shakemv');
    }
  });

  $('body').keydown(function(e){
    if(e.keyCode == 71){
      $("#xl05")[0].currentTime=0;
      $("#xl05")[0].play();
      $(".splttf").toggleClass('shakemv');
    }
  });

  $('body').keydown(function(e){
    if(e.keyCode == 72){
      $("#xl06")[0].currentTime=0;
      $("#xl06")[0].play();
      $(".splttg").toggleClass('shakemv');
    }
  });

  $('body').keydown(function(e){
    if(e.keyCode == 74){
      $("#xl07")[0].currentTime=0;
      $("#xl07")[0].play();
      $(".spltth").toggleClass('shakemv');
    }
  });

  $('body').keydown(function(e){
    if(e.keyCode == 75){
      $("#xl08")[0].currentTime=0;
      $("#xl08")[0].play();
      $(".spltti").toggleClass('shakemv');
    }
  });



  $(".spltta").hover(function(){
    $("#xl01")[0].pause();
    $("#xl01")[0].currentTime=0;
    $("#xl01")[0].play();
    $(".splttj").toggleClass('shakemv');
    //hover in
  }
  );



});
