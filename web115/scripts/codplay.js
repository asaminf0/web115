function output1() {	
	var carName1 = "Volvo XC60"; // Double quotes
	var carName2 = 'Volvo XC60'; // Single quotes
	alert(carName1 + " " + carName2); 
}
function output2() {
	var cars = ["Saab", "Volvo", "BMW"];
	alert(cars);
}
function output3() {
	var d = new Date();
	alert(d);
}
function output4() {
	
	alert("returns a random integer from 0 to 10 : " + Math.floor(Math.random() * 11));
}
function output5() {
	var x = 5;
	var y = 6;
	var z = x + y;
	alert("The value of z is: " + z);
}
function output6() {
	var a = 3;
	var x = (100 + 50) * a;
	alert("The value of x is: "+ x);
}
function output7() {
	var s = 'Hey every body!';
	alert(s);
}
function output8() {
	var firstName= 'Hello, ';
	var secondName = 'World!';
	alert(firstName + secondName);
}
function output9() {
	var number = (10 * 2) / (3 + 2);
	alert(number);
}
function output10() {
	var number = (20 / 5);
	alert(number);
}
function output11() {
	var number = 20;
	var total=number+10;
	alert(total);
}
function output12() {
	var number = (10 - 1) * 4;
	var total=number+10;
	alert(total);
}
function output13() {
	var number = 10 - 5;
	var total=number*10;
	alert(total);
}
function output14() {
	var number = 10 % 5;
	var total=number*10;
	alert(total);
}
function output15() {
	var num = 4;
	if (num < 5) {
	alert('My number is ' + num);}
}
function output16() {
	var hello="hello";
	var name = prompt("What is your name?");
	alert(hello + name);
}
function output17() {
	var cars = ["Saab", "Volvo", "BMW"];
	alert(cars);}
}
function output18() {
	var cars = [
	  "Saab",
	  "Volvo",
	  "BMW"
	];
	alert(cars);}
function output19() {
	var cars = ["Saab", "Volvo", "BMW"];
	cars[0] = "Opel";
	alert(cars[0]);}
function output20() {
	var person = ["John", "Doe", 46];
	alert(person[0]);
}
function output46() {
	for (i = 0, len = cars.length, text = ""; i < len; i++) {
	  text += cars[i] + "<br>";
	  alert(text);}
}
function output47() {
	var person = {fname:"John", lname:"Doe", age:25};
	var text = "";
	var x;
	for (x in person) {
	  text += person[x];
	  alert(text);
	}
}
function output48() {
	var text = "";
	var i = 0;
	while (i < 10) {
	text += "The number is " + i;
	i++;
	alert(text);
	}
}
function output49() {
	var text = ""
	var i = 0;

	do {
	  text += "<br>The number is " + i;
	  i++;
}
	while (i < 10);
	alert(text);
}  
function output50() {
	var cars = ["BMW", "Volvo", "Saab", "Ford"];
	var i = 0;
	var text = "";
	while (cars[i]) {
	  text += cars[i] + "<br>";
	  
	  i++;
	}
}