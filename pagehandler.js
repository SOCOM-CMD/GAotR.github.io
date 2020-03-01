//Pagehandler.js//

window.onload = function(){
	var input = document.getElementById("text");

	input.onkeydown = function() {
		var ev = event.charCode;
		var res = String.fromCharCode(ev);
		if(res.length > 0)
			console.log("made it here boioii");
		console.log(res);
		var key = event.keyCode || event.charCode;

		if( key == 8 || key == 46 )
			return false;
	};

}