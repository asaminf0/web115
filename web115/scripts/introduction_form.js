function introduction() {						
	var firstName = document.getElementById("first_name").value;
	var country  = document.getElementById("country_name").value;
	var lastName  = document.getElementById("last_name").value;
	var emailAdress  = document.getElementById("email_add").value;
	var phoneNumber  = document.getElementById("phone_num").value;
	document.getElementById("greeting").innerHTML = "Welcome to Indroduction Form " ;
	document.getElementById("name").innerHTML ="Firstname:" + "  " + firstName;
	document.getElementById("fam").innerHTML ="lastname:" + "  " + lastName;
	document.getElementById("coun").innerHTML ="Country:" + "  " + country;
	document.getElementById("email").innerHTML ="Email :" + "  " + emailAdress;
	document.getElementById("phone").innerHTML ="Phonenumber:" + "  " + phoneNumber;
	}
