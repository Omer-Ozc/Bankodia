import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/container/LoginPage'
import RegisterPage from './src/container/RegisterPage'
import MainPage from './src/container/MainPage'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
          <Stack.Screen name="MainPage" component={MainPage} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
