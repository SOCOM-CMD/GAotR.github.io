//Pagehandler.js//

window.onload = function(){
	const input = document.getElementById('body1');

	input.onkeydown = function() {
		var key = event.keyCode || event.charCode;

		if( key == 8 || key == 46 )
			return false;
	};

}