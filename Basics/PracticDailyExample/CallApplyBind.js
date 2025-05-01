// call ,apply ,bind



// call
let partiipant1 = {

    name:"Raghu",
    battery:70,
    chargeBattery:function(){

        this.battery = 100
    }
    
}


partiipant1.chargeBattery()
console.log(partiipant1)


let partcipenet2 = {

    name:"Santosh",
    battery:50

}

partiipant1.chargeBattery.call(partcipenet2)
console.log(partcipenet2)


partiipant1.chargeBattery.apply([partcipenet2])
console.log("partcipenet2 as apply",partcipenet2)


const user = { 
    name: "John"
 };

function greet(greeting) {
    return `${greeting}, ${this.name}`;
}

console.log(greet.call(user, "Hello")); // Hello, John
console.log(greet.apply(user, ["Hi"])); // Hi, John

const boundGreet = greet.bind(user, "Hey");
console.log(boundGreet()); // Hey, John


//one more time //


const myDetails = {
    myName:'Raghu'

}

function greeting(greet) {

    return  `${greet} ${this.myName}`

}

console.log(greeting.call(myDetails,"Hello"))
console.log(greeting.apply(myDetails,["Hi"]))

let getBindData =  greeting.bind(myDetails,"hey")
console.log(getBindData())


// onne more better example 

// let name1Details  = {

//     firstName:'Raghavendra',
//     lastName:'Dattawad',
//     printFullName:function(){

//         console.log(this.firstName + " " +this.lastName)
//     }


// }

// let name2Details =  {

//     firstName:"Vaishnavi",
//     lastName:"Joshi"
// }


// name1Details.printFullName.call(name2Details)


///// apply exampleeeeeee

let name1Details  = {

    firstName:'Raghavendra',
    lastName:'Dattawad'

}

let printFullName = function(hometown,state){

    console.log(this.firstName + " " +this.lastName,hometown,state)
}


let name2Details =  {

    firstName:"Vaishnavi",
    lastName:"Joshi"
}


// printFullName.call(name2Details,"Mumbai", "Maharastra")
printFullName.apply(name2Details,["Mumbai", "Maharastra"])



// one more way 
const userDet = {
    myName:'raghuu'
}

function getgreeting(greet){

    return `${greet} ${this.myName}`

}

console.log(getgreeting.call(userDet,"Hello0000"))
console.log(getgreeting.apply(userDet,["HI"]))


// call apply  one more example


const car  = {brand:"Maruti"}
const  bike  = {brand:"pulsaar"}



function showBrand(){

    console.log(`Brand ${this.brand}`)

}

showBrand.call(car)
showBrand.apply(bike)