//Pagehandler.js//

window.onload = function(){
	var input = document.getElementById("text");

	input.onkeydown = function() {
		var key = event.keyCode || event.charCode;

		if( key == 8 || key == 46 )
			return false;
		
		console.log(key);
	};

}