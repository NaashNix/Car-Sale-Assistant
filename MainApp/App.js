import React from 'react';
import Login from './Screens/Login/Login';
import Register from './Screens/Login/Register';
import Dashboard from './Screens/VehicleList/Dashboard';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddVehicle from './Screens/AddVehicle/AddVehicle';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AddVehicle" component={AddVehicle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
