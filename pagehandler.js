//Pagehandler.js//

const input = document.getElementById('log');

input.onkeydown = function() {
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 )
        return false;
};