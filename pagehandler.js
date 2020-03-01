//Pagehandler.js//

var input = document.getElementById('myInput');

input.onkeydown = function() {
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 )
        return false;
};