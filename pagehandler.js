//Pagehandler.js//

const log = document.getElementById('log');

document.addEventListener('keypress', logKey);

function logKey(e) {
	log.textContent += ` ${e}`;
	console.log(log);
}