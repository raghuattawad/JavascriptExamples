const array1  = ["one","two","three"]
const array2 = ["Four","Five","Six"]

const newArray = [...array1,...array2]

console.log('Mergeinng',newArray)


//Rest

displayWithRest(1,2,3,4,5)

function displayWithRest(first,second,...restArg){
    console.log(first)
    console.log(second)
    console.log("reeeessst",restArg)
}


// One more example Passing Rest Props to a Child Component
// example :Name: John Doe
// Other Props: {"age":30,"occupation":"Developer"}

// one more way  Rest 


import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <CustomButton
      title="Press Me"
      onPress={() => alert('Button Pressed!')}
      style={{ backgroundColor: 'blue', padding: 10 }}
    />
  );
};

export default App;

