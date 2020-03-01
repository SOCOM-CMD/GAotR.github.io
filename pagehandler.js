//Pagehandler.js//

window.onload = function(){
	var input = document.getElementById("text");

	input.onkeydown = function() {
		var ev = event.charCode;
		var res = String.fromCharCode(ev);
		console.log(res);
		var key = event.keyCode || event.charCode;

		if( key == 8 || key == 46 )
			return false;
	};

}