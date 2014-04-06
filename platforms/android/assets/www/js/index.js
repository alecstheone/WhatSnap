//$(document).ready(
//  function() {
//      $("#fade").fadeOut( 1500,"swing");
//  }
//);
    
//*********************************************************
// Wait for Cordova to Load
//*********************************************************

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    
    $.mobile.defaultHomeScroll = 0; 
    navigator.splashscreen.hide();   //doar pt phonegap adobe build
    $("#fade").fadeOut( 1500,"swing");


    $("#play").animate({opacity: 1}, 1);///ca sami arate poza play fara 
    var myMedia = new Media("file:///android_asset/www/audio/background.mp3");
    var no = new Media("file:///android_asset/www/audio/no.mp3");
    var yes = new Media("file:///android_asset/www/audio/yes.mp3");
    myMedia.play();
    
    $("#play").touchstart(function() {
        $(":mobile-pagecontainer").pagecontainer('change', "#page2", { 
            transition: 'pop',
            reverse: true
        });
        // $("#photo").hide().delay(1000).fadeOut();
            // $("#photo").animate({opacity: 0.0}, 1);
    });  


//****************************************PAGE 2*******************************************

var mySwiper;
$(document).on("pagecreate","#page2",function(){
    $('.swiper-container').height($.mobile.getScreenHeight() * .22);
    $('.swiper-container').width($(window).width());
    mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        paginationClickable: false,
        momentumBounceRatio:1,
        resistance:'100%'
        
//        onTouchMove: function(swiper){
//            sliding=true;
//        },
//        
//        onSlideReset: function(swiper){
//            sliding=true;
//            setTimeout(function() {
//                sliding=false;
//            });
//        }
              
    });
    


//////////////////////////////////////battery///////////////////////////////////

    SetProgress(100);//init to 100%; 
    

    function GetProgress(){
        var curWid = $("#slider .progress")[0].style.width || 100;
        return parseInt(curWid);
    }

    function SetProgress(val){
        if (val < 0) val = 0;
        if (val > 100) val = 100;
        var color = GetColorForVal(val);
        $("#slider .progress").css({"background": color, "width": val + "%"});
        //$("#slider .progressText").text(Math.floor(val) + "%");
        if (val < 20){
            pulsate(".progress");
        }
        if (val == 0 ) {
            pulsate(".progressBar");
            setTimeout(function() {
                $("#loose").css("visibility", "visible");
                $("#loose").animate({ opacity: 1 }, 500);
            }, 5000);
        }    
    }

function GetColorForVal(val){
    var red = 0,
        green = 0;
    if (val >= 50) {
        red = 255 - Math.round(((val - 50) / 50) * 255);
        green = 255;
    } else {
        red = 255;
        green = Math.round(((val) / 50) * 255);
    }
    return  "rgb(" + red + "," + green + ",0)";
}

function pulsate(element) { 
    $(element || this).animate({ opacity: 0 }, 500, function() { 
        $(this).animate({ opacity: 1 }, 500, pulsate); }); 
} 


//////////////////////////////////////end battery///////////////////////////////////
    
    var ct=1;   

//        $("#frame").touchstart(function() {
//            // $.mobile.changePage("#page2", { transition: "pop"});
//            // $("#photo").show().delay(100).fadeOut();
//            if (ct==1){
//                 $("#photo").animate({opacity: 1.0}, {duration:1});
//                 yes.play();
//                 $("#photo").animate({opacity: 0.0}, {duration:300});
//                 ct=0;
//                 var curVal = GetProgress() - 10;
//                 SetProgress(curVal);
//                $('#frame').css( "border-color", "black" );
//                 wait(); 
//            }
//            else {
//                //fa sunet naspa si reincearca
//                no.play();
//            }
//        }); 
        

        $(".photo").touchstart(function() {
            if (ct==1){
                
              $(".blur").animate({opacity: 0}, {duration:300});
              yes.play();
              $(".blur").animate({opacity: 1}, {duration:300});
              
                 ct=0;
                 var curVal = GetProgress() - 10;
                 SetProgress(curVal);

                $('.photo').css({ "boxShadow": '0px 0px 1px 3px black' });
                 wait(); 
            }
            else {
                no.play();   //fa sunet naspa si reincearca
            }
        }); 
        

    function wait() {
        setTimeout(function(){
            ct=1;
            $('.photo').css({ "boxShadow": '0px 0px 1px 3px green' });
        }, 2000);
    }
       
       
    $('.image').css("width", $( window ).width()/3 - 0.05 * $( window ).width());
    $('.image').css("height", $(".image").width());
    $('.image').css("margin-top", ($(".swiper-container").height() - $('.image').height())/2);
    $('.image').css('margin-left', ($(window).width()- 3 * $('.image').width())/4);

    
    $('.blur').blurjs({
        source: '.photo',
        radius: 100
    });
    
    $('.swiper-pagination-switch').css('width', $(window).width()/3);
    
    mySwiper.addCallback('TouchStart', function(swiper){
        allowSelect = true;
    });
 
    mySwiper.addCallback('TouchMove', function(swiper){
        allowSelect = false;
    });
    
     mySwiper.addCallback('TouchEnd', function(swiper){
         setTiemout(function(){
             allowSelect = true;
         },100)

    });

       

       $( document ).on( "vclick", ".image", function() {      
           if(allowSelect){
               if($(this).hasClass("selected"))
                    $(this).removeClass("selected");
               else
                    $(this).addClass("selected");  
           }
        });
       
});

$(document).on("pageshow","#page2",function(){
    $('.swiper-container').css("width", "100%").css("height", "22%");
    mySwiper.resizeFix();
    sliding = false;
});











}









