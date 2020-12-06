function smart41() {	
	var i = 0;
	while (i <= 10) {
	alert(i);
	i++;}
}
function smart42() {
	var animals = ["horse", "ox", "cow", "pig", "duck"];
	var i = 0;
	do {
	if (animals[i] === "pig") {
	alert("Found it!");
	break;
	}
	i++;
	} while (i < animals.length)
}
function smart43() {
	alert("<script src="main.js"></script>
			or
			<script>
			alert("Hello world!");
			</script>");

}
function smart44() {
	/*
	This comment refers to
	the code that follows
	*/
	// a = a - 1;
}
function smart45() {
	alert("<a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a>");
}
function smart46() {
alert("<input type="button" value="Say hi" onClick="alert('Hi');">");
}
function smart47() {
	function displayIdiom(part1, part2) {
		alert(part1 + part2);
	}
	var part1=2;
	var part2=4;
	displayIdiom(part1, part2);
}
function smart48() {
	<input type="text" onFocus="doIt();">
}
function smart49() {
	function sayHi() {
			var userName = document.getElementById("name").value;
			alert("Hello, " + userName + "!");
			}
}	
function smart50() {
	document.getElementById("age").value = "21";
}	
