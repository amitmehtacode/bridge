import React, { useEffect } from 'react';
import {StyleSheet, Text, View, NativeModules} from 'react-native';
const {CalculatorModule} = NativeModules;

const App = () => {
  useEffect(() => {
    CalculatorModule.add(5, 10, (error, sum) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Sum is:', sum); // Output: Sum is: 15
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
