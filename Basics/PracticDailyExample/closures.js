const x = 10;

function doAddtion(){
let y = 10
 function addMore(){
let z = 15

console.log("SUM",x + y + z)

}

}
console.log(doAddtion()())


// one more basic 
function outerFunnctionn(){
let value = 10

function innerFunnction(){

    console.log("The value is:",value)
}
 innerFunnction()

}

 outerFunnctionn()


 queueMicrotask(()=>{

 })
 

 // oneMore Example

 const xxValue = 10;

 function doAddtion() {
     let y = 10;
     function addMore() {
         let z = 15;
         console.log("SUM", xxValue + y + z);
     }
     return addMore; // Return the inner function
 }
 
 const resultFunction = doAddtion(); // Now resultFunction holds addMore
 resultFunction(); // This executes addMore, forming a closure
 
