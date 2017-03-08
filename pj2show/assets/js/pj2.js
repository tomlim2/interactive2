$(document).ready(function() {

  $(".sfbaseframe1").click(function(){
    $(".bgccr").addClass('bgccrmv');

    $(".sfbaseframe12").addClass('spfa02mv');
    $(".sfbaseframe13").addClass('spfa03mv');
    $(".sfbaseframe14").addClass('spfa04mv');
    $(".sfbaseframe15").addClass('spfa05mv');
    $(".sfbaseframe16").addClass('spfa06mv');
    $(".sfbaseframe17").addClass('spfa07mv');
    $(".sfbaseframe1").removeClass('spfa00mv');
    $(".sfbaseframe1").addClass('spfa01mv');

    $(".sfbaseframe0").addClass('revealmv');

    $(".fsspltta").addClass('spfsmv1');
    $(".fssplttb").addClass('spfsmv2');
    $(".fssplttc").addClass('spfsmv3');
    $(".fssplttd").addClass('spfsmv4');
    $(".fsspltte").addClass('spfsmv5');

    $(".fssplttf").addClass('spfsmv6');
    $(".fssplttg").addClass('spfsmv7');
    $(".fsspltth").addClass('spfsmv8');
    $(".fsspltti").addClass('spfsmv9');
    $(".fssplttj").addClass('spfsmv10');

    $(".fssplttk").addClass('spfsmv11');
    $(".fssplttl").addClass('spfsmv12');
    $(".fssplttm").addClass('spfsmv13');
    $(".fssplttn").addClass('spfsmv14');
    $(".fsspltto").addClass('spfsmv15');

    $(".fssplttp").addClass('spfsmv16');
    $(".fssplttq").addClass('spfsmv17');
    $(".fssplttr").addClass('spfsmv18');
    $(".fsspltts").addClass('spfsmv19');
    $(".fssplttt").addClass('spfsmv20');

    $(".fssplttu").addClass('spfsmv21');
    $(".fssplttv").addClass('spfsmv22');
    $(".fssplttw").addClass('spfsmv23');
    $(".fssplttx").addClass('spfsmv24');
    $(".fsspltty").addClass('spfsmv25');
    $(".fssplttz").addClass('spfsmv26');
    $(".fsspltt0").addClass('spfsmv27');
    $(".fsspltt1").addClass('spfsmv28');
    $(".fsspltt2").addClass('spfsmv29');
    $(".fsspltt3").addClass('spfsmv30');

    $(".fsspltt4").addClass('spfsmv31');
    $(".fsspltt5").addClass('spfsmv32');
    $(".fsspltt6").addClass('spfsmv33');
    $(".fsspltt7").addClass('spfsmv34');
    $(".fsspltt8").addClass('spfsmv35');
    $(".fsspltt9").addClass('spfsmv36');
    $(".fssplttstp").addClass('spfsmv37');
    $(".fssplttexm").addClass('spfsmv38');
    $(".fssplttqmk").addClass('spfsmv39');
    $(".fssplttrest").addClass('spfsmv40');
  });




  var mySnow = ['a01', 'a02', 'a03', 'a04', 'a05', 'a06', 'a07', 'a08', 'a09', 'a10', 'a11', 'a12', 'a13', 'a14', 'a15', 'a16', 'a17', 'a18', 'a19', 'a20', 'a21', 'a22', 'a23', 'a24'];

  $(".sfbaseframe0").click(function(){
    var rand = mySnow[Math.floor(Math.random() * mySnow.length)];
    // pack1
    if(rand == 'a01'){
      $(".spltta").toggleClass('snowmvr1');
      $(".splttb").toggleClass('snowmvr2');
      $(".splttc").toggleClass('snowmvr3');
      $(".splttd").toggleClass('snowmvr4');
      $(".spltte").toggleClass('snowmvr5');
    }
    if(rand == 'a02'){
      $(".splttf").toggleClass('snowmvr6');
      $(".splttg").toggleClass('snowmvr7');
      $(".spltth").toggleClass('snowmvr8');
      $(".spltti").toggleClass('snowmvr9');
      $(".splttj").toggleClass('snowmvr10');
    }
    if(rand == 'a03'){
      $(".splttk").toggleClass('snowmvr11');
      $(".splttl").toggleClass('snowmvr12');
      $(".splttm").toggleClass('snowmvr13');
      $(".splttn").toggleClass('snowmvr14');
      $(".spltto").toggleClass('snowmvr15');
    }
    if(rand == 'a04'){
      $(".splttp").toggleClass('snowmvr16');
      $(".splttq").toggleClass('snowmvr17');
      $(".splttr").toggleClass('snowmvr18');
      $(".spltts").toggleClass('snowmvr19');
      $(".splttt").toggleClass('snowmvr20');
    }
    if(rand == 'a05'){
      $(".splttu").toggleClass('snowmvr21');
      $(".splttv").toggleClass('snowmvr22');
      $(".splttw").toggleClass('snowmvr23');
      $(".splttx").toggleClass('snowmvr24');
      $(".spltty").toggleClass('snowmvr25');
      $(".splttz").toggleClass('snowmvr26');
      $(".spltt0").toggleClass('snowmvr27');
      $(".spltt1").toggleClass('snowmvr28');
      $(".spltt2").toggleClass('snowmvr29');
      $(".spltt3").toggleClass('snowmvr30');
    }
    if(rand == 'a06'){
      $(".spltt4").toggleClass('snowmvr31');
      $(".spltt5").toggleClass('snowmvr32');
      $(".spltt6").toggleClass('snowmvr33');
      $(".spltt7").toggleClass('snowmvr34');
      $(".spltt8").toggleClass('snowmvr35');
      $(".spltt9").toggleClass('snowmvr36');
      $(".splttstp").toggleClass('snowmvr37');
      $(".splttexm").toggleClass('snowmvr38');
      $(".splttqmk").toggleClass('snowmvr39');
      $(".splttrest").toggleClass('snowmvr40');
    }

    // pack2
    if(rand == 'a07'){
      $(".asplttcm").toggleClass('asnowmvr1');
      $(".asplttom").toggleClass('asnowmvr2');
      $(".asplttrest").toggleClass('asnowmvr3');
      $(".asplttqmk").toggleClass('asnowmvr4');
      $(".asplttexm").toggleClass('asnowmvr5');
    }
    if(rand == 'a08'){
      $(".aspltta").toggleClass('asnowmvr6');
      $(".asplttb").toggleClass('asnowmvr7');
      $(".asplttc").toggleClass('asnowmvr8');
      $(".asplttd").toggleClass('asnowmvr9');
      $(".aspltte").toggleClass('asnowmvr10');
    }
    if(rand == 'a09'){
      $(".asplttf").toggleClass('asnowmvr11');
      $(".asplttg").toggleClass('asnowmvr12');
      $(".aspltth").toggleClass('asnowmvr13');
      $(".aspltti").toggleClass('asnowmvr14');
      $(".asplttj").toggleClass('asnowmvr15');
    }
    if(rand == 'a10'){
      $(".aspltt0").toggleClass('asnowmvr16');
      $(".aspltt1").toggleClass('asnowmvr17');
      $(".aspltt2").toggleClass('asnowmvr18');
      $(".aspltt3").toggleClass('asnowmvr19');
      $(".aspltt4").toggleClass('asnowmvr20');
    }
    if(rand == 'a11'){
      $(".aspltt5").toggleClass('asnowmvr21');
      $(".aspltt6").toggleClass('asnowmvr22');
      $(".aspltt7").toggleClass('asnowmvr23');
      $(".aspltt8").toggleClass('asnowmvr24');
      $(".aspltt9").toggleClass('asnowmvr25');
      $(".asplttk").toggleClass('asnowmvr26');
      $(".asplttl").toggleClass('asnowmvr27');
      $(".asplttm").toggleClass('asnowmvr28');
      $(".asplttn").toggleClass('asnowmvr29');
      $(".aspltto").toggleClass('asnowmvr30');
    }
    if(rand == 'a12'){
      $(".asplttp").toggleClass('asnowmvr31');
      $(".asplttq").toggleClass('asnowmvr32');
      $(".asplttr").toggleClass('asnowmvr33');
      $(".aspltts").toggleClass('asnowmvr34');
      $(".asplttt").toggleClass('asnowmvr35');
      $(".asplttu").toggleClass('asnowmvr36');
      $(".asplttv").toggleClass('asnowmvr37');
      $(".asplttw").toggleClass('asnowmvr38');
      $(".asplttx").toggleClass('asnowmvr39');
      $(".aspltty").toggleClass('asnowmvr40');
    }


    // pack3
    if(rand == 'a13'){
      $(".bspltta").toggleClass('snowmvr1');
      $(".bsplttb").toggleClass('snowmvr2');
      $(".bsplttc").toggleClass('snowmvr3');
      $(".bsplttd").toggleClass('snowmvr4');
      $(".bspltte").toggleClass('snowmvr5');
    }
    if(rand == 'a14'){
      $(".bsplttf").toggleClass('snowmvr6');
      $(".bsplttg").toggleClass('snowmvr7');
      $(".bspltth").toggleClass('snowmvr8');
      $(".bspltti").toggleClass('snowmvr9');
      $(".bsplttj").toggleClass('snowmvr10');
    }
    if(rand == 'a15'){
      $(".bsplttk").toggleClass('snowmvr11');
      $(".bsplttl").toggleClass('snowmvr12');
      $(".bsplttm").toggleClass('snowmvr13');
      $(".bsplttn").toggleClass('snowmvr14');
      $(".bspltto").toggleClass('snowmvr15');
    }
    if(rand == 'a16'){
      $(".bsplttp").toggleClass('snowmvr16');
      $(".bsplttq").toggleClass('snowmvr17');
      $(".bsplttr").toggleClass('snowmvr18');
      $(".bspltts").toggleClass('snowmvr19');
      $(".bsplttt").toggleClass('snowmvr20');
    }
    if(rand == 'a17'){
      $(".bsplttu").toggleClass('snowmvr21');
      $(".bsplttv").toggleClass('snowmvr22');
      $(".bsplttw").toggleClass('snowmvr23');
      $(".bsplttx").toggleClass('snowmvr24');
      $(".bspltty").toggleClass('snowmvr25');
      $(".bsplttz").toggleClass('snowmvr26');
      $(".bspltt0").toggleClass('snowmvr27');
      $(".bspltt1").toggleClass('snowmvr28');
      $(".bspltt2").toggleClass('snowmvr29');
      $(".bspltt3").toggleClass('snowmvr30');
    }
    if(rand == 'a18'){
      $(".bspltt4").toggleClass('snowmvr31');
      $(".bspltt5").toggleClass('snowmvr32');
      $(".bspltt6").toggleClass('snowmvr33');
      $(".bspltt7").toggleClass('snowmvr34');
      $(".bspltt8").toggleClass('snowmvr35');
      $(".bspltt9").toggleClass('snowmvr36');
      $(".bsplttstp").toggleClass('snowmvr37');
      $(".bsplttexm").toggleClass('snowmvr38');
      $(".bsplttqmk").toggleClass('snowmvr39');
      $(".bsplttrest").toggleClass('snowmvr40');
    }


    // pack4
    if(rand == 'a19'){
      $(".csplttcm").toggleClass('asnowmvr1');
      $(".csplttom").toggleClass('asnowmvr2');
      $(".csplttrest").toggleClass('asnowmvr3');
      $(".csplttqmk").toggleClass('asnowmvr4');
      $(".csplttexm").toggleClass('asnowmvr5');
    }
    if(rand == 'a20'){
      $(".cspltta").toggleClass('asnowmvr6');
      $(".csplttb").toggleClass('asnowmvr7');
      $(".csplttc").toggleClass('asnowmvr8');
      $(".csplttd").toggleClass('asnowmvr9');
      $(".cspltte").toggleClass('asnowmvr10');
    }
    if(rand == 'a21'){
      $(".csplttf").toggleClass('asnowmvr11');
      $(".csplttg").toggleClass('asnowmvr12');
      $(".cspltth").toggleClass('asnowmvr13');
      $(".cspltti").toggleClass('asnowmvr14');
      $(".csplttj").toggleClass('asnowmvr15');
    }
    if(rand == 'a22'){
      $(".cspltt0").toggleClass('asnowmvr16');
      $(".cspltt1").toggleClass('asnowmvr17');
      $(".cspltt2").toggleClass('asnowmvr18');
      $(".cspltt3").toggleClass('asnowmvr19');
      $(".cspltt4").toggleClass('asnowmvr20');
    }
    if(rand == 'a23'){
      $(".cspltt5").toggleClass('asnowmvr21');
      $(".cspltt6").toggleClass('asnowmvr22');
      $(".cspltt7").toggleClass('asnowmvr23');
      $(".cspltt8").toggleClass('asnowmvr24');
      $(".cspltt9").toggleClass('asnowmvr25');
      $(".csplttk").toggleClass('asnowmvr26');
      $(".csplttl").toggleClass('asnowmvr27');
      $(".csplttm").toggleClass('asnowmvr28');
      $(".csplttn").toggleClass('asnowmvr29');
      $(".cspltto").toggleClass('asnowmvr30');
    }
    if(rand == 'a24'){
      $(".csplttp").toggleClass('asnowmvr31');
      $(".csplttq").toggleClass('asnowmvr32');
      $(".csplttr").toggleClass('asnowmvr33');
      $(".cspltts").toggleClass('asnowmvr34');
      $(".csplttt").toggleClass('asnowmvr35');
      $(".csplttu").toggleClass('asnowmvr36');
      $(".csplttv").toggleClass('asnowmvr37');
      $(".csplttw").toggleClass('asnowmvr38');
      $(".csplttx").toggleClass('asnowmvr39');
      $(".cspltty").toggleClass('asnowmvr40');
    }
    // console.log(rand);
  });


});
