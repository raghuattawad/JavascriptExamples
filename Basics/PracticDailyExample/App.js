import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



//how to pass the data from one component to another


// import React from 'react';
// import ChildComponent from './ChildComponent';

// const ParentComponent = () => {
//   const data = "Hello from Parent";

//   return (
//     <ChildComponent message={data} />
//   );
// };

// export default ParentComponent;


// import React from 'react';
// import { Text, View } from 'react-native';

// const ChildComponent = ({ message }) => {
//   return (
//     <View>
//       <Text>{message}</Text>
//     </View>
//   );
// };

// export default ChildComponent;