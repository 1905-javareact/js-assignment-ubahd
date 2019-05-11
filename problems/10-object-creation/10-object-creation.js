/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

class person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

}
let human = new person('David', 50)

console.log(human)

