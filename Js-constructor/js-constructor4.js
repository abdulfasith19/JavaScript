
// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName
    };
}
//invalid
Person.language="Tamil";
// Create a Person object
var myFather = new Person("Mohamed", "Ibrahim", 50, "Black");

// Display full name
document.getElementById("demo").innerHTML =
"My father is " + myFather.name();

//It will return undefined 
document.getElementById("demo1").innerHTML =
"My father is " + myFather.language; 

