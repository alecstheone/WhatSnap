//$(document).ready(
//	function() {
//		$("#fade").fadeOut( 1500,"swing");
//	}
//);
	
//*********************************************************
// Wait for Cordova to Load
//*********************************************************

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    // navigator.splashscreen.hide();   //doar pt phonegap adobe build
    $("#fade").fadeOut( 1500,"swing");


    $("#play").animate({opacity: 1}, 1);///ca sami arate poza play fara 
    var myMedia = new Media("file:///android_asset/www/img/my.mp3");
    var no = new Media("file:///android_asset/www/img/no.mp3");
    var yes = new Media("file:///android_asset/www/img/yes.mp3");
    myMedia.play();
    
	$("#play").click(function() {
        $(":mobile-pagecontainer").pagecontainer('change', "#page2", { 
			transition: 'pop',
       		reverse: true
		});
		// $("#photo").hide().delay(1000).fadeOut();
			$("#photo").animate({opacity: 0.0}, 1);
    });  
  
////aici era

	
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
    
    
    
    

    var ct=1;   

        $("#frame").click(function() {
            // $.mobile.changePage("#page2", { transition: "pop"});
            // $("#photo").show().delay(100).fadeOut();
            if (ct==1){
                 $("#photo").animate({opacity: 1.0}, {duration:1});
                 yes.play();
                 $("#photo").animate({opacity: 0.0}, {duration:300});
                 ct=0;
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









