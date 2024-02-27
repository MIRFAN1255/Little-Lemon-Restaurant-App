import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomScreen';
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* <Stack.Screen name="MenuItems" component={MenuItems} /> */}
        <Stack.Screen name="FeedbackForm" component={FeedbackForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  up: {
    backgroundColor: '#495E57',
    flex: 1,
  },
  main: {
    backgroundColor: '#495E57',
    flex: 1
  }
});

export default App;