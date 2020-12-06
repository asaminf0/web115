/****************************fizzbuzz2**************/	
function fizzbuzz2() {	
	var firstNumber = document.getElementById("first_number").value;
	var secondNumber  = document.getElementById("second_number").value;	
	document.getElementById("greeting").innerHTML =firstNumber + " % " + secondNumber + " is:";	
	var msg = "";
	var i;
		if (firstNumber % secondNumber === 0) {
			msg += "True" ;
		} else {
			msg += "False";
		}
	var writing = document.getElementById("loop");
	writing.innerHTML = msg;
	}
/****************************fizzbuzz3**************/	
function fizzbuzz3(){
	var msg = "";
	var i;
	for (i = 1; i <= 140; i++) {
		if (i % 3 == 0) {
			msg += i +"." + "Good" + "<br>";
		} else if (i % 5 == 0) {
			msg += i +"." + "Morning" + "<br>";
		} else if (i % 7 == 0) {
			msg += i +"." + "Every Body" + "<br>";
		}
		  else if (i % 3 == 0 && i % 5 == 0) {
			msg += i +"." + "Good" + "Morning" + "<br>";
		}
		 else if (i % 3 == 0 && i % 7 == 0) {
			msg += i +"." + "Good" + "Every Body" + "<br>";
		}
		 else if (i % 5 == 0 && i % 7 == 0) {
			msg += i +"." + "Morning" + "Every Body" + "<br>";
		}
		 else if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
			msg += i +"." + "Good" + "Morning" + "Every Body" + "<br>";
		} else {
			msg += i +"." + "--------" + "<br>";
		}
	var writing = document.getElementById("loop");
	writing.innerHTML = msg;
	}
}
/****************************fizzbuzz4**************/	
function fizzbuzz4() {	
	var firstNumber  = document.getElementById("first_number").value;
	var secondNumber = document.getElementById("second_number").value;	
	var thirdNumber  = document.getElementById("third_number").value;	
	var totalNumber  = document.getElementById("total_number").value;	
	var countNumber  = document.getElementById("count_number").value;	
	var firstWord    = document.getElementById("first_word").value;	
	var secondWord   = document.getElementById("second_word").value;	
	var thirdWord    = document.getElementById("third_word").value;	
	var msg = "";
	var i;
	for (i = 1; i <= totalNumber; i=(i+parseInt(countNumber))) {
		if (i % firstNumber == 0) {
			msg += i +"." + firstWord + "<br>";
		} else if (i % secondNumber == 0) {
			msg += i +"." + secondWord + "<br>";
		} else if (i % thirdNumber == 0) {
			msg += i +"." + thirdWord + "<br>";
		}
		  else if (i % firstNumber == 0 && i % secondNumber == 0) {
			msg += i +"." + firstWord + secondWord + "<br>";
		}
		 else if (i % firstNumber == 0 && i % thirdNumber == 0) {
			msg += i +"." + firstWord + thirdWord + "<br>";
		}
		 else if (i % secondNumber == 0 && i % thirdNumber == 0) {
			msg += i +"." + secondWord + thirdWord + "<br>";
		}
		 else if (i % firstNumber == 0 && i % secondNumber == 0 && i % thirdNumber == 0) {
			msg += i +"." + firstWord + secondWord + thirdWord + "<br>";
		} else {
			msg += i +"." + "--------" + "<br>";
		}
	var writing = document.getElementById("loop");
	writing.innerHTML = msg;
	}
}
