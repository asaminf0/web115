function smart71() {	
	var makeNice = {
  compliment: "You're so good-lookin'!",
  sayIt: function() {
    alert(this.compliment);
  }
};
makeNice.sayIt();
}
function smart72() {
	function Cat(color, gender) {
	this.color = color;
	this.gender = gender;
	}
	var cat10 = new Cat("white", "female");
	alert("The cat is a "+cat10.color+" "+cat10.gender);
}
function smart73() {
	function SaysSomething(message) {
	this.message = message;
	this.sayIt = function() {
	alert(this.message);
	};
	}
	var myObj = new SaysSomething("Hello world!");
	myObj.sayIt();
}

function smart74() {
	function MakeObj() {
	}
	var thing = new MakeObj();
	MakeObj.prototype.color = "white";
	alert(thing.color);

}
function smart75() {
	var anObject = {
	color: "blue"
}
alert("color" in anObject);
}
function smart76() {
  alert(window.location.href);
}
function smart77() {
	alert("window.location.assign("http://www.wikipedia.org");");
}
function smart78() {
	history.back();
}
function smart79() {
   alert("var w = window.open("http://www.wikipedia.org");");
}	
function smart80() {
	var w = window.open("", "", "width=300,height=200,left=100,top=50");
}	
