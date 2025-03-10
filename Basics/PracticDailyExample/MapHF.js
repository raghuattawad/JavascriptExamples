const { get } = require("react-native/Libraries/TurboModule/TurboModuleRegistry")

let array  = [1,2,3,4,5]
const result  = array.map(Math.sqrt)
console.log(result)

// another example 



let getFromFunction = array.map(gettingFromMap)
console.log("getFromFunction",getFromFunction)

function gettingFromMap(num){

    return num * 2
}