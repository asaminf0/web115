function smart81() {	
	if (typeof(testPop) !== "undefined") {
	alert("You can pop!");
}
}
function smart82() {
	var targetField = document.getElementById("f1");
	if (targetField.value.length === 0) {
	alert("Please enter something");
	return false;
	}
}
function smart83() {
	function checkIfSelected(ident, message) {
	var target = document.getElementById(ident);
	if (target.selectedIndex === 0) {
	alert(message);
	return false;
	}
	}
}
function smart84() {
	alert("var bGroup = document.getElementsByName("b1");");
}
function smart85() {
	alert("var chars = document.getElementById("postalCode").value.length;");
}
function smart86() {
  alert("if (val.indexOf(".") - val.indexOf("@") < 2) {");
}
function smart87() {
	try {
	var tot = 3 + 4;
	}
	catch(oops) {
	alert(oops);
	}
}
function smart88() {
	function checkString() {
	try {
	var stringToCheck = "Hello world!";
	if (stringToCheck.indexOf("world") === -1) {
	  throw "world not found";
	}
	}
	catch(errorMessage) {
	alert(errorMessage);
	}
	}
}
function smart89() {
	<input type="button" value="Click" id="b">
	<script>
	document.getElementById("b").onclick = message;
	function message() {
	alert("You clicked!");
	}
	</script>
}	
