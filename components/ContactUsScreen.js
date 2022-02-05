import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';

function SettingsScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.buttons}><Button  title='Report a bug'/></View>
        <View style={styles.buttons}><Button title='Suggestions'/></View>
        <View style={styles.buttons}><Button title='Donate to Us'/></View>

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
  buttons: {
    padding: 30,
  }
});

export default SettingsScreen