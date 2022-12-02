import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ViewScreen from './src/screens/ViewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='View'>
        <Stack.Screen 
        name="Home" 
        component={ HomeScreen }
        options={{ title: 'Welcome' }}/>
        <Stack.Screen 
        name="View" 
        component={ ViewScreen }/>

      </Stack.Navigator>
       {/* <View> */}
    {/* <HomeScreen/> */}
    {/* <ViewScreen/> */}
    {/* </View> */}
     </NavigationContainer>
   
    
  );
}

