// document.getElementById("input").onkeyup = function() {printChar()};
document.getElementById("input").addEventListener("keyup", printChar);

function printChar() {
	// var char = document.getElementById("input"); 30
	var len = document.querySelector('ul').children.length;
	if (len > 30){
		var rem = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
		output.removeChild(rem);
		// alert("STOP!")
	}

	var char = document.getElementById("input").value;
	var elem = document.createElement('div');
	elem.className = "input-success";
	elem.innerHTML = char;
	output.appendChild(elem);
	document.getElementById("input").value = "";
}