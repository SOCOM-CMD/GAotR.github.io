//Pagehandler.js//
var blip = true;

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
		amp += res;
		document.getElementById("type").innerHTML= amp;
		
		//var key = e.keyCode || e.charCode;
	
		
		console.log(res);
	};
	
	input.onkeyup = function (e) {
		console.log(e.keyCode);
		if(e.keyCode == 8)
			amp = amp.substring(0, amp.length - 1);
		document.getElementById("type").innerHTML = amp;
	}
	
	window.setInterval(() => {
		cursorBlip();
	}, 1000);

	function cursorBlip()
	{
		if(blip == false) {
			console.log("beep");
			document.getElementById("blip").innerHTML = " ";
			blip = true;
		}
		console.log("bloop");
		document.getElementById("blip").innerHTML = "|";
		blip = false;
	}
}
/*funtion step() {
		//FOR ANY ANIMATIONS BESIDES THE CURSOR();
		window.requestAnimationFrame(step);
	}
window.requestAnimationFrame(step);*/