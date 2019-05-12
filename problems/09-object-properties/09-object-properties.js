/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for (let props in someObj){
        console.log(props + ": " + someObj[props]);
   }

}

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  }
  
  objectProperties(person)