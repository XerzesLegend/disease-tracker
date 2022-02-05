import * as React from 'react';
import { StyleSheet,Text, View, SafeAreaView } from 'react-native';
import LineGraph from './LineGraph';

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2, // optional
    },
  ],
};

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Disease Tracker</Text>
      </View>
      <View style={styles.cases}>
        <Text>1000 Cases</Text>
        <LineGraph/>
      </View>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    padding: 30,
  },
  cases: {
    flex: 1,
    alignItems: 'center'
  }
});

export default HomeScreen


