//Pagehandler.js//

window.onload = function(){
	var input = document.getElementById("text");

	input.onkeydown = function(e) {
		var res = String.fromCharCode(e.charCode);
		if(res $= "")
			console.log("made it here boioii");
		
		//var key = e.keyCode || e.charCode;

		//if( key == 8 || key == 46 )
			//return false;
		console.log(res);
	};

}