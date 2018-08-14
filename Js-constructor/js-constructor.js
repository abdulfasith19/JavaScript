

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a Person object
var myName = new Person("Abdul", "Fasith", 22, "Black");

// Display age
document.getElementById("demo").innerHTML =
"My Name is " + myName.firstName + myName.lastName + "."; 

