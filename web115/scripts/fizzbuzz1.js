function fizzbuzz1() {					
	var msg = "";
	var i;
	for (i = 1; i <= 140; i++) {
		if (i % 3 == 0 && i % 5 != 0) {
			msg += i +"." + "Atefeh" + "<br>";
		} else if (i % 3 != 0 && i % 5 == 0) {
			msg += i +"." + "Photo" + "<br>";
		} else if (i % 3 == 0 && i % 5 == 0) {
			msg += i +"." + "AtefehPhoto" + "<br>";
		} else {
			msg += i +"." + "---" + "<br>";
		}
	var writing = document.getElementById("loop");
	writing.innerHTML = msg;
	}
}
