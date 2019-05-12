/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//using class
class person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

}

let human = new person('David', 50)
console.log(human)

//using literals
let someone = {
    name = 'David',
    age = 50
}





