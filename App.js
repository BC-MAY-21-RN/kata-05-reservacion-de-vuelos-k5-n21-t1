
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/components/main_components/SignUp';
import Login from './src/components/main_components/Login';
import MyFlights from './src/components/main_components/MyFlights';
import Booking from './src/components/main_components/Booking';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={SignUp}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="MyFlights" component={MyFlights}/>
        <Stack.Screen name="Booking" component={Booking}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;