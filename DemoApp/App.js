import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LogInScreen from './src/screens/LogInScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/navigators/navigators';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Log In'>
        <Stack.Screen 
            name="Log In" 
            component={ LogInScreen }
            options={{title: ''}}/>
          <Stack.Screen 
            name="Tabs" 
            component={ Tabs }
            options={{title: 'Log out'}}
        />
      </Stack.Navigator>
     </NavigationContainer>
   
    
  );
}

