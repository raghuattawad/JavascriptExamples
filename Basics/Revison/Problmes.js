function findMinAndMaxNum(givenArray) {
    let getLargNum = givenArray[0];
  
    for (let i = 0; i < givenArray.length; i++) {
      if (givenArray[i] > getLargNum) {
        getLargNum = givenArray[i];
      }
    }
  
    console.log("Largest num", getLargNum);
  }
  
  // Example usage
  findMinAndMaxNum([1, 2, 3, 4, 5]);



  // next remove duplicates
  function removeDuplicates() {
    const givenString = "citibanktcs";
    const usedCharacters = [];
  
    for (let letter of givenString) {
      if (!usedCharacters.includes(letter)) {
        usedCharacters.push(letter);
      }
    }
  
    console.log("after removing", usedCharacters.join(''));
  }
  removeDuplicates()

  // reverse string 
  function reverseString(givenString) {
    let getOutput = "";
  for (let char of givenString){
   
getOutput = char.toLowerCase() + getOutput

  }
  
    console.log("outputReverse",getOutput);
  }
  
  // Example usage
  reverseString("raghu");


  // second largest number next

  function secondLargestInGivenArray() {
    let largest = 0;
    let secondLargest = 0;
    const givenArray = [3, 5, 8];
  
    for (let i = 0; i < givenArray.length; i++) {
        
      const value = givenArray[i];
  
      if (value > largest) {
        secondLargest = largest;
        largest = value;
      }
   
    }
  
    console.log("Second Largest Number is", secondLargest);
  }
  
  // Example usage
  secondLargestInGivenArray();
  

  // findAllDuplicatesInArray  in given array

  function findAllDuplicatesInArray(array) {
    let nums = [...array]; // Copy array to avoid mutating original
    let dupElements = [];
  
    for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1;
  
      if (nums[index] < 0) {
        dupElements.push(Math.abs(nums[i]));
      } else {
        nums[index] = -nums[index];
      }
    }
  
    return dupElements;
  }
  
  const input = [4, 3, 2, 7, 8, 2, 3, 1];
   console.log(findAllDuplicatesInArray(input)); 
// Output: [2, 3]


// flatten Array 

function flattenArray(array) {
  let result = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      result.push(...flattenArray(element)); // Recursively flatten nested arrays
    } else if (typeof element === 'number') {
      result.push(element); // Add if it's a number
    }
  }

  return result;
}
const nestedArray = [1, [2, [3, 4], 5], 6, ['not-a-number'], [7, [8, 9]]];

console.log(flattenArray(nestedArray)); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


const userObject = {
  name: "Suneel",
  location: ["Hyderabad", "Chennai"],
  office: {
    office1: "AT&T",
    office2: "AT&T1"
  },
  pin: [1234, 5678],
  working: false
};

const {name,location,office,pin,working} = Object

const [city1,city2] = location
const {off1,of2} =  office
const [pin1,pin2] = pin