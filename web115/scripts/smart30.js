function smart30() {	
var num = 1.123456;
alert(num.toFixed(2));}
function smart31() {
	var d = new Date();
	alert(d.getDay());
}
function smart32() {
	var d = new Date();
	alert(d.getFullYear());
}
function smart33() {
	var d = new Date("May 30, 2000");
	alert(d.getHours() + " " + d.getMinutes() + " " + d.getSeconds());
}
function smart34() {
	var now = getHours();
	var nowHours = now.getHours();
	now.setHours(nowHours + 1);
	alert(now);
}
function smart35() {
	function greet() {
	alert("Hello world");
	}
	greet();
}
function smart36() {
	function displayIdiom(part1, part2) {
		alert(part1 + part2);
	}
	var part1=2;
	var part2=4;
	displayIdiom(part1, part2);
}
function smart37() {
	function displayIdiom(part1, part2) {
	alert(part1 + part2);
	}
	var part1="mor";
	var part2="ning";
	displayIdiom(part1, part2)
}
function smart38() {
	function makeMessage(part1, part2) {
	var message = part1 + part2;
	return message;
	}
	var firstName = "Abraham ";
	var lastName = "Lincoln";
	alert(makeMessage(firstName, lastName));
}	
function smart39() {
	var win = true;
	switch(win) {
	case true :
	alert("You won");
	break;
	case false :
	alert("You lost");
	break;
	}
}	
function smart40() {
	var num = 10;
	switch(num) {
	case 10 :
	alert("Assigned");
	break;
	}
}	