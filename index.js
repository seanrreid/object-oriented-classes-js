/*
Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

The Person class should have a method called `describe()` which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe() of his object will return "John, 19 years old".
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() 
}

const me = new Person("Sean", 44);

console.log(me);

//console.log(me.describe());

/*
Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:
*/

// (function() {
//     const Person = function() {};
//     const Teacher = function() {};
// })();

// (function() {})();
