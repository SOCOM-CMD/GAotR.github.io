//Pagehandler.js//

window.onload = function(){
	var input = document.getElementById("text");
	var res = "a";
	var amp = "b";
	var key = 123;

	input.onkeydown = function() {
		key = event.keyCode;
		console.log(key);
		res = String.fromCharCode(event.charCode);
		if(res == "")
			console.log("made it here boioii");
		if( key == 8 || key == 46 )
			amp -= charAt(amp.length);
		amp += res;
		document.getElementById("type").innerHTML= amp;
		
		//var key = e.keyCode || e.charCode;

		
		console.log(res);
	};

}