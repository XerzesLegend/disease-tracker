import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.buttomButtons}>
        <Button title='Home'>

        </Button>

        <Button title='Contact Us'>

        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
  },
  buttomButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

