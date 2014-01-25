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
    });  
}

