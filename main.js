// document.getElementById("input").onkeyup = function() {printChar()};
document.getElementById("input").addEventListener("keyup", printChar);

function printChar() {
	// var char = document.getElementById("input"); 30
	var len = document.querySelector('ul').children.length;
	if (len > 30){
		document.querySelector('#output').firstChild.remove()
		// И чтобы удалить первый, то обращаешься к нему через квадратные скобки [0]
	// 	if (!Element.prototype.remove) {
 //    		Element.prototype.remove = function remove() {
 //      		if (this.parentNode) {
 //        		this.parentNode.removeChild(this);
 //      			}
 //    		};
 //  		}
  		// var rem = document.getElementsByClassName('input-success');
  		// rem.remove();
  		// output.removeChild(rem)
  	}

	var char = document.getElementById("input").value;
	var elem = document.createElement('div');
	elem.className = "input-success";
	elem.innerHTML = char;
	output.appendChild(elem);
	document.getElementById("input").value = "";
}