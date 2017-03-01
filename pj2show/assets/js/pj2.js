// $(document).keypress('keypress',function(e){
//       if(e.which==65){
//          $('.boxxx1').addClass('spbs0mv');
//      }
//  });



$(document).ready(function() {

  $('body').keydown(function(e){
    if(e.keyCode == 65){
    $('.boxxx1').addClass('spbs0mv');
    }
  });

    $('body').keydown(function(e){
    if(e.keyCode == 65){
    $(this).css({'background':'white'});
    }
  });

    $('body').keydown(function(e){
    if(e.keyCode == 83){
    $(this).css({'background':'blue'});
    }
  });


});


  //
  //
  //
  //
  // $(".sfbaseframe0").keydown(function () {
  //     if (keyCode == 97) {
  //     $('.sfbaseframe0').addClass('spbs0mv');
  //     }
  // });
  //
  // $("input").keydown(function(){
  //     $("input").css("background-color", "yellow");
  // });
  // $("input").keyup(function(){
  //     $("input").css("background-color", "pink");
  // });
  //
  //


// $(document).ready(function () {
//     $('body').keydown(function(e){
//         if(e.keyCode == 114){
//             $(this).css({'background':'red'});
//         }
//         if(e.keyCode == 121){
//             $(this).css({'background':'yellow'});
//         }
//     });
//     $('body').keypress(function(e){
//         if(e.keyCode == 114){
//             $(this).css({'background':'red'});
//         }
//         if(e.keyCode == 121){
//             $(this).css({'background':'yellow'});
//         }
//     });
//     $('body').keyup(function(e){
//         if(e.keyCode == 114){
//             $(this).css({'background':'white'});
//         }
//         if(e.keyCode == 121){
//             $(this).css({'background':'white'});
//         }
//     });
//
// });

//
// $(document).ready(function () {
//
//     $('body').on('keydown keyup', function( e ) {
//
//       var key = e.which;
//       var io  = e.type=="keydown" ? 0 : 1; // "0"if keydown; "1" if keyup
//       var keyAction = {                    // Object to store our stuff
// //  keyCode : [(0)KEYDOWN, (1)KEYUP]
//         82  : ['red' ,'white'],            // R key
//         66  : ['blue','white']             // B key  (last one without comma!)
//       };
//       var propObj = {};                    // Object to store property + value for jQuery methods
//       var keyArr = keyAction[key];
//
//       if(typeof keyArr != 'undefined') {   // Test keyArr (82, 66) is returned/populated to prevent errors
//          propObj.background = keyAction[key][io];   // Created the jQ Method's object e.g: {background:"red"}
//          $(this).css(propObj);             // Finally create / use
//       }
//
//     });
//
// });
