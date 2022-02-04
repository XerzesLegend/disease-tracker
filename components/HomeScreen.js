import * as React from 'react';
import { StyleSheet,Text, View } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home this!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen


