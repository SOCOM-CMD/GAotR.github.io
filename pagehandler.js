//Pagehandler.js//

window.onload = function(){
	var input = document.getElementById("text");
	var res = "a";
	var amp = "b";
	var key = 123;

	input.onkeypress = function() {
		var charCode = (typeof event.which == "undefined") ? event.keyCode : event.which;
		console.log(charCode);
		res = String.fromCharCode(charCode);
		if(res == "")
			console.log("made it here boioii");
		if( charCode == 8 || charCode == 46 )
			amp -= charAt(amp.length);
		amp += res;
		document.getElementById("type").innerHTML= amp;
		
		//var key = e.keyCode || e.charCode;

		
		console.log(res);
	};

}