//Pagehandler.js//

window.onload = function(){
	var input = document.getElementById("text");

	input.onkeydown = function(e) {
		var ev = e.charCode;
		var res = String.fromCharCode(ev);
		if(res.length > 0)
			console.log("made it here boioii");
		console.log(res);
		var key = e.keyCode || e.charCode;

		if( key == 8 || key == 46 )
			return false;
	};

}

