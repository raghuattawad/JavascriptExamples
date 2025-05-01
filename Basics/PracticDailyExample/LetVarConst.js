
//Var
if(true){
var x = 10
let y = 20
const z = 30


}
// console.log(x) //===>>> Only x value it will print --10 if you run
// console.log(y)
// console.log(z)



//2)
// Var it is function scope
function exampleVar() {
    var x = 10;
    if (true) {
      var x = 20;  // ✅ Re-declaring `x`
      console.log(x); // 20
    }
    console.log(x); // 20 (Same variable, NOT block-scoped)
  }
  
  exampleVar();


  //3)
// same with let
// let it is block scope
  function exampleLet() {
    let  xx = 30;
    if (true) {
      let xx = 40;  
      console.log(xx); 
    }
    console.log(xx); 
  }
  
  exampleLet();


  // cosnt 

  function exampleConst() {
    const xxx = 10;
    if (true) {
      const xxx = 20;  // ✅ Block-scoped
      console.log(xxx); // 20
    }
    console.log(xxx); // 10
  }
  
  exampleConst();
  

  //next

  var num = 10
  num = 20
  console.log("nnum",num)

  let numLet = 50
  numLet = 100
  console.log("num let",numLet)


  
