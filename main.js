// document.getElementById("input").onkeyup = function() {printChar()};
document.getElementById("input").addEventListener("keyup", printChar);

function printChar() {
	// var char = document.getElementById("input");
	var len = document.querySelector('ul').children.length;
	if (len > 29){
		document.querySelector('#output').firstChild.remove()
  	}

	var char = document.getElementById("input").value;
	var elem = document.createElement('div');
	elem.className = "input-success";
	elem.innerHTML = char;
	output.appendChild(elem);
	document.getElementById("input").value = "";
}