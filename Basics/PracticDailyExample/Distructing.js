const user = [{
    name:"raghu",
    age:32,
    city:"belgaum"
},
{name:"vaushavi",
age:29,
city:"hubli"

}]



for (let {name,age} of user){
    console.log(`${name},${age}}`)

}


//Rest
for (let { name, ...rest } of user) {
    console.log(name);    // Only logs the name
    console.log("Rest",rest);    // Logs the rest of the properties (age and city)
}



// one more basic example
const arrayofValues  = [1,2,3,4,4]
console.log(...arrayofValues)
