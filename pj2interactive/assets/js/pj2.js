$(document).ready(function() {
$(".inputdeco2").click(function(){
$(".interactiveframe").fadeIn("slow");
});


  var mySnow = ['a01', 'a02', 'a03', 'a04'];

  $(".inputdeco2").click(function(){
    var rand = mySnow[Math.floor(Math.random() * mySnow.length)];

    if(rand == 'a01'){
      $(".msheet1").addClass("popup");
      $(".msheet2").removeClass("popup");
      $(".msheet3").removeClass("popup");
      $(".msheet4").removeClass("popup");
    }
    if(rand == 'a02'){
      $(".msheet1").removeClass("popup");
      $(".msheet2").addClass("popup");
      $(".msheet3").removeClass("popup");
      $(".msheet4").removeClass("popup");
    }
    if(rand == 'a03'){
      $(".msheet1").removeClass("popup");
      $(".msheet2").removeClass("popup");
      $(".msheet3").addClass("popup");
      $(".msheet4").removeClass("popup");
    }
    if(rand == 'a04'){
      $(".msheet1").removeClass("popup");
      $(".msheet2").removeClass("popup");
      $(".msheet3").removeClass("popup");
      $(".msheet4").addClass("popup");
    }
    });


$('body').keydown(function(e){
  if(e.keyCode == 192){
    $("#xl000a")[0].currentTime=0;
    $("#xl000a")[0].play();
    $(".intrsplttexm").toggleClass('blinkmv');
  }
});

$('body').keydown(function(e){
  if(e.keyCode == 49){
    $("#xl00a")[0].currentTime=0;
    $("#xl00a")[0].play();
    $(".intrsplttq").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 81){
    $("#xl01")[0].currentTime=0;
    $("#xl01")[0].play();
    $(".intrsplttq").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 50){
    $("#xl01a")[0].currentTime=0;
    $("#xl01a")[0].play();
    $(".intrspltt2").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 87){
    $("#xl02")[0].currentTime=0;
    $("#xl02")[0].play();
    $(".intrsplttw").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 51){
    $("#xl000")[0].currentTime=0;
    $("#xl000")[0].play();
    $(".intrspltt3").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 69){
    $("#xl03")[0].currentTime=0;
    $("#xl03")[0].play();
    $(".intrspltte").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 52){
    $("#xl03a")[0].currentTime=0;
    $("#xl03a")[0].play();
    $(".intrspltt4").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 82){
    $("#xl04")[0].currentTime=0;
    $("#xl04")[0].play();
    $(".intrsplttr").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 53){
    $("#xl04a")[0].currentTime=0;
    $("#xl04a")[0].play();
    $(".intrspltt5").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 84){
    $("#xl05")[0].currentTime=0;
    $("#xl05")[0].play();
    $(".intrsplttt").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 54){
    $("#xl00")[0].currentTime=0;
    $("#xl00")[0].play();
    $(".intrspltt6").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 89){
    $("#xl06")[0].currentTime=0;
    $("#xl06")[0].play();
    $(".intrspltty").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 55){
    $("#xl06a")[0].currentTime=0;
    $("#xl06a")[0].play();
    $(".intrspltt7").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 85){
    $("#xl07")[0].currentTime=0;
    $("#xl07")[0].play();
    $(".intrsplttu").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 56){
    $("#xl07a")[0].currentTime=0;
    $("#xl07a")[0].play();
    $(".intrspltt8").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 73){
    $("#xl08")[0].currentTime=0;
    $("#xl08")[0].play();
    $(".intrspltti").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 57){
    $("#xl08a")[0].currentTime=0;
    $("#xl08a")[0].play();
    $(".intrspltt9").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 79){
    $("#xl09")[0].currentTime=0;
    $("#xl09")[0].play();
    $(".intrspltto").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 48){
    $("#xl00")[0].currentTime=0;
    $("#xl00")[0].play();
    $(".intrspltt0").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 80){
    $("#xl10")[0].currentTime=0;
    $("#xl10")[0].play();
    $(".intrsplttp").toggleClass('blinkmv');
  }
});
$('body').keydown(function(e){
  if(e.keyCode == 65){
    $("#xl10a")[0].currentTime=0;
    $("#xl10a")[0].play();
    $(".intrspltta").toggleClass('blinkmv');
  }
});
  $('body').keydown(function(e){
    if(e.keyCode == 68){
      $("#xl03")[0].currentTime=0;
      $("#xl03")[0].play();
      $(".intrsplttd").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 90){
      $("#xl11")[0].currentTime=0;
      $("#xl11")[0].play();
      $(".intrsplttz").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 83){
      $("#xl11a")[0].currentTime=0;
      $("#xl11a")[0].play();
      $(".intrspltts").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 88){
      $("#xl12")[0].currentTime=0;
      $("#xl12")[0].play();
      $(".intrsplttx").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 67){
      $("#xl13")[0].currentTime=0;
      $("#xl13")[0].play();
      $(".intrsplttc").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 70){
      $("#xl13a")[0].currentTime=0;
      $("#xl13a")[0].play();
      $(".intrsplttf").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 86){
      $("#xl14")[0].currentTime=0;
      $("#xl14")[0].play();
      $(".intrsplttv").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 71){
      $("#xl14a")[0].currentTime=0;
      $("#xl14a")[0].play();
      $(".intrsplttg").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 66){
      $("#xl15")[0].currentTime=0;
      $("#xl15")[0].play();
      $(".intrsplttb").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 72){
      $("#xl15a")[0].currentTime=0;
      $("#xl15a")[0].play();
      $(".intrspltth").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 78){
      $("#xl16")[0].currentTime=0;
      $("#xl16")[0].play();
      $(".intrsplttn").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 74){
      $("#xl000")[0].currentTime=0;
      $("#xl000")[0].play();
      $(".intrsplttj").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 77){
      $("#xl17")[0].currentTime=0;
      $("#xl17")[0].play();
      $(".intrsplttm").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 75){
      $("#xl17a")[0].currentTime=0;
      $("#xl17a")[0].play();
      $(".intrsplttk").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 188){
      $("#xl18")[0].currentTime=0;
      $("#xl18")[0].play();
      $(".intrsplttrest").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 76){
      $("#xl18a")[0].currentTime=0;
      $("#xl18a")[0].play();
      $(".intrsplttl").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 190){
      $("#xl19")[0].currentTime=0;
      $("#xl19")[0].play();
      $(".intrsplttstp").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 191){
      $("#xl20")[0].currentTime=0;
      $("#xl20")[0].play();
      $(".intrsplttqmk").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 186){
      $("#xl000")[0].currentTime=0;
      $("#xl000")[0].play();
      $(".intrsplttom").toggleClass('blinkmv');
    }
  });
  $('body').keydown(function(e){
    if(e.keyCode == 222){
      $("#xl00")[0].currentTime=0;
      $("#xl00")[0].play();
      $(".intrsplttcm").toggleClass('blinkmv');
    }
  });



});
