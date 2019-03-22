
var socket = io("http://localhost:5000");


function setTitle(title) {
    document.querySelector("h2").innerHTML = title;
}


socket.on("disconnect", function() {
	setTitle("My App Not Connected");
});

socket.on("hat connect", function() {
	setTitle("My App Connected");
});

socket.on("message", function(message) {
	printMessage(message);
});

document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value);
    socket.emit("chat", input.value);
    input.value = '';
};



function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}






