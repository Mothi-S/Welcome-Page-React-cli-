import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import GuestScreen from './screens/GuestScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" 
        screenOptions={ {
        headerTintColor: "#fff",
        headerStyle:{
        backgroundColor: "#191970",}}}>

        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Guest" component={GuestScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name='Signup' component={SignupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};


export default App;
