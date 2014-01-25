$(document).ready(function() {
	$( "#fade" ).fadeOut( 1000,"swing");
});
	
//*********************************************************
// Wait for Cordova to Load
//*********************************************************

function onDeviceReady() {
	navigator.splashscreen.hide();
}
document.addEventListener("deviceready", onDeviceReady, false);

