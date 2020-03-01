//Pagehandler.js//

window.onload = function(){
	var input = document.getElementById("text");

	input.onkeypress = function() {
		var ev = event.key;
		var res = String.fromCharCode.apply(null, ev);
		console.log(res);
		var key = event.keyCode || event.charCode;

		if( key == 8 || key == 46 )
			return false;
	};

}