//Pagehandler.js//

window.onload = function(){
	var input = document.getElementById("text");

	input.onkeypress = function() {
		console.log(event.which);
		var key = event.keyCode || event.charCode;

		if( key == 8 || key == 46 )
			return false;
	};

}