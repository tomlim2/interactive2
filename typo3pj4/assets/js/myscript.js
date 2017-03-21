// numbercounter---------

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

  $("#mvpoint1").click(function() {
  $('html, body').animate({
    scrollLeft: $("#mvpoint2").offset().left
  }, 1200);
  });



// cha1---------

  $(".cha1,.dot1").mouseenter(function() {
    $(".dot1").addClass('orangedot');
    $(".cha1").addClass('orangetext');
    $(".n00").addClass('fadeout');
    $(".n01").addClass('fadein');
    $(".pplnm0").addClass('count');

    $(".fireintromv").addClass('fadeout');
    $(".firea").addClass('firemv');

    $(".chuncheon").addClass('fadeout');
    $(".sokcho").addClass('fadeout');
    $(".gangneung").addClass('fadeout');
    $(".wonju").addClass('fadeout');
    $(".cheonju").addClass('fadeout');
    $(".daejeon").addClass('fadeout');
    $(".jeonju").addClass('fadeout');
    $(".gwangju").addClass('fadeout');
    $(".busan").addClass('fadeout');
    $(".daegu").addClass('fadeout');
    $(".jeju").addClass('fadeout');
  });
  $(".cha1,.dot1").mouseleave(function() {
    $(".dot1").removeClass('orangedot');
    $(".cha1").removeClass('orangetext');
    $(".n00").removeClass('fadeout');
    $(".n01").removeClass('fadein');
    $(".pplnm0").removeClass('count');

    $(".fireintromv").removeClass('fadeout');
    $(".firea").removeClass('firemv');

    $(".chuncheon").removeClass('fadeout');
    $(".sokcho").removeClass('fadeout');
    $(".gangneung").removeClass('fadeout');
    $(".wonju").removeClass('fadeout');
    $(".cheonju").removeClass('fadeout');
    $(".daejeon").removeClass('fadeout');
    $(".jeonju").removeClass('fadeout');
    $(".gwangju").removeClass('fadeout');
    $(".busan").removeClass('fadeout');
    $(".daegu").removeClass('fadeout');
    $(".jeju").removeClass('fadeout');
  });



// cha2---------
  $(".cha2,.dot2").mouseenter(function() {
    $(".dot2").addClass('orangedot');
    $(".cha2").addClass('orangetext');
    $(".n00").addClass('fadeout');
    $(".n02").addClass('fadein');

    $(".fireintromv").addClass('fadeout');
    $(".fireb").addClass('firemv');

    $(".pplnm0").addClass('count');

    $(".chuncheon").addClass('fadeout');
    $(".sokcho").addClass('fadeout');
    $(".gangneung").addClass('fadeout');
    $(".wonju").addClass('fadeout');
    $(".cheonju").addClass('fadeout');
    $(".daejeon").addClass('fadeout');
    $(".jeonju").addClass('fadeout');
    $(".gwangju").addClass('fadeout');
    $(".busan").addClass('fadeout');
    $(".daegu").addClass('fadeout');
    $(".jeju").addClass('fadeout');
  });
  $(".cha2,.dot2").mouseleave(function() {
    $(".dot2").removeClass('orangedot');
    $(".cha2").removeClass('orangetext');
    $(".n00").removeClass('fadeout');
    $(".n02").removeClass('fadein');

    $(".fireintromv").removeClass('fadeout');
    $(".fireb").removeClass('firemv');

    $(".pplnm0").removeClass('count');

    $(".chuncheon").removeClass('fadeout');
    $(".sokcho").removeClass('fadeout');
    $(".gangneung").removeClass('fadeout');
    $(".wonju").removeClass('fadeout');
    $(".cheonju").removeClass('fadeout');
    $(".daejeon").removeClass('fadeout');
    $(".jeonju").removeClass('fadeout');
    $(".gwangju").removeClass('fadeout');
    $(".busan").removeClass('fadeout');
    $(".daegu").removeClass('fadeout');
    $(".jeju").removeClass('fadeout');
  });


