$(document).ready(
	function() {
		$("#fade").fadeOut( 1500,"swing");
	}
);
	
//*********************************************************
// Wait for Cordova to Load
//*********************************************************

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
navigator.splashscreen.hide();

	$("#play").click(function() {
        // $.mobile.changePage("#page2", { transition: "pop"});
        $(":mobile-pagecontainer").pagecontainer('change', "#page2", { 
			transition: 'pop',
       		reverse: true
		});
		// $("#photo").hide().delay(1000).fadeOut();
			$("#photo").animate({opacity: 0.0}, 1);
    });  
    
	$("#frame").click(function() {
        // $.mobile.changePage("#page2", { transition: "pop"});
		// $("#photo").show().delay(100).fadeOut();
   		 $("#photo").animate({opacity: 1.0}, 1).delay(1).animate({opacity: 0.0}, 300).delay(2000);
    }); 




$(document).on("pageshow","#page2",function(){
	var mySwiper = new Swiper('.swiper-container',{
		pagination: '.pagination',
		paginationClickable: false,
		momentumBounceRatio:1
	});
});








}



