

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}


Person.nationality = "English";

// Create 2 Person objects
var myFather = new Person("Mohamed", "Ibrahim", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// Diplay nationality
document.getElementById("demo").innerHTML =
"The nationality of my father is " + myFather.nationality; 