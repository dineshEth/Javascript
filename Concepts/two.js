/**Constructor functions in javascript
 * constructor functions are the way of creating objects and define their property
 * Constructor functions can be particularly useful when you need to create multiple objects with similar structures or behaviours
 */

// Constructor function or Object
function Person(name,email,age){
    this.name = name;
    this.age = age;
    this.email = email;

    this.greet = function(){
        console.log(`Hello I am ${this.name} and I am ${this.age} years`);
    }
    // by default it returns this;
}

/** instances of constructor function or object  */
// let personOne = new Person("Dinesh",22,"dinesh@google.com");
// let personTwo = new Person("Superman",25,"superman@google.com");
// console.log(personOne);
// console.log(personTwo);
// personOne.greet();


