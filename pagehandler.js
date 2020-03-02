//Pagehandler.js//
var warningHandler = 0;
var initialHandler = 0;
var cont = false;
var warningFinisher = 0;
var warningTrue = true;
var classifiedpage = true;
var arrow = 0;
var screen = 0;

window.onload = function(){
	var input = document.getElementById("text");
	var res = "a";
	var amp = "";
	var key = 123;
	var chk = "lagbyte01012";
	var typing = false;
	var blip = true;
	var fin = "";

	input.onkeypress = function() {
		if(screen > 0)
			return;
		typing = true;
		var charCode = (typeof event.which == "undefined") ? event.keyCode : event.which;
		console.log(charCode);
		res = String.fromCharCode(charCode);
		fin += res;
		amp += "*";
		console.log(fin);
		if(fin == chk) {
			screen = 1;
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
		switch(screen)
		{
			case 0:
				if(warningTrue == false)
					return;
				console.log(e.keyCode);
				if(e.keyCode == 8) {
					fin = fin.substring(0, fin.length - 1);
					amp = amp.substring(0, amp.length - 1);
				}
				document.getElementById("blip").innerHTML = amp;
				if(amp == "")
					typing = false;
				if(screen > 0)
					document.getElementById("blip").innerHTML = "   ";
				break;
			case 1:
				if(e.keyCode == 38)
					arrow--;
				if(e.keyCode == 40)
					arrow++;
				if(arrow > 4)
					arrow = 0;
				if(arrow < 0)
					arrow = 5;

				var theset = document.getElementById("...").innerHTML;
				
				switch(arrow)
				{
					case 0:
						theset =  "> [CLASSIFIED]<br>  OPERATION UNDEK<br>  [CLASSIFIED]<br>  [CLASSIFIED]<br>  [CLASSIFIED]";
						break;
					case 1:
						theset =  "  [CLASSIFIED]<br>> OPERATION UNDEK<br>  [CLASSIFIED]<br>  [CLASSIFIED]<br>  [CLASSIFIED]";
						break;
					case 2:
						theset =  "  [CLASSIFIED]<br>  OPERATION UNDEK<br>> [CLASSIFIED]<br>  [CLASSIFIED]<br>  [CLASSIFIED]";
						break;
					case 3:
						theset =  "  [CLASSIFIED]<br>  OPERATION UNDEK<br>  [CLASSIFIED]<br>> [CLASSIFIED]<br>  [CLASSIFIED]";
						break;
					case 4:
						theset =  "  [CLASSIFIED]<br>  OPERATION UNDEK<br>  [CLASSIFIED]<br>  [CLASSIFIED]<br>> [CLASSIFIED]";
						break;
					default:
						break;
				}
				if(e.keyCode == 13)
					switch(arrow)
					{
						case 0:
							loadScreen3();
							break;
						case 1:
							classified();
							break;
						case 2:
							classified();
							break;
						case 3:
							classified();
							break;
						case 4:
							classified();
							break;
						default:
							classified();
							break;
					}
				document.getElementById("...").innerHTML = theset;
				break;
			case 2:
				if(e.keyCode == 38)
					arrow--;
				if(e.keyCode == 40)
					arrow++;
				if(arrow > 2)
					arrow = 0;
				if(arrow < 0)
					arrow = 2;

				var theset = document.getElementById("...").innerHTML;
				
				switch(arrow)
				{
					case 0:
						theset = "> OPERATION SUMMARY<br>  PERSONNEL FILES<br>  MISSION LOGS";
						break;
					case 1:
						theset = "  OPERATION SUMMARY<br>> PERSONNEL FILES<br>  MISSION LOGS";
						break;
					case 2:
						theset = "  OPERATION SUMMARY<br>  PERSONNEL FILES<br>> MISSION LOGS";
						break;
				}
				if(e.keyCode == 13)
					switch(arrow)
					{
						case 0:
							loadScreen4();
							break;
						case 1:
							loadScreen7();
							break;
						case 2:
							loadScreen9();
							break;
						default:
							break;
					}
				document.getElementById("...").innerHTML = theset;
				if(e.keyCode == 27)
					SelectionPage();
				break;
			case 3:
				if(e.keyCode == 38)
					arrow--;
				if(e.keyCode == 40)
					arrow++;
				if(arrow > 2)
					arrow = 0;
				if(arrow < 0)
					arrow = 2;

				var theset = document.getElementById("...").innerHTML;
				
				switch(arrow)
				{
					case 0:
						theset = "> ZACKRAI UTREVICH<br>  MAOKOVITCH ARGVETH";
						break;
					case 1:
						theset = "  ZACKRAI UTREVICH<br>> MAOKOVITCH ARGVETH";
						break;
					default:
						break;
				}
				if(e.keyCode == 13)
					switch(arrow)
					{
						case 0:
							loadScreen5();
							break;
						case 1:
							loadScreen6();
							break;
					}
				document.getElementById("...").innerHTML = theset;
				if(e.keyCode == 27)
					loadScreen3();
				break;
			case 4:
				
				break;
			case 5:
				
				break;
			case 6:
				
				break;
			case 7:
				
				break;
			case 8:
				
				break;
			default:
				break;
		}
	};
	
	window.setInterval(() => {
		cursorBlip();
	}, 600);

	function cursorBlip()
	{
		if(typing == true)
			return;
		if(screen > 0)
			return;
		
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
				startSelectionPage();
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
	screen = 10;
	document.getElementById("...").innerHTML = "    ";
	document.getElementById("passcode").innerHTML = "ACCESS DENIED";
	window.setTimeout(() => {
		startSelectionPage();
	}, 2000);
}


function SelectionPage()
{
	screen = 1;
	arrow = 0;
	document.getElementById("passcode").innerHTML = "   ";
	document.getElementById("blip").innerHTML = "   ";
	document.getElementById("...").innerHTML = "> [CLASSIFIED]<br>  OPERATION UNDEK<br>  [CLASSIFIED]<br>  [CLASSIFIED]<br>  [CLASSIFIED]<br>  [CLASSIFIED]";
}


function loadScreen3() {
	screen = 2;
	arrow = 0;
	
	document.getElementById("...").innerHTML = "> OPERATION SUMMARY<br>  PERSONNEL FILES<br>  MISSION LOGS";
}


function loadScreen4() {
	screen = 3;
	arrow = 0;
	
	document.getElementById("...").innerHTML = "> ZACKRAI UTREVICH<br>  MAOKOVITCH ARGVETH";
}


function loadScreen5() {
	screen = 4;
	arrow = 0;
	var temp = 	document.getElementById("...").innerHTML = "A former clone trooper designated CT-9012 “Mach”, has been aiding Zackrai with his introduction into modern era technology, given that the planet Aurya has been severely behind for centuries.";
	temp = temp.toUpperCase();
	document.getElementById("...").innerHTML = temp;
}


function loadScreen6() {
	screen = 5;
	arrow = 0;
	
	
}

function loadScreen7() {
	screen = 6;
	arrow = 0;
	
	
}

function loadScreen8() {
	screen = 7;
	arrow = 0;
	
	
}

function loadScreen9() {
	screen = 8;
	arrow = 0;
	
	
}