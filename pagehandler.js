//Pagehandler.js//
var warningHandler = 0;
var initialHandler = 0;
var cont = false;
var warningFinisher = 0;
var warningTrue = true;
var classifiedpage = true;

window.onload = function(){
	var input = document.getElementById("text");
	var res = "a";
	var amp = "";
	var key = 123;
	var chk = "lagbyte01012";
	var typing = false;
	var blip = true;
	var fin = "";
	var screen1 = true;

	input.onkeypress = function() {
		if(screen1 == false)
			return;
		typing = true;
		var charCode = (typeof event.which == "undefined") ? event.keyCode : event.which;
		console.log(charCode);
		res = String.fromCharCode(charCode);
		fin += res;
		amp += "*";
		console.log(fin);
		if(fin == chk) {
			screen1 = false;
			document.getElementById("blip").innerHTML = "   ";
			document.getElementById("...").innerHTML = "ACCEPTED";
			document.getElementById("passcode").innerHTML = "   ";
			initiateStartup();
			return;
		}
		console.log("changing blip");
		document.getElementById("blip").innerHTML = amp;
		
		//var key = e.keyCode || e.charCode;
	};
	
	input.onkeyup = function (e) {
		console.log(e.keyCode);
		if(e.keyCode == 8) {
			fin = fin.substring(0, fin.length - 1);
			amp = amp.substring(0, amp.length - 1);
		}
		document.getElementById("blip").innerHTML = amp;
		if(amp == "")
			typing = false;
		if(screen1 == false)
			document.getElementById("blip").innerHTML = "   ";
	}
	
	window.setInterval(() => {
		cursorBlip();
	}, 600);

	function cursorBlip()
	{
		if(typing == true)
			return;
		if(screen1 == false)
			return;
		console.log(screen1);
		if(blip == false) {
			document.getElementById("blip").innerHTML = " ";
			blip = true;
			return;
		}
		document.getElementById("blip").innerHTML = "|";
		blip = false;
	}
}
function step() {
	warningText();
	window.requestAnimationFrame(step);
}


function initiateStartup()
{
	//document.getElementById("inputcontainer").style.color = "white";
	window.requestAnimationFrame(step);
}

function warningText()
{
	if(warningTrue == false)
		return;
	if(cont == false)
		initialHandler++;
	if(initialHandler > 120)
		cont = true;
	if(cont == true)
	{
		if(warningFinisher > 4) {
				warningTrue = false;
				return;
		}
		warningHandler++;
		if(warningHandler > 30) {
			warningHandler = 0;
			var temp = document.getElementById("...").innerHTML;
			if(temp.length > 2) {
				temp = "";
				document.getElementById("...").innerHTML = temp;
				warningFinisher++;
				return;
			}
			temp += ".";
			document.getElementById("...").innerHTML = temp;
		}
	}
}

function classified()
{
	document.getElementById("...").innerHTML = "    ";
	document.getElementById("passcode").innerHTML = "ACCESS DENIED";
	window.setTimeout(() => {
		startSelectionPage();
	}, 2000);
}


function startSelectionPage()
{
	document.getElementById("passcode").innerHTML = "   ";
	document.getElementById("blip").innerHTML = "   ";
	document.getElementById("...").innerHTML = "  [CLASSIFIED]<br>  Operation Undek<br>  [CLASSIFIED]<br>  [CLASSIFIED]<br>  [CLASSIFIED]<br>  [CLASSIFIED]";
	
	
}