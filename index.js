/*
Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

The Person class should have a method called `describe()` which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe() of his object will return "John, 19 years old".
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // this is a static method, it is only available to the Person class...
    static describe(subject) {
        return `${subject.name}, ${subject.age} years old`;
    }

    // this is an instance method, it is available to all instances of Person...
    greet(greeting) {
        return `Hello, I am ${this.name}. I am ${this.age} years old. This conversation is ${greeting}!`;
    }
}

const me = new Person("Sean", 44);
const jason = new Person("Jason", 45);

console.log(Person.describe(jason));
console.log(jason.greet("super awkward"));
console.log(me.greet("silly"));

//console.log(me.describe());

/*
Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:
*/

// (function() {
//     const Person = function() {};
//     const Teacher = function() {};
// })();

// (function() {})();
