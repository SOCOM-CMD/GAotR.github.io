//Pagehandler.js//

window.onload = function(){
	var input = document.getElementById("text");
	var res = "a";
	var amp = "b";

	input.onkeydown = function(e) {
		res = String.fromCharCode(e.charCode);
		if(res == "")
			console.log("made it here boioii");
		if( key == 8 || key == 46 )
			amp -= charAt(amp.length-1);
		amp += res;
		document.getElementById("type").innerHTML(amp);
		
		//var key = e.keyCode || e.charCode;

		
		console.log(res);
	};

}

