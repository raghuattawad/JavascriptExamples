for(i = 0; i<5; i ++){
    setTimeout(()=>{
console.log("First tricky",i)
    },1000)
}
//why 5 means beofe 1 seconds completes it will do one more iteration i++ then become 5

//2nd one

 for (var i = 0; i < 3; i++) {

    setTimeout(() => console.log("second tricky",i), 1);
    
}
    
    for (let i = 0; i < 3; i++) {
    
    setTimeout(() => console.log("third tricky",i), 1);


    
    }

    

//thrid tricky 
const foo = () => console.log("First");

const bar = () => setTimeout(() => console.log("Second"), 0);

const baz = () => console.log("Third");

bar();

foo();

baz();

// 4th tricky 
//syntax error

// for(var i=0; i<3; i++){
//     setTimeout(function(){
//         console.log("4th tricky",i);
//     }(),1000+i)
    
// }

