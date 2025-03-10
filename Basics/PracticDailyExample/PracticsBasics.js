
console.log('practice Javascript')

 // Closures with outerscope accessing value acessing inner scope

 // basic of closure
 function outer(){


    var name = "raghavendara"

    function inner(){
        console.log(name)

    }
    inner()
 }

 outer()


 // next step of closure
 function outerOfNew(name){


 name = "raghavendara dattawad"

    function innerofNew(){
        console.log(name)

    }
    innerofNew()
 }

 outerOfNew()


 // one more way 
 function createCounter(){
    let count  = 0

// returning function
    return function(){
        count += 1
        return count
    }
 }
// after finnishing outer function also we will get value

 const counterValue  = createCounter()
 console.log(counterValue()); // Output: 1
 console.log("countervalue",counterValue()); // Output: 1


for (i  =0; i<4 ; i ++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

// spread and rest operator

const array1 = [1,2]
const array2 = [...array1,3,4]
console.log("array2",array2)

// Spread one More eXample

let numsOFArray  = [1,2,3,4,5]
console.log('numbss get',...numsOFArray)

function sum(...numbers){
    console.log('nums',numbers)
    return numbers.reduce((acc,curr) => acc + curr , 0)
}
console.log("sum",sum(1, 2, 3)); // Output: 6

// one more example spread

const stringgg = "Raghu";
const charecters = [...stringgg]
console.log("charecters",charecters)

//Next One more example
let fruits = ["Apple", "Banana", "Cherry"];

let moreFruits1 = ["Dragonfruit", fruits, "Elderberry"];

// spread fruits array within moreFruits2 array
let moreFruits2 = ["Dragonfruit", ...fruits, "Elderberry"];

console.log("moreFruits1",moreFruits1);
console.log("moreFruits2",moreFruits2);


// Spread with Objects 

let obj1 = { x : 1, y : 2 };
// console.log("objs",...obj1)




// Destructiong //
const names = ["raghu","vaishnavi","Dattawad"]

const [firstName, secondName, lastName] = names

console.log(firstName)
console.log(secondName)
console.log(lastName)
//In real time if you want to accesss the indidual object then we can use from props want to extract

// Event Loop
//Javascript with Async Code

console.log("start")
setTimeout(() => {
    
    console.log("asynch")
}, 1000);

console.log("end")


// Hoisting 
//Variable and function declarations are moved to the top of their scope.

console.log("x value",x); // undefined (due to hoisting)
var x = 5;

greet(); // Output: Hello
function greet() {
    console.log("Hello");
}

//10. Prototype and Inheritance
//All JavaScript objects inherit properties and methods from a prototype.


function Person(name){

    this.name = name
}

Person.prototype.greet = function(){

    return 'Hello',this.name
}
const user  = new Person('Raghu')
console.log(user.greet())




//call , apply bind 

let myName = {
    firstMyName:'raghu',
    lastMYName:'Dattawad',

 fullMyNam:function() {

    console.log("getName:",this.firstMyName + " "  +  this.lastMYName)
}
}
myName.fullMyNam()


// using call//

let myName2 = {
    firstMyName:'Vaishnu',
    lastMYName:'DattJoshiawad',
}

let getMyFamilyfullMyName = function() {

    console.log("getName2:",this.firstMyName + " "  +  this.lastMYName)
}

getMyFamilyfullMyName.call(myName2)

// one more Example call apply 

let partiipant1 = {
    name:'Ram',
    battery:70,

    chargeBattery:function(){
    this.battery = 100
    }

}
//partiipant1.chargeBattery()
//console.log("partiipant1",partiipant1)

let participent2  = {

    name:"Hanuman",
    battery:50

    // dont call again this method  use call
    // chargeBattery:function(){
    //     this.battery = 100
    //     }
}
partiipant1.chargeBattery.call(participent2)
console.log("partiipant1",partiipant1)
console.log("participent2",participent2)


// Rest 


displayWithRest(1,2,3,4,5)

function displayWithRest(first,second,...restArg){
    console.log(first)
    console.log(second)
    console.log("reeeessst",restArg)
}

// const sum = (...numbers) => numbers.reduce((acc, val) => acc + val, 0);
// console.log("syyyyum",sum(1, 2, 3));

const paasssName = 'rag'
console.log('deelete',delete paasssName)


