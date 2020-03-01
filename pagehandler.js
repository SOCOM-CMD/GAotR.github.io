//Pagehandler.js//

const log = document.getElementById('log');

document.addEventListener('keypress', logKey);

function logKey(e) {
	log.textContent += ` ${e}`;
	var a = log.textContent.toString();
	console.log(a);
}