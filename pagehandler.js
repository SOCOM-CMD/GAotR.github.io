//Pagehandler.js//

window.onload = function(){
	var input = document.getElementById("text");

	input.onkeypress = function() {
		var res = String.fromCharCode(97);
		console.log(res);
		var key = event.keyCode || event.charCode;

		if( key == 8 || key == 46 )
			return false;
	};

}