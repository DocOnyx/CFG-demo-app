import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ViewScreen from './src/screens/ViewScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen 
        name="Home" 
        component={ HomeScreen }
        options={{ title: 'Welcome' }}/>
        <Stack.Screen 
        name="View" 
        component={ ViewScreen }/>
        <Stack.Screen 
        name='Profile'
        component={ ProfileScreen }/>
      </Stack.Navigator>
     </NavigationContainer>
   
    
  );
}

