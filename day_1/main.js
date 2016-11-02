const xhr = new XMLHttpRequest();

function init() {
	xhr.open("GET","./TP1.md",true);
	console.log(xhr);
	xhr.onreadystatechange = function() {
		console.log(xhr.readyState)

		if(xhr.readyState == 4) {
			var body = document.getElementById('body');
			var p_text = document.createTextNode(xhr.responseText);
			var node = document.createElement('p');
			node.appendChild(p_text);
			console.log(node);
			body.appendChild(node);
		}
	}
	console.log(xhr);
	xhr.send();
}


function write(msg) {
	console.log("The message is : " + msg);
}

Player = function(name) {
	this._name =name || "Alex";
}

Player.prototype.sayHello = function(player) {
	console.log(this._name + " says hello to " + player._name);
};