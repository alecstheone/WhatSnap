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

    navigator.splashscreen.hide();   //doar pt phonegap adobe build
    $("#fade").fadeOut( 1500,"swing");


    $("#play").animate({opacity: 1}, 1);///ca sami arate poza play fara 
    var myMedia = new Media("file:///android_asset/www/audio/my.mp3");
    var no = new Media("file:///android_asset/www/audio/no.mp3");
    var yes = new Media("file:///android_asset/www/audio/background.mp3");
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
    });
    
/////baterie
    SetProgress(100);//init to 100%; 
    

    
    function GetProgress(){
        var curWid = $("#slider .progress")[0].style.width || 100;
        return parseInt(curWid);
    }
    function SetProgress(val){
        if (val < 0) val = 0;
        if (val > 100) vall = 100;
        var color = GetColorForVal(val);
        $("#slider .progress").css({"background": color, "width": val + "%"});
        //$("#slider .progressText").text(Math.floor(val) + "%");
     
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
////baterie 
    
    var ct=1;   

        $("#frame").touchstart(function() {
            // $.mobile.changePage("#page2", { transition: "pop"});
            // $("#photo").show().delay(100).fadeOut();
            if (ct==1){
                 $("#photo").animate({opacity: 1.0}, {duration:1});
                 yes.play();
                 $("#photo").animate({opacity: 0.0}, {duration:300});
                 ct=0;
                 var curVal = GetProgress() - 10;
                 SetProgress(curVal);
                $('#frame').css( "border-color", "black" );
                 wait(); 
            }
            else {
                //fa sunet naspa si reincearca
                no.play();
            }
        }); 

    function wait() {
        setTimeout(function(){
            ct=1;
            $('#frame').css( "border-color", "green" );
        }, 2000);
    }
       
});

$(document).on("pageshow","#page2",function(){
    $('.swiper-container').css("width", "100%").css("height", "22%");
    mySwiper.resizeFix();
});











}