// cha3------
  $(".cha3,.dot3").mouseenter(function() {
    $(".dot3").addClass('orangedot');
    $(".cha3").addClass('orangetext');
    $(".n00").addClass('fadeout');
    $(".n03").addClass('fadein');

    $(".fireintromv").addClass('fadeout');
    $(".firec").addClass('firemv');

    $(".pplnm0").addClass('count');

    $(".chuncheon").addClass('fadeout');
    $(".sokcho").addClass('fadeout');
    $(".gangneung").addClass('fadeout');
    $(".wonju").addClass('fadeout');
    $(".cheonju").addClass('fadeout');
    $(".daejeon").addClass('fadeout');
    $(".jeonju").addClass('fadeout');
    $(".gwangju").addClass('fadeout');
    $(".busan").addClass('fadeout');
    $(".daegu").addClass('fadeout');
    $(".jeju").addClass('fadeout');
  });
  $(".cha3,.dot3").mouseleave(function() {
    $(".dot3").removeClass('orangedot');
    $(".cha3").removeClass('orangetext');
    $(".n00").removeClass('fadeout');
    $(".n03").removeClass('fadein');

    $(".fireintromv").removeClass('fadeout');
    $(".firec").removeClass('firemv');

    $(".pplnm0").removeClass('count');

    $(".chuncheon").removeClass('fadeout');
    $(".sokcho").removeClass('fadeout');
    $(".gangneung").removeClass('fadeout');
    $(".wonju").removeClass('fadeout');
    $(".cheonju").removeClass('fadeout');
    $(".daejeon").removeClass('fadeout');
    $(".jeonju").removeClass('fadeout');
    $(".gwangju").removeClass('fadeout');
    $(".busan").removeClass('fadeout');
    $(".daegu").removeClass('fadeout');
    $(".jeju").removeClass('fadeout');
  });


// cha4---------
  $(".cha4,.dot4").mouseenter(function() {
    $(".dot4").addClass('orangedot');
    $(".cha4").addClass('orangetext');
    $(".n00").addClass('fadeout');
    $(".n04").addClass('fadein');

    $(".fireintromv").addClass('fadeout');
    $(".fired").addClass('firemv');

    $(".pplnm0").addClass('count');
  });
  $(".cha4,.dot4").mouseleave(function() {
    $(".dot4").removeClass('orangedot');
    $(".cha4").removeClass('orangetext');
    $(".n00").removeClass('fadeout');
    $(".n04").removeClass('fadein');

    $(".fireintromv").removeClass('fadeout');
    $(".fired").removeClass('firemv');

    $(".pplnm0").removeClass('count');
  });


  // cha5---------
    $(".cha5,.dot5").mouseenter(function() {
      $(".dot5").addClass('orangedot');
      $(".cha5").addClass('orangetext');
      $(".n00").addClass('fadeout');
      $(".n05").addClass('fadein');

      $(".fireintromv").addClass('fadeout');
      $(".firee").addClass('firemv');

      $(".pplnm0").addClass('count');

      $(".sokcho").addClass('fadeout');
      $(".gangneung").addClass('fadeout');
      $(".wonju").addClass('fadeout');
      $(".cheonju").addClass('fadeout');
      $(".daejeon").addClass('fadeout');
      $(".jeonju").addClass('fadeout');
    });
    $(".cha5,.dot5").mouseleave(function() {
      $(".dot5").removeClass('orangedot');
      $(".cha5").removeClass('orangetext');
      $(".n00").removeClass('fadeout');
      $(".n05").removeClass('fadein');

      $(".fireintromv").removeClass('fadeout');
      $(".firee").removeClass('firemv');

      $(".pplnm0").removeClass('count');

      $(".sokcho").removeClass('fadeout');
      $(".gangneung").removeClass('fadeout');
      $(".wonju").removeClass('fadeout');
      $(".cheonju").removeClass('fadeout');
      $(".daejeon").removeClass('fadeout');
      $(".jeonju").removeClass('fadeout');
    });


      // cha6---------
        $(".cha6,.dot6").mouseenter(function() {
          $(".dot6").addClass('orangedot');
          $(".cha6").addClass('orangetext');
          $(".n00").addClass('fadeout');
          $(".n06").addClass('fadein');

          $(".fireintromv").addClass('fadeout');
          $(".firecha6").addClass('firemv');

          $(".pplnm0").addClass('count');

          $(".sokcho").addClass('fadeout');
          $(".gangneung").addClass('fadeout');
          $(".wonju").addClass('fadeout');
        });
        $(".cha6,.dot6").mouseleave(function() {
          $(".dot6").removeClass('orangedot');
          $(".cha6").removeClass('orangetext');
          $(".n00").removeClass('fadeout');
          $(".n06").removeClass('fadein');

          $(".fireintromv").removeClass('fadeout');
          $(".firecha6").removeClass('firemv');

          $(".pplnm0").removeClass('count');

          $(".sokcho").removeClass('fadeout');
          $(".gangneung").removeClass('fadeout');
          $(".wonju").removeClass('fadeout');
        });


