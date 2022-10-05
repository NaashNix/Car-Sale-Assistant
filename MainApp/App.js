import React from 'react';
import 'react-native-gesture-handler';
import { Text } from 'react-native';
import Login from './Screens/Login/Login';
import Register from './Screens/Login/Register';
import Dashboard from './Screens/VehicleList/Dashboard';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
