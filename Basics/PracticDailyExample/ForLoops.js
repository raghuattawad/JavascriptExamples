const user = {name:'raghu',age:32}
const wifeDeta = {name:'vaishu', age:29}


for (let key in wifeDeta){
    console.log(`wife data ${key}: ${wifeDeta[key]}`)
}
for (let key in user){

 console.log(`${key}: ${user[key]}`)
 console.log(`${key} : ${user[key]}`)

}

for (let key in user){
    
}


const colors =  ['red','green','blue']

for(let getColors of colors){

    console.log(getColors)
}

const nums = [1,2,3]

// For each
// nums.forEach(num,index) =>{

// }


//map 

const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9