// cha7------
        $(".cha7,.dot7").mouseenter(function() {
          $(".dot7").addClass('orangedot');
          $(".cha7").addClass('orangetext');
          $(".n00").addClass('fadeout');
          $(".n07").addClass('fadein');

          $(".fireintromv").addClass('fadeout');
          $(".firecha7").addClass('firemv');

          $(".pplnm0").addClass('count');

          $(".jeonju").addClass('fadeout');
        });
        $(".cha7,.dot7").mouseleave(function() {
          $(".dot7").removeClass('orangedot');
          $(".cha7").removeClass('orangetext');
          $(".n00").removeClass('fadeout');
          $(".n07").removeClass('fadein');

          $(".fireintromv").removeClass('fadeout');
          $(".firecha7").removeClass('firemv');

          $(".pplnm0").removeClass('count');

          $(".jeonju").removeClass('fadeout');
        });

// cha8
        $(".cha8,.dot8").mouseenter(function() {
          $(".dot8").addClass('orangedot');
          $(".cha8").addClass('orangetext');
          $(".n00").addClass('fadeout');
          $(".n08").addClass('fadein');

          $(".fireintromv").addClass('fadeout');
          $(".firecha8").addClass('firemv');

          $(".pplnm0").addClass('count');

          $(".sokcho").addClass('fadeout');
          $(".gangneung").addClass('fadeout');
        });
        $(".cha8,.dot8").mouseleave(function() {
          $(".dot8").removeClass('orangedot');
          $(".cha8").removeClass('orangetext');
          $(".n00").removeClass('fadeout');
          $(".n08").removeClass('fadein');

          $(".fireintromv").removeClass('fadeout');
          $(".firecha8").removeClass('firemv');

          $(".pplnm0").removeClass('count');

          $(".sokcho").removeClass('fadeout');
          $(".gangneung").removeClass('fadeout');
        });

// cha9-----

  $(".cha9,.dot9").mouseenter(function() {
    $(".dot9").addClass('orangedot');
    $(".cha9").addClass('orangetext');
    $(".n00").addClass('fadeout');
    $(".n09").addClass('fadein');
    $(".pplnm0").addClass('count');

    $(".fireintromv").addClass('fadeout');
    $(".firecha9").addClass('firemv');

    $(".chuncheon").addClass('fadeout');
    $(".sokcho").addClass('fadeout');
    $(".gangneung").addClass('fadeout');
    $(".wonju").addClass('fadeout');
    $(".cheonju").addClass('fadeout');
    $(".daejeon").addClass('fadeout');
    $(".jeonju").addClass('fadeout');
    $(".gwangju").addClass('fadeout');
    $(".daegu").addClass('fadeout');
    $(".jeju").addClass('fadeout');
  });
  $(".cha9,.dot9").mouseleave(function() {
    $(".dot9").removeClass('orangedot');
    $(".cha9").removeClass('orangetext');
    $(".n00").removeClass('fadeout');
    $(".n09").removeClass('fadein');

    $(".fireintromv").removeClass('fadeout');
    $(".firecha9").removeClass('firemv');

    $(".pplnm0").removeClass('count');

    $(".chuncheon").removeClass('fadeout');
    $(".sokcho").removeClass('fadeout');
    $(".gangneung").removeClass('fadeout');
    $(".wonju").removeClass('fadeout');
    $(".cheonju").removeClass('fadeout');
    $(".daejeon").removeClass('fadeout');
    $(".jeonju").removeClass('fadeout');
    $(".gwangju").removeClass('fadeout');
    $(".daegu").removeClass('fadeout');
    $(".jeju").removeClass('fadeout');
  });



