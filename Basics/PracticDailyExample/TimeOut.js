
// basicccc
console.log('start')

//Set timer returns timer ID if u print ok
 setTimeout(() => {
    console.log('timer')
}, 1000);

console.log('end')



//2. Passing Arguments to the Function:
function greet(name){
    console.log(`Hello ${name}`)
}

setTimeout(greet, 3000, "Raghu"); 
// Pass "Alice" to the `greet` function


// 3rrd important example 


console.log('start')

const timer1 = setTimeout(()=>{
    
    console.log("timer ")
},1000)


const timer2 = setTimeout(()=>{
    
    console.log("timer 2")
},0)

console.log('end')

