/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for (var props in someObj){
        console.log(props + ": " + someObj[props]);
   }

}

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  }
  
  objectProperties(person)