// cha10--------
$(".cha10,.dot10").mouseenter(function() {
  $(".dot10").addClass('orangedot');
  $(".cha10").addClass('orangetext');
  $(".n00").addClass('fadeout');
  $(".n10").addClass('fadein');
  $(".pplnm0").addClass('count');

  $(".fireintromv").addClass('fadeout');
  $(".firecha10").addClass('firemv');

  $(".chuncheon").addClass('fadeout');
  $(".sokcho").addClass('fadeout');
  $(".gangneung").addClass('fadeout');
  $(".wonju").addClass('fadeout');
  $(".cheonju").addClass('fadeout');
  $(".daejeon").addClass('fadeout');
  $(".jeonju").addClass('fadeout');
  $(".busan").addClass('fadeout');
  $(".jeju").addClass('fadeout');
});
$(".cha10,.dot10").mouseleave(function() {
  $(".dot10").removeClass('orangedot');
  $(".cha10").removeClass('orangetext');
  $(".n00").removeClass('fadeout');
  $(".n10").removeClass('fadein');

  $(".fireintromv").removeClass('fadeout');
  $(".firecha10").removeClass('firemv');

  $(".pplnm0").removeClass('count');

  $(".chuncheon").removeClass('fadeout');
  $(".sokcho").removeClass('fadeout');
  $(".gangneung").removeClass('fadeout');
  $(".wonju").removeClass('fadeout');
  $(".cheonju").removeClass('fadeout');
  $(".daejeon").removeClass('fadeout');
  $(".jeonju").removeClass('fadeout');
  $(".busan").removeClass('fadeout');
  $(".jeju").removeClass('fadeout');
});



// cha11----------------

  $(".cha11,.dot11").mouseenter(function() {
    $(".dot11").addClass('orangedot');
    $(".cha11").addClass('orangetext');
    $(".n00").addClass('fadeout');
    $(".n11").addClass('fadein');
    $(".pplnm0").addClass('count');

    $(".fireintromv").addClass('fadeout');
    $(".firecha11").addClass('firemv');

    $(".sokcho").addClass('fadeout');
    $(".jeonju").addClass('fadeout');
  });
  $(".cha11,.dot11").mouseleave(function() {
    $(".dot11").removeClass('orangedot');
    $(".cha11").removeClass('orangetext');
    $(".n00").removeClass('fadeout');
    $(".n11").removeClass('fadein');

    $(".fireintromv").removeClass('fadeout');
    $(".firecha11").removeClass('firemv');

    $(".pplnm0").removeClass('count');

    $(".sokcho").removeClass('fadeout');
    $(".jeonju").removeClass('fadeout');
  });



  $(".cha12,.dot12").mouseenter(function() {
    $(".dot12").addClass('orangedot');
    $(".cha12").addClass('orangetext');
    $(".n00").addClass('fadeout');
    $(".n12").addClass('fadein');
    $(".pplnm0").addClass('count');

    $(".fireintromv").addClass('fadeout');
    $(".firecha12").addClass('firemv');

    $(".chuncheon").addClass('fadeout');
    $(".sokcho").addClass('fadeout');
    $(".gangneung").addClass('fadeout');
    $(".wonju").addClass('fadeout');
    $(".cheonju").addClass('fadeout');
    $(".daejeon").addClass('fadeout');
    $(".jeonju").addClass('fadeout');
    $(".gwangju").addClass('fadeout');
    $(".busan").addClass('fadeout');
    $(".jeju").addClass('fadeout');
  });
  $(".cha12,.dot12").mouseleave(function() {
    $(".dot12").removeClass('orangedot');
    $(".cha12").removeClass('orangetext');
    $(".n00").removeClass('fadeout');
    $(".n12").removeClass('fadein');
    $(".pplnm0").removeClass('count');

    $(".fireintromv").removeClass('fadeout');
    $(".firecha12").removeClass('firemv');

    $(".chuncheon").removeClass('fadeout');
    $(".sokcho").removeClass('fadeout');
    $(".gangneung").removeClass('fadeout');
    $(".wonju").removeClass('fadeout');
    $(".cheonju").removeClass('fadeout');
    $(".daejeon").removeClass('fadeout');
    $(".jeonju").removeClass('fadeout');
    $(".gwangju").removeClass('fadeout');
    $(".busan").removeClass('fadeout');
    $(".jeju").removeClass('fadeout');
  });


  // cha13/////////////
  $(".cha13,.dot13").mouseenter(function() {
    $(".dot13").addClass('orangedot');
    $(".cha13").addClass('orangetext');
    $(".n00").addClass('fadeout');
    $(".n13").addClass('fadein');
    $(".pplnm0").addClass('count');

    $(".fireintromv").addClass('fadeout');
    $(".firecha13").addClass('firemv');

    $(".chuncheon").addClass('fadeout');
    $(".sokcho").addClass('fadeout');
    $(".gangneung").addClass('fadeout');
    $(".cheonju").addClass('fadeout');
    $(".daejeon").addClass('fadeout');
    $(".gwangju").addClass('fadeout');

  });
  $(".cha13,.dot13").mouseleave(function() {
    $(".dot13").removeClass('orangedot');
    $(".cha13").removeClass('orangetext');
    $(".n00").removeClass('fadeout');
    $(".n13").removeClass('fadein');
    $(".pplnm0").removeClass('count');

    $(".fireintromv").removeClass('fadeout');
    $(".firecha13").removeClass('firemv');

    $(".chuncheon").removeClass('fadeout');
    $(".sokcho").removeClass('fadeout');
    $(".gangneung").removeClass('fadeout');
    $(".cheonju").removeClass('fadeout');
    $(".daejeon").removeClass('fadeout');
    $(".gwangju").removeClass('fadeout');

  });


