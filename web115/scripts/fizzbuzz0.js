/*Part 1 fizzbuzz0*/
function changeGreeting1() {						
	var firstName = document.getElementById("first_name").value;
	var initName  = document.getElementById("middle_initial").value;
	var lastName  = document.getElementById("last_name").value;
	document.getElementById("greeting").innerHTML = "Welcome to Atefehphoto, " + firstName + " , " + initName + " . " + lastName + " !";
	}
	
/*Part 2 fizzbuzz0*/
function changeGreeting2() {					
	var firstName = document.getElementById("first_name").value;
	var initName  = document.getElementById("middle_initial").value;	
	var lastName  = document.getElementById("last_name").value;
	document.getElementById("greeting").innerHTML = "Welcome to Atefehphoto, " + firstName + " , " + initName + " . " + lastName + " !";
	var howHigh = prompt("How high do you want to count, " + firstName + "?");
	var thisHigh = parseInt(howHigh);
	var msg = "";
	var i;
	for (i = 1; i <= thisHigh; i++) {
		if (i % 2 == 0) {
			msg += i + ".&nbsp;Bazoom Bazang - The number is even." + "<br>";
		} else {
			msg += i + ".&nbsp;Bazoom Bazang - The number is odd." + "<br>";
		}
	var writing = document.getElementById("loop");
	writing.innerHTML = msg;
	}
}
