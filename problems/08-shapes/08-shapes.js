/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let strin = ''
  let stri = ''
   switch (shape){
       case 'Square':
         for (let i = 0; i < height; i++){
              strin = ''
              
            for (let j = 0; j < height; j++){
                strin += character
            }
                console.log(strin)
                
          }
          break
       
          case 'Triangle':
            for (let j = 0; j < height; j++){
                stri += character
                console.log(stri)
          } 
          break

          case 'Diamond': 
  
      }
  } 

printShape('Diamond', 5, '$')