// 14차 집회x---------------------
    $(".cha14,.dot14").mouseenter(function() {
      $(".dot14").addClass('orangedot');
      $(".cha14").addClass('orangetext');

      $(".n14").addClass('fadein');
      $(".n00").addClass('fadeout');

      $(".fireintromv").addClass('fadeout');
    });
    $(".cha14,.dot14").mouseleave(function() {
      $(".dot14").removeClass('orangedot');
      $(".cha14").removeClass('orangetext');

      $(".n14").removeClass('fadein');
      $(".n00").removeClass('fadeout');

      $(".fireintromv").removeClass('fadeout');
    });


// 15차
  $(".cha15,.dot15").mouseenter(function() {
    $(".dot15").addClass('orangedot');
    $(".cha15").addClass('orangetext');
    $(".n00").addClass('fadeout');
    $(".n15").addClass('fadein');
    $(".pplnm0").addClass('count');

    $(".fireintromv").addClass('fadeout');
    $(".firecha15").addClass('firemv');

    $(".chuncheon").addClass('fadeout');
    $(".sokcho").addClass('fadeout');
    $(".gangneung").addClass('fadeout');
    $(".cheonju").addClass('fadeout');
    $(".daejeon").addClass('fadeout');
    $(".jeonju").addClass('fadeout');
    $(".jeju").addClass('fadeout');
  });
  $(".cha15,.dot15").mouseleave(function() {
    $(".dot15").removeClass('orangedot');
    $(".cha15").removeClass('orangetext');
    $(".n00").removeClass('fadeout');
    $(".n15").removeClass('fadein');
    $(".pplnm0").removeClass('count');

    $(".fireintromv").removeClass('fadeout');
    $(".firecha15").removeClass('firemv');

    $(".chuncheon").removeClass('fadeout');
    $(".sokcho").removeClass('fadeout');
    $(".gangneung").removeClass('fadeout');
    $(".cheonju").removeClass('fadeout');
    $(".daejeon").removeClass('fadeout');
    $(".jeonju").removeClass('fadeout');
    $(".jeju").removeClass('fadeout');
  });
// cha16/////////////

$(".cha16,.dot16").mouseenter(function() {
  $(".dot16").addClass('orangedot');
  $(".cha16").addClass('orangetext');
  $(".n00").addClass('fadeout');
  $(".n16").addClass('fadein');
  $(".pplnm0").addClass('count');

  $(".fireintromv").addClass('fadeout');
  $(".firecha16").addClass('firemv');

  $(".chuncheon").addClass('fadeout');
  $(".sokcho").addClass('fadeout');
  $(".gangneung").addClass('fadeout');
  $(".wonju").addClass('fadeout');
  $(".cheonju").addClass('fadeout');
  $(".daejeon").addClass('fadeout');
  $(".jeonju").addClass('fadeout');
  $(".gwangju").addClass('fadeout');
  $(".daegu").addClass('fadeout');
  $(".jeju").addClass('fadeout');
});
$(".cha16,.dot16").mouseleave(function() {
  $(".dot16").removeClass('orangedot');
  $(".cha16").removeClass('orangetext');
  $(".n00").removeClass('fadeout');
  $(".n16").removeClass('fadein');
  $(".pplnm0").removeClass('count');

  $(".fireintromv").removeClass('fadeout');
  $(".firecha16").removeClass('firemv');

  $(".chuncheon").removeClass('fadeout');
  $(".sokcho").removeClass('fadeout');
  $(".gangneung").removeClass('fadeout');
  $(".wonju").removeClass('fadeout');
  $(".cheonju").removeClass('fadeout');
  $(".daejeon").removeClass('fadeout');
  $(".jeonju").removeClass('fadeout');
  $(".gwangju").removeClass('fadeout');
  $(".daegu").removeClass('fadeout');
  $(".jeju").removeClass('fadeout');
});


