
//   Variables
let changle_variable = 'You can change this variable';
const constant = 'You cannot change this variable';




//   Data Types
let string = 'This is a string';
let number = 44;
let boolean = true; 
let array = ["Saab", "Volvo", "BMW"];
let objects = {cat: "meow", dog: "bark"};

let Not_Defined; //   Undefined
let Un_Defined = undefined // Also Undefined
let nothing = null;




//   Basic Logic
if(number === 44){
    number;
}
else if (number === 24){
    number = 'Now a string';
}
else{
    number = number - 4;
}





switch(number) {
    case number === 44:
        number = 2;
      break;
    case number === 45:
        number = 2;
      break;
    default:
      number = number;
  }



//   Loops
for (let i = 0; i < 10; i++) { 
    i += 2;
  }


let j = 0;
let text;

while (j <= 10) {
    text += "The number is " + j;
    j++;
}



//   Functions
function add(num1, num2){
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

subtract(4,2);

subtract(add(4,5), 4);


//   Classes
class OurMath {
    //   Attributes
    PI = 3.14;
    Eulers = 2.71;

    //   Methods
    add(num1, num2){
        return num1 + num2;
    }

    subtract(num1, num2){
        return num1 - num2;
    }

    multiply(num1, num2){
        return num1 * num2;
    }

    divide(num1, num2){
        return num1 / num2;
    }
}

const mathInstance = new OurMath();
mathInstance.Eulers;
mathInstance.add(1,2);



class Plane {
    constructor(type) {
      this.plane = type;
    }
    get getType() {
      return this.plane;
    }
    set setType(new_type) {
      this.plane = new_type;
    }
  }

  class Jet extends Plane {
    constructor(type) {
      super(type);
    }

    mach5() {
      console.log('Flying at mach 5');
    }
  }



//   Math Class
  Math.PI; 
  Math.round(3.1);
  Math.random() * 100;             


//   Date Class
let now = new Date().now;



//   Strings
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabet.length;

let num = 4
let string_and_value = `Heres a num ${num}`; 

let position = alphabet.indexOf("K");
//   https://www.w3schools.com/jsref/jsref_indexof.asp



//   Numbers
const number_ten = parseInt("4344");   
//   https://www.w3schools.com/jsref/jsref_parseint.asp  


//   Arrays
let fitness = ["running", "hiking", "biking"];
fitness.sort();
fitness[0];
//   https://www.w3schools.com/jsref/jsref_obj_array.asp