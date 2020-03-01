//Pagehandler.js//


window.onload = function(){
	var input = document.getElementById("text");
	var res = "a";
	var amp = "b";
	var key = 123;
	var typing = false;
	var blip = true;

	input.onkeypress = function() {
		typing = true;
		var charCode = (typeof event.which == "undefined") ? event.keyCode : event.which;
		console.log(charCode);
		res = String.fromCharCode(charCode);
		if(res == "")
			console.log("made it here boioii");
		amp += res;
		document.getElementById("blip").innerHTML= amp;
		
		//var key = e.keyCode || e.charCode;
	
		
		console.log(res);
	};
	
	input.onkeyup = function (e) {
		console.log(e.keyCode);
		if(e.keyCode == 8)
			amp = amp.substring(0, amp.length - 1);
		document.getElementById("blip").innerHTML = amp;
		if(amp == "")
			typing = false;
	}
	
	window.setInterval(() => {
		cursorBlip();
	}, 600);

	function cursorBlip()
	{
		if(typing == true)
			return;
		if(blip == false) {
			console.log("beep");
			document.getElementById("blip").innerHTML = " ";
			blip = true;
			return;
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