// cha17/////////////
$(".cha17,.dot17").mouseenter(function() {
  $(".dot17").addClass('orangedot');
  $(".cha17").addClass('orangetext');
  $(".n00").addClass('fadeout');
  $(".n17").addClass('fadein');
  $(".pplnm0").addClass('count');

  $(".fireintromv").addClass('fadeout');
  $(".firecha17").addClass('firemv');

  $(".sokcho").addClass('fadeout');
  $(".gangneung").addClass('fadeout');
  $(".wonju").addClass('fadeout');
  $(".cheonju").addClass('fadeout');
  $(".daejeon").addClass('fadeout');
  $(".jeonju").addClass('fadeout');
  $(".gwangju").addClass('fadeout');
  $(".daegu").addClass('fadeout');
  $(".jeju").addClass('fadeout');
});
$(".cha17,.dot17").mouseleave(function() {
  $(".dot17").removeClass('orangedot');
  $(".cha17").removeClass('orangetext');
  $(".n00").removeClass('fadeout');
  $(".n17").removeClass('fadein');
  $(".pplnm0").removeClass('count');

  $(".fireintromv").removeClass('fadeout');
  $(".firecha17").removeClass('firemv');

  $(".sokcho").removeClass('fadeout');
  $(".gangneung").removeClass('fadeout');
  $(".wonju").removeClass('fadeout');
  $(".cheonju").removeClass('fadeout');
  $(".daejeon").removeClass('fadeout');
  $(".jeonju").removeClass('fadeout');
  $(".gwangju").removeClass('fadeout');
  $(".daegu").removeClass('fadeout');
  $(".jeju").removeClass('fadeout');
});

// cha18/////////////

$(".cha18,.dot18").mouseenter(function() {
  $(".dot18").addClass('orangedot');
  $(".cha18").addClass('orangetext');
  $(".n00").addClass('fadeout');
  $(".n18").addClass('fadein');
  $(".pplnm0").addClass('count');

  $(".fireintromv").addClass('fadeout');
  $(".firecha18").addClass('firemv');

  $(".chuncheon").addClass('fadeout');
  $(".sokcho").addClass('fadeout');
  $(".gangneung").addClass('fadeout');
  $(".wonju").addClass('fadeout');
  $(".cheonju").addClass('fadeout');
  $(".daejeon").addClass('fadeout');
  $(".jeonju").addClass('fadeout');
  $(".jeju").addClass('fadeout');
});
$(".cha18,.dot18").mouseleave(function() {
  $(".dot18").removeClass('orangedot');
  $(".cha18").removeClass('orangetext');
  $(".n00").removeClass('fadeout');
  $(".n18").removeClass('fadein');
  $(".pplnm0").removeClass('count');

  $(".fireintromv").removeClass('fadeout');
  $(".firecha18").removeClass('firemv');

  $(".chuncheon").removeClass('fadeout');
  $(".sokcho").removeClass('fadeout');
  $(".gangneung").removeClass('fadeout');
  $(".wonju").removeClass('fadeout');
  $(".cheonju").removeClass('fadeout');
  $(".daejeon").removeClass('fadeout');
  $(".jeonju").removeClass('fadeout');
  $(".jeju").removeClass('fadeout');
});


