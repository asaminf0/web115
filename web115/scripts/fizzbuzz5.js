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

for (i = 1; i <= 100; i++) {
		if (checkDivision(i, firstNumber)  && checkDivision(i, secondNumber) && checkDivision(i, thirdNumber)) { 
      displayMessage += `${i}. ${firstWord} ${secondWord} ${thirdNumber}`+ "<br>";
		} else if (!checkDivision(i, firstNumber)  && checkDivision(i, secondNumber) || checkDivision(i, thirdNumber)) {
			displayMessage += `${i}. ${firstWord}` + "<br>";
		}	else if (checkDivision(i, firstNumber) || checkDivision(i, thirdNumber) && !checkDivision(i, secondNumber)){
      displayMessage += `${i}. ${secondWord}` + "<br>";
    } else if (checkDivision(i, firstNumber)  || checkDivision(i, secondNumber) && !checkDivision(i, thirdNumber)){
      displayMessage += `${i}. ${secondWord}` + "<br>";
    } else {
      displayMessage += `${i}. ` + "<br>";
    }
	}
var writing = document.getElementById("loop");
	writing.innerHTML = msg;
}

	