/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//using class
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

}

//using literals
let someone = {
   name = 'David',
    age = 50
}

let human = new Person('David', 50)
console.log(human)







