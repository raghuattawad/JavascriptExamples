// import { func } from "prop-types"

console.log('Hello wrold')

var myName = "raghu"
console.log(myName)
console.log(10 + 2)

function sum(a,b){

  return  a + b
}
console.log('sum value',sum(6,7))
console.log('dattaawad')



// let x = 1 > 2 > 3;
//  console.log(x);


// let x = "5";
//  let y = 2; 

// console.log(x + y);
// console.log(x - y);

// // let x = "hello"; 
// // let y = new String("hello"); 
// // console.log(x == y);
// //  console.log(x === y);


// 1st example
let x = 1 > 2 > 3
console.log("x value",x);


//2nd Example
let xx = "5";
 let y = 2; 

console.log("value1",xx + y);
console.log("value2",xx - y);


// 3rd Example

let xxx = "hello"; 
let yyy = new String("hello"); 
console.log(xxx == yyy);
console.log(xxx === yyy)


var array = ['one',2, false]
console.log(array)

function modifyArray(arr,  callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function() {
  console.log("array has been modified", arr);
});


let person = {
  firstName: 'John',
  lastName: 'Doe',
  greet: function() {
      return 'Hello, ' + this.firstName + ' ' + this.lastName;
  }
};
console.log("per",person)


let petName = "Rocky"; // Global Variable
myFunction();

function myFunction() {
    console.log("Inside myFunction - Type of petName:", typeof petName);
    console.log("Inside myFunction - petName:", petName);
}

console.log("Outside myFunction - Type of petName:", typeof petName);
console.log("Outside myFunction - petName:", petName);


// Next

function number(num) {  
  if (isNaN(num)) {  
    return "Not a Number";  
  }  
  return "Number";  
}  
console.log(number('1000F'));  
// expected output: "Not a Number"  
  
console.log(number('1000'));  
// expected output: "Number"  

// Arrow Function
const App = () =>{

}
function Appp(){

 }
//next  before arrow how it can be used

let add = function(){

  console.log ("addotion")

}
console.log(add)

//nexttt
let adddd = function(num1 ,num2){

  return num1 + num2

}

let result  = adddd(5,2)
console.log(result)

// next changed to 
let  addtion = (num1,num2) =>{


  return num1 + num2
}
hosting = 0
console.log("hosting,hosting",hosting)
var hosting

let doAdd =  addtion(9,2)
console.log(doAdd)


// now arraow func

let additonArraw = (num1 ,num2) => num1 + num2
console.log('addArrow',additonArraw(2,3))


//TypeScript (TS)
//let xxx: number = 5; // x is a number
//x = "hello"; // Type error: Type 'string' is not assignable to type 'number'


/// Yeild 

function* helloWorld(){

  yield 'welocme to react-native'

}


let generatObj = helloWorld()

console.log('generate obj',generatObj.next())