// cha19/////////////
$(".cha19,.dot19").mouseenter(function() {
  $(".dot19").addClass('orangedot');
  $(".cha19").addClass('orangetext');
  $(".n00").addClass('fadeout');
  $(".n19").addClass('fadein');
  $(".pplnm0").addClass('count');

  $(".fireintromv").addClass('fadeout');
  $(".firecha19").addClass('firemv');

  $(".chuncheon").addClass('fadeout');
  $(".sokcho").addClass('fadeout');
  $(".gangneung").addClass('fadeout');
  $(".wonju").addClass('fadeout');
  $(".cheonju").addClass('fadeout');
  $(".daejeon").addClass('fadeout');
  $(".jeonju").addClass('fadeout');
  $(".gwangju").addClass('fadeout');
  $(".busan").addClass('fadeout');
  $(".daegu").addClass('fadeout');
  $(".jeju").addClass('fadeout');
});
$(".cha19,.dot19").mouseleave(function() {
  $(".dot19").removeClass('orangedot');
  $(".cha19").removeClass('orangetext');
  $(".n00").removeClass('fadeout');
  $(".n19").removeClass('fadein');
  $(".pplnm0").removeClass('count');

  $(".fireintromv").removeClass('fadeout');
  $(".firecha19").removeClass('firemv');

  $(".chuncheon").removeClass('fadeout');
  $(".sokcho").removeClass('fadeout');
  $(".gangneung").removeClass('fadeout');
  $(".wonju").removeClass('fadeout');
  $(".cheonju").removeClass('fadeout');
  $(".daejeon").removeClass('fadeout');
  $(".jeonju").removeClass('fadeout');
  $(".gwangju").removeClass('fadeout');
  $(".busan").removeClass('fadeout');
  $(".daegu").removeClass('fadeout');
  $(".jeju").removeClass('fadeout');
});

// cha20/////////////
$(".cha20,.dot20").mouseenter(function() {
  $(".dot20").addClass('orangedot');
  $(".cha20").addClass('orangetext');
  $(".n00").addClass('fadeout');
  $(".n20").addClass('fadein');
  $(".pplnm0").addClass('count');

  $(".fireintromv").addClass('fadeout');
  $(".firecha20").addClass('firemv');

  $(".chuncheon").addClass('fadeout');
  $(".sokcho").addClass('fadeout');
  $(".gangneung").addClass('fadeout');
  $(".wonju").addClass('fadeout');
  $(".cheonju").addClass('fadeout');
  $(".daejeon").addClass('fadeout');
  $(".jeonju").addClass('fadeout');
  $(".daegu").addClass('fadeout');
});
$(".cha20,.dot20").mouseleave(function() {
  $(".dot20").removeClass('orangedot');
  $(".cha20").removeClass('orangetext');
  $(".n00").removeClass('fadeout');
  $(".n20").removeClass('fadein');
  $(".pplnm0").removeClass('count');

  $(".fireintromv").removeClass('fadeout');
  $(".firecha20").removeClass('firemv');

  $(".chuncheon").removeClass('fadeout');
  $(".sokcho").removeClass('fadeout');
  $(".gangneung").removeClass('fadeout');
  $(".wonju").removeClass('fadeout');
  $(".cheonju").removeClass('fadeout');
  $(".daejeon").removeClass('fadeout');
  $(".jeonju").removeClass('fadeout');
  $(".daegu").removeClass('fadeout');
});
// cha21/////////////
$(".cha21,.dot21").mouseenter(function() {
  $(".dot21").addClass('orangedot');
  $(".cha21").addClass('orangetext');
  $(".n00").addClass('fadeout');
  $(".n21").addClass('fadein');
  $(".pplnm0").addClass('count');

  $(".fireintromv").addClass('fadeout');
  $(".firecha21").addClass('firemv');

  $(".chuncheon").addClass('fadeout');
  $(".sokcho").addClass('fadeout');
  $(".gangneung").addClass('fadeout');
  $(".wonju").addClass('fadeout');
  $(".cheonju").addClass('fadeout');
  $(".daejeon").addClass('fadeout');
  $(".jeonju").addClass('fadeout');
  $(".gwangju").addClass('fadeout');
  $(".busan").addClass('fadeout');
  $(".daegu").addClass('fadeout');
  $(".jeju").addClass('fadeout');
});
$(".cha21,.dot21").mouseleave(function() {
  $(".dot21").removeClass('orangedot');
  $(".cha21").removeClass('orangetext');
  $(".n00").removeClass('fadeout');
  $(".n21").removeClass('fadein');
  $(".pplnm0").removeClass('count');

  $(".fireintromv").removeClass('fadeout');
  $(".firecha21").removeClass('firemv');

  $(".chuncheon").removeClass('fadeout');
  $(".sokcho").removeClass('fadeout');
  $(".gangneung").removeClass('fadeout');
  $(".wonju").removeClass('fadeout');
  $(".cheonju").removeClass('fadeout');
  $(".daejeon").removeClass('fadeout');
  $(".jeonju").removeClass('fadeout');
  $(".gwangju").removeClass('fadeout');
  $(".busan").removeClass('fadeout');
  $(".daegu").removeClass('fadeout');
  $(".jeju").removeClass('fadeout');
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
